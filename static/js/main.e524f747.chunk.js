(this.webpackJsonpfrontchallenge=this.webpackJsonpfrontchallenge||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(2),c=n.n(a),s=n(15),i=n.n(s),o=n(3),u=n.n(o),l=n(5),h=n(4),f=n(16),j=n.n(f);function p(e){return b.apply(this,arguments)}function b(){return(b=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://rickandmortyapi.com/api/character",n=[],e.prev=2,e.next=5,j.a.get("https://rickandmortyapi.com/api/character");case 5:200!==(r=e.sent).status?(console.log("Error network"),n=[]):n=r.data,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(2),console.error(e.t0,"Error network"),e.abrupt("return",[]);case 13:return e.abrupt("return",n);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}n(41);var d=n(17),m=n.n(d),O=(n(42),function(e){var t=e.searchElement,n=e.selectElement,a=e.querySearch;return Object(r.jsx)(c.a.Fragment,{children:Object(r.jsx)("a",{href:"#",children:Object(r.jsx)("li",{className:"option_list",onClick:function(){return n(t.name)},children:Object(r.jsx)(m.a,{highlightClassName:"search_bold",searchWords:[a],autoEscape:!0,textToHighlight:t.name})})})})}),x=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),i=Object(h.a)(s,2),o=i[0],f=i[1],j=Object(a.useState)("wait"),b=Object(h.a)(j,2),d=b[0],m=b[1],x=Object(a.useState)("fa-search search-icon"),v=Object(h.a)(x,2),g=v[0],w=v[1],k=function(e){if(e.length>0){var t=e.filter((function(e){return e.name.includes(n)}))&&e.filter((function(e){return e.name.toLowerCase().indexOf(n.toLowerCase())>=0}));f(t)}else f([])},y=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w("fa-search search-icon"),e.next=3,p(t);case 3:(n=e.sent).results&&k(n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){c(e),m("loading"),w("fa-spinner"),f([])};return Object(r.jsxs)("div",{className:"search_container",children:[Object(r.jsx)("p",{className:"search_title",children:"Encuentra profesionales de confianza"}),Object(r.jsxs)("div",{className:"search_input_content ".concat(d),htmlFor:"search-input",children:[Object(r.jsx)("input",{"data-testid":"search-input",type:"text",value:n,id:"search-input",placeholder:"Qu\xe9 necesitas...",onChange:function(e){var t=e.target.value;n?(c(t),y(n)):(c(t),f([]))}}),Object(r.jsx)("i",{className:"fa ".concat(g)})]}),Object(r.jsx)("ul",{className:"search_list",children:function(){if(""!==n)return o.map((function(e,t){return Object(r.jsx)(O,{searchElement:e,selectElement:E,querySearch:n},t)}))}()})]})};n(43),n(44);var v=function(){return Object(r.jsx)("div",{className:"habitissimo_challenge",children:Object(r.jsx)(x,{})})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.e524f747.chunk.js.map