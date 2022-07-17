(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{114:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),o=n(7),s=n(31),i=n(5),l=n(12),u=n.n(l),j=n(19),d=n(16),b=n.n(d),m="https://mern-calendar-rjorge99.herokuapp.com/api",f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(m,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a=localStorage.getItem("token")||"",r="".concat(m,"/").concat(e);return"GET"===n?fetch(r,{method:n,headers:{"x-token":a}}):fetch(r,{method:n,headers:{"Content-type":"application/json","x-token":a},body:JSON.stringify(t)})},p="[ui] Open Modal",v="[ui] Close Modal",h="[event] Set Active",x="[event] Logout event",g="[event] Add new",y="[event] Clear active event",N="[event] Event updated",w="[event] Event deleted",k="[event] Events loaded",E="[auth] Finish checking login state",S="[auth] Login",C="[auth] Logout",D=n(6),T=n(15),P=n.n(T),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(D.a)(Object(D.a)({},e),{},{start:P()(e.start).toDate(),end:P()(e.end).toDate()})}))},A=function(e){return{type:g,payload:e}},_=function(){return{type:y}},L=function(e){return{type:N,payload:e}},R=function(){return{type:w}},G=function(e){return{type:k,payload:e}},M=function(){return{type:E}},V=function(e){return{type:S,payload:e}},F=function(){return function(e){localStorage.clear(),e(H()),e({type:x})}},H=function(){return{type:C}},J=n(11),U=n(23),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(J.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(D.a)(Object(D.a)({},r),{},Object(U.a)({},t.name,t.value)))};return[r,s,o]},X=(n(81),n(2)),q=function(){var e=Object(o.b)(),t=B({lEmail:"",lPassword:""}),n=Object(J.a)(t,2),a=n[0],r=n[1],c=B({rName:"",rEmail:"",rPassword:"",rPassword2:""}),s=Object(J.a)(c,2),i=s[0],l=s[1],d=i.rName,m=i.rEmail,O=i.rPassword,p=i.rPassword2,v=a.lEmail,h=a.lPassword;return Object(X.jsx)("div",{className:"container login-main-container",children:Object(X.jsx)("div",{className:"login-container",children:Object(X.jsxs)("div",{className:"row",children:[Object(X.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(X.jsx)("h3",{children:"Ingreso"}),Object(X.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=v,a=h,function(){var e=Object(j.a)(u.a.mark((function e(t){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(V({uid:c.uid,name:c.name}))):b.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:v,onChange:r})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:h,onChange:r})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(X.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(X.jsx)("h3",{children:"Registro"}),Object(X.jsxs)("form",{children:[Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:d,onChange:l})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"email",className:"form-control",name:"rEmail",value:m,onChange:l,placeholder:"Correo"})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword",value:O,onChange:l})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:p,onChange:l})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{onClick:function(t){if(t.preventDefault(),O!==p)return b.a.fire("Error","Las contrasenas deben de ser iguales","error");var n,a,r;e((n=m,a=O,r=d,function(){var e=Object(j.a)(u.a.mark((function e(t){var c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("auth/new",{email:n,password:a,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(V({uid:o.uid,name:o.name}))):b.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})})},z=function(){var e=Object(o.c)((function(e){return e.auth})).name,t=Object(o.b)();return Object(X.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(X.jsx)("span",{className:"navbar-brand",children:e}),Object(X.jsxs)("button",{className:"btn btn-danger",onClick:function(){t(F())},children:[Object(X.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(X.jsx)("span",{children:" Salir"})]})]})},K=n(45),Q=(n(84),{allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}}),W=(n(85),function(e){var t=e.event,n=t.title,a=t.user;return Object(X.jsxs)("div",{children:[Object(X.jsx)("strong",{children:n}),Object(X.jsxs)("span",{children:["- ",a.name]})]})}),Y=n(42),Z=n.n(Y),$=n(43),ee=n.n($),te=function(){return{type:p}},ne={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};Z.a.setAppElement("#root");var ae=P()().minutes(0).seconds(0).add(1,"hours"),re=ae.clone().add(1,"hours"),ce={title:"",notes:"",start:ae.toDate(),end:re.toDate()},oe=function(){var e=Object(a.useState)(ae.toDate()),t=Object(J.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(re.toDate()),s=Object(J.a)(c,2),i=s[0],l=s[1],d=Object(a.useState)(!0),m=Object(J.a)(d,2),f=m[0],p=m[1],h=Object(o.b)(),x=Object(o.c)((function(e){return e.ui})).modalOpen,g=Object(o.c)((function(e){return e.calendar})).activeEvent,y=Object(a.useState)(ce),N=Object(J.a)(y,2),w=N[0],k=N[1],E=w.title,S=w.notes,C=w.start,T=w.end;Object(a.useEffect)((function(){k(g||ce)}),[g,k]);var I=function(e){var t=e.target;k(Object(D.a)(Object(D.a)({},w),{},Object(U.a)({},t.name,t.value)))},R=function(e){h({type:v}),k(ce),h(_())};return Object(X.jsxs)(Z.a,{isOpen:x,onRequestClose:R,style:ne,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(X.jsxs)("h1",{children:[" ",g?"Editar evento":"Nuevo evento"," "]}),Object(X.jsx)("hr",{}),Object(X.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t,n=P()(C),a=P()(T);return n.isSameOrAfter(a)?b.a.fire("Error","La fecha fin debe ser mayor a la fecha de inicio.","error"):E.trim().length<2?p(!1):(h(g?(t=w,function(){var e=Object(j.a)(u.a.mark((function e(n){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("events/".concat(t.id),t,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(r=e.sent).ok?n(L(t)):b.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(j.a)(u.a.mark((function t(n,a){var r,c,o,s,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,O("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.evento.id,e.user={_id:c,name:o},n(A(e))),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(1);case 13:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(w)),p(!0),void R())},className:"container",children:[Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Fecha y hora inicio"}),Object(X.jsx)(ee.a,{className:"form-control",onChange:function(e){r(e),k(Object(D.a)(Object(D.a)({},w),{},{start:e}))},value:n})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Fecha y hora fin"}),Object(X.jsx)(ee.a,{className:"form-control",onChange:function(e){l(e),k(Object(D.a)(Object(D.a)({},w),{},{end:e}))},minDate:n,value:i})]}),Object(X.jsx)("hr",{}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Titulo y notas"}),Object(X.jsx)("input",{type:"text",className:"form-control ".concat(!f&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",value:E,onChange:I,autoComplete:"off"}),Object(X.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",value:S,onChange:I,name:"notes"}),Object(X.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(X.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(X.jsx)("i",{className:"far fa-save"}),Object(X.jsx)("span",{children:" Guardar"})]})]})]})},se=function(){var e=Object(o.b)();return Object(X.jsx)("button",{onClick:function(){e(te())},className:"btn btn-primary fab",children:Object(X.jsx)("i",{className:"fas fa-plus"})})},ie=function(){var e=Object(o.b)();return Object(X.jsxs)("button",{onClick:function(){e(function(){var e=Object(j.a)(u.a.mark((function e(t,n){var a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,O("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(R()):b.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},className:"btn btn-danger fab-danger",children:[Object(X.jsx)("i",{className:"fas fa-trash"}),Object(X.jsx)("span",{children:" Borrar evento"})]})};P.a.locale("es");var le=Object(K.b)(P.a),ue=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).uid,n=Object(o.c)((function(e){return e.calendar})),r=n.events,c=n.activeEvent,s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(J.a)(s,2),l=i[0],d=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=I(a.eventos),t(G(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(X.jsxs)("div",{className:"calendar-screen",children:[Object(X.jsx)(z,{}),Object(X.jsx)(K.a,{localizer:le,events:r,startAccessor:"start",endAccessor:"end",messages:Q,eventPropGetter:function(e,n,a,r){return{style:{backgroundColor:t===e.user._id?"#367cf7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(){e(te())},onSelectEvent:function(t){e(function(e){return{type:h,payload:e}}(t))},onView:function(e){d(e),localStorage.setItem("lastView",e)},view:l,selectable:!0,onSelectSlot:function(t){e(_())},components:{event:W}}),Object(X.jsx)(se,{}),c&&Object(X.jsx)(ie,{}),Object(X.jsx)(oe,{})]})},je=function(e){var t=e.isAuth,n=e.children;return t?n:Object(X.jsx)(i.a,{to:"/login"})},de=function(e){var t=e.isAuth,n=e.children;return t?Object(X.jsx)(i.a,{to:"/"}):n},be=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(V({uid:a.uid,name:a.name}))):t(M());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(X.jsx)("h5",{children:"Espere..."}):Object(X.jsx)(s.a,{children:Object(X.jsxs)(i.d,{children:[Object(X.jsx)(i.b,{path:"/login",element:Object(X.jsx)(de,{isAuth:!!r,children:Object(X.jsx)(q,{})})}),Object(X.jsx)(i.b,{path:"/",element:Object(X.jsx)(je,{isAuth:!!r,children:Object(X.jsx)(ue,{})})})]})})},me=n(25),fe=n(59),Oe={checking:!0},pe=n(46),ve={events:[],activeEvent:null},he={modalOpen:!1},xe=Object(me.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(D.a)(Object(D.a)({},e),{},{modalOpen:!0});case v:return Object(D.a)(Object(D.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(D.a)(Object(D.a)({},e),{},{events:[].concat(Object(pe.a)(e.events),[t.payload])});case h:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:t.payload});case y:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:null});case N:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case w:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case k:return Object(D.a)(Object(D.a)({},e),{},{events:Object(pe.a)(t.payload)});case x:return Object(D.a)({},ve);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(D.a)(Object(D.a)(Object(D.a)({},e),t.payload),{},{checking:!1});case E:return Object(D.a)(Object(D.a)({},e),{},{checking:!1});case C:return{checking:!1};default:return e}}}),ge="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||me.c,ye=Object(me.d)(xe,ge(Object(me.a)(fe.a))),Ne=function(){return Object(X.jsx)(o.a,{store:ye,children:Object(X.jsx)(be,{})})};n(114);c.a.render(Object(X.jsx)(Ne,{}),document.getElementById("root"))},81:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.c2251845.chunk.js.map