(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[476],{4845:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/liked",function(){return t(2796)}])},2076:function(n,e,t){"use strict";var r=t(5893),i=(t(7294),t(387)),s=t(1681),a=t(3300);e.Z=function(n){var e=n.children,t=n.heading;(0,i.useRouter)();return(0,r.jsxs)("div",{className:"page-feed-layout",children:[(0,r.jsx)(s.Z,{variant:"white"}),(0,r.jsx)("div",{className:"layout-banner"}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"layout-content",children:[(0,r.jsx)("h2",{className:"content-heading",children:t}),e]})}),(0,r.jsx)(a.Z,{})]})}},2796:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return g}});var r=t(5893),i=t(7294),s=t(2076),a=t(1739),c=t(1163),o=function(n){var e=n.info,t=(0,c.useRouter)();return(0,r.jsxs)("div",{onClick:function(){return t.push("/".concat(e.type,"/").concat(e.listingId))},className:"liked-listing ".concat(e.type," ").concat(e.userInfo.premium&&"premium"),children:["flatmate"===e.type?(0,r.jsx)("img",{src:e.userInfo.images.pfp?e.userInfo.images.pfp:"/img/pfps/".concat("male"===e.userInfo.gender?"radek":"radka","-pfp.png"),alt:"",className:"listing-pfp"}):(0,r.jsx)("img",{src:e.userInfo.images.listingImgs[0]?e.userInfo.images.listingImgs[0]:"/img/listing/default-byt.jpg",alt:"",className:"listing-pfp"}),(0,r.jsxs)("div",{className:"listing-name",children:["flatmate"===e.type?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:e.userInfo.username}),", ",e.userInfo.age," "]}):"Byt ".concat(e.flatBoxes.layout," ").concat(e.flatBoxes.location," "),e.userInfo.premium&&(0,r.jsx)("i",{className:"fas fa-circle-check"})]})]})},l=t(8456),u=t(6934),d=t(1018);function f(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function m(n){return function(n){if(Array.isArray(n))return f(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"===typeof n)return f(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g=function(){var n=(0,d.a)().currentUser,e=(0,u.s)().getLiked,t=(0,i.useState)(null),c=t[0],f=t[1],g=(0,i.useState)(null),p=g[0],h=g[1],v=(0,i.useState)(!1),x=v[0],j=v[1],y=(0,i.useState)(1),N=y[0],b=y[1];(0,i.useEffect)((function(){n&&I(n.uid,"first",null)}),[n]);var I=function(n,t,r){var i=[];"first"===t?e(n,t,null).then((function(n){h(n.docs),n.docs.forEach((function(n){var e=n.data();e.listingId=n.id,i=m(i).concat([e])})),f(i)})):"next"===t&&(j(!0),e(n,t,r).then((function(n){n.docs.length>0?(b((function(n){return n+1})),h(n.docs),n.docs.forEach((function(n){var e=n.data();e.listingId=n.id,i=m(i).concat([e])})),j(!1)):j(!1),f(i)}))),"prev"===t&&e(n,t,r).then((function(n){n.docs.length>0?(b((function(n){return n-1})),h(n.docs),n.docs.forEach((function(n){var e=n.data();e.listingId=n.id,i=m(i).concat([e])})),j(!1)):j(!1),f(i)}))};return(0,r.jsx)("div",{className:"Liked",children:(0,r.jsx)(s.Z,{heading:"Obl\xedben\xe9",children:(0,r.jsxs)("div",{className:"content-feed",children:[null!=c&&c.length?(0,r.jsx)(r.Fragment,{children:c.map((function(n,e){return(0,r.jsx)(o,{info:n},e)}))}):"",null==c&&(0,r.jsx)("div",{className:"feed-loading",children:(0,r.jsx)(l.Z,{})}),c&&0===c.length&&(0,r.jsxs)("div",{className:"feed-empty",children:[(0,r.jsx)("img",{src:"/img/bad-results/notfound.png"}),(0,r.jsx)("p",{className:"empty-description",children:"Dosud nem\xe1te obl\xedben\xe9 inzer\xe1ty."})]}),c&&c.length>9||1!=N?(0,r.jsx)(a.Z,{handlePagination:function(e){"next"===e&&I(n.uid,"next",p),"prev"===e&&I(n.uid,"prev",p)},page:N,setPage:b,isDisabled:x}):""]})})})}}},function(n){n.O(0,[942,736,774,888,179],(function(){return e=4845,n(n.s=e);var e}));var e=n.O();_N_E=e}]);