/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'bluePageSymbol',
            type:'rect',
            rect:['26','28','auto','auto','auto','auto']
         },
         {
            id:'BlueTab',
            type:'rect',
            rect:['0px','0px','187px','68px','auto','auto'],
            borderRadius:["10px","0px 0px","0px 0px","0px 0px"],
            fill:["rgba(56,47,135,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'RedTab',
            type:'rect',
            rect:['188px','0px','187px','68px','auto','auto'],
            borderRadius:["10px","10px","0px 0px","0px 0px"],
            fill:["rgba(146,51,78,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'redPageSymbol',
            display:'none',
            type:'rect',
            rect:['26','28','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'bluePageSymbol',
            symbolName:'bluePageSymbol'
         },
         {
            id:'redPageSymbol',
            symbolName:'redPageSymbol'
         }
         ]
      },
   states: {
      "Base State": {
         "${_BlueTab}": [
            ["style", "left", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '800px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "${_redPageSymbol}": [
            ["style", "top", '68px'],
            ["style", "overflow", 'visible'],
            ["transform", "scaleX", '1.09418'],
            ["style", "left", '34px'],
            ["style", "display", 'none']
         ],
         "${_RedTab}": [
            ["color", "background-color", 'rgba(146,51,78,1.00)'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '188px'],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_bluePageSymbol}": [
            ["style", "top", '68px'],
            ["style", "left", '35px'],
            ["transform", "scaleX", '1.09565']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid12", tween: [ "style", "${_redPageSymbol}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid19", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_redPageSymbol}', [] ], ""], position: 0 }         ]
      }
   }
},
"bluePageSymbol": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','731px','532px','auto','auto'],
      id: 'bluePage',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(56,47,135,1.00)']
   },
   {
      rect: ['110px','223px','511px','219px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',[3.04,'em'],'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text2',
      text: 'This is the Blue Page',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['150px','333px','441px','122px','auto','auto'],
      type: 'rect',
      id: 'BluePageInput',
      stroke: [0,'rgba(0,0,0,1)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_bluePage}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(56,47,135,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '532px'],
            ["style", "width", '731px']
         ],
         "${_BluePageInput}": [
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(192,192,192,0.00)']
         ],
         "${_Text2}": [
            ["style", "top", '-236px'],
            ["style", "opacity", '0'],
            ["style", "left", '110px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
            { id: "eid16", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1500 },
            { id: "eid43", tween: [ "style", "${_BluePageInput}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid44", tween: [ "style", "${_BluePageInput}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid18", tween: [ "style", "${_Text2}", "top", '223px', { fromValue: '-236px'}], position: 0, duration: 1500 }         ]
      }
   }
},
"redPageSymbol": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'redPage',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','800px','532px','auto','auto'],
      fill: ['rgba(146,51,78,1)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',[3.04,'em'],'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text',
      id: 'Text',
      text: 'This is the RED Page !',
      align: 'center',
      rect: ['126px','266px','504px','194px','auto','auto']
   },
   {
      rect: ['767px','29px','168px','52px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      opacity: 0.7403564453125,
      id: 'button1',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(219,207,219,1.00)']
   },
   {
      rect: ['767px','105px','168px','52px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      opacity: 0.7403564453125,
      id: 'button2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(219,207,219,1.00)']
   },
   {
      rect: ['767px','179px','168px','52px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      opacity: 0.7403564453125,
      id: 'button3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(219,207,219,1.00)']
   },
   {
      rect: ['767px','255px','168px','52px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      opacity: 0.7403564453125,
      id: 'button4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(219,207,219,1.00)']
   },
   {
      rect: ['767px','331px','168px','52px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      opacity: 0.7403564453125,
      id: 'button5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(219,207,219,1.00)'],
      c: [
      {
         font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         id: 'ClickMeButtonText',
         text: 'Click ME!',
         type: 'text',
         rect: ['27px','15px','114px','27px','auto','auto']
      }]
   },
   {
      font: ['Arial, Helvetica, sans-serif',[1.27,'em'],'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      text: '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"',
      id: 'loremText',
      opacity: 1,
      align: 'left',
      rect: ['239px','-459px','431px','459px','auto','auto']
   },
   {
      id: 'popOverSym',
      type: 'rect',
      rect: ['321','221','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'popOverSym',
      symbolName: 'popOverSym'
   }   ]
   },
   states: {
      "Base State": {
         "${_button3}": [
            ["style", "top", '179px'],
            ["style", "opacity", '0.7403564453125'],
            ["style", "left", '767px'],
            ["color", "background-color", 'rgba(219,207,219,1.00)']
         ],
         "${_button1}": [
            ["style", "top", '29px'],
            ["style", "opacity", '0.7403564453125'],
            ["style", "left", '767px'],
            ["color", "background-color", 'rgba(219,207,219,1.00)']
         ],
         "${_redPage}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(146,51,78,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '800px']
         ],
         "${_button5}": [
            ["style", "top", '331px'],
            ["style", "opacity", '0.7403564453125'],
            ["style", "left", '767px'],
            ["color", "background-color", 'rgba(219,207,219,1.00)']
         ],
         "${_button4}": [
            ["style", "top", '255px'],
            ["style", "opacity", '0.7403564453125'],
            ["style", "left", '767px'],
            ["color", "background-color", 'rgba(219,207,219,1.00)']
         ],
         "${_loremText}": [
            ["style", "top", '-525px'],
            ["style", "opacity", '0'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '1.27em']
         ],
         "${_ClickMeButtonText}": [
            ["style", "top", '15px'],
            ["style", "height", '27px'],
            ["style", "left", '27px'],
            ["style", "width", '114px']
         ],
         "${_Text}": [
            ["style", "left", '126px'],
            ["style", "letter-spacing", '0em'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '1'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '3.04em']
         ],
         "${symbolSelector}": [
            ["style", "height", '532px'],
            ["style", "width", '731px']
         ],
         "${_button2}": [
            ["style", "top", '105px'],
            ["style", "opacity", '0.7403564453125'],
            ["style", "left", '767px'],
            ["color", "background-color", 'rgba(219,207,219,1.00)']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid20", tween: [ "style", "${_button4}", "left", '29px', { fromValue: '767px'}], position: 1803, duration: 379 },
            { id: "eid24", tween: [ "style", "${_button2}", "left", '29px', { fromValue: '767px'}], position: 1460, duration: 379 },
            { id: "eid21", tween: [ "style", "${_button1}", "left", '29px', { fromValue: '767px'}], position: 1250, duration: 379 },
            { id: "eid13", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1500 },
            { id: "eid22", tween: [ "style", "${_button3}", "left", '29px', { fromValue: '767px'}], position: 1629, duration: 379 },
            { id: "eid23", tween: [ "style", "${_button5}", "left", '29px', { fromValue: '767px'}], position: 2000, duration: 379 },
            { id: "eid14", tween: [ "style", "${_Text}", "left", '736px', { fromValue: '126px'}], position: 0, duration: 1500 },
            { id: "eid25", tween: [ "style", "${_loremText}", "top", '29px', { fromValue: '-525px'}], position: 2379, duration: 621 },
            { id: "eid27", tween: [ "style", "${_loremText}", "opacity", '1', { fromValue: '0'}], position: 2379, duration: 621 },
            { id: "eid36", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_popOverSym}', [] ], ""], position: 0 }         ]
      }
   }
},
"popOverSym": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','159px','120px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'popOver',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(220,220,220,1.00)']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'closeBox',
      rect: ['302','-179px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'closeBox',
      symbolName: 'closeBox'
   }   ]
   },
   states: {
      "Base State": {
         "${_closeBox}": [
            ["style", "top", '-179px'],
            ["style", "display", 'none'],
            ["style", "overflow", 'visible']
         ],
         "${_popOver}": [
            ["color", "background-color", 'rgba(220,220,220,1.00)'],
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '120px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '159px']
         ],
         "${symbolSelector}": [
            ["style", "height", '120px'],
            ["style", "width", '159px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid33", tween: [ "style", "${_popOver}", "top", '-187px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeInOutBounce" },
            { id: "eid32", tween: [ "style", "${_popOver}", "left", '-287px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeInOutBounce" },
            { id: "eid42", tween: [ "style", "${_popOver}", "width", '658px', { fromValue: '159px'}], position: 0, duration: 500, easing: "easeInOutBounce" },
            { id: "eid34", tween: [ "style", "${_closeBox}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid35", tween: [ "style", "${_closeBox}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid41", tween: [ "style", "${_popOver}", "height", '497px', { fromValue: '120px'}], position: 0, duration: 500, easing: "easeInOutBounce" },
            { id: "eid29", tween: [ "style", "${_popOver}", "opacity", '0.89996337890625', { fromValue: '0'}], position: 0, duration: 500 }         ]
      }
   }
},
"closeBox": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','59px','59px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'closeouterCircle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(200,52,52,1.00)']
   },
   {
      rect: ['17px','18px','25px','25px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      opacity: 0.56793212890625,
      id: 'closeInnerCircle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(200,52,52,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_closeInnerCircle}": [
            ["style", "top", '18px'],
            ["color", "background-color", 'rgba(200,52,52,1.00)'],
            ["style", "height", '25px'],
            ["style", "opacity", '0.56793212890625'],
            ["style", "left", '17px'],
            ["style", "width", '25px']
         ],
         "${_closeouterCircle}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(200,52,52,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '59px'],
            ["style", "width", '59px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-Demo1");
