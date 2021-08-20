(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{18:function(t,e,n){t.exports={ContactsList:"ContactsList_ContactsList__2ydzu",LoadingWrapper:"ContactsList_LoadingWrapper__1SB4h"}},29:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__Lg1yF"}},30:function(t,e,n){t.exports={searchContacts:"SearchContacts_searchContacts__jFpz7"}},68:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"DB_fetchContacts",(function(){return k})),n.d(r,"DB_postContact",(function(){return F})),n.d(r,"DB_deleteContact",(function(){return N})),n.d(r,"addContact",(function(){return S})),n.d(r,"deleteContact",(function(){return W})),n.d(r,"filterContacts",(function(){return z}));var c={};n.r(c),n.d(c,"rootReducer",(function(){return M}));var a={};n.r(a),n.d(a,"getContacts",(function(){return q})),n.d(a,"getFilter",(function(){return G})),n.d(a,"getFilteredContacts",(function(){return Q})),n.d(a,"isLoading",(function(){return H})),n.d(a,"error",(function(){return K}));var o=n(0),u=n.n(o),i=n(11),s=n.n(i),f=n(6),l=n(4),b=n(3),d=n.n(b),p=n(8),j=n(14),O=n.n(j),h="http://localhost:3001/contacts";function C(){return m.apply(this,arguments)}function m(){return(m=Object(p.a)(d.a.mark((function t(){var e,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("".concat(h));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,e){return x.apply(this,arguments)}function x(){return(x=Object(p.a)(d.a.mark((function t(e,n){var r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.post("".concat(h),{name:"".concat(e),number:"".concat(n)});case 2:return r=t.sent,c=r.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return g.apply(this,arguments)}function g(){return(g=Object(p.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.delete("".concat(h,"/").concat(e));case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var y,B,D,w=n(28),L=n.n(w),k=Object(l.c)("contacts/fetchContacts",function(){var t=Object(p.a)(d.a.mark((function t(e,n){var r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,C();case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),F=Object(l.c)("contacts/postContact",function(){var t=Object(p.a)(d.a.mark((function t(e,n){var r,c,a,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.name,c=e.number,a=n.rejectWithValue,t.prev=2,t.next=5,v(r,c);case 5:return o=t.sent,t.abrupt("return",o);case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",a(t.t0));case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e,n){return t.apply(this,arguments)}}()),N=Object(l.c)("contacts/deleteContact",function(){var t=Object(p.a)(d.a.mark((function t(e,n){var r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,_(e);case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),S=Object(l.b)("contactsList/addContact",(function(t){var e=t.name,n=t.number;return{payload:{id:L.a.generate(),name:e,number:n}}})),W=Object(l.b)("contacts/deleteContact"),z=Object(l.b)("contacts/filterContacts"),V=n(2),E=n(31),J=n(7),R=Object(l.d)([],(y={},Object(V.a)(y,r.DB_fetchContacts.fulfilled,(function(t,e){return e.payload})),Object(V.a)(y,r.addContact,(function(t,e){var n=e.payload;return[].concat(Object(E.a)(t),[n])})),Object(V.a)(y,r.DB_postContact.fulfilled,(function(){})),Object(V.a)(y,r.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),y)),T=Object(l.d)("",Object(V.a)({},r.filterContacts,(function(t,e){return e.payload}))),A=Object(l.d)(!1,(B={},Object(V.a)(B,r.DB_fetchContacts.pending,(function(){return!0})),Object(V.a)(B,r.DB_fetchContacts.fulfilled,(function(){return!1})),Object(V.a)(B,r.DB_fetchContacts.rejected,(function(){return!1})),Object(V.a)(B,r.DB_postContact.pending,(function(){return!0})),Object(V.a)(B,r.DB_postContact.fulfilled,(function(){return!1})),Object(V.a)(B,r.DB_postContact.rejected,(function(){return!1})),Object(V.a)(B,r.DB_deleteContact.pending,(function(){return!0})),Object(V.a)(B,r.DB_deleteContact.fulfilled,(function(){return!1})),Object(V.a)(B,r.DB_deleteContact.rejected,(function(){return!1})),B)),I=Object(l.d)(null,(D={},Object(V.a)(D,r.DB_fetchContacts.rejected,(function(t,e){return e.payload})),Object(V.a)(D,r.DB_fetchContacts.pending,(function(){return null})),Object(V.a)(D,r.DB_postContact.rejected,(function(t,e){return e.payload})),Object(V.a)(D,r.DB_postContact.pending,(function(){return null})),Object(V.a)(D,r.DB_deleteContact.rejected,(function(t,e){return e.payload})),Object(V.a)(D,r.DB_deleteContact.pending,(function(){return null})),D)),M=Object(J.b)({contacts:R,filter:T,isLoading:A,error:I}),P=n(12),q=function(t){return t.contacts},G=function(t){return t.filter},H=function(t){return t.isLoading},K=function(t){return t.error},Q=Object(P.a)([q,G],(function(t,e){if(t&&e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}return t})),U=Object(l.a)({reducer:c.rootReducer}),X=n(19),Y=n(29),Z=n.n(Y),$=n(1);function tt(){var t=Object(o.useState)(""),e=Object(X.a)(t,2),n=e[0],c=e[1],u=Object(o.useState)(""),i=Object(X.a)(u,2),s=i[0],l=i[1],b=Object(f.c)(a.getContacts),j=Object(f.b)(),O=function(t){var e=t.target,n=e.name,r=e.value;switch(n){case"name":c(r);break;case"number":l(r)}},h=function(){c(""),l("")};return Object($.jsxs)("form",{className:Z.a.contactForm,onSubmit:function(t){return t.preventDefault(),b&&b.find((function(t){return t.name===n}))?alert(n+" is already in contacts"):n?s?(j(r.addContact({name:n,number:s})),Object(p.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(r.DB_postContact({name:n,number:s}));case 2:return t.next=4,j(r.DB_fetchContacts());case 4:case"end":return t.stop()}}),t)})))(),void h()):alert("Type some number"):alert("Type some name")},children:[Object($.jsxs)("label",{children:["Name",Object($.jsx)("input",{name:"name",type:"text",value:n,onChange:O})]}),Object($.jsxs)("label",{children:["Number",Object($.jsx)("input",{name:"number",type:"text",value:s,onChange:O})]}),Object($.jsx)("button",{type:"submit",children:"Add contact"})]})}var et=n(18),nt=n.n(et);function rt(){var t=Object(f.c)(a.getFilteredContacts),e=Object(f.c)(a.isLoading),n=Object(f.c)(a.error),c=Object(f.b)();function u(){return(u=Object(p.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(r.deleteContact(e)),t.next=3,c(r.DB_deleteContact(e));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(o.useEffect)((function(){c(r.DB_fetchContacts())}),[c]),Object($.jsxs)($.Fragment,{children:[Object($.jsxs)("div",{className:nt.a.LoadingWrapper,children:[e&&Object($.jsx)("div",{children:"\u0421ontact synchronization..."}),n&&Object($.jsxs)("div",{children:[n.message,", no conection to DB"]})]}),Object($.jsx)("ul",{className:nt.a.ContactsList,children:t&&t.map((function(t){return Object($.jsxs)("li",{children:[t.name,": ",t.number,Object($.jsx)("button",{onClick:function(){!function(t){u.apply(this,arguments)}(t.id)},children:"Delete"})]},t.id)}))})]})}var ct=n(30),at=n.n(ct);function ot(){var t=Object(f.c)(a.getFilter),e=Object(f.b)();return Object($.jsxs)("label",{className:at.a.searchContacts,children:["Find contacts by name",Object($.jsx)("input",{name:"filter",type:"text",value:t,onChange:function(t){return e(r.filterContacts(t.target.value))}})]})}var ut=function(){return Object($.jsxs)($.Fragment,{children:[Object($.jsx)("h2",{children:"Phonebook"}),Object($.jsx)(tt,{}),Object($.jsx)("h2",{children:"Contacts"}),Object($.jsx)(ot,{}),Object($.jsx)(rt,{})]})};n(68),n(69);s.a.render(Object($.jsx)(u.a.StrictMode,{children:Object($.jsx)(f.a,{store:U,children:Object($.jsx)(ut,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.0d8d1df9.chunk.js.map