import{S as us,i as fs,s as hs,k as u,a as b,l as f,m as _,h,c as v,n as i,Q as zt,ab as Xs,b as Y,D as t,ac as Zs,Y as nt,E as N,g as ie,v as ds,d as re,f as ps,ad as En,T as _s,ae as xs,N as yn,o as Pn,J as $s,K as en,q as C,r as O,u as Gt,a4 as Tn,aa as In,R as jt,a5 as Ln,a7 as Sn,L as Ke,w as Ft,af as Bn,O as it,ag as rs,y as _t,z as mt,ah as tn,A as gt,ai as cs,B as bt,M as Yt,aj as wn,a3 as Ht,ak as Nn,al as ln,W as Un}from"../chunks/index.fb0448de.js";import{S as R,u as _n,d as Cn,t as at,m as On}from"../chunks/stores.cfc16b97.js";import{R as Dn}from"../chunks/Recipe.85f55d10.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.861d9a93.js";import{f as sn,b as Mn,s as nn}from"../chunks/index.236b535f.js";import{a as mn,d as gn}from"../chunks/firebase.a69cd33d.js";import{g as an,p as An,_ as Rn}from"../chunks/index-e3d5d3f4.0daa1c3d.js";function rn(l,e,s){const a=l.slice();return a[43]=e[s].id,a[44]=e[s].val,a[46]=s,a}function cn(l,e,s){const a=l.slice();return a[47]=e[s],a}function on(l){let e,s=l[47]+"",a,n;return{c(){e=u("option"),a=C(s),this.h()},l(r){e=f(r,"OPTION",{});var c=_(e);a=O(c,s),c.forEach(h),this.h()},h(){e.__value=n=l[47],e.value=e.__value},m(r,c){Y(r,e,c),t(e,a)},p(r,c){c[0]&1&&s!==(s=r[47]+"")&&Gt(a,s),c[0]&1&&n!==(n=r[47])&&(e.__value=n,e.value=e.__value)},d(r){r&&h(e)}}}function un(l){let e,s=[],a=new Map,n,r,c,g=l[6];const B=m=>m[43];for(let m=0;m<g.length;m+=1){let k=rn(l,g,m),d=B(k);a.set(d,s[m]=fn(d,k))}return{c(){e=u("div");for(let m=0;m<s.length;m+=1)s[m].c();this.h()},l(m){e=f(m,"DIV",{class:!0});var k=_(e);for(let d=0;d<s.length;d+=1)s[d].l(k);k.forEach(h),this.h()},h(){i(e,"class",n="input-chip-list "+l[9])},m(m,k){Y(m,e,k);for(let d=0;d<s.length;d+=1)s[d]&&s[d].m(e,null);c=!0},p(m,k){if(l=m,k[0]&16488){g=l[6],ds();for(let d=0;d<s.length;d+=1)s[d].r();s=Tn(s,k,B,1,l,g,a,e,In,fn,null,rn);for(let d=0;d<s.length;d+=1)s[d].a();ps()}(!c||k[0]&512&&n!==(n="input-chip-list "+l[9]))&&i(e,"class",n)},i(m){if(!c){for(let k=0;k<g.length;k+=1)ie(s[k]);m&&zt(()=>{c&&(r||(r=jt(e,sn,{duration:l[3],opacity:0,y:-20},!0)),r.run(1))}),c=!0}},o(m){for(let k=0;k<s.length;k+=1)re(s[k]);m&&(r||(r=jt(e,sn,{duration:l[3],opacity:0,y:-20},!1)),r.run(0)),c=!1},d(m){m&&h(e);for(let k=0;k<s.length;k+=1)s[k].d();m&&r&&r.end()}}}function fn(l,e){let s,a,n,r=e[44]+"",c,g,B,m,k,d,V,T,P=it,S,L,w;function M(...E){return e[38](e[46],e[44],...E)}return{key:l,first:null,c(){s=u("div"),a=u("button"),n=u("span"),c=C(r),g=b(),B=u("span"),m=C("✕"),V=b(),this.h()},l(E){s=f(E,"DIV",{});var y=_(s);a=f(y,"BUTTON",{type:!0,class:!0});var A=_(a);n=f(A,"SPAN",{});var D=_(n);c=O(D,r),D.forEach(h),g=v(A),B=f(A,"SPAN",{});var q=_(B);m=O(q,"✕"),q.forEach(h),A.forEach(h),V=v(y),y.forEach(h),this.h()},h(){i(a,"type","button"),i(a,"class",k="chip "+e[5]),this.first=s},m(E,y){Y(E,s,y),t(s,a),t(a,n),t(n,c),t(a,g),t(a,B),t(B,m),t(s,V),S=!0,L||(w=[N(a,"click",M),N(a,"click",e[28]),N(a,"keypress",e[29]),N(a,"keydown",e[30]),N(a,"keyup",e[31])],L=!0)},p(E,y){e=E,(!S||y[0]&64)&&r!==(r=e[44]+"")&&Gt(c,r),(!S||y[0]&32&&k!==(k="chip "+e[5]))&&i(a,"class",k)},r(){T=s.getBoundingClientRect()},f(){Ln(s),P()},a(){P(),P=Sn(s,T,Mn,{duration:e[3]})},i(E){S||(E&&zt(()=>{S&&(d||(d=jt(a,nn,{duration:e[3],opacity:0},!0)),d.run(1))}),S=!0)},o(E){E&&(d||(d=jt(a,nn,{duration:e[3],opacity:0},!1)),d.run(0)),S=!1},d(E){E&&h(s),E&&d&&d.end(),L=!1,_s(w)}}}function Vn(l){let e,s,a,n,r,c,g,B,m,k,d,V,T,P,S,L,w=l[0],M=[];for(let y=0;y<w.length;y+=1)M[y]=on(cn(l,w,y));let E=l[6].length&&un(l);return{c(){e=u("div"),s=u("div"),a=u("select");for(let y=0;y<M.length;y+=1)M[y].c();n=b(),r=u("div"),c=u("form"),g=u("input"),d=b(),E&&E.c(),this.h()},l(y){e=f(y,"DIV",{class:!0});var A=_(e);s=f(A,"DIV",{class:!0});var D=_(s);a=f(D,"SELECT",{name:!0,tabindex:!0});var q=_(a);for(let z=0;z<M.length;z+=1)M[z].l(q);q.forEach(h),D.forEach(h),n=v(A),r=f(A,"DIV",{class:!0});var F=_(r);c=f(F,"FORM",{});var j=_(c);g=f(j,"INPUT",{type:!0,placeholder:!0,class:!0}),j.forEach(h),d=v(F),E&&E.l(F),F.forEach(h),A.forEach(h),this.h()},h(){i(a,"name",l[2]),a.multiple=!0,a.required=l[4],i(a,"tabindex","-1"),l[0]===void 0&&zt(()=>l[36].call(a)),i(s,"class","h-0 overflow-hidden"),i(g,"type","text"),i(g,"placeholder",B=l[15].placeholder??"Enter values..."),i(g,"class",m="input-chip-field "+l[8]),g.disabled=k=l[15].disabled,i(r,"class",V="input-chip-interface "+l[10]),i(e,"class",T="input-chip "+l[11]),Xs(e,"opacity-50",l[15].disabled)},m(y,A){Y(y,e,A),t(e,s),t(s,a);for(let D=0;D<M.length;D+=1)M[D]&&M[D].m(a,null);l[35](a),Zs(a,l[0]),t(e,n),t(e,r),t(r,c),t(c,g),nt(g,l[1]),t(r,d),E&&E.m(r,null),P=!0,S||(L=[N(a,"change",l[36]),N(g,"input",l[37]),N(g,"input",l[12]),N(g,"input",l[32]),N(g,"focus",l[33]),N(g,"blur",l[34]),N(c,"submit",l[13])],S=!0)},p(y,A){if(A[0]&1){w=y[0];let D;for(D=0;D<w.length;D+=1){const q=cn(y,w,D);M[D]?M[D].p(q,A):(M[D]=on(q),M[D].c(),M[D].m(a,null))}for(;D<M.length;D+=1)M[D].d(1);M.length=w.length}(!P||A[0]&4)&&i(a,"name",y[2]),(!P||A[0]&16)&&(a.required=y[4]),A[0]&1&&Zs(a,y[0]),(!P||A[0]&32768&&B!==(B=y[15].placeholder??"Enter values..."))&&i(g,"placeholder",B),(!P||A[0]&256&&m!==(m="input-chip-field "+y[8]))&&i(g,"class",m),(!P||A[0]&32768&&k!==(k=y[15].disabled))&&(g.disabled=k),A[0]&2&&g.value!==y[1]&&nt(g,y[1]),y[6].length?E?(E.p(y,A),A[0]&64&&ie(E,1)):(E=un(y),E.c(),ie(E,1),E.m(r,null)):E&&(ds(),re(E,1,1,()=>{E=null}),ps()),(!P||A[0]&1024&&V!==(V="input-chip-interface "+y[10]))&&i(r,"class",V),(!P||A[0]&2048&&T!==(T="input-chip "+y[11]))&&i(e,"class",T),(!P||A[0]&34816)&&Xs(e,"opacity-50",y[15].disabled)},i(y){P||(ie(E),P=!0)},o(y){re(E),P=!1},d(y){y&&h(e),En(M,y),l[35](null),E&&E.d(),S=!1,_s(L)}}}const qn="textarea cursor-pointer",Hn="space-y-4",Fn="flex flex-wrap gap-2",jn="unstyled bg-transparent border-0 !ring-0 p-0 w-full";function Yn(l,e,s){let a,n,r,c,g;const B=["input","name","value","whitelist","max","minlength","maxlength","allowUpperCase","allowDuplicates","validation","duration","required","chips","invalid","padding","rounded"];let m=xs(e,B);const k=yn();let{input:d=""}=e,{name:V}=e,{value:T=[]}=e,{whitelist:P=[]}=e,{max:S=-1}=e,{minlength:L=-1}=e,{maxlength:w=-1}=e,{allowUpperCase:M=!1}=e,{allowDuplicates:E=!1}=e,{validation:y=()=>!0}=e,{duration:A=150}=e,{required:D=!1}=e,{chips:q="variant-filled"}=e,{invalid:F="input-error"}=e,{padding:j="p-2"}=e,{rounded:z="rounded-container-token"}=e,se=!0,H=T.map(p=>({val:p,id:Math.random()}));function G(){s(0,T=[])}let ne;Pn(()=>{if(!ne.form)return;const p=ne.form;return p.addEventListener("reset",G),()=>{p.removeEventListener("reset",G)}});function ce(){s(26,se=!0)}function De(){return!(!d||(s(1,d=d.trim()),y!==void 0&&!y(d))||S!==-1&&T.length>=S||L!==-1&&d.length<L||w!==-1&&d.length>w||P.length>0&&!P.includes(d)||E===!1&&T.includes(d))}function Me(p){if(p.preventDefault(),s(26,se=De()),se===!1){k("invalid",{event:p,input:d});return}s(1,d=M?d:d.toLowerCase()),T.push(d),s(0,T),H.push({val:d,id:Math.random()}),s(6,H),s(0,T),k("add",{event:p,chipIndex:T.length-1,chipValue:d}),s(1,d="")}function J(p,Z,K){m.disabled||(T.splice(Z,1),s(0,T),H.splice(Z,1),s(6,H),s(0,T),k("remove",{event:p,chipIndex:Z,chipValue:K}))}function Q(p){Ke.call(this,l,p)}function Ae(p){Ke.call(this,l,p)}function oe(p){Ke.call(this,l,p)}function U(p){Ke.call(this,l,p)}function Re(p){Ke.call(this,l,p)}function W(p){Ke.call(this,l,p)}function X(p){Ke.call(this,l,p)}function rt(p){Ft[p?"unshift":"push"](()=>{ne=p,s(7,ne)})}function Ve(){T=Bn(this),s(0,T)}function ct(){d=this.value,s(1,d)}const ot=(p,Z,K)=>{J(K,p,Z)};return l.$$set=p=>{s(42,e=$s($s({},e),en(p))),s(15,m=xs(e,B)),"input"in p&&s(1,d=p.input),"name"in p&&s(2,V=p.name),"value"in p&&s(0,T=p.value),"whitelist"in p&&s(16,P=p.whitelist),"max"in p&&s(17,S=p.max),"minlength"in p&&s(18,L=p.minlength),"maxlength"in p&&s(19,w=p.maxlength),"allowUpperCase"in p&&s(20,M=p.allowUpperCase),"allowDuplicates"in p&&s(21,E=p.allowDuplicates),"validation"in p&&s(22,y=p.validation),"duration"in p&&s(3,A=p.duration),"required"in p&&s(4,D=p.required),"chips"in p&&s(5,q=p.chips),"invalid"in p&&s(23,F=p.invalid),"padding"in p&&s(24,j=p.padding),"rounded"in p&&s(25,z=p.rounded)},l.$$.update=()=>{l.$$.dirty[0]&75497472&&s(27,a=se===!1?F:""),s(11,n=`${qn} ${j} ${z} ${e.class??""} ${a}`),l.$$.dirty[0]&65&&s(6,H=T.map((p,Z)=>{var K;return((K=H[Z])==null?void 0:K.val)===p?H[Z]:{id:Math.random(),val:p}}))},s(10,r=`${Hn}`),s(9,c=`${Fn}`),s(8,g=`${jn}`),e=en(e),[T,d,V,A,D,q,H,ne,g,c,r,n,ce,Me,J,m,P,S,L,w,M,E,y,F,j,z,se,a,Q,Ae,oe,U,Re,W,X,rt,Ve,ct,ot]}class os extends us{constructor(e){super(),fs(this,e,Yn,Vn,hs,{input:1,name:2,value:0,whitelist:16,max:17,minlength:18,maxlength:19,allowUpperCase:20,allowDuplicates:21,validation:22,duration:3,required:4,chips:5,invalid:23,padding:24,rounded:25},null,[-1,-1])}}function zn(l){let e=l[1].cookingTime+"",s;return{c(){s=C(e)},l(a){s=O(a,e)},m(a,n){Y(a,s,n)},p(a,n){n[0]&2&&e!==(e=a[1].cookingTime+"")&&Gt(s,e)},d(a){a&&h(s)}}}function Gn(l){let e;return{c(){e=C("All Day")},l(s){e=O(s,"All Day")},m(s,a){Y(s,e,a)},p:it,d(s){s&&h(e)}}}function Jn(l){let e,s,a,n,r,c,g,B,m,k,d,V,T,P,S,L,w,M,E,y,A,D,q,F,j,z,se,H,G,ne,ce,De,Me,J,Q,Ae,oe,U,Re,W,X,rt,Ve,ct,ot,p,Z,K,Jt,Kt,x,_e,Qt,me,Wt,ge,Xt,Zt,xt,$t,Qe,el,tl,$,be,ve,ll,ut,sl,nl,ke,Ee,al,ft,il,rl,ye,Pe,cl,ht,ol,ul,Te,Ie,fl,dt,hl,dl,pl,_l,We,ml,gl,Xe,pt=l[1].servings+"",vt,bl,ee,vl,kl,El,Ze,yl,Pl,qe,Tl,te,Il,Ll,Sl,Le,ue,Bl,xe,wl,Nl,He,Ul,kt,Cl,fe,Ol,Dl,Ml,Al,Se,he,Rl,$e,Vl,ql,Fe,Hl,Et,Fl,de,jl,Yl,Be,je,zl,Gl,Ye,Jl,Kl,Ql,Wl,we,Ne,Xl,et,Zl,xl,ze,$l,yt,es,pe,ts,ls,Ue,Ge,ss,ns,Je,as,Ce,is,ms;function gs(I,o){return I[1].cookingTime==180?Gn:zn}let Pt=gs(l),ae=Pt(l);function bn(I){l[26](I)}let bs={name:"chips",placeholder:"To add an ingredient, type the name and press enter",disabled:!l[1].useMainIngredients};l[1].mainIngredients!==void 0&&(bs.value=l[1].mainIngredients),fe=new os({props:bs}),Ft.push(()=>rs(fe,"value",bn));function vn(I){l[29](I)}let vs={name:"chips",placeholder:"To add an ingredient, type the name and press enter",chips:"bg-primary-500/25 ring-1 ring-primary-500",disabled:!l[1].usePantry};l[1].pantry!==void 0&&(vs.value=l[1].pantry),de=new os({props:vs}),Ft.push(()=>rs(de,"value",vn));function kn(I){l[31](I)}let ks={name:"chips",placeholder:"To add an ingredient, type the name and press enter",chips:"bg-error-500/25 ring-1 ring-error-500",disabled:!l[1].useExclude};return l[1].exclude!==void 0&&(ks.value=l[1].exclude),pe=new os({props:ks}),Ft.push(()=>rs(pe,"value",kn)),{c(){e=u("div"),s=u("div"),a=u("h2"),n=C("Customize your recipe's settings:"),r=b(),c=u("h3"),g=C("Tools"),B=b(),m=u("div"),k=u("label"),d=u("input"),V=b(),T=u("p"),P=C("Stove"),S=b(),L=u("label"),w=u("input"),M=b(),E=u("p"),y=C("Oven"),A=b(),D=u("label"),q=u("input"),F=b(),j=u("p"),z=C("Microwave"),se=b(),H=u("label"),G=u("input"),ne=b(),ce=u("p"),De=C("Blender"),Me=b(),J=u("label"),Q=u("input"),Ae=b(),oe=u("p"),U=C("Air Fryer"),Re=b(),W=u("label"),X=u("input"),rt=b(),Ve=u("p"),ct=C("Instant Pot"),ot=b(),p=u("br"),Z=b(),K=u("h3"),Jt=C("Cooking Experience"),Kt=b(),x=u("select"),_e=u("option"),Qt=C("Novice"),me=u("option"),Wt=C("Intermediate"),ge=u("option"),Xt=C("Expert"),Zt=b(),xt=u("br"),$t=b(),Qe=u("h3"),el=C("Meal Type"),tl=b(),$=u("div"),be=u("label"),ve=u("input"),ll=b(),ut=u("p"),sl=C("Breakfast"),nl=b(),ke=u("label"),Ee=u("input"),al=b(),ft=u("p"),il=C("Lunch/Dinner"),rl=b(),ye=u("label"),Pe=u("input"),cl=b(),ht=u("p"),ol=C("Snack"),ul=b(),Te=u("label"),Ie=u("input"),fl=b(),dt=u("p"),hl=C("Dessert"),dl=b(),pl=u("br"),_l=b(),We=u("h3"),ml=C("Servings"),gl=b(),Xe=u("p"),vt=C(pt),bl=b(),ee=u("input"),vl=b(),kl=u("br"),El=b(),Ze=u("h3"),yl=C("Cooking time (minutes)"),Pl=b(),qe=u("p"),ae.c(),Tl=b(),te=u("input"),Il=b(),Ll=u("br"),Sl=b(),Le=u("label"),ue=u("input"),Bl=b(),xe=u("h3"),wl=C("Main Ingredients"),Nl=b(),He=u("p"),Ul=C("The generated recipe will consist of all of the ingredients listed"),Cl=b(),_t(fe.$$.fragment),Dl=b(),Ml=u("br"),Al=b(),Se=u("label"),he=u("input"),Rl=b(),$e=u("h3"),Vl=C("Use Pantry"),ql=b(),Fe=u("p"),Hl=C("The generated recipe will only consist of ingredients listed in your pantry"),Fl=b(),_t(de.$$.fragment),Yl=b(),Be=u("div"),je=u("button"),zl=C("Save This Pantry"),Gl=b(),Ye=u("button"),Jl=C("Reload Saved Pantry"),Kl=b(),Ql=u("br"),Wl=b(),we=u("label"),Ne=u("input"),Xl=b(),et=u("h3"),Zl=C("Use Exclude List"),xl=b(),ze=u("p"),$l=C("The generated recipe will not consist of ingredients listed in your exclude list"),es=b(),_t(pe.$$.fragment),ls=b(),Ue=u("div"),Ge=u("button"),ss=C("Save This Exclude List"),ns=b(),Je=u("button"),as=C("Reload Saved Exclude List"),this.h()},l(I){e=f(I,"DIV",{class:!0});var o=_(e);s=f(o,"DIV",{class:!0});var tt=_(s);a=f(tt,"H2",{class:!0});var lt=_(a);n=O(lt,"Customize your recipe's settings:"),lt.forEach(h),tt.forEach(h),r=v(o),c=f(o,"H3",{class:!0});var st=_(c);g=O(st,"Tools"),st.forEach(h),B=v(o),m=f(o,"DIV",{class:!0});var le=_(m);k=f(le,"LABEL",{class:!0});var Tt=_(k);d=f(Tt,"INPUT",{type:!0,class:!0}),V=v(Tt),T=f(Tt,"P",{});var Es=_(T);P=O(Es,"Stove"),Es.forEach(h),Tt.forEach(h),S=v(le),L=f(le,"LABEL",{class:!0});var It=_(L);w=f(It,"INPUT",{type:!0,class:!0}),M=v(It),E=f(It,"P",{});var ys=_(E);y=O(ys,"Oven"),ys.forEach(h),It.forEach(h),A=v(le),D=f(le,"LABEL",{class:!0});var Lt=_(D);q=f(Lt,"INPUT",{type:!0,class:!0}),F=v(Lt),j=f(Lt,"P",{});var Ps=_(j);z=O(Ps,"Microwave"),Ps.forEach(h),Lt.forEach(h),se=v(le),H=f(le,"LABEL",{class:!0});var St=_(H);G=f(St,"INPUT",{type:!0,class:!0}),ne=v(St),ce=f(St,"P",{});var Ts=_(ce);De=O(Ts,"Blender"),Ts.forEach(h),St.forEach(h),Me=v(le),J=f(le,"LABEL",{class:!0});var Bt=_(J);Q=f(Bt,"INPUT",{type:!0,class:!0}),Ae=v(Bt),oe=f(Bt,"P",{});var Is=_(oe);U=O(Is,"Air Fryer"),Is.forEach(h),Bt.forEach(h),Re=v(le),W=f(le,"LABEL",{class:!0});var wt=_(W);X=f(wt,"INPUT",{type:!0,class:!0}),rt=v(wt),Ve=f(wt,"P",{});var Ls=_(Ve);ct=O(Ls,"Instant Pot"),Ls.forEach(h),wt.forEach(h),le.forEach(h),ot=v(o),p=f(o,"BR",{}),Z=v(o),K=f(o,"H3",{class:!0});var Ss=_(K);Jt=O(Ss,"Cooking Experience"),Ss.forEach(h),Kt=v(o),x=f(o,"SELECT",{class:!0});var Nt=_(x);_e=f(Nt,"OPTION",{});var Bs=_(_e);Qt=O(Bs,"Novice"),Bs.forEach(h),me=f(Nt,"OPTION",{});var ws=_(me);Wt=O(ws,"Intermediate"),ws.forEach(h),ge=f(Nt,"OPTION",{});var Ns=_(ge);Xt=O(Ns,"Expert"),Ns.forEach(h),Nt.forEach(h),Zt=v(o),xt=f(o,"BR",{}),$t=v(o),Qe=f(o,"H3",{class:!0});var Us=_(Qe);el=O(Us,"Meal Type"),Us.forEach(h),tl=v(o),$=f(o,"DIV",{class:!0});var Oe=_($);be=f(Oe,"LABEL",{class:!0});var Ut=_(be);ve=f(Ut,"INPUT",{type:!0,class:!0}),ll=v(Ut),ut=f(Ut,"P",{});var Cs=_(ut);sl=O(Cs,"Breakfast"),Cs.forEach(h),Ut.forEach(h),nl=v(Oe),ke=f(Oe,"LABEL",{class:!0});var Ct=_(ke);Ee=f(Ct,"INPUT",{type:!0,class:!0}),al=v(Ct),ft=f(Ct,"P",{});var Os=_(ft);il=O(Os,"Lunch/Dinner"),Os.forEach(h),Ct.forEach(h),rl=v(Oe),ye=f(Oe,"LABEL",{class:!0});var Ot=_(ye);Pe=f(Ot,"INPUT",{type:!0,class:!0}),cl=v(Ot),ht=f(Ot,"P",{});var Ds=_(ht);ol=O(Ds,"Snack"),Ds.forEach(h),Ot.forEach(h),ul=v(Oe),Te=f(Oe,"LABEL",{class:!0});var Dt=_(Te);Ie=f(Dt,"INPUT",{type:!0,class:!0}),fl=v(Dt),dt=f(Dt,"P",{});var Ms=_(dt);hl=O(Ms,"Dessert"),Ms.forEach(h),Dt.forEach(h),Oe.forEach(h),dl=v(o),pl=f(o,"BR",{}),_l=v(o),We=f(o,"H3",{class:!0});var As=_(We);ml=O(As,"Servings"),As.forEach(h),gl=v(o),Xe=f(o,"P",{class:!0});var Rs=_(Xe);vt=O(Rs,pt),Rs.forEach(h),bl=v(o),ee=f(o,"INPUT",{class:!0,type:!0,min:!0,max:!0,step:!0}),vl=v(o),kl=f(o,"BR",{}),El=v(o),Ze=f(o,"H3",{class:!0});var Vs=_(Ze);yl=O(Vs,"Cooking time (minutes)"),Vs.forEach(h),Pl=v(o),qe=f(o,"P",{class:!0});var qs=_(qe);ae.l(qs),qs.forEach(h),Tl=v(o),te=f(o,"INPUT",{class:!0,type:!0,min:!0,max:!0,step:!0}),Il=v(o),Ll=f(o,"BR",{}),Sl=v(o),Le=f(o,"LABEL",{class:!0});var Mt=_(Le);ue=f(Mt,"INPUT",{type:!0,class:!0}),Bl=v(Mt),xe=f(Mt,"H3",{class:!0});var Hs=_(xe);wl=O(Hs,"Main Ingredients"),Hs.forEach(h),Mt.forEach(h),Nl=v(o),He=f(o,"P",{class:!0});var Fs=_(He);Ul=O(Fs,"The generated recipe will consist of all of the ingredients listed"),Fs.forEach(h),Cl=v(o),mt(fe.$$.fragment,o),Dl=v(o),Ml=f(o,"BR",{}),Al=v(o),Se=f(o,"LABEL",{class:!0});var At=_(Se);he=f(At,"INPUT",{type:!0,class:!0}),Rl=v(At),$e=f(At,"H3",{class:!0});var js=_($e);Vl=O(js,"Use Pantry"),js.forEach(h),At.forEach(h),ql=v(o),Fe=f(o,"P",{class:!0});var Ys=_(Fe);Hl=O(Ys,"The generated recipe will only consist of ingredients listed in your pantry"),Ys.forEach(h),Fl=v(o),mt(de.$$.fragment,o),Yl=v(o),Be=f(o,"DIV",{class:!0});var Rt=_(Be);je=f(Rt,"BUTTON",{class:!0});var zs=_(je);zl=O(zs,"Save This Pantry"),zs.forEach(h),Gl=v(Rt),Ye=f(Rt,"BUTTON",{class:!0});var Gs=_(Ye);Jl=O(Gs,"Reload Saved Pantry"),Gs.forEach(h),Rt.forEach(h),Kl=v(o),Ql=f(o,"BR",{}),Wl=v(o),we=f(o,"LABEL",{class:!0});var Vt=_(we);Ne=f(Vt,"INPUT",{type:!0,class:!0}),Xl=v(Vt),et=f(Vt,"H3",{class:!0});var Js=_(et);Zl=O(Js,"Use Exclude List"),Js.forEach(h),Vt.forEach(h),xl=v(o),ze=f(o,"P",{class:!0});var Ks=_(ze);$l=O(Ks,"The generated recipe will not consist of ingredients listed in your exclude list"),Ks.forEach(h),es=v(o),mt(pe.$$.fragment,o),ls=v(o),Ue=f(o,"DIV",{class:!0});var qt=_(Ue);Ge=f(qt,"BUTTON",{class:!0});var Qs=_(Ge);ss=O(Qs,"Save This Exclude List"),Qs.forEach(h),ns=v(qt),Je=f(qt,"BUTTON",{class:!0});var Ws=_(Je);as=O(Ws,"Reload Saved Exclude List"),Ws.forEach(h),qt.forEach(h),o.forEach(h),this.h()},h(){i(a,"class","h3 font-semibold"),i(s,"class","flex justify-center mb-4"),i(c,"class","h3 font-bold"),i(d,"type","checkbox"),i(d,"class","checkbox"),i(k,"class","flex items-center space-x-2"),i(w,"type","checkbox"),i(w,"class","checkbox"),i(L,"class","flex items-center space-x-2"),i(q,"type","checkbox"),i(q,"class","checkbox"),i(D,"class","flex items-center space-x-2"),i(G,"type","checkbox"),i(G,"class","checkbox"),i(H,"class","flex items-center space-x-2"),i(Q,"type","checkbox"),i(Q,"class","checkbox"),i(J,"class","flex items-center space-x-2"),i(X,"type","checkbox"),i(X,"class","checkbox"),i(W,"class","flex items-center space-x-2"),i(m,"class","grid grid-cols-2 gap-x-4 gap-y-4"),i(K,"class","h3 font-bold"),_e.__value=0,_e.value=_e.__value,me.__value=1,me.value=me.__value,ge.__value=2,ge.value=ge.__value,i(x,"class","select w-[150px]"),l[1].experience===void 0&&zt(()=>l[17].call(x)),i(Qe,"class","h3 font-bold"),i(ve,"type","checkbox"),i(ve,"class","checkbox"),i(be,"class","flex items-center space-x-2"),i(Ee,"type","checkbox"),i(Ee,"class","checkbox"),i(ke,"class","flex items-center space-x-2"),i(Pe,"type","checkbox"),i(Pe,"class","checkbox"),i(ye,"class","flex items-center space-x-2"),i(Ie,"type","checkbox"),i(Ie,"class","checkbox"),i(Te,"class","flex items-center space-x-2"),i($,"class","md:flex md:space-x-4 grid grid-cols-2 gap-y-4"),i(We,"class","h3 font-bold"),i(Xe,"class","text-xl"),i(ee,"class","w-2/3"),i(ee,"type","range"),i(ee,"min","1"),i(ee,"max","6"),i(ee,"step","1"),i(Ze,"class","h3 font-bold"),i(qe,"class","text-xl"),i(te,"class","w-2/3"),i(te,"type","range"),i(te,"min","15"),i(te,"max","180"),i(te,"step","5"),i(ue,"type","checkbox"),i(ue,"class","checkbox"),i(xe,"class","h3 font-bold"),i(Le,"class","flex items-center space-x-2"),i(He,"class",kt=l[1].useMainIngredients?"":"text-surface-400"),i(he,"type","checkbox"),i(he,"class","checkbox"),i($e,"class","h3 font-bold"),i(Se,"class","flex items-center space-x-2"),i(Fe,"class",Et=l[1].usePantry?"":"text-surface-400"),i(je,"class","btn bg-surface-900 dark:bg-surface-100 mt-2 text-white dark:text-surface-900"),i(Ye,"class","btn bg-surface-900 dark:bg-surface-100 mt-2 text-white dark:text-surface-900"),i(Be,"class","flex flex-col md:flex-row md:space-x-2"),i(Ne,"type","checkbox"),i(Ne,"class","checkbox"),i(et,"class","h3 font-bold"),i(we,"class","flex items-center space-x-2"),i(ze,"class",yt=l[1].useExclude?"":"text-surface-400"),i(Ge,"class","btn bg-surface-900 dark:bg-surface-100 mt-2 text-white dark:text-surface-900"),i(Je,"class","btn bg-surface-900 dark:bg-surface-100 mt-2 text-white dark:text-surface-900"),i(Ue,"class","flex flex-col md:flex-row md:space-x-2"),i(e,"class","bg-surface-100 dark:bg-surface-600 rounded-token p-4 flex flex-col items-center lg:xl:w-[50%] md:w-[75%] sm:w-[100%]")},m(I,o){Y(I,e,o),t(e,s),t(s,a),t(a,n),t(e,r),t(e,c),t(c,g),t(e,B),t(e,m),t(m,k),t(k,d),d.checked=l[1].tools.stove,t(k,V),t(k,T),t(T,P),t(m,S),t(m,L),t(L,w),w.checked=l[1].tools.oven,t(L,M),t(L,E),t(E,y),t(m,A),t(m,D),t(D,q),q.checked=l[1].tools.microwave,t(D,F),t(D,j),t(j,z),t(m,se),t(m,H),t(H,G),G.checked=l[1].tools.blender,t(H,ne),t(H,ce),t(ce,De),t(m,Me),t(m,J),t(J,Q),Q.checked=l[1].tools.airFryer,t(J,Ae),t(J,oe),t(oe,U),t(m,Re),t(m,W),t(W,X),X.checked=l[1].tools.instantPot,t(W,rt),t(W,Ve),t(Ve,ct),t(e,ot),t(e,p),t(e,Z),t(e,K),t(K,Jt),t(e,Kt),t(e,x),t(x,_e),t(_e,Qt),t(x,me),t(me,Wt),t(x,ge),t(ge,Xt),tn(x,l[1].experience,!0),t(e,Zt),t(e,xt),t(e,$t),t(e,Qe),t(Qe,el),t(e,tl),t(e,$),t($,be),t(be,ve),ve.checked=l[1].meals.breakfast,t(be,ll),t(be,ut),t(ut,sl),t($,nl),t($,ke),t(ke,Ee),Ee.checked=l[1].meals.lunchOrDinner,t(ke,al),t(ke,ft),t(ft,il),t($,rl),t($,ye),t(ye,Pe),Pe.checked=l[1].meals.snack,t(ye,cl),t(ye,ht),t(ht,ol),t($,ul),t($,Te),t(Te,Ie),Ie.checked=l[1].meals.dessert,t(Te,fl),t(Te,dt),t(dt,hl),t(e,dl),t(e,pl),t(e,_l),t(e,We),t(We,ml),t(e,gl),t(e,Xe),t(Xe,vt),t(e,bl),t(e,ee),nt(ee,l[1].servings),t(e,vl),t(e,kl),t(e,El),t(e,Ze),t(Ze,yl),t(e,Pl),t(e,qe),ae.m(qe,null),t(e,Tl),t(e,te),nt(te,l[1].cookingTime),t(e,Il),t(e,Ll),t(e,Sl),t(e,Le),t(Le,ue),ue.checked=l[1].useMainIngredients,t(Le,Bl),t(Le,xe),t(xe,wl),t(e,Nl),t(e,He),t(He,Ul),t(e,Cl),gt(fe,e,null),t(e,Dl),t(e,Ml),t(e,Al),t(e,Se),t(Se,he),he.checked=l[1].usePantry,t(Se,Rl),t(Se,$e),t($e,Vl),t(e,ql),t(e,Fe),t(Fe,Hl),t(e,Fl),gt(de,e,null),t(e,Yl),t(e,Be),t(Be,je),t(je,zl),t(Be,Gl),t(Be,Ye),t(Ye,Jl),t(e,Kl),t(e,Ql),t(e,Wl),t(e,we),t(we,Ne),Ne.checked=l[1].useExclude,t(we,Xl),t(we,et),t(et,Zl),t(e,xl),t(e,ze),t(ze,$l),t(e,es),gt(pe,e,null),t(e,ls),t(e,Ue),t(Ue,Ge),t(Ge,ss),t(Ue,ns),t(Ue,Je),t(Je,as),Ce=!0,is||(ms=[N(d,"change",l[11]),N(w,"change",l[12]),N(q,"change",l[13]),N(G,"change",l[14]),N(Q,"change",l[15]),N(X,"change",l[16]),N(x,"change",l[17]),N(ve,"change",l[18]),N(Ee,"change",l[19]),N(Pe,"change",l[20]),N(Ie,"change",l[21]),N(ee,"change",l[22]),N(ee,"input",l[22]),N(te,"change",l[23]),N(te,"input",l[23]),N(ue,"change",l[24]),N(ue,"change",l[25]),N(he,"change",l[27]),N(he,"change",l[28]),N(je,"click",l[5]),N(Ye,"click",l[6]),N(Ne,"change",l[30]),N(Ge,"click",l[8]),N(Je,"click",l[7])],is=!0)},p(I,o){o[0]&2&&(d.checked=I[1].tools.stove),o[0]&2&&(w.checked=I[1].tools.oven),o[0]&2&&(q.checked=I[1].tools.microwave),o[0]&2&&(G.checked=I[1].tools.blender),o[0]&2&&(Q.checked=I[1].tools.airFryer),o[0]&2&&(X.checked=I[1].tools.instantPot),o[0]&2&&tn(x,I[1].experience),o[0]&2&&(ve.checked=I[1].meals.breakfast),o[0]&2&&(Ee.checked=I[1].meals.lunchOrDinner),o[0]&2&&(Pe.checked=I[1].meals.snack),o[0]&2&&(Ie.checked=I[1].meals.dessert),(!Ce||o[0]&2)&&pt!==(pt=I[1].servings+"")&&Gt(vt,pt),o[0]&2&&nt(ee,I[1].servings),Pt===(Pt=gs(I))&&ae?ae.p(I,o):(ae.d(1),ae=Pt(I),ae&&(ae.c(),ae.m(qe,null))),o[0]&2&&nt(te,I[1].cookingTime),o[0]&2&&(ue.checked=I[1].useMainIngredients),(!Ce||o[0]&2&&kt!==(kt=I[1].useMainIngredients?"":"text-surface-400"))&&i(He,"class",kt);const tt={};o[0]&2&&(tt.disabled=!I[1].useMainIngredients),!Ol&&o[0]&2&&(Ol=!0,tt.value=I[1].mainIngredients,cs(()=>Ol=!1)),fe.$set(tt),o[0]&2&&(he.checked=I[1].usePantry),(!Ce||o[0]&2&&Et!==(Et=I[1].usePantry?"":"text-surface-400"))&&i(Fe,"class",Et);const lt={};o[0]&2&&(lt.disabled=!I[1].usePantry),!jl&&o[0]&2&&(jl=!0,lt.value=I[1].pantry,cs(()=>jl=!1)),de.$set(lt),o[0]&2&&(Ne.checked=I[1].useExclude),(!Ce||o[0]&2&&yt!==(yt=I[1].useExclude?"":"text-surface-400"))&&i(ze,"class",yt);const st={};o[0]&2&&(st.disabled=!I[1].useExclude),!ts&&o[0]&2&&(ts=!0,st.value=I[1].exclude,cs(()=>ts=!1)),pe.$set(st)},i(I){Ce||(ie(fe.$$.fragment,I),ie(de.$$.fragment,I),ie(pe.$$.fragment,I),Ce=!0)},o(I){re(fe.$$.fragment,I),re(de.$$.fragment,I),re(pe.$$.fragment,I),Ce=!1},d(I){I&&h(e),ae.d(),bt(fe),bt(de),bt(pe),is=!1,_s(ms)}}}function Kn(l,e,s){let a,n,r,c=it,g=()=>(c(),c=wn(a,U=>s(9,r=U)),a),B;Yt(l,R,U=>s(1,n=U)),l.$$.on_destroy.push(()=>c());const m=_n(mn);Yt(l,m,U=>s(10,B=U));function k(){Ht(R,n.useMainIngredients=!1,n)}function d(){Ht(R,n.usePantry=!1,n)}async function V(){const U=await new Promise(Re=>{const W={modalClasses:"dark:!bg-warning-600 dark:!text-surface-900 !bg-warning-50",type:"confirm",title:"Please Confirm",body:"Are you sure you wish to proceed?",response:X=>{Re(X)}};On.trigger(W)});return console.log("closed"),U}async function T(){if(await V())if(r){await an(a==null?void 0:a.ref,{pantry:n.pantry});const U={background:"!bg-success-500",message:"Pantry successfully updated",timeout:2e3};at.trigger(U)}else{const U={message:"You must sign in to save your settings",timeout:2e3};at.trigger(U)}}function P(){r&&(console.log(r),R.update(U=>({...U,pantry:r==null?void 0:r.pantry.slice()})))}function S(){r&&(console.log(r),R.update(U=>({...U,exclude:r==null?void 0:r.exclude.slice()})))}async function L(){if(await V())if(r){await an(a==null?void 0:a.ref,{exclude:n.exclude});const U={background:"!bg-success-500",message:"Exclude list successfully updated",timeout:2e3};at.trigger(U)}else{const U={message:"You must sign in to save your settings",timeout:2e3};at.trigger(U)}}function w(){n.tools.stove=this.checked,R.set(n)}function M(){n.tools.oven=this.checked,R.set(n)}function E(){n.tools.microwave=this.checked,R.set(n)}function y(){n.tools.blender=this.checked,R.set(n)}function A(){n.tools.airFryer=this.checked,R.set(n)}function D(){n.tools.instantPot=this.checked,R.set(n)}function q(){n.experience=Nn(this),R.set(n)}function F(){n.meals.breakfast=this.checked,R.set(n)}function j(){n.meals.lunchOrDinner=this.checked,R.set(n)}function z(){n.meals.snack=this.checked,R.set(n)}function se(){n.meals.dessert=this.checked,R.set(n)}function H(){n.servings=ln(this.value),R.set(n)}function G(){n.cookingTime=ln(this.value),R.set(n)}function ne(){n.useMainIngredients=this.checked,R.set(n)}const ce=U=>{U&&d()};function De(U){l.$$.not_equal(n.mainIngredients,U)&&(n.mainIngredients=U,R.set(n))}function Me(){n.usePantry=this.checked,R.set(n)}const J=U=>{U&&k()};function Q(U){l.$$.not_equal(n.pantry,U)&&(n.pantry=U,R.set(n))}function Ae(){n.useExclude=this.checked,R.set(n)}function oe(U){l.$$.not_equal(n.exclude,U)&&(n.exclude=U,R.set(n))}return l.$$.update=()=>{l.$$.dirty[0]&1024&&g(s(0,a=Cn(gn,`users/${B==null?void 0:B.uid}`))),l.$$.dirty[0]&512&&r&&(Ht(R,n.pantry=r==null?void 0:r.pantry.slice(),n),Ht(R,n.exclude=r==null?void 0:r.exclude.slice(),n))},[a,n,m,k,d,T,P,S,L,r,B,w,M,E,y,A,D,q,F,j,z,se,H,G,ne,ce,De,Me,J,Q,Ae,oe]}class Qn extends us{constructor(e){super(),fs(this,e,Kn,Jn,hs,{},null,[-1,-1])}}function Wn(l){let e,s,a,n,r;return n=new Dn({props:{loading:l[1],recipe:l[0]}}),{c(){e=u("img"),a=b(),_t(n.$$.fragment),this.h()},l(c){e=f(c,"IMG",{src:!0,alt:!0}),a=v(c),mt(n.$$.fragment,c),this.h()},h(){Un(e.src,s="")||i(e,"src",s),i(e,"alt","")},m(c,g){Y(c,e,g),Y(c,a,g),gt(n,c,g),r=!0},p(c,g){const B={};g&2&&(B.loading=c[1]),g&1&&(B.recipe=c[0]),n.$set(B)},i(c){r||(ie(n.$$.fragment,c),r=!0)},o(c){re(n.$$.fragment,c),r=!1},d(c){c&&h(e),c&&h(a),bt(n,c)}}}function Xn(l){let e,s,a;return s=new Qn({}),{c(){e=u("div"),_t(s.$$.fragment),this.h()},l(n){e=f(n,"DIV",{class:!0});var r=_(e);mt(s.$$.fragment,r),r.forEach(h),this.h()},h(){i(e,"class","flex items-center justify-center h-full")},m(n,r){Y(n,e,r),gt(s,e,null),a=!0},p:it,i(n){a||(ie(s.$$.fragment,n),a=!0)},o(n){re(s.$$.fragment,n),a=!1},d(n){n&&h(e),bt(s)}}}function hn(l){let e,s,a,n;return{c(){e=u("button"),s=C("Save to Cookbook"),this.h()},l(r){e=f(r,"BUTTON",{class:!0});var c=_(e);s=O(c,"Save to Cookbook"),c.forEach(h),this.h()},h(){i(e,"class","btn variant-filled-primary")},m(r,c){Y(r,e,c),t(e,s),a||(n=N(e,"click",l[5]),a=!0)},p:it,d(r){r&&h(e),a=!1,n()}}}function dn(l){let e,s,a,n,r;return{c(){e=u("button"),s=C("Generate Recipe"),this.h()},l(c){e=f(c,"BUTTON",{class:!0});var g=_(e);s=O(g,"Generate Recipe"),g.forEach(h),this.h()},h(){i(e,"class",a="btn variant-filled-secondary "+(l[0]?"mt-2 md:mt-0":"")+" md:mt-0")},m(c,g){Y(c,e,g),t(e,s),n||(r=N(e,"click",l[4]),n=!0)},p(c,g){g&1&&a!==(a="btn variant-filled-secondary "+(c[0]?"mt-2 md:mt-0":"")+" md:mt-0")&&i(e,"class",a)},d(c){c&&h(e),n=!1,r()}}}function pn(l){let e,s,a,n;return{c(){e=u("button"),s=C("Clear Recipe"),this.h()},l(r){e=f(r,"BUTTON",{class:!0});var c=_(e);s=O(c,"Clear Recipe"),c.forEach(h),this.h()},h(){i(e,"class","btn variant-ghost-error mt-2 md:mt-0")},m(r,c){Y(r,e,c),t(e,s),a||(n=N(e,"click",l[9]),a=!0)},p:it,d(r){r&&h(e),a=!1,n()}}}function Zn(l){let e,s,a,n,r,c,g,B,m;const k=[Xn,Wn],d=[];function V(L,w){return!L[0]&&!L[1]?0:1}a=V(l),n=d[a]=k[a](l);let T=l[0]&&!l[2]&&hn(l),P=!l[1]&&dn(l),S=l[0]&&pn(l);return{c(){e=u("div"),s=u("div"),n.c(),r=b(),c=u("div"),T&&T.c(),g=b(),P&&P.c(),B=b(),S&&S.c(),this.h()},l(L){e=f(L,"DIV",{class:!0});var w=_(e);s=f(w,"DIV",{});var M=_(s);n.l(M),M.forEach(h),r=v(w),c=f(w,"DIV",{class:!0});var E=_(c);T&&T.l(E),g=v(E),P&&P.l(E),B=v(E),S&&S.l(E),E.forEach(h),w.forEach(h),this.h()},h(){i(c,"class","flex flex-col md:flex-row md:space-x-2 justify-center mt-4 pb-4"),i(e,"class","m-4")},m(L,w){Y(L,e,w),t(e,s),d[a].m(s,null),t(e,r),t(e,c),T&&T.m(c,null),t(c,g),P&&P.m(c,null),t(c,B),S&&S.m(c,null),m=!0},p(L,[w]){let M=a;a=V(L),a===M?d[a].p(L,w):(ds(),re(d[M],1,1,()=>{d[M]=null}),ps(),n=d[a],n?n.p(L,w):(n=d[a]=k[a](L),n.c()),ie(n,1),n.m(s,null)),L[0]&&!L[2]?T?T.p(L,w):(T=hn(L),T.c(),T.m(c,g)):T&&(T.d(1),T=null),L[1]?P&&(P.d(1),P=null):P?P.p(L,w):(P=dn(L),P.c(),P.m(c,B)),L[0]?S?S.p(L,w):(S=pn(L),S.c(),S.m(c,null)):S&&(S.d(1),S=null)},i(L){m||(ie(n),m=!0)},o(L){re(n),m=!1},d(L){L&&h(e),d[a].d(),T&&T.d(),P&&P.d(),S&&S.d()}}}function xn(l,e,s){let a,n,r,c;Yt(l,R,P=>s(8,c=P));let g,B,m=!1,k=_n(mn);Yt(l,k,P=>s(7,r=P));async function d(){s(0,g=void 0),s(1,B=!0),s(2,m=!1);const S=await(await fetch("/generate",{method:"POST",body:JSON.stringify({settings:a}),headers:{"content-type":"application/json"}})).json();s(0,g=S),s(1,B=!1)}async function V(){if(n){await An(n,g),s(2,m=!0);const P={background:"!bg-success-500",message:"Recipe saved successfully",timeout:2e3};at.trigger(P)}else{const P={message:"You must sign in to save recipes",timeout:2e3};at.trigger(P)}}const T=()=>s(0,g=void 0);return l.$$.update=()=>{l.$$.dirty&256&&(a=c),l.$$.dirty&128&&s(6,n=r?Rn(gn,`users/${r.uid}/recipes`):void 0),l.$$.dirty&64&&console.log(n==null?void 0:n.path)},[g,B,m,k,d,V,n,r,c,T]}class ia extends us{constructor(e){super(),fs(this,e,xn,Zn,hs,{})}}export{ia as component};