import{u as d,r as c,ac as n,a as r,j as e,L as o,V as h,a8 as m,ad as u,ae as g,C as p}from"./index.3e7ca152.js";import{a as y}from"./index.2cebadc9.js";import{u as v}from"./useDispatch.75c5fde2.js";const _=({id:t})=>{const s=d(y),i=v();return c.exports.useEffect(()=>{i(n(t)),window.scrollTo({top:0,behavior:"smooth"})},[t]),r("div",{children:[e("h5",{children:"Li\xEAn quan"}),e("div",{className:"categoryMovie",children:s?s.map((a,l)=>e("div",{className:"movie_css",children:e("div",{children:r("div",{className:"cateConten cateItem",style:{width:"100%"},children:[e(o,{to:"/product/category/"+a._id+`?category=${a.name}`,children:e("img",{style:{width:"100%"},src:a.linkImg,alt:""})}),e("div",{className:"cateTitle text-light mt-1",children:e(o,{to:"/product/category/"+a._id+`?category=${a.name}`,children:e("p",{children:a.name})})}),e("div",{className:"release_date",children:e("p",{children:"Th\u1EDDi gian 20/12 ph\xFAt"})})]})})},l)):""})]})},x=h.lazy(()=>m(()=>import("./CategoryProductComponent.ff97ecda.js"),["assets/CategoryProductComponent.ff97ecda.js","assets/index.3e7ca152.js","assets/index.ce2bd169.css","assets/index.2cebadc9.js","assets/useDispatch.75c5fde2.js"])),P=()=>{const{id:t}=u();return r("div",{children:[r("div",{className:"d-flex",children:[e(c.exports.Suspense,{fallback:e(g,{}),children:e(x,{})}),e(p,{})]}),e(_,{id:t})]})};export{P as default};
