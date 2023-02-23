import{r as F,u,a8 as P,i as I,a9 as U,aa as R,ab as _,j as d,F as B,a as o,V as T,ac as V,L,C as q}from"./index.4c86f245.js";import{a as M,g as H,b as K}from"./index.a6050bee.js";import"./jwt-decode.esm.19dc4d55.js";import z from"./CategoryHomePage.f452429c.js";import{u as k}from"./useDispatch.6a1c6d6b.js";const S="%[a-f0-9]{2}",p=new RegExp("("+S+")|([^%]+?)","gi"),b=new RegExp("("+S+")+","gi");function m(r,e){try{return[decodeURIComponent(r.join(""))]}catch{}if(r.length===1)return r;e=e||1;const t=r.slice(0,e),n=r.slice(e);return Array.prototype.concat.call([],m(t),m(n))}function G(r){try{return decodeURIComponent(r)}catch{let e=r.match(p)||[];for(let t=1;t<e.length;t++)r=m(e,t).join(""),e=r.match(p)||[];return r}}function J(r){const e={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"};let t=b.exec(r);for(;t;){try{e[t[0]]=decodeURIComponent(t[0])}catch{const a=G(t[0]);a!==t[0]&&(e[t[0]]=a)}t=b.exec(r)}e["%C2"]="\uFFFD";const n=Object.keys(e);for(const a of n)r=r.replace(new RegExp(a,"g"),e[a]);return r}function Q(r){if(typeof r!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return decodeURIComponent(r)}catch{return J(r)}}function E(r,e){if(!(typeof r=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(r===""||e==="")return[];const t=r.indexOf(e);return t===-1?[]:[r.slice(0,t),r.slice(t+e.length)]}function W(r,e){const t={};if(Array.isArray(e))for(const n of e){const a=Object.getOwnPropertyDescriptor(r,n);a!=null&&a.enumerable&&Object.defineProperty(t,n,a)}else for(const n of Reflect.ownKeys(r)){const a=Object.getOwnPropertyDescriptor(r,n);if(a.enumerable){const i=r[n];e(n,i,r)&&Object.defineProperty(t,n,a)}}return t}const X=r=>r==null,Y=r=>encodeURIComponent(r).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),h=Symbol("encodeFragmentIdentifier");function Z(r){switch(r.arrayFormat){case"index":return e=>(t,n)=>{const a=t.length;return n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,[f(e,r),"[",a,"]"].join("")]:[...t,[f(e,r),"[",f(a,r),"]=",f(n,r)].join("")]};case"bracket":return e=>(t,n)=>n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,[f(e,r),"[]"].join("")]:[...t,[f(e,r),"[]=",f(n,r)].join("")];case"colon-list-separator":return e=>(t,n)=>n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,[f(e,r),":list="].join("")]:[...t,[f(e,r),":list=",f(n,r)].join("")];case"comma":case"separator":case"bracket-separator":{const e=r.arrayFormat==="bracket-separator"?"[]=":"=";return t=>(n,a)=>a===void 0||r.skipNull&&a===null||r.skipEmptyString&&a===""?n:(a=a===null?"":a,n.length===0?[[f(t,r),e,f(a,r)].join("")]:[[n,f(a,r)].join(r.arrayFormatSeparator)])}default:return e=>(t,n)=>n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,f(e,r)]:[...t,[f(e,r),"=",f(n,r)].join("")]}}function v(r){let e;switch(r.arrayFormat){case"index":return(t,n,a)=>{if(e=/\[(\d*)]$/.exec(t),t=t.replace(/\[\d*]$/,""),!e){a[t]=n;return}a[t]===void 0&&(a[t]={}),a[t][e[1]]=n};case"bracket":return(t,n,a)=>{if(e=/(\[])$/.exec(t),t=t.replace(/\[]$/,""),!e){a[t]=n;return}if(a[t]===void 0){a[t]=[n];return}a[t]=[...a[t],n]};case"colon-list-separator":return(t,n,a)=>{if(e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),!e){a[t]=n;return}if(a[t]===void 0){a[t]=[n];return}a[t]=[...a[t],n]};case"comma":case"separator":return(t,n,a)=>{const i=typeof n=="string"&&n.includes(r.arrayFormatSeparator),c=typeof n=="string"&&!i&&l(n,r).includes(r.arrayFormatSeparator);n=c?l(n,r):n;const s=i||c?n.split(r.arrayFormatSeparator).map($=>l($,r)):n===null?n:l(n,r);a[t]=s};case"bracket-separator":return(t,n,a)=>{const i=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!i){a[t]=n&&l(n,r);return}const c=n===null?[]:n.split(r.arrayFormatSeparator).map(s=>l(s,r));if(a[t]===void 0){a[t]=c;return}a[t]=[...a[t],...c]};default:return(t,n,a)=>{if(a[t]===void 0){a[t]=n;return}a[t]=[...[a[t]].flat(),n]}}}function A(r){if(typeof r!="string"||r.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function f(r,e){return e.encode?e.strict?Y(r):encodeURIComponent(r):r}function l(r,e){return e.decode?Q(r):r}function N(r){return Array.isArray(r)?r.sort():typeof r=="object"?N(Object.keys(r)).sort((e,t)=>Number(e)-Number(t)).map(e=>r[e]):r}function w(r){const e=r.indexOf("#");return e!==-1&&(r=r.slice(0,e)),r}function rr(r){let e="";const t=r.indexOf("#");return t!==-1&&(e=r.slice(t)),e}function x(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&typeof r=="string"&&r.trim()!==""?r=Number(r):e.parseBooleans&&r!==null&&(r.toLowerCase()==="true"||r.toLowerCase()==="false")&&(r=r.toLowerCase()==="true"),r}function g(r){r=w(r);const e=r.indexOf("?");return e===-1?"":r.slice(e+1)}function y(r,e){e={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...e},A(e.arrayFormatSeparator);const t=v(e),n=Object.create(null);if(typeof r!="string"||(r=r.trim().replace(/^[?#&]/,""),!r))return n;for(const a of r.split("&")){if(a==="")continue;const i=e.decode?a.replace(/\+/g," "):a;let[c,s]=E(i,"=");c===void 0&&(c=i),s=s===void 0?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?s:l(s,e),t(l(c,e),s,n)}for(const[a,i]of Object.entries(n))if(typeof i=="object"&&i!==null)for(const[c,s]of Object.entries(i))i[c]=x(s,e);else n[a]=x(i,e);return e.sort===!1?n:(e.sort===!0?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((a,i)=>{const c=n[i];return Boolean(c)&&typeof c=="object"&&!Array.isArray(c)?a[i]=N(c):a[i]=c,a},Object.create(null))}function O(r,e){if(!r)return"";e={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...e},A(e.arrayFormatSeparator);const t=c=>e.skipNull&&X(r[c])||e.skipEmptyString&&r[c]==="",n=Z(e),a={};for(const[c,s]of Object.entries(r))t(c)||(a[c]=s);const i=Object.keys(a);return e.sort!==!1&&i.sort(e.sort),i.map(c=>{const s=r[c];return s===void 0?"":s===null?f(c,e):Array.isArray(s)?s.length===0&&e.arrayFormat==="bracket-separator"?f(c,e)+"[]":s.reduce(n(c),[]).join("&"):f(c,e)+"="+f(s,e)}).filter(c=>c.length>0).join("&")}function C(r,e){var a,i;e={decode:!0,...e};let[t,n]=E(r,"#");return t===void 0&&(t=r),{url:(i=(a=t==null?void 0:t.split("?"))==null?void 0:a[0])!=null?i:"",query:y(g(r),e),...e&&e.parseFragmentIdentifier&&n?{fragmentIdentifier:l(n,e)}:{}}}function j(r,e){e={encode:!0,strict:!0,[h]:!0,...e};const t=w(r.url).split("?")[0]||"",n=g(r.url),a={...y(n,{sort:!1}),...r.query};let i=O(a,e);i&&(i=`?${i}`);let c=rr(r.url);if(r.fragmentIdentifier){const s=new URL(t);s.hash=r.fragmentIdentifier,c=e[h]?s.hash:`#${r.fragmentIdentifier}`}return`${t}${i}${c}`}function D(r,e,t){t={parseFragmentIdentifier:!0,[h]:!1,...t};const{url:n,query:a,fragmentIdentifier:i}=C(r,t);return j({url:n,query:W(a,e),fragmentIdentifier:i},t)}function er(r,e,t){const n=Array.isArray(e)?a=>!e.includes(a):(a,i)=>!e(a,i);return D(r,n,t)}const tr=Object.freeze(Object.defineProperty({__proto__:null,extract:g,parse:y,stringify:O,parseUrl:C,stringifyUrl:j,pick:D,exclude:er},Symbol.toStringTag,{value:"Module"})),fr=()=>{F.exports.useState(""),u(M);const r=u(H),e=u(K),t=k(),{id:n}=P();I();const{category:a}=tr.parse(window.location.href.split("?")[1]);F.exports.useEffect(()=>{t(U(n)),t(R()),window.scrollTo({top:0,behavior:"smooth"}),t(_(a))},[n,a]);const i=[...r].sort((c,s)=>Number(c.seri)<Number(s.seri)?1:-1);return d(B,{children:o(T.Fragment,{children:[d(V,{}),o("div",{className:"d-flex justify-content-center",style:{gap:"10px"},children:[d("div",{className:"col-sm-9",children:d("div",{style:{margin:"12px 5px"},children:e?o("div",{children:[d("video",{title:"vimeo-player",controls:!0,autoPlay:!0,muted:!0,src:e.linkVideo,width:"100%",height:"100%",frameBorder:"0",allowFullScreen:!0}),o("div",{style:{color:"#fff",margin:"10px 0"},children:[d("i",{className:"fa-solid fa-eye"}),e.price," View"]}),d("h4",{className:"mt-4 mb-4",children:e.name+" "+e.seri}),o("h5",{children:["T\u1EADp s\u1ED1 ",e.seri," "]}),d("div",{className:"product_seri_item_deltail",children:i.map(c=>d("div",{children:d(L,{to:"/detail/"+c._id+`?category=${c.category}name?=${c.name}/t\u1EADp/${c.seri}`,children:c._id==n?o("button",{className:"btnMovieSeri bg-primary",children:["T\u1EADp ",c.seri]}):o("button",{className:"btnMovieSeri",children:["T\u1EADp ",c.seri]})})},c._id))}),o("div",{className:"p-3 mt-3 mb-3 text-white rounded",style:{background:"rgb(0 0 0 / 47%)"},children:["B\u1EA3n quy\u1EC1n video thu\u1ED9c : ",o("a",{href:e.LinkCopyright,children:["  ",e.copyright," "]})]}),o("div",{className:"des mt-5 mb-5",children:[d("h5",{children:"N\u1ED9i dung Phim: "}),d("p",{children:e.descriptions}),d("h4",{className:"",children:"B\xECnh lu\u1EADn phim"}),d("div",{className:"text-light des",children:d("p",{children:"\u0110ang c\u1EADp nh\u1EADt....."})})]})]}):""})}),d(q,{})]}),d(z,{})]})})};export{fr as default};
