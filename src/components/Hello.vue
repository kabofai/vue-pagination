<template>
  <div class="layout">
    <setInput></setInput>
    <todolist></todolist>
  </div>
</template>

<script>
import setInput from './setInput'
import todolist from './todolist'
export default {
  name: 'layout',
  components:{
    todolist,
    setInput
  }
}
</script>

<style lang="less" scoped>
  .layout{
    margin-top:100px;
  }
</style>
