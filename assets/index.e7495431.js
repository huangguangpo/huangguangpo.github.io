import{j as A,L as l,_ as C,r as m,A as f,R as h,a as p,b as v,B as b}from"./vendor.2ac52e1b.js";const x=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function F(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=F(n);fetch(n.href,r)}};x();var g="data:image/png;base64,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";const y="_container_41fwp_1";var j={container:y};const u=A.exports.jsx,e=A.exports.jsxs,s=A.exports.Fragment;function R(){return e("div",{className:j.container,children:[u(l,{to:"/",children:u("img",{src:g,alt:""})}),e("ul",{children:[e("li",{children:[u(l,{to:"/case",children:"\u6848\u4F8B"})," "]}),e("li",{children:[u(l,{to:"/",children:"\u5173\u4E8E\u6211\u4EEC"})," "]}),u("li",{children:"EN"})]})]})}const W="_container_4jyv5_1",N="_desc_4jyv5_12",P="_btn_container_4jyv5_17",Z="_fade_4jyv5_1";var E={container:W,desc:N,btn_container:P,fade:Z};const T="_container_1m4mi_1",L="_detail_1m4mi_8",O="_footer_1m4mi_27";var c={container:T,detail:L,footer:O};function d(t){const i=C({minWidth:768}),{detail:F}=t;return i?e("div",{className:c.container,children:[F&&u("div",{className:c.detail,children:u("button",{children:"\u67E5\u770B\u8BE6\u60C5"})}),e("div",{className:c.footer,children:[u("span",{children:"OPPO \u672A\u6765\u79D1\u6280\u5927\u4F1A 2021 "}),e("ul",{children:[u("li",{children:"\u521B\u65B0\u4EA7\u54C1"}),u("li",{children:"\u524D\u6CBF\u6280\u672F"}),u("li",{children:"\u865A\u62DF\u4E16\u754C"}),u("li",{children:"3D"})]})]})]}):u("div",{className:c.container,children:e("div",{className:c.footer,children:[u("p",{children:"OPPO \u672A\u6765\u79D1\u6280\u5927\u4F1A 2021 "}),e("ul",{children:[u("li",{children:"\u521B\u65B0\u4EA7\u54C1"}),u("li",{children:"\u524D\u6CBF\u6280\u672F"}),u("li",{children:"\u865A\u62DF\u4E16\u754C"}),u("li",{children:"3D"})]})]})})}var V="/assets/code.502435fa.png",w="/assets/mobile-code.759229d2.png";function D(){const[t,i]=m.exports.useState(!1),F=C({minWidth:768});return e("div",{className:E.container,children:[e("div",{style:{visibility:!F&&t?"hidden":"visible"},children:[u("h1",{children:"\u7075\u5883\u81F3\u7EF4"}),u("p",{className:E.desc,children:"YOU CAN EXPECT MORE"})]}),F?u("section",{children:t?e(s,{children:[u("p",{children:"\u7075\u5883\u81F3\u7EF4\u662F\u4E3A\u54C1\u724C\u548C\u827A\u672F\u6D3B\u52A8\u6253\u9020\u8FDE\u63A5\u548C\u5F00\u653E\u7684\u865A\u62DF\u7A7A\u95F4\u7684\u5E73\u53F0,\u6BCF\u4E00\u4E2A\u865A\u62DF\u7A7A\u95F4\u90FD\u53EF\u4EE5\u5448\u73B0\u5305\u542B"}),u("p",{children:"\u5F00\u653E\u4E16\u754C\u3001\u5728\u7EBF\u76F4\u64AD\u3001\u9AD8\u4FDD\u771F3D\u4F53\u9A8C\u3001\u4E92\u52A8\u89C6\u9891\u3001\u6E38\u620F\u5316\u4EBA\u7269\u5F62\u8C61\u548C\u793E\u4EA4\u7F51\u7EDC\u4F20\u64AD\u5728\u5185\u7684\u591A\u6837\u5316\u529F\u80FD\uFF0C"}),u("p",{children:"\u8FD9\u4E9B\u865A\u62DF\u7A7A\u95F4\u53EF\u4EE5\u76F8\u4E92\u8FDE\u901A\uFF0C\u6784\u5EFA\u8FDE\u63A5\u7684\u865A\u62DF\u793E\u533A\u548C\u4E16\u754C\u3002"})]}):e(s,{children:[u("p",{children:"\u7075\u5883\u81F3\u7EF4\u662F\u4E3A\u54C1\u724C\u548C\u827A\u672F\u6D3B\u52A8\u6253\u9020\u8FDE\u63A5\u548C\u5F00\u653E\u7684\u865A\u62DF\u7A7A\u95F4\u7684\u5E73\u53F0\u3002"}),u("p",{children:"\u6BCF\u4E00\u4E2A\u865A\u62DF\u7A7A\u95F4\u90FD\u53EF\u4EE5\u5448\u73B0\u5305\u542B\u5F00\u653E\u4E16\u754C\u3001\u5728\u7EBF\u76F4\u64AD\u3001\u9AD8\u4FDD\u771F3D\u4F53\u9A8C\u3001\u4E92\u52A8\u89C6\u9891\u3001\u6E38\u620F\u5316\u4EBA\u7269\u5F62\u8C61\u548C"}),u("p",{children:"\u793E\u4EA4\u7F51\u7EDC\u4F20\u64AD\u5728\u5185\u7684\u591A\u6837\u5316\u529F\u80FD\uFF0C\u8FD9\u4E9B\u865A\u62DF\u7A7A\u95F4\u53EF\u4EE5\u76F8\u4E92\u8FDE\u901A\uFF0C\u6784\u5EFA\u8FDE\u63A5\u7684\u865A\u62DF\u793E\u533A\u548C\u4E16\u754C\u3002"})]})}):u("section",{children:t?e("div",{style:{visibility:"hidden"},children:[u("p",{children:"\u7075\u5883\u81F3\u7EF4\u662F\u4E3A\u54C1\u724C\u548C\u827A\u672F\u6D3B\u52A8\u6253\u9020\u8FDE\u63A5\u548C\u5F00\u653E\u7684\u6570\u5B57\u7A7A\u95F4\u7684\u5E73\u53F0\u3002"}),u("p",{children:"\u5F00\u653E\u4E16\u754C\u3001\u5728\u7EBF\u76F4\u64AD\u3001\u9AD8\u4FDD\u771F3D\u4F53\u9A8C\u3001\u4E92\u52A8\u89C6\u9891\u3001\u6E38\u620F\u5316\u4EBA\u7269\u5F62\u8C61\u548C\u793E\u4EA4\u7F51\u7EDC\u4F20\u64AD\u5728\u5185\u7684\u591A\u6837\u5316\u529F\u80FD\uFF0C"}),u("p",{children:"\u8FD9\u4E9B\u865A\u62DF\u7A7A\u95F4\u53EF\u4EE5\u76F8\u4E92\u8FDE\u901A\uFF0C\u6784\u5EFA\u8FDE\u63A5\u7684\u865A\u62DF\u793E\u533A\u548C\u4E16\u754C\u3002"})]}):e(s,{children:[u("p",{children:"\u7075\u5883\u81F3\u7EF4\u662F\u4E3A\u54C1\u724C\u548C\u827A\u672F\u6D3B\u52A8\u6253\u9020\u8FDE\u63A5\u548C\u5F00\u653E\u7684\u6570\u5B57\u7A7A\u95F4\u7684\u5E73\u53F0\u3002"}),u("p",{children:"\u6BCF\u4E00\u4E2A\u6570\u5B57\u7A7A\u95F4\u90FD\u53EF\u4EE5\u5448\u73B0\u5305\u542B\u5F00\u653E\u4E16\u754C\u3001\u5728\u7EBF\u76F4\u64AD\u3001\u9AD8\u4FDD\u771F3D\u4F53\u9A8C\u3001\u4E92\u52A8\u89C6\u9891\u3001\u6E38"}),u("p",{children:"\u620F\u5316\u4EBA\u7269\u5F62\u8C61\u548C\u793E\u4EA4\u7F51\u7EDC\u4F20\u64AD\u5728\u5185\u7684\u591A\u6837\u5316\u529F\u80FD\uFF0C\u8FD9\u4E9B\u6570\u5B57\u7A7A\u95F4\u53EF\u4EE5\u76F8\u4E92\u8FDE\u901A\uFF0C\u6784\u5EFA"}),u("p",{children:"\u8FDE\u63A5\u7684\u865A\u62DF\u793E\u533A\u548C\u4E16\u754C\u3002"})]})}),e("section",{className:E.btn_container,style:{justifyContent:!F&&t?"center":"space-between"},children:[t&&u("img",{src:F?V:w,alt:""}),e("button",{onClick:()=>i(!0),onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),className:"button button--winona","data-text":F?"\u6DFB\u52A0\u5FAE\u4FE1":"\u8054\u7CFB\u6211\u4EEC",children:[u("i",{className:"button__icon"}),u("span",{children:"\u8054\u7CFB\u6211\u4EEC"})]}),!F&&t?"":u("button",{children:"\u5173\u6CE8\u6211\u4EEC"})]}),u(d,{}),u(d,{detail:!0}),u(d,{})]})}function z(){return e("div",{className:"App",children:[u(R,{}),e(f,{timeout:500,children:[u(h,{exact:!0,path:"/",children:u(D,{})}),u(h,{path:"/case",children:u(D,{})})]})]})}const B=()=>{let t=document.documentElement.clientWidth||document.body.clientWidth,i=(t<=768?t/42:t/100)+"px";document.getElementsByTagName("html")[0].style["font-size"]=i};let M=p.debounce(B,400);window.addEventListener("resize",M);B();v.render(u(b,{children:u(z,{})}),document.getElementById("root"));
