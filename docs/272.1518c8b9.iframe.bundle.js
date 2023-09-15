"use strict";(self.webpackChunk_melfore_konva_timeline=self.webpackChunk_melfore_konva_timeline||[]).push([[272],{"./src/@components/Task/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,i:()=>TaskDocs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_konva__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-konva/es/ReactKonva.js"),luxon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/luxon/src/luxon.js"),_contexts_Timeline__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/@contexts/Timeline.tsx"),_utils_logger__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/@utils/logger.ts"),_utils_resources__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/@utils/resources.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_1lu9ee06c4(){var path="/home/runner/work/konva-timeline/konva-timeline/src/@components/Task/index.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/konva-timeline/konva-timeline/src/@components/Task/index.tsx",statementMap:{0:{start:{line:34,column:26},end:{line:34,column:39}},1:{start:{line:35,column:28},end:{line:35,column:35}},2:{start:{line:37,column:27},end:{line:37,column:28}},3:{start:{line:38,column:20},end:{line:38,column:22}},4:{start:{line:51,column:13},end:{line:217,column:1}},5:{start:{line:69,column:6},end:{line:69,column:26}},6:{start:{line:71,column:25},end:{line:71,column:29}},7:{start:{line:73,column:34},end:{line:73,column:49}},8:{start:{line:75,column:23},end:{line:78,column:52}},9:{start:{line:76,column:37},end:{line:76,column:98}},10:{start:{line:77,column:4},end:{line:77,column:62}},11:{start:{line:80,column:32},end:{line:85,column:8}},12:{start:{line:81,column:21},end:{line:81,column:54}},13:{start:{line:82,column:21},end:{line:82,column:84}},14:{start:{line:84,column:4},end:{line:84,column:40}},15:{start:{line:87,column:23},end:{line:93,column:8}},16:{start:{line:88,column:23},end:{line:88,column:24}},17:{start:{line:89,column:18},end:{line:89,column:28}},18:{start:{line:90,column:18},end:{line:90,column:28}},19:{start:{line:92,column:4},end:{line:92,column:34}},20:{start:{line:95,column:42},end:{line:110,column:3}},21:{start:{line:97,column:23},end:{line:97,column:71}},22:{start:{line:98,column:6},end:{line:100,column:7}},23:{start:{line:99,column:8},end:{line:99,column:17}},24:{start:{line:102,column:32},end:{line:102,column:52}},25:{start:{line:103,column:6},end:{line:105,column:7}},26:{start:{line:104,column:8},end:{line:104,column:33}},27:{start:{line:107,column:6},end:{line:107,column:22}},28:{start:{line:112,column:27},end:{line:127,column:3}},29:{start:{line:114,column:20},end:{line:114,column:39}},30:{start:{line:115,column:6},end:{line:117,column:7}},31:{start:{line:116,column:8},end:{line:116,column:15}},32:{start:{line:119,column:20},end:{line:119,column:46}},33:{start:{line:120,column:6},end:{line:122,column:7}},34:{start:{line:121,column:8},end:{line:121,column:15}},35:{start:{line:124,column:6},end:{line:124,column:30}},36:{start:{line:129,column:18},end:{line:132,column:3}},37:{start:{line:130,column:41},end:{line:130,column:73}},38:{start:{line:134,column:22},end:{line:137,column:3}},39:{start:{line:135,column:41},end:{line:135,column:69}},40:{start:{line:139,column:21},end:{line:142,column:3}},41:{start:{line:140,column:41},end:{line:140,column:68}},42:{start:{line:144,column:22},end:{line:144,column:92}},43:{start:{line:144,column:70},end:{line:144,column:87}},44:{start:{line:146,column:21},end:{line:156,column:3}},45:{start:{line:148,column:23},end:{line:148,column:38}},46:{start:{line:149,column:28},end:{line:149,column:62}},47:{start:{line:150,column:25},end:{line:150,column:67}},48:{start:{line:151,column:20},end:{line:151,column:68}},49:{start:{line:152,column:6},end:{line:152,column:34}},50:{start:{line:153,column:6},end:{line:153,column:28}},51:{start:{line:158,column:20},end:{line:192,column:3}},52:{start:{line:160,column:23},end:{line:160,column:38}},53:{start:{line:161,column:25},end:{line:161,column:56}},54:{start:{line:162,column:31},end:{line:162,column:86}},55:{start:{line:164,column:8},end:{line:164,column:106}},56:{start:{line:165,column:28},end:{line:165,column:62}},57:{start:{line:166,column:25},end:{line:166,column:43}},58:{start:{line:167,column:6},end:{line:167,column:88}},59:{start:{line:168,column:6},end:{line:168,column:86}},60:{start:{line:169,column:6},end:{line:169,column:78}},61:{start:{line:170,column:6},end:{line:170,column:25}},62:{start:{line:171,column:6},end:{line:179,column:11}},63:{start:{line:194,column:18},end:{line:194,column:65}},64:{start:{line:194,column:33},end:{line:194,column:51}},65:{start:{line:196,column:2},end:{line:216,column:4}},66:{start:{line:219,column:24},end:{line:219,column:28}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:51,column:13},end:{line:51,column:14}},loc:{start:{line:60,column:17},end:{line:217,column:1}},line:60},1:{name:"(anonymous_1)",decl:{start:{line:75,column:31},end:{line:75,column:32}},loc:{start:{line:75,column:37},end:{line:78,column:3}},line:75},2:{name:"(anonymous_2)",decl:{start:{line:80,column:44},end:{line:80,column:45}},loc:{start:{line:80,column:104},end:{line:85,column:3}},line:80},3:{name:"(anonymous_3)",decl:{start:{line:87,column:35},end:{line:87,column:36}},loc:{start:{line:87,column:83},end:{line:93,column:3}},line:87},4:{name:"(anonymous_4)",decl:{start:{line:96,column:4},end:{line:96,column:5}},loc:{start:{line:96,column:29},end:{line:108,column:5}},line:96},5:{name:"(anonymous_5)",decl:{start:{line:113,column:4},end:{line:113,column:5}},loc:{start:{line:113,column:74},end:{line:125,column:5}},line:113},6:{name:"(anonymous_6)",decl:{start:{line:130,column:4},end:{line:130,column:5}},loc:{start:{line:130,column:41},end:{line:130,column:73}},line:130},7:{name:"(anonymous_7)",decl:{start:{line:135,column:4},end:{line:135,column:5}},loc:{start:{line:135,column:41},end:{line:135,column:69}},line:135},8:{name:"(anonymous_8)",decl:{start:{line:140,column:4},end:{line:140,column:5}},loc:{start:{line:140,column:41},end:{line:140,column:68}},line:140},9:{name:"(anonymous_9)",decl:{start:{line:144,column:34},end:{line:144,column:35}},loc:{start:{line:144,column:70},end:{line:144,column:87}},line:144},10:{name:"(anonymous_10)",decl:{start:{line:147,column:4},end:{line:147,column:5}},loc:{start:{line:147,column:40},end:{line:154,column:5}},line:147},11:{name:"(anonymous_11)",decl:{start:{line:159,column:4},end:{line:159,column:5}},loc:{start:{line:159,column:40},end:{line:180,column:5}},line:159},12:{name:"(anonymous_12)",decl:{start:{line:194,column:26},end:{line:194,column:27}},loc:{start:{line:194,column:33},end:{line:194,column:51}},line:194}},branchMap:{0:{loc:{start:{line:53,column:2},end:{line:53,column:26}},type:"default-arg",locations:[{start:{line:53,column:9},end:{line:53,column:26}}],line:53},1:{loc:{start:{line:56,column:2},end:{line:56,column:30}},type:"default-arg",locations:[{start:{line:56,column:11},end:{line:56,column:30}}],line:56},2:{loc:{start:{line:81,column:21},end:{line:81,column:54}},type:"cond-expr",locations:[{start:{line:81,column:39},end:{line:81,column:40}},{start:{line:81,column:43},end:{line:81,column:54}}],line:81},3:{loc:{start:{line:98,column:6},end:{line:100,column:7}},type:"if",locations:[{start:{line:98,column:6},end:{line:100,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:98},4:{loc:{start:{line:103,column:6},end:{line:105,column:7}},type:"if",locations:[{start:{line:103,column:6},end:{line:105,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:103},5:{loc:{start:{line:115,column:6},end:{line:117,column:7}},type:"if",locations:[{start:{line:115,column:6},end:{line:117,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:115},6:{loc:{start:{line:120,column:6},end:{line:122,column:7}},type:"if",locations:[{start:{line:120,column:6},end:{line:122,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:120},7:{loc:{start:{line:130,column:41},end:{line:130,column:73}},type:"binary-expr",locations:[{start:{line:130,column:41},end:{line:130,column:52}},{start:{line:130,column:56},end:{line:130,column:73}}],line:130},8:{loc:{start:{line:171,column:6},end:{line:179,column:10}},type:"binary-expr",locations:[{start:{line:171,column:6},end:{line:171,column:16}},{start:{line:172,column:8},end:{line:179,column:10}}],line:171},9:{loc:{start:{line:194,column:33},end:{line:194,column:51}},type:"cond-expr",locations:[{start:{line:194,column:44},end:{line:194,column:47}},{start:{line:194,column:50},end:{line:194,column:51}}],line:194}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0,52:0,53:0,54:0,55:0,56:0,57:0,58:0,59:0,60:0,61:0,62:0,63:0,64:0,65:0,66:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},b:{0:[0],1:[0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"b199105654c138164eebc7ff51022962a5af2d9a"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"b199105654c138164eebc7ff51022962a5af2d9a"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_1lu9ee06c4=function(){return actualCoverage},actualCoverage}cov_1lu9ee06c4();const TASK_DEFAULT_FILL=(cov_1lu9ee06c4().s[0]++,"transparent"),TASK_DEFAULT_STROKE=(cov_1lu9ee06c4().s[1]++,"black"),TASK_BORDER_RADIUS=(cov_1lu9ee06c4().s[2]++,4),TASK_HEIGHT=(cov_1lu9ee06c4().s[3]++,40);cov_1lu9ee06c4().s[4]++;const Task=({data,fill=(cov_1lu9ee06c4().b[0][0]++,TASK_DEFAULT_FILL),onLeave,onOver,stroke=(cov_1lu9ee06c4().b[1][0]++,TASK_DEFAULT_STROKE),x,y,width})=>{cov_1lu9ee06c4().f[0]++;const{columnWidth,dragResolution:{sizeInUnits:dragSizeInUnits,unit:dragUnit},interval,onTaskClick,onTaskDrag,resolution:{sizeInUnits,unit},resources}=(cov_1lu9ee06c4().s[5]++,(0,_contexts_Timeline__WEBPACK_IMPORTED_MODULE_3__.i)()),{id:taskId}=(cov_1lu9ee06c4().s[6]++,data),[dragging,setDragging]=(cov_1lu9ee06c4().s[7]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1)),dragSnapInPX=(cov_1lu9ee06c4().s[8]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{cov_1lu9ee06c4().f[1]++;const dragSnapInResolutionUnit=(cov_1lu9ee06c4().s[9]++,luxon__WEBPACK_IMPORTED_MODULE_2__.nL.fromObject({[dragUnit]:dragSizeInUnits}).as(unit));return cov_1lu9ee06c4().s[10]++,Math.floor(columnWidth*dragSnapInResolutionUnit)}),[columnWidth,dragUnit,dragSizeInUnits,unit])),getBoundedCoordinates=(cov_1lu9ee06c4().s[11]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((xCoordinate,resourceIndex)=>{cov_1lu9ee06c4().f[2]++;const boundedX=(cov_1lu9ee06c4().s[12]++,xCoordinate<0?(cov_1lu9ee06c4().b[2][0]++,0):(cov_1lu9ee06c4().b[2][1]++,xCoordinate)),boundedY=(cov_1lu9ee06c4().s[13]++,resourceIndex*_utils_resources__WEBPACK_IMPORTED_MODULE_5__.Cu+_utils_resources__WEBPACK_IMPORTED_MODULE_5__.qG);return cov_1lu9ee06c4().s[14]++,{x:boundedX,y:boundedY}}),[])),getDragPoint=(cov_1lu9ee06c4().s[15]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{cov_1lu9ee06c4().f[3]++;const{target}=(cov_1lu9ee06c4().s[16]++,e),dragX=(cov_1lu9ee06c4().s[17]++,target.x()),dragY=(cov_1lu9ee06c4().s[18]++,target.y());return cov_1lu9ee06c4().s[19]++,{x:dragX,y:dragY}}),[])),getResourceIndexFromYCoordinate=(cov_1lu9ee06c4().s[20]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((yCoordinate=>{cov_1lu9ee06c4().f[4]++;const rawIndex=(cov_1lu9ee06c4().s[21]++,Math.floor(yCoordinate/_utils_resources__WEBPACK_IMPORTED_MODULE_5__.Cu));if(cov_1lu9ee06c4().s[22]++,rawIndex<1)return cov_1lu9ee06c4().b[3][0]++,cov_1lu9ee06c4().s[23]++,1;cov_1lu9ee06c4().b[3][1]++;const lastResourceIndex=(cov_1lu9ee06c4().s[24]++,resources.length-1);return cov_1lu9ee06c4().s[25]++,rawIndex>lastResourceIndex?(cov_1lu9ee06c4().b[4][0]++,cov_1lu9ee06c4().s[26]++,lastResourceIndex):(cov_1lu9ee06c4().b[4][1]++,cov_1lu9ee06c4().s[27]++,rawIndex)}),[resources])),onTaskMouseEvent=(cov_1lu9ee06c4().s[28]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((e,callback)=>{cov_1lu9ee06c4().f[5]++;const stage=(cov_1lu9ee06c4().s[29]++,e.target.getStage());if(cov_1lu9ee06c4().s[30]++,!stage)return cov_1lu9ee06c4().b[5][0]++,void cov_1lu9ee06c4().s[31]++;cov_1lu9ee06c4().b[5][1]++;const point=(cov_1lu9ee06c4().s[32]++,stage.getPointerPosition());if(cov_1lu9ee06c4().s[33]++,!point)return cov_1lu9ee06c4().b[6][0]++,void cov_1lu9ee06c4().s[34]++;cov_1lu9ee06c4().b[6][1]++,cov_1lu9ee06c4().s[35]++,callback(taskId,point)}),[taskId])),onClick=(cov_1lu9ee06c4().s[36]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>(cov_1lu9ee06c4().f[6]++,cov_1lu9ee06c4().s[37]++,cov_1lu9ee06c4().b[7][0]++,onTaskClick&&(cov_1lu9ee06c4().b[7][1]++,onTaskClick(data)))),[data,onTaskClick])),onTaskLeave=(cov_1lu9ee06c4().s[38]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>(cov_1lu9ee06c4().f[7]++,cov_1lu9ee06c4().s[39]++,onTaskMouseEvent(e,onLeave))),[onLeave,onTaskMouseEvent])),onTaskOver=(cov_1lu9ee06c4().s[40]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>(cov_1lu9ee06c4().f[8]++,cov_1lu9ee06c4().s[41]++,onTaskMouseEvent(e,onOver))),[onOver,onTaskMouseEvent])),onDragStart=(cov_1lu9ee06c4().s[42]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>(cov_1lu9ee06c4().f[9]++,cov_1lu9ee06c4().s[43]++,setDragging(!0))),[])),onDragMove=(cov_1lu9ee06c4().s[44]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{cov_1lu9ee06c4().f[10]++;const{x,y}=(cov_1lu9ee06c4().s[45]++,getDragPoint(e)),resourceIndex=(cov_1lu9ee06c4().s[46]++,getResourceIndexFromYCoordinate(y)),dragFinalX=(cov_1lu9ee06c4().s[47]++,Math.ceil(x/dragSnapInPX)*dragSnapInPX),point=(cov_1lu9ee06c4().s[48]++,getBoundedCoordinates(dragFinalX,resourceIndex));cov_1lu9ee06c4().s[49]++,e.target.setPosition(point),cov_1lu9ee06c4().s[50]++,onOver(taskId,point)}),[dragSnapInPX,getBoundedCoordinates,getDragPoint,getResourceIndexFromYCoordinate,onOver,taskId])),onDragEnd=(cov_1lu9ee06c4().s[51]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{cov_1lu9ee06c4().f[11]++;const{x,y}=(cov_1lu9ee06c4().s[52]++,getDragPoint(e)),timeOffset=(cov_1lu9ee06c4().s[53]++,x*sizeInUnits/columnWidth),newStartInMillis=(cov_1lu9ee06c4().s[54]++,interval.start.plus({[unit]:timeOffset}).toMillis()),newEndInMillis=(cov_1lu9ee06c4().s[55]++,newStartInMillis+luxon__WEBPACK_IMPORTED_MODULE_2__.nL.fromObject({[unit]:width*sizeInUnits/columnWidth}).toMillis()),resourceIndex=(cov_1lu9ee06c4().s[56]++,getResourceIndexFromYCoordinate(y)),resourceId=(cov_1lu9ee06c4().s[57]++,`${resourceIndex}`);cov_1lu9ee06c4().s[58]++,(0,_utils_logger__WEBPACK_IMPORTED_MODULE_4__.o7)("Task",`New Start: ${x} /  ${x} / ${timeOffset} / ${newStartInMillis}`),cov_1lu9ee06c4().s[59]++,(0,_utils_logger__WEBPACK_IMPORTED_MODULE_4__.o7)("Task",`StartTime: ${luxon__WEBPACK_IMPORTED_MODULE_2__.ou.fromMillis(newStartInMillis).toISO()}`),cov_1lu9ee06c4().s[60]++,(0,_utils_logger__WEBPACK_IMPORTED_MODULE_4__.o7)("Task",`End: ${luxon__WEBPACK_IMPORTED_MODULE_2__.ou.fromMillis(newEndInMillis).toISO()}`),cov_1lu9ee06c4().s[61]++,setDragging(!1),cov_1lu9ee06c4().s[62]++,cov_1lu9ee06c4().b[8][0]++,onTaskDrag&&(cov_1lu9ee06c4().b[8][1]++,onTaskDrag({...data,resourceId,time:{end:newEndInMillis,start:newStartInMillis}}))}),[columnWidth,data,interval.start,onTaskDrag,getDragPoint,getResourceIndexFromYCoordinate,sizeInUnits,unit,width])),opacity=(cov_1lu9ee06c4().s[63]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(cov_1lu9ee06c4().f[12]++,cov_1lu9ee06c4().s[64]++,dragging?(cov_1lu9ee06c4().b[9][0]++,.5):(cov_1lu9ee06c4().b[9][1]++,1))),[dragging]));return cov_1lu9ee06c4().s[65]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_konva__WEBPACK_IMPORTED_MODULE_1__.UL,{id:taskId,cornerRadius:TASK_BORDER_RADIUS,draggable:!!onTaskDrag,fill,height:TASK_HEIGHT,onClick,onDragStart,onDragMove,onDragEnd,onMouseLeave:onTaskLeave,onMouseMove:onTaskOver,onMouseOver:onTaskOver,opacity,stroke,x,y,width})};Task.displayName="Task";const TaskDocs=(cov_1lu9ee06c4().s[66]++,Task),__WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Task);try{TaskDocs.displayName="TaskDocs",TaskDocs.__docgenInfo={description:"",displayName:"TaskDocs",props:{fill:{defaultValue:{value:"transparent"},description:"The fill color of a canvas item",name:"fill",required:!1,type:{name:"string"}},stroke:{defaultValue:{value:"black"},description:"The stroke color of a canvas item",name:"stroke",required:!1,type:{name:"string"}},x:{defaultValue:null,description:"The x coordinate of a point on canvas",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"The y coordinate of a point on canvas",name:"y",required:!0,type:{name:"number"}},data:{defaultValue:null,description:"Task data (id, label, resourceId, time)",name:"data",required:!0,type:{name:"TaskData"}},onLeave:{defaultValue:null,description:"On mouse leave event handler",name:"onLeave",required:!0,type:{name:"TaskMouseEventHandler"}},onOver:{defaultValue:null,description:"On mouse over event handler",name:"onOver",required:!0,type:{name:"TaskMouseEventHandler"}},width:{defaultValue:null,description:"The width of the task",name:"width",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/@components/Task/index.tsx#TaskDocs"]={docgenInfo:TaskDocs.__docgenInfo,name:"TaskDocs",path:"src/@components/Task/index.tsx#TaskDocs"})}catch(__react_docgen_typescript_loader_error){}try{Task.displayName="Task",Task.__docgenInfo={description:"This component renders a simple task as a rectangle inside a canvas.\nEach task is rendered by `TasksLayer` component, with a loop on each task provided to `KonvaTimeline`.\n`TasksLayer` is also responsible of handling callback for task components.\n\nSupported events (click, leave, over) respond with callbacks of type:\n<br />\n `(taskId: string, point: KonvaPoint) => void`\n\nThe playground has a simulated canvas with height: 200px and width: 100%",displayName:"Task",props:{fill:{defaultValue:{value:"transparent"},description:"The fill color of a canvas item",name:"fill",required:!1,type:{name:"string"}},stroke:{defaultValue:{value:"black"},description:"The stroke color of a canvas item",name:"stroke",required:!1,type:{name:"string"}},x:{defaultValue:null,description:"The x coordinate of a point on canvas",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"The y coordinate of a point on canvas",name:"y",required:!0,type:{name:"number"}},data:{defaultValue:null,description:"Task data (id, label, resourceId, time)",name:"data",required:!0,type:{name:"TaskData"}},onLeave:{defaultValue:null,description:"On mouse leave event handler",name:"onLeave",required:!0,type:{name:"TaskMouseEventHandler"}},onOver:{defaultValue:null,description:"On mouse over event handler",name:"onOver",required:!0,type:{name:"TaskMouseEventHandler"}},width:{defaultValue:null,description:"The width of the task",name:"width",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/@components/Task/index.tsx#Task"]={docgenInfo:Task.__docgenInfo,name:"Task",path:"src/@components/Task/index.tsx#Task"})}catch(__react_docgen_typescript_loader_error){}}}]);