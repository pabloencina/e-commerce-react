(window.webpackJsonp=window.webpackJsonp||[]).push([[255,349],{1047:function(t){t.exports=JSON.parse('{"order":["industry","colors","fonts","type","keywords"]}')},1185:function(t,e,n){"use strict";var r=n(113);e.a={filters:{render:r.a},methods:{render:function(t){return this.$options.filters.render(t,this.ctx||this._self)}}}},1196:function(t,e,n){"use strict";var r=n(1185),o=n(30),c={mixins:[r.a],props:{page:{type:Object,default:function(){return{}}},ctx:{type:Object,default:function(){return null}},align:{type:String,default:"text-center"}},computed:Object(o.e)(["enterprise"])},l=n(8),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("header",{directives:[{name:"show",rawName:"v-show",value:t.page.show_intro,expression:"page.show_intro"}],staticClass:"mb-6",class:t.align},[e("div",{class:{"flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center":t.$slots["header-content"]}},[e("h1",{staticClass:"text-3xl md:text-4xl"},[t._v(t._s(t.render(t.page.title)))]),t._v(" "),t._t("header-content")],2),t._v(" "),t.page.intro_text?e("div",{staticClass:"mb-6 mt-2 article",domProps:{innerHTML:t._s(t.render(t.page.intro_text))}}):t._e()])}),[],!1,null,null,null);e.a=component.exports},1234:function(t,e,n){"use strict";var r=n(124),o=n.n(r),c=n(1196),l={components:{ArrowRight:o.a,Intro:c.a},props:{input:{type:[String,Array],default:""},page:{type:Object,default:function(){return{}}},name:{type:String,required:!0},loading:Boolean},beforeDestroy:function(){window.removeEventListener("keypress",this.onKeyPress)},mounted:function(){window.addEventListener("keypress",this.onKeyPress)},computed:{skip:function(){var t;return!(null!==(t=this.input)&&void 0!==t&&t.length)},buttonText:function(){var t,e,n,r;return this.skip?null===(t=this.page)||void 0===t||null===(e=t.button)||void 0===e?void 0:e.empty_text:null===(n=this.page)||void 0===n||null===(r=n.button)||void 0===r?void 0:r.text}},methods:{handleContinue:function(t){this.$emit("continue",t)},onKeyPress:function(t){"Enter"===(null==t?void 0:t.key)&&this.handleContinue()}}},d=n(8),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"mb-auto pt-6 pb-12"},[e("div",{staticClass:"max-w-xl mx-auto"},[e("Intro",{attrs:{page:t.page,align:"text-left"}},[e("button",{staticClass:"btn text-left justify-start -ml-2 sm:ml-2",attrs:{slot:"header-content",type:"button",disabled:t.loading,loading:t.loading},on:{click:t.handleContinue},slot:"header-content"},[t._v("\n        "+t._s(t.buttonText)+"\n\n        "),e("ArrowRight",{staticClass:"w-3.5 h-3.5 ml-1 flex-shrink-0"})],1)]),t._v(" "),t.$slots.default?e("div",{staticClass:"mb-5"},[t._t("default")],2):t._e(),t._v(" "),t._t("button",(function(){return[e("button",{staticClass:"btn btn-primary btn-large w-full",attrs:{type:"button",disabled:t.loading,loading:t.loading},on:{click:t.handleContinue}},[t._v("\n        "+t._s(t.buttonText)+"\n\n        "),e("ArrowRight",{staticClass:"btn-icon-right"})],1)]}))],2)])}),[],!1,null,null,null);e.a=component.exports},1260:function(t,e,n){"use strict";n(16),n(15),n(17),n(18);var r=n(3),o=(n(68),n(13),n(45),n(50),n(172),n(40),n(10)),c=n(1047),l=n(1234),d=n(100),f=n(30);n(101);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a={transition:"fade",layout:"progress",components:{StepPage:l.a},mixins:[d.e],data:function(){return{order:c.order,flowStartingProgress:40,flowEndingProgress:75}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({pages:function(){var t=[];return"force-invisible"===this.$store.state.editor.icon_visibility&&t.push("keywords"),this.$store.state.flags.enable_skip_icons&&t.push("type","keywords"),this.$store.state.flags.enable_skip_keywords_on_skip&&t.push("keywords"),this.order.filter((function(e){return!t.includes(e)}))},currentProgressStepAmount:function(){var t=(this.flowEndingProgress-this.flowStartingProgress)/this.pages.length;return this.flowStartingProgress+t*(this.currentPageIndex+1)},slug:function(){return this.$route.path.split("/")[2]},currentPageIndex:function(){var t=this;return this.pages.findIndex((function(e){return e===t.slug}))},nextPage:function(){var t=null;return this.currentPageIndex>=0&&(t=this.pages[this.currentPageIndex+1]),t}},Object(f.e)(["flags"])),mounted:function(){o.a.$emit(o.b.StepSetProgress,this.currentProgressStepAmount)},methods:{nextStep:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},path="/editor/ideas";this.nextPage?path="/flow/"+this.nextPage:this.flags.skip_editor_ideas?path=this.flags.editor_start_with_colors?"/editor/colors":"/editor/templates":this.flags.enable_standalone_ideas&&(path="/ideas"),t.replace?this.$router.replace(path):this.$router.push(path)}}}},1296:function(t,e,n){"use strict";n(16),n(15),n(17),n(18);var r=n(1),o=n(20),c=n(3),l=(n(19),n(168),n(34),n(228),n(42),n(23),n(41),n(49),n(226),n(13),n(50),n(124)),d=n.n(l),f=n(10),h=n(344),content=n(100),y=n(30);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m={components:{ArrowRight:d.a},mixins:[Object(content.d)(["data/call-to-actions"],!0)],props:{keywordedPhrases:{type:Array,default:function(){return[]}},search:{type:String,default:null},disabled:{type:Boolean,default:!1},showWordark:{type:Boolean,default:!0},showSlogan:{type:Boolean,default:!0},pagination:{type:Number,default:8}},data:function(){return{phrases:[],limit:8}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({flattenedKeywords:function(){var t=(this.phrases||[]).map((function(t){return t.words.map((function(t){return t.synonyms}))})),e=Object(h.a)([].concat(Object(o.a)(this.wordmark),Object(o.a)(this.slogan),Object(o.a)(t)),2);return Object(o.a)(new Set(e))},displayKeywords:function(){return this.flattenedKeywords.slice(0,this.limit)},wordmark:function(){return this.showWordark?this.convertInputToArray(this.session.wordmark):[]},slogan:function(){return this.showSlogan?this.convertInputToArray(this.session.slogan):[]}},Object(y.e)(["session"])),watch:{keywordedPhrases:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.phrases=t||[]}},created:function(){this.limit=this.pagination},mounted:function(){this.search?this.fetchKeywords(this.search):this.phrases=this.keywordedPhrases||[],f.a.$on(f.b.AppWordCloudUpdated,this.fetchKeywords)},beforeDestroy:function(){f.a.$off(f.b.AppWordCloudUpdated,this.fetchKeywords)},methods:{fetchKeywords:function(){var t=arguments,e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.length>0&&void 0!==t[0]?t[0]:""){n.next=3;break}return n.abrupt("return");case 3:return n.prev=3,n.next=6,e.$api.get("https://kwd.logo.com",{params:{phrases:r.trim()}});case 6:o=n.sent,data=o.data,e.phrases=data.phrases,n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),e.$sentry.captureException(n.t0);case 14:case"end":return n.stop()}}),n,null,[[3,11]])})))()},convertInputToArray:function(input){return input?input.toLowerCase().split(" ").filter(Boolean):[]}}},v=m,O=n(8),component=Object(O.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-wrap gap-2",class:{"opacity-50 cursor-not-allowed":t.disabled}},[t._l(t.displayKeywords,(function(n){return e("span",{key:n,staticClass:"btn cursor-pointer btn-naked text-sm rounded-full",class:{"pointer-events-none opacity-50":t.disabled},attrs:{type:"button"},on:{click:function(e){return t.$emit("select",n)}}},[t._v("\n    "+t._s(n)+"\n  ")])})),t._v(" "),t.limit<t.flattenedKeywords.length?e("span",{staticClass:"btn cursor-pointer mx-0.5 mb-1 text-xs font-bold text-green-500",class:{"pointer-events-none opacity-50":t.disabled},attrs:{type:"button"},on:{click:function(e){t.limit=t.limit+t.pagination}}},[t._v("\n    "+t._s(t.page.view_more)+"\n\n    "),e("ArrowRight",{staticClass:"w-3.5 h-3.5 ml-1 mb-px"})],1):t._e()],2)}),[],!1,null,null,null);e.a=component.exports},1562:function(t,e,n){var content=n(1958);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(94).default)("33a6b1a0",content,!0,{sourceMap:!1})},1957:function(t,e,n){"use strict";n(1562)},1958:function(t,e,n){var r=n(93)((function(i){return i[1]}));r.push([t.i,".vue-tags-input[data-v-76979ce7] .ti-input{min-height:125px}",""]),r.locals={},t.exports=r},2156:function(t,e,n){"use strict";n.r(e);n(16),n(15),n(13),n(17),n(18);var r=n(20),o=n(1),c=n(3),l=(n(19),n(34),n(68),n(49),n(1185)),d=n(30),f=n(347),h=n(1296),content=n(100),y=n(1260),w=n(10);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={components:{FieldMessage:f.a,WordCloud:h.a},mixins:[Object(content.d)(["flow/keywords"]),y.a,content.b,content.c,l.a],data:function(){return{maxKeywords:3,loading:!1,input:""}},computed:v(v({keywords:{get:function(){return this.editor.custom_keywords.map((function(text){return{text:text}}))},set:function(t){this.SET_CUSTOM_KEYWORDS(t.map((function(t){return t.text})))}},reachedMaxKeywords:function(){return this.keywords.length===this.maxKeywords},tagsOptions:function(){return{maxTags:this.maxKeywords,addOnKey:[13,188],tags:this.keywords,placeholder:""}}},Object(d.c)({getKeywords:"session/getKeywords"})),Object(d.e)(["editor","session"])),created:function(){"force-invisible"!==this.editor.icon_visibility?this.$store.state.flags.enable_skip_keywords_on_skip&&"default"===this.editor.icon_visibility?this.nextStep({replace:!0}):this.initKeywords():this.nextStep({replace:!0})},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.forceFocus();case 1:case"end":return e.stop()}}),e)})))()},methods:v(v({initKeywords:function(){this.keywords.length||(this.keywords=Object(r.a)(this.getKeywords).slice(0,3).map((function(text){return{text:text}})))},addKeyword:function(text){this.keywords=[].concat(Object(r.a)(this.keywords),[{text:text}])},forceFocus:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:try{document.getElementsByClassName("ti-input")[0].addEventListener("click",(function(){document.getElementsByClassName("ti-new-tag-input")[0].focus()}))}catch(t){console.error(t)}case 3:case"end":return e.stop()}}),e)})))()},continueToNextStep:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.loading){e.next=2;break}return e.abrupt("return");case 2:if(t.loading=!0,!t.editor.custom_keywords.length){e.next=10;break}return n=t.editor.custom_keywords.join(" "),t.SET_ICONS([]),t.SET_UNVALIDATED_KEYWORDS(n),t.setKeywords(n),e.next=10,t.sendSessionToKeyworder();case 10:w.a.$emit(w.b.EnhancedFlowKeywordsSelected,t.editor.custom_keywords),t.nextStep();case 12:case"end":return e.stop()}}),e)})))()}},Object(d.b)({sendSessionToKeyworder:"session/sendSessionToKeyworder"})),Object(d.d)({SET_UNVALIDATED_KEYWORDS:"editor/SET_UNVALIDATED_KEYWORDS",SET_CUSTOM_KEYWORDS:"editor/SET_CUSTOM_KEYWORDS",setKeywords:"session/setKeywords",SET_ICONS:"icons/SET_ICONS"}))},x=(n(1957),n(8)),component=Object(x.a)(O,(function(){var t=this,e=t._self._c;return e("StepPage",{attrs:{name:"Keywords",page:t.page,loading:t.loading,input:t.keywords},on:{continue:t.continueToNextStep}},[e("client-only",[e("div",{staticClass:"relative"},[e("vue-tags-input",t._b({on:{"tags-changed":function(e){return t.keywords=e}},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}},"vue-tags-input",t.tagsOptions,!1)),t._v(" "),t.input.length||t.keywords.length?t._e():e("p",{staticClass:"absolute p-3 inset-0 text-lg text-opacity-100 text-gray-400 pointer-events-none"},[t._v("\n        "+t._s(t.contentReady?t.page.input.placeholder:"")+"\n      ")])],1),t._v(" "),e("FieldMessage",{attrs:{"status-message":t.reachedMaxKeywords?"You've reached the maximum keywords.":null,"is-success":!0,"is-error":!1}}),t._v(" "),e("WordCloud",{staticClass:"mt-6 mb-8",attrs:{"keyworded-phrases":t.session.keywordedPhrases,disabled:t.reachedMaxKeywords,pagination:14},on:{select:t.addKeyword}})],1)],1)}),[],!1,null,"76979ce7",null);e.default=component.exports}}]);
//# sourceMappingURL=c7fef87.js.map