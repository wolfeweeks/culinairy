import{S as L,i as X,s as Y,e as G,b as S,v as B,d as g,f as N,g as b,h as m,M as R,C as Z,F as x,G as ee,H as te,Q as oe,y as O,z as P,A as T,E as q,B as U,k as w,a as H,l as v,m as $,c as Q,n as E,D as C,q as A,r as M,O as W}from"../chunks/index.fb0448de.js";import{y as re,a as se}from"../chunks/index-e3d5d3f4.0daa1c3d.js";import{U as le,d as ne,C as ie}from"../chunks/Cookbook.fa49d774.js";import{s as ae,c as ce,a as z,t as fe,m as ue}from"../chunks/stores.cfc16b97.js";import{d as _e}from"../chunks/firebase.a69cd33d.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.861d9a93.js";import{R as de}from"../chunks/Recipe.85f55d10.js";const me=l=>({data:l&1,count:l&1}),j=l=>{var e;return{data:l[0],ref:l[1].ref,count:((e=l[0])==null?void 0:e.length)??0}},pe=l=>({data:l&1,count:l&1}),J=l=>{var e;return{data:l[0],ref:l[1].ref,count:((e=l[0])==null?void 0:e.length)??0}};function he(l){let e;const r=l[6].loading,t=Z(r,l,l[5],j);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,s){t&&t.m(o,s),e=!0},p(o,s){t&&t.p&&(!e||s&33)&&x(t,r,o,o[5],e?te(r,o[5],s,me):ee(o[5]),j)},i(o){e||(b(t,o),e=!0)},o(o){g(t,o),e=!1},d(o){t&&t.d(o)}}}function ge(l){let e;const r=l[6].default,t=Z(r,l,l[5],J);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,s){t&&t.m(o,s),e=!0},p(o,s){t&&t.p&&(!e||s&33)&&x(t,r,o,o[5],e?te(r,o[5],s,pe):ee(o[5]),J)},i(o){e||(b(t,o),e=!0)},o(o){g(t,o),e=!1},d(o){t&&t.d(o)}}}function be(l){let e,r,t,o;const s=[ge,he],n=[];function a(i,u){return i[0]!==void 0?0:1}return e=a(l),r=n[e]=s[e](l),{c(){r.c(),t=G()},l(i){r.l(i),t=G()},m(i,u){n[e].m(i,u),S(i,t,u),o=!0},p(i,[u]){let h=e;e=a(i),e===h?n[e].p(i,u):(B(),g(n[h],1,1,()=>{n[h]=null}),N(),r=n[e],r?r.p(i,u):(r=n[e]=s[e](i),r.c()),b(r,1),r.m(t.parentNode,t))},i(i){o||(b(r),o=!0)},o(i){g(r),o=!1},d(i){n[e].d(i),i&&m(t)}}}function ke(l,e,r){let t,o;R(l,ae,_=>r(7,t=_));let{$$slots:s={},$$scope:n}=e,{ref:a}=e,{firestore:i=t==null?void 0:t.firestore}=e,{startWith:u=void 0}=e,h=ce(i,a,u);return R(l,h,_=>r(0,o=_)),l.$$set=_=>{"ref"in _&&r(2,a=_.ref),"firestore"in _&&r(3,i=_.firestore),"startWith"in _&&r(4,u=_.startWith),"$$scope"in _&&r(5,n=_.$$scope)},[o,h,a,i,u,n,s]}class we extends L{constructor(e){super(),X(this,e,ke,be,Y,{ref:2,firestore:3,startWith:4})}}function ve(l){let e,r,t;return r=new ie({props:{recipes:l[10]}}),{c(){e=w("div"),O(r.$$.fragment),this.h()},l(o){e=v(o,"DIV",{class:!0});var s=$(e);P(r.$$.fragment,s),s.forEach(m),this.h()},h(){E(e,"class","bg-surface-200-700-token overflow-y-scroll min-w-[300px]")},m(o,s){S(o,e,s),T(r,e,null),t=!0},p(o,s){const n={};s&1024&&(n.recipes=o[10]),r.$set(n)},i(o){t||(b(r.$$.fragment,o),t=!0)},o(o){g(r.$$.fragment,o),t=!1},d(o){o&&m(e),U(r)}}}function $e(l){let e,r,t,o;function s(){return l[6](l[10])}return{c(){e=w("button"),r=A("Open Cookbook"),this.h()},l(n){e=v(n,"BUTTON",{class:!0});var a=$(e);r=M(a,"Open Cookbook"),a.forEach(m),this.h()},h(){E(e,"class","btn fixed bottom-4 right-4 px-4 py-2 bg-primary-400 text-black shadow-lg")},m(n,a){S(n,e,a),C(e,r),t||(o=q(e,"click",s),t=!0)},p(n,a){l=n},i:W,o:W,d(n){n&&m(e),t=!1,o()}}}function ye(l){let e,r;return{c(){e=w("p"),r=A("Select a recipe from the sidebar or generate a new recipe.")},l(t){e=v(t,"P",{});var o=$(e);r=M(o,"Select a recipe from the sidebar or generate a new recipe."),o.forEach(m)},m(t,o){S(t,e,o),C(e,r)},p:W,i:W,o:W,d(t){t&&m(e)}}}function De(l){let e,r,t;return r=new de({props:{recipe:l[2],loading:!1}}),{c(){e=w("div"),O(r.$$.fragment),this.h()},l(o){e=v(o,"DIV",{class:!0});var s=$(e);P(r.$$.fragment,s),s.forEach(m),this.h()},h(){E(e,"class","")},m(o,s){S(o,e,s),T(r,e,null),t=!0},p(o,s){const n={};s&4&&(n.recipe=o[2]),r.$set(n)},i(o){t||(b(r.$$.fragment,o),t=!0)},o(o){g(r.$$.fragment,o),t=!1},d(o){o&&m(e),U(r)}}}function K(l){let e,r,t,o,s;function n(){return l[7](l[9])}return{c(){e=w("div"),r=w("button"),t=A("Delete this recipe"),this.h()},l(a){e=v(a,"DIV",{class:!0});var i=$(e);r=v(i,"BUTTON",{class:!0});var u=$(r);t=M(u,"Delete this recipe"),u.forEach(m),i.forEach(m),this.h()},h(){E(r,"class","btn px-4 py-2 my-4 bg-error-400 text-black"),E(e,"class","ml-4 sm:mb-4 lg:mb-4 min-h-[75px] flex align-middle")},m(a,i){S(a,e,i),C(e,r),C(r,t),o||(s=q(r,"click",n),o=!0)},p(a,i){l=a},d(a){a&&m(e),o=!1,s()}}}function Ce(l){let e,r,t,o,s,n,a,i,u,h;const _=[$e,ve],f=[];function y(c,p){return c[1]?0:1}r=y(l),t=f[r]=_[r](l);const I=[De,ye],k=[];function F(c,p){return c[2]?0:1}a=F(l),i=k[a]=I[a](l);let d=l[2]&&K(l);return{c(){e=w("div"),t.c(),o=H(),s=w("div"),n=w("div"),i.c(),u=H(),d&&d.c(),this.h()},l(c){e=v(c,"DIV",{class:!0});var p=$(e);t.l(p),o=Q(p),s=v(p,"DIV",{class:!0});var D=$(s);n=v(D,"DIV",{class:!0});var V=$(n);i.l(V),V.forEach(m),u=Q(D),d&&d.l(D),D.forEach(m),p.forEach(m),this.h()},h(){E(n,"class","p-4 flex-grow"),E(s,"class","overflow-y-scroll w-full flex flex-col"),E(e,"class","flex h-[calc(100vh-75px)] overflow-y-clip")},m(c,p){S(c,e,p),f[r].m(e,null),C(e,o),C(e,s),C(s,n),k[a].m(n,null),C(s,u),d&&d.m(s,null),h=!0},p(c,p){let D=r;r=y(c),r===D?f[r].p(c,p):(B(),g(f[D],1,1,()=>{f[D]=null}),N(),t=f[r],t?t.p(c,p):(t=f[r]=_[r](c),t.c()),b(t,1),t.m(e,o));let V=a;a=F(c),a===V?k[a].p(c,p):(B(),g(k[V],1,1,()=>{k[V]=null}),N(),i=k[a],i?i.p(c,p):(i=k[a]=I[a](c),i.c()),b(i,1),i.m(n,null)),c[2]?d?d.p(c,p):(d=K(c),d.c(),d.m(s,null)):d&&(d.d(1),d=null)},i(c){h||(b(t),b(i),h=!0)},o(c){g(t),g(i),h=!1},d(c){c&&m(e),f[r].d(),k[a].d(),d&&d.d()}}}function Ee(l){let e,r;return e=new we({props:{ref:`users/${l[9].uid}/recipes`,$$slots:{default:[Ce,({data:t})=>({10:t}),({data:t})=>t?1024:0]},$$scope:{ctx:l}}}),{c(){O(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,o){T(e,t,o),r=!0},p(t,o){const s={};o&512&&(s.ref=`users/${t[9].uid}/recipes`),o&3590&&(s.$$scope={dirty:o,ctx:t}),e.$set(s)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){U(e,t)}}}function Se(l){let e,r,t,o;return oe(l[5]),e=new le({props:{$$slots:{default:[Ee,({user:s})=>({9:s}),({user:s})=>s?512:0]},$$scope:{ctx:l}}}),{c(){O(e.$$.fragment)},l(s){P(e.$$.fragment,s)},m(s,n){T(e,s,n),r=!0,t||(o=q(window,"resize",l[5]),t=!0)},p(s,[n]){const a={};n&2566&&(a.$$scope={dirty:n,ctx:s}),e.$set(a)},i(s){r||(b(e.$$.fragment,s),r=!0)},o(s){g(e.$$.fragment,s),r=!1},d(s){U(e,s),t=!1,o()}}}function Ve(l,e,r){let t,o;R(l,z,f=>r(2,o=f)),z.set(null);let s=0;function n(f){const y={position:"left",id:"cookbook",width:"w-[75%]",bgDrawer:"bg-surface-100 dark:bg-surface-700",meta:{recipes:f}};ne.open(y)}async function a(){const f=await new Promise(y=>{const I={modalClasses:"dark:!bg-surface-700",type:"confirm",title:"Please Confirm",body:"Are you sure you wish to proceed?",response:k=>{y(k)}};ue.trigger(I)});return console.log("closed"),f}async function i(f){if(await a()){console.log(`users/${f}/recipes/${o==null?void 0:o.id}`),await re(se(_e,`users/${f}/recipes/${o==null?void 0:o.id}`)),z.set(null);const y={background:"!bg-success-500",message:"Recipe successfully deleted",timeout:2e3};fe.trigger(y)}}function u(){r(0,s=window.innerWidth)}const h=f=>{n(f)},_=f=>{i(f.uid)};return l.$$.update=()=>{l.$$.dirty&1&&r(1,t=s<1024)},[s,t,o,n,i,u,h,_]}class Be extends L{constructor(e){super(),X(this,e,Ve,Se,Y,{})}}export{Be as component};
