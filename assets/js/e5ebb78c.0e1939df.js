"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1187],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(y,c(c({ref:t},i),{},{components:n})):r.createElement(y,c({ref:t},i))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96252:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return i},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],l={sidebar_position:3,title:"Docker Deployment",keywords:["docker-compose","Deployment"],description:"Docker Deployment"},s=void 0,p={unversionedId:"deployment/deployment-docker-compose",id:"deployment/deployment-docker-compose",isDocsHomePage:!1,title:"Docker Deployment",description:"Docker Deployment",source:"@site/docs/deployment/deployment-docker-compose.md",sourceDirName:"deployment",slug:"/deployment/deployment-docker-compose",permalink:"/docs/next/deployment/deployment-docker-compose",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/deployment/deployment-docker-compose.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Docker Deployment",keywords:["docker-compose","Deployment"],description:"Docker Deployment"},sidebar:"tutorialSidebar",previous:{title:"Binary Packages Deployment",permalink:"/docs/next/deployment/deployment-package"},next:{title:"Docker Deployment",permalink:"/docs/next/deployment/deployment-docker"}},i=[{value:"prepare",id:"prepare",children:[]},{value:"start admin and bootstrap",id:"start-admin-and-bootstrap",children:[]}],u={toc:i};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article introduces the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose")," to deploy the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway."),(0,a.kt)("h3",{id:"prepare"},"prepare"),(0,a.kt)("p",null,"First, you need to create a folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p {shenyu-bootstrap,shenyu-admin}/{conf,logs}\n")),(0,a.kt)("p",null,"Choose one as the data source. It can be ",(0,a.kt)("inlineCode",{parentName:"p"},"h2")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pg"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"h2"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sSl https://raw.githubusercontent.com/apache/incubator-shenyu/master/shenyu-dist/shenyu-docker-compose-dist/src/main/resources/stand-alone-h2/docker-compose.yaml > docker-compose.yaml\n(cd shenyu-admin/conf/ && curl -OOO https://raw.githubusercontent.com/apache/incubator-shenyu/master/shenyu-admin/src/main/resources/{application-h2.yml,logback.xml,application.yml})\n(cd shenyu-bootstrap/conf/ && curl -OOO https://raw.githubusercontent.com/apache/incubator-shenyu/master/shenyu-bootstrap/src/main/resources/{application-local.yml,logback.xml,application.yml})\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sSl https://raw.githubusercontent.com/apache/incubator-shenyu/master/shenyu-dist/shenyu-docker-compose-dist/src/main/resources/stand-alone-mysql/docker-compose.yaml > docker-compose.yaml\nmkdir -p shenyu-admin/ext-lib\n(cd shenyu-admin/ext-lib && curl -sSl https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.18/mysql-connector-java-8.0.18.jar > mysql-connector.jar)\n(cd shenyu-admin/conf/ && curl -OOO https://raw.githubusercontent.com/apache/incubator-shenyu/master/shenyu-admin/src/main/resources/{application-mysql.yml,logback.xml,application.yml})\n(cd shenyu-bootstrap/conf/ && curl -OOO https://raw.githubusercontent.com/apache/incubator-shenyu/master/shenyu-bootstrap/src/main/resources/{application-local.yml,logback.xml,application.yml})\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"pg"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sSl https://raw.githubusercontent.com/apache/incubator-shenyu/master/shenyu-dist/shenyu-docker-compose-dist/src/main/resources/stand-alone-pg/docker-compose.yaml > docker-compose.yaml\n(cd shenyu-admin/conf/ && curl -OOO https://raw.githubusercontent.com/apache/incubator-shenyu/master/shenyu-admin/src/main/resources/{application-pg.yml,logback.xml,application.yml})\n(cd shenyu-bootstrap/conf/ && curl -OOO https://raw.githubusercontent.com/apache/incubator-shenyu/master/shenyu-bootstrap/src/main/resources/{application-local.yml,logback.xml,application.yml})\n")),(0,a.kt)("h3",{id:"start-admin-and-bootstrap"},"start admin and bootstrap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up\n")))}m.isMDXComponent=!0}}]);