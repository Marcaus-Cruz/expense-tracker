(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{20:function(e,t,n){},29:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(22),c=n.n(a),s=(n(29),n(16)),r=n(14),i=n(9),l=n(11),o=n.n(l),u=n(8),j=n(2),b=function(e){var t=Object(u.useState)(""),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(u.useState)(""),r=Object(i.a)(s,2),l=r[0],o=r[1],b=function(t){t.preventDefault();var n=t.target.value;if("in"===n)console.log("Signing in"),e.onSignIn(a,l);else{if("up"!==n)return void console.log("ERROR SIGNING IN OR UP");console.log("Signing up"),e.onSignUp(a,l)}};return Object(j.jsxs)("form",{onSubmit:b,children:[Object(j.jsx)("input",{onChange:function(e){c(e.target.value)},value:a,className:"input",placeholder:"username",type:"text"}),Object(j.jsx)("input",{onChange:function(e){o(e.target.value)},value:l,className:"input",placeholder:"password",type:"password"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{value:"in",onClick:b,type:"button",children:"Login"}),Object(j.jsx)("button",{value:"up",onClick:b,type:"button",children:"Register"})]})]})},d=(n(32),n.p+"static/media/favicon.2f506ebe.ico");var x=function(e){return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)("img",{src:d,alt:"MC logo",style:{width:"100px"}}),Object(j.jsx)("h2",{style:{color:"white",lineHeight:"50px",padding:"0px 20px"},children:"Expense Tracker"})]}),""!==e.username&&Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)("p",{children:e.username})," ",Object(j.jsx)("button",{onClick:e.onSignOut,children:"Sign Out"})]}),""===e.username&&Object(j.jsx)("div",{className:"right",children:Object(j.jsx)(b,{onSignIn:e.onSignIn,onSignUp:e.onSignUp})})]})};n(33),n(20),n(34);var h=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(j.jsxs)("div",{className:"expense-date",children:[Object(j.jsx)("div",{className:"expense-date__month",children:t}),Object(j.jsx)("div",{className:"expense-date__year",children:a}),Object(j.jsx)("div",{className:"expense-date__day",children:n})]})};var p=function(e){var t="card "+e.className;return Object(j.jsx)("div",{className:t,children:e.children})};var f=function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)(p,{className:"expense-item",children:[Object(j.jsx)(h,{date:e.date}),Object(j.jsxs)("div",{className:"expense-item__description",children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})},O=(n(35),function(e){return 0===e.items.length?Object(j.jsxs)("h2",{className:"expenses-list__fallback",children:["No expenses found for ",e.year]}):Object(j.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(j.jsx)(f,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),v=(n(36),function(e){return Object(j.jsx)("div",{className:"expenses-filter",children:Object(j.jsxs)("div",{className:"expenses-filter__control",children:[Object(j.jsx)("label",{children:"Filter by year"}),Object(j.jsxs)("select",{value:e.selected,onChange:function(t){e.onGetYear(t.target.value)},children:[Object(j.jsx)("option",{value:"2020",children:"2020"}),Object(j.jsx)("option",{value:"2021",children:"2021"}),Object(j.jsx)("option",{value:"2022",children:"2022"}),Object(j.jsx)("option",{value:"2023",children:"2023"}),Object(j.jsx)("option",{value:"2024",children:"2024"}),Object(j.jsx)("option",{value:"2025",children:"2025"}),Object(j.jsx)("option",{value:"2026",children:"2026"}),Object(j.jsx)("option",{value:"2027",children:"2027"}),Object(j.jsx)("option",{value:"2028",children:"2028"}),Object(j.jsx)("option",{value:"2029",children:"2029"}),Object(j.jsx)("option",{value:"2030",children:"2030"})]})]})})}),m=n(23),g=(n(37),n(38),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(j.jsxs)("div",{className:"chart-bar",children:[Object(j.jsx)("div",{className:"chart-bar__inner",children:Object(j.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(j.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),S=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(s.a)(t));return Object(j.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(j.jsx)(g,{value:e.value,maxValue:n,label:e.label},e.label)}))})},w=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(m.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(j.jsx)(S,{dataPoints:n})};n(39);var k=function(e){var t=Object(u.useState)("2022"),n=Object(i.a)(t,2),a=n[0],c=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(j.jsxs)(p,{className:"expenses",children:[Object(j.jsx)(v,{selected:a,onGetYear:function(e){c(e)}}),Object(j.jsx)(w,{expenses:s}),Object(j.jsx)(O,{items:s,year:a})]})},y=(n(40),function(e){var t=Object(u.useState)(""),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(u.useState)(""),r=Object(i.a)(s,2),l=r[0],o=r[1],b=Object(u.useState)(""),d=Object(i.a)(b,2),x=d[0],h=d[1];return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+l,date:new Date(x)};if(""===n.title.trim())return alert("Must enter a title for this expense"),!1;e.onStoreExpense(n),c(""),o(""),h("")},children:[Object(j.jsx)("div",{className:"form-title",children:Object(j.jsx)("h2",{children:"New Expense"})}),Object(j.jsxs)("div",{className:"new-expense__controls",children:[Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("input",{placeholder:"Expense Name",type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Amount"}),"$"," ",Object(j.jsx)("input",{type:"number",value:l,min:".01",step:".01",placeholder:"0.00",onChange:function(e){o(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Date"}),Object(j.jsx)("input",{type:"date",value:x,min:"2020-01-01",max:"2030-12-31",onChange:function(e){h(e.target.value)}})]})]}),Object(j.jsxs)("div",{className:"new-expense__actions",children:[Object(j.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(j.jsx)("button",{type:"submit",children:"Add"})]})]})}),N=(n(41),n(19));N.a.initializeApp({apiKey:"AIzaSyB7602g76FM5d_ajJm-h8lz_xmST3B0zVM",authDomain:"exp-track-bdba3.firebaseapp.com",databaseURL:"https://exp-track-bdba3-default-rtdb.firebaseio.com",projectId:"exp-track-bdba3",storageBucket:"exp-track-bdba3.appspot.com",messagingSenderId:"337970307805",appId:"1:337970307805:web:4289cd54f487468601b134"});var _=N.a.database(),C=function(e){var t=Object(u.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(u.useState)(!1),l=Object(i.a)(s,2),b=l[0],d=l[1];return Object(j.jsxs)("div",{className:"new-expense",children:[!a&&!b&&Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){d(!0)},children:"Remove Expense"})," ",Object(j.jsx)("button",{onClick:function(){c(!0)},children:"Add Expense"})]}),a&&!b&&Object(j.jsx)(y,{onStoreExpense:function(t){var n=function(){var e=Object(r.a)(o.a.mark((function e(t,n){var a,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.next=3,fetch("https://exp-track-bdba3-default-rtdb.firebaseio.com/expenses.json");case 3:if((a=e.sent).ok){e.next=6;break}throw new Error("Something went wrong when fetching expenses!");case 6:return e.next=8,a.json();case 8:c=e.sent,s=Object.keys(c[n]).length,console.log(c[n]),console.log(s),_.ref("expenses/".concat(n,"/").concat(s)).set({name:t.title,price:t.amount}).catch(alert),_.ref("expenses/".concat(n,"/").concat(s,"/date")).set({month:t.date.toLocaleString("en-US",{month:"long"}),day:t.date.toLocaleString("en-US",{day:"2-digit"}),year:t.date.getFullYear()}).catch(alert);case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();n(t,e.userID).then().catch((function(e){console.log("Something went wrong")})),c(!1)},onCancel:function(){c(!1)}}),b&&Object(j.jsxs)("div",{children:[" ",Object(j.jsx)("h3",{children:"Which expense would you like to remove?"})," ",Object(j.jsx)("button",{onClick:function(){d(!1)},children:"Cancel"})," "]})]})};var E=function(){var e=Object(u.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(u.useState)(!1),l=Object(i.a)(c,2),b=l[0],d=l[1],h=Object(u.useState)(!1),p=Object(i.a)(h,2),f=p[0],O=p[1],v=Object(u.useState)(),m=Object(i.a)(v,2),g=m[0],S=m[1],w=Object(u.useState)(""),y=Object(i.a)(w,2),N=y[0],E=y[1],I=Object(u.useState)(""),M=Object(i.a)(I,2),U=(M[0],M[1]);return Object(u.useEffect)((function(){var e=function(){var e=Object(r.a)(o.a.mark((function e(){var t,n,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,fetch("https://exp-track-bdba3-default-rtdb.firebaseio.com/expenses.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Something went wrong when fetching expenses!");case 6:return e.next=8,t.json();case 8:for(s in n=e.sent,c=[],n[g])console.log(s),c.push({id:n[g][s],title:n[g][s].name,amount:n[g][s].price,date:new Date(n[g][s].date.year,n[g][s].date.month,n[g][s].date.day)});a(c),d(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then().catch((function(e){d(!1),O(e.message)}))}),[g,N]),b?Object(j.jsx)("section",{children:Object(j.jsx)("p",{children:"Loading..."})}):f?Object(j.jsx)("section",{children:Object(j.jsx)("p",{children:f})}):Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{username:N,onSignOut:function(){S(),E(""),U("")},onSignIn:function(e,t){if(console.log(e+" "+t),e=e.trim(),t=t.trim(),""!==e&&""!==t){E(e),U(t);var n=function(){var n=Object(r.a)(o.a.mark((function n(){var a,c,s;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),n.next=3,fetch("https://exp-track-bdba3-default-rtdb.firebaseio.com/users.json");case 3:if((a=n.sent).ok){n.next=6;break}throw new Error("Something went wrong when fetching users!");case 6:return n.next=8,a.json();case 8:c=n.sent,n.t0=o.a.keys(c);case 10:if((n.t1=n.t0()).done){n.next=18;break}if(s=n.t1.value,console.log(c[s].user+" "+c[s].pass),c[s].user!==e||c[s].pass!==t){n.next=16;break}return S(s),n.abrupt("return");case 16:n.next=10;break;case 18:alert("Invalid log in, please try again"),E(""),U(""),console.log("Sign in Failed");case 22:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n().then().catch((function(e){d(!1),O(e.message)}))}else alert("Please make sure you enter a username and password")},onSignUp:function(e,t){if(console.log(e+" "+t),e=e.trim(),t=t.trim(),""!==e&&""!==t){E(e),U(t);var n=function(e,t,n){console.log(n),_.ref("users/".concat(n)).set({user:e,pass:t}).catch(alert)},a=function(){var a=Object(r.a)(o.a.mark((function a(){var c,s,r,i;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("in fetch users"),d(!0),a.next=4,fetch("https://exp-track-bdba3-default-rtdb.firebaseio.com/users.json");case 4:if((c=a.sent).ok){a.next=7;break}throw new Error("Something went wrong when fetching users!");case 7:return a.next=9,c.json();case 9:s=a.sent,a.t0=o.a.keys(s);case 11:if((a.t1=a.t0()).done){a.next=21;break}if(r=a.t1.value,console.log(s[r].user+" "+s[r].pass),s[r].user!==e||s[r].pass!==t){a.next=19;break}return E(""),U(""),alert("Try signing in, instead."),a.abrupt("return");case 19:a.next=11;break;case 21:i=s.length,S(i),n(e,t,i);case 24:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();a().then().catch((function(e){d(!1),O(e.message)}))}else alert("Please make sure you enter a username and password")}}),Object(j.jsx)(C,{userID:g,onGetExpense:function(e){a((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(j.jsx)(k,{items:n}),""===N&&Object(j.jsx)("p",{style:{color:"black",textAlign:"center"},children:"Please sign in to find expenses"})]})};c.a.render(Object(j.jsx)(E,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.88a00ff9.chunk.js.map