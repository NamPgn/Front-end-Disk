import{u as r,r as d,h as n,k as o,a as t,j as e,L as c}from"./index.868fca24.js";import{c as h}from"./index.127bbc30.js";const p=()=>{const i=r();d.exports.useEffect(()=>{i(n())},[]);const s=o(h);return t("div",{children:[e("div",{className:"text-light all_movie",children:"All Movie"}),e("div",{className:"categoryMovie",children:s.map((a,l)=>e("div",{className:"movie_css",children:e("div",{children:t("div",{className:"cateConten cateItem",style:{width:"100%"},children:[e(c,{to:"/product/category/"+a._id+`?category=${a.name}`,children:e("img",{style:{width:"100%"},src:a.linkImg,alt:""})}),e("div",{className:"cateTitle text-light mt-1",style:{height:"50px"},children:e(c,{to:"/product/category/"+a._id+`?category=${a.name}`,children:e("p",{children:a.name})})}),e("div",{className:"release_date",children:t("div",{style:{fontWeight:"500"},children:[a.sumSeri," T\u1EADp"]})}),e("div",{className:"release_date",children:e("p",{children:"Th\u1EDDi gian 20/12 ph\xFAt"})})]})})},l))}),t("div",{style:{color:"#fff",marginTop:"150px"},children:["News Movie",e("p",{children:"Upadting....."})]})]})};export{p as default};
