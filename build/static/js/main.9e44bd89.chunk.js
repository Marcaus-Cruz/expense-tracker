(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(9),a=n.n(c),l=(n(15),n(5)),s=n(2),i=n(1),r=(n(16),n(0));var j=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h2",{children:"Expense Tracker!"}),Object(r.jsxs)("div",{className:"right",children:[Object(r.jsx)("button",{children:"Login"}),Object(r.jsx)("button",{children:"Register"})]})]})};n(18),n(8),n(19);var o=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),c=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__year",children:c}),Object(r.jsx)("div",{className:"expense-date__day",children:n})]})};var u=function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})};var d=function(e){return Object(r.jsx)("li",{children:Object(r.jsxs)(u,{className:"expense-item",children:[Object(r.jsx)(o,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})},b=(n(20),function(e){return 0===e.items.length?Object(r.jsxs)("h2",{className:"expenses-list__fallback",children:["No expenses found for ",e.year]}):Object(r.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(r.jsx)(d,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),x=(n(21),function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{value:e.selected,onChange:function(t){e.onGetYear(t.target.value)},children:[Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2023",children:"2023"}),Object(r.jsx)("option",{value:"2024",children:"2024"}),Object(r.jsx)("option",{value:"2025",children:"2025"}),Object(r.jsx)("option",{value:"2026",children:"2026"}),Object(r.jsx)("option",{value:"2027",children:"2027"}),Object(r.jsx)("option",{value:"2028",children:"2028"}),Object(r.jsx)("option",{value:"2029",children:"2029"}),Object(r.jsx)("option",{value:"2030",children:"2030"})]})]})})}),h=n(10),O=(n(22),n(23),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),v=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(O,{value:e.value,maxValue:n,label:e.label},e.label)}))})},m=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],c=Object(h.a)(e.expenses);try{for(c.s();!(t=c.n()).done;){var a=t.value;n[a.date.getMonth()].value+=a.amount}}catch(l){c.e(l)}finally{c.f()}return Object(r.jsx)(v,{dataPoints:n})};n(24);var p=function(e){var t=Object(i.useState)("2022"),n=Object(s.a)(t,2),c=n[0],a=n[1],l=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(r.jsxs)(u,{className:"expenses",children:[Object(r.jsx)(x,{selected:c,onGetYear:function(e){a(e)}}),Object(r.jsx)(m,{expenses:l}),Object(r.jsx)(b,{items:l,year:c})]})},f=n(7),N=(n(25),function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),c=n[0],a=n[1],l=Object(i.useState)(""),j=Object(s.a)(l,2),o=j[0],u=j[1],d=Object(i.useState)(""),b=Object(s.a)(d,2),x=b[0],h=b[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:+o,date:new Date(x)};if(""===n.title.trim())return alert("Must enter a title for this expense"),!1;e.onStoreExpense(n),a(""),u(""),h("")},children:[Object(r.jsx)("div",{className:"form-title",children:Object(r.jsx)("h2",{children:"New Expense"})}),Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{placeholder:"Expense Name",type:"text",value:c,onChange:function(e){a(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),"$"," ",Object(r.jsx)("input",{type:"number",value:o,min:".01",step:".01",placeholder:"0.00",onChange:function(e){u(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"date",value:x,min:"2020-01-01",max:"2030-12-31",onChange:function(e){h(e.target.value)}})]})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(r.jsx)("button",{type:"submit",children:"Add"})]})]})}),_=(n(26),function(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),c=n[0],a=n[1],l=Object(i.useState)(!1),j=Object(s.a)(l,2),o=j[0],u=j[1];return Object(r.jsxs)("div",{className:"new-expense",children:[!c&&!o&&Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(){u(!0)},children:"Remove Expense"})," ",Object(r.jsx)("button",{onClick:function(){a(!0)},children:"Add Expense"})]}),c&&!o&&Object(r.jsx)(N,{onStoreExpense:function(t){var n=Object(f.a)(Object(f.a)({},t),{},{id:Math.random.toString()});e.onGetExpense(n),a(!1)},onCancel:function(){a(!1)}}),o&&Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("h3",{children:"Which expense would you like to remove?"})," ",Object(r.jsx)("button",{onClick:function(){u(!1)},children:"Cancel"})," "]})]})}),g=[{id:"e1",title:"React Udemy Course",amount:94.12,date:new Date(2022,2,1)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];var y=function(){var e=Object(i.useState)(g),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(j,{}),Object(r.jsx)(_,{onGetExpense:function(e){c((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(r.jsx)(p,{items:n})]})};a.a.render(Object(r.jsx)(y,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.9e44bd89.chunk.js.map