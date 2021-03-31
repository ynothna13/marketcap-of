(this["webpackJsonpwith-market-cap-of"]=this["webpackJsonpwith-market-cap-of"]||[]).push([[0],{25:function(e,c,t){},43:function(e,c,t){},44:function(e,c,t){},46:function(e,c,t){},47:function(e,c,t){},52:function(e,c,t){},53:function(e,c,t){},54:function(e,c,t){"use strict";t.r(c);var s=t(2),a=t.n(s),n=t(17),i=t.n(n),r=(t(25),t(4)),o=t(18),l=t.n(o),j=(t(43),t(44),t(0)),m=function(e){var c=e.setSearch,t=e.search,s=e.searchName,a=e.setDisplay,n=e.placeholder;return Object(j.jsxs)("div",{className:"coin-search",children:[Object(j.jsxs)("h1",{className:"coin-text",children:["Select ",Object(j.jsx)("span",{className:"span-"+s,children:s})]}),Object(j.jsx)("form",{children:Object(j.jsx)("input",{className:"coin-input",type:"text",value:t,placeholder:n,onChange:function(e){c(e.target.value),a(!0)},onClick:function(){a(!0)},onSubmit:function(){}})})]})},h=(t(46),function(e){var c=e.coinElement,t=e.name,s=e.image,a=e.symbol,n=(e.price,e.marketcap,e.setSelectCoin),i=e.setDisplay,r=e.setSearch;return Object(j.jsx)("div",{className:"coin-container",onClick:function(){c&&(n(c),r(t),i(!1))},children:Object(j.jsx)("div",{className:"coin-row",children:Object(j.jsxs)("div",{className:"coin",children:[Object(j.jsx)("img",{src:s,alt:"crypto"}),Object(j.jsx)("h1",{children:t}),Object(j.jsx)("p",{className:"coin-symbol",children:a})]})})})}),b=(t(47),t(19)),d=t(20),u=function(e){var c=e.search,t=e.coins,s=e.setSelectCoin,a=e.setDisplay,n=e.setSearch,i=(e.setFilteredCoins,t.filter((function(e){if(e.name.toLowerCase().includes(c.toLocaleLowerCase())||e.symbol.includes(c.toLocaleLowerCase()))return e})));return console.log(i[0]),Object(j.jsxs)("div",{className:"coins-container",children:[t.length?i.map((function(e){return Object(j.jsx)(h,{setSearch:n,setSelectCoin:s,coinElement:e,setDisplay:a,name:e.name,image:e.image,symbol:e.symbol,marketcap:e.market_cap,price:e.current_price},e.id)})):Object(j.jsx)("p",{children:"Loading..."}),t.length?Object(j.jsx)("div",{className:"icon-div",children:Object(j.jsx)(b.a,{className:"down",icon:d.a})}):""]})},p=(t(52),function(e){var c,t,s=e.selectFromCoin,a=e.selectToCoin,n=function(e,c){var t=c.market_cap/e.market_cap;return e.current_price*t}(s,a),i=(c=n,t=s.current_price,(c-t)/t*100),r=s,o=a;return Object(j.jsx)("div",{className:"selectedCoin-container-parent",children:Object.keys(r).length&&Object.keys(o).length?Object(j.jsxs)("div",{className:"selectedCoins-container",children:[Object(j.jsxs)("div",{className:"img-price",children:[Object(j.jsx)("img",{className:"a-img",src:r.image,alt:"crypto a"}),Object(j.jsxs)("h1",{className:"coin-prices",children:["$",n.toFixed(2),Object(j.jsxs)("span",{className:i>=0?"percent positive":"percent negative",children:["(",i.toFixed(2),"%)"]})]})]}),Object(j.jsxs)("div",{className:"text-div",children:[Object(j.jsxs)("h2",{className:"text",children:[Object(j.jsxs)("span",{className:"first-text",children:["Thank you",Object(j.jsx)("img",{className:"b-img",src:o.image,alt:"crypto b"}),o.symbol.toUpperCase()," for giving"]}),Object(j.jsxs)("span",{className:"second-text",children:[Object(j.jsx)("img",{className:"b-img",src:r.image,alt:"crypto a"})," ",r.symbol.toUpperCase()," a market cap of: $",o.market_cap.toLocaleString()]})]}),Object(j.jsxs)("h3",{children:["Original market cap: $",r.market_cap.toLocaleString()]})]})]}):""})}),O=function(e){var c=Object(s.useRef)();return Object(s.useEffect)((function(){var t=function(t){c.current.contains(t.target)||e()};return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}})),c},x=function(){var e=Object(s.useState)([]),c=Object(r.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)(""),i=Object(r.a)(n,2),o=i[0],h=i[1],b=Object(s.useState)(""),d=Object(r.a)(b,2),x=d[0],f=d[1],v=Object(s.useState)(!1),g=Object(r.a)(v,2),N=g[0],S=g[1],y=Object(s.useState)(!1),k=Object(r.a)(y,2),C=k[0],w=k[1],_=Object(s.useState)({}),L=Object(r.a)(_,2),D=L[0],E=L[1],B=Object(s.useState)({}),F=Object(r.a)(B,2),A=F[0],T=F[1];Object(s.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false").then((function(e){a(e.data)})).catch((function(e){return console.log(e)}))}),[]);var $=O((function(){S(!1)})),J=O((function(){w(!1)}));return Object(j.jsxs)("div",{className:"homepage",children:[Object(j.jsxs)("h1",{className:"title",children:["Show the value of ",Object(j.jsx)("span",{className:"span-A",children:"A"})," ",Object(j.jsx)("br",{}),"with the market cap of",Object(j.jsx)("span",{className:"span-B",children:" B"})]}),Object(j.jsxs)("div",{className:"search-list-container",ref:$,children:[Object(j.jsx)(m,{setSearch:h,search:o,searchName:"A",setDisplay:S,placeholder:"e.g Ethereum"}),N?Object(j.jsx)(u,{coins:t,search:o,setSelectCoin:E,setDisplay:S,setSearch:h}):""]}),Object(j.jsxs)("div",{className:"search-list-container",ref:J,children:[Object(j.jsx)(m,{setSearch:f,search:x,searchName:"B",setDisplay:w,placeholder:"e.g Bitcoin"}),C?Object(j.jsx)(u,{coins:t,search:x,setSelectCoin:T,setDisplay:w,setSearch:f}):""]}),Object(j.jsx)("div",{className:"selectedCoin-div",children:Object(j.jsx)(p,{selectFromCoin:D,selectToCoin:A})})]})};t(53);var f=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(x,{})})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.d90bd700.chunk.js.map