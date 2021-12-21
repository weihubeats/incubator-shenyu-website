"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[9238],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,y=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56665:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],p={sidebar_position:2,title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",keywords:["\u4e8c\u8fdb\u5236","\u90e8\u7f72"],description:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72"},l=void 0,c={unversionedId:"deployment/deployment-package",id:"deployment/deployment-package",isDocsHomePage:!1,title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",description:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/deployment/deployment-package.md",sourceDirName:"deployment",slug:"/deployment/deployment-package",permalink:"/zh/docs/next/deployment/deployment-package",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/deployment/deployment-package.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",keywords:["\u4e8c\u8fdb\u5236","\u90e8\u7f72"],description:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72"},sidebar:"tutorialSidebar",previous:{title:"\u5355\u673a\u5feb\u901f\u90e8\u7f72",permalink:"/zh/docs/next/deployment/deployment-quick"},next:{title:"Docker Deployment",permalink:"/zh/docs/next/deployment/deployment-docker-compose"}},u=[{value:"\u542f\u52a8 Apache ShenYu Admin",id:"\u542f\u52a8-apache-shenyu-admin",children:[]},{value:"\u542f\u52a8 Apache ShenYu Bootstrap",id:"\u542f\u52a8-apache-shenyu-bootstrap",children:[]}],s={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4f7f\u7528\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72 ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002"),(0,i.kt)("h3",{id:"\u542f\u52a8-apache-shenyu-admin"},"\u542f\u52a8 Apache ShenYu Admin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-2.4.1-admin-bin.tar.gz"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u89e3\u538b\u7f29 ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-2.4.1-admin-bin.tar.gz"),"\u3002 \u8fdb\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," \u76ee\u5f55\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"h2")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\uff1a"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> windows: start.bat --spring.profiles.active = h2\n\n> linux: ./start.sh --spring.profiles.active = h2\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"MySQL")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\uff0c \u8fdb\u5165 ",(0,i.kt)("inlineCode",{parentName:"li"},"/conf")," \u76ee\u5f55\uff0c\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"li"},"application.yaml")," \u4e2d ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql")," \u7684\u914d\u7f6e\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> windows: start.bat \n\n> linux: ./start.sh \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"PostgreSql")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\uff0c \u8fdb\u5165 ",(0,i.kt)("inlineCode",{parentName:"li"},"/conf")," \u76ee\u5f55\uff0c\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"li"},"application.yaml")," \u4e2d ",(0,i.kt)("inlineCode",{parentName:"li"},"spring.profiles.active")," \u7684\u914d\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"pg"),"\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> windows: start.bat \n\n> linux: ./start.sh \n")),(0,i.kt)("h3",{id:"\u542f\u52a8-apache-shenyu-bootstrap"},"\u542f\u52a8 Apache ShenYu Bootstrap"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-2.4.1-bootstrap-bin.tar.gz"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u89e3\u538b\u7f29 ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-2.4.1-bootstrap-bin.tar.gz"),"\u3002 \u8fdb\u5165 bin \u76ee\u5f55\u3002"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> windwos : start.bat \n\n> linux : ./start.sh \n")))}m.isMDXComponent=!0}}]);