(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,a){},38:function(e,a,t){e.exports=t(69)},69:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),c=t.n(l),s=t(7),o=(t(43),t(9)),u=t(8);var i=function(e){var a=e.user;return r.a.createElement("header",{className:"home-cta"},r.a.createElement("h1",{style:{color:"#c0392b"},className:"mb-5"},"Let's Watch Trailers"),a?r.a.createElement(s.b,{to:"/trailers/new",className:"btn btn-primary reddin"},"Add a Trailer"):r.a.createElement(s.b,{to:"/register",className:"btn btn-primary reddin"},"Register to Create a Trailer"))},m=t(37),p=t.n(m),E=t(16),b=t(17),d=t(6),f=t.n(d),v=t(10),g=t(11),h=t.n(g),y=t(72),O=t(73),C=t(1),N=function(e){var a=e.setUser,t=Object(n.useState)({email:"",password:""}),l=Object(o.a)(t,2),c=l[0],s=l[1],i=Object(n.useState)(!1),m=Object(o.a)(i,2),p=m[0],d=m[1],g=function(){var e=Object(v.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,h.a.post("/api/authenticate",c);case 4:200===(n=e.sent).status?(a(n.data.user),Object(C.b)("Logged in successfully",{type:C.b.TYPE.SUCCESS}),d(!0)):Object(C.b)("Error logging in. Please check credentials.",{type:C.b.TYPE.ERROR}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),Object(C.b)("Error logging you in. Please check credentials.",{type:C.b.TYPE.ERROR});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),N=function(e){e.persist();var a=e.target,t=a.name,n=a.value;s((function(e){return Object(b.a)({},e,Object(E.a)({},t,n))})),console.log(c)};return p?r.a.createElement(u.a,{to:"/trailers"}):r.a.createElement(y.a,{className:"my-5"},r.a.createElement("header",null,r.a.createElement("h1",null,"Login")),r.a.createElement("hr",null),r.a.createElement(O.a,{onSubmit:g},r.a.createElement(O.a.Group,null,r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement(O.a.Control,{type:"email",name:"email",onChange:N,value:c.email})),r.a.createElement(O.a.Group,null,r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement(O.a.Control,{type:"password",name:"password",onChange:N,value:c.password})),r.a.createElement(O.a.Group,null,r.a.createElement("button",{className:"btn btn-primary"},"Login"))))},w=function(e){var a=e.setUser,t=Object(n.useState)(!1),l=Object(o.a)(t,2),c=l[0],s=l[1];return Object(n.useEffect)((function(){Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/logout");case 3:200===e.sent.status&&(a(!1),Object(C.b)("You have successfully logged out",{type:C.b.TYPE.SUCCESS}),s(!0)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),Object(C.b)("There was an error while attempting to log you out",{type:C.b.TYPE.ERROR});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),c?r.a.createElement(u.a,{to:"/"}):null},j=function(e){var a=e.setUser,t=Object(n.useState)({firstName:"",lastName:"",email:"",emailConfirmation:"",password:"",passwordConfirmation:""}),l=Object(o.a)(t,2),c=l[0],s=l[1],i=Object(n.useState)(!1),m=Object(o.a)(i,2),p=m[0],d=m[1],g=function(){var e=Object(v.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,h.a.post("/api/register",c);case 4:200===(n=e.sent).status?(a(n.data.user),sessionStorage.setItem("user",JSON.stringify(n.data.user)),Object(C.b)("Successfully registered and logged in.",{type:C.b.TYPE.SUCCESS}),d(!0)):Object(C.b)("Registration error.",{type:C.b.TYPE.ERROR}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),Object(C.b)("Registration error.",{type:C.b.TYPE.ERROR});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),N=function(e){e.persist();var a=e.target,t=a.name,n=a.value;s((function(e){return Object(b.a)({},e,Object(E.a)({},t,n))}))};return p?r.a.createElement(u.a,{to:"/"}):r.a.createElement(y.a,{className:"my-5"},r.a.createElement("header",null,r.a.createElement("h1",null,"Register")),r.a.createElement("hr",null),r.a.createElement(O.a,{onSubmit:g},r.a.createElement(O.a.Group,null,r.a.createElement("label",{htmlFor:"firstName"},"First Name:"),r.a.createElement(O.a.Control,{type:"firstName",name:"firstName",onChange:N,value:c.firstName})),r.a.createElement(O.a.Group,null,r.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),r.a.createElement(O.a.Control,{type:"lastName",name:"lastName",onChange:N,value:c.lastName})),r.a.createElement(O.a.Group,null,r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement(O.a.Control,{type:"email",name:"email",onChange:N,value:c.email})),r.a.createElement(O.a.Group,null,r.a.createElement("label",{htmlFor:"emailConfirmation"},"Email Confirmation:"),r.a.createElement(O.a.Control,{type:"emailConfirmation",name:"emailConfirmation",onChange:N,value:c.emailConfirmation})),r.a.createElement(O.a.Group,null,r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement(O.a.Control,{type:"password",name:"password",onChange:N,value:c.password})),r.a.createElement(O.a.Group,null,r.a.createElement("label",{htmlFor:"passwordConfirmation"},"Password Confirmation:"),r.a.createElement(O.a.Control,{type:"password",name:"passwordConfirmation",onChange:N,value:c.passwordConfirmation})),r.a.createElement(O.a.Group,null,r.a.createElement("button",{className:"btn btn-primary"},"Register"))))},T=function(e){var a=e.user,t=Object(n.useState)([]),l=Object(o.a)(t,2),c=l[0],u=l[1];Object(n.useEffect)((function(){Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:case"end":return e.stop()}}),e)})))()}),[]);var i=function(){var e=Object(v.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/trailers");case 2:200===(a=e.sent).status&&u(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(v.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/api/trailers/delete",{id:a._id});case 3:return 200===e.sent.status&&Object(C.b)("The trailer was deleted successfully",{type:C.b.TYPE.SUCCESS}),e.next=7,i();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Object(C.b)("There was an error deleting the trailer",{type:C.b.TYPE.ERROR});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(y.a,{className:"my-5"},r.a.createElement("header",null,r.a.createElement("h1",null,"Trailer Database")),r.a.createElement("hr",null),r.a.createElement("div",{className:"content"},c&&c.map((function(e,t){return r.a.createElement("div",{key:t,className:"card my-3"},r.a.createElement("div",{className:"card-header clearfix"},r.a.createElement("div",{className:"float-left"},r.a.createElement("h5",{className:"card-title"},e.trailerTitle),e.user?r.a.createElement("small",null,e.user.fullname):null),r.a.createElement("div",{className:"float-right"},r.a.createElement("small",null,e.updatedAt))),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},"Genre: ",e.genre),r.a.createElement("p",{className:"card-text"},"Rating: ",e.rating),r.a.createElement("p",{className:"card-text"},"Description: ",e.description),r.a.createElement("p",{className:"card-text"},"Language: ",e.language),r.a.createElement("p",{className:"card-text"},"Release Year: ",e.year),r.a.createElement("p",{className:"card-text"},"Video Type: ",e.videoType),r.a.createElement("p",{className:"card-text"},"Episodes: ",e.episodes)),a?r.a.createElement("div",{className:"card-footer"},r.a.createElement(s.b,{to:{pathname:"/trailers/edit",state:{id:e._id}}},r.a.createElement("i",{className:"fa fa-edit"})),r.a.createElement(s.b,{to:{pathname:"/trailers/",state:{id:e._id}},onClick:function(){return m(e)}},r.a.createElement("i",{className:"fa fa-trash"}))):null)}))))},x=function(){var e=Object(n.useState)({trailerTitle:"",description:"",genre:"Action",rating:"PG",year:"",episodes:"",language:"",videoType:"Movie"}),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),i=s[0],m=s[1],p=function(){var e=Object(v.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,h.a.post("/api/trailers",t);case 4:200===e.sent.status?(Object(C.b)("The trailer was created successfully",{type:C.b.TYPE.SUCCESS}),m(!0)):Object(C.b)("There was an issue creating the trailer",{type:C.b.TYPE.ERROR}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),Object(C.b)("There was an issue creating the trailer",{type:C.b.TYPE.ERROR});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),d=function(){var e=Object(v.a)(f.a.mark((function e(a){var t,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.persist(),t=a.target,n=t.name,r=t.value,l((function(e){return Object(b.a)({},e,Object(E.a)({},n,r))}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return i?r.a.createElement(u.a,{to:"/trailers"}):r.a.createElement(y.a,{className:"my-5"},r.a.createElement("header",null,r.a.createElement("h1",null,"Add new Trailer")),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement(O.a,{onSubmit:p},r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Trailer Title:"),r.a.createElement(O.a.Control,{name:"trailerTitle",onChange:d,value:t.trailerTitle})),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Description:"),r.a.createElement(O.a.Control,{as:"textarea",name:"description",onChange:d,value:t.description})),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Genre:"),r.a.createElement(O.a.Control,{as:"select",name:"genre",onChange:d,defaultValue:t.genre},["Action","Comedy","Horror","Romance","Thiller","Drama","Mystery","Crime","Animation","Adventure","Fantasy","Family","Sci-Fi","Western"].map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)})))),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Rating:"),r.a.createElement(O.a.Control,{as:"select",name:"rating",onChange:d,defaultValue:t.rating},["G","PG","PG-13","R","NC-17","A"].map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)})))),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Video Type:"),r.a.createElement(O.a.Control,{as:"select",name:"videoTypes",onChange:d,defaultValue:t.videoType},["Movie","TV Show"].map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)})))),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Release Date:"),r.a.createElement(O.a.Control,{type:"number",name:"year",onChange:d,value:t.year})),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Language:"),r.a.createElement(O.a.Control,{name:"language",onChange:d,value:t.language})),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Episodes:"),r.a.createElement(O.a.Control,{type:"number",name:"episodes",step:"1",min:"1",max:"30",onChange:d,value:t.episodes})),r.a.createElement(O.a.Group,null,r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Create")))))},R=function(e){var a=e.location.state.id,t=Object(n.useState)({title:"",content:"",status:"DRAFT"}),l=Object(o.a)(t,2),c=l[0],s=l[1],i=Object(n.useState)(!1),m=Object(o.a)(i,2),p=m[0],d=m[1];Object(n.useEffect)((function(){Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/trailers/".concat(a));case 2:200===(t=e.sent).status&&s(t.data);case 4:case"end":return e.stop()}}),e)})))()}),[]);var g=function(){var e=Object(v.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,h.a.post("/api/trailers/update",c);case 4:200===e.sent.status?(Object(C.b)("The trailer was updated successfully",{type:C.b.TYPE.SUCCESS}),d(!0)):Object(C.b)("There was an issue updating the trailer",{type:C.b.TYPE.ERROR}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),Object(C.b)("There was an issue updating the trailer",{type:C.b.TYPE.ERROR});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),N=function(){var e=Object(v.a)(f.a.mark((function e(a){var t,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.persist(),t=a.target,n=t.name,r=t.value,s((function(e){return Object(b.a)({},e,Object(E.a)({},n,r))}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return p?r.a.createElement(u.a,{to:"/trailers"}):r.a.createElement(y.a,{className:"my-5"},r.a.createElement("header",null,r.a.createElement("h1",null,"Edit Trailer")),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement(O.a,{onSubmit:g},r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Title:"),r.a.createElement(O.a.Control,{name:"title",onChange:N,value:c.title})),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Content:"),r.a.createElement(O.a.Control,{as:"textarea",name:"content",onChange:N,value:c.content})),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Status:"),r.a.createElement(O.a.Control,{as:"select",name:"status",onChange:N,defaultValue:c.status||"DRAFT"},r.a.createElement("option",{value:"DRAFT"},"draft"),r.a.createElement("option",{value:"PUBLISHED"},"published"))),r.a.createElement(O.a.Group,null,r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Update")))))};var S=function(e){var a=e.user,t=e.setUser;return r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:i}),r.a.createElement(u.b,{exact:!0,path:"/about",component:p.a}),r.a.createElement(u.b,{exact:!0,path:"/login",render:function(e){return r.a.createElement(N,Object.assign({},e,{setUser:t}))}}),r.a.createElement(u.b,{exact:!0,path:"/logout",render:function(e){return r.a.createElement(w,Object.assign({},e,{setUser:t}))}}),r.a.createElement(u.b,{exact:!0,path:"/register",render:function(e){return r.a.createElement(j,Object.assign({},e,{setUser:t}))}}),r.a.createElement(u.b,{exact:!0,path:"/trailers",render:function(e){return r.a.createElement(T,Object.assign({},e,{user:a}))}}),r.a.createElement(u.b,{exact:!0,path:"/trailers/new",component:x}),r.a.createElement(u.b,{exact:!0,path:"/trailers/edit",component:R}))};var k=function(e){var a=e.user;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement(s.b,{to:"/",className:"navbar-brand"},"S.P.I.C.E.D"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/about",className:"nav-link"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/contact",className:"nav-link"},"Contact")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{href:"",className:"nav-link dropdown-toggle",id:"trailersDropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Trailers"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"trailersDropdown"},r.a.createElement(s.b,{to:"/trailers",className:"dropdown-item"},"Trailers Database"),a?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement(s.b,{to:"/trailers/new",className:"dropdown-item"},"Add Trailer")):null))),r.a.createElement("ul",{className:"navbar-nav"},a?r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/logout",className:"nav-link"},r.a.createElement("i",{className:"fa fa-sign-out"}),"Logout")):r.a.createElement(n.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/register",className:"nav-link"},r.a.createElement("i",{className:"fa fa-user-plus"}),"Register")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/login",className:"nav-link"},r.a.createElement("i",{className:"fa fa-sign-in"}),"Login"))))))};t(68);var G=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,null),r.a.createElement(k,{user:t}),r.a.createElement(S,{user:t,setUser:l}))};c.a.render(r.a.createElement(s.a,null,r.a.createElement(G,null)),document.querySelector("#root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.36c893f6.chunk.js.map