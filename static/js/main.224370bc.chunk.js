(this["webpackJsonpmarketcap-of"]=this["webpackJsonpmarketcap-of"]||[]).push([[0],{27:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(19),a=c.n(i),r=(c(27),c(3)),o=c(20),l=c.n(o),j=(c(45),c(22)),u=(c(46),c(5)),b=c(6),d=c(0),m=function(e){var t=e.selectCoin,c=e.setSelectCoin;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("img",{src:t.image,alt:"img-a"}),Object(d.jsx)("h4",{className:"symbol",children:t.symbol.toUpperCase()}),Object(d.jsxs)("h4",{className:"price",children:["$",t.current_price]}),Object(d.jsx)(u.a,{className:"fa-times",icon:b.c,onClick:function(){c({})}})]})},O=(c(52),function(e){var t=e.setSearch,c=e.search,n=e.searchName,i=e.setDisplay,a=e.display,r=e.placeholder,o=e.filteredCoins,l=e.setSelectCoin,u=e.selectCoin,b=e.nr,O=e.setNr,h=e.setKeyPress,p=e.setMouseMove,f=Object(s.useRef)();return Object(s.useEffect)((function(){!a&&Object.keys(u).length&&t("")}),[a]),Object(d.jsxs)("div",{className:"coin-search",children:[Object(d.jsxs)("h1",{className:"coin-text",children:["Select ",Object(d.jsx)("span",{className:"span-"+n,children:n})]}),Object(d.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),o[b]&&(l(o[b]),t(""),i(!1),f.current.blur())},children:[Object(d.jsx)("input",Object(j.a)({className:"coin-input",type:"text",value:c,onChange:function(e){t(e.target.value),i(!0),O(0)},onClick:function(){i(!0)},onKeyDown:function(e){switch(h(!0),p(!1),e.keyCode){case 40:b!==o.length-1&&O(b+1);break;case 38:0!==b&&O(b-1)}},onKeyUp:function(){h(!1)},onBlur:function(){O(0)},ref:f},0===Object.keys(u).length||a?r={placeholder:r}:"")),Object.keys(u).length&&!a?Object(d.jsx)("div",{className:"selected-coin-in-search-container",children:Object(d.jsx)(m,{setSelectCoin:l,selectCoin:u})}):""]})]})}),h=(c(53),function(e){var t=e.coinElement,c=e.index,s=e.name,n=e.image,i=e.symbol,a=(e.price,e.marketcap,e.setSelectCoin),r=e.setDisplay,o=e.setSearch,l=e.nr,j=e.setNr,u=e.filteredCoins,b=e.mouseMove;return Object(d.jsx)("div",{className:"coin-container",onClick:function(){t&&(a(t),o(""),r(!1))},onMouseOver:function(){!0===b&&j(c)},children:Object(d.jsx)("div",{className:s===u[l].name?"coin-row selected-dropdown":"coin-row",children:Object(d.jsxs)("div",{className:"coin",children:[Object(d.jsx)("img",{src:n,alt:"crypto"}),Object(d.jsx)("h1",{children:s}),Object(d.jsx)("p",{className:"coin-symbol",children:i})]})})})}),p=(c(54),function(e){var t=e.search,c=e.coins,n=e.setSelectCoin,i=e.setDisplay,a=e.setSearch,r=e.setFilteredCoins,o=e.setNr,l=e.nr,j=e.keyPress,m=(e.setKeyPress,e.mouseMove),O=c.filter((function(e){if(e.name.toLowerCase().includes(t.toLocaleLowerCase())||e.symbol.includes(t.toLocaleLowerCase()))return e}));Object(s.useEffect)((function(){r(O)}),[t]),Object(s.useEffect)((function(){O.length&&p.current.childNodes[l].scrollIntoView({behavior:"smooth",block:"center"})}),[j]);var p=Object(s.useRef)(null);return Object(d.jsxs)("div",{className:"coins-container",ref:p,children:[c.length?O.map((function(e,t){return Object(d.jsx)(h,{coins:c,nr:l,setNr:o,mouseMove:m,filteredCoins:O,setSearch:a,setSelectCoin:n,coinElement:e,setDisplay:i,name:e.name,image:e.image,symbol:e.symbol,marketcap:e.market_cap,price:e.current_price,index:t},e.id)})):Object(d.jsx)("p",{children:"Loading..."}),Object(d.jsx)("div",{className:"icon-div",onMouseDown:function(e){e.preventDefault()},children:Object(d.jsx)(u.a,{className:"down",icon:b.a})})]})}),f=(c(55),c(21)),x=function(e){var t=e.selectACoin,c=Object(s.useRef)(),n=function(e){c.current.className=e?"content visible":"content"};return Object(d.jsxs)("div",{className:"info-container",children:[Object(d.jsx)(u.a,{className:"question-icon",icon:f.a,onClick:function(){n(!0)},onMouseOver:function(){n(!0)},onMouseLeave:function(){n(!1)}}),Object(d.jsx)("div",{className:"content",ref:c,children:Object(d.jsxs)("p",{children:["The market cap is equal to the price of a coin/share multiplied by it's total number of coins in circulation. ",Object(d.jsx)("br",{})," For example ",t.name,": \u2248$",t.current_price.toLocaleString()," *"," ",t.circulating_supply.toLocaleString()," = $",t.market_cap.toLocaleString()]})})]})},v=(c(56),function(e){var t,c,s=e.selectACoin,n=e.selectBCoin,i=e.displayAList,a=e.displayBList,r=function(e,t){var c=t.market_cap/e.market_cap;return e.current_price*c}(s,n),o=(t=r,c=s.current_price,(t-c)/c*100),l=s,j=n;return Object(d.jsx)("div",{className:"selectedCoin-container-parent",style:i||a?{opacity:.25}:{opacity:1},children:Object.keys(l).length&&Object.keys(j).length?Object(d.jsxs)("div",{className:"selectedCoins-container",children:[Object(d.jsxs)("div",{className:"img-price",children:[Object(d.jsx)("img",{className:"a-img",src:l.image,alt:"crypto a"}),Object(d.jsxs)("h1",{className:"coin-prices",children:[r>.1?"$"+r.toFixed(2):"$"+r.toFixed(4),Object(d.jsxs)("span",{className:o>=0?"percent positive":"percent negative",children:["(",o.toFixed(2),"%)"]})]})]}),Object(d.jsxs)("div",{className:"text-div",children:[Object(d.jsxs)("h2",{className:"market-cap-title",children:["Market cap",Object(d.jsx)(x,{selectACoin:s})]}),Object(d.jsxs)("h2",{className:"first-text first-mcap",children:["$",l.market_cap.toLocaleString()]}),Object(d.jsxs)("h2",{className:"second-text second-mcap",children:["$",j.market_cap.toLocaleString()]}),Object(d.jsx)("img",{className:"b-img first-text-img",src:l.image,alt:"crypto b"}),Object(d.jsx)("img",{className:"b-img second-text-img",src:j.image,alt:"crypto a"})," "]})]}):""})}),y=(c(57),function(e){var t=e.setSelectACoin,c=e.setSelectBCoin,s=e.selectACoin,n=e.selectBCoin;return Object(d.jsx)("div",{className:"swap",children:Object(d.jsx)(u.a,{className:"icon faExchangeAlt",icon:b.b,onClick:function(){t(n),c(s)}})})}),N=function(e){var t=Object(s.useRef)();return Object(s.useEffect)((function(){var c=function(c){t.current.contains(c.target)||e()};return document.addEventListener("mousedown",c),function(){document.removeEventListener("mousedown",c)}})),t},C=function(){var e=Object(s.useState)("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"),t=Object(r.a)(e,2),c=t[0],n=(t[1],Object(s.useState)([])),i=Object(r.a)(n,2),a=i[0],o=i[1],j=Object(s.useState)(""),u=Object(r.a)(j,2),b=u[0],m=u[1],h=Object(s.useState)(""),f=Object(r.a)(h,2),x=f[0],C=f[1],g=Object(s.useState)(!1),S=Object(r.a)(g,2),k=S[0],w=S[1],L=Object(s.useState)(!1),M=Object(r.a)(L,2),_=M[0],A=M[1],B=Object(s.useState)([]),D=Object(r.a)(B,2),E=D[0],P=D[1],K=Object(s.useState)([]),F=Object(r.a)(K,2),$=F[0],R=F[1],q=Object(s.useState)(0),I=Object(r.a)(q,2),J=I[0],U=I[1],T=Object(s.useState)({}),V=Object(r.a)(T,2),z=V[0],G=V[1],H=Object(s.useState)({}),Q=Object(r.a)(H,2),W=Q[0],X=Q[1],Y=Object(s.useState)(!1),Z=Object(r.a)(Y,2),ee=Z[0],te=Z[1],ce=Object(s.useState)(!1),se=Object(r.a)(ce,2),ne=se[0],ie=se[1];Object(s.useEffect)((function(){l.a.get(c).then((function(e){var t=e.data.filter((function(e){return!e.name.toLowerCase().includes("usd")&&!e.symbol.toLowerCase().includes("usd")}));o(t)})).catch((function(e){return console.log(e)}))}),[]);var ae=N((function(){w(!1)})),re=N((function(){A(!1)}));return Object(d.jsxs)("div",{className:"homepage",onMouseMove:function(){ie(!0)},children:[Object(d.jsx)("div",{className:"title",children:Object(d.jsxs)("h1",{children:["Show the value of ",Object(d.jsx)("span",{className:"span-A",children:"A"})," ",Object(d.jsx)("br",{}),"with the market cap of",Object(d.jsx)("span",{className:"span-B",children:" B"})]})}),Object(d.jsxs)("div",{className:"search-list-container",ref:ae,children:[Object(d.jsx)(O,{setSearch:m,search:b,searchName:"A",setDisplay:w,display:k,placeholder:"e.g Ethereum",setSelectCoin:G,selectCoin:z,filteredCoins:E,nr:J,setNr:U,setKeyPress:te,setMouseMove:ie}),k?Object(d.jsx)(p,{coins:a,search:b,setSelectCoin:G,display:k,setDisplay:w,setSearch:m,setFilteredCoins:P,setNr:U,nr:J,keyPress:ee,setKeyPress:te,mouseMove:ne}):""]}),Object(d.jsx)(y,{setSelectACoin:G,setSelectBCoin:X,selectACoin:z,selectBCoin:W}),Object(d.jsxs)("div",{className:"search-list-container",ref:re,children:[Object(d.jsx)(O,{setSearch:C,search:x,searchName:"B",setDisplay:A,display:_,placeholder:"e.g Bitcoin",setSelectCoin:X,selectCoin:W,filteredCoins:$,setNr:U,nr:J,setKeyPress:te,setMouseMove:ie}),_?Object(d.jsx)(p,{coins:a,search:x,setSelectCoin:X,setDisplay:A,display:_,setSearch:C,setFilteredCoins:R,setNr:U,nr:J,keyPress:ee,setKeyPress:te,mouseMove:ne}):""]}),Object(d.jsx)("div",{className:"selectedCoin-div",children:Object(d.jsx)(v,{selectACoin:z,selectBCoin:W,displayAList:k,displayBList:_})})]})};c(58);var g=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(C,{})})};a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.224370bc.chunk.js.map