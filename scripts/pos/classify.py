"""Shared classification for the POS price scripts (analyze.py, publish.py)."""
import json,re,sys,statistics as st
from collections import defaultdict,Counter
def load_keep(path):
  L=[r for r in json.load(open(path)) if '2025-09-13'<=r['date']<='2026-09-12']
  sums=defaultdict(float)
  for r in L: sums[r['tx']]+=r['unit_ex']*r['qty']
  for r in L:
      r['taxed']=r['tx_tax']>0 or r['item_tax']>0
      ratio=(r['tx_total']/sums[r['tx']]) if sums[r['tx']] else 0
      # invoice total must reconcile with its lines (discount/VAT/rounding only); otherwise fall back to line price
      r['guard']=not (0.6<=ratio<=1.07)
      r['paid']=r['unit_ex']*((1.05 if r['taxed'] else 1.0) if r['guard'] else ratio)
  FAM=[ # (A-numbers / name patterns, family)
   (r'A2337|Air[^"]*M1|M1 A2337','MacBook Air 13" M1 (2020)'),
   (r'A2681|A3113|A3240|Air[^"]* M[234]\b|Air M[234]','MacBook Air 13" M2 / M3 / M4 (2022-2025)'),
   (r'A2941|A3114|A3241|Air 15','MacBook Air 15" (2023-2025)'),
   (r'A1932|A2179|A1965|A2389X','MacBook Air 13" Intel Retina (2018-2020)'),
   (r'A1466|A1369|A1405|A1496','MacBook Air 13" Intel (2012-2017)'),
   (r'A2338','MacBook Pro 13" M1 / M2 (2020-2022)'),
   (r'A1706|A1708|A1989|A2159|A2251|A2289|A1819|A1713|A1964|A2171|A1820X','MacBook Pro 13" Intel Touch Bar era (2016-2020)'),
   (r'A1502|A1582|A1425','MacBook Pro 13" Intel Retina (2013-2015)'),
   (r'A2442|A2779|A2918|A2992|A3112|A3185|A3401|A3434|14"|14 inch','MacBook Pro 14" (M1 Pro to M4, 2021-2025)'),
   (r'A1707|A1990|A1820|A1953|A1398','MacBook Pro 15" Intel (2016-2019)'),
   (r'A2141|A2113','MacBook Pro 16" Intel (2019)'),
   (r'A2485|A2780|A2991|A3186|A3403|A2527|16"','MacBook Pro 16" Apple silicon (2021-2025)'),
   (r'A1534|12"','MacBook 12" (2015-2017)'),
   (r'iMac','iMac'),(r'[Mm]ac [Mm]ini','Mac mini'),(r'iPhone','iPhone'),(r'iPad','iPad'),
  ]
  def family(r):
      # battery part numbers map to the laptop they fit
      s=r['product']+' '+r['model']
      s=s.replace('A2389','A2337').replace('A1965','A1932')
      for pat,f in FAM:
          if re.search(pat,s): return f
      return ''
  def rtype(r):
      p=r['product'].lower()
      if 'display' in p or 'screen' in p or 'lcd' in p: return 'Screen replacement'
      if 'battery' in p: return 'Battery replacement'
      if 'keyboard' in p: return 'Keyboard replacement'
      if 'trackpad' in p: return 'Trackpad replacement'
      if 'motherboard' in p or 'logic board' in p: return 'Logic board replacement (part)'
      if p=='device repair':
          return {'board':'Logic board / no-power repair','liquid':'Liquid damage repair','charging':'Charging / port repair',
                  'data':'Data recovery','software':'Software / OS','keyboard':'Keyboard replacement','screen':'Screen replacement',
                  'battery':'Battery replacement','trackpad':'Trackpad replacement'}.get(r['defect'],'General repair (fault not recorded)')
      if 'technical support' in p or 'troubleshoot' in p: return 'Diagnosis / troubleshooting'
      return ''
  excl=Counter(); keep=[]
  for r in L:
      if r['category'] in ('Used Macbooks','Used iMacs','Used iPhones','Accessories','Surface Parts'): excl['device sale / accessory / Surface']+=1; continue
      if re.search(r'surface|microsoft|hp |lenovo|dell|charger|adapter',r['product'],re.I): excl['non-Apple / accessory']+=1; continue
      if r['product']=='Device Repair' and r['brand'] not in ('Apple',''): excl['non-Apple device repair']+=1; continue
      t=rtype(r); f=family(r)
      if not t: excl['unclassified product']+=1; continue
      if not f: f='Mac (model not recorded)'
      if r['qty']!=1: excl['quantity >1 (trade)']+=1; continue
      r['type']=t; r['fam']=f; keep.append(r)

  return L,keep,excl
