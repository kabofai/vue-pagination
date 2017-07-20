## 基于vue2.0+vuex开发的本地记事本

> vue + vuex

## Build Setup

``` bash
npm install
npm run dev
npm run build
```

## setInput

``` html
<template>
  <div class="senInput">
    <input type="text" placeholder="请输入" v-model.trim="inputTxt" />
    <button @click="setAuthor">确定</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputTxt:''
    }
  },
  methods:{
    setAuthor(){
      this.$store.dispatch('addTodo',this.inputTxt);
      this.inputTxt = '';
    }
  }
}
</script>
```

## todolist

``` html
<template>
  <div class="todo">
    <div class="todoList" v-if="todoList.length !== 0">
      <ul>
        <li v-for="todo in todoList" :key="todo.id" :id="todo.id" class="todoItem" :class="{ 'isDone': todo.isDone }">
          <span class="radio" @click="switchTodo(todo.id)"></span>
          <span class="todoText">{{todo.text}}</span>
          <span class="cancel" @click="cancelTodo(todo.id)">X</span>
        </li>
      </ul>
    </div>
    <div class="noDone" v-else>
      <p>暂无数据</p>
    </div>
    <div class="select-section">
      <span v-for="(item,key,index) in selection" :key="key" :id="item.id" class="select" :class="{ 'select-type': selected == item.id}" @click="selectType(item.id)">{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    computed:{
      todoList () {
         //根据不同类型的选择，返回不同todolist
          let selected = this.$store.state.todo.selected;
          if(selected == '0'){  
            return this.$store.state.todo.todoList;
          }else if(selected == '1'){
            return this.$store.getters.filterDoned; 
          }else if(selected == '2'){
            return this.$store.getters.filterNoDoned;
          }
      },
      selected () {
          return this.$store.state.todo.selected;
      },
    },
    data(){
      return{
        selection:[
          {id:0, text:'全部'},
          {id:1, text:'已完成'},
          {id:2, text:'未完成'}
        ]
      }
    },
    methods:{
      switchTodo(id){
        this.$store.dispatch('switchTodo',id);
      },
      selectType(type){
        this.$store.dispatch('selectType',type);
      },
      cancelTodo(id){
        this.$store.dispatch('cancelTodo',id);
      }
    }
  }
</script>
```

## mutations_type
``` javascript
export const ADD_TODO = 'ADD_TODO';
export const SWITCH_TODO = 'SWITCH_TODO';
export const SELECT_TYPE = 'SELECT_TYPE';
export const CANCEL_TODO = 'CANCEL_TODO';
```

## actions.js

``` javascript
import * as types from './mutations_type'

export default {
    addTodo({ commit }, todoText) {
        commit(types.ADD_TODO, todoText);
    },
    switchTodo({ commit }, id) {
        commit(types.SWITCH_TODO, id);
    },
    selectType({ commit }, type) {
        commit(types.SELECT_TYPE, type);
    },
    cancelTodo({ commit }, id) {
        commit(types.CANCEL_TODO, id);
    }
}
```

## mutations.js

``` javascript
import * as types from './mutations_type'

export default {
    [types.ADD_TODO](state, todoText) {
        if (todoText) {
            let todoInfo = {};
            todoInfo.isDone = false;
            if (state.todoList.length == 0) {
                todoInfo.id = 0;
            } else if (state.todoList.length > 0) {
                let todoFirst = state.todoList[state.todoList.length - 1];
                todoInfo.id = todoFirst.id + 1;
            }
            todoInfo.text = todoText;
            state.todoList.push(todoInfo);
        }
    },
    [types.SWITCH_TODO](state, id) {
        state.todoList.map((item) => {
            if (item.id == id) {
                item.isDone = !item.isDone;
            }
        });
    },
    [types.SELECT_TYPE](state, type) {
        state.selected = type;
    },
    [types.CANCEL_TODO](state, id) {
        let list = state.todoList;
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == id) {
                list.splice(i, 1);
            }
        }
    }
}
```