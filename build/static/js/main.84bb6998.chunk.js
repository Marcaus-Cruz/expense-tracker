(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(11),a=n.n(c),s=(n(17),n(6)),i=n(8),l=n(2),r=n(4),o=n.n(r),u=n(1),j=n(0),b=function(e){var t=Object(u.useState)(""),n=Object(l.a)(t,2),c=n[0],a=n[1],s=Object(u.useState)(""),i=Object(l.a)(s,2),r=i[0],o=i[1],b=function(t){t.preventDefault();var n=t.target.value;if("in"===n)console.log("Signing in"),e.onSignIn(c,r);else{if("up"!==n)return void console.log("ERROR SIGNING IN OR UP");console.log("Signing up")}};return Object(j.jsxs)("form",{onSubmit:b,children:[Object(j.jsx)("input",{onChange:function(e){a(e.target.value)},value:c,className:"input",placeholder:"username",type:"text"}),Object(j.jsx)("input",{onChange:function(e){o(e.target.value)},value:r,className:"input",placeholder:"password",type:"password"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{value:"in",onClick:b,type:"button",children:"Login"}),Object(j.jsx)("button",{value:"up",onClick:b,type:"button",children:"Register"})]})]})},d=(n(20),n.p+"static/media/favicon.2f506ebe.ico");var x=function(e){return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)("img",{src:d,alt:"MC logo",style:{width:"100px"}}),Object(j.jsx)("h2",{style:{color:"white",lineHeight:"50px",padding:"0px 20px"},children:"Expense Tracker"})]}),""!==e.username&&Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)("p",{children:e.username})," ",Object(j.jsx)("button",{onClick:e.onSignOut,children:"Sign Out"})]}),""===e.username&&Object(j.jsx)("div",{className:"right",children:Object(j.jsx)(b,{onSignIn:e.onSignIn})})]})};n(21),n(10),n(22);var h=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),c=e.date.getFullYear();return Object(j.jsxs)("div",{className:"expense-date",children:[Object(j.jsx)("div",{className:"expense-date__month",children:t}),Object(j.jsx)("div",{className:"expense-date__year",children:c}),Object(j.jsx)("div",{className:"expense-date__day",children:n})]})};var O=function(e){var t="card "+e.className;return Object(j.jsx)("div",{className:t,children:e.children})};var p=function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)(O,{className:"expense-item",children:[Object(j.jsx)(h,{date:e.date}),Object(j.jsxs)("div",{className:"expense-item__description",children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})},v=(n(23),function(e){return 0===e.items.length?Object(j.jsxs)("h2",{className:"expenses-list__fallback",children:["No expenses found for ",e.year]}):Object(j.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(j.jsx)(p,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),f=(n(24),function(e){return Object(j.jsx)("div",{className:"expenses-filter",children:Object(j.jsxs)("div",{className:"expenses-filter__control",children:[Object(j.jsx)("label",{children:"Filter by year"}),Object(j.jsxs)("select",{value:e.selected,onChange:function(t){e.onGetYear(t.target.value)},children:[Object(j.jsx)("option",{value:"2020",children:"2020"}),Object(j.jsx)("option",{value:"2021",children:"2021"}),Object(j.jsx)("option",{value:"2022",children:"2022"}),Object(j.jsx)("option",{value:"2023",children:"2023"}),Object(j.jsx)("option",{value:"2024",children:"2024"}),Object(j.jsx)("option",{value:"2025",children:"2025"}),Object(j.jsx)("option",{value:"2026",children:"2026"}),Object(j.jsx)("option",{value:"2027",children:"2027"}),Object(j.jsx)("option",{value:"2028",children:"2028"}),Object(j.jsx)("option",{value:"2029",children:"2029"}),Object(j.jsx)("option",{value:"2030",children:"2030"})]})]})})}),m=n(12),g=(n(25),n(26),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(j.jsxs)("div",{className:"chart-bar",children:[Object(j.jsx)("div",{className:"chart-bar__inner",children:Object(j.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(j.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),N=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(s.a)(t));return Object(j.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(j.jsx)(g,{value:e.value,maxValue:n,label:e.label},e.label)}))})},S=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],c=Object(m.a)(e.expenses);try{for(c.s();!(t=c.n()).done;){var a=t.value;n[a.date.getMonth()].value+=a.amount}}catch(s){c.e(s)}finally{c.f()}return Object(j.jsx)(N,{dataPoints:n})};n(27);var y=function(e){var t=Object(u.useState)("2022"),n=Object(l.a)(t,2),c=n[0],a=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(j.jsxs)(O,{className:"expenses",children:[Object(j.jsx)(f,{selected:c,onGetYear:function(e){a(e)}}),Object(j.jsx)(S,{expenses:s}),Object(j.jsx)(v,{items:s,year:c})]})},w=n(9),_=(n(28),function(e){var t=Object(u.useState)(""),n=Object(l.a)(t,2),c=n[0],a=n[1],s=Object(u.useState)(""),i=Object(l.a)(s,2),r=i[0],o=i[1],b=Object(u.useState)(""),d=Object(l.a)(b,2),x=d[0],h=d[1];return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:+r,date:new Date(x)};if(""===n.title.trim())return alert("Must enter a title for this expense"),!1;e.onStoreExpense(n),a(""),o(""),h("")},children:[Object(j.jsx)("div",{className:"form-title",children:Object(j.jsx)("h2",{children:"New Expense"})}),Object(j.jsxs)("div",{className:"new-expense__controls",children:[Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("input",{placeholder:"Expense Name",type:"text",value:c,onChange:function(e){a(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Amount"}),"$"," ",Object(j.jsx)("input",{type:"number",value:r,min:".01",step:".01",placeholder:"0.00",onChange:function(e){o(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Date"}),Object(j.jsx)("input",{type:"date",value:x,min:"2020-01-01",max:"2030-12-31",onChange:function(e){h(e.target.value)}})]})]}),Object(j.jsxs)("div",{className:"new-expense__actions",children:[Object(j.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(j.jsx)("button",{type:"submit",children:"Add"})]})]})}),k=(n(29),function(e){var t=Object(u.useState)(!1),n=Object(l.a)(t,2),c=n[0],a=n[1],s=Object(u.useState)(!1),i=Object(l.a)(s,2),r=i[0],o=i[1];return Object(j.jsxs)("div",{className:"new-expense",children:[!c&&!r&&Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){o(!0)},children:"Remove Expense"})," ",Object(j.jsx)("button",{onClick:function(){a(!0)},children:"Add Expense"})]}),c&&!r&&Object(j.jsx)(_,{onStoreExpense:function(t){var n=Object(w.a)(Object(w.a)({},t),{},{id:Math.random.toString()});e.onGetExpense(n),a(!1)},onCancel:function(){a(!1)}}),r&&Object(j.jsxs)("div",{children:[" ",Object(j.jsx)("h3",{children:"Which expense would you like to remove?"})," ",Object(j.jsx)("button",{onClick:function(){o(!1)},children:"Cancel"})," "]})]})});var C=function(){var e=Object(u.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(u.useState)(!1),r=Object(l.a)(a,2),b=r[0],d=r[1],h=Object(u.useState)(!1),O=Object(l.a)(h,2),p=O[0],v=O[1],f=Object(u.useState)(),m=Object(l.a)(f,2),g=m[0],N=m[1],S=Object(u.useState)(""),w=Object(l.a)(S,2),_=w[0],C=w[1],E=Object(u.useState)(""),M=Object(l.a)(E,2),I=M[0],A=M[1];return Object(u.useEffect)((function(){var e=function(){var e=Object(i.a)(o.a.mark((function e(){var t,n,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,fetch("https://exp-track-bdba3-default-rtdb.firebaseio.com/expenses.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Something went wrong when fetching expenses!");case 6:return e.next=8,t.json();case 8:for(s in n=e.sent,a=[],n[g])console.log(s),a.push({id:n[g][s],title:n[g][s].name,amount:n[g][s].price,date:new Date(n[g][s].date.year,n[g][s].date.month,n[g][s].date.day)});c(a),d(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then().catch((function(e){d(!1),v(e.message)}))}),[g,_]),b?Object(j.jsx)("section",{children:Object(j.jsx)("p",{children:"Loading..."})}):p?Object(j.jsx)("section",{children:Object(j.jsx)("p",{children:p})}):Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{username:_,onSignOut:function(){C(""),N(),A("")},onSignIn:function(e,t){console.log(e+" "+t),C(e),A(t),console.log(_+" "+I);var n=function(){var n=Object(i.a)(o.a.mark((function n(){var c,a,s;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),n.next=3,fetch("https://exp-track-bdba3-default-rtdb.firebaseio.com/users.json");case 3:if((c=n.sent).ok){n.next=6;break}throw new Error("Something went wrong when fetching users!");case 6:return n.next=8,c.json();case 8:a=n.sent,n.t0=o.a.keys(a);case 10:if((n.t1=n.t0()).done){n.next=21;break}if(s=n.t1.value,console.log(a[s].user+" "+a[s].pass),a[s].user!==e||a[s].pass!==t){n.next=18;break}return N(s),n.abrupt("return");case 18:console.log("Sign in Failed");case 19:n.next=10;break;case 21:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n().then().catch((function(e){d(!1),v(e.message)}))}}),Object(j.jsx)(k,{onGetExpense:function(e){c((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(j.jsx)(y,{items:n}),""===_&&Object(j.jsx)("p",{style:{color:"black",textAlign:"center"},children:"Please sign in to find expenses"})]})};a.a.render(Object(j.jsx)(C,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.84bb6998.chunk.js.map