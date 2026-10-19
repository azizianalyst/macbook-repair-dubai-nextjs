import re,sys
def cols(path):
    out={};cur=None
    for line in open(path,encoding='utf8',errors='replace'):
        m=re.match(r'CREATE TABLE `(\w+)`',line)
        if m: cur=m.group(1); out[cur]=[]; continue
        if cur:
            m=re.match(r'\s+`(\w+)`',line)
            if m: out[cur].append(m.group(1))
            elif line.startswith(')'): cur=None
    return out
def parse_values(s):
    rows=[];i=0;n=len(s)
    while i<n:
        if s[i]=='(':
            i+=1;row=[];
            while True:
                if s[i]=="'":
                    i+=1;buf=[]
                    while True:
                        c=s[i]
                        if c=='\\': buf.append({'n':'\n','r':'\r','t':'\t','0':'\0'}.get(s[i+1],s[i+1]));i+=2;continue
                        if c=="'":
                            if i+1<n and s[i+1]=="'": buf.append("'");i+=2;continue
                            i+=1;break
                        buf.append(c);i+=1
                    row.append(''.join(buf))
                else:
                    j=i
                    while s[j] not in ',)': j+=1
                    v=s[i:j].strip(); row.append(None if v=='NULL' else v); i=j
                if s[i]==',': i+=1;continue
                if s[i]==')': i+=1;break
            rows.append(row)
        else: i+=1
    return rows
def table(path,name):
    c=cols(path)[name];rows=[]
    pre='INSERT INTO `%s` VALUES'%name
    buf=None
    for line in open(path,encoding='utf8',errors='replace'):
        if buf is None and line.startswith(pre): buf=[line[len(pre):]]
        elif buf is not None: buf.append(line)
        if buf is not None and line.rstrip().endswith(');'):
            rows+=parse_values(''.join(buf).strip().rstrip(';')); buf=None
    return [dict(zip(c,r)) for r in rows]
