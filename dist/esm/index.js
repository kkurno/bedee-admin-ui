import{jsx as e,jsxs as i}from"react/jsx-runtime";import{Box as t,Button as o,styled as n,List as r,ListItemButton as l,MenuItem as d,ListItemIcon as a,ListItemText as s,Collapse as c,Menu as h,Switch as p,Grid as u,Typography as C,Dialog as g,DialogTitle as m,DialogActions as w}from"@mui/material";import{styled as v}from"@mui/material/styles";import{useState as f,useEffect as x}from"react";var _=function(){return _=Object.assign||function(e){for(var i,t=1,o=arguments.length;t<o;t++)for(var n in i=arguments[t])Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);return e},_.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var k="#000000",b="#FFFFFF",M="#F3F6F9",y="#EAEEF6",L="#C3CAD4",F="#939CA9",S="#4A5568",B="#323A43",H="#747B84",A="#1E6AF6",V="#4B88F8",E="#78A6FA",z="#A5C3FB",j="#E8F0FE",T="#07236D",W="#264189",Z="#455FA5",R="#849CDD",I="#A3BAF9",D="#EE6E3A",O="#F18B61",P="#F5A889",G="#F8C5B0",Y="#FAD3C4",U="#13C186",X="#EFB110",N="#EA5540",q="#1E6AF6",J="#F9A01B",K=function(n){var r=n.bdType,l=n.icon,d=n.text,a=n.loading,s=n.bdSize,c=n.width,h=void 0===c?"100%":c,p=function(){switch(r){case"secondary":return{color:A,borderColor:A,backgroundColor:b};case"outlined":return{color:A,borderColor:b,backgroundColor:b};case"remove":return{color:N,borderColor:N,backgroundColor:b};default:return{color:b,borderColor:A,backgroundColor:A}}}(),u=function(){switch(s){case"lg":return{borderRadius:"32px",fontSize:"16px",height:"52px",icon:12,loading:"18px"};case"md":return{borderRadius:"32px",fontSize:"16px",height:"48px",icon:12,loading:"16px"};case"sm":return{borderRadius:"32px",fontSize:"14px",height:"40px",icon:12,loading:"14px"};default:return{borderRadius:"32px",fontSize:"12px",height:"30px",icon:16,loading:"12px"}}}(),C={width:u.loading,height:u.loading,border:"2px solid ".concat(p.color),borderBottomColor:p.backgroundColor},g=a?e($,{style:C}):l;return e(o,_({sx:{borderRadius:u.borderRadius,fontSize:u.fontSize,paddingY:"8px",borderColor:p.borderColor,backgroundColor:p.backgroundColor,width:h,height:u.height,"&.MuiButton-outlined":{color:p.color,backgroundColor:p.backgroundColor},"&:hover":{borderColor:p.borderColor},"&.Mui-disabled":{color:p.color,backgroundColor:p.backgroundColor,opacity:.6}},variant:"outlined"},n,{children:i(Q,{children:[g,e(t,{style:{color:p.color,fontSize:u.fontSize},children:d})]})}))},Q=v(t)((function(){return{display:"flex",alignItems:"center",justifyContent:"center",minWidth:"70px",columnGap:"8px",lineHeight:"16px",textTransform:"none"}})),$=v(t)((function(){return{borderRadius:"50%",display:"inline-block",boxSizing:"border-box",animation:"rotation 1s linear infinite","@keyframes rotation":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}}})),ee=function(i){return e(K,_({},i))},ie=function(i){return e(K,_({},i,{bdType:"secondary"}))},te=function(i){return e(K,_({},i,{bdType:"outlined"}))},oe=function(){return e("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5L1.5 13.5Z",stroke:"#EA5540",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})},ne=function(i){return e(K,_({},i,{icon:e(oe,{}),bdType:"remove"}))};n("div")({display:"block",width:"100%",minWidth:"400px",minHeight:"100vh",backgroundColor:"white"}),n("div")({color:"#EE6E3A",backgroundColor:"white",cursor:"pointer"}),n("div")({display:"block",width:"auto",padding:"10px 20px",borderBottom:"1px solid #EAEAEA"}),n("div")({width:"100%",height:"20px"}),n("div")({width:"100%",display:"flex",paddingTop:"20px"}),n("div")({width:"100%",color:"#3A4248",fontWeight:600,fontSize:"18px",lineHeight:"20px"}),n("span")({width:"24px",height:"24px",float:"right",textAlign:"right",cursor:"pointer"}),n("div")({display:"block",width:"100%",padding:"20px",height:"calc(100vh - 200px)",overflow:"auto"}),n("div")({width:"auto",padding:"20px"});var re=function(){return e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M17 16L21 12M21 12L17 8M21 12H7M13 16V17C13 17.7956 12.6839 18.5587 12.1213 19.1213C11.5587 19.6839 10.7956 20 10 20H6C5.20435 20 4.44129 19.6839 3.87868 19.1213C3.31607 18.5587 3 17.7956 3 17V7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4H10C10.7956 4 11.5587 4.31607 12.1213 4.87868C12.6839 5.44129 13 6.20435 13 7V8",stroke:"white",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})},le=function(){return i("svg",{width:"38",height:"35",viewBox:"0 0 38 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i("g",{filter:"url(#filter0_d_1105_19305)",children:[e("path",{d:"M6.47168 12.4893H21.0644V27.0798H9.20931C8.8499 27.0801 8.49396 27.0096 8.16183 26.8722C7.82969 26.7349 7.52791 26.5334 7.27367 26.2794C7.01943 26.0254 6.81772 25.7237 6.68011 25.3917C6.54251 25.0597 6.47168 24.7038 6.47168 24.3444V12.4893Z",fill:"#081288"}),e("path",{d:"M6.47276 12.4897V9.79323C6.45608 8.82448 6.6325 7.86212 6.99168 6.96227C7.35087 6.06241 7.88564 5.2431 8.56483 4.55211C9.24401 3.86113 10.054 3.31232 10.9475 2.93769C11.8411 2.56306 12.8003 2.37012 13.7692 2.37012C14.738 2.37012 15.6972 2.56306 16.5908 2.93769C17.4843 3.31232 18.2943 3.86113 18.9734 4.55211C19.6526 5.2431 20.1874 6.06241 20.5466 6.96227C20.9058 7.86212 21.0822 8.82448 21.0655 9.79323V12.4897H6.47276Z",fill:"#007AFF"}),e("path",{d:"M21.0781 12.4893H23.7617C25.6965 12.4893 27.5521 13.2579 28.9202 14.626C30.2883 15.9941 31.057 17.8497 31.057 19.7845C31.057 21.7194 30.2883 23.575 28.9202 24.9431C27.5521 26.3112 25.6965 27.0798 23.7617 27.0798H21.0781V12.4893Z",fill:"#FF3500"})]}),e("defs",{children:i("filter",{id:"filter0_d_1105_19305",x:"0.22168",y:"0.286784",width:"37.085",height:"37.21",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[e("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),e("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),e("feOffset",{dy:"4.16667"}),e("feGaussianBlur",{stdDeviation:"3.125"}),e("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.00392157 0 0 0 0 0.313882 0 0 0 0 0.6 0 0 0 0.2 0"}),e("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1105_19305"}),e("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_1105_19305",result:"shape"})]})})]})},de=function(t){var o=t.visible,n=t.username,r=t.role,l=t.onVisible,d=o?{}:{display:"none"};return i(ae,{children:[i(se,{onClick:l,children:[e(ce,{style:o?{}:{width:"24px",height:"24px"},children:e(le,{})}),e(he,{style:d,children:"Bedee"})]}),i(pe,{style:d,children:[e(ue,{children:n||""}),e(Ce,{children:r||""})]})]})},ae=n("div")({width:"100%",paddingBottom:"24px",borderBottom:"1px solid #CDE7F6"}),se=n("div")({width:"100%",fontWeight:700,fontSize:"27px",display:"flex",alignItems:"center",columnGap:"8px",cursor:"pointer",marginBottom:"8px"}),ce=n("div")({width:"35px",height:"35px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"10px",backgroundColor:"white"}),he=n("div")({width:"75%"}),pe=n("div")({width:"100%"}),ue=n("div")({width:"100%"}),Ce=n("div")({width:"100%",paddingTop:"8px",fontWeight:700,color:"white"});function ge(){return e("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M17.5858 8C18.4767 8 18.9229 9.07714 18.2929 9.70711L12.7071 15.2929C12.3166 15.6834 11.6834 15.6834 11.2929 15.2929L5.70711 9.7071C5.07714 9.07714 5.52331 8 6.41421 8L17.5858 8Z",fill:"white"})})}function me(){return e("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M6.41421 16C5.52331 16 5.07714 14.9229 5.70711 14.2929L11.2929 8.70711C11.6834 8.31658 12.3166 8.31658 12.7071 8.70711L18.2929 14.2929C18.9229 14.9229 18.4767 16 17.5858 16L6.41421 16Z",fill:"white"})})}var we=function(i){var t=i.item,o=void 0===t?{}:t,n=o.title,d=o.link;return e(r,{component:"div",disablePadding:!0,children:e(l,{sx:{pl:4},children:e(ve,{href:d,children:n})})})},ve=n("a")({width:"100%",color:"white",textDecoration:"none"}),fe=function(i){var t=i.item,o=void 0===t?{}:t,n=o.title,r=o.link;return e(d,{children:e(xe,{href:r,children:n})})},xe=n("a")({width:"100%",color:"#1E6AF6",textDecoration:"none"}),_e=function(t){var o=f(!1),n=o[0],r=o[1],l=f(null),d=l[0],a=l[1],p=Boolean(d),u=t.item,C=t.visible,g=u.title,m=u.icon,w=u.list||[],v=function(){return v()};if(C){var x=w.map((function(i,t){return e(we,{item:i},t)}));return i(ke,{children:[i(be,{onClick:function(){return r(!n)},children:[e(Me,{children:m}),e(s,{primary:g}),e(n?ge:me,{})]}),e(c,{in:n,timeout:"auto",unmountOnExit:!0,children:x})]})}var _=w.map((function(i,t){return e(fe,{item:i,onClose:v},t)}));return i(ke,{children:[e(be,{onClick:function(e){return a(e.currentTarget)},"aria-controls":p?g:void 0,"aria-haspopup":"true","aria-expanded":p?"true":void 0,children:e(Me,{children:m})}),e(h,{id:g,anchorEl:d,open:p,onClose:v,MenuListProps:{"aria-labelledby":g},children:_})]})},ke=n("div")({width:"100%",svg:{width:"24px",height:"24px"}}),be=n(l)({width:"100%",padding:"8px 0px"}),Me=n(a)({minWidth:"40px"}),ye=function(t){var o=t.menus,n=void 0===o?[]:o,r=t.visible,l=t.username,d=t.role,a=t.version,s=t.onLogout,c=t.onVisible,h=n.map((function(i,t){return e(_e,{item:i,visible:r},t)})),p=r?{}:{display:"none"};return e(Le,{style:{width:r?"280px":"55px"},children:i(Fe,{children:[e(de,{visible:r,username:l,role:d,version:a,onVisible:c}),e(Se,{children:h}),i(Be,{children:[i(He,{onClick:s,children:[e(re,{}),e(Ae,{style:p,children:"Logout"})]}),e(Ve,{style:p,children:a||""})]})]})})},Le=n("div")({width:"280px",height:"100vh",color:"white",background:"linear-gradient(175.42deg, #6C9EFF 3.15%, #3977EB 53.9%, #0056F3 95.95%)",position:"fixed",top:0,left:0}),Fe=n("div")({padding:"16px"}),Se=n("div")({height:"calc(100vh - 220px)",overflowY:"auto","&::-webkit-scrollbar":{width:"6px"},"&::-webkit-scrollbar-thumb":{backgroundColor:y,borderRadius:"8px"},"&::-webkit-scrollbar-thumb:hover":{backgroundColor:L}}),Be=n("div")({width:"calc(100% - 18px)",paddingTop:"8px"}),He=n("div")({width:"100%",paddingBottom:"8px",display:"flex",alignItems:"center",columnGap:"8px",cursor:"pointer"}),Ae=n("div")({width:"100%"}),Ve=n("div")({width:"100%",fontSize:"14px"}),Ee=function(i){var t=i.bdSize;return e(ze,_({},i,{md:{width:48,height:24,mt:2,ml:3,transform:"translateX(22px)"},sm:{width:36,height:18,mt:1,ml:2,transform:"translateX(16px)"}}[null!=t?t:"md"]))},ze=n((function(i){return e(p,_({focusVisibleClassName:".Mui-focusVisible",disableRipple:!0},i))}))((function(e){return{width:e.width,height:e.height,padding:0,"& .MuiSwitch-switchBase":{padding:0,marginTop:e.mt,marginLeft:e.ml,transitionDuration:"300ms","&.Mui-checked":{transform:e.transform,color:b,"& + .MuiSwitch-track":{backgroundColor:A,opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5,color:z}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:A,border:"6px solid ".concat(b)},"&.Mui-disabled .MuiSwitch-thumb":{color:b},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5,color:y}},"& .MuiSwitch-thumb":{boxSizing:"border-box",width:48===e.width?20:15,height:24===e.height?20:15},"& .MuiSwitch-track":{borderRadius:24,backgroundColor:L,opacity:1}}})),je=function(o){var n=o.label,r=o.hint,l=void 0===r?"":r,d=o.bdSize,a={md:{label:16,hint:14},sm:{label:12,hint:10}}[null!=d?d:"md"];return i(u,{container:!0,spacing:1,children:[e(u,{item:!0,children:e(Ee,_({},o))}),i(u,{item:!0,children:[e(t,{children:e(C,{color:S,fontSize:a.label,children:n})}),e(t,{children:e(C,{color:F,fontSize:a.hint,children:l})})]})]})};function Te(){return e("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M1 1L13 13M1 13L13 1L1 13Z",stroke:"#3A4248",strokeWidth:"1.28",strokeLinecap:"round",strokeLinejoin:"round"})})}var We=function(o){var n=o.title,r=o.subTitle,l=o.children,d=o.icon,a=o.open,s=o.onConfirm,c=o.onCancel,h=o.bdSize,p=o.cancelText,u=o.confirmText,C=o.isCloseIcon,g=function(){switch(h){case"xl":return{TitleFontSize:"31px",width:"1140px"};case"lg":return{TitleFontSize:"31px",width:"800px"};case"md":return{TitleFontSize:"25px",width:"550px"};default:return{TitleFontSize:"18px",width:"300px"}}}();return i(Ze,_({open:a},g,{children:[C&&e(t,{top:10,right:16,position:"absolute",onClick:c,children:e(Te,{})}),d&&e(t,{display:"flex",justifyContent:"center",paddingY:1.5,children:d}),e(Re,_({},g,{children:n})),l||e(Ie,_({},g,{children:r})),i(De,{children:[(null==c?void 0:c())||p&&e(Oe,{onClick:c,sx:{color:k},children:p}),(null==s?void 0:s())||u&&e(Oe,{onClick:s,children:u})]})]}))},Ze=n(g)((function(e){return{"& .MuiPaper-root":{width:e.width,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"20px",padding:"16px",rowGap:"13px",boxShadow:"none",backgroundColor:b}}})),Re=n(m)((function(e){return{display:"flex",justifyContent:"center",alignItems:"center",fontSize:e.TitleFontSize,fontWeight:600,padding:"8px 0 0 0",lineHeight:"20px",textAlign:"center",color:T}})),Ie=n(m)((function(e){return{fontSize:"16px",fontWeight:400,padding:"4px",lineHeight:"24px",textAlign:"center",color:H}})),De=n(w)((function(){return{display:"flex",gap:"40px"}})),Oe=n(o)((function(){return{textTransform:"none"}}));var Pe=function(){return e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M7 7H7.01M7 3H12C12.512 3 13.024 3.195 13.414 3.586L20.414 10.586C20.7889 10.9611 20.9996 11.4697 20.9996 12C20.9996 12.5303 20.7889 13.0389 20.414 13.414L13.414 20.414C13.0389 20.7889 12.5303 20.9996 12 20.9996C11.4697 20.9996 10.9611 20.7889 10.586 20.414L3.586 13.414C3.4 13.2285 3.25249 13.0081 3.15192 12.7655C3.05136 12.5228 2.99973 12.2627 3 12V7C3 5.93913 3.42143 4.92172 4.17157 4.17157C4.92172 3.42143 5.93914 3 7 3Z",stroke:"white",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})},Ge=function(t){var o=f(!0),n=o[0],r=o[1],l=t.menus,d=t.username,a=t.role,s=t.version,c=t.children;x((function(){var e=localStorage.getItem("bedee_menu");r("none"!==e)}),[]);var h=n?"16px 16px 0px 296px":"16px 16px 0px 71px";return i(Ue,{children:[e(Xe,{style:{width:n?"280px":"55px"},children:e(ye,{menus:l||Ye,visible:n,username:d,role:a,version:s,onVisible:function(){var e=!n;localStorage.setItem("bedee_menu",e?"display":"none"),r(e)}})}),e(Ne,{style:{padding:h},children:e(qe,{children:c})})]})},Ye=[{title:"Dashboard",icon:e((function(){return i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H19C19.2652 8 19.5196 7.89464 19.7071 7.70711C19.8946 7.51957 20 7.26522 20 7V5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4H5C4.73478 4 4.48043 4.10536 4.29289 4.29289Z",stroke:"white",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M4.29289 12.2929C4.10536 12.4804 4 12.7348 4 13V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H11C11.2652 20 11.5196 19.8946 11.7071 19.7071C11.8946 19.5196 12 19.2652 12 19V13C12 12.7348 11.8946 12.4804 11.7071 12.2929C11.5196 12.1054 11.2652 12 11 12H5C4.73478 12 4.48043 12.1054 4.29289 12.2929Z",stroke:"white",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M16.2929 12.2929C16.1054 12.4804 16 12.7348 16 13V19C16 19.2652 16.1054 19.5196 16.2929 19.7071C16.4804 19.8946 16.7348 20 17 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V13C20 12.7348 19.8946 12.4804 19.7071 12.2929C19.5196 12.1054 19.2652 12 19 12H17C16.7348 12 16.4804 12.1054 16.2929 12.2929Z",stroke:"white",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})]})}),{}),roles:["monitoring_dashboard_view_all","appointment_edit_all"],list:[{title:"Consultation Monitoring",link:"/consultation-monitoring",roles:["monitoring_dashboard_view_all"]},{title:"Appointment",link:"/appointment",roles:["appointment_edit_all"]},{title:"Schedule",link:"/schedule",roles:["appointment_edit_all"]}]},{title:"Report",icon:e((function(){return i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M6.39244 4.95892C7.71836 3.90301 9.31549 3.24294 11 3.05469V12.9997H20.945C20.7567 14.6842 20.0967 16.2813 19.0408 17.6072C17.9849 18.9332 16.576 19.934 14.9764 20.4945C13.3768 21.0551 11.6514 21.1526 9.99877 20.7758C8.34618 20.399 6.83357 19.5632 5.63502 18.3647C4.43648 17.1661 3.60071 15.6535 3.22391 14.0009C2.84711 12.3483 2.9446 10.6229 3.50514 9.02331C4.06569 7.42368 5.06652 6.01484 6.39244 4.95892Z",stroke:"white",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M15 8.99972H20.488C20.0391 7.73433 19.3135 6.58506 18.3641 5.63566C17.4147 4.68625 16.2654 3.96065 15 3.51172V8.99972Z",stroke:"white",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})]})}),{}),roles:["finance_report_view_all","sale_report_view_all","transaction_report_view_all"],list:[{title:"Finance report",link:"/finance-report",roles:["finance_report_view_all"]},{title:"Sale report",link:"/sale-report",roles:["sale_report_view_all"]},{title:"Transaction report",link:"/transaction-report",roles:["transaction_report_view_all"]},{title:"FDA report",link:"/fda-report",roles:["sale_report_view_all"]}]},{title:"Fulfillment",icon:e((function(){return e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z",stroke:"white",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}),{}),roles:["order_edit_all","order_view_intervention","inventory_view_all","inventory_view_store"],list:[{title:"Order",link:"/order",roles:["order_edit_all","order_view_intervention"]},{title:"Inventory",link:"/inventory",roles:["inventory_view_all","inventory_view_store"]}]},{title:"Marketing",icon:e(Pe,{}),roles:["campaign_monitoring_view_all","campaign_monitoring_edit_all","coupon_code_view_all","coupon_code_edit_all"],list:[{title:"Coupon monitoring",link:"/home/marketing/coupon",roles:["campaign_monitoring_view_all","campaign_monitoring_edit_all"]},{title:"Coupon upload",link:"/home/marketing/importer",roles:["coupon_code_view_all","coupon_code_edit_all"]},{title:"Insurance calculation",link:"/home/marketing/insurance",roles:[],isTest:!0},{title:"Banner management",link:"/home/marketing/banner",roles:[],isTest:!0}]},{title:"Catalog",icon:e(Pe,{}),roles:["campaign_monitoring_view_all","campaign_monitoring_edit_all","coupon_code_view_all","coupon_code_edit_all"],isTest:!0,list:[{title:"Categories",link:"/home/catalog/category",roles:[]},{title:"Campaigns",link:"/home/catalog/campaign",roles:[]},{title:"Deep link",link:"/home/catalog/deep-link",roles:[]}]},{title:"Customer management",icon:e((function(){return e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M5.121 17.804C7.21942 16.6179 9.58958 15.9963 12 16C14.5 16 16.847 16.655 18.879 17.804M15 10C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7956 13 12 13C11.2044 13 10.4413 12.6839 9.87868 12.1213C9.31607 11.5587 9 10.7956 9 10C9 9.20435 9.31607 8.44129 9.87868 7.87868C10.4413 7.31607 11.2044 7 12 7C12.7956 7 13.5587 7.31607 14.1213 7.87868C14.6839 8.44129 15 9.20435 15 10ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z",stroke:"white",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}),{}),roles:["user_management_view_all"],list:[{title:"Customer profile",link:"/customer",roles:[]}]},{title:"Provider management",icon:e((function(){return e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M12 4.354C12.5374 3.7447 13.2477 3.31351 14.0362 3.11779C14.8247 2.92208 15.6542 2.97112 16.4142 3.2584C17.1741 3.54568 17.8286 4.05757 18.2905 4.72596C18.7524 5.39435 18.9998 6.18754 18.9998 7C18.9998 7.81246 18.7524 8.60565 18.2905 9.27404C17.8286 9.94243 17.1741 10.4543 16.4142 10.7416C15.6542 11.0289 14.8247 11.0779 14.0362 10.8822C13.2477 10.6865 12.5374 10.2553 12 9.646M15 21H3V20C3 18.4087 3.63214 16.8826 4.75736 15.7574C5.88258 14.6321 7.4087 14 9 14C10.5913 14 12.1174 14.6321 13.2426 15.7574C14.3679 16.8826 15 18.4087 15 20V21ZM15 21H21V20C21.0001 18.9467 20.723 17.9119 20.1965 16.9997C19.6699 16.0875 18.9125 15.3299 18.0004 14.8032C17.0882 14.2765 16.0535 13.9992 15.0002 13.9992C13.9469 13.9991 12.9122 14.2764 12 14.803M13 7C13 8.06087 12.5786 9.07828 11.8284 9.82843C11.0783 10.5786 10.0609 11 9 11C7.93913 11 6.92172 10.5786 6.17157 9.82843C5.42143 9.07828 5 8.06087 5 7C5 5.93913 5.42143 4.92172 6.17157 4.17157C6.92172 3.42143 7.93913 3 9 3C10.0609 3 11.0783 3.42143 11.8284 4.17157C12.5786 4.92172 13 5.93913 13 7Z",stroke:"white",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}),{}),roles:["provider_view"],minActive:["doctors_profile","pharmacist_profile","alliedhealths_profile"],list:[{title:"Doctor profile",link:"/home/provider-management/doctors_profile",roles:[],active:["doctors_profile"]},{title:"Pharmacist profile",link:"/home/provider-management/pharmacist_profile",roles:[],active:["pharmacist_profile"]},{title:"Allied health profile",link:"/home/provider-management/alliedhealths_profile",roles:[],active:["alliedhealths_profile"]},{title:"Instant Timetable",link:"/home/provider-management/schedule",roles:[]}]},{title:"Refund management",icon:e((function(){return e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15M9 5C9 5.53043 9.21071 6.03914 9.58579 6.41421C9.96086 6.78929 10.4696 7 11 7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01",stroke:"white",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}),{}),roles:["refund_management_view","refund_management_edit"],minActive:["refund_management"],list:[{title:"Refund management",link:"/refund-management",roles:[],active:["refund_management"]}]},{title:"Admin",icon:e((function(){return e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M5 8H19M5 8C4.46957 8 3.96086 7.78929 3.58579 7.41421C3.21071 7.03914 3 6.53043 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6C21 6.53043 20.7893 7.03914 20.4142 7.41421C20.0391 7.78929 19.5304 8 19 8M5 8V18C5 18.5304 5.21071 19.0391 5.58579 19.4142C5.96086 19.7893 6.46957 20 7 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V8M10 12H14",stroke:"white",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}),{}),roles:["product_edit_all","product_view_all","store_edit_all","store_view_all"],minActive:[],list:[{title:"Store",link:"/store",roles:["store_edit_all","store_view_all"],active:[]},{title:"Product",link:"/product",roles:["product_edit_all","product_view_all"],active:[]}]},{title:"Settings",icon:e((function(){return i("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M11.675 2.317C11.249 0.561 8.751 0.561 8.325 2.317C8.049 3.452 6.749 3.99 5.753 3.382C4.209 2.442 2.443 4.209 3.383 5.752C3.5243 5.98375 3.60889 6.24559 3.62987 6.51621C3.65085 6.78683 3.60764 7.05859 3.50375 7.30935C3.39985 7.56011 3.23822 7.7828 3.032 7.95929C2.82578 8.13578 2.5808 8.26108 2.317 8.325C0.561 8.751 0.561 11.249 2.317 11.675C2.58056 11.7391 2.82529 11.8645 3.03127 12.0409C3.23726 12.2174 3.3987 12.44 3.50247 12.6906C3.60624 12.9412 3.64942 13.2128 3.62848 13.4832C3.60755 13.7537 3.5231 14.0153 3.382 14.247C2.442 15.791 4.209 17.557 5.752 16.617C5.98375 16.4757 6.24559 16.3911 6.51621 16.3701C6.78683 16.3491 7.05859 16.3924 7.30935 16.4963C7.56011 16.6001 7.7828 16.7618 7.95929 16.968C8.13578 17.1742 8.26108 17.4192 8.325 17.683C8.751 19.439 11.249 19.439 11.675 17.683C11.7391 17.4194 11.8645 17.1747 12.0409 16.9687C12.2174 16.7627 12.44 16.6013 12.6906 16.4975C12.9412 16.3938 13.2128 16.3506 13.4832 16.3715C13.7537 16.3924 14.0153 16.4769 14.247 16.618C15.791 17.558 17.557 15.791 16.617 14.248C16.4757 14.0162 16.3911 13.7544 16.3701 13.4838C16.3491 13.2132 16.3924 12.9414 16.4963 12.6907C16.6001 12.4399 16.7618 12.2172 16.968 12.0407C17.1742 11.8642 17.4192 11.7389 17.683 11.675C19.439 11.249 19.439 8.751 17.683 8.325C17.4194 8.26091 17.1747 8.13553 16.9687 7.95905C16.7627 7.78258 16.6013 7.55999 16.4975 7.30938C16.3938 7.05877 16.3506 6.78721 16.3715 6.51677C16.3924 6.24634 16.4769 5.98466 16.618 5.753C17.558 4.209 15.791 2.443 14.248 3.383C14.0162 3.5243 13.7544 3.60889 13.4838 3.62987C13.2132 3.65085 12.9414 3.60764 12.6907 3.50375C12.4399 3.39985 12.2172 3.23822 12.0407 3.032C11.8642 2.82578 11.7389 2.5808 11.675 2.317Z",stroke:"white",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213Z",stroke:"white",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})]})}),{}),roles:["operating_hours_view_all","operating_hours_edit_all","master_data_all"],minActive:["master-data-provider"],list:[{title:"Operating hours",link:"/home/setting/operating-hours",roles:["operating_hours_view_all","operating_hours_edit_all"],active:[]},{title:"Master data for provider",link:"/home/setting/master-data-provider",roles:["master_data_all"],active:["master-data-provider"]},{title:"Master data for teleconsult",link:"/home/setting/master-data-teleconsult",roles:["master_data_all"],active:["master-data-teleconsult"]}]}],Ue=n("div")({width:"100%",display:"flex",flexFlow:"row wrap"}),Xe=n("div")({display:"block",width:"280px"}),Ne=n("div")({display:"block",width:"100%",minHeight:"100vh",padding:"16px 16px 0px 296px",backgroundColor:"#F7F8F9"}),qe=n("div")({display:"block",width:"100%"});export{Ge as AdminLayout,K as Button,We as Dialog,te as OutlinedButton,ee as PrimaryButton,ne as RemoveButton,ie as SecondaryButton,ye as SideMenu,Ee as Switch,je as SwitchLabel,k as black,q as completed,N as error,M as gray1,y as gray2,L as gray3,F as gray4,S as gray5,B as gray6,H as gray7,J as pending,A as primary001,V as primary002,E as primary003,z as primary004,j as primary005,T as secondary001,W as secondary002,Z as secondary003,R as secondary004,I as secondary005,U as success,D as trinary001,O as trinary002,P as trinary003,G as trinary004,Y as trinary005,X as warning,b as white};
