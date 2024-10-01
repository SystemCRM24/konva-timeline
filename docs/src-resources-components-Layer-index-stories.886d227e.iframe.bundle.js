(self.webpackChunk_melfore_konva_timeline=self.webpackChunk_melfore_konva_timeline||[]).push([[427],{"./src/resources/components/Layer/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_konva__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-konva/es/ReactKonva.js"),_timeline_TimelineContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/timeline/TimelineContext.tsx"),_Header__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/resources/components/Header/index.tsx");function cov_1lrv30s158(){var path="/home/runner/work/konva-timeline/konva-timeline/src/resources/components/Layer/index.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/konva-timeline/konva-timeline/src/resources/components/Layer/index.tsx",statementMap:{0:{start:{line:8,column:23},end:{line:23,column:1}},1:{start:{line:11,column:6},end:{line:11,column:26}},2:{start:{line:12,column:2},end:{line:22,column:6}},3:{start:{line:13,column:19},end:{line:13,column:49}},4:{start:{line:14,column:19},end:{line:14,column:45}},5:{start:{line:15,column:4},end:{line:21,column:7}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:8,column:23},end:{line:8,column:24}},loc:{start:{line:8,column:29},end:{line:23,column:1}},line:8},1:{name:"(anonymous_1)",decl:{start:{line:12,column:69},end:{line:12,column:70}},loc:{start:{line:12,column:90},end:{line:22,column:3}},line:12}},branchMap:{0:{loc:{start:{line:14,column:19},end:{line:14,column:45}},type:"cond-expr",locations:[{start:{line:14,column:33},end:{line:14,column:37}},{start:{line:14,column:40},end:{line:14,column:45}}],line:14}},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0},b:{0:[0,0]},inputSourceMap:{version:3,file:void 0,names:["React","Layer","useTimelineContext","ResourceHeader","ResourcesLayer","resources","createElement","map","resource","index","isLast","length","header","key","id"],sourceRoot:void 0,sources:["/home/runner/work/konva-timeline/konva-timeline/src/resources/components/Layer/index.tsx"],sourcesContent:['import React, { FC } from "react";\nimport { Layer } from "react-konva";\n\nimport { useTimelineContext } from "../../../timeline/TimelineContext";\nimport ResourceHeader from "../Header";\n\ninterface ResourcesLayerProps {}\n\n/**\n * This component renders a Konva layer containing one header for each resource (`ResourceHeader`).\n */\nconst ResourcesLayer: FC<ResourcesLayerProps> = () => {\n  const { resources } = useTimelineContext();\n\n  return (\n    <Layer>\n      {resources.map((resource, index) => {\n        const isLast = index === resources.length - 1;\n        const header = index === 0 ? true : false;\n\n        return (\n          <ResourceHeader\n            key={`resource-${resource.id}`}\n            index={index}\n            isLast={isLast}\n            resource={resource}\n            header={header}\n          />\n        );\n      })}\n    </Layer>\n  );\n};\n\nexport default ResourcesLayer;\n'],mappings:"AAAA,OAAOA,KAAK,MAAc,OAAO;AACjC,SAASC,KAAK,QAAQ,aAAa;AAEnC,SAASC,kBAAkB,QAAQ,mCAAmC;AACtE,OAAOC,cAAc,MAAM,WAAW;AAItC;AACA;AACA;AACA,MAAMC,cAAuC,GAAGA,CAAA,KAAM;EACpD,MAAM;IAAEC;EAAU,CAAC,GAAGH,kBAAkB,CAAC,CAAC;EAE1C,oBACEF,KAAA,CAAAM,aAAA,CAACL,KAAK,QACHI,SAAS,CAACE,GAAG,CAAC,CAACC,QAAQ,EAAEC,KAAK,KAAK;IAClC,MAAMC,MAAM,GAAGD,KAAK,KAAKJ,SAAS,CAACM,MAAM,GAAG,CAAC;IAC7C,MAAMC,MAAM,GAAGH,KAAK,KAAK,CAAC,GAAG,IAAI,GAAG,KAAK;IAEzC,oBACET,KAAA,CAAAM,aAAA,CAACH,cAAc;MACbU,GAAG,EAAE,YAAYL,QAAQ,CAACM,EAAE,EAAG;MAC/BL,KAAK,EAAEA,KAAM;MACbC,MAAM,EAAEA,MAAO;MACfF,QAAQ,EAAEA,QAAS;MACnBI,MAAM,EAAEA;IAAO,CAChB,CAAC;EAEN,CAAC,CACI,CAAC;AAEZ,CAAC;AAED,eAAeR,cAAc",ignoreList:[]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"3985292790019af0021fecec77c2996e7ea686fb"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"3985292790019af0021fecec77c2996e7ea686fb"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_1lrv30s158=function(){return actualCoverage},actualCoverage}cov_1lrv30s158(),cov_1lrv30s158().s[0]++;__webpack_exports__.A=()=>{cov_1lrv30s158().f[0]++;const{resources:resources}=(cov_1lrv30s158().s[1]++,(0,_timeline_TimelineContext__WEBPACK_IMPORTED_MODULE_2__._)());return cov_1lrv30s158().s[2]++,react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_konva__WEBPACK_IMPORTED_MODULE_1__.Wd,null,resources.map(((resource,index)=>{cov_1lrv30s158().f[1]++;const isLast=(cov_1lrv30s158().s[3]++,index===resources.length-1),header=(cov_1lrv30s158().s[4]++,0===index?(cov_1lrv30s158().b[0][0]++,!0):(cov_1lrv30s158().b[0][1]++,!1));return cov_1lrv30s158().s[5]++,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__.A,{key:`resource-${resource.id}`,index:index,isLast:isLast,resource:resource,header:header})})))};try{Layer.displayName="Layer",Layer.__docgenInfo={description:"This component renders a Konva layer containing one header for each resource (`ResourceHeader`).",displayName:"Layer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/resources/components/Layer/index.tsx#Layer"]={docgenInfo:Layer.__docgenInfo,name:"Layer",path:"src/resources/components/Layer/index.tsx#Layer"})}catch(__react_docgen_typescript_loader_error){}},"./src/resources/components/Layer/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder}});var _utils_stories_decorators_Tasks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/stories/decorators/Tasks.tsx");const meta={title:"Components/Resources/Layer",component:__webpack_require__("./src/resources/components/Layer/index.tsx").A,decorators:[_utils_stories_decorators_Tasks__WEBPACK_IMPORTED_MODULE_0__.xJ],tags:["autodocs"],argTypes:{}};__webpack_exports__.default=meta;const Primary={args:{}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/react-konva-utils/es/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Ed:function(){return Html}});var react=__webpack_require__("./node_modules/react/index.js"),client=__webpack_require__("./node_modules/react-dom/client.js"),ReactKonva=__webpack_require__("./node_modules/react-konva/es/ReactKonva.js"),dist=__webpack_require__("./node_modules/its-fine/dist/index.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Html=({children:children,groupProps:groupProps,divProps:divProps,transform:transform,transformFunc:transformFunc})=>{const Bridge=(0,dist.y3)(),groupRef=react.useRef(null),[div]=(react.useRef(),react.useState((()=>document.createElement("div")))),root=react.useMemo((()=>client.createRoot(div)),[div]),shouldTransform=null==transform||transform,handleTransform=function useEvent(fn=(()=>{})){const ref=react.useRef(fn);return ref.current=fn,react.useCallback(((...args)=>ref.current.apply(null,args)),[])}((()=>{if(shouldTransform&&groupRef.current){let attrs=groupRef.current.getAbsoluteTransform().decompose();transformFunc&&(attrs=transformFunc(attrs)),div.style.position="absolute",div.style.zIndex="10",div.style.top="0px",div.style.left="0px",div.style.transform=`translate(${attrs.x}px, ${attrs.y}px) rotate(${attrs.rotation}deg) scaleX(${attrs.scaleX}) scaleY(${attrs.scaleY})`,div.style.transformOrigin="top left"}else div.style.position="",div.style.zIndex="",div.style.top="",div.style.left="",div.style.transform="",div.style.transformOrigin="";const _a=divProps||{},{style:style}=_a,restProps=__rest(_a,["style"]);Object.assign(div.style,style),Object.assign(div,restProps)}));return react.useLayoutEffect((()=>{var _a;const group=groupRef.current;if(!group)return;const parent=null===(_a=group.getStage())||void 0===_a?void 0:_a.container();return parent?(parent.appendChild(div),shouldTransform&&(el=>{const pos=window.getComputedStyle(el).position;return!("absolute"===pos||"relative"===pos)})(parent)&&(parent.style.position="relative"),group.on("absoluteTransformChange",handleTransform),handleTransform(),()=>{var _a;group.off("absoluteTransformChange",handleTransform),null===(_a=div.parentNode)||void 0===_a||_a.removeChild(div)}):void 0}),[shouldTransform]),react.useLayoutEffect((()=>{handleTransform()}),[divProps,transformFunc]),react.useLayoutEffect((()=>{root.render(react.createElement(Bridge,null,children))})),react.useLayoutEffect((()=>()=>{setTimeout((()=>{root.unmount()}))}),[]),react.createElement(ReactKonva.YJ,Object.assign({ref:groupRef},groupProps))};__webpack_require__("./node_modules/use-image/index.js")},"./node_modules/use-image/index.js":function(module,__unused_webpack_exports,__webpack_require__){var React=__webpack_require__("./node_modules/react/index.js");module.exports=function useImage(url,crossOrigin,referrerpolicy){const statusRef=React.useRef("loading"),imageRef=React.useRef(),[_,setStateToken]=React.useState(0),oldUrl=React.useRef(),oldCrossOrigin=React.useRef(),oldReferrerPolicy=React.useRef();return oldUrl.current===url&&oldCrossOrigin.current===crossOrigin&&oldReferrerPolicy.current===referrerpolicy||(statusRef.current="loading",imageRef.current=void 0,oldUrl.current=url,oldCrossOrigin.current=crossOrigin,oldReferrerPolicy.current=referrerpolicy),React.useLayoutEffect((function(){if(url){var img=document.createElement("img");return img.addEventListener("load",onload),img.addEventListener("error",onerror),crossOrigin&&(img.crossOrigin=crossOrigin),referrerpolicy&&(img.referrerPolicy=referrerpolicy),img.src=url,function cleanup(){img.removeEventListener("load",onload),img.removeEventListener("error",onerror)}}function onload(){statusRef.current="loaded",imageRef.current=img,setStateToken(Math.random())}function onerror(){statusRef.current="failed",imageRef.current=void 0,setStateToken(Math.random())}}),[url,crossOrigin,referrerpolicy]),[imageRef.current,statusRef.current]}}}]);