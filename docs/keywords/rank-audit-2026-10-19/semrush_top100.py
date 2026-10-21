import csv,collections,re
def rd(f): return list(csv.DictReader(open(f,encoding='latin-1'),delimiter='\t'))
rows=rd('semrush-positions-ae-2026-09-25.tsv')+rd('semrush-positions-competitors2-ae-2026-09-26.tsv')
def vol(v):
    v=v.replace(',','');m=1
    if v.endswith('K'): m=1000;v=v[:-1]
    try: return float(v)*m
    except: return 0
MAP={'local pack':'LP','ai overview':'AIO','knowledge panel':'KP','people also ask':'PAA'}
def rank(p): return {'LP':0.5,'AIO':0.6,'KP':0.7,'PAA':0.8}.get(p, float(p) if p.replace('.','').isdigit() else 999)
ok=re.compile(r'(mac|imac|apple|iphone|ipad|laptop).*(repair|replace|fix|service|screen|battery|recovery|center|centre|shop|keyboard|logic|motherboard)|(repair|replacement|service center|fix).*(mac|apple|iphone|ipad|laptop)')
bad=re.compile(r'samsung|\bhp\b|dell|lenovo|asus|huawei|xiaomi|ps5|playstation|xbox|oppo|vivo|watch|airpods|nintendo|acer|msi|pixel|sony|oneplus|\btv\b')
K=collections.defaultdict(dict);V={}
for r in rows:
    k=r['keyword'].strip().lower(); p=MAP.get(r['position'].strip().lower(),r['position'].strip())
    if not ok.search(k) or bad.search(k) or rank(p)==999: continue
    d=r['domain']
    if d not in K[k] or rank(p)<rank(K[k][d]): K[k][d]=p
    V[k]=max(V.get(k,0),vol(r['volume']))
top=sorted(K,key=lambda k:-V[k])[:100]
doms=['macbook-repair-dubai.ae','fixsquad.ae','fixermanme.com','macrepair.ae','geeks.ae','mactechpro.ae','techfix.ae','celmetro.com','scorpionfix.com','800fixing.com','techmanme.com','mycelcare.com','azizitechnologies.ae']
with open('rank-audit-2026-10-19/semrush-competitor-positions-top100-2026-09-26.tsv','w') as f:
    f.write('keyword\tvolume\t'+'\t'.join(doms)+'\n')
    for k in top: f.write(k+'\t'+str(int(V[k]))+'\t'+'\t'.join(K[k].get(d,'') for d in doms)+'\n')
c=collections.Counter(min(K[k].items(),key=lambda x:rank(x[1]))[0] for k in top)
print('who is best-ranked on the top 100:',c.most_common())
us=[K[k].get('macbook-repair-dubai.ae','') for k in top]
print('us: top3',sum(1 for p in us if p and rank(p)<=3),'top10',sum(1 for p in us if p and rank(p)<=10),'11-100',sum(1 for p in us if p and 10<rank(p)<999),'none',us.count(''))
for k in top[:25]: print(f"{k:45} {int(V[k]):>6}", {d.split('.')[0][:9]:p for d,p in sorted(K[k].items(),key=lambda x:rank(x[1]))[:6]})
