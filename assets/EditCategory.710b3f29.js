import{u as p,ad as b,r as o,bv as g,j as e,a,a6 as c,bw as f}from"./index.3e7ca152.js";import{u as h}from"./index.esm.fb970fa7.js";import"./build.min.ea303860.js";import{g as y}from"./index.2cebadc9.js";import{u as N}from"./useDispatch.75c5fde2.js";const j=()=>{const i=p(y),{register:t,reset:m,handleSubmit:n}=h(),{id:r}=b(),l=N();o.exports.useState([]);const d=s=>{s?c.success("Edit successfully",l(updateCatgorySlice(s))):c.error("Edit failure")};return o.exports.useEffect(()=>{l(g(r)),(async()=>{const{data:u}=await f(r);m(u)})()},[]),e("div",{children:a("form",{onSubmit:n(d),children:[a("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"Category name"}),e("input",{type:"text",...t("name"),className:"form-control"})]}),a("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"Category des"}),e("input",{type:"text",...t("des"),className:"form-control"})]}),e("div",{className:"mb-2",style:{width:"150px",height:"150px"},children:e("img",{src:i.linkImg,alt:""})}),a("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"Image"}),e("input",{type:"text",...t("linkImg"),className:"form-control"})]}),e("button",{className:"btn btn-primary",children:"Click"})]})})};export{j as default};
