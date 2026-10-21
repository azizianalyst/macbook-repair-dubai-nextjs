# Builds a de-identified line table: no contact ids, names, notes or invoice numbers leave this script.
import sys,json; sys.path.insert(0,sys.argv[1]); from sqlparse import table
import re
def dclass(t):
    t=(t or '').lower()
    for k,ws in [('liquid',['liquid','water','spill','coffee','juice','tea ']),('data',['data recover','data transfer','backup']),
                 ('board',['logic','motherboard','board','no power','not power','dead','not turning','no display','short']),
                 ('screen',['screen','display','lcd','lid']),('battery',['battery']),('keyboard',['keyboard','keys']),
                 ('charging',['charging','charge','port','usb-c','magsafe']),('trackpad',['trackpad','touchpad']),
                 ('software',['software','os ','macos','install','format','password','slow'])]:
        if any(w in t for w in ws): return k
    return ''
def gclass(t):
    # Part grade as written on the invoice line (note) or product name. Only the class is kept.
    t=(t or '').lower()
    if re.search(r'refurb',t): return 'refurbished'
    if re.search(r'pull[\s-]?out',t) or (re.search(r'\bused\b',t) and re.search(r'original|genuine',t)): return 'original pull-out (used)'
    if re.search(r'\boem\b',t): return 'oem'
    if re.search(r'\bcopy\b|after[\s-]?market|compatible|\b[ab][\s-]?grade\b|grade[\s-]?[ab]\b',t): return 'aftermarket'
    if re.search(r'\boriginal\b|genuine',t): return 'original'
    if re.search(r'\bused\b',t): return 'used'
    if re.search(r'\bnew\b',t): return 'new (grade not stated)'
    return ''
WL=set('original genuine pullout pull out used new oem refurbished refurb grade a b copy aftermarket compatible apple screen display lcd panel assembly battery part parts quality high premium brand cell cycle condition replaced replacement installed with without warranty month months days genuine'.split())
from collections import Counter as _C
phr=_C()
out=[]
for f,src in [(sys.argv[2],'accounts'),(sys.argv[3],'appleforce')]:
    locs={l['id']:l['name'] for l in table(f,'business_locations')}
    prods={p['id']:p for p in table(f,'products')}
    cats={c['id']:c['name'] for c in table(f,'categories')}
    brands={b['id']:b['name'] for b in table(f,'brands')}
    models={m['id']:m['name'] for m in table(f,'repair_device_models')}
    tx={t['id']:t for t in table(f,'transactions') if t['type']=='sell' and t['status']=='final' and t['business_id']=='1'}
    js={}
    for j in table(f,'repair_job_sheets'):
        if j.get('transaction_id'): js[j['transaction_id']]=j
    for l in table(f,'transaction_sell_lines'):
        t=tx.get(l['transaction_id'])
        if not t or l.get('parent_sell_line_id'): continue
        p=prods.get(l['product_id'],{})
        _w=[w for w in re.findall(r'[a-z]+',(l.get('sell_line_note') or '').lower())]
        for _a,_b in zip(_w,_w[1:]):
            if _a in WL and _b in WL and ({_a,_b} & {'original','genuine','pullout','used','oem','refurbished','refurb','grade','copy','aftermarket','new'}): phr[_a+' '+_b]+=1
        j=js.get(t['id'],{})
        # repair module also stores device on the transaction itself
        mid=t.get('repair_model_id') or j.get('device_model_id')
        out.append(dict(src=src,loc=locs.get(t['location_id'],'?'),date=t['transaction_date'][:10],
          product=p.get('name',''),category=cats.get(p.get('category_id'),''),brand=brands.get(t.get('repair_brand_id') or j.get('brand_id'),''),
          model=models.get(mid,''),qty=float(l['quantity']),unit_ex=float(l['unit_price']),unit_inc=float(l['unit_price_inc_tax']),
          item_tax=float(l['item_tax'] or 0),line_tax_id=l['tax_id'],tx_tax_id=t['tax_id'],tx_tax=float(t['tax_amount'] or 0),
          tx_total=float(t['final_total'] or 0),tx_lines=None,grade=gclass((l.get('sell_line_note') or '')+' '+p.get('name','')),defect=dclass((t.get('repair_defects') or '')+' '+(j.get('defects') or '')),disc=t.get('discount_amount'),tx=t['id']+src[0]))
from collections import Counter
c=Counter(r['tx'] for r in out)
for r in out: r['tx_lines']=c[r['tx']]
json.dump(out,open(sys.argv[4],'w'))
print('grade by line:',_C(r['grade'] or '(not stated)' for r in out if re.search(r'display|screen|battery',r['product'],re.I)).most_common())
print(len(out)); print('phrases:',phr.most_common(25))
