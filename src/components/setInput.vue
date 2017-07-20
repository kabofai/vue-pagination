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

<style scoped>
  input{
    width: 200px;
    height:35px;
    border-radius: 2px;
    border:1px solid #a5a5a5;
    padding-left: 5px;
  }
  button{
    width: 90px;
    height: 37px;
    background-color: #42b983;
    color:white;
    border-radius: 2px;
    border:1px solid #42b983;
  }
  .addTodo{
    width: 310px;
    height: 40px;
    margin:0 auto;
  }
</style>
