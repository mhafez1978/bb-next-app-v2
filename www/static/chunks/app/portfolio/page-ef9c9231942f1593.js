(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[444],{6894:function(e,t,n){Promise.resolve().then(n.bind(n,5648))},5648:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(7437),s=n(2265);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var a=function(e){function t(){return e.apply(this,arguments)||this}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,i(t,e);var n=t.prototype;return n.getColumns=function(){var e=this.props,t=e.children,n=e.columnsCount,r=Array.from({length:n},function(){return[]});return s.Children.forEach(t,function(e,t){e&&s.isValidElement(e)&&r[t%n].push(e)}),r},n.renderColumns=function(){var e=this.props.gutter;return this.getColumns().map(function(t,n){return s.createElement("div",{key:n,style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:e}},t.map(function(e){return e}))})},n.render=function(){var e=this.props,t=e.gutter,n=e.className,r=e.style;return s.createElement("div",{style:o({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:t},r),className:n},this.renderColumns())},t}(s.Component);a.propTypes={},a.defaultProps={columnsCount:3,gutter:"0",className:null,style:{}};var c="undefined"!=typeof window?s.useLayoutEffect:s.useEffect,l=function(){var e=(0,s.useState)(!1),t=e[0],n=e[1];return c(function(){n(!0)},[]),t},u=function(){var e=l(),t=(0,s.useState)(0),n=t[0],r=t[1],o=(0,s.useCallback)(function(){e&&r(window.innerWidth)},[e]);return c(function(){if(e)return window.addEventListener("resize",o),o(),function(){return window.removeEventListener("resize",o)}},[e,o]),n},h=function(e){var t=e.columnsCountBreakPoints,n=void 0===t?{350:1,750:2,900:3}:t,r=e.children,o=e.className,i=e.style,a=u(),c=(0,s.useMemo)(function(){var e=Object.keys(n).sort(function(e,t){return e-t}),t=e.length>0?n[e[0]]:1;return e.forEach(function(e){e<a&&(t=n[e])}),t},[a,n]);return s.createElement("div",{className:void 0===o?null:o,style:void 0===i?null:i},s.Children.map(r,function(e,t){return s.cloneElement(e,{key:t,columnsCount:c})}))};h.propTypes={};var d=n(8585),p=n(8485),m=()=>{let[e,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{t(!0)},[]),(0,r.jsxs)(r.Fragment,{children:[!1===e&&(0,r.jsxs)("div",{className:"z-50 absolute right-0 bottom-0 bg-[#222222] h-[100vh] w-[100vw] top-0 left-0 flex flex-col justify-center items-center",children:[(0,r.jsx)("span",{className:"sr-only",children:"Loading..."}),(0,r.jsx)(d.$j,{"aria-label":"Warning spinner example",color:"warning",size:"xl",className:"w-[300px] h-[300px]"}),(0,r.jsx)("h1",{className:"py-8 text-center text-white text-3xl",children:"Loading ..."})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(p.Z,{pageTitle:"Portfolio"}),(0,r.jsx)("div",{className:" max-w-10xl py-10 px-[90px]",children:(0,r.jsx)("div",{className:"overflow-y-scroll lg:w-[80vw] md:w-[100vw] h-[80vh] scroll-m-0 mx-auto z-20",children:(0,r.jsx)(h,{children:(0,r.jsx)(a,{gutter:"20px",columnsCount:2,children:[{id:0,company:"Prestige Worldwide Limos",short:"PWWL",src:"/images/PWWL.png",w:"100%",h:"100%"},{id:1,company:"Being Mohamed Hafez",short:"BeingMH",src:"/images/BeingMohamedHafez.png",w:"100%",h:"100%"},{id:2,company:"Captain Ehab Design Studio",short:"CEDS",src:"/images/CaptianEhabDesignStudio.png",w:"100%",h:"100%"},{id:3,company:"Thackston Realty Group",short:"TRG",src:"/images/ThackstonRealty.png",w:"100%",h:"100%"},{id:9,company:"Carolina Recycles",short:"CR",src:"/images/carolina-recycles.png",w:"100%",h:"100%"},{id:10,company:"Nodes Unlimited",short:"NU",src:"/images/nodes-unlimited.png",w:"100%",h:"100%"},{id:11,company:"JL Auto Repairs",short:"JLAuto",src:"/images/charlotte-auto-wiz.png",w:"100%",h:"100%"},{id:12,company:"PWWL",short:"PWWL",src:"/images/old-pwwl.png",w:"100%",h:"100%"},{id:13,company:"placeholder",short:"",src:"/images/placeholder.png",w:"100%",h:"100%"}].map(e=>(0,r.jsx)("div",{className:"mr-2 mb-2 rounded border-1 border-slate-300",children:(0,r.jsx)("img",{width:"960px",height:"500px",src:e.src,alt:e.company})},e.id))})})})})]})]})}},4562:function(e,t,n){"use strict";n.r(t);var r=n(7437),s=n(2265),o=n(4033);t.default=()=>{let e=(0,o.usePathname)(),[t,n]=(0,s.useState)("");return(0,s.useEffect)(()=>{"/"===e?n("Home"):"/about"===e?n("About"):"/services"===e?n("Services"):"/portfolio"===e?n("Portfolio"):"/latest-news"===e?n("Latest News"):"/contact"===e&&n("Contact")},[e]),(0,r.jsxs)("div",{className:"min-w-[15vw] flex flex-row mx-auto mt-4 gap-2 justify-center items-center rounded border-2 border-white py-1 px-4",children:[(0,r.jsx)("span",{children:"You're here: "}),(0,r.jsx)("a",{className:"hover:text-white",href:"/",children:"Home"}),(0,r.jsx)("span",{children:">"}),(0,r.jsx)("a",{className:"hover:text-white",href:"//localhost:3000/".concat(e),children:t})]})}},8485:function(e,t,n){"use strict";var r=n(7437);n(2265);var s=n(4562);t.Z=e=>{let{pageTitle:t}=e;return(0,r.jsxs)("div",{className:"z-40 skew-y-1 w-screen min-h-[50vh] mt-[-5vh] pt-20 border-b bg-[url('/images/bg-pageheader.png')] bg-cover bg-center bg-no-repeat text-black flex flex-col justify-center items-center",children:[(0,r.jsx)("h1",{className:"z-50 -skew-y-1 text-4xl font-bold tracking-tight sm:text-6xl",children:t}),(0,r.jsx)("div",{className:"z-50 -skew-y-1",children:(0,r.jsx)(s.default,{})})]})}},4033:function(e,t,n){e.exports=n(8165)}},function(e){e.O(0,[420,982,895,971,596,744],function(){return e(e.s=6894)}),_N_E=e.O()}]);