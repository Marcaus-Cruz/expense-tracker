(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),s=(n(11),n(2)),i=n(1),l=(n(12),n(5),n(13),n(0));var d=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(l.jsxs)("div",{className:"expense-date",children:[Object(l.jsx)("div",{className:"expense-date__month",children:t}),Object(l.jsx)("div",{className:"expense-date__year",children:a}),Object(l.jsx)("div",{className:"expense-date__day",children:n})]})};var r=function(e){var t="card "+e.className;return Object(l.jsx)("div",{className:t,children:e.children})};var j=function(e){var t=Object(i.useState)(e.title),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(l.jsxs)(r,{className:"expense-item",children:[Object(l.jsx)(d,{date:e.date}),Object(l.jsxs)("div",{className:"expense-item__description",children:[Object(l.jsx)("h2",{children:a}),Object(l.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]}),Object(l.jsx)("button",{onClick:function(){c("Updated!")},children:"edit"})]})};n(15);var o=function(e){return Object(l.jsxs)(r,{className:"expenses",children:[Object(l.jsx)(j,{title:e.items[0].title,amount:e.items[0].amount,date:e.items[0].date}),Object(l.jsx)(j,{title:e.items[1].title,amount:e.items[1].amount,date:e.items[1].date}),Object(l.jsx)(j,{title:e.items[2].title,amount:e.items[2].amount,date:e.items[2].date}),Object(l.jsx)(j,{title:e.items[3].title,amount:e.items[3].amount,date:e.items[3].date})]})},u=n(4),m=(n(16),function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],d=Object(i.useState)(""),r=Object(s.a)(d,2),j=r[0],o=r[1],u=Object(i.useState)(""),m=Object(s.a)(u,2),x=m[0],b=m[1];return Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:j,date:new Date(x)};e.onStoreExpense(n),c(""),o(""),b("")},children:[Object(l.jsx)("div",{className:"form-title",children:Object(l.jsx)("h2",{children:"New Expense"})}),Object(l.jsxs)("div",{className:"new-expense__controls",children:[Object(l.jsxs)("div",{className:"new-expense__control",children:[Object(l.jsx)("label",{children:"Title"}),Object(l.jsx)("input",{placeholder:"Expense Name",type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(l.jsxs)("div",{className:"new-expense__control",children:[Object(l.jsx)("label",{children:"Amount"}),"$"," ",Object(l.jsx)("input",{type:"number",value:j,min:".01",step:".01",placeholder:"0.00",onChange:function(e){o(e.target.value)}})]}),Object(l.jsxs)("div",{className:"new-expense__control",children:[Object(l.jsx)("label",{children:"Date"}),Object(l.jsx)("input",{type:"date",value:x,min:"2020-01-01",max:"2030-12-31",onChange:function(e){b(e.target.value)}})]})]}),Object(l.jsx)("div",{className:"new-expense__actions",children:Object(l.jsx)("button",{type:"submit",children:"Add"})})]})}),x=(n(17),function(e){return Object(l.jsx)("div",{className:"new-expense",children:Object(l.jsx)(m,{onStoreExpense:function(t){var n=Object(u.a)(Object(u.a)({},t),{},{id:Math.random.toString()});e.onGetExpense(n)}})})});var b=function(){var e=[{id:"e1",title:"React Udemy Course",amount:94.12,date:new Date(2022,2,1)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Expense Tracker!"}),Object(l.jsx)(x,{onGetExpense:function(e){console.log(e)}}),Object(l.jsx)(o,{items:e})]})};c.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.4ac6e3ea.chunk.js.map