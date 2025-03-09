import{j as s,m as l,r as d,I as h}from"./vendor-react-CLrXJEul.js";const b="_header_1o5zz_131",v="_logo_1o5zz_146",k="_burger_1o5zz_172",N="_closing_1o5zz_192",r={header:b,"logo-container":"_logo-container_1o5zz_146",logo:v,"header-btn":"_header-btn_1o5zz_169",burger:k,"menu-burger":"_menu-burger_1o5zz_175",closing:N,"menu-burger-logo":"_menu-burger-logo_1o5zz_215","menu-burger-cross":"_menu-burger-cross_1o5zz_237","menu-burger-navlinks":"_menu-burger-navlinks_1o5zz_243"},p="_anchor_1lsji_53",g={anchor:p,"secondary-btn":"_secondary-btn_1lsji_131"};function f({children:e,to:o,href:a,onClick:n}){return a?s.jsx("a",{className:g["secondary-btn"],href:a,target:"_blank",rel:"noopener noreferrer",onClick:n,children:e}):s.jsx(l.Link,{className:`${g["secondary-btn"]} ${g.anchor}`,to:o,spy:!0,smooth:!0,duration:1e3,offset:-80,easing:"easeInOutQuart",onClick:n,children:e})}const y="_navlinks_12x67_131",z="_navlinks__list_12x67_136",_={navlinks:y,navlinks__list:z},$=[{title:"À Propos",to:"about-container",offset:-80},{title:"Skills",to:"soft-skills-container",offset:-80},{title:"Projets",to:"projects-container",offset:-80}],j=({className:e,onNavClick:o})=>s.jsx("nav",{className:`${_.navlinks} ${e||""}`,children:s.jsx("ul",{className:_.navlinks__list,children:$.map(({title:a,to:n,offset:c})=>s.jsx("li",{className:_.navlinks__list__item,children:s.jsx(l.Link,{className:"anchor",to:n,spy:!0,smooth:!0,duration:1e3,offset:c,easing:"easeInOutQuart",onClick:o,children:a})},a))})}),E=()=>{const[e,o]=d.useState(!1),[a,n]=d.useState(!1),c=()=>{e?(o(!1),setTimeout(()=>n(!1),1e3)):(o(!0),n(!0))},i=u=>{u==null||u.preventDefault(),o(!1)};return s.jsxs("header",{className:r.header,children:[s.jsx("div",{className:r["logo-container"],children:s.jsx("figure",{className:r.logo,children:s.jsx(l.Link,{className:"anchor",to:"banner",spy:!0,smooth:!0,duration:1e3,offset:-80,easing:"easeInOutQuart",children:s.jsx("img",{src:"/src/assets/svg/logo.svg",alt:"Logo",draggable:"false"})})})}),s.jsx(j,{onNavClick:i}),s.jsx("div",{className:r["header-btn"],children:s.jsx(f,{to:"footer",children:"Contacter"})}),s.jsx("figure",{className:r.burger,onClick:c,children:s.jsx("img",{src:"/src/assets/svg/burger.svg",alt:"Burger",draggable:"false"})}),a&&s.jsxs("div",{className:`${r["menu-burger"]} ${e?"":r.closing}`,children:[s.jsx("figure",{className:r["menu-burger-logo"],children:s.jsx(l.Link,{className:"anchor",to:"banner",spy:!0,smooth:!0,duration:1e3,offset:-80,easing:"easeInOutQuart",onClick:i,children:s.jsx("img",{src:"/src/assets/svg/logo.svg",alt:"Logo",draggable:"false"})})}),s.jsx("figure",{className:r["menu-burger-cross"],onClick:c,children:s.jsx("img",{src:"/src/assets/svg/cross.svg",alt:"Cross",draggable:"false"})}),s.jsx(j,{className:r["menu-burger-navlinks"],onNavClick:i}),s.jsx("div",{className:r["menu-burger-btn"],children:s.jsx(f,{to:"footer",onClick:i,children:"Contacter"})})]})]})},I="_anchor_knm2l_53",m={anchor:I,"main-btn":"_main-btn_knm2l_131"};function F({children:e,to:o,href:a,onClick:n}){return a?s.jsx("a",{className:m["main-btn"],href:a,target:"_blank",rel:"noopener noreferrer",onClick:n,children:e}):s.jsx(l.Link,{className:`${m["main-btn"]} ${m.anchor}`,to:o,spy:!0,smooth:!0,duration:1e3,offset:-80,easing:"easeInOutQuart",onClick:n,children:e})}const L={"up-arrow":"_up-arrow_1gq4j_131"};function R(){return s.jsx("figure",{className:L["up-arrow"],children:s.jsx(l.Link,{className:"anchor",to:"banner",spy:!0,smooth:!0,duration:1e3,offset:-80,easing:"easeInOutQuart",children:s.jsx("img",{src:"/src/assets/svg/up_arrow.svg",alt:"Flèche vers le haut",draggable:"false"})})})}const w="_separator_39lia_131",C="_line_39lia_140",x={separator:w,line:C};function B({id:e}){return s.jsx("section",{className:x.separator,id:e,children:s.jsx("div",{className:x.line})})}const O="_footer_vebo0_131",S="_logo_vebo0_150",Q="_socials_vebo0_164",t={footer:O,"footer-text":"_footer-text_vebo0_138",logo:S,socials:Q};function U(){const e=s.jsxs("p",{className:t["current-year"],children:["© ",new Date().getFullYear()," - ",s.jsx("span",{children:"Jules LARUE"})]});return s.jsxs("footer",{className:t.footer,id:"footer",children:[s.jsxs("div",{className:t["footer-text"],children:[e,s.jsx("a",{href:"mailto:jlarue1105@gmail.com",children:"jlarue1105@gmail.com"})]}),s.jsx("figure",{className:t.logo,children:s.jsx(l.Link,{className:"anchor",to:"banner",spy:!0,smooth:!0,duration:1e3,offset:-80,easing:"easeInOutQuart",children:s.jsx("img",{src:"/src/assets/svg/logo.svg",alt:"Logo",className:t.logoIcon})})}),s.jsxs("div",{className:t.socials,children:[s.jsx("a",{href:"https://www.linkedin.com/in/jules-larue-058a3b332/",target:"_blank",rel:"noreferrer",children:s.jsx(h,{icon:"mdi:linkedin",className:t["socials-icons"]})}),s.jsx("a",{href:"https://github.com/SraaaamX",target:"_blank",rel:"noreferrer",children:s.jsx(h,{icon:"mdi:github",className:t["socials-icons"]})})]})]})}export{U as F,E as H,F as M,B as S,R as U};
