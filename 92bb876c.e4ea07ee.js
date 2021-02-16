(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),i=(r(0),r(96)),a={id:"getting_started",title:"Getting Started"},c={unversionedId:"getting_started",id:"getting_started",isDocsHomePage:!1,title:"Getting Started",description:"[ProfileIO]'s project structure and few details:",source:"@site/docs/getting_started.md",slug:"/getting_started",permalink:"/profileio/docs/getting_started",editUrl:"https://github.com/acrlakshman/profileio/edit/master/docs/docs/getting_started.md",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/profileio/docs/introduction"},next:{title:"Schema for website",permalink:"/profileio/docs/web_schema/overview"}},s=[{value:"Basic information",id:"basic-information",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/acrlakshman/profileio"},"ProfileIO"),"'s project structure and few details:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"profileio\n\u2502\n\u251c\u2500\u2500 _profile/               <- Folder to hold profile information\n\u2502   \u2514\u2500\u2500 profile_web.yml\n\u2502   \u2514\u2500\u2500 profile_resume.yml\n\u2502   \u2514\u2500\u2500 images/             <- Place images here\n\u2502   \u2514\u2500\u2500 files/              <- Place files here\n\u2502   \u2514\u2500\u2500 *.md\n\u2502\n\u251c\u2500\u2500 resume/                 <- sub-project to generate resume from details in profile_resume.yml\n\u2502\n\u251c\u2500\u2500 src/\n\u2502   \u2514\u2500\u2500 auxiliaries         <- Helper functions\n\u2502   \u2514\u2500\u2500 components\n\u2502       \u2514\u2500\u2500 themes          <- Theme specific components\n\u2502           \u2514\u2500\u2500 basic\n\u2502   \u2514\u2500\u2500 icons\n\u2502   \u2514\u2500\u2500 preprocessors\n\u2502   \u2514\u2500\u2500 reducers\n\u2502   \u2514\u2500\u2500 types\n\u2502\n\u251c\u2500\u2500 scripts/\n\u2502\n\u251c\u2500\u2500 docs/                   <- ProfileIO documentation\n")),Object(i.b)("h2",{id:"basic-information"},"Basic information"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\ud83d\udc49 ",Object(i.b)("a",{parentName:"li",href:"/profileio/docs/#how-to-start"},"How to start?")),Object(i.b)("li",{parentName:"ul"},"\ud83d\udc49 ",Object(i.b)("a",{parentName:"li",href:"/profileio/docs/#how-it-works"},"How it works?")),Object(i.b)("li",{parentName:"ul"},"\ud83d\udc49 ",Object(i.b)("a",{parentName:"li",href:"/profileio/docs/#which-branch-to-use"},"Which branch to use?"))))}p.isMDXComponent=!0},96:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(a,".").concat(m)]||u[m]||f[m]||i;return r?o.a.createElement(d,c(c({ref:t},l),{},{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);