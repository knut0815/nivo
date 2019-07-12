(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{213:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(312),i=n(304),c=n(60),l=n.n(c),u=(n(237),n(37),n(69),n(3)),s=n.n(u),f=n(522),p=n.n(f),d=n(26),m=n(225),h=n(587),g=n(866),v=n.n(g),x=n(867),b=n.n(x),y=n(868),w=n.n(y),C=Object(r.memo)(function(e){var t=e.term,n=e.onChange,a=e.style,i=Object(r.useCallback)(function(e){return n(e.target.value)},[n]),c=Object(r.useCallback)(function(){return n("")},[n]);return o.a.createElement(_,{style:a},o.a.createElement(q,{type:"text",onChange:i,placeholder:"Search",value:t}),o.a.createElement(O,null),t.length>0&&o.a.createElement(j,{onClick:c},o.a.createElement(w.a,null)))});C.displayName="ComponentsSearch",C.propTypes={term:s.a.string.isRequired,onChange:s.a.func.isRequired,style:s.a.object};var E=C,_=d.d.div.withConfig({displayName:"ComponentsSearch__Container",componentId:"h8tfoj-0"})(["position:relative;width:100%;"]),q=d.d.input.withConfig({displayName:"ComponentsSearch__Input",componentId:"h8tfoj-1"})(["width:100%;padding:0 44px;height:42px;line-height:38px;border:2px solid ",";font-size:inherit;border-radius:21px;background:",";color:",";cursor:pointer;box-shadow:none;&::-webkit-input-placeholder,&:-ms-input-placeholder,&::-moz-placeholder{color:",";}&:focus{outline:0;border-color:",";cursor:auto;}"],function(e){return e.theme.colors.borderLight},function(e){return e.theme.colors.cardBackground},function(e){return e.theme.colors.text},function(e){return e.theme.colors.textLight},function(e){return e.theme.colors.accent}),O=Object(d.d)(b.a).withConfig({displayName:"ComponentsSearch__StyledSearchIcon",componentId:"h8tfoj-2"})(["color:",";font-size:26px;position:absolute;top:8px;left:12px;cursor:pointer;"],function(e){return e.theme.colors.accent}),j=d.d.span.withConfig({displayName:"ComponentsSearch__Clear",componentId:"h8tfoj-3"})(["background:",";color:",";width:26px;height:26px;font-size:18px;border-radius:13px;position:absolute;top:8px;right:9px;display:flex;align-items:center;justify-content:center;cursor:pointer;&:hover{color:white;}"],function(e){return e.theme.colors.accent},function(e){return e.theme.colors.cardBackground});function k(){var e=l()(["\n        & {\n            padding: 0 12px;\n        }\n    "]);return k=function(){return e},e}function I(){var e=l()(["\n        & {\n            padding: 0 12px;\n        }\n    "]);return I=function(){return e},e}var S=["SVG","HTML","Canvas","HTTP API"],z=Object(r.memo)(function(e){var t=e.filter,n=e.onChange;return o.a.createElement(P,null,o.a.createElement(L,{isActive:null===t,onClick:function(){n(null)}},"All"),S.map(function(e){return o.a.createElement(L,{key:e,isActive:t&&e.toLowerCase()===t.toLowerCase(),onClick:function(){n(e)}},e)}))});z.displayName="ComponentsFilters",z.propTypes={onChange:s.a.func.isRequired};var N=z,P=d.d.div.withConfig({displayName:"ComponentsFilters__Container",componentId:"okxhwq-0"})(["display:flex;border:2px solid ",";height:42px;border-radius:2px;overflow:hidden;font-size:13px;font-weight:700;"],function(e){return e.theme.colors.accent}),L=d.d.span.withConfig({displayName:"ComponentsFilters__Item",componentId:"okxhwq-1"})(["line-height:38px;background:",";color:",";flex:1;text-align:center;cursor:pointer;border-left:1px solid ",";padding:0 26px;&:first-child{border-left-width:0;}"," ",""],function(e){var t=e.isActive,n=e.theme;return t?n.colors.accent:n.colors.cardBackground},function(e){var t=e.isActive,n=e.theme;return t?n.colors.cardBackground:n.colors.accent},function(e){return e.theme.colors.accent},m.a.tablet(I()),m.a.mobile(k())),M=n(7),T=n.n(M),A=(n(87),n(88),n(244),n(234)),R=n(62);function B(){var e=l()(["\n        & {\n            border-width: 0;\n            border-top-width: 1px;\n            border-color: ",";\n            box-shadow: none;\n        }\n    \n        &:focus,\n        &:hover {\n            background-color: ",";\n            border-color: ",";\n        }\n    \n        &:first-child {\n            border-top-width: 0;\n        }    \n    "]);return B=function(){return e},e}var G=Object(d.d)(A.a).withConfig({displayName:"ComponentsGridItem__Container",componentId:"sc-10pt92c-0"})(["text-decoration:none;background-color:",";border-radius:2px;padding:12px;cursor:pointer;color:",";border:1px solid ",";box-shadow:",";display:flex;align-items:center;justify-content:space-between;&:focus,&:hover{color:",";box-shadow:none;border-color:",";outline:0;}",""],function(e){return e.theme.colors.cardBackground},function(e){return e.theme.colors.text},function(e){return e.theme.colors.cardBackground},function(e){return e.theme.cardShadow},function(e){return e.theme.colors.accent},function(e){return e.theme.colors.accent},m.a.mobile(B(),function(e){return e.theme.colors.borderLight},function(e){return e.theme.colors.background},function(e){return e.theme.colors.borderLight})),F=d.d.div.withConfig({displayName:"ComponentsGridItem__Header",componentId:"sc-10pt92c-1"})(["flex:1;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;"]),H=d.d.span.withConfig({displayName:"ComponentsGridItem__Name",componentId:"sc-10pt92c-2"})(["font-size:15px;font-weight:600;"]),U=d.d.span.withConfig({displayName:"ComponentsGridItem__Icon",componentId:"sc-10pt92c-3"})(["margin-right:15px;display:block;width:52px;height:52px;"]),J=d.d.div.withConfig({displayName:"ComponentsGridItem__Tags",componentId:"sc-10pt92c-4"})(["font-size:0.9rem;color:",";line-height:1em;margin-top:4px;display:flex;flex-wrap:wrap;"],function(e){return e.theme.colors.textLight}),V=d.d.span.withConfig({displayName:"ComponentsGridItem__Tag",componentId:"sc-10pt92c-5"})(["display:inline-block;margin-right:6px;margin-bottom:6px;border-left:1px solid ",";padding-left:7px;&:first-child{padding-left:0;border-left:none;}"],function(e){return e.theme.colors.accent}),Y=Object(r.memo)(function(e){var t=e.path,n=e.name,r=e.icon,a=e.tags,i=Object(R.b)();return o.a.createElement(G,{to:t},o.a.createElement(U,{className:"sprite-icons-"+r+"-"+i.id+"-colored"}),o.a.createElement(F,null,o.a.createElement(H,null,n),a.length>0&&o.a.createElement(J,null,a.map(function(e){return o.a.createElement(V,{key:e},e)}))))}),$=n(261);function D(){var e=l()(["\n        & {\n            grid-template-columns: 1fr;\n            grid-row-gap: 0;\n            box-shadow: ",";\n        }\n    "]);return D=function(){return e},e}function K(){var e=l()(["\n        & {\n            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n            grid-column-gap: 20px;\n        }\n    "]);return K=function(){return e},e}function Q(){var e=l()(["\n        & {\n            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n            grid-column-gap: 20px;\n        }\n    "]);return Q=function(){return e},e}function W(){var e=l()(["\n        & {\n            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n            grid-column-gap: 30px;\n        }\n    "]);return W=function(){return e},e}var X=d.d.div.withConfig({displayName:"ComponentsGrid__Grid",componentId:"sc-1qxa0lm-0"})(["display:grid;grid-row-gap:15px;margin-bottom:30px;"," "," "," ",""],m.a.desktopLarge(W()),m.a.desktop(Q()),m.a.tablet(K()),m.a.mobile(D(),function(e){return e.theme.cardShadow})),Z=d.d.div.withConfig({displayName:"ComponentsGrid__Empty",componentId:"sc-1qxa0lm-1"})(["margin-top:120px;text-align:center;"]),ee=d.d.span.withConfig({displayName:"ComponentsGrid__EmptyIcon",componentId:"sc-1qxa0lm-2"})(["font-size:64px;display:block;margin-bottom:50px;white-space:pre;color:",";"],function(e){return e.theme.colors.accent}),te=function(e){function t(){return e.apply(this,arguments)||this}return T()(t,e),t.prototype.render=function(){var e=this.props,t=e.term,n=e.filter,r=e.onClick,a=$.a;if(t||n){var i=function(e,t){var n=[];return e&&e.length>0&&n.push(function(t){return t.label.toLowerCase().includes(e.toLowerCase())}),t&&n.push(function(e){return e.tags.map(function(e){return e.toLowerCase()}).includes(t.toLowerCase())}),function(e){return n.every(function(t){return t(e)})}}(t,n);a=$.a.filter(i)}return 0===a.length?o.a.createElement(Z,null,o.a.createElement(ee,null,"¯\\_(ツ)_/¯"),o.a.createElement("div",null,"no result, sorry…")):o.a.createElement(X,null,a.map(function(e){return o.a.createElement(Y,{key:e.path,path:e.path,name:e.label,icon:e.icon,tags:e.tags,onClick:r})}))},t}(r.Component);function ne(){var e=l()(["\n        & {\n            grid-template-columns: 1fr;\n            grid-row-gap: 15px;\n        }\n    "]);return ne=function(){return e},e}function re(){var e=l()(["\n        & {\n            grid-template-columns: 1fr;\n            grid-row-gap: 15px;\n        }\n    "]);return re=function(){return e},e}function oe(){var e=l()(["\n        & {\n            grid-column-gap: 20px;\n        }\n    "]);return oe=function(){return e},e}function ae(){var e=l()(["\n        & {\n            grid-column-gap: 30px;\n        }\n    "]);return ae=function(){return e},e}te.propTypes={filter:s.a.string,term:s.a.string,onClick:s.a.func},te.defaultProps={onClick:function(){}};var ie=function(e){var t=e.location,n=e.navigate,a=Object(r.useMemo)(function(){var e=new v.a(t.search);return[e.get("q"),e.get("filter")]},[t.search]),i=a[0],c=a[1],l=Object(r.useCallback)(function(e){var t=new v.a;e&&t.append("q",e),c&&t.append("filter",c),n("/components?"+t.toString(),{replace:!0})},[c,n]),u=Object(r.useCallback)(function(e){var t=new v.a;i&&t.append("q",i),e&&t.append("filter",e),n("/components?"+t.toString())},[i,n]);return o.a.createElement(h.a,null,o.a.createElement(p.a,{title:"Components"}),o.a.createElement(ce,null,o.a.createElement("h1",null,"Components")),o.a.createElement(le,null,o.a.createElement(E,{term:i||"",onChange:l}),o.a.createElement(N,{onChange:u,filter:c})),o.a.createElement(te,{term:i,filter:c}))};ie.propTypes={location:s.a.shape({search:s.a.string.isRequired}).isRequired,navigate:s.a.func.isRequired};var ce=d.d.div.withConfig({displayName:"ComponentsExplorer__Header",componentId:"sc-1cq2luq-0"})(["height:130px;color:white;margin-bottom:50px;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-end;"]),le=d.d.div.withConfig({displayName:"ComponentsExplorer__SearchAndFilters",componentId:"sc-1cq2luq-1"})(["display:grid;align-items:center;margin-bottom:30px;grid-template-columns:1fr 2fr;"," "," "," ",""],m.a.desktopLarge(ae()),m.a.desktop(oe()),m.a.tablet(re()),m.a.mobile(ne())),ue=ie;t.default=function(e){return o.a.createElement(a.a,null,o.a.createElement(i.a,{title:"Components"}),o.a.createElement(ue,{location:e.location,navigate:e.navigate}))}},235:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=i(n(0)),a=i(n(3));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e,t){var n=e.children,a=e.color,i=e.size,c=e.style,l=e.width,u=e.height,s=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","color","size","style","width","height"]),f=t.reactIconBase,p=void 0===f?{}:f,d=i||p.size||"1em";return o.default.createElement("svg",r({children:n,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:u||d,width:l||d},p,s,{style:r({verticalAlign:"middle",color:a||p.color},p.style||{},c)}))};c.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number]),width:a.default.oneOfType([a.default.string,a.default.number]),height:a.default.oneOfType([a.default.string,a.default.number]),style:a.default.object},c.contextTypes={reactIconBase:a.default.shape(c.propTypes)},t.default=c,e.exports=t.default},237:function(e,t,n){"use strict";n(683);var r=n(6),o=n(99),a=n(21),i=/./.toString,c=function(e){n(17)(RegExp.prototype,"toString",e,!0)};n(14)(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?c(function(){var e=r(this);return"/".concat(e.source,"/","flags"in e?e.flags:!a&&e instanceof RegExp?o.call(e):void 0)}):"toString"!=i.name&&c(function(){return i.call(this)})},244:function(e,t,n){var r=n(28).f,o=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in o||n(21)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},307:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=i(n(0)),a=i(n(235));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6q0 5.6-3.3 10.1t-8.4 6.2q-0.6 0.1-0.9-0.2t-0.3-0.7q0 0 0-1.7t0-3q0-2.1-1.2-3.1 1.3-0.2 2.3-0.4t2.1-0.9 1.8-1.5 1.2-2.3 0.5-3.4q0-2.7-1.8-4.6 0.8-2-0.2-4.5-0.6-0.2-1.8 0.2t-2 1l-0.9 0.5q-2-0.6-4.3-0.6t-4.2 0.6q-0.4-0.2-1-0.6t-1.9-0.8-1.9-0.3q-1 2.5-0.1 4.5-1.8 1.9-1.8 4.6 0 1.9 0.5 3.4t1.1 2.3 1.8 1.5 2.1 0.9 2.3 0.4q-0.9 0.8-1.1 2.3-0.4 0.2-1 0.3t-1.3 0.1-1.4-0.5-1.3-1.4q-0.4-0.7-1-1.1t-1.1-0.6l-0.5 0q-0.5 0-0.6 0.1t-0.1 0.2 0.2 0.3 0.2 0.3l0.2 0.1q0.5 0.2 1 0.9t0.7 1.1l0.2 0.5q0.3 0.9 1 1.4t1.5 0.7 1.5 0.1 1.3-0.1l0.5 0q0 0.8 0 1.9t0 1.2q0 0.5-0.3 0.7t-0.9 0.2q-5.2-1.7-8.4-6.2t-3.3-10.1q0-4.7 2.3-8.6t6.2-6.2 8.6-2.3z m-10.6 24.6q0.1-0.2-0.2-0.3-0.2-0.1-0.2 0.1-0.1 0.1 0.1 0.2 0.2 0.2 0.3 0z m0.7 0.7q0.1-0.1-0.1-0.3-0.2-0.2-0.3-0.1-0.2 0.1 0 0.4 0.3 0.2 0.4 0z m0.7 1q0.2-0.1 0-0.4-0.2-0.3-0.4-0.1-0.2 0.1 0 0.4t0.4 0.1z m0.9 1q0.2-0.2-0.1-0.4-0.3-0.3-0.4-0.1-0.2 0.2 0 0.4 0.3 0.3 0.5 0.1z m1.3 0.5q0-0.2-0.3-0.3-0.4-0.1-0.4 0.1t0.2 0.4q0.4 0.1 0.5-0.2z m1.4 0.1q0-0.2-0.4-0.2-0.4 0-0.4 0.2 0 0.3 0.4 0.3 0.4 0 0.4-0.3z m1.3-0.2q-0.1-0.2-0.4-0.2-0.4 0.1-0.3 0.4t0.4 0.1 0.3-0.3z"})))},e.exports=t.default},308:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=i(n(0)),a=i(n(235));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m37.7 9.1q-1.5 2.2-3.7 3.7 0.1 0.3 0.1 1 0 2.9-0.9 5.8t-2.6 5.5-4.1 4.7-5.7 3.3-7.2 1.2q-6.1 0-11.1-3.3 0.8 0.1 1.7 0.1 5 0 9-3-2.4-0.1-4.2-1.5t-2.6-3.5q0.8 0.1 1.4 0.1 1 0 1.9-0.3-2.5-0.5-4.1-2.5t-1.7-4.6v0q1.5 0.8 3.3 0.9-1.5-1-2.4-2.6t-0.8-3.4q0-2 0.9-3.7 2.7 3.4 6.6 5.4t8.3 2.2q-0.2-0.9-0.2-1.7 0-3 2.1-5.1t5.1-2.1q3.2 0 5.3 2.3 2.4-0.5 4.6-1.7-0.8 2.5-3.2 3.9 2.1-0.2 4.2-1.1z"})))},e.exports=t.default},587:function(e,t,n){"use strict";var r=n(60),o=n.n(r),a=n(26),i=n(225);function c(){var e=o()(["\n        & {\n            margin: 0 15px;\n        }\n    "]);return c=function(){return e},e}function l(){var e=o()(["\n        & {\n            margin: 0 30px;\n        }\n    "]);return l=function(){return e},e}t.a=a.d.div.withConfig({displayName:"PageContent",componentId:"xla6zc-0"})(["margin:0 50px;position:relative;"," ",""],i.a.tablet(l()),i.a.mobile(c()))},683:function(e,t,n){n(21)&&"g"!=/./g.flags&&n(28).f(RegExp.prototype,"flags",{configurable:!0,get:n(99)})},866:function(e,t,n){"use strict";(function(t){function n(e){var t,n,o,a,i,c,l=Object.create(null);if(this[u]=l,e)if("string"==typeof e)for("?"===e.charAt(0)&&(e=e.slice(1)),i=0,c=(a=e.split("&")).length;i<c;i++)-1<(t=(o=a[i]).indexOf("="))?f(l,p(o.slice(0,t)),p(o.slice(t+1))):o.length&&f(l,p(o),"");else if(r(e))for(i=0,c=e.length;i<c;i++)f(l,(o=e[i])[0],o[1]);else if(e.forEach)e.forEach(s,l);else for(n in e)f(l,n,e[n])}var r=Array.isArray,o=n.prototype,a=/[!'\(\)~]|%20|%00/g,i=/\+/g,c={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},l=function(e){return c[e]},u="__URLSearchParams__:"+Math.random();function s(e,t){f(this,t,e)}function f(e,t,n){var o=r(n)?n.join(","):n;t in e?e[t].push(o):e[t]=[o]}function p(e){return decodeURIComponent(e.replace(i," "))}function d(e){return encodeURIComponent(e).replace(a,l)}o.append=function(e,t){f(this[u],e,t)},o.delete=function(e){delete this[u][e]},o.get=function(e){var t=this[u];return e in t?t[e][0]:null},o.getAll=function(e){var t=this[u];return e in t?t[e].slice(0):[]},o.has=function(e){return e in this[u]},o.set=function(e,t){this[u][e]=[""+t]},o.forEach=function(e,t){var n=this[u];Object.getOwnPropertyNames(n).forEach(function(r){n[r].forEach(function(n){e.call(t,n,r,this)},this)},this)},o.toJSON=function(){return{}},o.toString=function(){var e,t,n,r,o=this[u],a=[];for(t in o)for(n=d(t),e=0,r=o[t];e<r.length;e++)a.push(n+"="+d(r[e]));return a.join("&")},function(e){var t=function(){try{return!!Symbol.iterator}catch(e){return!1}}();"forEach"in e||(e.forEach=function(e,t){var n=Object.create(null);this.toString().replace(/=[\s\S]*?(?:&|$)/g,"=").split("=").forEach(function(r){!r.length||r in n||(n[r]=this.getAll(r)).forEach(function(n){e.call(t,n,r,this)},this)},this)}),"keys"in e||(e.keys=function(){var e=[];this.forEach(function(t,n){e.push(n)});var n={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t&&(n[Symbol.iterator]=function(){return n}),n}),"values"in e||(e.values=function(){var e=[];this.forEach(function(t){e.push(t)});var n={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t&&(n[Symbol.iterator]=function(){return n}),n}),"entries"in e||(e.entries=function(){var e=[];this.forEach(function(t,n){e.push([n,t])});var n={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t&&(n[Symbol.iterator]=function(){return n}),n}),!t||Symbol.iterator in e||(e[Symbol.iterator]=e.entries),"sort"in e||(e.sort=function(){for(var e,t,n,r=this.entries(),o=r.next(),a=o.done,i=[],c=Object.create(null);!a;)t=(n=o.value)[0],i.push(t),t in c||(c[t]=[]),c[t].push(n[1]),a=(o=r.next()).done;for(i.sort(),e=0;e<i.length;e++)this.delete(i[e]);for(e=0;e<i.length;e++)t=i[e],this.append(t,c[t].shift())})}((n=e.exports=t.URLSearchParams||n).prototype)}).call(this,n(92))},867:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=i(n(0)),a=i(n(235));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m15.9 23.4c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5-7.5 3.3-7.5 7.5 3.3 7.5 7.5 7.5z m10 0l8.2 8.2-2.5 2.5-8.2-8.2v-1.4l-0.5-0.4c-1.9 1.6-4.4 2.5-7 2.5-6.1 0-10.9-4.7-10.9-10.7s4.8-10.9 10.9-10.9 10.7 4.8 10.7 10.9c0 2.6-0.9 5.1-2.5 7l0.4 0.5h1.4z"})))},e.exports=t.default},868:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=i(n(0)),a=i(n(235));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m31.6 10.7l-9.3 9.3 9.3 9.3-2.3 2.3-9.3-9.3-9.3 9.3-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 9.3 9.3 9.3-9.3z"})))},e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-components-js-8e73a3ba33efe2cbfc46.js.map