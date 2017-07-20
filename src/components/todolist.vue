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
      <span :class="{ 'select-type': selected == '0' , 'select': true }" @click="selectType('0')">全部</span>
      <span :class="{ 'select-type': selected == '1' , 'select': true }" @click="selectType('1')">已完成</span>
      <span :class="{ 'select-type': selected == '2' , 'select': true }" @click="selectType('2')">未完成</span>
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
      }
    },
    methods:{
      switchTodo(id){
        this.$store.dispatch('switchTodo',id);
      },
      selectType(type){
        if(type){
          this.$store.dispatch('selectType',type);
        }
      },
      cancelTodo(id){
        this.$store.dispatch('cancelTodo',id);
      }
    }
  }
</script>

<style lang="less" scoped>
  .todoList{
    width: 290px;
    min-height: 140px;
    margin:40px auto;
    padding-left: 5px;
    padding-top: 5px;
    ul{
      list-style: none;
      .todoItem{
        width: 100%;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #b8b8bf;
        &:hover{
          color:black;
        }
        &.isDone{
          .radio{
            background: #2c3e50;
          }
          .todoText{
            text-decoration: line-through;
          }
        }
        span{
          display: block;
          text-align: left;
          float: left;
          &.radio{
            width: 15px;
            height: 15px;
            border: 1px solid #979797;
            margin-top: 6px;
            margin-right: 5px;
            border-radius: 8px;
            &:hover{
              border:1px solid #141414;
            }
          }
          &.cancel{
            float: right;
            cursor: pointer;
            color: red;
          }
        }
      }
    }
  }
  .noDone{
    margin: 40px 0;
    min-height: 140px;
  }
  .select-section{
    width: 300px;
    margin: 0 auto;
    .select-type{
      background-color: #42b983;
      color:white;
    }
    .select{
      display: inline-block;
      width: 60px;
      height: 30px;
      text-align: center;
      line-height: 30px;
    }
  }
</style>
