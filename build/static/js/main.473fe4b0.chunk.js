(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{107:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(20),c=n.n(l),u=n(5),o=n(3),i=n(4),m=n(7),s=(n(107),n(21)),f=n.n(s);function b(){var e=Object(o.a)(["",""]);return b=function(){return e},e}function E(){var e=Object(o.a)(["animation: 2s "," "]);return E=function(){return e},e}function d(){var e=Object(o.a)(["",""]);return d=function(){return e},e}function p(){var e=Object(o.a)(["animation: 2s "," "]);return p=function(){return e},e}function v(){var e=Object(o.a)(["",""]);return v=function(){return e},e}function h(){var e=Object(o.a)(["animation: 2s "," "]);return h=function(){return e},e}var g=i.a.div(h(),Object(i.b)(v(),m.fadeInDownBig)),j=i.a.div(p(),Object(i.b)(d(),m.fadeInLeft)),y=i.a.div(E(),Object(i.b)(b(),m.fadeInRight));var O=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)([]),o=Object(u.a)(c,2),i=o[0],m=o[1],s=Object(a.useState)(!1),b=Object(u.a)(s,2),E=b[0],d=b[1],p=Object(a.useState)(!1),v=Object(u.a)(p,2),h=v[0],O=v[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"flex",style:{marginTop:50}},r.a.createElement(g,null,r.a.createElement("h1",null,"Welcome!"))),r.a.createElement("div",{className:"flex"},r.a.createElement("form",{className:"form-group ",noValidate:!0,onSubmit:function(e){O(!0),d(!1),m([]),e.preventDefault(),console.log(n),function(e,t){console.log("n"+e);var n={num:e};f.a.post("/routes/api/getData",n).then((function(e){t(e.data)}))}(n,(function(e){m([].concat(e)),O(!1)}))},style:{width:"80%"}},r.a.createElement("div",{className:"flex up"}," ",r.a.createElement(j,null,r.a.createElement("input",{style:{marginTop:10,marginRight:10},type:"Number",onChange:function(e){var t=e.target.value;t=parseInt(t),l(t)},placeholder:"Enter N value",name:"nVal"})),r.a.createElement(y,null," ",r.a.createElement("input",{type:"submit",value:"Get",className:"btn btn-lg btn-success"})),"  "),r.a.createElement("div",{className:"flex"}," ",E?r.a.createElement("small",{style:{color:"red"}},"Check the range of number you entered!"):null," ",h?r.a.createElement("h6",null,"Loading...."):null," "))),0!==i.length?r.a.createElement("div",null,r.a.createElement("div",{className:"flex"},r.a.createElement("table",{className:"table",style:{margin:30}},r.a.createElement("tr",null,r.a.createElement("th",null,"Word"),r.a.createElement("th",null,"Freqency")),i.map((function(e){return 0===e.freq?(m([]),d(!0),null):r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.freq))})))),r.a.createElement("h4",{className:"flex"},"Liked my work? Then do visit my website to know me more...",r.a.createElement("br",null)," ",r.a.createElement("a",{href:"https://atreyarao.github.io/Atreya/",rel:"noopener noreferrer",target:"_blank",className:"btn btn-primary"},"Visit")," ")):null)};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))},25:function(e,t,n){e.exports=n(125)}},[[25,1,2]]]);
//# sourceMappingURL=main.473fe4b0.chunk.js.map