(this.webpackJsonpanswer_page=this.webpackJsonpanswer_page||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(30),s=n.n(r),i=n(5),o=n(19);n(39),n(51),n(50);o.a.initializeApp({apiKey:"AIzaSyDdKuvipqVEbHicVyXLDjx_frIUA0EHMsw",authDomain:"myowndrawer-98874.firebaseapp.com",projectId:"myowndrawer-98874",storageBucket:"myowndrawer-98874.appspot.com",messagingSenderId:"278557159432",appId:"1:278557159432:web:ef028ac7dec9f98b35e1bd",measurementId:"G-4ZY2ZWVK8V"});o.a;var u=o.a.auth(),l=o.a.firestore(),j=(o.a.storage(),n(16)),b=n(6),d=n(9),h=n.n(d),O=n(33),m=n(15),p=n(32),x={USER_ID:"user_9Yzjv9HczozAI5LPmsW88",SERVICE_ID:"service_wd4vewg",TEMPLATE_ID:"template_8cqpfld"},f=n(1),_=function(){var e=Object(b.h)(),t=e.id,n=e.questionid,c=Object(a.useState)({}),r=Object(i.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)(""),j=Object(i.a)(u,2),d=j[0],_=j[1],v=Object(a.useState)("\uc775\uba85"),g=Object(i.a)(v,2),w=g[0],y=g[1],N=Object(a.useState)("\uc775\uba85"),S=Object(i.a)(N,2),k=S[0],A=S[1],E=Object(a.useState)(!1),I=Object(i.a)(E,2),q=I[0],C=I[1],D=function(){var e=Object(m.a)(h.a.mark((function e(n){var a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=s.answerArray,c={answerContent:d,instaID:w,nickname:k},e.next=5,l.collection("".concat(t)).doc("".concat(s.question)).update({answerArray:[].concat(Object(O.a)(a),[c])}).then((function(){alert("\uc131\uacf5\uc801\uc73c\ub85c \ub2f5\uc7a5\ud588\uc2b5\ub2c8\ub2e4. \uac10\uc0ac\ud569\ub2c8\ub2e4."),_(""),y("\uc775\uba85"),A("\uc775\uba85"),p.a.sendForm(x.SERVICE_ID,x.TEMPLATE_ID,n.target,x.USER_ID).then((function(e){console.log("Success",e)})).catch((function(e){console.log("Error",e.text)}))})).catch((function(e){alert("\ubb34\uc5b8\uac00 \ubb38\uc81c\uac00 \uc0dd\uacbc\uc2b5\ub2c8\ub2e4. \uc2a4\ud06c\ub9b0\uc0f7\uc744 \ud1b5\ud574 \uc54c\ub824\uc8fc\uc2dc\uba74 \uac10\uc0ac\ud558\uaca0\uc2b5\ub2c8\ub2e4. \uac10\uc0ac\ud569\ub2c8\ub2e4.",e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(e){var t=e.target,n=t.name,a=t.value;"answer"===n?_(a):"instagram"===n?y(a):"nickname"===n&&A(a)},L=function(){var e=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.collection("".concat(t)).where("id","==",n).get().then((function(e){e.forEach((function(e){o(e.data()),C(!0)}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){L()}),[]),Object(f.jsx)("div",{className:"answer__container",children:q?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{className:"answer__title",children:s.question}),Object(f.jsxs)("form",{className:"answer__form",onSubmit:D,children:[Object(f.jsx)("textarea",{className:"answer__content",type:"text",placeholder:"\ub300\ub2f5\uc744 \uc801\uc5b4\uc8fc\uc138\uc694.",name:"answer",onChange:F,value:d,required:!0}),Object(f.jsxs)("div",{className:"answer__input-container",children:[Object(f.jsxs)("div",{className:"answer__nickname-container",children:[Object(f.jsx)("label",{className:"answer__nickname-label",htmlFor:"nickname",children:"\uc774\ub984 : "}),Object(f.jsx)("input",{className:"answer__nickname-input",type:"text",name:"nickname",placeholder:"\uc774\ub984",onChange:F,value:k})]}),Object(f.jsxs)("div",{className:"answer__instagram-container",children:[Object(f.jsx)("label",{className:"answer__instagram-label",htmlFor:"instagram",children:"\uc778\uc2a4\ud0c0\uadf8\ub7a8 ID : "}),Object(f.jsx)("input",{className:"answer__instagram-input",type:"text",name:"instagram",placeholder:"\uc778\uc2a4\ud0c0 \uc544\uc774\ub514",onChange:F,value:w})]}),Object(f.jsx)("input",{className:"answer__submit",type:"submit",value:"\ub2f5\uc7a5 \ud558\uae30"})]})]})]}):"Loading..."})},v=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],l=s[1],j=Object(a.useState)(!0),d=Object(i.a)(j,2),O=d[0],p=d[1],x=Object(a.useState)(""),_=Object(i.a)(x,2),v=_[0],g=_[1],w=Object(b.g)(),y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&l(a)},N=function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!O){e.next=7;break}return e.next=5,u.createUserWithEmailAndPassword(n,o);case 5:e.next=9;break;case 7:return e.next=9,u.signInWithEmailAndPassword(n,o);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),"There is no user record corresponding to this identifier. The user may have been deleted."===e.t0.message?g("\uc785\ub825\ud558\uc2e0 \uc544\uc774\ub514\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."):g(e.t0.message);case 14:w.push("/");case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"auth-form__container",children:Object(f.jsxs)("form",{className:"auth-form",onSubmit:N,children:[Object(f.jsx)("input",{className:"input auth__input",name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:y}),Object(f.jsx)("input",{className:"input auth__input",name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:y}),Object(f.jsx)("input",{className:"btn",type:"submit",value:O?"Create Account":"Log In"}),Object(f.jsx)("span",{className:"error",children:v}),Object(f.jsx)("span",{className:"change-btn",onClick:function(){return p((function(e){return!e}))},children:O?"Log In":"Create Account"})]})})})},g=function(e){var t=e.userAuth,n=Object(b.h)(),c=n.id,r=n.questionid,s=Object(a.useState)(""),o=Object(i.a)(s,2),u=o[0],j=o[1],d=Object(a.useState)(""),O=Object(i.a)(d,2),p=(O[0],O[1]),x=Object(a.useState)(""),_=Object(i.a)(x,2),v=_[0],g=_[1],w=Object(a.useState)(""),y=Object(i.a)(w,2),N=y[0],S=y[1],k=Object(a.useState)(""),A=Object(i.a)(k,2),E=A[0],I=A[1],q=Object(a.useState)(!1),C=Object(i.a)(q,2),D=C[0],F=C[1],L=function(){var e=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.collection("".concat(c)).where("id","==",r).get().then((function(e){e.forEach((function(e){j(e.data()),p(e.data().answerArray),F(!0)}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){c!==t&&b.a,L()}),[]),Object(f.jsx)("div",{style:{backgroundColor:v},className:"answer__container",children:D?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{style:{fontStyle:E,fontFamily:N},className:"answer__title",children:u.question}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l.collection("".concat(c)).doc("".concat(u.question)).update({style:{font:N,fontStyle:E,backgroundColor:v}}),alert("\uc131\uacf5\uc801\uc73c\ub85c \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")},className:"answer__form",children:[Object(f.jsx)("textarea",{className:"answer__content",type:"text",placeholder:"\ub300\ub2f5\uc744 \uc801\uc5b4\uc8fc\uc138\uc694.",name:"answer"}),Object(f.jsxs)("div",{className:"answer__input-container",children:[Object(f.jsxs)("div",{className:"answer__nickname-container",children:[Object(f.jsx)("label",{className:"answer__nickname-label",htmlFor:"nickname",children:"\uc9c8\ubb38 \ud3f0\ud2b8 : "}),Object(f.jsxs)("select",{onChange:function(e){var t=e.target.value;S(t)},value:N,children:[Object(f.jsx)("option",{value:"sans-serif",children:"sans-serif"}),Object(f.jsx)("option",{value:"serif",children:"serif"})]}),Object(f.jsxs)("select",{onChange:function(e){var t=e.target.value;I(t)},value:E,children:[Object(f.jsx)("option",{value:"normal",children:"normal"}),Object(f.jsx)("option",{value:"italic",children:"italic"})]})]}),Object(f.jsxs)("div",{className:"answer__instagram-container",children:[Object(f.jsx)("label",{className:"answer__instagram-label",htmlFor:"instagram",children:"\ubc30\uacbd \uc0c9\uc0c1 : "}),Object(f.jsx)("input",{onChange:function(e){var t=e.target.value;g(t)},type:"color",value:v})]}),Object(f.jsx)("input",{className:"answer__submit",type:"submit",value:"\ub2f5\uc7a5 \ud558\uae30"})]})]})]}):"Loading..."})},w=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{children:"Home"}),Object(f.jsx)(j.b,{to:"/auth",children:"\ub85c\uadf8\uc778"})]})},y=n(34),N=n(53),S=function(e){var t,n=e.userAuth,c=Object(b.g)(),r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],d=s[1],O=Object(a.useState)([]),p=Object(i.a)(O,2),x=p[0],_=p[1],v=Object(a.useState)(""),g=Object(i.a)(v,2),w=g[0],S=g[1],k=Object(a.useState)(!1),A=Object(i.a)(k,2),E=A[0],I=A[1],q=Object(b.h)().id,C=function(){var e=Object(m.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={question:o,id:Object(N.a)(),answerArray:[],registered_dttm:Date.now(),updated_dttm:0},e.next=4,l.collection("".concat(n)).doc("".concat(o)).set(a);case 4:S(a),d("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){return function(){w.answerArray.splice(e,1),l.collection("".concat(n)).doc("".concat(w.question)).update({answerArray:w.answerArray})}},F=function(){var e=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.collection("".concat(n)).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));_(t)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.collection("".concat(n)).get();case 2:(t=e.sent).docs[0]&&S(t.docs[0].data()),I(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){q!==n?c.push("/auth"):(L(),F())}),[n]),Object(f.jsx)("div",{className:"profile__container",children:E?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{className:"profile__title",children:"\ud504\ub85c\ud544(\uc9c8\ubb38 \ub9cc\ub4e4\uae30)"}),Object(f.jsxs)("form",{onSubmit:C,className:"question__form",children:[Object(f.jsx)("input",{className:"question__text",type:"text",placeholder:"\uc9c8\ubb38",onChange:function(e){var t=e.target.value;d(t)},value:o}),Object(f.jsx)("input",{className:"question__submit",type:"submit",value:"\uc9c8\ubb38 \ub9cc\ub4e4\uae30"})]}),Object(f.jsxs)("div",{className:"profile__answer-container",children:[x?0!==x.length&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h5",{children:"\uc9c8\ubb38 \uad00\ub9ac & \ub2f5\ubcc0 \ubcf4\uae30"}),Object(f.jsx)("select",{onChange:function(e){var t=e.target.value;x.map((function(e){return e.question===t&&S(e)}))},value:w.question,children:x.map((function(e,t){return Object(f.jsx)("option",{children:e.question},t)}))}),Object(f.jsx)("br",{}),Object(f.jsx)(j.b,{className:"answer-page__link",to:"/".concat(n,"/").concat(w.id,"/custom"),children:"\ub2f5\ubcc0 \ud398\uc774\uc9c0 \ucee4\uc2a4\ud140 + \ub2f5\ubcc0 \ubcf4\uae30"}),Object(f.jsxs)(j.b,{className:"answer-page__link",to:"/".concat(n,"/").concat(w.id),children:[w.question," \ub2f5\ubcc0 \ub9c1\ud06c"]})]}):null,Object(f.jsxs)("div",{children:[Object(f.jsx)("br",{}),w.answerArray?0!==w.answerArray.length&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("table",{className:"answer__table-container",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"\uae00\uc4f4\uc774"}),Object(f.jsx)("th",{children:"\ub0b4\uc6a9"}),Object(f.jsx)("th",{children:"\uc778\uc2a4\ud0c0 \uc544\uc774\ub514"}),Object(f.jsx)("th",{children:"\uc0ad\uc81c"})]})}),Object(f.jsx)("tbody",{className:"answer__table-body",children:w.answerArray.map((function(e,t){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.nickname}),Object(f.jsx)("td",{children:e.answerContent}),Object(f.jsx)("td",{children:e.instaID}),Object(f.jsx)("td",{children:Object(f.jsx)("button",{onClick:D(t),children:"X"})})]})})}))})]}),Object(f.jsx)("br",{})]}):null,Object(f.jsxs)("div",{className:"profile__button-container",children:[x?0!==x.length&&Object(f.jsx)("button",{onClick:(t=w,function(){l.collection("".concat(n)).doc("".concat(t.question)).delete(),x&&S(x[0])}),children:"\uc9c8\ubb38 \uc0ad\uc81c\ud558\uae30"}):null,Object(f.jsx)("button",{onClick:function(e){e.preventDefault(),u.signOut(),c.push("/")},children:"\ub85c\uadf8\uc544\uc6c3"})]})]})]})]}):"Loading..."})},k=function(e){var t=e.isLoggedIn,n=e.userAuth;return Object(a.useEffect)((function(){console.log(t)})),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(j.a,{children:Object(f.jsxs)(b.d,{children:[Object(f.jsx)(b.b,{exact:!0,path:"/",children:t?Object(f.jsx)(b.a,{to:{pathname:"/".concat(n),stete:{userAuth:n}}}):Object(f.jsx)(w,{})}),Object(f.jsx)(b.b,{exact:!0,path:"/auth",children:t?Object(f.jsx)(b.a,{to:{pathname:"/".concat(n),stete:{userAuth:n}}}):Object(f.jsx)(v,{})}),Object(f.jsx)(b.b,{exact:!0,path:"/logout",children:Object(f.jsx)(w,{})}),Object(f.jsx)(b.b,{exact:!0,path:"/:id",children:Object(f.jsx)(S,{userAuth:n})}),Object(f.jsx)(b.b,{exact:!0,path:"/:id/:questionid",children:Object(f.jsx)(_,{userAuth:n})}),Object(f.jsx)(b.b,{exact:!0,path:"/:id/:questionid/custom",children:Object(f.jsx)(g,{userAuth:n})})]})})})},A=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],l=s[1],j=Object(a.useState)(!1),b=Object(i.a)(j,2),d=b[0],h=b[1];return Object(a.useEffect)((function(){u.onAuthStateChanged((function(e){e?(l(e.uid),h(!0)):(l(""),h(!1)),c(!0)}))}),[]),Object(f.jsx)(f.Fragment,{children:n?Object(f.jsx)(k,{isLoggedIn:d,userAuth:o}):"Loading..."})};n(48);s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(A,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.f9f4e0db.chunk.js.map