var S=Object.defineProperty;var c=(e,r,t)=>r in e?S(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var d=(e,r,t)=>(c(e,typeof r!="symbol"?r+"":r,t),t);import{j as o,C as n,a as l,S as p,H as h,T as u,r as s}from"./sanity-34750566.js";const v="Dev server stopped",x="The development server has stopped. You may need to restart it to continue working.";class D extends Error{constructor(){super(v);d(this,"ViteDevServerStoppedError");this.name="ViteDevServerStoppedError",this.ViteDevServerStoppedError=!0}}const i=void 0,a=e=>!!e,E=()=>{const[e,r]=s.useState(!1),t=s.useCallback(()=>r(!0),[]);return s.useEffect(()=>{a(i)&&i.on("vite:ws:disconnect",t)},[t]),{devServerStopped:e}},j=()=>{const{devServerStopped:e}=E();if(e)throw new D;return null},R=()=>a(i)?o.jsx(j,{}):null,V=()=>o.jsx(n,{height:"fill",overflow:"auto",paddingY:[4,5,6,7],paddingX:4,sizing:"border",tone:"critical",children:o.jsx(l,{width:3,children:o.jsxs(p,{space:4,children:[o.jsx(h,{children:v}),o.jsx(n,{border:!0,radius:2,overflow:"auto",padding:4,tone:"inherit",children:o.jsx(p,{space:4,children:o.jsx(u,{size:2,children:x})})})]})})});export{R as DetectViteDevServerStopped,V as DevServerStoppedErrorScreen};
