(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a.n(c),s=a(14),i=a.n(s),l=(a(39),a(17)),o=a.n(l),d=a(29),u=a(12),j=(a(41),a(13)),p=a(3),b=(a(42),a.p+"static/media/image.3710b8a3.svg");var f=function(e){var t=e.setUpload,a=Object(p.f)(),r=Object(c.useState)(!1),s=Object(u.a)(r,2),i=s[0],l=s[1],o=function(e){if(null!=e.type.match(/image\/[a-z]*/))return!0},d=function(e){t(e),a.push("/loading")},j=function(e){switch(e.type){case"dragenter":case"dragover":e.preventDefault(e),l(!0);break;case"dragleave":e.preventDefault(e),l(!1);break;case"drop":if(l(!1),e.dataTransfer.files.length>0){e.preventDefault(e);var t=e.dataTransfer.files[0];""!==t.name&&o(t)&&d(t)}break;default:return e}};return Object(n.jsxs)("div",{className:"uploader",children:[Object(n.jsx)("h1",{children:"Upload your image"}),Object(n.jsx)("h3",{children:"File should be Jpeg, Png,..."}),Object(n.jsxs)("div",{className:"uploader__container "+(i?" uploader__container-drag":""),onDragEnter:function(e){return j(e)},onDragOver:function(e){return j(e)},onDragLeave:function(e){return j(e)},onDrop:function(e){return j(e)},children:[Object(n.jsx)("img",{src:b,alt:""}),Object(n.jsxs)("h3",{className:"container__title",children:[i,"Drag & Drop your image here"]})]}),Object(n.jsx)("span",{className:"container__title",children:"Or"}),Object(n.jsx)("form",{className:"uploader__form",children:Object(n.jsxs)("label",{htmlFor:"fileupload",children:[Object(n.jsx)("input",{type:"file",accept:"image/*",id:"fileupload",name:"fileupload",className:"form__file",onChange:function(){return function(){var e=new FormData(document.forms[0]).get("fileupload");""!==e.name&&o(e)&&d(e)}()}}),"Choose a file"]})})]})};a(48);var h=function(){var e=Object(c.useState)(10),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(p.f)();return Object(c.useEffect)((function(){var e=setTimeout((function(){100!==a?r(a+10):s.push("/uploaded")}),1e3);return function(){clearTimeout(e)}}),[a,s]),Object(n.jsxs)("div",{className:"loading",children:[Object(n.jsx)("h3",{children:"Uploading..."}),Object(n.jsx)("div",{className:"loading__progress",children:Object(n.jsx)("div",{className:"progress__number",style:{width:"".concat(a,"%")}})})]})},O=a(30),m=(a(49),a(31)),x=a.n(m);var v=function(e){var t=e.uploadedUrl,a=Object(p.f)();return Object(n.jsxs)("div",{className:"uploaded",children:[Object(n.jsx)(x.a,{className:"uploaded__success"}),Object(n.jsx)("h4",{className:"success__text",children:"Uploaded Successfully!"}),Object(n.jsx)("div",{className:"uploaded__container",children:Object(n.jsx)("img",{src:t,alt:""})}),Object(n.jsxs)("div",{className:"uploaded__copy",children:[Object(n.jsx)("span",{children:null===t||void 0===t?void 0:t.substr(0,40).concat("......")}),Object(n.jsx)("button",{className:"button__copy",onClick:function(e){if("Done!"===e.target.innerHTML)a.push("/");else{var n=new Blob([t],{type:"text/plain"}),c=[new ClipboardItem(Object(O.a)({},n.type,n))];navigator.clipboard.write(c),e.target.innerHTML="Done!"}},children:"Copy Link"})]})]})},g=a(32),_=a.n(g).a.create({baseURL:"/api"});var N=function(){var e=Object(c.useState)(),t=Object(u.a)(e,2),a=t[0],r=t[1],s=function(){var e=Object(d.a)(o.a.mark((function e(){var t,a,n,c=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:{},(a=new FormData).append("file",t),e.next=5,_.post("/upload",a);case 5:n=e.sent,r(n.data.url);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)(j.a,{children:Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)(p.c,{children:[Object(n.jsx)(p.a,{exact:!0,path:"/uploaded",children:Object(n.jsx)(v,{uploadedUrl:a})}),Object(n.jsx)(p.a,{exact:!0,path:"/loading",children:Object(n.jsx)(h,{})}),Object(n.jsx)(p.a,{exact:!0,path:"/",children:Object(n.jsx)(f,{setUpload:s})})]}),Object(n.jsx)("div",{className:"app__footer",children:"Jyoti ADHIAKRI @ DevChallenges.io"})]})})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.73cd465d.chunk.js.map