import{a3 as n,j as e,a as l,br as m,ag as u}from"./index.afb3e3ec.js";import{u as c}from"./index.esm.87ad79f4.js";import{u as p}from"./useDispatch.42e955b1.js";const g=()=>{const t=p(),a=n(),{handleSubmit:r,register:o}=c();return e("div",{style:{display:"flex",justifyContent:"center",textAlign:"center",height:"100vh"},children:l("form",{onSubmit:r(i=>{const s=new FormData;s.append("xlsx",i.xlsx[0]),t(m(s)),a("/admin/users"),u.success("Th\xEAm user th\xE0nh c\xF4ng",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}),children:[e("label",{className:"form-label",for:"customFile",children:"Default file input example"}),e("input",{type:"file",...o("xlsx"),className:"form-control",id:"customFile"}),e("button",{className:"btn btn-success",style:{margin:"20px 0"},children:"Submit"})]})})};export{g as default};
