(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),i=(r(0),r(96)),a={id:"custom",title:"web -> custom:",sidebar_label:"custom"},c={unversionedId:"web_schema/custom",id:"web_schema/custom",isDocsHomePage:!1,title:"web -> custom:",description:"In its current form [ProfileIO] generates website by rendering custom section after rendering all the other sections. The order of the contents in custom section will follow the order in which they are entered.",source:"@site/docs/web_schema/custom.md",slug:"/web_schema/custom",permalink:"/profileio/docs/web_schema/custom",editUrl:"https://github.com/acrlakshman/profileio/edit/master/docs/docs/web_schema/custom.md",version:"current",sidebar_label:"custom",sidebar:"docs",previous:{title:"web -> gallery:",permalink:"/profileio/docs/web_schema/gallery"},next:{title:"Schema for resume",permalink:"/profileio/docs/resume_schema/overview"}},l=[],s={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In its current form ","[ProfileIO]"," generates website by rendering ",Object(i.b)("inlineCode",{parentName:"p"},"custom")," section after rendering all the other sections. The order of the contents in ",Object(i.b)("em",{parentName:"p"},"custom")," section will follow the order in which they are entered."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'custom:\n  # Since "value" is given, this section will be rendered in the homepage with the content of "value".\n  # Since "webPage" is provided, this will also be rendered as another page under the value of "slug".\n  - label: Blog Posts                          # required\n    value: "View blog posts [here](blog)"      # optional\n    webPage:                                   # optional\n      slug: blog\n      detail: custom/blog.md\n    render: true                               # required\n\n  # Since "value" is not given, this is not rendered in the homepage,\n  # but rendered in the route "/blog/profileio"\n  - label: ProfileIO                           # required\n    webPage:                                   # optional\n      slug: blog/profileio\n      detail: custom/sample-code-snippets-2.md\n    render: true                               # required\n\n  # rendered in the homepage\n  - label: Few Random Points About ProfileIO   # required\n    value: custom/sample-code-snippets-1.md    # optional\n    render: true                               # required\n')))}u.isMDXComponent=!0},96:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,b=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return r?o.a.createElement(b,c(c({ref:t},s),{},{components:r})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);