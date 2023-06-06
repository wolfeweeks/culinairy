/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Xh=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Mc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,u=c?n[r+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(d=64)),i.push(t[l],t[h],t[d],t[m])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Oc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Xh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const h=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||a==null||u==null||h==null)throw new Zh;const d=s<<2|a>>4;if(i.push(d),u!==64){const m=a<<4&240|u>>2;if(i.push(m),h!==64){const w=u<<6&192|h;i.push(w)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Zh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ed=function(n){const e=Oc(n);return Mc.encodeByteArray(e,!0)},Pi=function(n){return ed(n).replace(/\./g,"")},Lc=function(n){try{return Mc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function td(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!nd(t)||(n[t]=td(n[t],e[t]));return n}function nd(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=()=>id().__FIREBASE_DEFAULTS__,sd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},od=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Lc(n[1]);return e&&JSON.parse(e)},tr=()=>{try{return rd()||sd()||od()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xc=n=>{var e,t;return(t=(e=tr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ad=n=>{const e=xc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Fc=()=>{var n;return(n=tr())===null||n===void 0?void 0:n.config},Uc=n=>{var e;return(e=tr())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Pi(JSON.stringify(t)),Pi(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ld(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ne())}function _I(){var n;const e=(n=tr())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function SI(){return typeof self=="object"&&self.self===self}function hd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function dd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fd(){const n=ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function pd(){try{return typeof indexedDB=="object"}catch{return!1}}function md(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="FirebaseError";class Re extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=gd,Object.setPrototypeOf(this,Re.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hn.prototype.create)}}class Hn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?yd(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Re(r,a,i)}}function yd(n,e){return n.replace(vd,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const vd=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function wd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Oi(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(la(s)&&la(o)){if(!Oi(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function la(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function hn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function dn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Id(n,e){const t=new Ed(n,e);return t.subscribe.bind(t)}class Ed{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Td(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=jr),r.error===void 0&&(r.error=jr),r.complete===void 0&&(r.complete=jr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Td(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function jr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(n){return n&&n._delegate?n._delegate:n}class It{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new cd;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ad(e))try{this.getOrInitializeService({instanceIdentifier:ht})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ht){return this.instances.has(e)}getOptions(e=ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Sd(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ht){return this.component?this.component.multipleInstances?e:ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sd(n){return n===ht?void 0:n}function Ad(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _d(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=[];var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const Vc={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Cd=D.INFO,bd={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Rd=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=bd[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hs{constructor(e){this.name=e,this._logLevel=Cd,this._logHandler=Rd,this._userLogHandler=null,zs.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}function Nd(n){zs.forEach(e=>{e.setLogLevel(n)})}function Dd(n,e){for(const t of zs){let i=null;e&&e.level&&(i=Vc[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(r,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(i??r.logLevel)&&n({level:D[s].toLowerCase(),message:a,args:o,type:r.name})}}}const Pd=(n,e)=>e.some(t=>n instanceof t);let ha,da;function Od(){return ha||(ha=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Md(){return da||(da=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $c=new WeakMap,fs=new WeakMap,Bc=new WeakMap,qr=new WeakMap,Ws=new WeakMap;function Ld(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Je(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&$c.set(t,n)}).catch(()=>{}),Ws.set(e,n),e}function xd(n){if(fs.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});fs.set(n,e)}let ps={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return fs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Bc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Je(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Fd(n){ps=n(ps)}function Ud(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(zr(this),e,...t);return Bc.set(i,e.sort?e.sort():[e]),Je(i)}:Md().includes(n)?function(...e){return n.apply(zr(this),e),Je($c.get(this))}:function(...e){return Je(n.apply(zr(this),e))}}function Vd(n){return typeof n=="function"?Ud(n):(n instanceof IDBTransaction&&xd(n),Pd(n,Od())?new Proxy(n,ps):n)}function Je(n){if(n instanceof IDBRequest)return Ld(n);if(qr.has(n))return qr.get(n);const e=Vd(n);return e!==n&&(qr.set(n,e),Ws.set(e,n)),e}const zr=n=>Ws.get(n);function $d(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),a=Je(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Je(o.result),c.oldVersion,c.newVersion,Je(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Bd=["get","getKey","getAll","getAllKeys","count"],jd=["put","add","delete","clear"],Hr=new Map;function fa(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Hr.get(e))return Hr.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=jd.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Bd.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&c.done]))[0]};return Hr.set(e,s),s}Fd(n=>({...n,get:(e,t,i)=>fa(e,t)||n.get(e,t,i),has:(e,t)=>!!fa(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zd(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function zd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ms="@firebase/app",pa="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new Hs("@firebase/app"),Hd="@firebase/app-compat",Wd="@firebase/analytics-compat",Kd="@firebase/analytics",Gd="@firebase/app-check-compat",Qd="@firebase/app-check",Yd="@firebase/auth",Jd="@firebase/auth-compat",Xd="@firebase/database",Zd="@firebase/database-compat",ef="@firebase/functions",tf="@firebase/functions-compat",nf="@firebase/installations",rf="@firebase/installations-compat",sf="@firebase/messaging",of="@firebase/messaging-compat",af="@firebase/performance",cf="@firebase/performance-compat",uf="@firebase/remote-config",lf="@firebase/remote-config-compat",hf="@firebase/storage",df="@firebase/storage-compat",ff="@firebase/firestore",pf="@firebase/firestore-compat",mf="firebase",gf="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="[DEFAULT]",yf={[ms]:"fire-core",[Hd]:"fire-core-compat",[Kd]:"fire-analytics",[Wd]:"fire-analytics-compat",[Qd]:"fire-app-check",[Gd]:"fire-app-check-compat",[Yd]:"fire-auth",[Jd]:"fire-auth-compat",[Xd]:"fire-rtdb",[Zd]:"fire-rtdb-compat",[ef]:"fire-fn",[tf]:"fire-fn-compat",[nf]:"fire-iid",[rf]:"fire-iid-compat",[sf]:"fire-fcm",[of]:"fire-fcm-compat",[af]:"fire-perf",[cf]:"fire-perf-compat",[uf]:"fire-rc",[lf]:"fire-rc-compat",[hf]:"fire-gcs",[df]:"fire-gcs-compat",[ff]:"fire-fst",[pf]:"fire-fst-compat","fire-js":"fire-js",[mf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt=new Map,Cn=new Map;function jc(n,e){try{n.container.addComponent(e)}catch(t){Et.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function vf(n,e){n.container.addOrOverwriteComponent(e)}function Tt(n){const e=n.name;if(Cn.has(e))return Et.debug(`There were multiple attempts to register component ${e}.`),!1;Cn.set(e,n);for(const t of tt.values())jc(t,n);return!0}function Wn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function wf(n,e,t=kn){Wn(n,e).clearInstance(t)}function If(){Cn.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Me=new Hn("app","Firebase",Ef);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new It("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Me.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=gf;function qc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:kn,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Me.create("bad-app-name",{appName:String(r)});if(t||(t=Fc()),!t)throw Me.create("no-options");const s=tt.get(r);if(s){if(Oi(t,s.options)&&Oi(i,s.config))return s;throw Me.create("duplicate-app",{appName:r})}const o=new kd(r);for(const c of Cn.values())o.addComponent(c);const a=new Tf(t,i,o);return tt.set(r,a),a}function Ks(n=kn){const e=tt.get(n);if(!e&&n===kn&&Fc())return qc();if(!e)throw Me.create("no-app",{appName:n});return e}function _f(){return Array.from(tt.values())}async function Sf(n){const e=n.name;tt.has(e)&&(tt.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function Xe(n,e,t){var i;let r=(i=yf[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Et.warn(a.join(" "));return}Tt(new It(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function Af(n,e){if(n!==null&&typeof n!="function")throw Me.create("invalid-log-argument");Dd(n,e)}function kf(n){Nd(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="firebase-heartbeat-database",bf=1,bn="firebase-heartbeat-store";let Wr=null;function zc(){return Wr||(Wr=$d(Cf,bf,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(bn)}}}).catch(n=>{throw Me.create("idb-open",{originalErrorMessage:n.message})})),Wr}async function Rf(n){try{return await(await zc()).transaction(bn).objectStore(bn).get(Hc(n))}catch(e){if(e instanceof Re)Et.warn(e.message);else{const t=Me.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Et.warn(t.message)}}}async function ma(n,e){try{const i=(await zc()).transaction(bn,"readwrite");await i.objectStore(bn).put(e,Hc(n)),await i.done}catch(t){if(t instanceof Re)Et.warn(t.message);else{const i=Me.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Et.warn(i.message)}}}function Hc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=1024,Df=30*24*60*60*1e3;class Pf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Mf(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ga();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=Df}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ga(),{heartbeatsToSend:t,unsentEntries:i}=Of(this._heartbeatsCache.heartbeats),r=Pi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ga(){return new Date().toISOString().substring(0,10)}function Of(n,e=Nf){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),ya(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),ya(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Mf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pd()?md().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Rf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return ma(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return ma(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ya(n){return Pi(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(n){Tt(new It("platform-logger",e=>new qd(e),"PRIVATE")),Tt(new It("heartbeat",e=>new Pf(e),"PRIVATE")),Xe(ms,pa,n),Xe(ms,pa,"esm2017"),Xe("fire-js","")}Lf("");const kI=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Re,SDK_VERSION:kt,_DEFAULT_ENTRY_NAME:kn,_addComponent:jc,_addOrOverwriteComponent:vf,_apps:tt,_clearComponents:If,_components:Cn,_getProvider:Wn,_registerComponent:Tt,_removeServiceInstance:wf,deleteApp:Sf,getApp:Ks,getApps:_f,initializeApp:qc,onLog:Af,registerVersion:Xe,setLogLevel:kf},Symbol.toStringTag,{value:"Module"}));var xf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,Gs=Gs||{},A=xf||self;function Mi(){}function nr(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Kn(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Ff(n){return Object.prototype.hasOwnProperty.call(n,Kr)&&n[Kr]||(n[Kr]=++Uf)}var Kr="closure_uid_"+(1e9*Math.random()>>>0),Uf=0;function Vf(n,e,t){return n.call.apply(n.bind,arguments)}function $f(n,e,t){if(!n)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),n.apply(e,r)}}return function(){return n.apply(e,arguments)}}function ae(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ae=Vf:ae=$f,ae.apply(null,arguments)}function di(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var i=t.slice();return i.push.apply(i,arguments),n.apply(this,i)}}function J(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function ot(){this.s=this.s,this.o=this.o}var Bf=0;ot.prototype.s=!1;ot.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),Bf!=0)&&Ff(this)};ot.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Wc=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Qs(n){const e=n.length;if(0<e){const t=Array(e);for(let i=0;i<e;i++)t[i]=n[i];return t}return[]}function va(n,e){for(let t=1;t<arguments.length;t++){const i=arguments[t];if(nr(i)){const r=n.length||0,s=i.length||0;n.length=r+s;for(let o=0;o<s;o++)n[r+o]=i[o]}else n.push(i)}}function ce(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var jf=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{A.addEventListener("test",Mi,e),A.removeEventListener("test",Mi,e)}catch{}return n}();function Li(n){return/^[\s\xa0]*$/.test(n)}var wa=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function Gr(n,e){return n<e?-1:n>e?1:0}function ir(){var n=A.navigator;return n&&(n=n.userAgent)?n:""}function _e(n){return ir().indexOf(n)!=-1}function Ys(n){return Ys[" "](n),n}Ys[" "]=Mi;function Kc(n,e,t){return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var qf=_e("Opera"),zt=_e("Trident")||_e("MSIE"),Gc=_e("Edge"),gs=Gc||zt,Qc=_e("Gecko")&&!(ir().toLowerCase().indexOf("webkit")!=-1&&!_e("Edge"))&&!(_e("Trident")||_e("MSIE"))&&!_e("Edge"),zf=ir().toLowerCase().indexOf("webkit")!=-1&&!_e("Edge");function Yc(){var n=A.document;return n?n.documentMode:void 0}var xi;e:{var Qr="",Yr=function(){var n=ir();if(Qc)return/rv:([^\);]+)(\)|;)/.exec(n);if(Gc)return/Edge\/([\d\.]+)/.exec(n);if(zt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(zf)return/WebKit\/(\S+)/.exec(n);if(qf)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Yr&&(Qr=Yr?Yr[1]:""),zt){var Jr=Yc();if(Jr!=null&&Jr>parseFloat(Qr)){xi=String(Jr);break e}}xi=Qr}var Hf={};function Wf(){return Kc(Hf,9,function(){let n=0;const e=wa(String(xi)).split("."),t=wa("9").split("."),i=Math.max(e.length,t.length);for(let o=0;n==0&&o<i;o++){var r=e[o]||"",s=t[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;n=Gr(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||Gr(r[2].length==0,s[2].length==0)||Gr(r[2],s[2]),r=r[3],s=s[3]}while(n==0)}return 0<=n})}var ys;if(A.document&&zt){var Ia=Yc();ys=Ia||parseInt(xi,10)||void 0}else ys=void 0;var Kf=ys;function Rn(n,e){if(ce.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,i=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Qc){e:{try{Ys(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Gf[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Rn.$.h.call(this)}}J(Rn,ce);var Gf={2:"touch",3:"pen",4:"mouse"};Rn.prototype.h=function(){Rn.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Gn="closure_listenable_"+(1e6*Math.random()|0),Qf=0;function Yf(n,e,t,i,r){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!i,this.la=r,this.key=++Qf,this.fa=this.ia=!1}function rr(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Js(n,e,t){for(const i in n)e.call(t,n[i],i,n)}function Jc(n){const e={};for(const t in n)e[t]=n[t];return e}const Ea="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xc(n,e){let t,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(t in i)n[t]=i[t];for(let s=0;s<Ea.length;s++)t=Ea[s],Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}}function sr(n){this.src=n,this.g={},this.h=0}sr.prototype.add=function(n,e,t,i,r){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=ws(n,e,i,r);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new Yf(e,this.src,s,!!i,r),e.ia=t,n.push(e)),e};function vs(n,e){var t=e.type;if(t in n.g){var i=n.g[t],r=Wc(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(rr(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ws(n,e,t,i){for(var r=0;r<n.length;++r){var s=n[r];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==i)return r}return-1}var Xs="closure_lm_"+(1e6*Math.random()|0),Xr={};function Zc(n,e,t,i,r){if(i&&i.once)return tu(n,e,t,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Zc(n,e[s],t,i,r);return null}return t=to(t),n&&n[Gn]?n.O(e,t,Kn(i)?!!i.capture:!!i,r):eu(n,e,t,!1,i,r)}function eu(n,e,t,i,r,s){if(!e)throw Error("Invalid event type");var o=Kn(r)?!!r.capture:!!r,a=eo(n);if(a||(n[Xs]=a=new sr(n)),t=a.add(e,t,i,o,s),t.proxy)return t;if(i=Jf(),t.proxy=i,i.src=n,i.listener=t,n.addEventListener)jf||(r=o),r===void 0&&(r=!1),n.addEventListener(e.toString(),i,r);else if(n.attachEvent)n.attachEvent(iu(e.toString()),i);else if(n.addListener&&n.removeListener)n.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return t}function Jf(){function n(t){return e.call(n.src,n.listener,t)}const e=Xf;return n}function tu(n,e,t,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)tu(n,e[s],t,i,r);return null}return t=to(t),n&&n[Gn]?n.P(e,t,Kn(i)?!!i.capture:!!i,r):eu(n,e,t,!0,i,r)}function nu(n,e,t,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)nu(n,e[s],t,i,r);else i=Kn(i)?!!i.capture:!!i,t=to(t),n&&n[Gn]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=ws(s,t,i,r),-1<t&&(rr(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=eo(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ws(e,t,i,r)),(t=-1<n?e[n]:null)&&Zs(t))}function Zs(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Gn])vs(e.i,n);else{var t=n.type,i=n.proxy;e.removeEventListener?e.removeEventListener(t,i,n.capture):e.detachEvent?e.detachEvent(iu(t),i):e.addListener&&e.removeListener&&e.removeListener(i),(t=eo(e))?(vs(t,n),t.h==0&&(t.src=null,e[Xs]=null)):rr(n)}}}function iu(n){return n in Xr?Xr[n]:Xr[n]="on"+n}function Xf(n,e){if(n.fa)n=!0;else{e=new Rn(e,this);var t=n.listener,i=n.la||n.src;n.ia&&Zs(n),n=t.call(i,e)}return n}function eo(n){return n=n[Xs],n instanceof sr?n:null}var Zr="__closure_events_fn_"+(1e9*Math.random()>>>0);function to(n){return typeof n=="function"?n:(n[Zr]||(n[Zr]=function(e){return n.handleEvent(e)}),n[Zr])}function Y(){ot.call(this),this.i=new sr(this),this.S=this,this.J=null}J(Y,ot);Y.prototype[Gn]=!0;Y.prototype.removeEventListener=function(n,e,t,i){nu(this,n,e,t,i)};function te(n,e){var t,i=n.J;if(i)for(t=[];i;i=i.J)t.push(i);if(n=n.S,i=e.type||e,typeof e=="string")e=new ce(e,n);else if(e instanceof ce)e.target=e.target||n;else{var r=e;e=new ce(i,n),Xc(e,r)}if(r=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];r=fi(o,i,!0,e)&&r}if(o=e.g=n,r=fi(o,i,!0,e)&&r,r=fi(o,i,!1,e)&&r,t)for(s=0;s<t.length;s++)o=e.g=t[s],r=fi(o,i,!1,e)&&r}Y.prototype.N=function(){if(Y.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],i=0;i<t.length;i++)rr(t[i]);delete n.g[e],n.h--}}this.J=null};Y.prototype.O=function(n,e,t,i){return this.i.add(String(n),e,!1,t,i)};Y.prototype.P=function(n,e,t,i){return this.i.add(String(n),e,!0,t,i)};function fi(n,e,t,i){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&vs(n.i,o),r=a.call(c,i)!==!1&&r}}return r&&!i.defaultPrevented}var no=A.JSON.stringify;function Zf(){var n=ou;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class ep{constructor(){this.h=this.g=null}add(e,t){const i=ru.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}}var ru=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new tp,n=>n.reset());class tp{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function np(n){A.setTimeout(()=>{throw n},0)}function su(n,e){Is||ip(),Es||(Is(),Es=!0),ou.add(n,e)}var Is;function ip(){var n=A.Promise.resolve(void 0);Is=function(){n.then(rp)}}var Es=!1,ou=new ep;function rp(){for(var n;n=Zf();){try{n.h.call(n.g)}catch(t){np(t)}var e=ru;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Es=!1}function or(n,e){Y.call(this),this.h=n||1,this.g=e||A,this.j=ae(this.qb,this),this.l=Date.now()}J(or,Y);y=or.prototype;y.ga=!1;y.T=null;y.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),te(this,"tick"),this.ga&&(io(this),this.start()))}};y.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function io(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}y.N=function(){or.$.N.call(this),io(this),delete this.g};function ro(n,e,t){if(typeof n=="function")t&&(n=ae(n,t));else if(n&&typeof n.handleEvent=="function")n=ae(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:A.setTimeout(n,e||0)}function au(n){n.g=ro(()=>{n.g=null,n.i&&(n.i=!1,au(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class sp extends ot{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:au(this)}N(){super.N(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nn(n){ot.call(this),this.h=n,this.g={}}J(Nn,ot);var Ta=[];function cu(n,e,t,i){Array.isArray(t)||(t&&(Ta[0]=t.toString()),t=Ta);for(var r=0;r<t.length;r++){var s=Zc(e,t[r],i||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function uu(n){Js(n.g,function(e,t){this.g.hasOwnProperty(t)&&Zs(e)},n),n.g={}}Nn.prototype.N=function(){Nn.$.N.call(this),uu(this)};Nn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ar(){this.g=!0}ar.prototype.Ea=function(){this.g=!1};function op(n,e,t,i,r,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+t+`
`+o})}function ap(n,e,t,i,r,s,o){n.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+t+`
`+s+" "+o})}function xt(n,e,t,i){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+up(n,t)+(i?" "+i:"")})}function cp(n,e){n.info(function(){return"TIMEOUT: "+e})}ar.prototype.info=function(){};function up(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var i=t[n];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return no(t)}catch{return e}}var Ct={},_a=null;function cr(){return _a=_a||new Y}Ct.Ta="serverreachability";function lu(n){ce.call(this,Ct.Ta,n)}J(lu,ce);function Dn(n){const e=cr();te(e,new lu(e))}Ct.STAT_EVENT="statevent";function hu(n,e){ce.call(this,Ct.STAT_EVENT,n),this.stat=e}J(hu,ce);function he(n){const e=cr();te(e,new hu(e,n))}Ct.Ua="timingevent";function du(n,e){ce.call(this,Ct.Ua,n),this.size=e}J(du,ce);function Qn(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){n()},e)}var ur={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},fu={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function so(){}so.prototype.h=null;function Sa(n){return n.h||(n.h=n.i())}function pu(){}var Yn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function oo(){ce.call(this,"d")}J(oo,ce);function ao(){ce.call(this,"c")}J(ao,ce);var Ts;function lr(){}J(lr,so);lr.prototype.g=function(){return new XMLHttpRequest};lr.prototype.i=function(){return{}};Ts=new lr;function Jn(n,e,t,i){this.l=n,this.j=e,this.m=t,this.W=i||1,this.U=new Nn(this),this.P=lp,n=gs?125:void 0,this.V=new or(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new mu}function mu(){this.i=null,this.g="",this.h=!1}var lp=45e3,_s={},Fi={};y=Jn.prototype;y.setTimeout=function(n){this.P=n};function Ss(n,e,t){n.L=1,n.v=dr(xe(e)),n.s=t,n.S=!0,gu(n,null)}function gu(n,e){n.G=Date.now(),Xn(n),n.A=xe(n.v);var t=n.A,i=n.W;Array.isArray(i)||(i=[String(i)]),Su(t.i,"t",i),n.C=0,t=n.l.I,n.h=new mu,n.g=Hu(n.l,t?e:null,!n.s),0<n.O&&(n.M=new sp(ae(n.Pa,n,n.g),n.O)),cu(n.U,n.g,"readystatechange",n.nb),e=n.I?Jc(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Dn(),op(n.j,n.u,n.A,n.m,n.W,n.s)}y.nb=function(n){n=n.target;const e=this.M;e&&Ne(n)==3?e.l():this.Pa(n)};y.Pa=function(n){try{if(n==this.g)e:{const l=Ne(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||gs||this.g&&(this.h.h||this.g.ja()||ba(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Dn(3):Dn(2)),hr(this);var t=this.g.da();this.aa=t;t:if(yu(this)){var i=ba(this.g);n="";var r=i.length,s=Ne(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dt(this),wn(this);var o="";break t}this.h.i=new A.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,n+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,ap(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Li(a)){var u=a;break t}}u=null}if(t=u)xt(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,As(this,t);else{this.i=!1,this.o=3,he(12),dt(this),wn(this);break e}}this.S?(vu(this,l,o),gs&&this.i&&l==3&&(cu(this.U,this.V,"tick",this.mb),this.V.start())):(xt(this.j,this.m,o,null),As(this,o)),l==4&&dt(this),this.i&&!this.J&&(l==4?Bu(this.l,this):(this.i=!1,Xn(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,he(12)):(this.o=0,he(13)),dt(this),wn(this)}}}catch{}finally{}};function yu(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function vu(n,e,t){let i=!0,r;for(;!n.J&&n.C<t.length;)if(r=hp(n,t),r==Fi){e==4&&(n.o=4,he(14),i=!1),xt(n.j,n.m,null,"[Incomplete Response]");break}else if(r==_s){n.o=4,he(15),xt(n.j,n.m,t,"[Invalid Chunk]"),i=!1;break}else xt(n.j,n.m,r,null),As(n,r);yu(n)&&r!=Fi&&r!=_s&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,he(16),i=!1),n.i=n.i&&i,i?0<t.length&&!n.ca&&(n.ca=!0,e=n.l,e.g==n&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),mo(e),e.L=!0,he(11))):(xt(n.j,n.m,t,"[Invalid Chunked Response]"),dt(n),wn(n))}y.mb=function(){if(this.g){var n=Ne(this.g),e=this.g.ja();this.C<e.length&&(hr(this),vu(this,n,e),this.i&&n!=4&&Xn(this))}};function hp(n,e){var t=n.C,i=e.indexOf(`
`,t);return i==-1?Fi:(t=Number(e.substring(t,i)),isNaN(t)?_s:(i+=1,i+t>e.length?Fi:(e=e.substr(i,t),n.C=i+t,e)))}y.cancel=function(){this.J=!0,dt(this)};function Xn(n){n.Y=Date.now()+n.P,wu(n,n.P)}function wu(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Qn(ae(n.lb,n),e)}function hr(n){n.B&&(A.clearTimeout(n.B),n.B=null)}y.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(cp(this.j,this.A),this.L!=2&&(Dn(),he(17)),dt(this),this.o=2,wn(this)):wu(this,this.Y-n)};function wn(n){n.l.H==0||n.J||Bu(n.l,n)}function dt(n){hr(n);var e=n.M;e&&typeof e.ra=="function"&&e.ra(),n.M=null,io(n.V),uu(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.ra())}function As(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||ks(t.h,n))){if(!n.K&&ks(t.h,n)&&t.H==3){try{var i=t.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)$i(t),mr(t);else break e;po(t),he(18)}}else t.Fa=r[1],0<t.Fa-t.V&&37500>r[2]&&t.M&&t.A==0&&!t.v&&(t.v=Qn(ae(t.ib,t),6e3));if(1>=Cu(t.h)&&t.na){try{t.na()}catch{}t.na=void 0}}else ft(t,11)}else if((n.K||t.g==n)&&$i(t),!Li(e))for(r=t.Ja.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.J=u[1],t.oa=u[2];const l=u[3];l!=null&&(t.qa=l,t.j.info("VER="+t.qa));const h=u[4];h!=null&&(t.Ga=h,t.j.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,t.K=i,t.j.info("backChannelRequestTimeoutMs_="+i)),i=t;const m=n.g;if(m){const w=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=i.h;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(co(s,s.h),s.h=null))}if(i.F){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(i.Da=_,L(i.G,i.F,_))}}t.H=3,t.l&&t.l.Ba(),t.ca&&(t.S=Date.now()-n.G,t.j.info("Handshake RTT: "+t.S+"ms")),i=t;var o=n;if(i.wa=zu(i,i.I?i.oa:null,i.Y),o.K){bu(i.h,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(hr(a),Xn(a)),i.g=o}else Vu(i);0<t.i.length&&gr(t)}else u[0]!="stop"&&u[0]!="close"||ft(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ft(t,7):fo(t):u[0]!="noop"&&t.l&&t.l.Aa(u),t.A=0)}}Dn(4)}catch{}}function dp(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(nr(n)){for(var e=[],t=n.length,i=0;i<t;i++)e.push(n[i]);return e}e=[],t=0;for(i in n)e[t++]=n[i];return e}function fp(n){if(n.sa&&typeof n.sa=="function")return n.sa();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(nr(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const i in n)e[t++]=i;return e}}}function Iu(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(nr(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=fp(n),i=dp(n),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],t&&t[s],n)}var Eu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pp(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var i=n[t].indexOf("="),r=null;if(0<=i){var s=n[t].substring(0,i);r=n[t].substring(i+1)}else s=n[t];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function gt(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof gt){this.h=e!==void 0?e:n.h,Ui(this,n.j),this.s=n.s,this.g=n.g,Vi(this,n.m),this.l=n.l,e=n.i;var t=new Pn;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Aa(this,t),this.o=n.o}else n&&(t=String(n).match(Eu))?(this.h=!!e,Ui(this,t[1]||"",!0),this.s=fn(t[2]||""),this.g=fn(t[3]||"",!0),Vi(this,t[4]),this.l=fn(t[5]||"",!0),Aa(this,t[6]||"",!0),this.o=fn(t[7]||"")):(this.h=!!e,this.i=new Pn(null,this.h))}gt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(pn(e,ka,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(pn(e,ka,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(pn(t,t.charAt(0)=="/"?yp:gp,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",pn(t,wp)),n.join("")};function xe(n){return new gt(n)}function Ui(n,e,t){n.j=t?fn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Vi(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Aa(n,e,t){e instanceof Pn?(n.i=e,Ip(n.i,n.h)):(t||(e=pn(e,vp)),n.i=new Pn(e,n.h))}function L(n,e,t){n.i.set(e,t)}function dr(n){return L(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function fn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function pn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,mp),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function mp(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var ka=/[#\/\?@]/g,gp=/[#\?:]/g,yp=/[#\?]/g,vp=/[#\?@]/g,wp=/#/g;function Pn(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function at(n){n.g||(n.g=new Map,n.h=0,n.i&&pp(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}y=Pn.prototype;y.add=function(n,e){at(this),this.i=null,n=en(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Tu(n,e){at(n),e=en(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function _u(n,e){return at(n),e=en(n,e),n.g.has(e)}y.forEach=function(n,e){at(this),this.g.forEach(function(t,i){t.forEach(function(r){n.call(e,r,i,this)},this)},this)};y.sa=function(){at(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let i=0;i<e.length;i++){const r=n[i];for(let s=0;s<r.length;s++)t.push(e[i])}return t};y.Z=function(n){at(this);let e=[];if(typeof n=="string")_u(this,n)&&(e=e.concat(this.g.get(en(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};y.set=function(n,e){return at(this),this.i=null,n=en(this,n),_u(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};y.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function Su(n,e,t){Tu(n,e),0<t.length&&(n.i=null,n.g.set(en(n,e),Qs(t)),n.h+=t.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var i=e[t];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),n.push(r)}}return this.i=n.join("&")};function en(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Ip(n,e){e&&!n.j&&(at(n),n.i=null,n.g.forEach(function(t,i){var r=i.toLowerCase();i!=r&&(Tu(this,i),Su(this,r,t))},n)),n.j=e}var Ep=class{constructor(n,e){this.h=n,this.g=e}};function Au(n){this.l=n||Tp,A.PerformanceNavigationTiming?(n=A.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(A.g&&A.g.Ka&&A.g.Ka()&&A.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Tp=10;function ku(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Cu(n){return n.h?1:n.g?n.g.size:0}function ks(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function co(n,e){n.g?n.g.add(e):n.h=e}function bu(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Au.prototype.cancel=function(){if(this.i=Ru(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Ru(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Qs(n.i)}function uo(){}uo.prototype.stringify=function(n){return A.JSON.stringify(n,void 0)};uo.prototype.parse=function(n){return A.JSON.parse(n,void 0)};function _p(){this.g=new uo}function Sp(n,e,t){const i=t||"";try{Iu(n,function(r,s){let o=r;Kn(r)&&(o=no(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function Ap(n,e){const t=new ar;if(A.Image){const i=new Image;i.onload=di(pi,t,i,"TestLoadImage: loaded",!0,e),i.onerror=di(pi,t,i,"TestLoadImage: error",!1,e),i.onabort=di(pi,t,i,"TestLoadImage: abort",!1,e),i.ontimeout=di(pi,t,i,"TestLoadImage: timeout",!1,e),A.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=n}else e(!1)}function pi(n,e,t,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function Zn(n){this.l=n.fc||null,this.j=n.ob||!1}J(Zn,so);Zn.prototype.g=function(){return new fr(this.l,this.j)};Zn.prototype.i=function(n){return function(){return n}}({});function fr(n,e){Y.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=lo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}J(fr,Y);var lo=0;y=fr.prototype;y.open=function(n,e){if(this.readyState!=lo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,On(this)};y.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||A).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ei(this)),this.readyState=lo};y.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof A.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Nu(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Nu(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}y.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?ei(this):On(this),this.readyState==3&&Nu(this)}};y.Za=function(n){this.g&&(this.response=this.responseText=n,ei(this))};y.Ya=function(n){this.g&&(this.response=n,ei(this))};y.ka=function(){this.g&&ei(this)};function ei(n){n.readyState=4,n.l=null,n.j=null,n.A=null,On(n)}y.setRequestHeader=function(n,e){this.v.append(n,e)};y.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function On(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(fr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var kp=A.JSON.parse;function U(n){Y.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Du,this.L=this.M=!1}J(U,Y);var Du="",Cp=/^https?$/i,bp=["POST","PUT"];y=U.prototype;y.Oa=function(n){this.M=n};y.ha=function(n,e,t,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ts.g(),this.C=this.u?Sa(this.u):Sa(Ts),this.g.onreadystatechange=ae(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){Ca(this,s);return}if(n=t||"",t=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)t.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())t.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),r=A.FormData&&n instanceof A.FormData,!(0<=Wc(bp,e))||i||r||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Mu(this),0<this.B&&((this.L=Rp(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ae(this.ua,this)):this.A=ro(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Ca(this,s)}};function Rp(n){return zt&&Wf()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}y.ua=function(){typeof Gs<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,te(this,"timeout"),this.abort(8))};function Ca(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Pu(n),pr(n)}function Pu(n){n.F||(n.F=!0,te(n,"complete"),te(n,"error"))}y.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,te(this,"complete"),te(this,"abort"),pr(this))};y.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),pr(this,!0)),U.$.N.call(this)};y.La=function(){this.s||(this.G||this.v||this.l?Ou(this):this.kb())};y.kb=function(){Ou(this)};function Ou(n){if(n.h&&typeof Gs<"u"&&(!n.C[1]||Ne(n)!=4||n.da()!=2)){if(n.v&&Ne(n)==4)ro(n.La,0,n);else if(te(n,"readystatechange"),Ne(n)==4){n.h=!1;try{const a=n.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var i;if(i=a===0){var r=String(n.I).match(Eu)[1]||null;if(!r&&A.self&&A.self.location){var s=A.self.location.protocol;r=s.substr(0,s.length-1)}i=!Cp.test(r?r.toLowerCase():"")}t=i}if(t)te(n,"complete"),te(n,"success");else{n.m=6;try{var o=2<Ne(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.da()+"]",Pu(n)}}finally{pr(n)}}}}function pr(n,e){if(n.g){Mu(n);const t=n.g,i=n.C[0]?Mi:null;n.g=null,n.C=null,e||te(n,"ready");try{t.onreadystatechange=i}catch{}}}function Mu(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(A.clearTimeout(n.A),n.A=null)}function Ne(n){return n.g?n.g.readyState:0}y.da=function(){try{return 2<Ne(this)?this.g.status:-1}catch{return-1}};y.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),kp(e)}};function ba(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Du:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}y.Ia=function(){return this.m};y.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Lu(n){let e="";return Js(n,function(t,i){e+=i,e+=":",e+=t,e+=`\r
`}),e}function ho(n,e,t){e:{for(i in t){var i=!1;break e}i=!0}i||(t=Lu(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):L(n,e,t))}function un(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function xu(n){this.Ga=0,this.i=[],this.j=new ar,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=un("failFast",!1,n),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=un("baseRetryDelayMs",5e3,n),this.hb=un("retryDelaySeedMs",1e4,n),this.eb=un("forwardChannelMaxRetries",2,n),this.xa=un("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.K=void 0,this.I=n&&n.supportsCrossDomainXhr||!1,this.J="",this.h=new Au(n&&n.concurrentRequestLimit),this.Ja=new _p,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.j.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}y=xu.prototype;y.qa=8;y.H=1;function fo(n){if(Fu(n),n.H==3){var e=n.W++,t=xe(n.G);L(t,"SID",n.J),L(t,"RID",e),L(t,"TYPE","terminate"),ti(n,t),e=new Jn(n,n.j,e,void 0),e.L=2,e.v=dr(xe(t)),t=!1,A.navigator&&A.navigator.sendBeacon&&(t=A.navigator.sendBeacon(e.v.toString(),"")),!t&&A.Image&&(new Image().src=e.v,t=!0),t||(e.g=Hu(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Xn(e)}qu(n)}function mr(n){n.g&&(mo(n),n.g.cancel(),n.g=null)}function Fu(n){mr(n),n.u&&(A.clearTimeout(n.u),n.u=null),$i(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&A.clearTimeout(n.m),n.m=null)}function gr(n){ku(n.h)||n.m||(n.m=!0,su(n.Na,n),n.C=0)}function Np(n,e){return Cu(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.F.concat(n.i),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Qn(ae(n.Na,n,e),ju(n,n.C)),n.C++,!0)}y.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const r=new Jn(this,this.j,n,void 0);let s=this.s;if(this.U&&(s?(s=Jc(s),Xc(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var i=this.i[t];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Uu(this,r,e),t=xe(this.G),L(t,"RID",n),L(t,"CVER",22),this.F&&L(t,"X-HTTP-Session-Id",this.F),ti(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(Lu(s)))+"&"+e:this.o&&ho(t,this.o,s)),co(this.h,r),this.bb&&L(t,"TYPE","init"),this.P?(L(t,"$req",e),L(t,"SID","null"),r.ba=!0,Ss(r,t,null)):Ss(r,t,e),this.H=2}}else this.H==3&&(n?Ra(this,n):this.i.length==0||ku(this.h)||Ra(this))};function Ra(n,e){var t;e?t=e.m:t=n.W++;const i=xe(n.G);L(i,"SID",n.J),L(i,"RID",t),L(i,"AID",n.V),ti(n,i),n.o&&n.s&&ho(i,n.o,n.s),t=new Jn(n,n.j,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.i=e.F.concat(n.i)),e=Uu(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),co(n.h,t),Ss(t,i,e)}function ti(n,e){n.ma&&Js(n.ma,function(t,i){L(e,i,t)}),n.l&&Iu({},function(t,i){L(e,i,t)})}function Uu(n,e,t){t=Math.min(n.i.length,t);var i=n.l?ae(n.l.Va,n.l,n):null;e:{var r=n.i;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=r[c].h;const l=r[c].g;if(u-=s,0>u)s=Math.max(0,r[c].h-100),a=!1;else try{Sp(l,o,"req"+u+"_")}catch{i&&i(l)}}if(a){i=o.join("&");break e}}}return n=n.i.splice(0,t),e.F=n,i}function Vu(n){n.g||n.u||(n.ba=1,su(n.Ma,n),n.A=0)}function po(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Qn(ae(n.Ma,n),ju(n,n.A)),n.A++,!0)}y.Ma=function(){if(this.u=null,$u(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var n=2*this.S;this.j.info("BP detection timer enabled: "+n),this.B=Qn(ae(this.jb,this),n)}};y.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,he(10),mr(this),$u(this))};function mo(n){n.B!=null&&(A.clearTimeout(n.B),n.B=null)}function $u(n){n.g=new Jn(n,n.j,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=xe(n.wa);L(e,"RID","rpc"),L(e,"SID",n.J),L(e,"CI",n.M?"0":"1"),L(e,"AID",n.V),L(e,"TYPE","xmlhttp"),ti(n,e),n.o&&n.s&&ho(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var t=n.g;n=n.oa,t.L=1,t.v=dr(xe(e)),t.s=null,t.S=!0,gu(t,n)}y.ib=function(){this.v!=null&&(this.v=null,mr(this),po(this),he(19))};function $i(n){n.v!=null&&(A.clearTimeout(n.v),n.v=null)}function Bu(n,e){var t=null;if(n.g==e){$i(n),mo(n),n.g=null;var i=2}else if(ks(n.h,e))t=e.F,bu(n.h,e),i=1;else return;if(n.H!=0){if(n.ta=e.aa,e.i)if(i==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var r=n.C;i=cr(),te(i,new du(i,t)),gr(n)}else Vu(n);else if(r=e.o,r==3||r==0&&0<n.ta||!(i==1&&Np(n,e)||i==2&&po(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),r){case 1:ft(n,5);break;case 4:ft(n,10);break;case 3:ft(n,6);break;default:ft(n,2)}}}function ju(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.l||(t*=2),t*e}function ft(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var i=ae(n.pb,n);t||(t=new gt("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||Ui(t,"https"),dr(t)),Ap(t.toString(),i)}else he(2);n.H=0,n.l&&n.l.za(e),qu(n),Fu(n)}y.pb=function(n){n?(this.j.info("Successfully pinged google.com"),he(2)):(this.j.info("Failed to ping google.com"),he(1))};function qu(n){if(n.H=0,n.pa=[],n.l){const e=Ru(n.h);(e.length!=0||n.i.length!=0)&&(va(n.pa,e),va(n.pa,n.i),n.h.i.length=0,Qs(n.i),n.i.length=0),n.l.ya()}}function zu(n,e,t){var i=t instanceof gt?xe(t):new gt(t,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),Vi(i,i.m);else{var r=A.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new gt(null,void 0);i&&Ui(s,i),e&&(s.g=e),r&&Vi(s,r),t&&(s.l=t),i=s}return t=n.F,e=n.Da,t&&e&&L(i,t,e),L(i,"VER",n.qa),ti(n,i),i}function Hu(n,e,t){if(e&&!n.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new U(new Zn({ob:!0})):new U(n.va),e.Oa(n.I),e}function Wu(){}y=Wu.prototype;y.Ba=function(){};y.Aa=function(){};y.za=function(){};y.ya=function(){};y.Va=function(){};function Bi(){if(zt&&!(10<=Number(Kf)))throw Error("Environmental error: no available transport.")}Bi.prototype.g=function(n,e){return new ve(n,e)};function ve(n,e){Y.call(this),this.g=new xu(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Li(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Li(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new tn(this)}J(ve,Y);ve.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var n=this.g,e=this.l,t=this.h||void 0;he(0),n.Y=e,n.ma=t||{},n.M=n.aa,n.G=zu(n,null,n.Y),gr(n)};ve.prototype.close=function(){fo(this.g)};ve.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=no(n),n=t);e.i.push(new Ep(e.fb++,n)),e.H==3&&gr(e)};ve.prototype.N=function(){this.g.l=null,delete this.j,fo(this.g),delete this.g,ve.$.N.call(this)};function Ku(n){oo.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}J(Ku,oo);function Gu(){ao.call(this),this.status=1}J(Gu,ao);function tn(n){this.g=n}J(tn,Wu);tn.prototype.Ba=function(){te(this.g,"a")};tn.prototype.Aa=function(n){te(this.g,new Ku(n))};tn.prototype.za=function(n){te(this.g,new Gu)};tn.prototype.ya=function(){te(this.g,"b")};function Dp(){this.blockSize=-1}function Te(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}J(Te,Dp);Te.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function es(n,e,t){t||(t=0);var i=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)i[r]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(r=0;16>r;++r)i[r]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],r=n.g[2];var s=n.g[3],o=e+(s^t&(r^s))+i[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(r^e&(t^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(t^s&(e^t))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=t+(e^r&(s^e))+i[3]+3250441966&4294967295,t=r+(o<<22&4294967295|o>>>10),o=e+(s^t&(r^s))+i[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(r^e&(t^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(t^s&(e^t))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=t+(e^r&(s^e))+i[7]+4249261313&4294967295,t=r+(o<<22&4294967295|o>>>10),o=e+(s^t&(r^s))+i[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(r^e&(t^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(t^s&(e^t))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=t+(e^r&(s^e))+i[11]+2304563134&4294967295,t=r+(o<<22&4294967295|o>>>10),o=e+(s^t&(r^s))+i[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(r^e&(t^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(t^s&(e^t))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=t+(e^r&(s^e))+i[15]+1236535329&4294967295,t=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(t^r))+i[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^r&(e^t))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^t&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(r^s))+i[0]+3921069994&4294967295,t=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(t^r))+i[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^r&(e^t))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^t&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(r^s))+i[4]+3889429448&4294967295,t=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(t^r))+i[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^r&(e^t))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^t&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(r^s))+i[8]+1163531501&4294967295,t=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(t^r))+i[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^r&(e^t))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^t&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(r^s))+i[12]+2368359562&4294967295,t=r+(o<<20&4294967295|o>>>12),o=e+(t^r^s)+i[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^t)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=t+(r^s^e)+i[14]+4259657740&4294967295,t=r+(o<<23&4294967295|o>>>9),o=e+(t^r^s)+i[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^t)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=t+(r^s^e)+i[10]+3200236656&4294967295,t=r+(o<<23&4294967295|o>>>9),o=e+(t^r^s)+i[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^t)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=t+(r^s^e)+i[6]+76029189&4294967295,t=r+(o<<23&4294967295|o>>>9),o=e+(t^r^s)+i[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^t)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=t+(r^s^e)+i[2]+3299628645&4294967295,t=r+(o<<23&4294967295|o>>>9),o=e+(r^(t|~s))+i[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~t))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=t+(s^(r|~e))+i[5]+4237533241&4294967295,t=r+(o<<21&4294967295|o>>>11),o=e+(r^(t|~s))+i[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~t))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=t+(s^(r|~e))+i[1]+2240044497&4294967295,t=r+(o<<21&4294967295|o>>>11),o=e+(r^(t|~s))+i[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~t))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=t+(s^(r|~e))+i[13]+1309151649&4294967295,t=r+(o<<21&4294967295|o>>>11),o=e+(r^(t|~s))+i[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~t))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=t+(s^(r|~e))+i[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+r&4294967295,n.g[3]=n.g[3]+s&4294967295}Te.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(r==0)for(;s<=t;)es(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(i[r++]=n.charCodeAt(s++),r==this.blockSize){es(this,i),r=0;break}}else for(;s<e;)if(i[r++]=n[s++],r==this.blockSize){es(this,i),r=0;break}}this.h=r,this.i+=e};Te.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var i=0;32>i;i+=8)n[t++]=this.g[e]>>>i&255;return n};function O(n,e){this.h=e;for(var t=[],i=!0,r=n.length-1;0<=r;r--){var s=n[r]|0;i&&s==e||(t[r]=s,i=!1)}this.g=t}var Pp={};function go(n){return-128<=n&&128>n?Kc(Pp,n,function(e){return new O([e|0],0>e?-1:0)}):new O([n|0],0>n?-1:0)}function Se(n){if(isNaN(n)||!isFinite(n))return Ft;if(0>n)return ee(Se(-n));for(var e=[],t=1,i=0;n>=t;i++)e[i]=n/t|0,t*=Cs;return new O(e,0)}function Qu(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return ee(Qu(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Se(Math.pow(e,8)),i=Ft,r=0;r<n.length;r+=8){var s=Math.min(8,n.length-r),o=parseInt(n.substring(r,r+s),e);8>s?(s=Se(Math.pow(e,s)),i=i.R(s).add(Se(o))):(i=i.R(t),i=i.add(Se(o)))}return i}var Cs=4294967296,Ft=go(0),bs=go(1),Na=go(16777216);y=O.prototype;y.ea=function(){if(we(this))return-ee(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var i=this.D(t);n+=(0<=i?i:Cs+i)*e,e*=Cs}return n};y.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(De(this))return"0";if(we(this))return"-"+ee(this).toString(n);for(var e=Se(Math.pow(n,6)),t=this,i="";;){var r=qi(t,e).g;t=ji(t,r.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=r,De(t))return s+i;for(;6>s.length;)s="0"+s;i=s+i}};y.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function De(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function we(n){return n.h==-1}y.X=function(n){return n=ji(this,n),we(n)?-1:De(n)?0:1};function ee(n){for(var e=n.g.length,t=[],i=0;i<e;i++)t[i]=~n.g[i];return new O(t,~n.h).add(bs)}y.abs=function(){return we(this)?ee(this):this};y.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0,r=0;r<=e;r++){var s=i+(this.D(r)&65535)+(n.D(r)&65535),o=(s>>>16)+(this.D(r)>>>16)+(n.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,t[r]=o<<16|s}return new O(t,t[t.length-1]&-2147483648?-1:0)};function ji(n,e){return n.add(ee(e))}y.R=function(n){if(De(this)||De(n))return Ft;if(we(this))return we(n)?ee(this).R(ee(n)):ee(ee(this).R(n));if(we(n))return ee(this.R(ee(n)));if(0>this.X(Na)&&0>n.X(Na))return Se(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],i=0;i<2*e;i++)t[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<n.g.length;r++){var s=this.D(i)>>>16,o=this.D(i)&65535,a=n.D(r)>>>16,c=n.D(r)&65535;t[2*i+2*r]+=o*c,mi(t,2*i+2*r),t[2*i+2*r+1]+=s*c,mi(t,2*i+2*r+1),t[2*i+2*r+1]+=o*a,mi(t,2*i+2*r+1),t[2*i+2*r+2]+=s*a,mi(t,2*i+2*r+2)}for(i=0;i<e;i++)t[i]=t[2*i+1]<<16|t[2*i];for(i=e;i<2*e;i++)t[i]=0;return new O(t,0)};function mi(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function ln(n,e){this.g=n,this.h=e}function qi(n,e){if(De(e))throw Error("division by zero");if(De(n))return new ln(Ft,Ft);if(we(n))return e=qi(ee(n),e),new ln(ee(e.g),ee(e.h));if(we(e))return e=qi(n,ee(e)),new ln(ee(e.g),e.h);if(30<n.g.length){if(we(n)||we(e))throw Error("slowDivide_ only works with positive integers.");for(var t=bs,i=e;0>=i.X(n);)t=Da(t),i=Da(i);var r=Ot(t,1),s=Ot(i,1);for(i=Ot(i,2),t=Ot(t,2);!De(i);){var o=s.add(i);0>=o.X(n)&&(r=r.add(t),s=o),i=Ot(i,1),t=Ot(t,1)}return e=ji(n,r.R(e)),new ln(r,e)}for(r=Ft;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),i=Math.ceil(Math.log(t)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=Se(t),o=s.R(e);we(o)||0<o.X(n);)t-=i,s=Se(t),o=s.R(e);De(s)&&(s=bs),r=r.add(s),n=ji(n,o)}return new ln(r,n)}y.gb=function(n){return qi(this,n).h};y.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)&n.D(i);return new O(t,this.h&n.h)};y.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)|n.D(i);return new O(t,this.h|n.h)};y.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)^n.D(i);return new O(t,this.h^n.h)};function Da(n){for(var e=n.g.length+1,t=[],i=0;i<e;i++)t[i]=n.D(i)<<1|n.D(i-1)>>>31;return new O(t,n.h)}function Ot(n,e){var t=e>>5;e%=32;for(var i=n.g.length-t,r=[],s=0;s<i;s++)r[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new O(r,n.h)}Bi.prototype.createWebChannel=Bi.prototype.g;ve.prototype.send=ve.prototype.u;ve.prototype.open=ve.prototype.m;ve.prototype.close=ve.prototype.close;ur.NO_ERROR=0;ur.TIMEOUT=8;ur.HTTP_ERROR=6;fu.COMPLETE="complete";pu.EventType=Yn;Yn.OPEN="a";Yn.CLOSE="b";Yn.ERROR="c";Yn.MESSAGE="d";Y.prototype.listen=Y.prototype.O;U.prototype.listenOnce=U.prototype.P;U.prototype.getLastError=U.prototype.Sa;U.prototype.getLastErrorCode=U.prototype.Ia;U.prototype.getStatus=U.prototype.da;U.prototype.getResponseJson=U.prototype.Wa;U.prototype.getResponseText=U.prototype.ja;U.prototype.send=U.prototype.ha;U.prototype.setWithCredentials=U.prototype.Oa;Te.prototype.digest=Te.prototype.l;Te.prototype.reset=Te.prototype.reset;Te.prototype.update=Te.prototype.j;O.prototype.add=O.prototype.add;O.prototype.multiply=O.prototype.R;O.prototype.modulo=O.prototype.gb;O.prototype.compare=O.prototype.X;O.prototype.toNumber=O.prototype.ea;O.prototype.toString=O.prototype.toString;O.prototype.getBits=O.prototype.D;O.fromNumber=Se;O.fromString=Qu;var Op=function(){return new Bi},Mp=function(){return cr()},ts=ur,Lp=fu,xp=Ct,Pa={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Fp=Zn,gi=pu,Up=U,Vp=Te,Ut=O;const Oa="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}re.UNAUTHENTICATED=new re(null),re.GOOGLE_CREDENTIALS=new re("google-credentials-uid"),re.FIRST_PARTY=new re("first-party-uid"),re.MOCK_USER=new re("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nn="9.22.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new Hs("@firebase/firestore");function Ma(){return _t.logLevel}function v(n,...e){if(_t.logLevel<=D.DEBUG){const t=e.map(yo);_t.debug(`Firestore (${nn}): ${n}`,...t)}}function Fe(n,...e){if(_t.logLevel<=D.ERROR){const t=e.map(yo);_t.error(`Firestore (${nn}): ${n}`,...t)}}function Ht(n,...e){if(_t.logLevel<=D.WARN){const t=e.map(yo);_t.warn(`Firestore (${nn}): ${n}`,...t)}}function yo(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(n="Unexpected state"){const e=`FIRESTORE (${nn}) INTERNAL ASSERTION FAILED: `+n;throw Fe(e),new Error(e)}function M(n,e){n||S()}function b(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends Re{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $p{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(re.UNAUTHENTICATED))}shutdown(){}}class Bp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class jp{constructor(e){this.t=e,this.currentUser=re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const r=c=>this.i!==i?(i=this.i,t(c)):Promise.resolve();let s=new yt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(M(typeof i.accessToken=="string"),new Yu(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return M(e===null||typeof e=="string"),new re(e)}}class qp{constructor(e,t,i){this.h=e,this.l=t,this.m=i,this.type="FirstParty",this.user=re.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class zp{constructor(e,t,i){this.h=e,this.l=t,this.m=i}getToken(){return Promise.resolve(new qp(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Hp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wp{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const i=s=>{s.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?r(s):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(M(typeof t.token=="string"),this.T=t.token,new Hp(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=Kp(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<t&&(i+=e.charAt(r[s]%e.length))}return i}}function P(n,e){return n<e?-1:n>e?1:0}function Wt(n,e,t){return n.length===e.length&&n.every((i,r)=>t(i,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new I(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new I(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new I(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new I(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return W.fromMillis(Date.now())}static fromDate(e){return W.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new W(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?P(this.nanoseconds,e.nanoseconds):P(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.timestamp=e}static fromTimestamp(e){return new k(e)}static min(){return new k(new W(0,0))}static max(){return new k(new W(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t,i){t===void 0?t=0:t>e.length&&S(),i===void 0?i=e.length-t:i>e.length-t&&S(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Mn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Mn?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let r=0;r<i;r++){const s=e.get(r),o=t.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class x extends Mn{construct(e,t,i){return new x(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new I(f.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(r=>r.length>0))}return new x(t)}static emptyPath(){return new x([])}}const Gp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oe extends Mn{construct(e,t,i){return new oe(e,t,i)}static isValidIdentifier(e){return Gp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new oe(["__name__"])}static fromServerFormat(e){const t=[];let i="",r=0;const s=()=>{if(i.length===0)throw new I(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new I(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new I(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new I(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new oe(t)}static emptyPath(){return new oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.path=e}static fromPath(e){return new E(x.fromString(e))}static fromName(e){return new E(x.fromString(e).popFirst(5))}static empty(){return new E(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&x.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return x.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new E(new x(e.slice()))}}function Qp(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,r=k.fromTimestamp(i===1e9?new W(t+1,0):new W(t,i));return new nt(r,E.empty(),e)}function Yp(n){return new nt(n.readTime,n.key,-1)}class nt{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new nt(k.min(),E.empty(),-1)}static max(){return new nt(k.max(),E.empty(),-1)}}function Jp(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=E.comparator(n.documentKey,e.documentKey),t!==0?t:P(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(n){if(n.code!==f.FAILED_PRECONDITION||n.message!==Xp)throw n;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new p((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(t,s).next(i,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof p?t:p.resolve(t)}catch(t){return p.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):p.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):p.reject(t)}static resolve(e){return new p((t,i)=>{t(e)})}static reject(e){return new p((t,i)=>{i(e)})}static waitFor(e){return new p((t,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&t()},c=>i(c))}),o=!0,s===r&&t()})}static or(e){let t=p.resolve(!1);for(const i of e)t=t.next(r=>r?p.resolve(r):i());return t}static forEach(e,t){const i=[];return e.forEach((r,s)=>{i.push(t.call(this,r,s))}),this.waitFor(i)}static mapArray(e,t){return new p((i,r)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&i(o)},l=>r(l))}})}static doWhile(e,t){return new p((i,r)=>{const s=()=>{e()===!0?t().next(()=>{s()},r):i()};s()})}}function ii(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>t.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}vo.ct=-1;function yr(n){return n==null}function zi(n){return n===0&&1/n==-1/0}function em(n){return typeof n=="number"&&Number.isInteger(n)&&!zi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function bt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Xu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t){this.comparator=e,this.root=t||Z.EMPTY}insert(e,t){return new F(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Z.BLACK,null,null))}remove(e){return new F(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Z.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return t+i.left.size;r<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yi(this.root,e,this.comparator,!1)}getReverseIterator(){return new yi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yi(this.root,e,this.comparator,!0)}}class yi{constructor(e,t,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?i(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Z{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i??Z.RED,this.left=r??Z.EMPTY,this.right=s??Z.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,r,s){return new Z(e??this.key,t??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Z.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Z.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const e=this.left.check();if(e!==this.right.check())throw S();return e+(this.isRed()?0:1)}}Z.EMPTY=null,Z.RED=!0,Z.BLACK=!1;Z.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(n,e,t,i,r){return this}insert(n,e,t){return new Z(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.comparator=e,this.data=new F(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xa(this.data.getIterator())}getIteratorFrom(e){return new xa(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ue(this.comparator);return t.data=e,t}}class xa{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.fields=e,e.sort(oe.comparator)}static empty(){return new me([])}unionWith(e){let t=new ue(oe.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new me(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wt(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Zu("Invalid base64 string: "+r):r}}(e);return new le(t)}static fromUint8Array(e){const t=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new le(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return P(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}le.EMPTY_BYTE_STRING=new le("");const tm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function it(n){if(M(!!n),typeof n=="string"){let e=0;const t=tm.exec(n);if(M(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:q(n.seconds),nanos:q(n.nanos)}}function q(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function St(n){return typeof n=="string"?le.fromBase64String(n):le.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Io(n){const e=n.mapValue.fields.__previous_value__;return wo(e)?Io(e):e}function Ln(n){const e=it(n.mapValue.fields.__local_write_time__.timestampValue);return new W(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,t,i,r,s,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class xn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new xn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function At(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?wo(n)?4:im(n)?9007199254740991:10:S()}function Ce(n,e){if(n===e)return!0;const t=At(n);if(t!==At(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ln(n).isEqual(Ln(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=it(i.timestampValue),o=it(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,r){return St(i.bytesValue).isEqual(St(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,r){return q(i.geoPointValue.latitude)===q(r.geoPointValue.latitude)&&q(i.geoPointValue.longitude)===q(r.geoPointValue.longitude)}(n,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return q(i.integerValue)===q(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=q(i.doubleValue),o=q(r.doubleValue);return s===o?zi(s)===zi(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return Wt(n.arrayValue.values||[],e.arrayValue.values||[],Ce);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(La(s)!==La(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Ce(s[a],o[a])))return!1;return!0}(n,e);default:return S()}}function Fn(n,e){return(n.values||[]).find(t=>Ce(t,e))!==void 0}function Kt(n,e){if(n===e)return 0;const t=At(n),i=At(e);if(t!==i)return P(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return P(n.booleanValue,e.booleanValue);case 2:return function(r,s){const o=q(r.integerValue||r.doubleValue),a=q(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Fa(n.timestampValue,e.timestampValue);case 4:return Fa(Ln(n),Ln(e));case 5:return P(n.stringValue,e.stringValue);case 6:return function(r,s){const o=St(r),a=St(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=P(o[c],a[c]);if(u!==0)return u}return P(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,s){const o=P(q(r.latitude),q(s.latitude));return o!==0?o:P(q(r.longitude),q(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Kt(o[c],a[c]);if(u)return u}return P(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,s){if(r===vi.mapValue&&s===vi.mapValue)return 0;if(r===vi.mapValue)return 1;if(s===vi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=P(a[l],u[l]);if(h!==0)return h;const d=Kt(o[a[l]],c[u[l]]);if(d!==0)return d}return P(a.length,u.length)}(n.mapValue,e.mapValue);default:throw S()}}function Fa(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return P(n,e);const t=it(n),i=it(e),r=P(t.seconds,i.seconds);return r!==0?r:P(t.nanos,i.nanos)}function Gt(n){return Rs(n)}function Rs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(i){const r=it(i);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?St(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,E.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(i){let r="[",s=!0;for(const o of i.values||[])s?s=!1:r+=",",r+=Rs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(i){const r=Object.keys(i.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Rs(i.fields[a])}`;return s+"}"}(n.mapValue):S();var e,t}function Ns(n){return!!n&&"integerValue"in n}function Eo(n){return!!n&&"arrayValue"in n}function Ua(n){return!!n&&"nullValue"in n}function Va(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ti(n){return!!n&&"mapValue"in n}function In(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return bt(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=In(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=In(n.arrayValue.values[t]);return e}return Object.assign({},n)}function im(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.value=e}static empty(){return new de({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Ti(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=In(t)}setAll(e){let t=oe.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,i,r),i={},r=[],t=a.popLast()}o?i[a.lastSegment()]=In(o):r.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,i,r)}delete(e){const t=this.field(e.popLast());Ti(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ce(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=t.mapValue.fields[e.get(i)];Ti(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,i){bt(t,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new de(In(this.value))}}function el(n){const e=[];return bt(n.fields,(t,i)=>{const r=new oe([t]);if(Ti(i)){const s=el(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new me(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t,i,r,s,o,a){this.key=e,this.documentType=t,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new se(e,0,k.min(),k.min(),k.min(),de.empty(),0)}static newFoundDocument(e,t,i,r){return new se(e,1,t,k.min(),i,r,0)}static newNoDocument(e,t){return new se(e,2,t,k.min(),k.min(),de.empty(),0)}static newUnknownDocument(e,t){return new se(e,3,t,k.min(),k.min(),de.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(k.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=de.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=de.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=k.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t){this.position=e,this.inclusive=t}}function $a(n,e,t){let i=0;for(let r=0;r<n.position.length;r++){const s=e[r],o=n.position[r];if(s.field.isKeyField()?i=E.comparator(E.fromName(o.referenceValue),t.key):i=Kt(o,t.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ba(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ce(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,t="asc"){this.field=e,this.dir=t}}function rm(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{}class H extends tl{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new om(e,t,i):t==="array-contains"?new um(e,i):t==="in"?new lm(e,i):t==="not-in"?new hm(e,i):t==="array-contains-any"?new dm(e,i):new H(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new am(e,i):new cm(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Kt(t,this.value)):t!==null&&At(this.value)===At(t)&&this.matchesComparison(Kt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class be extends tl{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new be(e,t)}matches(e){return nl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(t=>t.isInequality());return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function nl(n){return n.op==="and"}function il(n){return sm(n)&&nl(n)}function sm(n){for(const e of n.filters)if(e instanceof be)return!1;return!0}function Ds(n){if(n instanceof H)return n.field.canonicalString()+n.op.toString()+Gt(n.value);if(il(n))return n.filters.map(e=>Ds(e)).join(",");{const e=n.filters.map(t=>Ds(t)).join(",");return`${n.op}(${e})`}}function rl(n,e){return n instanceof H?function(t,i){return i instanceof H&&t.op===i.op&&t.field.isEqual(i.field)&&Ce(t.value,i.value)}(n,e):n instanceof be?function(t,i){return i instanceof be&&t.op===i.op&&t.filters.length===i.filters.length?t.filters.reduce((r,s,o)=>r&&rl(s,i.filters[o]),!0):!1}(n,e):void S()}function sl(n){return n instanceof H?function(e){return`${e.field.canonicalString()} ${e.op} ${Gt(e.value)}`}(n):n instanceof be?function(e){return e.op.toString()+" {"+e.getFilters().map(sl).join(" ,")+"}"}(n):"Filter"}class om extends H{constructor(e,t,i){super(e,t,i),this.key=E.fromName(i.referenceValue)}matches(e){const t=E.comparator(e.key,this.key);return this.matchesComparison(t)}}class am extends H{constructor(e,t){super(e,"in",t),this.keys=ol("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class cm extends H{constructor(e,t){super(e,"not-in",t),this.keys=ol("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ol(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>E.fromName(i.referenceValue))}class um extends H{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Eo(t)&&Fn(t.arrayValue,this.value)}}class lm extends H{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Fn(this.value.arrayValue,t)}}class hm extends H{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Fn(this.value.arrayValue,t)}}class dm extends H{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Eo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Fn(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,t=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function ja(n,e=null,t=[],i=[],r=null,s=null,o=null){return new fm(n,e,t,i,r,s,o)}function To(n){const e=b(n);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Ds(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),yr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Gt(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Gt(i)).join(",")),e.dt=t}return e.dt}function _o(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!rm(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!rl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ba(n.startAt,e.startAt)&&Ba(n.endAt,e.endAt)}function Ps(n){return E.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t=null,i=[],r=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function pm(n,e,t,i,r,s,o,a){return new vr(n,e,t,i,r,s,o,a)}function So(n){return new vr(n)}function qa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function mm(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function gm(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function ym(n){return n.collectionGroup!==null}function Vt(n){const e=b(n);if(e.wt===null){e.wt=[];const t=gm(e),i=mm(e);if(t!==null&&i===null)t.isKeyField()||e.wt.push(new En(t)),e.wt.push(new En(oe.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new En(oe.keyField(),s))}}}return e.wt}function Ue(n){const e=b(n);if(!e._t)if(e.limitType==="F")e._t=ja(e.path,e.collectionGroup,Vt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Vt(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new En(s.field,o))}const i=e.endAt?new Hi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Hi(e.startAt.position,e.startAt.inclusive):null;e._t=ja(e.path,e.collectionGroup,t,e.filters,e.limit,i,r)}return e._t}function Os(n,e,t){return new vr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function wr(n,e){return _o(Ue(n),Ue(e))&&n.limitType===e.limitType}function al(n){return`${To(Ue(n))}|lt:${n.limitType}`}function Ms(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(i=>sl(i)).join(", ")}]`),yr(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(i=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(i)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Gt(i)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Gt(i)).join(",")),`Target(${t})`}(Ue(n))}; limitType=${n.limitType})`}function Ir(n,e){return e.isFoundDocument()&&function(t,i){const r=i.key.path;return t.collectionGroup!==null?i.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(r):E.isDocumentKey(t.path)?t.path.isEqual(r):t.path.isImmediateParentOf(r)}(n,e)&&function(t,i){for(const r of Vt(t))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(n,e)&&function(t,i){for(const r of t.filters)if(!r.matches(i))return!1;return!0}(n,e)&&function(t,i){return!(t.startAt&&!function(r,s,o){const a=$a(r,s,o);return r.inclusive?a<=0:a<0}(t.startAt,Vt(t),i)||t.endAt&&!function(r,s,o){const a=$a(r,s,o);return r.inclusive?a>=0:a>0}(t.endAt,Vt(t),i))}(n,e)}function vm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function cl(n){return(e,t)=>{let i=!1;for(const r of Vt(n)){const s=wm(r,e,t);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function wm(n,e,t){const i=n.field.isKeyField()?E.comparator(e.key,t.key):function(r,s,o){const a=s.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Kt(a,c):S()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return S()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[t]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){bt(this.inner,(t,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return Xu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=new F(E.comparator);function Ve(){return Im}const ul=new F(E.comparator);function mn(...n){let e=ul;for(const t of n)e=e.insert(t.key,t);return e}function ll(n){let e=ul;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function pt(){return Tn()}function hl(){return Tn()}function Tn(){return new rn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Em=new F(E.comparator),Tm=new ue(E.comparator);function R(...n){let e=Tm;for(const t of n)e=e.add(t);return e}const _m=new ue(P);function Sm(){return _m}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zi(e)?"-0":e}}function fl(n){return{integerValue:""+n}}function Am(n,e){return em(e)?fl(e):dl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this._=void 0}}function km(n,e,t){return n instanceof Wi?function(i,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&wo(r)&&(r=Io(r)),r&&(s.fields.__previous_value__=r),{mapValue:s}}(t,e):n instanceof Un?ml(n,e):n instanceof Vn?gl(n,e):function(i,r){const s=pl(i,r),o=za(s)+za(i.gt);return Ns(s)&&Ns(i.gt)?fl(o):dl(i.serializer,o)}(n,e)}function Cm(n,e,t){return n instanceof Un?ml(n,e):n instanceof Vn?gl(n,e):t}function pl(n,e){return n instanceof Ki?Ns(t=e)||function(i){return!!i&&"doubleValue"in i}(t)?e:{integerValue:0}:null;var t}class Wi extends Er{}class Un extends Er{constructor(e){super(),this.elements=e}}function ml(n,e){const t=yl(e);for(const i of n.elements)t.some(r=>Ce(r,i))||t.push(i);return{arrayValue:{values:t}}}class Vn extends Er{constructor(e){super(),this.elements=e}}function gl(n,e){let t=yl(e);for(const i of n.elements)t=t.filter(r=>!Ce(r,i));return{arrayValue:{values:t}}}class Ki extends Er{constructor(e,t){super(),this.serializer=e,this.gt=t}}function za(n){return q(n.integerValue||n.doubleValue)}function yl(n){return Eo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function bm(n,e){return n.field.isEqual(e.field)&&function(t,i){return t instanceof Un&&i instanceof Un||t instanceof Vn&&i instanceof Vn?Wt(t.elements,i.elements,Ce):t instanceof Ki&&i instanceof Ki?Ce(t.gt,i.gt):t instanceof Wi&&i instanceof Wi}(n.transform,e.transform)}class Rm{constructor(e,t){this.version=e,this.transformResults=t}}class Ee{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ee}static exists(e){return new Ee(void 0,e)}static updateTime(e){return new Ee(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _i(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Tr{}function vl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ao(n.key,Ee.none()):new ri(n.key,n.data,Ee.none());{const t=n.data,i=de.empty();let r=new ue(oe.comparator);for(let s of e.fields)if(!r.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new ct(n.key,i,new me(r.toArray()),Ee.none())}}function Nm(n,e,t){n instanceof ri?function(i,r,s){const o=i.value.clone(),a=Wa(i.fieldTransforms,r,s.transformResults);o.setAll(a),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(n,e,t):n instanceof ct?function(i,r,s){if(!_i(i.precondition,r))return void r.convertToUnknownDocument(s.version);const o=Wa(i.fieldTransforms,r,s.transformResults),a=r.data;a.setAll(wl(i)),a.setAll(o),r.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(n,e,t):function(i,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function _n(n,e,t,i){return n instanceof ri?function(r,s,o,a){if(!_i(r.precondition,s))return o;const c=r.value.clone(),u=Ka(r.fieldTransforms,a,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(n,e,t,i):n instanceof ct?function(r,s,o,a){if(!_i(r.precondition,s))return o;const c=Ka(r.fieldTransforms,a,s),u=s.data;return u.setAll(wl(r)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(n,e,t,i):function(r,s,o){return _i(r.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(n,e,t)}function Dm(n,e){let t=null;for(const i of n.fieldTransforms){const r=e.data.field(i.field),s=pl(i.transform,r||null);s!=null&&(t===null&&(t=de.empty()),t.set(i.field,s))}return t||null}function Ha(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,i){return t===void 0&&i===void 0||!(!t||!i)&&Wt(t,i,(r,s)=>bm(r,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ri extends Tr{constructor(e,t,i,r=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ct extends Tr{constructor(e,t,i,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function wl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Wa(n,e,t){const i=new Map;M(n.length===t.length);for(let r=0;r<t.length;r++){const s=n[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,Cm(o,a,t[r]))}return i}function Ka(n,e,t){const i=new Map;for(const r of n){const s=r.transform,o=t.data.field(r.field);i.set(r.field,km(s,o,e))}return i}class Ao extends Tr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Pm extends Tr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,t,i,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&Nm(s,e,i[r])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=_n(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=_n(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=hl();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(r.key)?null:a;const c=vl(o,a);c!==null&&i.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(k.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),R())}isEqual(e){return this.batchId===e.batchId&&Wt(this.mutations,e.mutations,(t,i)=>Ha(t,i))&&Wt(this.baseMutations,e.baseMutations,(t,i)=>Ha(t,i))}}class ko{constructor(e,t,i,r){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=r}static from(e,t,i){M(e.mutations.length===i.length);let r=Em;const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new ko(e,t,i,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B,N;function xm(n){switch(n){default:return S();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Il(n){if(n===void 0)return Fe("GRPC error has no .code"),f.UNKNOWN;switch(n){case B.OK:return f.OK;case B.CANCELLED:return f.CANCELLED;case B.UNKNOWN:return f.UNKNOWN;case B.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case B.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case B.INTERNAL:return f.INTERNAL;case B.UNAVAILABLE:return f.UNAVAILABLE;case B.UNAUTHENTICATED:return f.UNAUTHENTICATED;case B.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case B.NOT_FOUND:return f.NOT_FOUND;case B.ALREADY_EXISTS:return f.ALREADY_EXISTS;case B.PERMISSION_DENIED:return f.PERMISSION_DENIED;case B.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case B.ABORTED:return f.ABORTED;case B.OUT_OF_RANGE:return f.OUT_OF_RANGE;case B.UNIMPLEMENTED:return f.UNIMPLEMENTED;case B.DATA_LOSS:return f.DATA_LOSS;default:return S()}}(N=B||(B={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return wi}static getOrCreateInstance(){return wi===null&&(wi=new Co),wi}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let wi=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=new Ut([4294967295,4294967295],0);function Ga(n){const e=Fm().encode(n),t=new Vp;return t.update(e),new Uint8Array(t.digest())}function Qa(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ut([t,i],0),new Ut([r,s],0)]}class bo{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new gn(`Invalid padding: ${t}`);if(i<0)throw new gn(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new gn(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new gn(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Ut.fromNumber(this.It)}Et(e,t,i){let r=e.add(t.multiply(Ut.fromNumber(i)));return r.compare(Um)===1&&(r=new Ut([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=Ga(e),[i,r]=Qa(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(i,r,s);if(!this.At(o))return!1}return!0}static create(e,t,i){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new bo(s,r,t);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const t=Ga(e),[i,r]=Qa(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(i,r,s);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class gn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,t,i,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const r=new Map;return r.set(e,si.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new _r(k.min(),r,new F(P),Ve(),R())}}class si{constructor(e,t,i,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new si(i,t,R(),R(),R())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t,i,r){this.Pt=e,this.removedTargetIds=t,this.key=i,this.bt=r}}class El{constructor(e,t){this.targetId=e,this.Vt=t}}class Tl{constructor(e,t,i=le.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=r}}class Ya{constructor(){this.St=0,this.Dt=Xa(),this.Ct=le.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=R(),t=R(),i=R();return this.Dt.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:i=i.add(r);break;default:S()}}),new si(this.Ct,this.xt,e,t,i)}Ft(){this.Nt=!1,this.Dt=Xa()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Vm{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Ve(),this.zt=Ja(),this.Wt=new F(P)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const i=this.Zt(t);switch(e.state){case 0:this.te(t)&&i.$t(e.resumeToken);break;case 1:i.Ut(),i.kt||i.Ft(),i.$t(e.resumeToken);break;case 2:i.Ut(),i.kt||this.removeTarget(t);break;case 3:this.te(t)&&(i.Kt(),i.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),i.$t(e.resumeToken));break;default:S()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((i,r)=>{this.te(r)&&t(r)})}ne(e){var t;const i=e.targetId,r=e.Vt.count,s=this.se(i);if(s){const o=s.target;if(Ps(o))if(r===0){const a=new E(o.path);this.Yt(i,a,se.newNoDocument(a,k.min()))}else M(r===1);else{const a=this.ie(i);if(a!==r){const c=this.re(e,a);if(c!==0){this.ee(i);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(i,u)}(t=Co.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(u,l,h){var d,m,w,_,T,V;const $={localCacheCount:l,existenceFilterCount:h.count},G=h.unchangedNames;return G&&($.bloomFilter={applied:u===0,hashCount:(d=G==null?void 0:G.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(_=(w=(m=G==null?void 0:G.bits)===null||m===void 0?void 0:m.bitmap)===null||w===void 0?void 0:w.length)!==null&&_!==void 0?_:0,padding:(V=(T=G==null?void 0:G.bits)===null||T===void 0?void 0:T.padding)!==null&&V!==void 0?V:0}),$}(c,a,e.Vt))}}}}re(e,t){const{unchangedNames:i,count:r}=e.Vt;if(!i||!i.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=i;let c,u;try{c=St(s).toUint8Array()}catch(l){if(l instanceof Zu)return Ht("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{u=new bo(c,o,a)}catch(l){return Ht(l instanceof gn?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return u.It===0?1:r!==t-this.oe(e.targetId,u)?2:0}oe(e,t){const i=this.Gt.getRemoteKeysForTarget(e);let r=0;return i.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.vt(a)||(this.Yt(e,s,null),r++)}),r}ce(e){const t=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Ps(a.target)){const c=new E(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,se.newNoDocument(c,e))}s.Mt&&(t.set(o,s.Ot()),s.Ft())}});let i=R();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.se(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const r=new _r(e,t,this.Wt,this.jt,i);return this.jt=Ve(),this.zt=Ja(),this.Wt=new F(P),r}Jt(e,t){if(!this.te(e))return;const i=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,i),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,i){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,t)?r.Bt(t,1):r.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),i&&(this.jt=this.jt.insert(t,i))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Ya,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new ue(P),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||v("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Ya),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Ja(){return new F(E.comparator)}function Xa(){return new F(E.comparator)}const $m=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Bm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),jm=(()=>({and:"AND",or:"OR"}))();class qm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ls(n,e){return n.useProto3Json||yr(e)?e:{value:e}}function Gi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _l(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function zm(n,e){return Gi(n,e.toTimestamp())}function ke(n){return M(!!n),k.fromTimestamp(function(e){const t=it(e);return new W(t.seconds,t.nanos)}(n))}function Ro(n,e){return function(t){return new x(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Sl(n){const e=x.fromString(n);return M(bl(e)),e}function xs(n,e){return Ro(n.databaseId,e.path)}function ns(n,e){const t=Sl(e);if(t.get(1)!==n.databaseId.projectId)throw new I(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new I(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new E(Al(t))}function Fs(n,e){return Ro(n.databaseId,e)}function Hm(n){const e=Sl(n);return e.length===4?x.emptyPath():Al(e)}function Us(n){return new x(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Al(n){return M(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Za(n,e,t){return{name:xs(n,e),fields:t.value.mapValue.fields}}function Wm(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:S()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(M(u===void 0||typeof u=="string"),le.fromBase64String(u||"")):(M(u===void 0||u instanceof Uint8Array),le.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:Il(c.code);return new I(u,c.message||"")}(o);t=new Tl(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=ns(n,i.document.name),s=ke(i.document.updateTime),o=i.document.createTime?ke(i.document.createTime):k.min(),a=new de({mapValue:{fields:i.document.fields}}),c=se.newFoundDocument(r,s,o,a),u=i.targetIds||[],l=i.removedTargetIds||[];t=new Si(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=ns(n,i.document),s=i.readTime?ke(i.readTime):k.min(),o=se.newNoDocument(r,s),a=i.removedTargetIds||[];t=new Si([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=ns(n,i.document),s=i.removedTargetIds||[];t=new Si([],s,r,null)}else{if(!("filter"in e))return S();{e.filter;const i=e.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,o=new Lm(r,s),a=i.targetId;t=new El(a,o)}}return t}function Km(n,e){let t;if(e instanceof ri)t={update:Za(n,e.key,e.value)};else if(e instanceof Ao)t={delete:xs(n,e.key)};else if(e instanceof ct)t={update:Za(n,e.key,e.data),updateMask:ng(e.fieldMask)};else{if(!(e instanceof Pm))return S();t={verify:xs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(r,s){const o=s.transform;if(o instanceof Wi)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Un)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Vn)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ki)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw S()}(0,i))),e.precondition.isNone||(t.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:zm(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:S()}(n,e.precondition)),t}function Gm(n,e){return n&&n.length>0?(M(e!==void 0),n.map(t=>function(i,r){let s=i.updateTime?ke(i.updateTime):ke(r);return s.isEqual(k.min())&&(s=ke(r)),new Rm(s,i.transformResults||[])}(t,e))):[]}function Qm(n,e){return{documents:[Fs(n,e.path)]}}function Ym(n,e){const t={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(t.parent=Fs(n,i),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Fs(n,i.popLast()),t.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(c){if(c.length!==0)return Cl(be.create(c,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Mt(l.field),direction:Zm(l.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=Ls(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Jm(n){let e=Hm(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let r=null;if(i>0){M(i===1);const l=t.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(l){const h=kl(l);return h instanceof be&&il(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new En(Lt(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,yr(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Hi(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Hi(d,h)}(t.endAt)),pm(e,r,o,s,a,"F",c,u)}function Xm(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return S()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Lt(e.unaryFilter.field);return H.create(t,"==",{doubleValue:NaN});case"IS_NULL":const i=Lt(e.unaryFilter.field);return H.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Lt(e.unaryFilter.field);return H.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Lt(e.unaryFilter.field);return H.create(s,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(n):n.fieldFilter!==void 0?function(e){return H.create(Lt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return be.create(e.compositeFilter.filters.map(t=>kl(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return S()}}(e.compositeFilter.op))}(n):S()}function Zm(n){return $m[n]}function eg(n){return Bm[n]}function tg(n){return jm[n]}function Mt(n){return{fieldPath:n.canonicalString()}}function Lt(n){return oe.fromServerFormat(n.fieldPath)}function Cl(n){return n instanceof H?function(e){if(e.op==="=="){if(Va(e.value))return{unaryFilter:{field:Mt(e.field),op:"IS_NAN"}};if(Ua(e.value))return{unaryFilter:{field:Mt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Va(e.value))return{unaryFilter:{field:Mt(e.field),op:"IS_NOT_NAN"}};if(Ua(e.value))return{unaryFilter:{field:Mt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mt(e.field),op:eg(e.op),value:e.value}}}(n):n instanceof be?function(e){const t=e.getFilters().map(i=>Cl(i));return t.length===1?t[0]:{compositeFilter:{op:tg(e.op),filters:t}}}(n):S()}function ng(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t,i,r,s=k.min(),o=k.min(),a=le.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Ye(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ye(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ye(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ye(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this.fe=e}}function rg(n){const e=Jm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Os(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(){this.rn=new og}addToCollectionParentIndex(e,t){return this.rn.add(t),p.resolve()}getCollectionParents(e,t){return p.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return p.resolve()}deleteFieldIndex(e,t){return p.resolve()}getDocumentsMatchingTarget(e,t){return p.resolve(null)}getIndexType(e,t){return p.resolve(0)}getFieldIndexes(e,t){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}getMinOffset(e,t){return p.resolve(nt.min())}getMinOffsetFromCollectionGroup(e,t){return p.resolve(nt.min())}updateCollectionGroup(e,t,i){return p.resolve()}updateIndexEntries(e,t){return p.resolve()}}class og{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),r=this.index[t]||new ue(x.comparator),s=!r.has(i);return this.index[t]=r.add(i),s}has(e){const t=e.lastSegment(),i=e.popLast(),r=this.index[t];return r&&r.has(i)}getEntries(e){return(this.index[e]||new ue(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Qt(0)}static Mn(){return new Qt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.changes=new rn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,se.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?p.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,t,i,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(i!==null&&_n(i.mutation,r,me.empty(),W.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,R()).next(()=>i))}getLocalViewOfDocuments(e,t,i=R()){const r=pt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,i).next(s=>{let o=mn();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const i=pt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,R()))}populateOverlays(e,t,i){const r=[];return i.forEach(s=>{t.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,i,r){let s=Ve();const o=Tn(),a=Tn();return t.forEach((c,u)=>{const l=i.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof ct)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),_n(l.mutation,u,l.mutation.getFieldMask(),W.now())):o.set(u.key,me.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new cg(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const i=Tn();let r=new F((o,a)=>o-a),s=R();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=i.get(c)||me.empty();l=a.applyToLocalView(u,l),i.set(c,l);const h=(r.get(a.batchId)||R()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=hl();l.forEach(d=>{if(!s.has(d)){const m=vl(t.get(d),i.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return p.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i){return function(r){return E.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ym(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i):this.getDocumentsMatchingCollectionQuery(e,t,i)}getNextDocuments(e,t,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,r-s.size):p.resolve(pt());let a=-1,c=s;return o.next(u=>p.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?p.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,R())).next(l=>({batchId:a,changes:ll(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new E(t)).next(i=>{let r=mn();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,i){const r=t.collectionGroup;let s=mn();return this.indexManager.getCollectionParents(e,r).next(o=>p.forEach(o,a=>{const c=function(u,l){return new vr(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,i).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r))).next(s=>{r.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,se.newInvalidDocument(u)))});let o=mn();return s.forEach((a,c)=>{const u=r.get(a);u!==void 0&&_n(u.mutation,c,me.empty(),W.now()),Ir(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return p.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var i;return this.cs.set(t.id,{id:(i=t).id,version:i.version,createTime:ke(i.createTime)}),p.resolve()}getNamedQuery(e,t){return p.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(i){return{name:i.name,query:rg(i.bundledQuery),readTime:ke(i.readTime)}}(t)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.overlays=new F(E.comparator),this.ls=new Map}getOverlay(e,t){return p.resolve(this.overlays.get(t))}getOverlays(e,t){const i=pt();return p.forEach(t,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((r,s)=>{this.we(e,t,s)}),p.resolve()}removeOverlaysForBatchId(e,t,i){const r=this.ls.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(i)),p.resolve()}getOverlaysForCollection(e,t,i){const r=pt(),s=t.length+1,o=new E(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>i&&r.set(c.getKey(),c)}return p.resolve(r)}getOverlaysForCollectionGroup(e,t,i,r){let s=new F((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>i){let l=s.get(u.largestBatchId);l===null&&(l=pt(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=pt(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return p.resolve(a)}we(e,t,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(i.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Mm(t,i));let s=this.ls.get(t);s===void 0&&(s=R(),this.ls.set(t,s)),this.ls.set(t,s.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.fs=new ue(Q.ds),this.ws=new ue(Q._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const i=new Q(e,t);this.fs=this.fs.add(i),this.ws=this.ws.add(i)}gs(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.ys(new Q(e,t))}ps(e,t){e.forEach(i=>this.removeReference(i,t))}Is(e){const t=new E(new x([])),i=new Q(t,e),r=new Q(t,e+1),s=[];return this.ws.forEachInRange([i,r],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new E(new x([])),i=new Q(t,e),r=new Q(t,e+1);let s=R();return this.ws.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Q(e,0),i=this.fs.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Q{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return E.comparator(e.key,t.key)||P(e.As,t.As)}static _s(e,t){return P(e.As,t.As)||E.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new ue(Q.ds)}checkEmpty(e){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,r){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Om(s,t,i,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new Q(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,t){return p.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,r=this.bs(i),s=r<0?0:r;return p.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Q(t,0),r=new Q(t,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([i,r],o=>{const a=this.Ps(o.As);s.push(a)}),p.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new ue(P);return t.forEach(r=>{const s=new Q(r,0),o=new Q(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{i=i.add(a.As)})}),p.resolve(this.Vs(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,r=i.length+1;let s=i;E.isDocumentKey(s)||(s=s.child(""));const o=new Q(new E(s),0);let a=new ue(P);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!i.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.As)),!0)},o),p.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach(i=>{const r=this.Ps(i);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){M(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Rs;return p.forEach(t.mutations,r=>{const s=new Q(r.key,t.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=i})}Cn(e){}containsKey(e,t){const i=new Q(t,0),r=this.Rs.firstAfterOrEqual(i);return p.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,p.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.Ds=e,this.docs=new F(E.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,r=this.docs.get(i),s=r?r.size:0,o=this.Ds(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return p.resolve(i?i.document.mutableCopy():se.newInvalidDocument(t))}getEntries(e,t){let i=Ve();return t.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():se.newInvalidDocument(r))}),p.resolve(i)}getDocumentsMatchingQuery(e,t,i,r){let s=Ve();const o=t.path,a=new E(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Jp(Yp(l),i)<=0||(r.has(l.key)||Ir(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return p.resolve(s)}getAllFromCollectionGroup(e,t,i,r){S()}Cs(e,t){return p.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new pg(this)}getSize(e){return p.resolve(this.size)}}class pg extends ag{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?t.push(this.os.addEntry(e,r)):this.os.removeEntry(i)}),p.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e){this.persistence=e,this.xs=new rn(t=>To(t),_o),this.lastRemoteSnapshotVersion=k.min(),this.highestTargetId=0,this.Ns=0,this.ks=new No,this.targetCount=0,this.Ms=Qt.kn()}forEachTarget(e,t){return this.xs.forEach((i,r)=>t(r)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Ns&&(this.Ns=t),p.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Qt(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,p.resolve()}updateTargetData(e,t){return this.Fn(t),p.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,t,i){let r=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=t&&i.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),p.waitFor(s).next(()=>r)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,t){const i=this.xs.get(t)||null;return p.resolve(i)}addMatchingKeys(e,t,i){return this.ks.gs(t,i),p.resolve()}removeMatchingKeys(e,t,i){this.ks.ps(t,i);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),p.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),p.resolve()}getMatchingKeysForTargetId(e,t){const i=this.ks.Es(t);return p.resolve(i)}containsKey(e,t){return p.resolve(this.ks.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,t){this.$s={},this.overlays={},this.Os=new vo(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new mg(this),this.indexManager=new sg,this.remoteDocumentCache=function(i){return new fg(i)}(i=>this.referenceDelegate.Ls(i)),this.serializer=new ig(t),this.qs=new lg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.$s[e.toKey()];return i||(i=new dg(t,this.referenceDelegate),this.$s[e.toKey()]=i),i}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,i){v("MemoryPersistence","Starting transaction:",e);const r=new yg(this.Os.next());return this.referenceDelegate.Us(),i(r).next(s=>this.referenceDelegate.Ks(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Gs(e,t){return p.or(Object.values(this.$s).map(i=>()=>i.containsKey(e,t)))}}class yg extends Zp{constructor(e){super(),this.currentSequenceNumber=e}}class Do{constructor(e){this.persistence=e,this.Qs=new No,this.js=null}static zs(e){return new Do(e)}get Ws(){if(this.js)return this.js;throw S()}addReference(e,t,i){return this.Qs.addReference(i,t),this.Ws.delete(i.toString()),p.resolve()}removeReference(e,t,i){return this.Qs.removeReference(i,t),this.Ws.add(i.toString()),p.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),p.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(r=>this.Ws.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(s=>this.Ws.add(s.toString()))}).next(()=>i.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Ws,i=>{const r=E.fromPath(i);return this.Hs(e,r).next(s=>{s||t.removeEntry(r,k.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(i=>{i?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return p.or([()=>p.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t,i,r){this.targetId=e,this.fromCache=t,this.Fi=i,this.Bi=r}static Li(e,t){let i=R(),r=R();for(const s of t.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Po(e,t.fromCache,i,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,i,r){return this.Ki(e,t).next(s=>s||this.Gi(e,t,r,i)).next(s=>s||this.Qi(e,t))}Ki(e,t){if(qa(t))return p.resolve(null);let i=Ue(t);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Os(t,null,"F"),i=Ue(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=R(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const u=this.ji(t,a);return this.zi(t,u,o,c.readTime)?this.Ki(e,Os(t,null,"F")):this.Wi(e,u,t,c)}))})))}Gi(e,t,i,r){return qa(t)||r.isEqual(k.min())?this.Qi(e,t):this.Ui.getDocuments(e,i).next(s=>{const o=this.ji(t,s);return this.zi(t,o,i,r)?this.Qi(e,t):(Ma()<=D.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ms(t)),this.Wi(e,o,t,Qp(r,-1)))})}ji(e,t){let i=new ue(cl(e));return t.forEach((r,s)=>{Ir(e,s)&&(i=i.add(s))}),i}zi(e,t,i,r){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Qi(e,t){return Ma()<=D.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",Ms(t)),this.Ui.getDocumentsMatchingQuery(e,t,nt.min())}Wi(e,t,i,r){return this.Ui.getDocumentsMatchingQuery(e,i,r).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,t,i,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new F(P),this.Yi=new rn(s=>To(s),_o),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(i)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ug(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function Ig(n,e,t,i){return new wg(n,e,t,i)}async function Rl(n,e){const t=b(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let r;return t.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,t.tr(e),t.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let c=R();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(i,c).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function Eg(n,e){const t=b(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=t.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=p.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(w=>{const _=c.docVersions.get(m);M(_!==null),w.version.compareTo(_)<0&&(l.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),u.addEntry(w)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,i,e,s).next(()=>s.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=R();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(i,r))})}function Nl(n){const e=b(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function Tg(n,e){const t=b(n),i=e.snapshotVersion;let r=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});r=t.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(t.Bs.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.Bs.addMatchingKeys(s,l.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(le.EMPTY_BYTE_STRING,k.min()).withLastLimboFreeSnapshotVersion(k.min()):l.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(l.resumeToken,i)),r=r.insert(h,m),function(w,_,T){return w.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,m,l)&&a.push(t.Bs.updateTargetData(s,m))});let c=Ve(),u=R();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(_g(s,o,e.documentUpdates).next(l=>{c=l.nr,u=l.sr})),!i.isEqual(k.min())){const l=t.Bs.getLastRemoteSnapshotVersion(s).next(h=>t.Bs.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(l)}return p.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.Ji=r,s))}function _g(n,e,t){let i=R(),r=R();return t.forEach(s=>i=i.add(s)),e.getEntries(n,i).next(s=>{let o=Ve();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(k.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{nr:o,sr:r}})}function Sg(n,e){const t=b(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function Ag(n,e){const t=b(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return t.Bs.getTargetData(i,e).next(s=>s?(r=s,p.resolve(r)):t.Bs.allocateTargetId(i).next(o=>(r=new Ye(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.Bs.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=t.Ji.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(i.targetId,i),t.Yi.set(e,i.targetId)),i})}async function Vs(n,e,t){const i=b(n),r=i.Ji.get(e),s=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ii(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(r.target)}function ec(n,e,t){const i=b(n);let r=k.min(),s=R();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=b(a),h=l.Yi.get(u);return h!==void 0?p.resolve(l.Ji.get(h)):l.Bs.getTargetData(c,u)}(i,o,Ue(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>i.Hi.getDocumentsMatchingQuery(o,e,t?r:k.min(),t?s:R())).next(a=>(kg(i,vm(e),a),{documents:a,ir:s})))}function kg(n,e,t){let i=n.Xi.get(e)||k.min();t.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),n.Xi.set(e,i)}class tc{constructor(){this.activeTargetIds=Sm()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Cg{constructor(){this.Hr=new tc,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,i){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new tc,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ii=null;function is(){return Ii===null?Ii=268435456+Math.round(2147483648*Math.random()):Ii++,"0x"+Ii.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="WebChannelConnection";class Dg extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,i,r,s){const o=is(),a=this.To(e,t);v("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const c={};return this.Eo(c,r,s),this.Ao(e,a,c,i).then(u=>(v("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Ht("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",i),u})}vo(e,t,i,r,s,o){return this.Io(e,t,i,r,s)}Eo(e,t,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+nn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r)}To(e,t){const i=Rg[e];return`${this.mo}/v1/${t}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,i,r){const s=is();return new Promise((o,a)=>{const c=new Up;c.setWithCredentials(!0),c.listenOnce(Lp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ts.NO_ERROR:const l=c.getResponseJson();v(ie,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case ts.TIMEOUT:v(ie,`RPC '${e}' ${s} timed out`),a(new I(f.DEADLINE_EXCEEDED,"Request time out"));break;case ts.HTTP_ERROR:const h=c.getStatus();if(v(ie,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const w=function(_){const T=_.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(T)>=0?T:f.UNKNOWN}(m.status);a(new I(w,m.message))}else a(new I(f.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new I(f.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{v(ie,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(r);v(ie,`RPC '${e}' ${s} sending request:`,r),c.send(t,"POST",u,i,15)})}Ro(e,t,i){const r=is(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Op(),a=Mp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new Fp({})),this.Eo(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const l=s.join("");v(ie,`Creating RPC '${e}' stream ${r}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,m=!1;const w=new Ng({ro:T=>{m?v(ie,`Not sending because RPC '${e}' stream ${r} is closed:`,T):(d||(v(ie,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),v(ie,`RPC '${e}' stream ${r} sending:`,T),h.send(T))},oo:()=>h.close()}),_=(T,V,$)=>{T.listen(V,G=>{try{$(G)}catch(pe){setTimeout(()=>{throw pe},0)}})};return _(h,gi.EventType.OPEN,()=>{m||v(ie,`RPC '${e}' stream ${r} transport opened.`)}),_(h,gi.EventType.CLOSE,()=>{m||(m=!0,v(ie,`RPC '${e}' stream ${r} transport closed`),w.wo())}),_(h,gi.EventType.ERROR,T=>{m||(m=!0,Ht(ie,`RPC '${e}' stream ${r} transport errored:`,T),w.wo(new I(f.UNAVAILABLE,"The operation could not be completed")))}),_(h,gi.EventType.MESSAGE,T=>{var V;if(!m){const $=T.data[0];M(!!$);const G=$,pe=G.error||((V=G[0])===null||V===void 0?void 0:V.error);if(pe){v(ie,`RPC '${e}' stream ${r} received error:`,pe);const ut=pe.status;let lt=function(Br){const Pt=B[Br];if(Pt!==void 0)return Il(Pt)}(ut),cn=pe.message;lt===void 0&&(lt=f.INTERNAL,cn="Unknown error status: "+ut+" with message "+pe.message),m=!0,w.wo(new I(lt,cn)),h.close()}else v(ie,`RPC '${e}' stream ${r} received:`,$),w._o($)}}),_(a,xp.STAT_EVENT,T=>{T.stat===Pa.PROXY?v(ie,`RPC '${e}' stream ${r} detected buffering proxy`):T.stat===Pa.NOPROXY&&v(ie,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{w.fo()},0),w}}function rs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(n){return new qm(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,t,i=1e3,r=1.5,s=6e4){this.ii=e,this.timerId=t,this.Po=i,this.bo=r,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-i);r>0&&v("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t,i,r,s,o,a,c){this.ii=e,this.$o=i,this.Oo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Dl(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===f.RESOURCE_EXHAUSTED?(Fe(t.toString()),Fe("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Fo===t&&this.Zo(i,r)},i=>{e(()=>{const r=new I(f.UNKNOWN,"Fetching auth token failed: "+i.message);return this.tu(r)})})}Zo(e,t){const i=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{i(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{i(()=>this.tu(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Pg extends Pl{constructor(e,t,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,r,o),this.serializer=s}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=Wm(this.serializer,e),i=function(r){if(!("targetChange"in r))return k.min();const s=r.targetChange;return s.targetIds&&s.targetIds.length?k.min():s.readTime?ke(s.readTime):k.min()}(e);return this.listener.nu(t,i)}su(e){const t={};t.database=Us(this.serializer),t.addTarget=function(r,s){let o;const a=s.target;if(o=Ps(a)?{documents:Qm(r,a)}:{query:Ym(r,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=_l(r,s.resumeToken);const c=Ls(r,s.expectedCount);c!==null&&(o.expectedCount=c)}else if(s.snapshotVersion.compareTo(k.min())>0){o.readTime=Gi(r,s.snapshotVersion.toTimestamp());const c=Ls(r,s.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const i=Xm(this.serializer,e);i&&(t.labels=i),this.Wo(t)}iu(e){const t={};t.database=Us(this.serializer),t.removeTarget=e,this.Wo(t)}}class Og extends Pl{constructor(e,t,i,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,r,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(M(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=Gm(e.writeResults,e.commitTime),i=ke(e.commitTime);return this.listener.cu(i,t)}return M(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Us(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>Km(this.serializer,i))};this.Wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg extends class{}{constructor(e,t,i,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new I(f.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.Io(e,t,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new I(f.UNKNOWN,r.toString())})}vo(e,t,i,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,t,i,s,o,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new I(f.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class Lg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Fe(t),this.mu=!1):v("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,t,i,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{i.enqueueAndForget(async()=>{Rt(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=b(a);c.vu.add(4),await oi(c),c.bu.set("Unknown"),c.vu.delete(4),await Ar(c)}(this))})}),this.bu=new Lg(i,r)}}async function Ar(n){if(Rt(n))for(const e of n.Ru)await e(!0)}async function oi(n){for(const e of n.Ru)await e(!1)}function Ol(n,e){const t=b(n);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),Lo(t)?Mo(t):sn(t).Ko()&&Oo(t,e))}function Ml(n,e){const t=b(n),i=sn(t);t.Au.delete(e),i.Ko()&&Ll(t,e),t.Au.size===0&&(i.Ko()?i.jo():Rt(t)&&t.bu.set("Unknown"))}function Oo(n,e){if(n.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(k.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}sn(n).su(e)}function Ll(n,e){n.Vu.qt(e),sn(n).iu(e)}function Mo(n){n.Vu=new Vm({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),le:e=>n.Au.get(e)||null,ue:()=>n.datastore.serializer.databaseId}),sn(n).start(),n.bu.gu()}function Lo(n){return Rt(n)&&!sn(n).Uo()&&n.Au.size>0}function Rt(n){return b(n).vu.size===0}function xl(n){n.Vu=void 0}async function Fg(n){n.Au.forEach((e,t)=>{Oo(n,e)})}async function Ug(n,e){xl(n),Lo(n)?(n.bu.Iu(e),Mo(n)):n.bu.set("Unknown")}async function Vg(n,e,t){if(n.bu.set("Online"),e instanceof Tl&&e.state===2&&e.cause)try{await async function(i,r){const s=r.cause;for(const o of r.targetIds)i.Au.has(o)&&(await i.remoteSyncer.rejectListen(o,s),i.Au.delete(o),i.Vu.removeTarget(o))}(n,e)}catch(i){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Qi(n,i)}else if(e instanceof Si?n.Vu.Ht(e):e instanceof El?n.Vu.ne(e):n.Vu.Xt(e),!t.isEqual(k.min()))try{const i=await Nl(n.localStore);t.compareTo(i)>=0&&await function(r,s){const o=r.Vu.ce(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.Au.get(c);u&&r.Au.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,c)=>{const u=r.Au.get(a);if(!u)return;r.Au.set(a,u.withResumeToken(le.EMPTY_BYTE_STRING,u.snapshotVersion)),Ll(r,a);const l=new Ye(u.target,a,c,u.sequenceNumber);Oo(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(i){v("RemoteStore","Failed to raise snapshot:",i),await Qi(n,i)}}async function Qi(n,e,t){if(!ii(e))throw e;n.vu.add(1),await oi(n),n.bu.set("Offline"),t||(t=()=>Nl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await t(),n.vu.delete(1),await Ar(n)})}function Fl(n,e){return e().catch(t=>Qi(n,t,e))}async function kr(n){const e=b(n),t=rt(e);let i=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;$g(e);)try{const r=await Sg(e.localStore,i);if(r===null){e.Eu.length===0&&t.jo();break}i=r.batchId,Bg(e,r)}catch(r){await Qi(e,r)}Ul(e)&&Vl(e)}function $g(n){return Rt(n)&&n.Eu.length<10}function Bg(n,e){n.Eu.push(e);const t=rt(n);t.Ko()&&t.ou&&t.uu(e.mutations)}function Ul(n){return Rt(n)&&!rt(n).Uo()&&n.Eu.length>0}function Vl(n){rt(n).start()}async function jg(n){rt(n).hu()}async function qg(n){const e=rt(n);for(const t of n.Eu)e.uu(t.mutations)}async function zg(n,e,t){const i=n.Eu.shift(),r=ko.from(i,e,t);await Fl(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await kr(n)}async function Hg(n,e){e&&rt(n).ou&&await async function(t,i){if(r=i.code,xm(r)&&r!==f.ABORTED){const s=t.Eu.shift();rt(t).Qo(),await Fl(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,i)),await kr(t)}var r}(n,e),Ul(n)&&Vl(n)}async function ic(n,e){const t=b(n);t.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const i=Rt(t);t.vu.add(3),await oi(t),i&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await Ar(t)}async function Wg(n,e){const t=b(n);e?(t.vu.delete(2),await Ar(t)):e||(t.vu.add(2),await oi(t),t.bu.set("Unknown"))}function sn(n){return n.Su||(n.Su=function(e,t,i){const r=b(e);return r.fu(),new Pg(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{uo:Fg.bind(null,n),ao:Ug.bind(null,n),nu:Vg.bind(null,n)}),n.Ru.push(async e=>{e?(n.Su.Qo(),Lo(n)?Mo(n):n.bu.set("Unknown")):(await n.Su.stop(),xl(n))})),n.Su}function rt(n){return n.Du||(n.Du=function(e,t,i){const r=b(e);return r.fu(),new Og(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{uo:jg.bind(null,n),ao:Hg.bind(null,n),au:qg.bind(null,n),cu:zg.bind(null,n)}),n.Ru.push(async e=>{e?(n.Du.Qo(),await kr(n)):(await n.Du.stop(),n.Eu.length>0&&(v("RemoteStore",`Stopping write stream with ${n.Eu.length} pending writes`),n.Eu=[]))})),n.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t,i,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,i,r,s){const o=Date.now()+i,a=new xo(e,t,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fo(n,e){if(Fe("AsyncQueue",`${e}: ${n}`),ii(n))return new I(f.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.comparator=e?(t,i)=>e(t,i)||E.comparator(t.key,i.key):(t,i)=>E.comparator(t.key,i.key),this.keyedMap=mn(),this.sortedSet=new F(this.comparator)}static emptySet(e){return new $t(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $t)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new $t;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(){this.Cu=new F(E.comparator)}track(e){const t=e.doc.key,i=this.Cu.get(t);i?e.type!==0&&i.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&i.type!==1?this.Cu=this.Cu.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Cu=this.Cu.remove(t):e.type===1&&i.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):S():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,i)=>{e.push(i)}),e}}class Yt{constructor(e,t,i,r,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,i,r,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Yt(e,t,$t.emptySet(t),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==i[r].type||!t[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(){this.Nu=void 0,this.listeners=[]}}class Gg{constructor(){this.queries=new rn(e=>al(e),wr),this.onlineState="Unknown",this.ku=new Set}}async function Qg(n,e){const t=b(n),i=e.query;let r=!1,s=t.queries.get(i);if(s||(r=!0,s=new Kg),r)try{s.Nu=await t.onListen(i)}catch(o){const a=Fo(o,`Initialization of query '${Ms(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.listeners.push(e),e.Mu(t.onlineState),s.Nu&&e.$u(s.Nu)&&Uo(t)}async function Yg(n,e){const t=b(n),i=e.query;let r=!1;const s=t.queries.get(i);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return t.queries.delete(i),t.onUnlisten(i)}function Jg(n,e){const t=b(n);let i=!1;for(const r of e){const s=r.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.$u(r)&&(i=!0);o.Nu=r}}i&&Uo(t)}function Xg(n,e,t){const i=b(n),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(t);i.queries.delete(e)}function Uo(n){n.ku.forEach(e=>{e.next()})}class Zg{constructor(e,t,i){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=i||{}}$u(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new Yt(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const i=t!=="Offline";return(!this.options.Ku||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=Yt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.key=e}}class Bl{constructor(e){this.key=e}}class ey{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=R(),this.mutatedKeys=R(),this.tc=cl(e),this.ec=new $t(this.tc)}get nc(){return this.Yu}sc(e,t){const i=t?t.ic:new rc,r=t?t.ec:this.ec;let s=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),m=Ir(this.query,h)?h:null,w=!!d&&this.mutatedKeys.has(d.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let T=!1;d&&m?d.data.isEqual(m.data)?w!==_&&(i.track({type:3,doc:m}),T=!0):this.rc(d,m)||(i.track({type:2,doc:m}),T=!0,(c&&this.tc(m,c)>0||u&&this.tc(m,u)<0)&&(a=!0)):!d&&m?(i.track({type:0,doc:m}),T=!0):d&&!m&&(i.track({type:1,doc:d}),T=!0,(c||u)&&(a=!0)),T&&(m?(o=o.add(m),s=_?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),i.track({type:1,doc:l})}return{ec:o,ic:i,zi:a,mutatedKeys:s}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,l)=>function(h,d){const m=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return m(h)-m(d)}(u.type,l.type)||this.tc(u.doc,l.doc)),this.oc(i);const o=t?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,s.length!==0||c?{snapshot:new Yt(this.query,e.ec,r,s,e.mutatedKeys,a===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new rc,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=R(),this.ec.forEach(i=>{this.ac(i.key)&&(this.Zu=this.Zu.add(i.key))});const t=[];return e.forEach(i=>{this.Zu.has(i)||t.push(new Bl(i))}),this.Zu.forEach(i=>{e.has(i)||t.push(new $l(i))}),t}hc(e){this.Yu=e.ir,this.Zu=R();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Yt.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class ty{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class ny{constructor(e){this.key=e,this.fc=!1}}class iy{constructor(e,t,i,r,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new rn(a=>al(a),wr),this._c=new Map,this.mc=new Set,this.gc=new F(E.comparator),this.yc=new Map,this.Ic=new No,this.Tc={},this.Ec=new Map,this.Ac=Qt.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function ry(n,e){const t=py(n);let i,r;const s=t.wc.get(e);if(s)i=s.targetId,t.sharedClientState.addLocalQueryTarget(i),r=s.view.lc();else{const o=await Ag(t.localStore,Ue(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await sy(t,e,i,a==="current",o.resumeToken),t.isPrimaryClient&&Ol(t.remoteStore,o)}return r}async function sy(n,e,t,i,r){n.Rc=(h,d,m)=>async function(w,_,T,V){let $=_.view.sc(T);$.zi&&($=await ec(w.localStore,_.query,!1).then(({documents:ut})=>_.view.sc(ut,$)));const G=V&&V.targetChanges.get(_.targetId),pe=_.view.applyChanges($,w.isPrimaryClient,G);return oc(w,_.targetId,pe.cc),pe.snapshot}(n,h,d,m);const s=await ec(n.localStore,e,!0),o=new ey(e,s.ir),a=o.sc(s.documents),c=si.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",r),u=o.applyChanges(a,n.isPrimaryClient,c);oc(n,t,u.cc);const l=new ty(e,t,o);return n.wc.set(e,l),n._c.has(t)?n._c.get(t).push(e):n._c.set(t,[e]),u.snapshot}async function oy(n,e){const t=b(n),i=t.wc.get(e),r=t._c.get(i.targetId);if(r.length>1)return t._c.set(i.targetId,r.filter(s=>!wr(s,e))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(i.targetId),t.sharedClientState.isActiveQueryTarget(i.targetId)||await Vs(t.localStore,i.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(i.targetId),Ml(t.remoteStore,i.targetId),$s(t,i.targetId)}).catch(ni)):($s(t,i.targetId),await Vs(t.localStore,i.targetId,!0))}async function ay(n,e,t){const i=my(n);try{const r=await function(s,o){const a=b(s),c=W.now(),u=o.reduce((d,m)=>d.add(m.key),R());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=Ve(),w=R();return a.Zi.getEntries(d,u).next(_=>{m=_,m.forEach((T,V)=>{V.isValidDocument()||(w=w.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(_=>{l=_;const T=[];for(const V of o){const $=Dm(V,l.get(V.key).overlayedDocument);$!=null&&T.push(new ct(V.key,$,el($.value.mapValue),Ee.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,T,o)}).next(_=>{h=_;const T=_.applyToLocalDocumentSet(l,w);return a.documentOverlayCache.saveOverlays(d,_.batchId,T)})}).then(()=>({batchId:h.batchId,changes:ll(l)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(s,o,a){let c=s.Tc[s.currentUser.toKey()];c||(c=new F(P)),c=c.insert(o,a),s.Tc[s.currentUser.toKey()]=c}(i,r.batchId,t),await ai(i,r.changes),await kr(i.remoteStore)}catch(r){const s=Fo(r,"Failed to persist write");t.reject(s)}}async function jl(n,e){const t=b(n);try{const i=await Tg(t.localStore,e);e.targetChanges.forEach((r,s)=>{const o=t.yc.get(s);o&&(M(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?M(o.fc):r.removedDocuments.size>0&&(M(o.fc),o.fc=!1))}),await ai(t,i,e)}catch(i){await ni(i)}}function sc(n,e,t){const i=b(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const r=[];i.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)}),function(s,o){const a=b(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Mu(o)&&(c=!0)}),c&&Uo(a)}(i.eventManager,e),r.length&&i.dc.nu(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function cy(n,e,t){const i=b(n);i.sharedClientState.updateQueryState(e,"rejected",t);const r=i.yc.get(e),s=r&&r.key;if(s){let o=new F(E.comparator);o=o.insert(s,se.newNoDocument(s,k.min()));const a=R().add(s),c=new _r(k.min(),new Map,new F(P),o,a);await jl(i,c),i.gc=i.gc.remove(s),i.yc.delete(e),Vo(i)}else await Vs(i.localStore,e,!1).then(()=>$s(i,e,t)).catch(ni)}async function uy(n,e){const t=b(n),i=e.batch.batchId;try{const r=await Eg(t.localStore,e);zl(t,i,null),ql(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await ai(t,r)}catch(r){await ni(r)}}async function ly(n,e,t){const i=b(n);try{const r=await function(s,o){const a=b(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(M(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(i.localStore,e);zl(i,e,t),ql(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await ai(i,r)}catch(r){await ni(r)}}function ql(n,e){(n.Ec.get(e)||[]).forEach(t=>{t.resolve()}),n.Ec.delete(e)}function zl(n,e,t){const i=b(n);let r=i.Tc[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(t?s.reject(t):s.resolve(),r=r.remove(e)),i.Tc[i.currentUser.toKey()]=r}}function $s(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n._c.get(e))n.wc.delete(i),t&&n.dc.Pc(i,t);n._c.delete(e),n.isPrimaryClient&&n.Ic.Is(e).forEach(i=>{n.Ic.containsKey(i)||Hl(n,i)})}function Hl(n,e){n.mc.delete(e.path.canonicalString());const t=n.gc.get(e);t!==null&&(Ml(n.remoteStore,t),n.gc=n.gc.remove(e),n.yc.delete(t),Vo(n))}function oc(n,e,t){for(const i of t)i instanceof $l?(n.Ic.addReference(i.key,e),hy(n,i)):i instanceof Bl?(v("SyncEngine","Document no longer in limbo: "+i.key),n.Ic.removeReference(i.key,e),n.Ic.containsKey(i.key)||Hl(n,i.key)):S()}function hy(n,e){const t=e.key,i=t.path.canonicalString();n.gc.get(t)||n.mc.has(i)||(v("SyncEngine","New document in limbo: "+t),n.mc.add(i),Vo(n))}function Vo(n){for(;n.mc.size>0&&n.gc.size<n.maxConcurrentLimboResolutions;){const e=n.mc.values().next().value;n.mc.delete(e);const t=new E(x.fromString(e)),i=n.Ac.next();n.yc.set(i,new ny(t)),n.gc=n.gc.insert(t,i),Ol(n.remoteStore,new Ye(Ue(So(t.path)),i,"TargetPurposeLimboResolution",vo.ct))}}async function ai(n,e,t){const i=b(n),r=[],s=[],o=[];i.wc.isEmpty()||(i.wc.forEach((a,c)=>{o.push(i.Rc(c,e,t).then(u=>{if((u||t)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Po.Li(c.targetId,u);s.push(l)}}))}),await Promise.all(o),i.dc.nu(r),await async function(a,c){const u=b(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(c,h=>p.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>p.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!ii(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Ji.get(h),m=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(m);u.Ji=u.Ji.insert(h,w)}}}(i.localStore,s))}async function dy(n,e){const t=b(n);if(!t.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const i=await Rl(t.localStore,e);t.currentUser=e,function(r,s){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new I(f.CANCELLED,s))})}),r.Ec.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ai(t,i.er)}}function fy(n,e){const t=b(n),i=t.yc.get(e);if(i&&i.fc)return R().add(i.key);{let r=R();const s=t._c.get(e);if(!s)return r;for(const o of s){const a=t.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function py(n){const e=b(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=jl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cy.bind(null,e),e.dc.nu=Jg.bind(null,e.eventManager),e.dc.Pc=Xg.bind(null,e.eventManager),e}function my(n){const e=b(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ly.bind(null,e),e}class ac{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Sr(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Ig(this.persistence,new vg,e.initialUser,this.serializer)}createPersistence(e){return new gg(Do.zs,this.serializer)}createSharedClientState(e){return new Cg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gy{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>sc(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=dy.bind(null,this.syncEngine),await Wg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Gg}createDatastore(e){const t=Sr(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new Dg(r));var r;return function(s,o,a,c){return new Mg(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return t=this.localStore,i=this.datastore,r=e.asyncQueue,s=a=>sc(this.syncEngine,a,0),o=nc.D()?new nc:new bg,new xg(t,i,r,s,o);var t,i,r,s,o}createSyncEngine(e,t){return function(i,r,s,o,a,c,u){const l=new iy(i,r,s,o,a,c);return u&&(l.vc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=b(e);v("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await oi(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Fe("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,t,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=r,this.user=re.UNAUTHENTICATED,this.clientId=Ju.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{v("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(v("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Fo(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function ss(n,e){n.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async r=>{i.isEqual(r)||(await Rl(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function cc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Iy(n);v("FirestoreClient","Initializing OnlineComponentProvider");const i=await n.getConfiguration();await e.initialize(t,i),n.setCredentialChangeListener(r=>ic(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ic(e.remoteStore,s)),n._onlineComponents=e}function wy(n){return n.name==="FirebaseError"?n.code===f.FAILED_PRECONDITION||n.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Iy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){v("FirestoreClient","Using user provided OfflineComponentProvider");try{await ss(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!wy(t))throw t;Ht("Error using user provided cache. Falling back to memory cache: "+t),await ss(n,new ac)}}else v("FirestoreClient","Using default OfflineComponentProvider"),await ss(n,new ac);return n._offlineComponents}async function Wl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(v("FirestoreClient","Using user provided OnlineComponentProvider"),await cc(n,n._uninitializedComponentsProvider._online)):(v("FirestoreClient","Using default OnlineComponentProvider"),await cc(n,new gy))),n._onlineComponents}function Ey(n){return Wl(n).then(e=>e.syncEngine)}async function uc(n){const e=await Wl(n),t=e.eventManager;return t.onListen=ry.bind(null,e.syncEngine),t.onUnlisten=oy.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(n,e,t){if(!t)throw new I(f.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ty(n,e,t,i){if(e===!0&&i===!0)throw new I(f.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function hc(n){if(!E.isDocumentKey(n))throw new I(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function dc(n){if(E.isDocumentKey(n))throw new I(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function $o(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":S()}function Ze(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new I(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$o(n);throw new I(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new I(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new I(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ty("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kl((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new I(f.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new I(f.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new I(f.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,t.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,i}}class Cr{constructor(e,t,i,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new I(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fc(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new $p;switch(t.type){case"firstParty":return new zp(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new I(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=lc.get(e);t&&(v("ComponentProvider","Removing Datastore"),lc.delete(e),t.terminate())}(this),Promise.resolve()}}function _y(n,e,t,i={}){var r;const s=(n=Ze(n,Cr))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Ht("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${t}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=re.MOCK_USER;else{o=ud(i.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new I(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new re(c)}n._authCredentials=new Bp(new Yu(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new et(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ge(this.firestore,e,this._key)}}class br{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new br(this.firestore,e,this._query)}}class et extends br{constructor(e,t,i){super(e,t,So(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ge(this.firestore,null,new E(e))}withConverter(e){return new et(this.firestore,e,this._path)}}function CI(n,e,...t){if(n=C(n),Gl("collection","path",e),n instanceof Cr){const i=x.fromString(e,...t);return dc(i),new et(n,null,i)}{if(!(n instanceof ge||n instanceof et))throw new I(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(x.fromString(e,...t));return dc(i),new et(n.firestore,null,i)}}function Sy(n,e,...t){if(n=C(n),arguments.length===1&&(e=Ju.A()),Gl("doc","path",e),n instanceof Cr){const i=x.fromString(e,...t);return hc(i),new ge(n,null,new E(i))}{if(!(n instanceof ge||n instanceof et))throw new I(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(x.fromString(e,...t));return hc(i),new ge(n.firestore,n instanceof et?n.converter:null,new E(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Dl(this,"async_queue_retry"),this.Xc=()=>{const t=rs();t&&v("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=rs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=rs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new yt;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!ii(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(i=>{this.Wc=i,this.Hc=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Fe("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Hc=!1,i))));return this.Gc=t,t}enqueueAfterDelay(e,t,i){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const r=xo.createAndSchedule(this,e,t,i,s=>this.na(s));return this.zc.push(r),r}Zc(){this.Wc&&S()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function pc(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const i=e;for(const r of t)if(r in i&&typeof i[r]=="function")return!0;return!1}(n,["next","error","complete"])}class Jt extends Cr{constructor(e,t,i,r){super(e,t,i,r),this.type="firestore",this._queue=new Ay,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Yl(this),this._firestoreClient.terminate()}}function bI(n,e){const t=typeof n=="object"?n:Ks(),i=typeof n=="string"?n:e||"(default)",r=Wn(t,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=ad("firestore");s&&_y(r,...s)}return r}function Ql(n){return n._firestoreClient||Yl(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Yl(n){var e,t,i;const r=n._freezeSettings(),s=function(o,a,c,u){return new nm(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Kl(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._firestoreClient=new vy(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=r.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=r.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xt(le.fromBase64String(e))}catch(t){throw new I(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xt(le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new I(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new I(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new I(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return P(this._lat,e._lat)||P(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=/^__.*__$/;class Cy{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new ct(e,this.data,this.fieldMask,t,this.fieldTransforms):new ri(e,this.data,t,this.fieldTransforms)}}class Jl{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new ct(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Xl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class qo{constructor(e,t,i,r,s,o){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new qo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.aa({path:i,la:!1});return r.fa(e),r}da(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.aa({path:i,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Yi(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Xl(this.ca)&&ky.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class by{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Sr(e)}ya(e,t,i,r=!1){return new qo({ca:e,methodName:t,ga:i,path:oe.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zl(n){const e=n._freezeSettings(),t=Sr(n._databaseId);return new by(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ry(n,e,t,i,r,s={}){const o=n.ya(s.merge||s.mergeFields?2:0,e,t,r);zo("Data must be an object, but it was:",o,i);const a=eh(i,o);let c,u;if(s.merge)c=new me(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=Bs(e,h,t);if(!o.contains(d))throw new I(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);nh(l,d)||l.push(d)}c=new me(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new Cy(new de(a),c,u)}class Nr extends Bo{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Nr}}function Ny(n,e,t,i){const r=n.ya(1,e,t);zo("Data must be an object, but it was:",r,i);const s=[],o=de.empty();bt(i,(c,u)=>{const l=Ho(e,c,t);u=C(u);const h=r.da(l);if(u instanceof Nr)s.push(l);else{const d=Dr(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new me(s);return new Jl(o,a,r.fieldTransforms)}function Dy(n,e,t,i,r,s){const o=n.ya(1,e,t),a=[Bs(e,i,t)],c=[r];if(s.length%2!=0)throw new I(f.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Bs(e,s[d])),c.push(s[d+1]);const u=[],l=de.empty();for(let d=a.length-1;d>=0;--d)if(!nh(u,a[d])){const m=a[d];let w=c[d];w=C(w);const _=o.da(m);if(w instanceof Nr)u.push(m);else{const T=Dr(w,_);T!=null&&(u.push(m),l.set(m,T))}}const h=new me(u);return new Jl(l,h,o.fieldTransforms)}function Dr(n,e){if(th(n=C(n)))return zo("Unsupported field value:",e,n),eh(n,e);if(n instanceof Bo)return function(t,i){if(!Xl(i.ca))throw i._a(`${t._methodName}() can only be used with update() and set()`);if(!i.path)throw i._a(`${t._methodName}() is not currently supported inside arrays`);const r=t._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(t,i){const r=[];let s=0;for(const o of t){let a=Dr(o,i.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(n,e)}return function(t,i){if((t=C(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Am(i.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const r=W.fromDate(t);return{timestampValue:Gi(i.serializer,r)}}if(t instanceof W){const r=new W(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Gi(i.serializer,r)}}if(t instanceof jo)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Xt)return{bytesValue:_l(i.serializer,t._byteString)};if(t instanceof ge){const r=i.databaseId,s=t.firestore._databaseId;if(!s.isEqual(r))throw i._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ro(t.firestore._databaseId||i.databaseId,t._key.path)}}throw i._a(`Unsupported field value: ${$o(t)}`)}(n,e)}function eh(n,e){const t={};return Xu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bt(n,(i,r)=>{const s=Dr(r,e.ha(i));s!=null&&(t[i]=s)}),{mapValue:{fields:t}}}function th(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof W||n instanceof jo||n instanceof Xt||n instanceof ge||n instanceof Bo)}function zo(n,e,t){if(!th(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const i=$o(t);throw i==="an object"?e._a(n+" a custom object"):e._a(n+" "+i)}}function Bs(n,e,t){if((e=C(e))instanceof Rr)return e._internalPath;if(typeof e=="string")return Ho(n,e);throw Yi("Field path arguments must be of type string or ",n,!1,void 0,t)}const Py=new RegExp("[~\\*/\\[\\]]");function Ho(n,e,t){if(e.search(Py)>=0)throw Yi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Rr(...e.split("."))._internalPath}catch{throw Yi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Yi(n,e,t,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new I(f.INVALID_ARGUMENT,a+n+c)}function nh(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,t,i,r,s){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Oy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(rh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Oy extends ih{data(){return super.data()}}function rh(n,e){return typeof e=="string"?Ho(n,e):e instanceof Rr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new I(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ly{convertValue(e,t="none"){switch(At(e)){case 0:return null;case 1:return e.booleanValue;case 2:return q(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(St(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw S()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return bt(e,(r,s)=>{i[r]=this.convertValue(s,t)}),i}convertGeoPoint(e){return new jo(q(e.latitude),q(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Io(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Ln(e));default:return null}}convertTimestamp(e){const t=it(e);return new W(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=x.fromString(e);M(bl(i));const r=new xn(i.get(1),i.get(3)),s=new E(i.popFirst(5));return r.isEqual(t)||Fe(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sh extends ih{constructor(e,t,i,r,s,o){super(e,t,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ai(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(rh("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Ai extends sh{data(e={}){return super.data(e)}}class Fy{constructor(e,t,i,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new yn(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Ai(this._firestore,this._userDataWriter,i.key,i,new yn(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new I(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(o=>{const a=new Ai(i._firestore,i._userDataWriter,o.doc.key,o.doc,new yn(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ai(i._firestore,i._userDataWriter,o.doc.key,o.doc,new yn(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:Uy(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Uy(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}class oh extends Ly{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ge(this.firestore,null,t)}}function RI(n,e,t,...i){n=Ze(n,ge);const r=Ze(n.firestore,Jt),s=Zl(r);let o;return o=typeof(e=C(e))=="string"||e instanceof Rr?Dy(s,"updateDoc",n._key,e,t,i):Ny(s,"updateDoc",n._key,e),Wo(r,[o.toMutation(n._key,Ee.exists(!0))])}function NI(n){return Wo(Ze(n.firestore,Jt),[new Ao(n._key,Ee.none())])}function DI(n,e){const t=Ze(n.firestore,Jt),i=Sy(n),r=xy(n.converter,e);return Wo(t,[Ry(Zl(n.firestore),"addDoc",i._key,r,n.converter!==null,{}).toMutation(i._key,Ee.exists(!1))]).then(()=>i)}function PI(n,...e){var t,i,r;n=C(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||pc(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(pc(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,u,l;if(n instanceof ge)u=Ze(n.firestore,Jt),l=So(n._key.path),c={next:h=>{e[o]&&e[o](Vy(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=Ze(n,br);u=Ze(h.firestore,Jt),l=h._query;const d=new oh(u);c={next:m=>{e[o]&&e[o](new Fy(u,d,h,m))},error:e[o+1],complete:e[o+2]},My(n._query)}return function(h,d,m,w){const _=new yy(w),T=new Zg(d,_,m);return h.asyncQueue.enqueueAndForget(async()=>Qg(await uc(h),T)),()=>{_.Dc(),h.asyncQueue.enqueueAndForget(async()=>Yg(await uc(h),T))}}(Ql(u),l,a,c)}function Wo(n,e){return function(t,i){const r=new yt;return t.asyncQueue.enqueueAndForget(async()=>ay(await Ey(t),i,r)),r.promise}(Ql(n),e)}function Vy(n,e,t){const i=t.docs.get(e._key),r=new oh(n);return new sh(n,r,e._key,i,new yn(t.hasPendingWrites,t.fromCache),e.converter)}(function(n,e=!0){(function(t){nn=t})(kt),Tt(new It("firestore",(t,{instanceIdentifier:i,options:r})=>{const s=t.getProvider("app").getImmediate(),o=new Jt(new jp(t.getProvider("auth-internal")),new Wp(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new I(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xn(a.options.projectId,c)}(s,i),s);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Xe(Oa,"3.12.0",n),Xe(Oa,"3.12.0","esm2017")})();function Ko(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}const OI={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},MI={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function ah(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LI=$y,By=ah,ch=new Hn("auth","Firebase",ah());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new Hs("@firebase/auth");function jy(n,...e){Ji.logLevel<=D.WARN&&Ji.warn(`Auth (${kt}): ${n}`,...e)}function ki(n,...e){Ji.logLevel<=D.ERROR&&Ji.error(`Auth (${kt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(n,...e){throw Go(n,...e)}function ye(n,...e){return Go(n,...e)}function uh(n,e,t){const i=Object.assign(Object.assign({},By()),{[e]:t});return new Hn("auth","Firebase",i).create(e,{appName:n.name})}function on(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&fe(n,"argument-error"),uh(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Go(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ch.create(n,...e)}function g(n,e,...t){if(!n)throw Go(e,...t)}function Ae(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ki(e),new Error(e)}function $e(n,e){n||Ae(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Qo(){return mc()==="http:"||mc()==="https:"}function mc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qo()||hd()||"connection"in navigator)?navigator.onLine:!0}function zy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t){this.shortDelay=e,this.longDelay=t,$e(t>e,"Short delay should be less than long delay!"),this.isMobile=ld()||dd()}get(){return qy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(n,e){$e(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ae("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ae("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ae("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=new ci(3e4,6e4);function z(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function K(n,e,t,i,r={}){return hh(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Zt(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),lh.fetch()(dh(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function hh(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Hy),e);try{const r=new Ky(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw vn(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw vn(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw vn(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw vn(n,"user-disabled",o);const l=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw uh(n,l,u);fe(n,l)}}catch(r){if(r instanceof Re)throw r;fe(n,"network-request-failed",{message:String(r)})}}async function qe(n,e,t,i,r={}){const s=await K(n,e,t,i,r);return"mfaPendingCredential"in s&&fe(n,"multi-factor-auth-required",{_serverResponse:s}),s}function dh(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?Yo(n.config,r):`${n.config.apiScheme}://${r}`}class Ky{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ye(this.auth,"network-request-failed")),Wy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=ye(n,e,i);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gy(n,e){return K(n,"POST","/v1/accounts:delete",e)}async function Qy(n,e){return K(n,"POST","/v1/accounts:update",e)}async function Yy(n,e){return K(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jy(n,e=!1){const t=C(n),i=await t.getIdToken(e),r=Pr(i);g(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Sn(os(r.auth_time)),issuedAtTime:Sn(os(r.iat)),expirationTime:Sn(os(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function os(n){return Number(n)*1e3}function Pr(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ki("JWT malformed, contained fewer than 3 sections"),null;try{const r=Lc(t);return r?JSON.parse(r):(ki("Failed to decode base64 JWT payload"),null)}catch(r){return ki("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Xy(n){const e=Pr(n);return g(e,"internal-error"),g(typeof e.exp<"u","internal-error"),g(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Re&&Zy(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Zy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sn(this.lastLoginAt),this.creationTime=Sn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(n){var e;const t=n.auth,i=await n.getIdToken(),r=await Be(n,Yy(t,{idToken:i}));g(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?iv(s.providerUserInfo):[],a=nv(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new fh(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function tv(n){const e=C(n);await Bn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nv(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function iv(n){return n.map(e=>{var{providerId:t}=e,i=Ko(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rv(n,e){const t=await hh(n,{},async()=>{const i=Zt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=dh(n,r,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lh.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(typeof e.idToken<"u","internal-error"),g(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await rv(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new jn;return i&&(g(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(g(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(g(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jn,this.toJSON())}_performRefresh(){return Ae("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(n,e){g(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class vt{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=Ko(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ev(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Be(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Jy(this,e)}reload(){return tv(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Bn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Be(this,Gy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,a,c,u,l;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(r=t.email)!==null&&r!==void 0?r:void 0,m=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=t.photoURL)!==null&&o!==void 0?o:void 0,_=(a=t.tenantId)!==null&&a!==void 0?a:void 0,T=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,V=(u=t.createdAt)!==null&&u!==void 0?u:void 0,$=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:G,emailVerified:pe,isAnonymous:ut,providerData:lt,stsTokenManager:cn}=t;g(G&&cn,e,"internal-error");const Br=jn.fromJSON(this.name,cn);g(typeof G=="string",e,"internal-error"),He(h,e.name),He(d,e.name),g(typeof pe=="boolean",e,"internal-error"),g(typeof ut=="boolean",e,"internal-error"),He(m,e.name),He(w,e.name),He(_,e.name),He(T,e.name),He(V,e.name),He($,e.name);const Pt=new vt({uid:G,auth:e,email:d,emailVerified:pe,displayName:h,isAnonymous:ut,photoURL:w,phoneNumber:m,tenantId:_,stsTokenManager:Br,createdAt:V,lastLoginAt:$});return lt&&Array.isArray(lt)&&(Pt.providerData=lt.map(Jh=>Object.assign({},Jh))),T&&(Pt._redirectEventId=T),Pt}static async _fromIdTokenResponse(e,t,i=!1){const r=new jn;r.updateFromServerResponse(t);const s=new vt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Bn(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=new Map;function Pe(n){$e(n instanceof Function,"Expected a class definition");let e=gc.get(n);return e?($e(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,gc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ph.type="NONE";const yc=ph;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(n,e,t){return`firebase:${n}:${e}:${t}`}class Bt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Ci(this.userKey,r.apiKey,s),this.fullPersistenceKey=Ci("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Bt(Pe(yc),e,i);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||Pe(yc);const o=Ci(i,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=vt._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Bt(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Bt(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wh(e))return"Blackberry";if(Ih(e))return"Webos";if(Jo(e))return"Safari";if((e.includes("chrome/")||gh(e))&&!e.includes("edge/"))return"Chrome";if(vh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function mh(n=ne()){return/firefox\//i.test(n)}function Jo(n=ne()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gh(n=ne()){return/crios\//i.test(n)}function yh(n=ne()){return/iemobile/i.test(n)}function vh(n=ne()){return/android/i.test(n)}function wh(n=ne()){return/blackberry/i.test(n)}function Ih(n=ne()){return/webos/i.test(n)}function Or(n=ne()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function xI(n=ne()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function sv(n=ne()){var e;return Or(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ov(){return fd()&&document.documentMode===10}function Eh(n=ne()){return Or(n)||vh(n)||Ih(n)||wh(n)||/windows phone/i.test(n)||yh(n)}function av(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(n,e=[]){let t;switch(n){case"Browser":t=vc(ne());break;case"Worker":t=`${vc(ne())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${kt}/${i}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cv(n){return(await K(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function _h(n,e){return K(n,"GET","/v2/recaptchaConfig",z(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(n){return n!==void 0&&n.getResponse!==void 0}function Ic(n){return n!==void 0&&n.enterprise!==void 0}class Sh{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Xo(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=ye("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",uv().appendChild(i)})}function Ah(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const lv="https://www.google.com/recaptcha/enterprise.js?render=",hv="recaptcha-enterprise",dv="NO_RECAPTCHA";class kh{constructor(e){this.type=hv,this.auth=X(e)}async verify(e="verify",t=!1){async function i(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{_h(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Sh(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function r(s,o,a){const c=window.grecaptcha;Ic(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(dv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!t&&Ic(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Xo(lv+a).then(()=>{r(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function st(n,e,t,i=!1){const r=new kh(n);let s;try{s=await r.verify(t)}catch{s=await r.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ec(this),this.idTokenSubscription=new Ec(this),this.beforeStateQueue=new fv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ch,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pe(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Bt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?C(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pe(e))})}async initializeRecaptchaConfig(){const e=await _h(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Sh(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new kh(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pe(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await Bt.create(this,[Pe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return g(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,i,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Th(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&jy(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function X(n){return C(n)}class Ec{constructor(e){this.auth=e,this.observer=null,this.addObserver=Id(t=>this.observer=t)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(n,e){const t=Wn(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(Oi(s,e??{}))return r;fe(r,"already-initialized")}return t.initialize({options:e})}function gv(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Pe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function yv(n,e,t){const i=X(n);g(i._canInitEmulator,i,"emulator-config-failed"),g(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),s=Ch(e),{host:o,port:a}=vv(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||wv()}function Ch(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function vv(n){const e=Ch(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Tc(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Tc(o)}}}function Tc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function wv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ae("not implemented")}_getIdTokenResponse(e){return Ae("not implemented")}_linkToIdToken(e,t){return Ae("not implemented")}_getReauthenticationResolver(e){return Ae("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bh(n,e){return K(n,"POST","/v1/accounts:resetPassword",z(n,e))}async function Rh(n,e){return K(n,"POST","/v1/accounts:update",e)}async function Iv(n,e){return K(n,"POST","/v1/accounts:update",z(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(n,e){return qe(n,"POST","/v1/accounts:signInWithPassword",z(n,e))}async function Mr(n,e){return K(n,"POST","/v1/accounts:sendOobCode",z(n,e))}async function Ev(n,e){return Mr(n,e)}async function cs(n,e){return Mr(n,e)}async function us(n,e){return Mr(n,e)}async function Tv(n,e){return Mr(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _v(n,e){return qe(n,"POST","/v1/accounts:signInWithEmailLink",z(n,e))}async function Sv(n,e){return qe(n,"POST","/v1/accounts:signInWithEmailLink",z(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends ui{constructor(e,t,i,r=null){super("password",i),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new qn(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new qn(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const r=await st(e,i,"signInWithPassword");return as(e,r)}else return as(e,i).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await st(e,i,"signInWithPassword");return as(e,s)}else return Promise.reject(r)});case"emailLink":return _v(e,{email:this._email,oobCode:this._password});default:fe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Rh(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Sv(e,{idToken:t,email:this._email,oobCode:this._password});default:fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(n,e){return qe(n,"POST","/v1/accounts:signInWithIdp",z(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av="http://localhost";class je extends ui{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new je(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=Ko(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new je(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Le(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Le(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Le(e,t)}buildRequest(){const e={requestUri:Av,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kv(n,e){return K(n,"POST","/v1/accounts:sendVerificationCode",z(n,e))}async function Cv(n,e){return qe(n,"POST","/v1/accounts:signInWithPhoneNumber",z(n,e))}async function bv(n,e){const t=await qe(n,"POST","/v1/accounts:signInWithPhoneNumber",z(n,e));if(t.temporaryProof)throw vn(n,"account-exists-with-different-credential",t);return t}const Rv={USER_NOT_FOUND:"user-not-found"};async function Nv(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return qe(n,"POST","/v1/accounts:signInWithPhoneNumber",z(n,t),Rv)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends ui{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new wt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new wt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Cv(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return bv(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Nv(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:s}=e;return!i&&!t&&!r&&!s?null:new wt({verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Pv(n){const e=hn(dn(n)).link,t=e?hn(dn(e)).deep_link_id:null,i=hn(dn(n)).deep_link_id;return(i?hn(dn(i)).link:null)||i||t||e||n}class Lr{constructor(e){var t,i,r,s,o,a;const c=hn(dn(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(i=c.oobCode)!==null&&i!==void 0?i:null,h=Dv((r=c.mode)!==null&&r!==void 0?r:null);g(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Pv(e);try{return new Lr(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(){this.providerId=Nt.PROVIDER_ID}static credential(e,t){return qn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Lr.parseLink(t);return g(i,"argument-error"),qn._fromEmailAndCode(e,i.code,i.tenantId)}}Nt.PROVIDER_ID="password";Nt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends ze{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class bi extends an{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return g("providerId"in t&&"signInMethod"in t,"argument-error"),je._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return g(e.idToken||e.accessToken,"argument-error"),je._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return bi.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return bi.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:r,pendingToken:s,nonce:o,providerId:a}=e;if(!i&&!r&&!t&&!s||!a)return null;try{return new bi(a)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends an{constructor(){super("facebook.com")}static credential(e){return je._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return We.credential(e.oauthAccessToken)}catch{return null}}}We.FACEBOOK_SIGN_IN_METHOD="facebook.com";We.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends an{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return je._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ke.credential(t,i)}catch{return null}}}Ke.GOOGLE_SIGN_IN_METHOD="google.com";Ke.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends an{constructor(){super("github.com")}static credential(e){return je._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ge.credential(e.oauthAccessToken)}catch{return null}}}Ge.GITHUB_SIGN_IN_METHOD="github.com";Ge.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov="http://localhost";class zn extends ui{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Le(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Le(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Le(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,pendingToken:s}=t;return!i||!r||!s||i!==r?null:new zn(i,s)}static _create(e,t){return new zn(e,t)}buildRequest(){return{requestUri:Ov,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="saml.";class js extends ze{constructor(e){g(e.startsWith(Mv),"argument-error"),super(e)}static credentialFromResult(e){return js.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return js.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=zn.fromJSON(e);return g(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:i}=e;if(!t||!i)return null;try{return zn._create(i,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends an{constructor(){super("twitter.com")}static credential(e,t){return je._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Qe.credential(t,i)}catch{return null}}}Qe.TWITTER_SIGN_IN_METHOD="twitter.com";Qe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ri(n,e){return qe(n,"POST","/v1/accounts:signUp",z(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await vt._fromIdTokenResponse(e,i,r),o=_c(i);return new Ie({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=_c(i);return new Ie({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function _c(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FI(n){var e;const t=X(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ie({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await Ri(t,{returnSecureToken:!0}),r=await Ie._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends Re{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Xi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new Xi(e,t,i,r)}}function Nh(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Xi._fromErrorAndOperation(n,s,e,i):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UI(n,e){const t=C(n);await xr(!0,t,e);const{providerUserInfo:i}=await Qy(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),r=Dh(i||[]);return t.providerData=t.providerData.filter(s=>r.has(s.providerId)),r.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Zo(n,e,t=!1){const i=await Be(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ie._forOperation(n,"link",i)}async function xr(n,e,t){await Bn(e);const i=Dh(e.providerData),r=n===!1?"provider-already-linked":"no-such-provider";g(i.has(t)===n,e.auth,r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ph(n,e,t=!1){const{auth:i}=n,r="reauthenticate";try{const s=await Be(n,Nh(i,r,e,n),t);g(s.idToken,i,"internal-error");const o=Pr(s.idToken);g(o,i,"internal-error");const{sub:a}=o;return g(n.uid===a,i,"user-mismatch"),Ie._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&fe(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oh(n,e,t=!1){const i="signIn",r=await Nh(n,i,e),s=await Ie._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}async function ea(n,e){return Oh(X(n),e)}async function Lv(n,e){const t=C(n);return await xr(!1,t,e.providerId),Zo(t,e)}async function xv(n,e){return Ph(C(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fv(n,e){return qe(n,"POST","/v1/accounts:signInWithCustomToken",z(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VI(n,e){const t=X(n),i=await Fv(t,{token:e,returnSecureToken:!0}),r=await Ie._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?ta._fromServerResponse(e,t):"totpInfo"in t?na._fromServerResponse(e,t):fe(e,"internal-error")}}class ta extends li{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new ta(t)}}class na extends li{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new na(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(n,e,t){var i;g(((i=t.url)===null||i===void 0?void 0:i.length)>0,n,"invalid-continue-uri"),g(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(g(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(g(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(n,e,t){var i;const r=X(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const o=await st(r,s,"getOobCode",!0);t&&jt(r,o,t),await cs(r,o)}else t&&jt(r,s,t),await cs(r,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await st(r,s,"getOobCode",!0);t&&jt(r,a,t),await cs(r,a)}else return Promise.reject(o)})}async function BI(n,e,t){await bh(C(n),{oobCode:e,newPassword:t})}async function jI(n,e){await Iv(C(n),{oobCode:e})}async function Uv(n,e){const t=C(n),i=await bh(t,{oobCode:e}),r=i.requestType;switch(g(r,t,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":g(i.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":g(i.mfaInfo,t,"internal-error");default:g(i.email,t,"internal-error")}let s=null;return i.mfaInfo&&(s=li._fromServerResponse(X(t),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:s},operation:r}}async function qI(n,e){const{data:t}=await Uv(C(n),e);return t.email}async function zI(n,e,t){var i;const r=X(n),s={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const u=await st(r,s,"signUpPassword");o=Ri(r,u)}else o=Ri(r,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await st(r,s,"signUpPassword");return Ri(r,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await Ie._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function HI(n,e,t){return ea(C(n),Nt.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WI(n,e,t){var i;const r=X(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){g(c.handleCodeInApp,r,"argument-error"),c&&jt(r,a,c)}if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const a=await st(r,s,"getOobCode",!0);o(a,t),await us(r,a)}else o(s,t),await us(r,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await st(r,s,"getOobCode",!0);o(c,t),await us(r,c)}else return Promise.reject(a)})}function KI(n,e){const t=Lr.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function GI(n,e,t){const i=C(n),r=Nt.credentialWithLink(e,t||$n());return g(r._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),ea(i,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vv(n,e){return K(n,"POST","/v1/accounts:createAuthUri",z(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QI(n,e){const t=Qo()?$n():"http://localhost",i={identifier:e,continueUri:t},{signinMethods:r}=await Vv(C(n),i);return r||[]}async function YI(n,e){const t=C(n),r={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&jt(t.auth,r,e);const{email:s}=await Ev(t.auth,r);s!==n.email&&await n.reload()}async function JI(n,e,t){const i=C(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&jt(i.auth,s,t);const{email:o}=await Tv(i.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $v(n,e){return K(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=C(n),s={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Be(i,$v(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function ZI(n,e){return Mh(C(n),e,null)}function eE(n,e){return Mh(C(n),null,e)}async function Mh(n,e,t){const{auth:i}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await Be(n,Rh(i,s));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(n){var e,t;if(!n)return null;const{providerId:i}=n,r=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(n!=null&&n.idToken)){const o=(t=(e=Pr(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new qt(s,a)}}if(!i)return null;switch(i){case"facebook.com":return new jv(s,r);case"github.com":return new qv(s,r);case"google.com":return new zv(s,r);case"twitter.com":return new Hv(s,r,n.screenName||null);case"custom":case"anonymous":return new qt(s,null);default:return new qt(s,i,r)}}class qt{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class Lh extends qt{constructor(e,t,i,r){super(e,t,i),this.username=r}}class jv extends qt{constructor(e,t){super(e,"facebook.com",t)}}class qv extends Lh{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class zv extends qt{constructor(e,t){super(e,"google.com",t)}}class Hv extends Lh{constructor(e,t,i){super(e,"twitter.com",t,i)}}function tE(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:Bv(t)}function Wv(n,e,t,i){return C(n).onIdTokenChanged(e,t,i)}function Kv(n,e,t){return C(n).beforeAuthStateChanged(e,t)}function nE(n,e,t,i){return C(n).onAuthStateChanged(e,t,i)}class mt{constructor(e,t,i){this.type=e,this.credential=t,this.auth=i}static _fromIdtoken(e,t){return new mt("enroll",e,t)}static _fromMfaPendingCredential(e){return new mt("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,i;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return mt._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((i=e.multiFactorSession)===null||i===void 0)&&i.idToken)return mt._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t,i){this.session=e,this.hints=t,this.signInResolver=i}static _fromError(e,t){const i=X(e),r=t.customData._serverResponse,s=(r.mfaInfo||[]).map(a=>li._fromServerResponse(i,a));g(r.mfaPendingCredential,i,"internal-error");const o=mt._fromMfaPendingCredential(r.mfaPendingCredential);return new ia(o,s,async a=>{const c=await a._process(i,o);delete r.mfaInfo,delete r.mfaPendingCredential;const u=Object.assign(Object.assign({},r),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await Ie._fromIdTokenResponse(i,t.operationType,u);return await i._updateCurrentUser(l.user),l;case"reauthenticate":return g(t.user,i,"internal-error"),Ie._forOperation(t.user,t.operationType,u);default:fe(i,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function iE(n,e){var t;const i=C(n),r=e;return g(e.customData.operationType,i,"argument-error"),g((t=r.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,i,"argument-error"),ia._fromError(i,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(n,e){return K(n,"POST","/v2/accounts/mfaEnrollment:start",z(n,e))}function Qv(n,e){return K(n,"POST","/v2/accounts/mfaEnrollment:finalize",z(n,e))}function Yv(n,e){return K(n,"POST","/v2/accounts/mfaEnrollment:withdraw",z(n,e))}class ra{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(i=>li._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new ra(e)}async getSession(){return mt._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const i=e,r=await this.getSession(),s=await Be(this.user,i._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,i=await this.user.getIdToken();try{const r=await Be(this.user,Yv(this.user.auth,{idToken:i,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(r),await this.user.reload()}catch(r){throw r}}}const ls=new WeakMap;function rE(n){const e=C(n);return ls.has(e)||ls.set(e,ra._fromUser(e)),ls.get(e)}const Zi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zi,"1"),this.storage.removeItem(Zi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(){const n=ne();return Jo(n)||Or(n)}const Xv=1e3,Zv=10;class Fh extends xh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Jv()&&av(),this.fallbackToPolling=Eh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);ov()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Zv):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Xv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fh.type="LOCAL";const ew=Fh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh extends xh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Uh.type="SESSION";const Vh=Uh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new Fr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await tw(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Ur("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(){return window}function iw(n){j().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(){return typeof j().WorkerGlobalScope<"u"&&typeof j().importScripts=="function"}async function rw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ow(){return sa()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="firebaseLocalStorageDb",aw=1,er="firebaseLocalStorage",Bh="fbase_key";class hi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vr(n,e){return n.transaction([er],e?"readwrite":"readonly").objectStore(er)}function cw(){const n=indexedDB.deleteDatabase($h);return new hi(n).toPromise()}function qs(){const n=indexedDB.open($h,aw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(er,{keyPath:Bh})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(er)?e(i):(i.close(),await cw(),e(await qs()))})})}async function Sc(n,e,t){const i=Vr(n,!0).put({[Bh]:e,value:t});return new hi(i).toPromise()}async function uw(n,e){const t=Vr(n,!1).get(e),i=await new hi(t).toPromise();return i===void 0?null:i.value}function Ac(n,e){const t=Vr(n,!0).delete(e);return new hi(t).toPromise()}const lw=800,hw=3;class jh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>hw)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fr._getInstance(ow()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await rw(),!this.activeServiceWorker)return;this.sender=new nw(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qs();return await Sc(e,Zi,"1"),await Ac(e,Zi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Sc(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>uw(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ac(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Vr(r,!1).getAll();return new hi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jh.type="LOCAL";const dw=jh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(n,e){return K(n,"POST","/v2/accounts/mfaSignIn:start",z(n,e))}function pw(n,e){return K(n,"POST","/v2/accounts/mfaSignIn:finalize",z(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=500,gw=6e4,Ei=1e12;class yw{constructor(e){this.auth=e,this.counter=Ei,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new vw(e,this.auth.name,t||{})),this.counter++,i}reset(e){var t;const i=e||Ei;(t=this._widgets.get(i))===null||t===void 0||t.delete(),this._widgets.delete(i)}getResponse(e){var t;const i=e||Ei;return((t=this._widgets.get(i))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const i=e||Ei;return(t=this._widgets.get(i))===null||t===void 0||t.execute(),""}}class vw{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;g(r,"argument-error",{appName:t}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=ww(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},gw)},mw))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function ww(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<n;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=Ah("rcb"),Iw=new ci(3e4,6e4),Ew="https://www.google.com/recaptcha/api.js?";class Tw{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=j().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return g(_w(t),e,"argument-error"),this.shouldResolveImmediately(t)&&wc(j().grecaptcha)?Promise.resolve(j().grecaptcha):new Promise((i,r)=>{const s=j().setTimeout(()=>{r(ye(e,"network-request-failed"))},Iw.get());j()[hs]=()=>{j().clearTimeout(s),delete j()[hs];const a=j().grecaptcha;if(!a||!wc(a)){r(ye(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,i(a)};const o=`${Ew}?${Zt({onload:hs,render:"explicit",hl:t})}`;Xo(o).catch(()=>{clearTimeout(s),r(ye(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=j().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function _w(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class Sw{async load(e){return new yw(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="recaptcha",Aw={theme:"light",type:"image"};let sE=class{constructor(e,t=Object.assign({},Aw),i){this.parameters=t,this.type=qh,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=X(i),this.isInvisible=this.parameters.size==="invisible",g(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const r=typeof e=="string"?document.getElementById(e):e;g(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Sw:new Tw,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(r=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),r(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){g(!this.parameters.sitekey,this.auth,"argument-error"),g(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),g(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=j()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){g(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){g(Qo()&&!sa(),this.auth,"internal-error"),await kw(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await cv(this.auth);g(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return g(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function kw(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=wt._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function aE(n,e,t){const i=X(n),r=await $r(i,e,C(t));return new oa(r,s=>ea(i,s))}async function cE(n,e,t){const i=C(n);await xr(!1,i,"phone");const r=await $r(i.auth,e,C(t));return new oa(r,s=>Lv(i,s))}async function uE(n,e,t){const i=C(n),r=await $r(i.auth,e,C(t));return new oa(r,s=>xv(i,s))}async function $r(n,e,t){var i;const r=await t.verify();try{g(typeof r=="string",n,"argument-error"),g(t.type===qh,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return g(o.type==="enroll",n,"internal-error"),(await Gv(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo;{g(o.type==="signin",n,"internal-error");const a=((i=s.multiFactorHint)===null||i===void 0?void 0:i.uid)||s.multiFactorUid;return g(a,n,"missing-multi-factor-info"),(await fw(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await kv(n,{phoneNumber:s.phoneNumber,recaptchaToken:r});return o}}finally{t._reset()}}async function lE(n,e){await Zo(C(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zh=class Ni{constructor(e){this.providerId=Ni.PROVIDER_ID,this.auth=X(e)}verifyPhoneNumber(e,t){return $r(this.auth,e,C(t))}static credential(e,t){return wt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ni.credentialFromTaggedObject(t)}static credentialFromError(e){return Ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?wt._fromTokenResponse(t,i):null}};zh.PROVIDER_ID="phone";zh.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(n,e){return e?Pe(e):(g(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa extends ui{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Le(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Le(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Le(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Cw(n){return Oh(n.auth,new aa(n),n.bypassAuthState)}function bw(n){const{auth:e,user:t}=n;return g(t,e,"internal-error"),Ph(t,new aa(n),n.bypassAuthState)}async function Rw(n){const{auth:e,user:t}=n;return g(t,e,"internal-error"),Zo(t,new aa(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cw;case"linkViaPopup":case"linkViaRedirect":return Rw;case"reauthViaPopup":case"reauthViaRedirect":return bw;default:fe(this.auth,"internal-error")}}resolve(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=new ci(2e3,1e4);async function hE(n,e,t){const i=X(n);on(n,e,ze);const r=Dt(i,t);return new Oe(i,"signInViaPopup",e,r).executeNotNull()}async function dE(n,e,t){const i=C(n);on(i.auth,e,ze);const r=Dt(i.auth,t);return new Oe(i.auth,"reauthViaPopup",e,r,i).executeNotNull()}async function fE(n,e,t){const i=C(n);on(i.auth,e,ze);const r=Dt(i.auth,t);return new Oe(i.auth,"linkViaPopup",e,r,i).executeNotNull()}class Oe extends Hh{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Oe.currentPopupAction&&Oe.currentPopupAction.cancel(),Oe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){$e(this.filter.length===1,"Popup operations only handle one event");const e=Ur();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Nw.get())};e()}}Oe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="pendingRedirect",An=new Map;class Pw extends Hh{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=An.get(this.auth._key());if(!e){try{const i=await Ow(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}An.set(this.auth._key(),e)}return this.bypassAuthState||An.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ow(n,e){const t=Kh(e),i=Wh(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}async function ca(n,e){return Wh(n)._set(Kh(e),"true")}function pE(){An.clear()}function Mw(n,e){An.set(n._key(),e)}function Wh(n){return Pe(n._redirectPersistence)}function Kh(n){return Ci(Dw,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(n,e,t){return Lw(n,e,t)}async function Lw(n,e,t){const i=X(n);on(n,e,ze),await i._initializationPromise;const r=Dt(i,t);return await ca(r,i),r._openRedirect(i,e,"signInViaRedirect")}function gE(n,e,t){return xw(n,e,t)}async function xw(n,e,t){const i=C(n);on(i.auth,e,ze),await i.auth._initializationPromise;const r=Dt(i.auth,t);await ca(r,i.auth);const s=await Qh(i);return r._openRedirect(i.auth,e,"reauthViaRedirect",s)}function yE(n,e,t){return Fw(n,e,t)}async function Fw(n,e,t){const i=C(n);on(i.auth,e,ze),await i.auth._initializationPromise;const r=Dt(i.auth,t);await xr(!1,i,e.providerId),await ca(r,i.auth);const s=await Qh(i);return r._openRedirect(i.auth,e,"linkViaRedirect",s)}async function vE(n,e){return await X(n)._initializationPromise,Gh(n,e,!1)}async function Gh(n,e,t=!1){const i=X(n),r=Dt(i,e),o=await new Pw(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}async function Qh(n){const e=Ur(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=10*60*1e3;class Vw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$w(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Yh(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ye(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Uw&&this.cachedEventUids.clear(),this.cachedEventUids.has(kc(e))}saveEventToCache(e){this.cachedEventUids.add(kc(e)),this.lastProcessedEventTime=Date.now()}}function kc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Yh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $w(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(n,e={}){return K(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qw=/^https?/;async function zw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Bw(n);for(const t of e)try{if(Hw(t))return}catch{}fe(n,"unauthorized-domain")}function Hw(n){const e=$n(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!qw.test(t))return!1;if(jw.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=new ci(3e4,6e4);function Cc(){const n=j().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Kw(n){return new Promise((e,t)=>{var i,r,s;function o(){Cc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cc(),t(ye(n,"network-request-failed"))},timeout:Ww.get()})}if(!((r=(i=j().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=j().gapi)===null||s===void 0)&&s.load)o();else{const a=Ah("iframefcb");return j()[a]=()=>{gapi.load?o():t(ye(n,"network-request-failed"))},Xo(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Di=null,e})}let Di=null;function Gw(n){return Di=Di||Kw(n),Di}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=new ci(5e3,15e3),Yw="__/auth/iframe",Jw="emulator/auth/iframe",Xw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eI(n){const e=n.config;g(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Yo(e,Jw):`https://${n.config.authDomain}/${Yw}`,i={apiKey:e.apiKey,appName:n.name,v:kt},r=Zw.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${Zt(i).slice(1)}`}async function tI(n){const e=await Gw(n),t=j().gapi;return g(t,n,"internal-error"),e.open({where:document.body,url:eI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xw,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=ye(n,"network-request-failed"),a=j().setTimeout(()=>{s(o)},Qw.get());function c(){j().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iI=500,rI=600,sI="_blank",oI="http://localhost";class bc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aI(n,e,t,i=iI,r=rI){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},nI),{width:i.toString(),height:r.toString(),top:s,left:o}),u=ne().toLowerCase();t&&(a=gh(u)?sI:t),mh(u)&&(e=e||oI,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[m,w])=>`${d}${m}=${w},`,"");if(sv(u)&&a!=="_self")return cI(e||"",a),new bc(null);const h=window.open(e||"",a,l);g(h,n,"popup-blocked");try{h.focus()}catch{}return new bc(h)}function cI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="__/auth/handler",lI="emulator/auth/handler",hI=encodeURIComponent("fac");async function Rc(n,e,t,i,r,s){g(n.config.authDomain,n,"auth-domain-config-required"),g(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:kt,eventId:r};if(e instanceof ze){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",wd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof an){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${hI}=${encodeURIComponent(c)}`:"";return`${dI(n)}?${Zt(a).slice(1)}${u}`}function dI({config:n}){return n.emulator?Yo(n,lI):`https://${n.authDomain}/${uI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="webStorageSupport";class fI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vh,this._completeRedirectFn=Gh,this._overrideRedirectResult=Mw}async _openPopup(e,t,i,r){var s;$e((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Rc(e,t,i,$n(),r);return aI(e,o,Ur())}async _openRedirect(e,t,i,r){await this._originValidation(e);const s=await Rc(e,t,i,$n(),r);return iw(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):($e(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await tI(e),i=new Vw(e);return t.register("authEvent",r=>(g(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ds,{type:ds},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[ds];o!==void 0&&t(!!o),fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Eh()||Jo()||Or()}}const pI=fI;class mI{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return Ae("unexpected MultiFactorSessionType")}}}class ua extends mI{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ua(e)}_finalizeEnroll(e,t,i){return Qv(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return pw(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class gI{constructor(){}static assertion(e){return ua._fromCredential(e)}}gI.FACTOR_ID="phone";var Nc="@firebase/auth",Dc="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wI(n){Tt(new It("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;g(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Th(n)},u=new pv(i,r,s,c);return gv(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Tt(new It("auth-internal",e=>{const t=X(e.getProvider("auth").getImmediate());return(i=>new yI(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe(Nc,Dc,vI(n)),Xe(Nc,Dc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=5*60,EI=Uc("authIdTokenMaxAge")||II;let Pc=null;const TI=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>EI)return;const r=t==null?void 0:t.token;Pc!==r&&(Pc=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function wE(n=Ks()){const e=Wn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=mv(n,{popupRedirectResolver:pI,persistence:[dw,ew,Vh]}),i=Uc("authTokenSyncURL");if(i){const s=TI(i);Kv(t,s,()=>s(t.currentUser)),Wv(t,o=>s(o))}const r=xc("auth");return r&&yv(t,`http://${r}`),t}wI("Browser");export{zI as $,$e as A,Or as B,It as C,kn as D,Hn as E,vh as F,Ke as G,Rc as H,PI as I,Bw as J,xI as K,Hs as L,g as M,Vw as N,Pe as O,bI as P,ew as Q,Ci as R,kt as S,hn as T,zh as U,LI as V,yv as W,jI as X,Uv as Y,BI as Z,CI as _,Sy as a,QI as a0,KI as a1,vE as a2,WI as a3,$I as a4,dw as a5,FI as a6,ea as a7,VI as a8,HI as a9,xv as aA,uE as aB,dE as aC,gE as aD,YI as aE,UI as aF,ZI as aG,eE as aH,lE as aI,XI as aJ,JI as aK,sE as aL,ne as aM,Ur as aN,pI as aO,iE as aP,OI as aQ,zn as aR,je as aS,fd as aT,GI as aa,aE as ab,hE as ac,mE as ad,qI as ae,yc as af,MI as ag,Nt as ah,We as ai,Ge as aj,bi as ak,js as al,gI as am,Qe as an,ui as ao,Re as ap,hd as aq,dd as ar,_I as as,pd as at,tE as au,rE as av,Lv as aw,cE as ax,fE as ay,yE as az,wE as b,SI as c,Id as d,td as e,jc as f,RI as g,Sf as h,qc as i,vf as j,Af as k,AI as l,kI as m,Tt as n,nE as o,DI as p,X as q,Xe as r,kf as s,Vh as t,Gh as u,Mw as v,fe as w,pE as x,NI as y,ye as z};
