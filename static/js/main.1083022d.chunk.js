(this["webpackJsonpmarketcap-of"]=this["webpackJsonpmarketcap-of"]||[]).push([[0],{26:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(19),a=c.n(i),r=(c(26),c(3)),o=c(20),l=c.n(o),j=(c(44),c(21)),u=(c(45),c(5)),d=c(6),b=c(0),m=function(e){var t=e.selectCoin,c=e.setSelectCoin;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("img",{src:t.image,alt:"img-a"}),Object(b.jsx)("h4",{className:"symbol",children:t.symbol.toUpperCase()}),Object(b.jsxs)("h4",{className:"price",children:["$",t.current_price]}),Object(b.jsx)(u.a,{className:"fa-times",icon:d.c,onClick:function(){c({})}})]})},h=(c(51),function(e){var t=e.setSearch,c=e.search,n=e.searchName,i=e.setDisplay,a=e.display,r=e.placeholder,o=e.filteredCoins,l=e.setSelectCoin,u=e.selectCoin,d=e.nr,h=e.setNr,O=e.setKeyPress,p=e.setMouseMove,f=Object(s.useRef)();return Object(s.useEffect)((function(){!a&&Object.keys(u).length&&t("")}),[a]),Object(b.jsxs)("div",{className:"coin-search",children:[Object(b.jsxs)("h1",{className:"coin-text",children:["Select ",Object(b.jsx)("span",{className:"span-"+n,children:n})]}),Object(b.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),o[d]&&(l(o[d]),t(""),i(!1),f.current.blur())},children:[Object(b.jsx)("input",Object(j.a)({className:"coin-input",type:"text",value:c,onChange:function(e){t(e.target.value),i(!0),h(0)},onClick:function(){i(!0)},onKeyDown:function(e){switch(O(!0),p(!1),e.keyCode){case 40:d!==o.length-1&&h(d+1);break;case 38:0!==d&&h(d-1)}},onKeyUp:function(){O(!1)},onBlur:function(){h(0)},ref:f},0===Object.keys(u).length||a?r={placeholder:r}:"")),Object.keys(u).length&&!a?Object(b.jsx)("div",{className:"selected-coin-in-search-container",children:Object(b.jsx)(m,{setSelectCoin:l,selectCoin:u})}):""]})]})}),O=(c(52),function(e){var t=e.coinElement,c=e.index,s=e.name,n=e.image,i=e.symbol,a=(e.price,e.marketcap,e.setSelectCoin),r=e.setDisplay,o=e.setSearch,l=e.nr,j=e.setNr,u=e.filteredCoins,d=e.mouseMove;return Object(b.jsx)("div",{className:"coin-container",onClick:function(){t&&(a(t),o(""),r(!1))},onMouseOver:function(){!0===d&&j(c)},children:Object(b.jsx)("div",{className:s===u[l].name?"coin-row selected-dropdown":"coin-row",children:Object(b.jsxs)("div",{className:"coin",children:[Object(b.jsx)("img",{src:n,alt:"crypto"}),Object(b.jsx)("h1",{children:s}),Object(b.jsx)("p",{className:"coin-symbol",children:i})]})})})}),p=(c(53),function(e){var t=e.search,c=e.coins,n=e.setSelectCoin,i=e.setDisplay,a=e.setSearch,r=e.setFilteredCoins,o=e.setNr,l=e.nr,j=e.keyPress,m=(e.setKeyPress,e.mouseMove),h=c.filter((function(e){if(e.name.toLowerCase().includes(t.toLocaleLowerCase())||e.symbol.includes(t.toLocaleLowerCase()))return e}));Object(s.useEffect)((function(){r(h)}),[t]),Object(s.useEffect)((function(){h.length&&p.current.childNodes[l].scrollIntoView({behavior:"smooth",block:"center"})}),[j]);var p=Object(s.useRef)(null);return Object(b.jsxs)("div",{className:"coins-container",ref:p,children:[c.length?h.map((function(e,t){return Object(b.jsx)(O,{coins:c,nr:l,setNr:o,mouseMove:m,filteredCoins:h,setSearch:a,setSelectCoin:n,coinElement:e,setDisplay:i,name:e.name,image:e.image,symbol:e.symbol,marketcap:e.market_cap,price:e.current_price,index:t},e.id)})):Object(b.jsx)("p",{children:"Loading..."}),Object(b.jsx)("div",{className:"icon-div",onMouseDown:function(e){e.preventDefault()},children:Object(b.jsx)(u.a,{className:"down",icon:d.a})})]})}),f=(c(54),function(e){var t,c,s=e.selectACoin,n=e.selectBCoin,i=e.displayAList,a=e.displayBList,r=function(e,t){var c=t.market_cap/e.market_cap;return e.current_price*c}(s,n),o=(t=r,c=s.current_price,(t-c)/c*100),l=s,j=n;return Object(b.jsx)("div",{className:"selectedCoin-container-parent",style:i||a?{opacity:.25}:{opacity:1},children:Object.keys(l).length&&Object.keys(j).length?Object(b.jsxs)("div",{className:"selectedCoins-container",children:[Object(b.jsxs)("div",{className:"img-price",children:[Object(b.jsx)("img",{className:"a-img",src:l.image,alt:"crypto a"}),Object(b.jsxs)("h1",{className:"coin-prices",children:[r>.1?"$"+r.toFixed(2):"$"+r.toFixed(4),Object(b.jsxs)("span",{className:o>=0?"percent positive":"percent negative",children:["(",o.toFixed(2),"%)"]})]})]}),Object(b.jsxs)("div",{className:"text-div",children:[Object(b.jsx)("h2",{className:"market-cap-title",children:"Market cap"}),Object(b.jsxs)("h2",{className:"first-text first-mcap",children:["$",l.market_cap.toLocaleString()]}),Object(b.jsxs)("h2",{className:"second-text second-mcap",children:["$",j.market_cap.toLocaleString()]}),Object(b.jsx)("img",{className:"b-img first-text-img",src:l.image,alt:"crypto b"}),Object(b.jsx)("img",{className:"b-img second-text-img",src:j.image,alt:"crypto a"})," "]})]}):""})}),x=(c(55),function(e){var t=e.setSelectACoin,c=e.setSelectBCoin,s=e.selectACoin,n=e.selectBCoin;return Object(b.jsx)("div",{className:"swap",children:Object(b.jsx)(u.a,{className:"icon faExchangeAlt",icon:d.b,onClick:function(){t(n),c(s)}})})}),v=function(e){var t=Object(s.useRef)();return Object(s.useEffect)((function(){var c=function(c){t.current.contains(c.target)||e()};return document.addEventListener("mousedown",c),function(){document.removeEventListener("mousedown",c)}})),t},y=function(){var e=Object(s.useState)("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"),t=Object(r.a)(e,2),c=t[0],n=(t[1],Object(s.useState)([])),i=Object(r.a)(n,2),a=i[0],o=i[1],j=Object(s.useState)(""),u=Object(r.a)(j,2),d=u[0],m=u[1],O=Object(s.useState)(""),y=Object(r.a)(O,2),C=y[0],N=y[1],g=Object(s.useState)(!1),S=Object(r.a)(g,2),k=S[0],w=S[1],M=Object(s.useState)(!1),L=Object(r.a)(M,2),B=L[0],_=L[1],A=Object(s.useState)([]),D=Object(r.a)(A,2),E=D[0],P=D[1],K=Object(s.useState)([]),F=Object(r.a)(K,2),$=F[0],R=F[1],I=Object(s.useState)(0),J=Object(r.a)(I,2),U=J[0],V=J[1],q=Object(s.useState)({}),z=Object(r.a)(q,2),G=z[0],H=z[1],Q=Object(s.useState)({}),T=Object(r.a)(Q,2),W=T[0],X=T[1],Y=Object(s.useState)(!1),Z=Object(r.a)(Y,2),ee=Z[0],te=Z[1],ce=Object(s.useState)(!1),se=Object(r.a)(ce,2),ne=se[0],ie=se[1];Object(s.useEffect)((function(){l.a.get(c).then((function(e){var t=e.data.filter((function(e){return!e.name.toLowerCase().includes("usd")&&!e.symbol.toLowerCase().includes("usd")}));o(t)})).catch((function(e){return console.log(e)}))}),[]);var ae=v((function(){w(!1)})),re=v((function(){_(!1)}));return Object(b.jsxs)("div",{className:"homepage",onMouseMove:function(){ie(!0)},children:[Object(b.jsx)("div",{className:"title",children:Object(b.jsxs)("h1",{children:["Show the value of ",Object(b.jsx)("span",{className:"span-A",children:"A"})," ",Object(b.jsx)("br",{}),"with the market cap of",Object(b.jsx)("span",{className:"span-B",children:" B"})]})}),Object(b.jsxs)("div",{className:"search-list-container",ref:ae,children:[Object(b.jsx)(h,{setSearch:m,search:d,searchName:"A",setDisplay:w,display:k,placeholder:"e.g Ethereum",setSelectCoin:H,selectCoin:G,filteredCoins:E,nr:U,setNr:V,setKeyPress:te,setMouseMove:ie}),k?Object(b.jsx)(p,{coins:a,search:d,setSelectCoin:H,display:k,setDisplay:w,setSearch:m,setFilteredCoins:P,setNr:V,nr:U,keyPress:ee,setKeyPress:te,mouseMove:ne}):""]}),Object(b.jsx)(x,{setSelectACoin:H,setSelectBCoin:X,selectACoin:G,selectBCoin:W}),Object(b.jsxs)("div",{className:"search-list-container",ref:re,children:[Object(b.jsx)(h,{setSearch:N,search:C,searchName:"B",setDisplay:_,display:B,placeholder:"e.g Bitcoin",setSelectCoin:X,selectCoin:W,filteredCoins:$,setNr:V,nr:U,setKeyPress:te,setMouseMove:ie}),B?Object(b.jsx)(p,{coins:a,search:C,setSelectCoin:X,setDisplay:_,display:B,setSearch:N,setFilteredCoins:R,setNr:V,nr:U,keyPress:ee,setKeyPress:te,mouseMove:ne}):""]}),Object(b.jsx)("div",{className:"selectedCoin-div",children:Object(b.jsx)(f,{selectACoin:G,selectBCoin:W,displayAList:k,displayBList:B})})]})};c(56);var C=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(y,{})})};a.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.1083022d.chunk.js.map