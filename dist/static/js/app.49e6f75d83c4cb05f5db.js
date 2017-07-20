webpackJsonp([1],{124:function(t,e,n){"use strict";var o=n(61),i=n(342),s=n(335),c=n.n(s);o.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Hello",component:c.a}]})},125:function(t,e,n){"use strict";var o=n(61),i=n(90),s=n(135),c=(n.n(s),n(133));o.a.use(i.a);e.a=new i.a.Store({modules:{todo:c.a},strict:!1})},126:function(t,e,n){function o(t){n(331)}var i=n(60)(n(127),n(339),o,null,null);t.exports=i.exports},127:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},128:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(336),i=n.n(o),s=n(337),c=n.n(s);e.default={name:"layout",components:{todolist:c.a,setInput:i.a}}},129:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{inputTxt:""}},methods:{setAuthor:function(){this.$store.dispatch("addTodo",this.inputTxt),this.inputTxt=""}}}},130:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{todoList:function(){var t=this.$store.state.todo.selected;return"0"==t?this.$store.state.todo.todoList:"1"==t?this.$store.getters.filterDoned:"2"==t?this.$store.getters.filterNoDoned:void 0},selected:function(){return this.$store.state.todo.selected}},data:function(){return{selection:[{id:0,text:"全部"},{id:1,text:"已完成"},{id:2,text:"未完成"}]}},methods:{switchTodo:function(t){this.$store.dispatch("switchTodo",t)},selectType:function(t){this.$store.dispatch("selectType",t)},cancelTodo:function(t){this.$store.dispatch("cancelTodo",t)}}}},131:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(61),i=n(126),s=n.n(i),c=n(124),r=n(90),a=n(125);o.a.config.productionTip=!1,o.a.use(r.a),new o.a({el:"#app",router:c.a,store:a.a,template:"<App/>",components:{App:s.a}})},132:function(t,e,n){"use strict";var o=n(91);e.a={addTodo:function(t,e){(0,t.commit)(o.a,e)},switchTodo:function(t,e){(0,t.commit)(o.b,e)},selectType:function(t,e){(0,t.commit)(o.c,e)},cancelTodo:function(t,e){(0,t.commit)(o.d,e)}}},133:function(t,e,n){"use strict";var o=n(132),i=n(134);e.a={state:{todoList:[],todoInfo:{id:0,text:"",isDone:!1},selected:0},actions:o.a,mutations:i.a,getters:{filterDoned:function(t){return t.todoList.filter(function(t){if(t.isDone)return t})},filterNoDoned:function(t){return t.todoList.filter(function(t){if(!t.isDone)return t})}}}},134:function(t,e,n){"use strict";var o,i=n(137),s=n.n(i),c=n(91);e.a=(o={},s()(o,c.a,function(t,e){if(e){var n={};if(n.isDone=!1,0==t.todoList.length)n.id=0;else if(t.todoList.length>0){var o=t.todoList[t.todoList.length-1];n.id=o.id+1}n.text=e,t.todoList.push(n)}}),s()(o,c.b,function(t,e){t.todoList.map(function(t){t.id==e&&(t.isDone=!t.isDone)})}),s()(o,c.c,function(t,e){t.selected=e}),s()(o,c.d,function(t,e){for(var n=t.todoList,o=0;o<n.length;o++)n[o].id==e&&n.splice(o,1)}),o)},330:function(t,e){},331:function(t,e){},332:function(t,e){},333:function(t,e){},335:function(t,e,n){function o(t){n(330)}var i=n(60)(n(128),n(338),o,"data-v-08235fc2",null);t.exports=i.exports},336:function(t,e,n){function o(t){n(332)}var i=n(60)(n(129),n(340),o,"data-v-2428f2b0",null);t.exports=i.exports},337:function(t,e,n){function o(t){n(333)}var i=n(60)(n(130),n(341),o,"data-v-3ea5e604",null);t.exports=i.exports},338:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("setInput"),t._v(" "),n("todolist")],1)},staticRenderFns:[]}},339:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},340:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"senInput"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputTxt,expression:"inputTxt",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入"},domProps:{value:t.inputTxt},on:{input:function(e){e.target.composing||(t.inputTxt=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),n("button",{on:{click:t.setAuthor}},[t._v("确定")])])},staticRenderFns:[]}},341:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo"},[0!==t.todoList.length?n("div",{staticClass:"todoList"},[n("ul",t._l(t.todoList,function(e){return n("li",{key:e.id,staticClass:"todoItem",class:{isDone:e.isDone},attrs:{id:e.id}},[n("span",{staticClass:"radio",on:{click:function(n){t.switchTodo(e.id)}}}),t._v(" "),n("span",{staticClass:"todoText"},[t._v(t._s(e.text))]),t._v(" "),n("span",{staticClass:"cancel",on:{click:function(n){t.cancelTodo(e.id)}}},[t._v("X")])])}))]):n("div",{staticClass:"noDone"},[n("p",[t._v("暂无数据")])]),t._v(" "),n("div",{staticClass:"select-section"},t._l(t.selection,function(e,o,i){return n("span",{key:o,staticClass:"select",class:{"select-type":t.selected==e.id},attrs:{id:e.id},on:{click:function(n){t.selectType(e.id)}}},[t._v(t._s(e.text))])}))])},staticRenderFns:[]}},91:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return c});var o="ADD_TODO",i="SWITCH_TODO",s="SELECT_TYPE",c="CANCEL_TODO"}},[131]);