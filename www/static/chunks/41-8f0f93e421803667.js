(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41],{3453:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return l},default:function(){return i}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let l=r[e]||e.toLowerCase();"script"===t&&("async"===l||"defer"===l||"noModule"===l)?o[l]=!!n[e]:o.setAttribute(l,n[e])}let{children:l,dangerouslySetInnerHTML:i}=n;return i?o.innerHTML=i.__html||"":l&&(o.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):""),o}function l(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),i=Number(r.content),a=[];for(let t=0,n=r.previousElementSibling;t<i;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&a.push(n)}let s=t.map(o).filter(e=>{for(let t=0,n=a.length;t<n;t++){let n=a[t];if(l(n,e))return a.splice(t,1),!1}return!0});a.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),s.forEach(e=>n.insertBefore(e,r)),r.content=(i-a.length+s.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8043:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return h},initScriptLoader:function(){return v},default:function(){return E}});let r=n(1024),o=n(8533),l=r._(n(4887)),i=o._(n(2265)),a=n(1330),u=n(3453),s=n(8043),c=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(l.default.preinit){e.forEach(e=>{l.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},m=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:l,children:i="",strategy:a="afterInteractive",onError:s,stylesheets:m}=e,h=n||t;if(h&&d.has(h))return;if(c.has(t)){d.add(h),c.get(t).then(r,s);return}let v=()=>{o&&o(),d.add(h)},g=document.createElement("script"),E=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),r&&r.call(this,t),v()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[n,r]of(l?(g.innerHTML=l.__html||"",v()):i?(g.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",v()):t&&(g.src=t,c.set(t,E)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();g.setAttribute(e,r)}"worker"===a&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",a),m&&p(m),document.body.appendChild(g)};function h(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>m(e))}):m(e)}function v(e){e.forEach(h),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}()}function g(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:u="afterInteractive",onError:c,stylesheets:f,...p}=e,{updateScripts:h,scripts:v,getIsSsr:g,appDir:E,nonce:y}=(0,i.useContext)(a.HeadManagerContext),b=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;b.current||(o&&e&&d.has(e)&&o(),b.current=!0)},[o,t,n]);let w=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!w.current&&("afterInteractive"===u?m(e):"lazyOnload"===u&&("complete"===document.readyState?(0,s.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>m(e))})),w.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(h?(v[u]=(v[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:c,...p}]),h(v)):g&&g()?d.add(t||n):g&&!g()&&m(e)),E){if(f&&f.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(l.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),i.default.createElement("script",{nonce:y,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),i.default.createElement("script",{nonce:y,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===u&&n&&l.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(g,"__nextScript",{value:!0});let E=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7176:function(){},7881:function(){},2759:function(){},2676:function(){},8788:function(e){e.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,l={},s=null,c=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!u.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:c,props:l,_owner:a.current}}t.Fragment=l,t.jsx=s,t.jsxs=s},7437:function(e,t,n){"use strict";e.exports=n(622)},4033:function(e,t,n){e.exports=n(8165)},4869:function(e,t,n){"use strict";let r,o;n.d(t,{V:function(){return ez}});var l,i,a,u,s,c,d,f,p,m,h,v,g,E,y,b,w,S=n(2265),L=n.t(S,2);function T(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,T),r}function O(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}var C=((l=C||{})[l.None=0]="None",l[l.RenderStrategy=1]="RenderStrategy",l[l.Static=2]="Static",l),P=((i=P||{})[i.Unmount=0]="Unmount",i[i.Hidden=1]="Hidden",i);function M({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:l=!0,name:i}){let a=k(t,e);if(l)return _(a,n,r,i);let u=null!=o?o:0;if(2&u){let{static:e=!1,...t}=a;if(e)return _(t,n,r,i)}if(1&u){let{unmount:e=!0,...t}=a;return T(e?0:1,{0:()=>null,1:()=>_({...t,hidden:!0,style:{display:"none"}},n,r,i)})}return _(a,n,r,i)}function _(e,t={},n,r){let{as:o=n,children:l,refName:i="ref",...a}=x(e,["unmount","static"]),u=void 0!==e.ref?{[i]:e.ref}:{},s="function"==typeof l?l(t):l;"className"in a&&a.className&&"function"==typeof a.className&&(a.className=a.className(t));let c={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(c["data-headlessui-state"]=n.join(" "))}if(o===S.Fragment&&Object.keys(A(a)).length>0){if(!(0,S.isValidElement)(s)||Array.isArray(s)&&s.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=s.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>O(null==e?void 0:e.className(...t),a.className):O(null==e?void 0:e.className,a.className),n=t?{className:t}:{};return(0,S.cloneElement)(s,Object.assign({},k(s.props,A(x(a,["ref"]))),c,u,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(s.ref,u.ref),n))}return(0,S.createElement)(o,Object.assign({},x(a,["ref"]),o!==S.Fragment&&u,o!==S.Fragment&&c),s)}function k(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let o of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;o(t,...r)}}});return t}function N(e){var t;return Object.assign((0,S.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function A(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function x(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}var F=Object.defineProperty,R=(e,t,n)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t,n)=>(R(e,"symbol"!=typeof t?t+"":t,n),n);let I=new class{constructor(){D(this,"current",this.detect()),D(this,"handoffState","pending"),D(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},j=(e,t)=>{I.isServer?(0,S.useEffect)(e,t):(0,S.useLayoutEffect)(e,t)};function H(e){let t=(0,S.useRef)(e);return j(()=>{t.current=e},[e]),t}let q=function(e){let t=H(e);return S.useCallback((...e)=>t.current(...e),[t])},B=Symbol();function $(...e){let t=(0,S.useRef)(e);(0,S.useEffect)(()=>{t.current=e},[e]);let n=q(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[B]))?void 0:n}var U=((a=U||{}).Space=" ",a.Enter="Enter",a.Escape="Escape",a.Backspace="Backspace",a.Delete="Delete",a.ArrowLeft="ArrowLeft",a.ArrowUp="ArrowUp",a.ArrowRight="ArrowRight",a.ArrowDown="ArrowDown",a.Home="Home",a.End="End",a.PageUp="PageUp",a.PageDown="PageDown",a.Tab="Tab",a);function W(){let e;let t=(e="undefined"==typeof document,(0,L.useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[n,r]=S.useState(I.isHandoffComplete);return n&&!1===I.isHandoffComplete&&r(!1),S.useEffect(()=>{!0!==n&&r(!0)},[n]),S.useEffect(()=>I.handoff(),[]),!t&&n}let V=null!=(w=S.useId)?w:function(){let e=W(),[t,n]=S.useState(e?()=>I.nextId():null);return j(()=>{null===t&&n(I.nextId())},[t]),null!=t?""+t:void 0};var Y=((u=Y||{})[u.None=1]="None",u[u.Focusable=2]="Focusable",u[u.Hidden=4]="Hidden",u);let G=N(function(e,t){let{features:n=1,...r}=e;return M({ourProps:{ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}},theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})});function K(e){return I.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let z=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var J=((s=J||{})[s.First=1]="First",s[s.Previous=2]="Previous",s[s.Next=4]="Next",s[s.Last=8]="Last",s[s.WrapAround=16]="WrapAround",s[s.NoScroll=32]="NoScroll",s),X=((c=X||{})[c.Error=0]="Error",c[c.Overflow=1]="Overflow",c[c.Success=2]="Success",c[c.Underflow=3]="Underflow",c),Z=((d=Z||{})[d.Previous=-1]="Previous",d[d.Next=1]="Next",d),Q=((f=Q||{})[f.Strict=0]="Strict",f[f.Loose=1]="Loose",f),ee=((p=ee||{})[p.Keyboard=0]="Keyboard",p[p.Mouse=1]="Mouse",p);function et(e){null==e||e.focus({preventScroll:!0})}function en(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var l,i,a;let u=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?function(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let l=r.compareDocumentPosition(o);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}(e):e:function(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(z)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}(e);o.length>0&&s.length>1&&(s=s.filter(e=>!o.includes(e))),r=null!=r?r:u.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},p=0,m=s.length,h;do{if(p>=m||p+m<=0)return 0;let e=d+p;if(16&t)e=(e+m)%m;else{if(e<0)return 3;if(e>=m)return 1}null==(h=s[e])||h.focus(f),p+=c}while(h!==u.activeElement);return 6&t&&null!=(a=null==(i=null==(l=h)?void 0:l.matches)?void 0:i.call(l,"textarea,input"))&&a&&h.select(),2}function er(e,t,n){let r=H(t);(0,S.useEffect)(()=>{function t(e){r.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));var eo=((m=eo||{})[m.Forwards=0]="Forwards",m[m.Backwards=1]="Backwards",m);function el(){let e=(0,S.useRef)(!1);return j(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function ei(...e){return(0,S.useMemo)(()=>K(...e),[...e])}function ea(e,t,n,r){let o=H(n);(0,S.useEffect)(()=>{function n(e){o.current(e)}return(e=null!=e?e:window).addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)},[e,t,r])}function eu(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}function es(e,t){let n=(0,S.useRef)([]),r=q(e);(0,S.useEffect)(()=>{let e=[...n.current];for(let[o,l]of t.entries())if(n.current[o]!==l){let o=r(t,e);return n.current=t,o}},[r,...t])}function ec(){let e=[],t={addEventListener:(e,n,r,o)=>(e.addEventListener(n,r,o),t.add(()=>e.removeEventListener(n,r,o))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add(()=>cancelAnimationFrame(n))},nextFrame:(...e)=>t.requestAnimationFrame(()=>t.requestAnimationFrame(...e)),setTimeout(...e){let n=setTimeout(...e);return t.add(()=>clearTimeout(n))},microTask(...e){let n={current:!0};return eu(()=>{n.current&&e[0]()}),t.add(()=>{n.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(e){let t=ec();return e(t),this.add(()=>t.dispose())},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function ed(e){let t=q(e),n=(0,S.useRef)(!1);(0,S.useEffect)(()=>(n.current=!1,()=>{n.current=!0,eu(()=>{n.current&&t()})}),[t])}function ef(e){if(!e)return new Set;if("function"==typeof e)return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}var ep=((h=ep||{})[h.None=1]="None",h[h.InitialFocus=2]="InitialFocus",h[h.TabLock=4]="TabLock",h[h.FocusLock=8]="FocusLock",h[h.RestoreFocus=16]="RestoreFocus",h[h.All=30]="All",h);let em=Object.assign(N(function(e,t){let n,r=(0,S.useRef)(null),o=$(r,t),{initialFocus:l,containers:i,features:a=30,...u}=e;W()||(a=1);let s=ei(r);!function({ownerDocument:e},t){let n=function(e=!0){let t=(0,S.useRef)(eh.slice());return es(([e],[n])=>{!0===n&&!1===e&&eu(()=>{t.current.splice(0)}),!1===n&&!0===e&&(t.current=eh.slice())},[e,eh,t]),q(()=>{var e;return null!=(e=t.current.find(e=>null!=e&&e.isConnected))?e:null})}(t);es(()=>{t||(null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&et(n())},[t]),ed(()=>{t&&et(n())})}({ownerDocument:s},!!(16&a));let c=function({ownerDocument:e,container:t,initialFocus:n},r){let o=(0,S.useRef)(null),l=el();return es(()=>{if(!r)return;let i=t.current;i&&eu(()=>{if(!l.current)return;let t=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===t){o.current=t;return}}else if(i.contains(t)){o.current=t;return}null!=n&&n.current?et(n.current):en(i,J.First)===X.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=null==e?void 0:e.activeElement})},[r]),o}({ownerDocument:s,container:r,initialFocus:l},!!(2&a));!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let l=el();ea(null==e?void 0:e.defaultView,"focus",e=>{if(!o||!l.current)return;let i=ef(n);t.current instanceof HTMLElement&&i.add(t.current);let a=r.current;if(!a)return;let u=e.target;u&&u instanceof HTMLElement?ev(i,u)?(r.current=u,et(u)):(e.preventDefault(),e.stopPropagation(),et(a)):et(r.current)},!0)}({ownerDocument:s,container:r,containers:i,previousActiveElement:c},!!(8&a));let d=(n=(0,S.useRef)(0),er("keydown",e=>{"Tab"===e.key&&(n.current=e.shiftKey?1:0)},!0),n),f=q(e=>{let t=r.current;t&&T(d.current,{[eo.Forwards]:()=>{en(t,J.First,{skipElements:[e.relatedTarget]})},[eo.Backwards]:()=>{en(t,J.Last,{skipElements:[e.relatedTarget]})}})}),p=function(){let[e]=(0,S.useState)(ec);return(0,S.useEffect)(()=>()=>e.dispose(),[e]),e}(),m=(0,S.useRef)(!1);return S.createElement(S.Fragment,null,!!(4&a)&&S.createElement(G,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:Y.Focusable}),M({ourProps:{ref:o,onKeyDown(e){"Tab"==e.key&&(m.current=!0,p.requestAnimationFrame(()=>{m.current=!1}))},onBlur(e){let t=ef(i);r.current instanceof HTMLElement&&t.add(r.current);let n=e.relatedTarget;n instanceof HTMLElement&&"true"!==n.dataset.headlessuiFocusGuard&&(ev(t,n)||(m.current?en(r.current,T(d.current,{[eo.Forwards]:()=>J.Next,[eo.Backwards]:()=>J.Previous})|J.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&et(e.target)))}},theirProps:u,defaultTag:"div",name:"FocusTrap"}),!!(4&a)&&S.createElement(G,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:Y.Focusable}))}),{features:ep}),eh=[];function ev(e,t){for(let n of e)if(n.contains(t))return!0;return!1}!function(e){function t(){"loading"!==document.readyState&&(e(),document.removeEventListener("DOMContentLoaded",t))}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("DOMContentLoaded",t),t())}(()=>{function e(e){e.target instanceof HTMLElement&&e.target!==document.body&&eh[0]!==e.target&&(eh.unshift(e.target),(eh=eh.filter(e=>null!=e&&e.isConnected)).splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});var eg=n(4887);let eE=(0,S.createContext)(!1);function ey(e){return S.createElement(eE.Provider,{value:e.force},e.children)}let eb=S.Fragment,ew=S.Fragment,eS=(0,S.createContext)(null),eL=(0,S.createContext)(null),eT=Object.assign(N(function(e,t){let n=(0,S.useRef)(null),r=$(function(e,t=!0){return Object.assign(e,{[B]:t})}(e=>{n.current=e}),t),o=ei(n),l=function(e){let t=(0,S.useContext)(eE),n=(0,S.useContext)(eS),r=ei(e),[o,l]=(0,S.useState)(()=>{if(!t&&null!==n||I.isServer)return null;let e=null==r?void 0:r.getElementById("headlessui-portal-root");if(e)return e;if(null===r)return null;let o=r.createElement("div");return o.setAttribute("id","headlessui-portal-root"),r.body.appendChild(o)});return(0,S.useEffect)(()=>{null!==o&&(null!=r&&r.body.contains(o)||null==r||r.body.appendChild(o))},[o,r]),(0,S.useEffect)(()=>{t||null!==n&&l(n.current)},[n,l,t]),o}(n),[i]=(0,S.useState)(()=>{var e;return I.isServer?null:null!=(e=null==o?void 0:o.createElement("div"))?e:null}),a=(0,S.useContext)(eL),u=W();return j(()=>{!l||!i||l.contains(i)||(i.setAttribute("data-headlessui-portal",""),l.appendChild(i))},[l,i]),j(()=>{if(i&&a)return a.register(i)},[a,i]),ed(()=>{var e;l&&i&&(i instanceof Node&&l.contains(i)&&l.removeChild(i),l.childNodes.length<=0&&(null==(e=l.parentElement)||e.removeChild(l)))}),u&&l&&i?(0,eg.createPortal)(M({ourProps:{ref:r},theirProps:e,defaultTag:eb,name:"Portal"}),i):null}),{Group:N(function(e,t){let{target:n,...r}=e,o={ref:$(t)};return S.createElement(eS.Provider,{value:n},M({ourProps:o,theirProps:r,defaultTag:ew,name:"Popover.Group"}))})}),eO=(0,S.createContext)(null),eC=Object.assign(N(function(e,t){let n=V(),{id:r=`headlessui-description-${n}`,...o}=e,l=function e(){let t=(0,S.useContext)(eO);if(null===t){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),i=$(t);return j(()=>l.register(r),[r,l.register]),M({ourProps:{ref:i,...l.props,id:r},theirProps:o,slot:l.slot||{},defaultTag:"p",name:l.name||"Description"})}),{}),eP=(0,S.createContext)(null);eP.displayName="OpenClosedContext";var eM=((v=eM||{})[v.Open=1]="Open",v[v.Closed=2]="Closed",v[v.Closing=4]="Closing",v[v.Opening=8]="Opening",v);let e_=(0,S.createContext)(()=>{});e_.displayName="StackContext";var ek=((g=ek||{})[g.Add=0]="Add",g[g.Remove=1]="Remove",g);function eN({children:e,onUpdate:t,type:n,element:r,enabled:o}){let l=(0,S.useContext)(e_),i=q((...e)=>{null==t||t(...e),l(...e)});return j(()=>{let e=void 0===o||!0===o;return e&&i(0,n,r),()=>{e&&i(1,n,r)}},[i,n,r,o]),S.createElement(e_.Provider,{value:i},e)}function eA(e,t,n){let r=H(t);(0,S.useEffect)(()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}let{useState:ex,useEffect:eF,useLayoutEffect:eR,useDebugValue:eD}=L;"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;let eI=L.useSyncExternalStore,ej=(E={PUSH(e,t){var n;let r=null!=(n=this.get(e))?n:{doc:e,count:0,d:ec(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r,o;let l={doc:e,d:t,meta:function(e){let t={};for(let n of e)Object.assign(t,n(t));return t}(n)},i=[/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0?{before(){r=window.pageYOffset},after({doc:e,d:t,meta:n}){function o(e){return n.containers.flatMap(e=>e()).some(t=>t.contains(e))}t.microTask(()=>{if("auto"!==window.getComputedStyle(e.documentElement).scrollBehavior){let n=ec();n.style(e.documentElement,"scroll-behavior","auto"),t.add(()=>t.microTask(()=>n.dispose()))}t.style(e.body,"marginTop",`-${r}px`),window.scrollTo(0,0);let n=null;t.addEventListener(e,"click",t=>{if(t.target instanceof HTMLElement)try{let r=t.target.closest("a");if(!r)return;let{hash:l}=new URL(r.href),i=e.querySelector(l);i&&!o(i)&&(n=i)}catch{}},!0),t.addEventListener(e,"touchmove",e=>{e.target instanceof HTMLElement&&!o(e.target)&&e.preventDefault()},{passive:!1}),t.add(()=>{window.scrollTo(0,window.pageYOffset+r),n&&n.isConnected&&(n.scrollIntoView({block:"nearest"}),n=null)})})}}:{},{before({doc:e}){var t;let n=e.documentElement;o=(null!=(t=e.defaultView)?t:window).innerWidth-n.clientWidth},after({doc:e,d:t}){let n=e.documentElement,r=o-(n.clientWidth-n.offsetWidth);t.style(n,"paddingRight",`${r}px`)}},{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}];i.forEach(({before:e})=>null==e?void 0:e(l)),i.forEach(({after:e})=>null==e?void 0:e(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}},r=new Map,o=new Set,{getSnapshot:()=>r,subscribe:e=>(o.add(e),()=>o.delete(e)),dispatch(e,...t){let n=E[e].call(r,...t);n&&(r=n,o.forEach(e=>e()))}});ej.subscribe(()=>{let e=ej.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let e="hidden"===t.get(n.doc),r=0!==n.count;(r&&!e||!r&&e)&&ej.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),0===n.count&&ej.dispatch("TEARDOWN",n)}});let eH=new Map,eq=new Map;function eB(e,t=!0){j(()=>{var n;if(!t)return;let r="function"==typeof e?e():e.current;if(!r)return;let o=null!=(n=eq.get(r))?n:0;return eq.set(r,o+1),0!==o||(eH.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),function(){var e;if(!r)return;let t=null!=(e=eq.get(r))?e:1;if(1===t?eq.delete(r):eq.set(r,t-1),1!==t)return;let n=eH.get(r);n&&(null===n["aria-hidden"]?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",n["aria-hidden"]),r.inert=n.inert,eH.delete(r))}},[e,t])}var e$=((y=e$||{})[y.Open=0]="Open",y[y.Closed=1]="Closed",y),eU=((b=eU||{})[b.SetTitleId=0]="SetTitleId",b);let eW={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},eV=(0,S.createContext)(null);function eY(e){let t=(0,S.useContext)(eV);if(null===t){let t=Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,eY),t}return t}function eG(e,t){return T(t.type,eW,e,t)}eV.displayName="DialogContext";let eK=C.RenderStrategy|C.Static,ez=Object.assign(N(function(e,t){var n;let r,o,l,i,a;let u=V(),{id:s=`headlessui-dialog-${u}`,open:c,onClose:d,initialFocus:f,__demoMode:p=!1,...m}=e,[h,v]=(0,S.useState)(0),g=(0,S.useContext)(eP);void 0===c&&null!==g&&(c=(g&eM.Open)===eM.Open);let E=(0,S.useRef)(null),y=$(E,t),b=ei(E),w=e.hasOwnProperty("open")||null!==g,L=e.hasOwnProperty("onClose");if(!w&&!L)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!w)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!L)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof c)throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c}`);if("function"!=typeof d)throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${d}`);let O=c?0:1,[C,P]=(0,S.useReducer)(eG,{titleId:null,descriptionId:null,panelRef:(0,S.createRef)()}),_=q(()=>d(!1)),k=q(e=>P({type:0,id:e})),N=!!W()&&!p&&0===O,A=h>1,x=null!==(0,S.useContext)(eV),[F,R]=(r=(0,S.useContext)(eL),o=(0,S.useRef)([]),l=q(e=>(o.current.push(e),r&&r.register(e),()=>i(e))),i=q(e=>{let t=o.current.indexOf(e);-1!==t&&o.current.splice(t,1),r&&r.unregister(e)}),a=(0,S.useMemo)(()=>({register:l,unregister:i,portals:o}),[l,i,o]),[o,(0,S.useMemo)(()=>function({children:e}){return S.createElement(eL.Provider,{value:a},e)},[a])]),{resolveContainers:D,mainTreeNodeRef:I,MainTreeNode:H}=function({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let o=(0,S.useRef)(null!=(r=null==n?void 0:n.current)?r:null),l=ei(o),i=q(()=>{var n;let r=[];for(let t of e)null!==t&&(t instanceof HTMLElement?r.push(t):"current"in t&&t.current instanceof HTMLElement&&r.push(t.current));if(null!=t&&t.current)for(let e of t.current)r.push(e);for(let e of null!=(n=null==l?void 0:l.querySelectorAll("html > *, body > *"))?n:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&"headlessui-portal-root"!==e.id&&(e.contains(o.current)||r.some(t=>e.contains(t))||r.push(e));return r});return{resolveContainers:i,contains:q(e=>i().some(t=>t.contains(e))),mainTreeNodeRef:o,MainTreeNode:(0,S.useMemo)(()=>function(){return null!=n?null:S.createElement(G,{features:Y.Hidden,ref:o})},[o,n])}}({portals:F,defaultContainers:[null!=(n=C.panelRef.current)?n:E.current]}),B=A?"parent":"leaf",J=null!==g&&(g&eM.Closing)===eM.Closing,X=!x&&!J&&N;eB((0,S.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==b?void 0:b.querySelectorAll("body > *"))?e:[]).find(e=>"headlessui-portal-root"!==e.id&&e.contains(I.current)&&e instanceof HTMLElement))?t:null},[I]),X);let Z=!!A||N;eB((0,S.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==b?void 0:b.querySelectorAll("[data-headlessui-portal]"))?e:[]).find(e=>e.contains(I.current)&&e instanceof HTMLElement))?t:null},[I]),Z),function(e,t,n=!0){let r=(0,S.useRef)(!1);function o(n,o){if(!r.current||n.defaultPrevented)return;let l=o(n);if(null!==l&&l.getRootNode().contains(l)&&l.isConnected){for(let t of function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e)){if(null===t)continue;let e=t instanceof HTMLElement?t:t.current;if(null!=e&&e.contains(l)||n.composed&&n.composedPath().includes(e))return}return!function(e,t=0){var n;return e!==(null==(n=K(e))?void 0:n.body)&&T(t,{0:()=>e.matches(z),1(){let t=e;for(;null!==t;){if(t.matches(z))return!0;t=t.parentElement}return!1}})}(l,Q.Loose)&&-1!==l.tabIndex&&n.preventDefault(),t(n,l)}}(0,S.useEffect)(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);let l=(0,S.useRef)(null);eA("pointerdown",e=>{var t,n;r.current&&(l.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),eA("mousedown",e=>{var t,n;r.current&&(l.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),eA("click",e=>{l.current&&(o(e,()=>l.current),l.current=null)},!0),eA("touchend",e=>o(e,()=>e.target instanceof HTMLElement?e.target:null),!0),er("blur",e=>o(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}(D,_,!(!N||A));let ee=!(A||0!==O);ea(null==b?void 0:b.defaultView,"keydown",e=>{ee&&(e.defaultPrevented||e.key===U.Escape&&(e.preventDefault(),e.stopPropagation(),_()))}),function(e,t,n=()=>[document.body]){var r;let o,l;r=e=>{var t;return{containers:[...null!=(t=e.containers)?t:[],n]}},o=eI(ej.subscribe,ej.getSnapshot,ej.getSnapshot),(l=e?o.get(e):void 0)&&l.count,j(()=>{if(!(!e||!t))return ej.dispatch("PUSH",e,r),()=>ej.dispatch("POP",e,r)},[t,e])}(b,!(J||0!==O||x),D),(0,S.useEffect)(()=>{if(0!==O||!E.current)return;let e=new ResizeObserver(e=>{for(let t of e){let e=t.target.getBoundingClientRect();0===e.x&&0===e.y&&0===e.width&&0===e.height&&_()}});return e.observe(E.current),()=>e.disconnect()},[O,E,_]);let[et,en]=function(){let[e,t]=(0,S.useState)([]);return[e.length>0?e.join(" "):void 0,(0,S.useMemo)(()=>function(e){let n=q(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),r=(0,S.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return S.createElement(eO.Provider,{value:r},e.children)},[t])]}(),eo=(0,S.useMemo)(()=>[{dialogState:O,close:_,setTitleId:k},C],[O,C,_,k]),el=(0,S.useMemo)(()=>({open:0===O}),[O]),eu={ref:y,id:s,role:"dialog","aria-modal":0===O||void 0,"aria-labelledby":C.titleId,"aria-describedby":et};return S.createElement(eN,{type:"Dialog",enabled:0===O,element:E,onUpdate:q((e,t)=>{"Dialog"===t&&T(e,{[ek.Add]:()=>v(e=>e+1),[ek.Remove]:()=>v(e=>e-1)})})},S.createElement(ey,{force:!0},S.createElement(eT,null,S.createElement(eV.Provider,{value:eo},S.createElement(eT.Group,{target:E},S.createElement(ey,{force:!1},S.createElement(en,{slot:el,name:"Dialog.Description"},S.createElement(em,{initialFocus:f,containers:D,features:N?T(B,{parent:em.features.RestoreFocus,leaf:em.features.All&~em.features.FocusLock}):em.features.None},S.createElement(R,null,M({ourProps:eu,theirProps:m,slot:el,defaultTag:"div",features:eK,visible:0===O,name:"Dialog"}))))))))),S.createElement(H,null))}),{Backdrop:N(function(e,t){let n=V(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:l},i]=eY("Dialog.Backdrop"),a=$(t);(0,S.useEffect)(()=>{if(null===i.panelRef.current)throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[i.panelRef]);let u=(0,S.useMemo)(()=>({open:0===l}),[l]);return S.createElement(ey,{force:!0},S.createElement(eT,null,M({ourProps:{ref:a,id:r,"aria-hidden":!0},theirProps:o,slot:u,defaultTag:"div",name:"Dialog.Backdrop"})))}),Panel:N(function(e,t){let n=V(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:l},i]=eY("Dialog.Panel"),a=$(t,i.panelRef),u=(0,S.useMemo)(()=>({open:0===l}),[l]);return M({ourProps:{ref:a,id:r,onClick:q(e=>{e.stopPropagation()})},theirProps:o,slot:u,defaultTag:"div",name:"Dialog.Panel"})}),Overlay:N(function(e,t){let n=V(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:l,close:i}]=eY("Dialog.Overlay");return M({ourProps:{ref:$(t),id:r,"aria-hidden":!0,onClick:q(e=>{if(e.target===e.currentTarget){if(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),i()}})},theirProps:o,slot:(0,S.useMemo)(()=>({open:0===l}),[l]),defaultTag:"div",name:"Dialog.Overlay"})}),Title:N(function(e,t){let n=V(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:l,setTitleId:i}]=eY("Dialog.Title"),a=$(t);return(0,S.useEffect)(()=>(i(r),()=>i(null)),[r,i]),M({ourProps:{ref:a,id:r},theirProps:o,slot:(0,S.useMemo)(()=>({open:0===l}),[l]),defaultTag:"h2",name:"Dialog.Title"})}),Description:eC})},9874:function(e,t,n){"use strict";var r=n(2265);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))});t.Z=o},3633:function(e,t,n){"use strict";var r=n(2265);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))});t.Z=o}}]);