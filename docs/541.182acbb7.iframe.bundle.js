"use strict";(self.webpackChunk_melfore_konva_timeline=self.webpackChunk_melfore_konva_timeline||[]).push([[541],{"./src/@components/ResourceHeader/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>ResourceHeaderDocs,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_contexts_Timeline__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/@contexts/Timeline.tsx"),_utils_resources__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/@utils/resources.ts"),_konva__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/@components/@konva/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_90de2aonh(){var path="/home/runner/work/konva-timeline/konva-timeline/src/@components/ResourceHeader/index.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"df0da596aa2fb8a81a54fc64395630137499283a"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/konva-timeline/konva-timeline/src/@components/ResourceHeader/index.tsx",statementMap:{0:{start:{line:16,column:23},end:{line:36,column:1}},1:{start:{line:20,column:6},end:{line:20,column:26}},2:{start:{line:22,column:22},end:{line:22,column:80}},3:{start:{line:22,column:36},end:{line:22,column:59}},4:{start:{line:24,column:21},end:{line:24,column:65}},5:{start:{line:24,column:35},end:{line:24,column:51}},6:{start:{line:26,column:26},end:{line:26,column:78}},7:{start:{line:26,column:40},end:{line:26,column:57}},8:{start:{line:28,column:2},end:{line:35,column:4}},9:{start:{line:38,column:34},end:{line:38,column:48}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:16,column:23},end:{line:16,column:24}},loc:{start:{line:16,column:66},end:{line:36,column:1}},line:16},1:{name:"(anonymous_1)",decl:{start:{line:22,column:30},end:{line:22,column:31}},loc:{start:{line:22,column:36},end:{line:22,column:59}},line:22},2:{name:"(anonymous_2)",decl:{start:{line:24,column:29},end:{line:24,column:30}},loc:{start:{line:24,column:35},end:{line:24,column:51}},line:24},3:{name:"(anonymous_3)",decl:{start:{line:26,column:34},end:{line:26,column:35}},loc:{start:{line:26,column:40},end:{line:26,column:57}},line:26}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0},f:{0:0,1:0,2:0,3:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"df0da596aa2fb8a81a54fc64395630137499283a"});var actualCoverage=coverage[path];return cov_90de2aonh=function(){return actualCoverage},actualCoverage}cov_90de2aonh(),cov_90de2aonh().s[0]++;const ResourceHeader=({index,label})=>{cov_90de2aonh().f[0]++;const{rowHeight,theme:{color:themeColor}}=(cov_90de2aonh().s[1]++,(0,_contexts_Timeline__WEBPACK_IMPORTED_MODULE_1__.i)()),yCoordinate=(cov_90de2aonh().s[2]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(cov_90de2aonh().f[1]++,cov_90de2aonh().s[3]++,rowHeight*(index+1))),[index,rowHeight])),textOffset=(cov_90de2aonh().s[4]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(cov_90de2aonh().f[2]++,cov_90de2aonh().s[5]++,.35*rowHeight)),[rowHeight])),textYCoordinate=(cov_90de2aonh().s[6]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(cov_90de2aonh().f[3]++,cov_90de2aonh().s[7]++,rowHeight*index)),[index,rowHeight]));return cov_90de2aonh().s[8]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_konva__WEBPACK_IMPORTED_MODULE_3__.LE,{x:0,y:0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_konva__WEBPACK_IMPORTED_MODULE_3__.LE,{x:textOffset,y:textOffset,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_konva__WEBPACK_IMPORTED_MODULE_3__.V,{fill:themeColor,text:label,y:textYCoordinate})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_konva__WEBPACK_IMPORTED_MODULE_3__.vL,{points:[0,0,_utils_resources__WEBPACK_IMPORTED_MODULE_2__.O,0],stroke:themeColor,y:yCoordinate})]})};ResourceHeader.displayName="ResourceHeader";const ResourceHeaderDocs=(cov_90de2aonh().s[9]++,ResourceHeader),__WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(ResourceHeader);try{ResourceHeaderDocs.displayName="ResourceHeaderDocs",ResourceHeaderDocs.__docgenInfo={description:"",displayName:"ResourceHeaderDocs",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},id:{defaultValue:null,description:"Unique identifier of the resource",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"Label of the resource",name:"label",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"Color assigned to the resource",name:"color",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/@components/ResourceHeader/index.tsx#ResourceHeaderDocs"]={docgenInfo:ResourceHeaderDocs.__docgenInfo,name:"ResourceHeaderDocs",path:"src/@components/ResourceHeader/index.tsx#ResourceHeaderDocs"})}catch(__react_docgen_typescript_loader_error){}try{ResourceHeader.displayName="ResourceHeader",ResourceHeader.__docgenInfo={description:"This component renders a Resource header with text and delimiter line\n\nThe playground has a simulated canvas with height: 200px and width: 100%",displayName:"ResourceHeader",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},id:{defaultValue:null,description:"Unique identifier of the resource",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"Label of the resource",name:"label",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"Color assigned to the resource",name:"color",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/@components/ResourceHeader/index.tsx#ResourceHeader"]={docgenInfo:ResourceHeader.__docgenInfo,name:"ResourceHeader",path:"src/@components/ResourceHeader/index.tsx#ResourceHeader"})}catch(__react_docgen_typescript_loader_error){}},"./src/@components/ResourcesLayer/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _contexts_Timeline__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/@contexts/Timeline.tsx"),_konva__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/@components/@konva/index.tsx"),_ResourceHeader__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/@components/ResourceHeader/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_2lnbbicgvy(){var path="/home/runner/work/konva-timeline/konva-timeline/src/@components/ResourcesLayer/index.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"08af83726664dcde299a06f9bbc2438d7d5dee3b"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/konva-timeline/konva-timeline/src/@components/ResourcesLayer/index.tsx",statementMap:{0:{start:{line:13,column:48},end:{line:23,column:1}},1:{start:{line:14,column:24},end:{line:14,column:44}},2:{start:{line:16,column:2},end:{line:22,column:4}},3:{start:{line:19,column:8},end:{line:19,column:86}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:13,column:48},end:{line:13,column:49}},loc:{start:{line:13,column:54},end:{line:23,column:1}},line:13},1:{name:"(anonymous_1)",decl:{start:{line:18,column:21},end:{line:18,column:22}},loc:{start:{line:19,column:8},end:{line:19,column:86}},line:19}},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{0:0,1:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"08af83726664dcde299a06f9bbc2438d7d5dee3b"});var actualCoverage=coverage[path];return cov_2lnbbicgvy=function(){return actualCoverage},actualCoverage}cov_2lnbbicgvy(),cov_2lnbbicgvy().s[0]++;const ResourcesLayer=()=>{cov_2lnbbicgvy().f[0]++;const{resources}=(cov_2lnbbicgvy().s[1]++,(0,_contexts_Timeline__WEBPACK_IMPORTED_MODULE_1__.i)());return cov_2lnbbicgvy().s[2]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_konva__WEBPACK_IMPORTED_MODULE_2__.Rj,{children:resources.map(((resource,index)=>(cov_2lnbbicgvy().f[1]++,cov_2lnbbicgvy().s[3]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ResourceHeader__WEBPACK_IMPORTED_MODULE_3__.Z,{...resource,index},`resource-${resource.id}`))))})};ResourcesLayer.displayName="ResourcesLayer";const __WEBPACK_DEFAULT_EXPORT__=ResourcesLayer;try{ResourcesLayer.displayName="ResourcesLayer",ResourcesLayer.__docgenInfo={description:"This component renders a set of resources as a Konva Layer.\nFor each resource, a `ResourceHeader` is displayed.",displayName:"ResourcesLayer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/@components/ResourcesLayer/index.tsx#ResourcesLayer"]={docgenInfo:ResourcesLayer.__docgenInfo,name:"ResourcesLayer",path:"src/@components/ResourcesLayer/index.tsx#ResourcesLayer"})}catch(__react_docgen_typescript_loader_error){}},"./src/KonvaTimeline/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_KonvaTimeline});var react=__webpack_require__("./node_modules/react/index.js"),ReactKonva=__webpack_require__("./node_modules/react-konva/es/ReactKonva.js"),Timeline=__webpack_require__("./src/@contexts/Timeline.tsx"),logger=__webpack_require__("./src/@utils/logger.ts"),resources=__webpack_require__("./src/@utils/resources.ts"),_konva=__webpack_require__("./src/@components/@konva/index.tsx"),time_resolution=__webpack_require__("./src/@utils/time-resolution.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_23vnfwcq18(){var path="/home/runner/work/konva-timeline/konva-timeline/src/grid/Cell/index.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"0c878b414c5fcab5365ad4a7b39dd6cc705e5c0f"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/konva-timeline/konva-timeline/src/grid/Cell/index.tsx",statementMap:{0:{start:{line:14,column:17},end:{line:37,column:1}},1:{start:{line:21,column:6},end:{line:21,column:26}},2:{start:{line:23,column:15},end:{line:23,column:102}},3:{start:{line:23,column:29},end:{line:23,column:65}},4:{start:{line:25,column:20},end:{line:25,column:100}},5:{start:{line:25,column:34},end:{line:25,column:73}},6:{start:{line:27,column:15},end:{line:27,column:58}},7:{start:{line:27,column:29},end:{line:27,column:44}},8:{start:{line:29,column:2},end:{line:36,column:4}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:14,column:17},end:{line:14,column:18}},loc:{start:{line:14,column:63},end:{line:37,column:1}},line:14},1:{name:"(anonymous_1)",decl:{start:{line:23,column:23},end:{line:23,column:24}},loc:{start:{line:23,column:29},end:{line:23,column:65}},line:23},2:{name:"(anonymous_2)",decl:{start:{line:25,column:28},end:{line:25,column:29}},loc:{start:{line:25,column:34},end:{line:25,column:73}},line:25},3:{name:"(anonymous_3)",decl:{start:{line:27,column:23},end:{line:27,column:24}},loc:{start:{line:27,column:29},end:{line:27,column:44}},line:27}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},f:{0:0,1:0,2:0,3:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"0c878b414c5fcab5365ad4a7b39dd6cc705e5c0f"});var actualCoverage=coverage[path];return cov_23vnfwcq18=function(){return actualCoverage},actualCoverage}cov_23vnfwcq18(),cov_23vnfwcq18().s[0]++;const GridCell=({column,height,index})=>{cov_23vnfwcq18().f[0]++;const{blocksOffset,columnWidth,resolution:{unit:resolutionUnit},rowHeight,theme:{color:themeColor}}=(cov_23vnfwcq18().s[1]++,(0,Timeline.i)()),xPos=(cov_23vnfwcq18().s[2]++,(0,react.useMemo)((()=>(cov_23vnfwcq18().f[1]++,cov_23vnfwcq18().s[3]++,columnWidth*(index+blocksOffset))),[blocksOffset,columnWidth,index])),cellLabel=(cov_23vnfwcq18().s[4]++,(0,react.useMemo)((()=>(cov_23vnfwcq18().f[2]++,cov_23vnfwcq18().s[5]++,(0,time_resolution.kv)(column,resolutionUnit))),[column,resolutionUnit])),yPos=(cov_23vnfwcq18().s[6]++,(0,react.useMemo)((()=>(cov_23vnfwcq18().f[3]++,cov_23vnfwcq18().s[7]++,.8*rowHeight)),[rowHeight]));return cov_23vnfwcq18().s[8]++,(0,jsx_runtime.jsxs)(_konva.LE,{children:[(0,jsx_runtime.jsx)(_konva.vL,{x:xPos,y:yPos,points:[0,0,0,height],stroke:"gray",strokeWidth:1}),(0,jsx_runtime.jsx)(_konva.oJ,{fill:"transparent",x:xPos-15,y:yPos-10,height:15,width:30}),(0,jsx_runtime.jsx)(_konva.V,{fill:themeColor,x:xPos-15,y:yPos-8,text:cellLabel})]},`timeslot-${index}`)};GridCell.displayName="GridCell";const Cell=(0,react.memo)(GridCell);try{GridCell.displayName="GridCell",GridCell.__docgenInfo={description:"",displayName:"GridCell",props:{column:{defaultValue:null,description:"",name:"column",required:!0,type:{name:"Interval"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/grid/Cell/index.tsx#GridCell"]={docgenInfo:GridCell.__docgenInfo,name:"GridCell",path:"src/grid/Cell/index.tsx#GridCell"})}catch(__react_docgen_typescript_loader_error){}function cov_2d7dtjickq(){var path="/home/runner/work/konva-timeline/konva-timeline/src/grid/Cells/index.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"1abf47465568e4dbb3d689e3da119aac59497e91"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/konva-timeline/konva-timeline/src/grid/Cells/index.tsx",statementMap:{0:{start:{line:11,column:18},end:{line:21,column:1}},1:{start:{line:12,column:32},end:{line:12,column:52}},2:{start:{line:14,column:2},end:{line:20,column:4}},3:{start:{line:17,column:8},end:{line:17,column:88}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:11,column:18},end:{line:11,column:19}},loc:{start:{line:11,column:50},end:{line:21,column:1}},line:11},1:{name:"(anonymous_1)",decl:{start:{line:16,column:29},end:{line:16,column:30}},loc:{start:{line:17,column:8},end:{line:17,column:88}},line:17}},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{0:0,1:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"1abf47465568e4dbb3d689e3da119aac59497e91"});var actualCoverage=coverage[path];return cov_2d7dtjickq=function(){return actualCoverage},actualCoverage}cov_2d7dtjickq(),cov_2d7dtjickq().s[0]++;const GridCells=({height})=>{cov_2d7dtjickq().f[0]++;const{visibleTimeBlocks}=(cov_2d7dtjickq().s[1]++,(0,Timeline.i)());return cov_2d7dtjickq().s[2]++,(0,jsx_runtime.jsx)(_konva.LE,{children:visibleTimeBlocks.map(((column,index)=>(cov_2d7dtjickq().f[1]++,cov_2d7dtjickq().s[3]++,(0,jsx_runtime.jsx)(Cell,{column,height,index},`cell-${index}`))))})};GridCells.displayName="GridCells";const Cells=(0,react.memo)(GridCells);try{GridCells.displayName="GridCells",GridCells.__docgenInfo={description:"",displayName:"GridCells",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/grid/Cells/index.tsx#GridCells"]={docgenInfo:GridCells.__docgenInfo,name:"GridCells",path:"src/grid/Cells/index.tsx#GridCells"})}catch(__react_docgen_typescript_loader_error){}function cov_2fpcw3lv4z(){var path="/home/runner/work/konva-timeline/konva-timeline/src/grid/Row/index.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"3b8b53e36071b595447db422416f37d2e2d0f17f"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/konva-timeline/konva-timeline/src/grid/Row/index.tsx",statementMap:{0:{start:{line:10,column:16},end:{line:20,column:1}},1:{start:{line:15,column:6},end:{line:15,column:26}},2:{start:{line:17,column:15},end:{line:17,column:73}},3:{start:{line:17,column:29},end:{line:17,column:52}},4:{start:{line:19,column:2},end:{line:19,column:95}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:10,column:16},end:{line:10,column:17}},loc:{start:{line:10,column:45},end:{line:20,column:1}},line:10},1:{name:"(anonymous_1)",decl:{start:{line:17,column:23},end:{line:17,column:24}},loc:{start:{line:17,column:29},end:{line:17,column:52}},line:17}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0,1:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"3b8b53e36071b595447db422416f37d2e2d0f17f"});var actualCoverage=coverage[path];return cov_2fpcw3lv4z=function(){return actualCoverage},actualCoverage}cov_2fpcw3lv4z(),cov_2fpcw3lv4z().s[0]++;const GridRow=({index})=>{cov_2fpcw3lv4z().f[0]++;const{drawRange:{start:drawRangeStart,end:drawRangeEnd},rowHeight,theme:{color:themeColor}}=(cov_2fpcw3lv4z().s[1]++,(0,Timeline.i)()),yPos=(cov_2fpcw3lv4z().s[2]++,(0,react.useMemo)((()=>(cov_2fpcw3lv4z().f[1]++,cov_2fpcw3lv4z().s[3]++,rowHeight*(index+1))),[index,rowHeight]));return cov_2fpcw3lv4z().s[4]++,(0,jsx_runtime.jsx)(_konva.vL,{points:[drawRangeStart,yPos,drawRangeEnd,yPos],stroke:themeColor})};GridRow.displayName="GridRow";const Row=(0,react.memo)(GridRow);try{GridRow.displayName="GridRow",GridRow.__docgenInfo={description:"",displayName:"GridRow",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/grid/Row/index.tsx#GridRow"]={docgenInfo:GridRow.__docgenInfo,name:"GridRow",path:"src/grid/Row/index.tsx#GridRow"})}catch(__react_docgen_typescript_loader_error){}function cov_1xnfipk9jc(){var path="/home/runner/work/konva-timeline/konva-timeline/src/grid/Rows/index.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"e00fb1afd5795118d161ab4e33a47c4ae19e0619"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/konva-timeline/konva-timeline/src/grid/Rows/index.tsx",statementMap:{0:{start:{line:7,column:17},end:{line:17,column:1}},1:{start:{line:8,column:24},end:{line:8,column:44}},2:{start:{line:10,column:2},end:{line:16,column:4}},3:{start:{line:13,column:8},end:{line:13,column:61}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:7,column:17},end:{line:7,column:18}},loc:{start:{line:7,column:23},end:{line:17,column:1}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:12,column:21},end:{line:12,column:22}},loc:{start:{line:13,column:8},end:{line:13,column:61}},line:13}},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{0:0,1:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"e00fb1afd5795118d161ab4e33a47c4ae19e0619"});var actualCoverage=coverage[path];return cov_1xnfipk9jc=function(){return actualCoverage},actualCoverage}cov_1xnfipk9jc(),cov_1xnfipk9jc().s[0]++;const GridRows=()=>{cov_1xnfipk9jc().f[0]++;const{resources}=(cov_1xnfipk9jc().s[1]++,(0,Timeline.i)());return cov_1xnfipk9jc().s[2]++,(0,jsx_runtime.jsx)(_konva.LE,{children:resources.map((({id},index)=>(cov_1xnfipk9jc().f[1]++,cov_1xnfipk9jc().s[3]++,(0,jsx_runtime.jsx)(Row,{index},`grid-row-line-${id}`))))})};GridRows.displayName="GridRows";const Rows=(0,react.memo)(GridRows);function cov_2q0pdsm8sy(){var path="/home/runner/work/konva-timeline/konva-timeline/src/grid/Layer/index.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"fc48298cc8ba06b69368abd5c5727bba198c60f4"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/konva-timeline/konva-timeline/src/grid/Layer/index.tsx",statementMap:{0:{start:{line:11,column:38},end:{line:69,column:1}},1:{start:{line:63,column:2},end:{line:68,column:4}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:11,column:38},end:{line:11,column:39}},loc:{start:{line:11,column:54},end:{line:69,column:1}},line:11}},branchMap:{},s:{0:0,1:0},f:{0:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"fc48298cc8ba06b69368abd5c5727bba198c60f4"});var actualCoverage=coverage[path];return cov_2q0pdsm8sy=function(){return actualCoverage},actualCoverage}cov_2q0pdsm8sy(),cov_2q0pdsm8sy().s[0]++;const GridLayer=({height})=>(cov_2q0pdsm8sy().f[0]++,cov_2q0pdsm8sy().s[1]++,(0,jsx_runtime.jsxs)(_konva.Rj,{children:[(0,jsx_runtime.jsx)(Rows,{}),(0,jsx_runtime.jsx)(Cells,{height})]}));GridLayer.displayName="GridLayer";const grid_Layer=(0,react.memo)(GridLayer);try{Layer.displayName="Layer",Layer.__docgenInfo={description:"",displayName:"Layer",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/grid/Layer/index.tsx#Layer"]={docgenInfo:Layer.__docgenInfo,name:"Layer",path:"src/grid/Layer/index.tsx#Layer"})}catch(__react_docgen_typescript_loader_error){}var ResourcesLayer=__webpack_require__("./src/@components/ResourcesLayer/index.tsx"),TasksLayer=__webpack_require__("./src/@components/TasksLayer/index.tsx");function cov_19nx4ju5wy(){var path="/home/runner/work/konva-timeline/konva-timeline/src/@components/Timeline/index.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/konva-timeline/konva-timeline/src/@components/Timeline/index.tsx",statementMap:{0:{start:{line:19,column:38},end:{line:19,column:61}},1:{start:{line:21,column:36},end:{line:172,column:1}},2:{start:{line:29,column:6},end:{line:29,column:26}},3:{start:{line:31,column:44},end:{line:31,column:55}},4:{start:{line:32,column:26},end:{line:32,column:65}},5:{start:{line:33,column:19},end:{line:33,column:44}},6:{start:{line:34,column:18},end:{line:34,column:46}},7:{start:{line:36,column:25},end:{line:46,column:8}},8:{start:{line:37,column:4},end:{line:39,column:5}},9:{start:{line:38,column:6},end:{line:38,column:13}},10:{start:{line:41,column:4},end:{line:41,column:47}},11:{start:{line:42,column:84},end:{line:42,column:99}},12:{start:{line:43,column:26},end:{line:43,column:78}},13:{start:{line:44,column:4},end:{line:44,column:31}},14:{start:{line:45,column:4},end:{line:45,column:36}},15:{start:{line:48,column:24},end:{line:61,column:32}},16:{start:{line:49,column:4},end:{line:51,column:5}},17:{start:{line:50,column:6},end:{line:50,column:13}},18:{start:{line:53,column:4},end:{line:53,column:47}},19:{start:{line:54,column:27},end:{line:54,column:42}},20:{start:{line:55,column:4},end:{line:55,column:83}},21:{start:{line:56,column:4},end:{line:56,column:36}},22:{start:{line:58,column:18},end:{line:58,column:28}},23:{start:{line:59,column:16},end:{line:59,column:39}},24:{start:{line:60,column:4},end:{line:60,column:33}},25:{start:{line:63,column:2},end:{line:71,column:23}},26:{start:{line:64,column:4},end:{line:64,column:75}},27:{start:{line:65,column:4},end:{line:65,column:54}},28:{start:{line:66,column:4},end:{line:66,column:21}},29:{start:{line:68,column:4},end:{line:70,column:6}},30:{start:{line:69,column:6},end:{line:69,column:59}},31:{start:{line:73,column:2},end:{line:81,column:22}},32:{start:{line:74,column:4},end:{line:76,column:5}},33:{start:{line:75,column:6},end:{line:75,column:13}},34:{start:{line:78,column:4},end:{line:78,column:75}},35:{start:{line:79,column:4},end:{line:79,column:62}},36:{start:{line:80,column:4},end:{line:80,column:20}},37:{start:{line:83,column:2},end:{line:86,column:38}},38:{start:{line:84,column:4},end:{line:84,column:64}},39:{start:{line:85,column:4},end:{line:85,column:21}},40:{start:{line:88,column:28},end:{line:88,column:101}},41:{start:{line:88,column:42},end:{line:88,column:73}},42:{start:{line:92,column:22},end:{line:92,column:44}},43:{start:{line:94,column:21},end:{line:94,column:85}},44:{start:{line:94,column:35},end:{line:94,column:61}},45:{start:{line:96,column:30},end:{line:101,column:3}},46:{start:{line:97,column:26},end:{line:99,column:5}},47:{start:{line:103,column:31},end:{line:112,column:3}},48:{start:{line:104,column:26},end:{line:110,column:5}},49:{start:{line:114,column:37},end:{line:128,column:3}},50:{start:{line:115,column:26},end:{line:126,column:5}},51:{start:{line:130,column:32},end:{line:137,column:3}},52:{start:{line:131,column:26},end:{line:135,column:5}},53:{start:{line:139,column:26},end:{line:139,column:105}},54:{start:{line:139,column:41},end:{line:139,column:86}},55:{start:{line:141,column:27},end:{line:151,column:3}},56:{start:{line:142,column:26},end:{line:149,column:5}},57:{start:{line:153,column:2},end:{line:171,column:4}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:21,column:36},end:{line:21,column:37}},loc:{start:{line:21,column:42},end:{line:172,column:1}},line:21},1:{name:"(anonymous_1)",decl:{start:{line:36,column:37},end:{line:36,column:38}},loc:{start:{line:36,column:43},end:{line:46,column:3}},line:36},2:{name:"(anonymous_2)",decl:{start:{line:48,column:36},end:{line:48,column:37}},loc:{start:{line:48,column:42},end:{line:61,column:3}},line:48},3:{name:"(anonymous_3)",decl:{start:{line:63,column:12},end:{line:63,column:13}},loc:{start:{line:63,column:18},end:{line:71,column:3}},line:63},4:{name:"(anonymous_4)",decl:{start:{line:68,column:11},end:{line:68,column:12}},loc:{start:{line:68,column:17},end:{line:70,column:5}},line:68},5:{name:"(anonymous_5)",decl:{start:{line:73,column:12},end:{line:73,column:13}},loc:{start:{line:73,column:18},end:{line:81,column:3}},line:73},6:{name:"(anonymous_6)",decl:{start:{line:83,column:12},end:{line:83,column:13}},loc:{start:{line:83,column:18},end:{line:86,column:3}},line:83},7:{name:"(anonymous_7)",decl:{start:{line:88,column:36},end:{line:88,column:37}},loc:{start:{line:88,column:42},end:{line:88,column:73}},line:88},8:{name:"(anonymous_8)",decl:{start:{line:94,column:29},end:{line:94,column:30}},loc:{start:{line:94,column:35},end:{line:94,column:61}},line:94},9:{name:"(anonymous_9)",decl:{start:{line:97,column:4},end:{line:97,column:5}},loc:{start:{line:97,column:26},end:{line:99,column:5}},line:97},10:{name:"(anonymous_10)",decl:{start:{line:104,column:4},end:{line:104,column:5}},loc:{start:{line:104,column:26},end:{line:110,column:5}},line:104},11:{name:"(anonymous_11)",decl:{start:{line:115,column:4},end:{line:115,column:5}},loc:{start:{line:115,column:26},end:{line:126,column:5}},line:115},12:{name:"(anonymous_12)",decl:{start:{line:131,column:4},end:{line:131,column:5}},loc:{start:{line:131,column:26},end:{line:135,column:5}},line:131},13:{name:"(anonymous_13)",decl:{start:{line:139,column:34},end:{line:139,column:35}},loc:{start:{line:139,column:41},end:{line:139,column:86}},line:139},14:{name:"(anonymous_14)",decl:{start:{line:142,column:4},end:{line:142,column:5}},loc:{start:{line:142,column:26},end:{line:149,column:5}},line:142}},branchMap:{0:{loc:{start:{line:37,column:4},end:{line:39,column:5}},type:"if",locations:[{start:{line:37,column:4},end:{line:39,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:37},1:{loc:{start:{line:49,column:4},end:{line:51,column:5}},type:"if",locations:[{start:{line:49,column:4},end:{line:51,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:49},2:{loc:{start:{line:49,column:8},end:{line:49,column:45}},type:"binary-expr",locations:[{start:{line:49,column:8},end:{line:49,column:24}},{start:{line:49,column:28},end:{line:49,column:45}}],line:49},3:{loc:{start:{line:74,column:4},end:{line:76,column:5}},type:"if",locations:[{start:{line:74,column:4},end:{line:76,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:74},4:{loc:{start:{line:139,column:41},end:{line:139,column:86}},type:"cond-expr",locations:[{start:{line:139,column:57},end:{line:139,column:58}},{start:{line:139,column:61},end:{line:139,column:86}}],line:139},5:{loc:{start:{line:155,column:7},end:{line:161,column:7}},type:"binary-expr",locations:[{start:{line:155,column:7},end:{line:155,column:21}},{start:{line:156,column:8},end:{line:160,column:14}}],line:155}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0,52:0,53:0,54:0,55:0,56:0,57:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9c8f6b99ff13157dbcb8823eee03e39a83b1cdff"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"9c8f6b99ff13157dbcb8823eee03e39a83b1cdff"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_19nx4ju5wy=function(){return actualCoverage},actualCoverage}cov_19nx4ju5wy();const DEFAULT_STAGE_SIZE=(cov_19nx4ju5wy().s[0]++,{height:0,width:0});cov_19nx4ju5wy().s[1]++;const Timeline_Timeline=()=>{cov_19nx4ju5wy().f[0]++;const{hideResources,columnWidth,resourcesContentHeight,setDrawRange,theme:{color:themeColor},timeBlocks}=(cov_19nx4ju5wy().s[2]++,(0,Timeline.i)()),[scrollbarSize,setScrollbarSize]=(cov_19nx4ju5wy().s[3]++,(0,react.useState)(0)),[size,setSize]=(cov_19nx4ju5wy().s[4]++,(0,react.useState)(DEFAULT_STAGE_SIZE)),stageRef=(cov_19nx4ju5wy().s[5]++,(0,react.useRef)(null)),wrapper=(cov_19nx4ju5wy().s[6]++,(0,react.useRef)(null)),onWindowResize=(cov_19nx4ju5wy().s[7]++,(0,react.useCallback)((()=>{if(cov_19nx4ju5wy().f[1]++,cov_19nx4ju5wy().s[8]++,!wrapper.current)return cov_19nx4ju5wy().b[0][0]++,void cov_19nx4ju5wy().s[9]++;cov_19nx4ju5wy().b[0][1]++,cov_19nx4ju5wy().s[10]++,(0,logger.o7)("Timeline","Resizing window...");const{clientHeight:height,clientWidth:width,offsetHeight,offsetWidth}=(cov_19nx4ju5wy().s[11]++,wrapper.current),scrollbarSize=(cov_19nx4ju5wy().s[12]++,Math.max(offsetHeight-height,offsetWidth-width));cov_19nx4ju5wy().s[13]++,setSize({height,width}),cov_19nx4ju5wy().s[14]++,setScrollbarSize(scrollbarSize)}),[])),onStageScroll=(cov_19nx4ju5wy().s[15]++,(0,react.useCallback)((()=>{if(cov_19nx4ju5wy().f[2]++,cov_19nx4ju5wy().s[16]++,cov_19nx4ju5wy().b[2][0]++,!wrapper.current||(cov_19nx4ju5wy().b[2][1]++,!stageRef.current))return cov_19nx4ju5wy().b[1][0]++,void cov_19nx4ju5wy().s[17]++;cov_19nx4ju5wy().b[1][1]++,cov_19nx4ju5wy().s[18]++,(0,logger.o7)("Timeline","Scrolling stage...");const{scrollLeft}=(cov_19nx4ju5wy().s[19]++,wrapper.current);cov_19nx4ju5wy().s[20]++,stageRef.current.container().style.transform=`translate(${scrollLeft}px, 0)`,cov_19nx4ju5wy().s[21]++,stageRef.current.x(-scrollLeft);const start=(cov_19nx4ju5wy().s[22]++,scrollLeft),end=(cov_19nx4ju5wy().s[23]++,scrollLeft+size.width);cov_19nx4ju5wy().s[24]++,setDrawRange({start,end})}),[setDrawRange,size.width]));cov_19nx4ju5wy().s[25]++,(0,react.useEffect)((()=>(cov_19nx4ju5wy().f[3]++,cov_19nx4ju5wy().s[26]++,(0,logger.o7)("Timeline","Initial applying of onResize event listener..."),cov_19nx4ju5wy().s[27]++,window.addEventListener("resize",onWindowResize),cov_19nx4ju5wy().s[28]++,onWindowResize(),cov_19nx4ju5wy().s[29]++,()=>{cov_19nx4ju5wy().f[4]++,cov_19nx4ju5wy().s[30]++,window.removeEventListener("resize",onWindowResize)})),[onWindowResize]),cov_19nx4ju5wy().s[31]++,(0,react.useEffect)((()=>{if(cov_19nx4ju5wy().f[5]++,cov_19nx4ju5wy().s[32]++,!wrapper.current)return cov_19nx4ju5wy().b[3][0]++,void cov_19nx4ju5wy().s[33]++;cov_19nx4ju5wy().b[3][1]++,cov_19nx4ju5wy().s[34]++,(0,logger.o7)("Timeline","Initial applying of onScroll event listener..."),cov_19nx4ju5wy().s[35]++,wrapper.current.addEventListener("scroll",onStageScroll),cov_19nx4ju5wy().s[36]++,onStageScroll()}),[onStageScroll]),cov_19nx4ju5wy().s[37]++,(0,react.useEffect)((()=>{cov_19nx4ju5wy().f[6]++,cov_19nx4ju5wy().s[38]++,(0,logger.o7)("Timeline","Applying effects of size changes..."),cov_19nx4ju5wy().s[39]++,onWindowResize()}),[hideResources,onWindowResize]);const fullTimelineWidth=(cov_19nx4ju5wy().s[40]++,(0,react.useMemo)((()=>(cov_19nx4ju5wy().f[7]++,cov_19nx4ju5wy().s[41]++,columnWidth*timeBlocks.length)),[columnWidth,timeBlocks])),stageHeight=(cov_19nx4ju5wy().s[42]++,resourcesContentHeight),stageWidth=(cov_19nx4ju5wy().s[43]++,(0,react.useMemo)((()=>(cov_19nx4ju5wy().f[8]++,cov_19nx4ju5wy().s[44]++,scrollbarSize+size.width)),[scrollbarSize,size])),timelineCommonStyle=(cov_19nx4ju5wy().s[45]++,(0,react.useMemo)((()=>(cov_19nx4ju5wy().f[9]++,cov_19nx4ju5wy().s[46]++,{minHeight:resourcesContentHeight})),[resourcesContentHeight])),timelineWrapperStyle=(cov_19nx4ju5wy().s[47]++,(0,react.useMemo)((()=>(cov_19nx4ju5wy().f[10]++,cov_19nx4ju5wy().s[48]++,{...timelineCommonStyle,border:`1px solid ${themeColor}`,display:"inline-block",position:"relative",width:"100%"})),[themeColor,timelineCommonStyle])),resourcesStageWrapperStyle=(cov_19nx4ju5wy().s[49]++,(0,react.useMemo)((()=>(cov_19nx4ju5wy().f[11]++,cov_19nx4ju5wy().s[50]++,{...timelineCommonStyle,backgroundColor:"transparent",boxShadow:"4px 4px 32px 1px #0000000f",borderRight:`1px solid ${themeColor}`,left:0,paddingBottom:scrollbarSize,position:"sticky",top:0,width:resources.O,zIndex:1})),[scrollbarSize,themeColor,timelineCommonStyle])),gridStageWrapperStyle=(cov_19nx4ju5wy().s[51]++,(0,react.useMemo)((()=>(cov_19nx4ju5wy().f[12]++,cov_19nx4ju5wy().s[52]++,{...timelineCommonStyle,overflow:"hidden",width:fullTimelineWidth})),[fullTimelineWidth,timelineCommonStyle])),resourcesOffset=(cov_19nx4ju5wy().s[53]++,(0,react.useMemo)((()=>(cov_19nx4ju5wy().f[13]++,cov_19nx4ju5wy().s[54]++,hideResources?(cov_19nx4ju5wy().b[4][0]++,0):(cov_19nx4ju5wy().b[4][1]++,resources.O+1))),[hideResources])),gridWrapperStyle=(cov_19nx4ju5wy().s[55]++,(0,react.useMemo)((()=>(cov_19nx4ju5wy().f[14]++,cov_19nx4ju5wy().s[56]++,{...timelineCommonStyle,left:resourcesOffset,overflow:"auto",position:"absolute",top:0,width:`calc(100% - ${resourcesOffset}px)`})),[resourcesOffset,timelineCommonStyle]));return cov_19nx4ju5wy().s[57]++,(0,jsx_runtime.jsxs)("div",{style:timelineWrapperStyle,children:[(cov_19nx4ju5wy().b[5][0]++,!hideResources&&(cov_19nx4ju5wy().b[5][1]++,(0,jsx_runtime.jsx)("div",{style:resourcesStageWrapperStyle,children:(0,jsx_runtime.jsx)(ReactKonva.Hf,{height:stageHeight,width:resources.O,children:(0,jsx_runtime.jsx)(ResourcesLayer.Z,{})})}))),(0,jsx_runtime.jsx)("div",{ref:wrapper,style:gridWrapperStyle,children:(0,jsx_runtime.jsx)("div",{style:gridStageWrapperStyle,children:(0,jsx_runtime.jsxs)(ReactKonva.Hf,{ref:stageRef,height:stageHeight,width:stageWidth,children:[(0,jsx_runtime.jsx)(grid_Layer,{height:stageHeight}),(0,jsx_runtime.jsx)(TasksLayer.Z,{})]})})})]})};Timeline_Timeline.displayName="Timeline";const _components_Timeline=Timeline_Timeline;try{Timeline_Timeline.displayName="Timeline",Timeline_Timeline.__docgenInfo={description:"",displayName:"Timeline",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/@components/Timeline/index.tsx#Timeline"]={docgenInfo:Timeline_Timeline.__docgenInfo,name:"Timeline",path:"src/@components/Timeline/index.tsx#Timeline"})}catch(__react_docgen_typescript_loader_error){}function cov_17h00w8kph(){var path="/home/runner/work/konva-timeline/konva-timeline/src/KonvaTimeline/index.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"be13a46095d54fdb961668fd92119424760c2348"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/konva-timeline/konva-timeline/src/KonvaTimeline/index.tsx",statementMap:{0:{start:{line:6,column:49},end:{line:12,column:1}},1:{start:{line:7,column:2},end:{line:11,column:4}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:49},end:{line:6,column:50}},loc:{start:{line:6,column:60},end:{line:12,column:1}},line:6}},branchMap:{},s:{0:0,1:0},f:{0:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"be13a46095d54fdb961668fd92119424760c2348"});var actualCoverage=coverage[path];return cov_17h00w8kph=function(){return actualCoverage},actualCoverage}cov_17h00w8kph(),cov_17h00w8kph().s[0]++;const KonvaTimeline=props=>(cov_17h00w8kph().f[0]++,cov_17h00w8kph().s[1]++,(0,jsx_runtime.jsx)(Timeline.w,{...props,children:(0,jsx_runtime.jsx)(_components_Timeline,{})}));KonvaTimeline.displayName="KonvaTimeline";const src_KonvaTimeline=KonvaTimeline;try{KonvaTimeline.displayName="KonvaTimeline",KonvaTimeline.__docgenInfo={description:"",displayName:"KonvaTimeline",props:{columnWidth:{defaultValue:null,description:"Custom column width (defaults to 60px)",name:"columnWidth",required:!1,type:{name:"number"}},displayTasksLabel:{defaultValue:null,description:"Enables tasks label display",name:"displayTasksLabel",required:!1,type:{name:"boolean"}},dragResolution:{defaultValue:null,description:"Drag and drop resolution (if not passed, defaults to resolution)",name:"dragResolution",required:!1,type:{name:"enum",value:[{value:'"1min"'},{value:'"5min"'},{value:'"10min"'},{value:'"15min"'},{value:'"30min"'},{value:'"1hrs"'},{value:'"2hrs"'},{value:'"6hrs"'},{value:'"12hrs"'},{value:'"1day"'},{value:'"1week"'},{value:'"2weeks"'}]}},hideResources:{defaultValue:null,description:"Flag to hide resource column (defaults to false)",name:"hideResources",required:!1,type:{name:"boolean"}},resolution:{defaultValue:null,description:"Resolution to display data in konva-timeline",name:"resolution",required:!0,type:{name:"enum",value:[{value:'"1min"'},{value:'"5min"'},{value:'"10min"'},{value:'"15min"'},{value:'"30min"'},{value:'"1hrs"'},{value:'"2hrs"'},{value:'"6hrs"'},{value:'"12hrs"'},{value:'"1day"'},{value:'"1week"'},{value:'"2weeks"'}]}},rowHeight:{defaultValue:null,description:"Custom row height (defaults to 50px)",name:"rowHeight",required:!1,type:{name:"number"}},tasks:{defaultValue:null,description:"List of tasks to be displayed",name:"tasks",required:!0,type:{name:"TaskData[]"}},range:{defaultValue:null,description:"Time range to be displayed",name:"range",required:!0,type:{name:"TimeRange"}},resources:{defaultValue:null,description:"List of resources to be displayed",name:"resources",required:!0,type:{name:"Resource[]"}},debug:{defaultValue:null,description:"Enables debug logging in browser console",name:"debug",required:!1,type:{name:"boolean"}},onTaskClick:{defaultValue:null,description:"Event handler for task click",name:"onTaskClick",required:!1,type:{name:"((task: TaskData) => void)"}},onTaskDrag:{defaultValue:null,description:"Event handler for task click",name:"onTaskDrag",required:!1,type:{name:"((task: TaskData) => void)"}},theme:{defaultValue:null,description:"Theme color in use",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/KonvaTimeline/index.tsx#KonvaTimeline"]={docgenInfo:KonvaTimeline.__docgenInfo,name:"KonvaTimeline",path:"src/KonvaTimeline/index.tsx#KonvaTimeline"})}catch(__react_docgen_typescript_loader_error){}}}]);