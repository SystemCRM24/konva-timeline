"use strict";(self.webpackChunk_melfore_konva_timeline=self.webpackChunk_melfore_konva_timeline||[]).push([[858],{"./src/resources/components/Header/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Last:function(){return Last},Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder}});var _utils_stories__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/stories.tsx");const meta={title:"Components/Resources/Header",component:__webpack_require__("./src/resources/components/Header/index.tsx").$,decorators:[_utils_stories__WEBPACK_IMPORTED_MODULE_0__.tK],tags:["autodocs"],argTypes:{}};__webpack_exports__.default=meta;const Primary={args:{resource:{id:"1",color:"red",label:"Resource #1"},index:0}},Last={args:{...Primary.args,isLast:!0}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    resource: {\n      id: "1",\n      color: "red",\n      label: "Resource #1"\n    },\n    index: 0\n  }\n}',...Primary.parameters?.docs?.source}}},Last.parameters={...Last.parameters,docs:{...Last.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    isLast: true\n  }\n}",...Last.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Last"]},"./src/resources/components/Header/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:function(){return ResourceHeaderDocs}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_konva__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/@konva/index.tsx"),_timeline_TimelineContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/timeline/TimelineContext.tsx"),_utils_dimensions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/dimensions.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/theme.ts"),_utils_resources__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/resources/utils/resources.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_1gmh39x9ii(){var path="/home/runner/work/konva-timeline/konva-timeline/src/resources/components/Header/index.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/konva-timeline/konva-timeline/src/resources/components/Header/index.tsx",statementMap:{0:{start:{line:33,column:23},end:{line:74,column:1}},1:{start:{line:37,column:6},end:{line:37,column:26}},2:{start:{line:39,column:20},end:{line:39,column:96}},3:{start:{line:39,column:34},end:{line:39,column:82}},4:{start:{line:41,column:22},end:{line:41,column:74}},5:{start:{line:41,column:36},end:{line:41,column:53}},6:{start:{line:43,column:15},end:{line:48,column:25}},7:{start:{line:44,column:4},end:{line:46,column:5}},8:{start:{line:45,column:6},end:{line:45,column:72}},9:{start:{line:47,column:4},end:{line:47,column:69}},10:{start:{line:50,column:17},end:{line:55,column:18}},11:{start:{line:51,column:4},end:{line:53,column:5}},12:{start:{line:52,column:6},end:{line:52,column:39}},13:{start:{line:54,column:4},end:{line:54,column:36}},14:{start:{line:56,column:2},end:{line:73,column:4}},15:{start:{line:76,column:34},end:{line:76,column:48}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:33,column:23},end:{line:33,column:24}},loc:{start:{line:33,column:85},end:{line:74,column:1}},line:33},1:{name:"(anonymous_1)",decl:{start:{line:39,column:28},end:{line:39,column:29}},loc:{start:{line:39,column:34},end:{line:39,column:82}},line:39},2:{name:"(anonymous_2)",decl:{start:{line:41,column:30},end:{line:41,column:31}},loc:{start:{line:41,column:36},end:{line:41,column:53}},line:41},3:{name:"(anonymous_3)",decl:{start:{line:43,column:23},end:{line:43,column:24}},loc:{start:{line:43,column:29},end:{line:48,column:3}},line:43},4:{name:"(anonymous_4)",decl:{start:{line:50,column:25},end:{line:50,column:26}},loc:{start:{line:50,column:31},end:{line:55,column:3}},line:50}},branchMap:{0:{loc:{start:{line:33,column:33},end:{line:33,column:47}},type:"default-arg",locations:[{start:{line:33,column:42},end:{line:33,column:47}}],line:33},1:{loc:{start:{line:44,column:4},end:{line:46,column:5}},type:"if",locations:[{start:{line:44,column:4},end:{line:46,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:44},2:{loc:{start:{line:45,column:13},end:{line:45,column:71}},type:"cond-expr",locations:[{start:{line:45,column:31},end:{line:45,column:53}},{start:{line:45,column:56},end:{line:45,column:71}}],line:45},3:{loc:{start:{line:47,column:11},end:{line:47,column:68}},type:"cond-expr",locations:[{start:{line:47,column:29},end:{line:47,column:50}},{start:{line:47,column:53},end:{line:47,column:68}}],line:47},4:{loc:{start:{line:51,column:4},end:{line:53,column:5}},type:"if",locations:[{start:{line:51,column:4},end:{line:53,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:51},5:{loc:{start:{line:66,column:7},end:{line:71,column:7}},type:"binary-expr",locations:[{start:{line:66,column:7},end:{line:66,column:14}},{start:{line:67,column:8},end:{line:70,column:21}}],line:66}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"5d417356c41c17f07fb068dbf9eeede4e25d9e69"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"5d417356c41c17f07fb068dbf9eeede4e25d9e69"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_1gmh39x9ii=function(){return actualCoverage},actualCoverage}cov_1gmh39x9ii(),cov_1gmh39x9ii().s[0]++;const ResourceHeader=({index:index,isLast:isLast=(cov_1gmh39x9ii().b[0][0]++,!1),resource:resource})=>{cov_1gmh39x9ii().f[0]++;const{rowHeight:rowHeight,theme:{color:themeColor}}=(cov_1gmh39x9ii().s[1]++,(0,_timeline_TimelineContext__WEBPACK_IMPORTED_MODULE_2__.i)()),rowPoints=(cov_1gmh39x9ii().s[2]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(cov_1gmh39x9ii().f[1]++,cov_1gmh39x9ii().s[3]++,[0,rowHeight,_utils_resources__WEBPACK_IMPORTED_MODULE_5__.Oc,rowHeight])),[rowHeight])),yCoordinate=(cov_1gmh39x9ii().s[4]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(cov_1gmh39x9ii().f[2]++,cov_1gmh39x9ii().s[5]++,rowHeight*index)),[index,rowHeight])),fill=(cov_1gmh39x9ii().s[6]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(cov_1gmh39x9ii().f[3]++,cov_1gmh39x9ii().s[7]++,"black"===themeColor?(cov_1gmh39x9ii().b[1][0]++,cov_1gmh39x9ii().s[8]++,index%2==0?(cov_1gmh39x9ii().b[2][0]++,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.Rf):(cov_1gmh39x9ii().b[2][1]++,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.Db)):(cov_1gmh39x9ii().b[1][1]++,cov_1gmh39x9ii().s[9]++,index%2==0?(cov_1gmh39x9ii().b[3][0]++,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.Ng):(cov_1gmh39x9ii().b[3][1]++,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.Db)))),[index,themeColor])),stroke=(cov_1gmh39x9ii().s[10]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(cov_1gmh39x9ii().f[4]++,cov_1gmh39x9ii().s[11]++,"black"===themeColor?(cov_1gmh39x9ii().b[4][0]++,cov_1gmh39x9ii().s[12]++,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.yV):(cov_1gmh39x9ii().b[4][1]++,cov_1gmh39x9ii().s[13]++,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.OH))),[themeColor]));return cov_1gmh39x9ii().s[14]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_konva__WEBPACK_IMPORTED_MODULE_1__.LE,{y:yCoordinate,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_konva__WEBPACK_IMPORTED_MODULE_1__.V,{fill:themeColor,fontSize:_utils_dimensions__WEBPACK_IMPORTED_MODULE_3__.Z2,height:rowHeight,text:resource.label,verticalAlign:"middle",x:_utils_resources__WEBPACK_IMPORTED_MODULE_5__.D0}),(cov_1gmh39x9ii().b[5][0]++,!isLast&&(cov_1gmh39x9ii().b[5][1]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_konva__WEBPACK_IMPORTED_MODULE_1__.LE,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_konva__WEBPACK_IMPORTED_MODULE_1__.vL,{points:rowPoints,stroke:stroke}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_konva__WEBPACK_IMPORTED_MODULE_1__.oJ,{x:0,y:rowHeight,width:_utils_resources__WEBPACK_IMPORTED_MODULE_5__.Oc,height:rowHeight,fill:fill})]})))]})};ResourceHeader.displayName="ResourceHeader";const ResourceHeaderDocs=(cov_1gmh39x9ii().s[15]++,ResourceHeader);__webpack_exports__.Z=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(ResourceHeader);try{ResourceHeaderDocs.displayName="ResourceHeaderDocs",ResourceHeaderDocs.__docgenInfo={description:"",displayName:"ResourceHeaderDocs",props:{index:{defaultValue:null,description:"The row index of current resource",name:"index",required:!0,type:{name:"number"}},isLast:{defaultValue:{value:"false"},description:"Flag to identify if resource is last to be shown",name:"isLast",required:!1,type:{name:"boolean"}},resource:{defaultValue:null,description:"The resource object to handle",name:"resource",required:!0,type:{name:"Resource"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/resources/components/Header/index.tsx#ResourceHeaderDocs"]={docgenInfo:ResourceHeaderDocs.__docgenInfo,name:"ResourceHeaderDocs",path:"src/resources/components/Header/index.tsx#ResourceHeaderDocs"})}catch(__react_docgen_typescript_loader_error){}try{ResourceHeader.displayName="ResourceHeader",ResourceHeader.__docgenInfo={description:"This component renders a resource header. It displays a text (`resource.label`) and a delimiter line.",displayName:"ResourceHeader",props:{index:{defaultValue:null,description:"The row index of current resource",name:"index",required:!0,type:{name:"number"}},isLast:{defaultValue:{value:"false"},description:"Flag to identify if resource is last to be shown",name:"isLast",required:!1,type:{name:"boolean"}},resource:{defaultValue:null,description:"The resource object to handle",name:"resource",required:!0,type:{name:"Resource"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/resources/components/Header/index.tsx#ResourceHeader"]={docgenInfo:ResourceHeader.__docgenInfo,name:"ResourceHeader",path:"src/resources/components/Header/index.tsx#ResourceHeader"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{SE:function(){return STORY_DATA},fG:function(){return LayerDecorator},ql:function(){return COLOR_ARG_TYPE},tK:function(){return TaskDecorator},yz:function(){return TasksLayerDecorator}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_konva__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-konva/es/ReactKonva.js"),_KonvaTimeline_stories_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/KonvaTimeline/stories-data.ts"),_timeline_TimelineContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/timeline/TimelineContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_cg8eyjiax(){var path="/home/runner/work/konva-timeline/konva-timeline/src/utils/stories.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/konva-timeline/konva-timeline/src/utils/stories.tsx",statementMap:{0:{start:{line:8,column:30},end:{line:12,column:1}},1:{start:{line:14,column:26},end:{line:19,column:2}},2:{start:{line:21,column:41},end:{line:23,column:1}},3:{start:{line:22,column:2},end:{line:22,column:36}},4:{start:{line:25,column:40},end:{line:53,column:1}},5:{start:{line:26,column:21},end:{line:26,column:49}},6:{start:{line:28,column:28},end:{line:28,column:45}},7:{start:{line:30,column:2},end:{line:37,column:9}},8:{start:{line:31,column:4},end:{line:33,column:5}},9:{start:{line:32,column:6},end:{line:32,column:13}},10:{start:{line:35,column:22},end:{line:35,column:64}},11:{start:{line:36,column:4},end:{line:36,column:20}},12:{start:{line:39,column:2},end:{line:52,column:4}},13:{start:{line:42,column:29},end:{line:42,column:84}},14:{start:{line:43,column:30},end:{line:43,column:86}},15:{start:{line:56,column:36},end:{line:72,column:1}},16:{start:{line:57,column:27},end:{line:57,column:47}},17:{start:{line:59,column:21},end:{line:59,column:47}},18:{start:{line:59,column:35},end:{line:59,column:42}},19:{start:{line:61,column:2},end:{line:63,column:33}},20:{start:{line:62,column:4},end:{line:62,column:54}},21:{start:{line:65,column:2},end:{line:71,column:4}},22:{start:{line:74,column:46},end:{line:85,column:1}},23:{start:{line:75,column:2},end:{line:84,column:4}},24:{start:{line:78,column:29},end:{line:78,column:84}},25:{start:{line:79,column:30},end:{line:79,column:86}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:21,column:41},end:{line:21,column:42}},loc:{start:{line:21,column:54},end:{line:23,column:1}},line:21},1:{name:"(anonymous_1)",decl:{start:{line:25,column:40},end:{line:25,column:41}},loc:{start:{line:25,column:53},end:{line:53,column:1}},line:25},2:{name:"(anonymous_2)",decl:{start:{line:30,column:12},end:{line:30,column:13}},loc:{start:{line:30,column:18},end:{line:37,column:3}},line:30},3:{name:"(anonymous_3)",decl:{start:{line:42,column:19},end:{line:42,column:20}},loc:{start:{line:42,column:29},end:{line:42,column:84}},line:42},4:{name:"(anonymous_4)",decl:{start:{line:43,column:20},end:{line:43,column:21}},loc:{start:{line:43,column:30},end:{line:43,column:86}},line:43},5:{name:"(anonymous_5)",decl:{start:{line:56,column:36},end:{line:56,column:37}},loc:{start:{line:56,column:58},end:{line:72,column:1}},line:56},6:{name:"(anonymous_6)",decl:{start:{line:59,column:29},end:{line:59,column:30}},loc:{start:{line:59,column:35},end:{line:59,column:42}},line:59},7:{name:"(anonymous_7)",decl:{start:{line:61,column:12},end:{line:61,column:13}},loc:{start:{line:61,column:18},end:{line:63,column:3}},line:61},8:{name:"(anonymous_8)",decl:{start:{line:74,column:46},end:{line:74,column:47}},loc:{start:{line:74,column:59},end:{line:85,column:1}},line:74},9:{name:"(anonymous_9)",decl:{start:{line:78,column:19},end:{line:78,column:20}},loc:{start:{line:78,column:29},end:{line:78,column:84}},line:78},10:{name:"(anonymous_10)",decl:{start:{line:79,column:20},end:{line:79,column:21}},loc:{start:{line:79,column:30},end:{line:79,column:86}},line:79}},branchMap:{0:{loc:{start:{line:31,column:4},end:{line:33,column:5}},type:"if",locations:[{start:{line:31,column:4},end:{line:33,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:31}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},b:{0:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"30fb395c1e176d0abef9c69bdf58e0cfbb624798"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"30fb395c1e176d0abef9c69bdf58e0cfbb624798"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_cg8eyjiax=function(){return actualCoverage},actualCoverage}cov_cg8eyjiax();const COLOR_ARG_TYPE=(cov_cg8eyjiax().s[0]++,{control:{type:"color"}}),STORY_DATA=(cov_cg8eyjiax().s[1]++,(0,_KonvaTimeline_stories_data__WEBPACK_IMPORTED_MODULE_2__.bm)({averageTaskDurationInMinutes:180,resourcesCount:3,tasksCount:10,timeRangeInDays:1}));cov_cg8eyjiax().s[2]++;const LayerDecorator=storyFn=>(cov_cg8eyjiax().f[0]++,cov_cg8eyjiax().s[3]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_konva__WEBPACK_IMPORTED_MODULE_1__.mh,{children:storyFn()}));LayerDecorator.displayName="LayerDecorator",cov_cg8eyjiax().s[4]++;const TaskDecorator=storyFn=>{cov_cg8eyjiax().f[1]++;const wrapperRef=(cov_cg8eyjiax().s[5]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null)),[width,setWidth]=(cov_cg8eyjiax().s[6]++,react__WEBPACK_IMPORTED_MODULE_0__.useState(0));return cov_cg8eyjiax().s[7]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(cov_cg8eyjiax().f[2]++,cov_cg8eyjiax().s[8]++,!wrapperRef.current)return cov_cg8eyjiax().b[0][0]++,void cov_cg8eyjiax().s[9]++;cov_cg8eyjiax().b[0][1]++;const{width:width}=(cov_cg8eyjiax().s[10]++,wrapperRef.current.getBoundingClientRect());cov_cg8eyjiax().s[11]++,setWidth(width)}),[]),cov_cg8eyjiax().s[12]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_timeline_TimelineContext__WEBPACK_IMPORTED_MODULE_3__.w,{...STORY_DATA,onTaskClick:task=>(cov_cg8eyjiax().f[3]++,cov_cg8eyjiax().s[13]++,alert(`OnTaskClick event handler - TaskId: ${task.id}`)),onTaskChange:task=>(cov_cg8eyjiax().f[4]++,cov_cg8eyjiax().s[14]++,alert(`OnTaskChange event handler - TaskId: ${task.id}`)),resolution:"1hrs",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{ref:wrapperRef,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_konva__WEBPACK_IMPORTED_MODULE_1__.Hf,{height:200,width:width,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_konva__WEBPACK_IMPORTED_MODULE_1__.mh,{children:storyFn()})})})})};TaskDecorator.displayName="TaskDecorator",cov_cg8eyjiax().s[15]++;const TasksLayerInternalDecorator=({storyFn:storyFn})=>{cov_cg8eyjiax().f[5]++;const{setDrawRange:setDrawRange}=(cov_cg8eyjiax().s[16]++,(0,_timeline_TimelineContext__WEBPACK_IMPORTED_MODULE_3__.i)()),stageWidth=(cov_cg8eyjiax().s[17]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(cov_cg8eyjiax().f[6]++,cov_cg8eyjiax().s[18]++,1440)),[]));return cov_cg8eyjiax().s[19]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{cov_cg8eyjiax().f[7]++,cov_cg8eyjiax().s[20]++,setDrawRange({start:0,end:stageWidth+200})}),[setDrawRange,stageWidth]),cov_cg8eyjiax().s[21]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_konva__WEBPACK_IMPORTED_MODULE_1__.Hf,{height:200,width:1440,children:storyFn()})})};TasksLayerInternalDecorator.displayName="TasksLayerInternalDecorator",cov_cg8eyjiax().s[22]++;const TasksLayerDecorator=storyFn=>(cov_cg8eyjiax().f[8]++,cov_cg8eyjiax().s[23]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_timeline_TimelineContext__WEBPACK_IMPORTED_MODULE_3__.w,{...STORY_DATA,onTaskClick:task=>(cov_cg8eyjiax().f[9]++,cov_cg8eyjiax().s[24]++,alert(`OnTaskClick event handler - TaskId: ${task.id}`)),onTaskChange:task=>(cov_cg8eyjiax().f[10]++,cov_cg8eyjiax().s[25]++,alert(`OnTaskChange event handler - TaskId: ${task.id}`)),resolution:"1hrs",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TasksLayerInternalDecorator,{storyFn:storyFn})}));TasksLayerDecorator.displayName="TasksLayerDecorator"}}]);