(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[339],{238:function(e,i,n){"use strict";n.d(i,{Z:function(){return s}});var a=n(7462),r=n(8442);function s(e,i={},n){return(0,r.Z)(e)?i:(0,a.Z)({},i,{ownerState:(0,a.Z)({},i.ownerState,n)})}},8968:function(e,i,n){"use strict";n.d(i,{Z:function(){return k}});var a=n(3366),r=n(7462),s=n(7294),o=n(6010);var t=e=>{const i=s.useRef({});return s.useEffect((()=>{i.current=e})),i.current},c=n(6087),l=n(3620);function m(e){return(0,l.Z)("MuiBadge",e)}var d=(0,c.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopLeft","anchorOriginTopRight","anchorOriginBottomLeft","anchorOriginBottomRight","invisible"]),h=n(8320),p=n(7192),g=n(238);var u=n(5893);const v=["anchorOrigin","classes","badgeContent","component","children","className","components","componentsProps","invisible","max","showZero","variant"];var x=s.forwardRef((function(e,i){const{anchorOrigin:n={vertical:"top",horizontal:"right"},classes:s,component:c,children:l,className:d,components:x={},componentsProps:f={},max:j=99,showZero:b=!1,variant:N="standard"}=e,Z=(0,a.Z)(e,v),{anchorOrigin:O,badgeContent:y,max:z,variant:k,displayValue:R,invisible:w}=function(e){const{anchorOrigin:i={vertical:"top",horizontal:"right"},badgeContent:n,invisible:a,max:r=99,showZero:s=!1,variant:o="standard"}=e,c=t({anchorOrigin:i,badgeContent:n,max:r,variant:o});let l=a;null==a&&(0===n&&!s||null==n&&"dot"!==o)&&(l=!0);const{anchorOrigin:m=i,badgeContent:d,max:h=r,variant:p=o}=l?c:e;let g="";return"dot"!==p&&(g=d&&Number(d)>h?`${h}+`:d),{anchorOrigin:m,badgeContent:d,invisible:l,max:h,variant:p,displayValue:g}}((0,r.Z)({},e,{anchorOrigin:n,max:j,variant:N})),C=(0,r.Z)({},e,{anchorOrigin:O,badgeContent:y,classes:s,invisible:w,max:z,variant:k,showZero:b}),P=(e=>{const{variant:i,anchorOrigin:n,invisible:a,classes:r}=e,s={root:["root"],badge:["badge",i,`anchorOrigin${(0,h.Z)(n.vertical)}${(0,h.Z)(n.horizontal)}`,a&&"invisible"]};return(0,p.Z)(s,m,r)})(C),$=c||x.Root||"span",B=(0,g.Z)($,(0,r.Z)({},Z,f.root),C),S=x.Badge||"span",_=(0,g.Z)(S,f.badge,C);return(0,u.jsxs)($,(0,r.Z)({},B,{ref:i},Z,{className:(0,o.Z)(P.root,B.className,d),children:[l,(0,u.jsx)(S,(0,r.Z)({},_,{className:(0,o.Z)(P.badge,_.className),children:R}))]}))})),f=n(2151),j=n(7623),b=n(6285),N=n(8216);const Z=["anchorOrigin","component","components","componentsProps","overlap","color","invisible","badgeContent","showZero","variant"],O=(0,r.Z)({},d,(0,c.Z)("MuiBadge",["colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])),y=(0,f.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(e,i)=>i.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),z=(0,f.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(e,i)=>{const{ownerState:n}=e;return[i.badge,i[n.variant],i[`anchorOrigin${(0,N.Z)(n.anchorOrigin.vertical)}${(0,N.Z)(n.anchorOrigin.horizontal)}${(0,N.Z)(n.overlap)}`],"default"!==n.color&&i[`color${(0,N.Z)(n.color)}`],n.invisible&&i.invisible]}})((({theme:e,ownerState:i})=>(0,r.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen})},"default"!==i.color&&{backgroundColor:e.palette[i.color].main,color:e.palette[i.color].contrastText},"dot"===i.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===i.anchorOrigin.vertical&&"right"===i.anchorOrigin.horizontal&&"rectangular"===i.overlap&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${O.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===i.anchorOrigin.vertical&&"right"===i.anchorOrigin.horizontal&&"rectangular"===i.overlap&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${O.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===i.anchorOrigin.vertical&&"left"===i.anchorOrigin.horizontal&&"rectangular"===i.overlap&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${O.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===i.anchorOrigin.vertical&&"left"===i.anchorOrigin.horizontal&&"rectangular"===i.overlap&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${O.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},"top"===i.anchorOrigin.vertical&&"right"===i.anchorOrigin.horizontal&&"circular"===i.overlap&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${O.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===i.anchorOrigin.vertical&&"right"===i.anchorOrigin.horizontal&&"circular"===i.overlap&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${O.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===i.anchorOrigin.vertical&&"left"===i.anchorOrigin.horizontal&&"circular"===i.overlap&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${O.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===i.anchorOrigin.vertical&&"left"===i.anchorOrigin.horizontal&&"circular"===i.overlap&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${O.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},i.invisible&&{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})})));var k=s.forwardRef((function(e,i){var n,s;const c=(0,j.Z)({props:e,name:"MuiBadge"}),{anchorOrigin:l={vertical:"top",horizontal:"right"},component:d="span",components:h={},componentsProps:p={},overlap:g="rectangular",color:v="default",invisible:f,badgeContent:O,showZero:k=!1,variant:R="standard"}=c,w=(0,a.Z)(c,Z),C=t({anchorOrigin:l,color:v,overlap:g});let P=f;null==f&&(0===O&&!k||null==O&&"dot"!==R)&&(P=!0);const{color:$=v,overlap:B=g,anchorOrigin:S=l}=P?C:c,_=(e=>{const{color:i,anchorOrigin:n,overlap:a,classes:s={}}=e;return(0,r.Z)({},s,{badge:(0,o.Z)(s.badge,m(`anchorOrigin${(0,N.Z)(n.vertical)}${(0,N.Z)(n.horizontal)}${(0,N.Z)(a)}`),m(`overlap${(0,N.Z)(a)}`),"default"!==i&&[m(`color${(0,N.Z)(i)}`),s[`color${(0,N.Z)(i)}`]])})})((0,r.Z)({},c,{anchorOrigin:S,invisible:P,color:$,overlap:B}));return(0,u.jsx)(x,(0,r.Z)({anchorOrigin:S,invisible:f,badgeContent:O,showZero:k,variant:R},w,{components:(0,r.Z)({Root:y,Badge:z},h),componentsProps:{root:(0,r.Z)({},p.root,(0,b.Z)(h.Root)&&{as:d,ownerState:(0,r.Z)({},null==(n=p.root)?void 0:n.ownerState,{color:$,overlap:B})}),badge:(0,r.Z)({},p.badge,(0,b.Z)(h.Badge)&&{ownerState:(0,r.Z)({},null==(s=p.badge)?void 0:s.ownerState,{color:$,overlap:B})})},classes:_,ref:i}))}))},6285:function(e,i,n){"use strict";var a=n(8442);i.Z=e=>!e||!(0,a.Z)(e)},3442:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/premium",function(){return n(1829)}])},1829:function(e,i,n){"use strict";n.r(i);var a=n(5893),r=(n(7294),n(5443)),s=n(1163),o=n(1681),t=n(3300);i.default=function(){var e=(0,s.useRouter)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.default,{children:(0,a.jsx)("title",{children:"Premium | Roomie"})}),(0,a.jsxs)("div",{className:"Premium",children:[(0,a.jsx)(o.Z,{variant:"white"}),(0,a.jsx)("div",{className:"premium-banner",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("img",{src:"/img/premium/premium-banner-guy.png",className:"banner-img",alt:""}),(0,a.jsx)("h1",{className:"banner-heading",children:"D\xedv\xe1te se u\u017e dlouho a st\xe1le jste nena\u0161li va\u0161e vysn\u011bn\xe9 spolubydlen\xed?"})]})}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"premium-shield",children:[(0,a.jsx)("p",{className:"shield-heading",children:"P\u0159ipojte se do Roomie rodiny a zvy\u0161te va\u0161e \u0161ance. "}),(0,a.jsx)("p",{className:"shield-description",children:"Z\xedskejte znak d\u016fv\u011bryhodnosti a spoustu dal\u0161\xedch v\xfdhod."})]}),(0,a.jsxs)("div",{className:"premium-info-icons",children:[(0,a.jsxs)("div",{className:"info-icon",children:[(0,a.jsx)("i",{className:"fas fa-trophy"}),(0,a.jsx)("p",{children:"Zaru\u010d\xedme, \u017ee budete v\u017edy vid\u011bt"})]}),(0,a.jsxs)("div",{className:"info-icon",children:[(0,a.jsx)("i",{className:"fas fa-clock"}),(0,a.jsx)("p",{children:"V\xfdrazn\u011b urychl\xedme va\u0161e hled\xe1n\xed"})]}),(0,a.jsxs)("div",{className:"info-icon",children:[(0,a.jsx)("i",{className:"fas fa-infinity"}),(0,a.jsx)("p",{children:"Funkce Roomie jsou pro v\xe1s neomezen\xe9"})]})]})]}),(0,a.jsxs)("div",{className:"mid-container",children:[(0,a.jsxs)("div",{className:"premium-boxes",children:[(0,a.jsxs)("div",{className:"boxes-box anon",children:[(0,a.jsx)("h2",{className:"box-heading",children:"Anonym"}),(0,a.jsxs)("ul",{className:"box-list",children:[(0,a.jsxs)("li",{className:"list-item",children:[(0,a.jsx)("i",{className:"fas fa-check item-icon"})," ",(0,a.jsx)("p",{className:"item-description",children:"K zobrazen\xed pouze prvn\xed strana inzer\xe1t\u016f"})]}),(0,a.jsxs)("li",{className:"list-item",children:[(0,a.jsx)("i",{className:"fas fa-check item-icon"})," ",(0,a.jsx)("p",{className:"item-description",children:"\u017d\xe1dn\xe9 filtry"})]})]})]}),(0,a.jsxs)("div",{className:"boxes-box premium",children:[(0,a.jsx)("h2",{className:"box-heading",children:"Roomie Premium"}),(0,a.jsxs)("ul",{className:"box-list",children:[(0,a.jsxs)("li",{className:"list-item",children:[(0,a.jsx)("i",{className:"fas fa-check item-icon"})," ",(0,a.jsx)("p",{className:"item-description",children:"Zv\xfdrazn\u011bn\xed va\u0161eho profilu"})]}),(0,a.jsxs)("li",{className:"list-item",children:[(0,a.jsx)("i",{className:"fas fa-check item-icon"})," ",(0,a.jsx)("p",{className:"item-description",children:"TOPov\xe1n\xed va\u0161ich inzer\xe1t\u016f"})]}),(0,a.jsxs)("li",{className:"list-item",children:[(0,a.jsx)("i",{className:"fas fa-check item-icon"})," ",(0,a.jsx)("p",{className:"item-description",children:"Hl\xeddac\xed pes"})]}),(0,a.jsxs)("li",{className:"list-item",children:[(0,a.jsx)("i",{className:"fas fa-check item-icon"})," ",(0,a.jsx)("p",{className:"item-description",children:"Znak d\u016fv\u011bryhodnosti"})]}),(0,a.jsxs)("li",{className:"list-item",children:[(0,a.jsx)("i",{className:"fas fa-check item-icon"})," ",(0,a.jsx)("p",{className:"item-description",children:"Prioritn\xed podpora"})]})]}),(0,a.jsx)("h2",{className:"box-price",children:"Ji\u017e brzy"})]}),(0,a.jsxs)("div",{className:"boxes-box user",children:[(0,a.jsx)("h2",{className:"box-heading",children:"U\u017eivatel"}),(0,a.jsxs)("ul",{className:"box-list",children:[(0,a.jsxs)("li",{className:"list-item",children:[(0,a.jsx)("i",{className:"fas fa-check item-icon"})," ",(0,a.jsx)("p",{className:"item-description",children:"Pln\xe1 \xfaprava profilu"})]}),(0,a.jsxs)("li",{className:"list-item",children:[(0,a.jsx)("i",{className:"fas fa-check item-icon"})," ",(0,a.jsx)("p",{className:"item-description",children:"Podpora Roomie"})]}),(0,a.jsxs)("li",{className:"list-item",children:[(0,a.jsx)("i",{className:"fas fa-check item-icon"})," ",(0,a.jsx)("p",{className:"item-description",children:"Ukl\xe1d\xe1n\xed do obl\xedben\xfdch"})]}),(0,a.jsxs)("li",{className:"list-item",children:[(0,a.jsx)("i",{className:"fas fa-check item-icon"})," ",(0,a.jsx)("p",{className:"item-description",children:"5 \u017e\xe1dost\xed denn\u011b"})]}),(0,a.jsxs)("li",{className:"list-item",children:[(0,a.jsx)("i",{className:"fas fa-check item-icon"})," ",(0,a.jsx)("p",{className:"item-description",children:"70 inzer\xe1t\u016f denn\u011b"})]})]}),(0,a.jsx)("h2",{className:"box-price",children:"ZDARMA"}),(0,a.jsx)("button",{onClick:function(){return e.push("/login")},className:"main-btn box-btn",children:"P\u0159ihl\xe1sit se"})]})]}),(0,a.jsxs)("section",{className:"premium-section",children:[(0,a.jsxs)("div",{className:"section-text",children:[(0,a.jsx)("h2",{children:"Spolubydlen\xed jako cesta z krize?"}),(0,a.jsxs)("p",{className:"text-description",children:[(0,a.jsx)("b",{children:"Krize bydlen\xed"})," je jednou z nejv\u011bt\u0161\xedch hrozeb sou\u010dasnosti. Nejsou zapln\u011bn\xe9 pouze koleje, ale i byty - a to nejen v centru Prahy. V\u011b\u0159\xedme, \u017ee jednou ze sou\u010dasn\xfdch cest, kter\xe1 \u0161et\u0159\xed pen\xedze a zaji\u0161\u0165uje d\u016fle\u017eitou \u017eivotn\xed pot\u0159ebu je ",(0,a.jsx)("b",{children:"spolubydlen\xed. "}),"Roomie je modern\xed \u0159e\u0161en\xed pro v\u0161echny, kte\u0159\xed cht\u011bj\xed naj\xedt ",(0,a.jsx)("b",{children:"spolubydlen\xed rychle"}),", bezpe\u010dn\u011b a efektivn\u011b."]})]}),(0,a.jsx)("img",{src:"/img/premium/section-img1.png",alt:"",className:"section-img"})]}),(0,a.jsxs)("section",{className:"premium-section left",children:[(0,a.jsxs)("div",{className:"section-text",children:[(0,a.jsx)("h2",{children:"Hled\xe1n\xed je p\u0159\xedli\u0161 n\xe1ro\u010dn\xe9?"}),(0,a.jsxs)("p",{className:"text-description",children:[(0,a.jsx)("b",{children:"Nedostatek ubytov\xe1n\xed"})," pro mlad\xe9 - pracuj\xedc\xed a studuj\xedc\xed, se v\xfdrazn\u011b prohlubuje. Podle odborn\xedk\u016f p\u0159inese rok 2022 pr\u016fm\u011brn\xfd r\u016fst pra\u017esk\xfdch n\xe1jm\u016f ",(0,a.jsx)("b",{children:"a\u017e o 20 %. "}),"V ostatn\xedch m\u011bstech ",(0,a.jsx)("b",{children:"a\u017e o 10 %. "})," A to nepo\u010d\xedt\xe1me energie. \u0158e\u0161en\xedm m\u016f\u017ee b\xfdt spolubydlen\xed. V Roomie se sna\u017e\xedme usnadnit hled\xe1n\xed spolubydlen\xed a propojit tak u\u017eivatele podle jejich preferenc\xed.",(0,a.jsx)("b",{children:"Ka\u017ed\xfd m\xe1 pr\xe1vo si vybrat"})," kde a s k\xfdm chce bydlet."]})]}),(0,a.jsx)("img",{src:"/img/premium/section-img2.png",alt:"",className:"section-img"})]})]}),(0,a.jsx)(t.Z,{})]})]})}}},function(e){e.O(0,[942,774,888,179],(function(){return i=3442,e(e.s=i);var i}));var i=e.O();_N_E=i}]);