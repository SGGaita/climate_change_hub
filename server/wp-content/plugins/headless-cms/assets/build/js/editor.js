!function(n){var r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=4)}({4:function(e,t,n){"use strict";n.r(t);n(5)},5:function(e,t){var n=wp.plugins.registerPlugin,d=wp.i18n.__,r=wp.editPost,s=r.PluginSidebar,p=r.PluginSidebarMoreMenuItem,f=wp.element.Fragment;n("plugin-sidebar-expanded-test",{render:function(){var e,t,n,r,i;if("1"!==(null===(e=frontendConfig)||void 0===e?void 0:e.isPreviewLinkActive))return null;var o=null===(t=frontendConfig)||void 0===t?void 0:t.frontendSiteUrl.replace(/\/$/,""),a=wp.data.select("core/editor").getCurrentPost(),l=wp.data.select("core/editor").getEditedPostAttribute("status"),u="".concat(o,"/api/preview/?postType=").concat(null!==(n=null==a?void 0:a.type)&&void 0!==n?n:"","&postId=").concat(null!==(r=null==a?void 0:a.id)&&void 0!==r?r:""),c=React.createElement("a",{href:u,target:"wp-preview-".concat(null!==(i=null==a?void 0:a.id)&&void 0!==i?i:""),style:{margin:"20px",boxShadow:"0 0 0 1.5px #ccc"},className:"components-button editor-post-preview is-button is-default is-large"},d("Preview on frontend","headless-cms"),React.createElement("span",{className:"screen-reader-text"},d("(opens in a new tab)","headless-cms")));return React.createElement(f,null,React.createElement(p,{target:"sidebar-name",icon:"visibility",title:"Frontend Preview"},d("Frontend Preview","headless-cms")),React.createElement(s,{name:"sidebar-name",icon:"visibility",title:"Frontend Preview"},"draft"===l||"publish"===l?c:""))}})}});