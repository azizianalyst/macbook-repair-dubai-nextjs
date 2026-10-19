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
        j=js.get(t['id'],{})
        # repair module also stores device on the transaction itself
        mid=t.get('repair_model_id') or j.get('device_model_id')
        out.append(dict(src=src,loc=locs.get(t['location_id'],'?'),date=t['transaction_date'][:10],
          product=p.get('name',''),category=cats.get(p.get('category_id'),''),brand=brands.get(t.get('repair_brand_id') or j.get('brand_id'),''),
          model=models.get(mid,''),qty=float(l['quantity']),unit_ex=float(l['unit_price']),unit_inc=float(l['unit_price_inc_tax']),
          item_tax=float(l['item_tax'] or 0),line_tax_id=l['tax_id'],tx_tax_id=t['tax_id'],tx_tax=float(t['tax_amount'] or 0),
          tx_total=float(t['final_total'] or 0),tx_lines=None,defect=dclass((t.get('repair_defects') or '')+' '+(j.get('defects') or '')),disc=t.get('discount_amount'),tx=t['id']+src[0]))
from collections import Counter
c=Counter(r['tx'] for r in out)
for r in out: r['tx_lines']=c[r['tx']]
json.dump(out,open(sys.argv[4],'w'))
print(len(out))
