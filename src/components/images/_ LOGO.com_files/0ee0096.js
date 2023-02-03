(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1223:function(t,o,r){"use strict";r(45),r(168);var e=r(1417),x=r(1418),k={props:{loader:{type:String,default:"white",validator:function(t){var o=["white","blue"].includes(t);return o||console.error("The loader prop can either be 'white' or 'blue', now default to 'white'"),o}},showLoader:{type:Boolean,default:!1},loaderStyle:{type:String,default:"full-screen",validator:function(t){var o=["static","full-screen","half-screen"].includes(t);return o||console.error("The loaderStyle prop can either be 'full-screen', 'half-screen' or 'static'"),o}},zIndex:{type:String,default:"z-10000",validator:function(t){var o=["z-1","z-1000","z-9998","z-9999","z-10000"].includes(t);return o||console.error("The zIndex prop needs to be one of the followings: 'z-1', 'z-1000', 'z-9998', 'z-9999', 'z-10000'"),o}},maxLoadTime:{type:Number,default:3e3},useTimeout:{type:Boolean,default:!0}},data:function(){return{isTimeUp:!1}},computed:{position:function(){switch(this.loaderStyle){case"full-screen":return"fixed";case"static":return"static";default:return"absolute"}},backgroundColor:function(){return"blue"===this.loader?"bg-logo-blue":"bg-white"}},watch:{showLoader:function(t){t&&(this.isTimeUp=!1,this.setTimer())}},mounted:function(){this.$lottie.loadAnimation({container:this.$refs.loader,renderer:"svg",autoplay:!0,animationData:"blue"===this.loader?x:e,loop:!0}),this.useTimeout&&this.setTimer()},methods:{setTimer:function(){var t=this;setTimeout((function(){t.isTimeUp=!0}),this.maxLoadTime)}}},n=r(8),component=Object(n.a)(k,(function(){var t=this,o=t._self._c;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.showLoader&&!t.isTimeUp,expression:"showLoader && !isTimeUp"}],staticClass:"inset-0 flex justify-center items-center",class:[t.position,t.backgroundColor,t.zIndex,{"h-0":!(t.showLoader&&!t.isTimeUp),"h-full":t.showLoader&&!t.isTimeUp,"w-0":!(t.showLoader&&!t.isTimeUp),"w-full":t.showLoader&&!t.isTimeUp}]},["blue"===t.loader?o("div",{ref:"loader",staticClass:"relative w-full h-auto sm:w-5/6 md-lg:w-2/4 xl:w-2/6"},[t._t("content")],2):o("div",{ref:"loader",staticClass:"sm:w-5/6 md-lg:w-2/4 xl:w-2/6"})])}),[],!1,null,null,null);o.a=component.exports},1417:function(t){t.exports=JSON.parse('{"v":"5.9.6","fr":60,"ip":0,"op":480,"w":1080,"h":1080,"nm":"Animation","ddd":0,"assets":[{"id":"comp_0","nm":"Front","fr":60,"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Front 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-270,"ix":10},"p":{"a":0,"k":[539.999,539.997,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-71.245,0],[0,-71.245],[71.245,0],[0,71.245]],"o":[[71.245,0],[0,71.245],[-71.245,0],[0,-71.245]],"v":[[0,-129],[129,0],[0,129],[-129,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.247058823705,0.51372551918,0.972549021244,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":16,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.145],"y":[1]},"o":{"x":[0.855],"y":[0]},"t":360,"s":[1]},{"t":420,"s":[75]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.145],"y":[1]},"o":{"x":[0.855],"y":[0]},"t":420,"s":[0]},{"t":480,"s":[76]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":360,"op":485,"st":360,"ct":1,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Front 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-180,"ix":10},"p":{"a":0,"k":[539.999,539.997,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-71.245,0],[0,-71.245],[71.245,0],[0,71.245]],"o":[[71.245,0],[0,71.245],[-71.245,0],[0,-71.245]],"v":[[0,-129],[129,0],[0,129],[-129,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.247058823705,0.51372551918,0.972549021244,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":16,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.145],"y":[1]},"o":{"x":[0.855],"y":[0]},"t":240,"s":[1]},{"t":300,"s":[75]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.145],"y":[1]},"o":{"x":[0.855],"y":[0]},"t":300,"s":[0]},{"t":360,"s":[76]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":240,"op":365,"st":240,"ct":1,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Front 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-90,"ix":10},"p":{"a":0,"k":[539.999,539.997,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-71.245,0],[0,-71.245],[71.245,0],[0,71.245]],"o":[[71.245,0],[0,71.245],[-71.245,0],[0,-71.245]],"v":[[0,-129],[129,0],[0,129],[-129,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.247058823705,0.51372551918,0.972549021244,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":16,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.145],"y":[1]},"o":{"x":[0.855],"y":[0]},"t":120,"s":[1]},{"t":180,"s":[75]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.145],"y":[1]},"o":{"x":[0.855],"y":[0]},"t":180,"s":[0]},{"t":240,"s":[76]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":120,"op":245,"st":120,"ct":1,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Front","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[539.999,539.997,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-71.245,0],[0,-71.245],[71.245,0],[0,71.245]],"o":[[71.245,0],[0,71.245],[-71.245,0],[0,-71.245]],"v":[[0,-129],[129,0],[0,129],[-129,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.247058823705,0.51372551918,0.972549021244,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":16,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.145],"y":[1]},"o":{"x":[0.855],"y":[0]},"t":0,"s":[1]},{"t":60,"s":[75]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.145],"y":[1]},"o":{"x":[0.855],"y":[0]},"t":60,"s":[0]},{"t":120,"s":[76]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":125,"st":0,"ct":1,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Front","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":480,"s":[720]}],"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":1080,"h":1080,"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"Front","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":60,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":480,"s":[720]}],"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":1080,"h":1080,"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Back","sr":1,"ks":{"o":{"a":0,"k":16,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[539.999,539.997,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-71.245,0],[0,-71.245],[71.245,0],[0,71.245]],"o":[[71.245,0],[0,71.245],[-71.245,0],[0,-71.245]],"v":[[0,-129],[129,0],[0,129],[-129,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.247058823705,0.51372551918,0.972549021244,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":16,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Logo","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,-0.43],[0,0],[0,0],[0.43,0],[0,0],[0.01,0.43],[0,0],[-0.29,0],[0,0],[0,-0.29],[0,0],[0,0]],"o":[[0,0],[0.43,0],[0,0],[0,0],[0,0.43],[0,0],[-0.43,0],[0,0],[0,-0.29],[0,0],[0.29,0],[0,0],[0,0],[0,0]],"v":[[-36.339,-17.492],[-5.449,-17.492],[-4.669,-16.712],[-4.669,-16.712],[-4.669,-2.102],[-5.449,-1.322],[-53.289,-1.072],[-54.079,-1.852],[-54.079,-52.952],[-53.559,-53.472],[-36.869,-53.472],[-36.349,-52.952],[-36.349,-52.952],[-36.349,-17.492]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[-4.24,-4.87],[-4.61,4.55],[4.26,4.86],[4.62,-4.55]],"o":[[-4.23,4.88],[4.61,4.55],[4.26,-4.86],[-4.62,-4.55],[0,0]],"v":[[19.441,20.778],[19.461,37.768],[36.101,37.768],[36.101,20.778],[19.441,20.778]],"c":false},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[-0.09,-3.13],[-2.13,-2.31],[-4.61,4.55],[0.09,3.14],[2.14,2.3],[4.62,-4.55]],"o":[[-2.12,2.31],[-0.1,3.14],[4.61,4.55],[2.14,-2.3],[0.09,-3.14],[-4.61,-4.54],[0,0]],"v":[[19.441,-36.572],[16.271,-28.082],[19.451,-19.582],[36.091,-19.582],[39.291,-28.082],[36.091,-36.582],[19.441,-36.572]],"c":false},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[1.39,3.24],[-0.03,3.78],[-1.49,3.47],[-2.59,2.4],[-3.34,1.23],[-7.27,-2.65],[-2.64,-2.39],[-1.38,-3.25],[2.96,-7.02],[2.58,-2.4],[3.35,-1.22],[7.27,2.65],[2.64,2.39]],"o":[[-1.47,-3.48],[-0.03,-3.77],[1.37,-3.25],[2.65,-2.39],[7.27,-2.65],[3.35,1.23],[2.58,2.4],[2.96,7.02],[-1.38,3.24],[-2.64,2.4],[-7.27,2.65],[-3.35,-1.23],[-2.58,-2.4]],"v":[[2.001,39.678],[-0.179,28.678],[2.021,17.698],[8.031,9.138],[17.101,3.658],[39.611,3.658],[48.681,9.138],[54.691,17.698],[54.691,39.658],[48.681,48.218],[39.611,53.698],[17.101,53.698],[8.031,48.218]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[-0.04,3.85],[-1.52,3.55],[-2.66,2.37],[-3.35,1.18],[-3.8,-0.02],[-2.24,-0.53],[-1.8,-0.92],[-2.15,-2.8],[-0.68,-1.4],[0,0],[1.63,1.2],[2.1,-0.03],[2.36,-2.51],[-4.69,-5.31],[-3.45,0.13],[-1.71,0.81],[-1.11,1.33],[0,0],[0,0],[0,0],[5.08,-5.55],[8.81,0],[3.27,1.27],[2.54,2.3],[1.37,3.24]],"o":[[-0.04,-3.86],[1.39,-3.27],[2.68,-2.33],[3.58,-1.27],[2.31,-0.01],[1.97,0.46],[3.12,1.66],[0.94,1.25],[0,0],[-0.87,-1.82],[-1.67,-1.27],[-3.44,-0.12],[-4.69,5.31],[2.35,2.51],[1.89,0.02],[1.57,-0.73],[0,0],[0,0],[0,0],[0,10.23],[-5.08,5.55],[-3.51,0.01],[-3.19,-1.23],[-2.59,-2.39],[-1.51,-3.54]],"v":[[-56.919,28.678],[-54.669,17.438],[-48.519,8.878],[-39.389,3.568],[-28.239,1.678],[-21.389,2.458],[-15.719,4.538],[-7.729,11.318],[-5.289,15.308],[-18.619,22.108],[-22.419,17.518],[-28.239,15.608],[-37.369,19.368],[-37.369,37.968],[-28.239,41.728],[-22.759,40.528],[-18.689,37.408],[-29.769,37.408],[-29.769,23.678],[-1.319,23.678],[-8.939,47.358],[-29.769,55.678],[-40.019,53.768],[-48.689,48.438],[-54.689,39.888]],"c":true},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[1.39,3.24],[-0.03,3.78],[-1.49,3.47],[-2.59,2.4],[-3.34,1.23],[-7.27,-2.65],[-2.64,-2.39],[-1.38,-3.25],[0.03,-3.78],[1.5,-3.47],[2.58,-2.4],[3.35,-1.23],[7.27,2.65],[2.65,2.39]],"o":[[-1.47,-3.48],[-0.03,-3.77],[1.37,-3.25],[2.65,-2.39],[7.27,-2.65],[3.35,1.23],[2.58,2.4],[1.5,3.47],[0.03,3.77],[-1.38,3.24],[-2.64,2.39],[-7.27,2.65],[-3.35,-1.23],[-2.58,-2.39]],"v":[[2.001,-17.682],[-0.179,-28.682],[2.021,-39.662],[8.031,-48.222],[17.101,-53.702],[39.611,-53.702],[48.681,-48.222],[54.691,-39.662],[56.911,-28.682],[54.691,-17.702],[48.681,-9.142],[39.611,-3.662],[17.101,-3.662],[8.031,-9.142]],"c":true},"ix":2},"nm":"Path 6","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.247058823705,0.51372551918,0.972549021244,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Logo","np":7,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"ct":1,"bm":0}],"markers":[]}')},1418:function(t){t.exports=JSON.parse('{"v":"5.9.6","fr":60,"ip":0,"op":480,"w":1080,"h":1080,"nm":"Animation","ddd":0,"assets":[{"id":"comp_0","nm":"Front","fr":60,"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Front 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-270,"ix":10},"p":{"a":0,"k":[539.999,539.997,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-71.245,0],[0,-71.245],[71.245,0],[0,71.245]],"o":[[71.245,0],[0,71.245],[-71.245,0],[0,-71.245]],"v":[[0,-129],[129,0],[0,129],[-129,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":16,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.145],"y":[1]},"o":{"x":[0.855],"y":[0]},"t":360,"s":[1]},{"t":420,"s":[75]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.145],"y":[1]},"o":{"x":[0.855],"y":[0]},"t":420,"s":[0]},{"t":480,"s":[76]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":360,"op":485,"st":360,"ct":1,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Front 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-180,"ix":10},"p":{"a":0,"k":[539.999,539.997,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-71.245,0],[0,-71.245],[71.245,0],[0,71.245]],"o":[[71.245,0],[0,71.245],[-71.245,0],[0,-71.245]],"v":[[0,-129],[129,0],[0,129],[-129,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":16,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.145],"y":[1]},"o":{"x":[0.855],"y":[0]},"t":240,"s":[1]},{"t":300,"s":[75]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.145],"y":[1]},"o":{"x":[0.855],"y":[0]},"t":300,"s":[0]},{"t":360,"s":[76]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":240,"op":365,"st":240,"ct":1,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Front 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-90,"ix":10},"p":{"a":0,"k":[539.999,539.997,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-71.245,0],[0,-71.245],[71.245,0],[0,71.245]],"o":[[71.245,0],[0,71.245],[-71.245,0],[0,-71.245]],"v":[[0,-129],[129,0],[0,129],[-129,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":16,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.145],"y":[1]},"o":{"x":[0.855],"y":[0]},"t":120,"s":[1]},{"t":180,"s":[75]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.145],"y":[1]},"o":{"x":[0.855],"y":[0]},"t":180,"s":[0]},{"t":240,"s":[76]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":120,"op":245,"st":120,"ct":1,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Front","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[539.999,539.997,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-71.245,0],[0,-71.245],[71.245,0],[0,71.245]],"o":[[71.245,0],[0,71.245],[-71.245,0],[0,-71.245]],"v":[[0,-129],[129,0],[0,129],[-129,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":16,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.145],"y":[1]},"o":{"x":[0.855],"y":[0]},"t":0,"s":[1]},{"t":60,"s":[75]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.145],"y":[1]},"o":{"x":[0.855],"y":[0]},"t":60,"s":[0]},{"t":120,"s":[76]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":125,"st":0,"ct":1,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Front","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":480,"s":[720]}],"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":1080,"h":1080,"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"Front","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":60,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":480,"s":[720]}],"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":1080,"h":1080,"ip":0,"op":600,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Back","sr":1,"ks":{"o":{"a":0,"k":16,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[539.999,539.997,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-71.245,0],[0,-71.245],[71.245,0],[0,71.245]],"o":[[71.245,0],[0,71.245],[-71.245,0],[0,-71.245]],"v":[[0,-129],[129,0],[0,129],[-129,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":16,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Logo","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,-0.43],[0,0],[0,0],[0.43,0],[0,0],[0.01,0.43],[0,0],[-0.29,0],[0,0],[0,-0.29],[0,0],[0,0]],"o":[[0,0],[0.43,0],[0,0],[0,0],[0,0.43],[0,0],[-0.43,0],[0,0],[0,-0.29],[0,0],[0.29,0],[0,0],[0,0],[0,0]],"v":[[-36.339,-17.492],[-5.449,-17.492],[-4.669,-16.712],[-4.669,-16.712],[-4.669,-2.102],[-5.449,-1.322],[-53.289,-1.072],[-54.079,-1.852],[-54.079,-52.952],[-53.559,-53.472],[-36.869,-53.472],[-36.349,-52.952],[-36.349,-52.952],[-36.349,-17.492]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[-4.24,-4.87],[-4.61,4.55],[4.26,4.86],[4.62,-4.55]],"o":[[-4.23,4.88],[4.61,4.55],[4.26,-4.86],[-4.62,-4.55],[0,0]],"v":[[19.441,20.778],[19.461,37.768],[36.101,37.768],[36.101,20.778],[19.441,20.778]],"c":false},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[-0.09,-3.13],[-2.13,-2.31],[-4.61,4.55],[0.09,3.14],[2.14,2.3],[4.62,-4.55]],"o":[[-2.12,2.31],[-0.1,3.14],[4.61,4.55],[2.14,-2.3],[0.09,-3.14],[-4.61,-4.54],[0,0]],"v":[[19.441,-36.572],[16.271,-28.082],[19.451,-19.582],[36.091,-19.582],[39.291,-28.082],[36.091,-36.582],[19.441,-36.572]],"c":false},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[1.39,3.24],[-0.03,3.78],[-1.49,3.47],[-2.59,2.4],[-3.34,1.23],[-7.27,-2.65],[-2.64,-2.39],[-1.38,-3.25],[2.96,-7.02],[2.58,-2.4],[3.35,-1.22],[7.27,2.65],[2.64,2.39]],"o":[[-1.47,-3.48],[-0.03,-3.77],[1.37,-3.25],[2.65,-2.39],[7.27,-2.65],[3.35,1.23],[2.58,2.4],[2.96,7.02],[-1.38,3.24],[-2.64,2.4],[-7.27,2.65],[-3.35,-1.23],[-2.58,-2.4]],"v":[[2.001,39.678],[-0.179,28.678],[2.021,17.698],[8.031,9.138],[17.101,3.658],[39.611,3.658],[48.681,9.138],[54.691,17.698],[54.691,39.658],[48.681,48.218],[39.611,53.698],[17.101,53.698],[8.031,48.218]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[-0.04,3.85],[-1.52,3.55],[-2.66,2.37],[-3.35,1.18],[-3.8,-0.02],[-2.24,-0.53],[-1.8,-0.92],[-2.15,-2.8],[-0.68,-1.4],[0,0],[1.63,1.2],[2.1,-0.03],[2.36,-2.51],[-4.69,-5.31],[-3.45,0.13],[-1.71,0.81],[-1.11,1.33],[0,0],[0,0],[0,0],[5.08,-5.55],[8.81,0],[3.27,1.27],[2.54,2.3],[1.37,3.24]],"o":[[-0.04,-3.86],[1.39,-3.27],[2.68,-2.33],[3.58,-1.27],[2.31,-0.01],[1.97,0.46],[3.12,1.66],[0.94,1.25],[0,0],[-0.87,-1.82],[-1.67,-1.27],[-3.44,-0.12],[-4.69,5.31],[2.35,2.51],[1.89,0.02],[1.57,-0.73],[0,0],[0,0],[0,0],[0,10.23],[-5.08,5.55],[-3.51,0.01],[-3.19,-1.23],[-2.59,-2.39],[-1.51,-3.54]],"v":[[-56.919,28.678],[-54.669,17.438],[-48.519,8.878],[-39.389,3.568],[-28.239,1.678],[-21.389,2.458],[-15.719,4.538],[-7.729,11.318],[-5.289,15.308],[-18.619,22.108],[-22.419,17.518],[-28.239,15.608],[-37.369,19.368],[-37.369,37.968],[-28.239,41.728],[-22.759,40.528],[-18.689,37.408],[-29.769,37.408],[-29.769,23.678],[-1.319,23.678],[-8.939,47.358],[-29.769,55.678],[-40.019,53.768],[-48.689,48.438],[-54.689,39.888]],"c":true},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[1.39,3.24],[-0.03,3.78],[-1.49,3.47],[-2.59,2.4],[-3.34,1.23],[-7.27,-2.65],[-2.64,-2.39],[-1.38,-3.25],[0.03,-3.78],[1.5,-3.47],[2.58,-2.4],[3.35,-1.23],[7.27,2.65],[2.65,2.39]],"o":[[-1.47,-3.48],[-0.03,-3.77],[1.37,-3.25],[2.65,-2.39],[7.27,-2.65],[3.35,1.23],[2.58,2.4],[1.5,3.47],[0.03,3.77],[-1.38,3.24],[-2.64,2.39],[-7.27,2.65],[-3.35,-1.23],[-2.58,-2.39]],"v":[[2.001,-17.682],[-0.179,-28.682],[2.021,-39.662],[8.031,-48.222],[17.101,-53.702],[39.611,-53.702],[48.681,-48.222],[54.691,-39.662],[56.911,-28.682],[54.691,-17.702],[48.681,-9.142],[39.611,-3.662],[17.101,-3.662],[8.031,-9.142]],"c":true},"ix":2},"nm":"Path 6","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Logo","np":7,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":600,"st":0,"ct":1,"bm":0}],"markers":[]}')}}]);
//# sourceMappingURL=0ee0096.js.map