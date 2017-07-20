<template>
  <div class="hello">
    <div class="page">
      <p>第<span>{{ pageNum }}</span>页</p>
      <p>每页显示<span>{{ pageSize }}</span>条</p>
    </div>
    <!-- 分页 -->
    <pagination 
      :prevHtml="prevHtml" 
      :nextHtml="nextHtml" 
      :pageNum="pageNum" 
      :page-size="pageSize" 
      :total="total" 
      :max-page="maxPage" 
      @pagehandler="pageHandler" 
      @pageSizeSelect="pageSizeSelect"
    >
    </pagination>
  </div>
</template>

<script>
import pagination from './pagination'
export default {
  data () {
    return {
      //分页
      prevHtml:'上一页', //不定义为 <
      nextHtml:'下一页', //不定义为 >
      pageNum: 1,  //默认页 第一页
      pageSize: 20, //每页显示最大条数
      total: 500,  //一共多少条数据
      maxPage: 5,  //分页导航
    }
  },
  methods:{
    //分页 点击换页
    pageHandler(page) {
      this.pageNum = page;
    },
    //每页最大显示条数
    pageSizeSelect(pageSize){
      this.pageSize = pageSize;
      this.pageNum = 1;
    }
  },
  components:{
    pagination
  }
}
</script>

<style lang="less" scoped>
  .hello{
    display: inline-block;
    .page{
      span{
        color: red;
      }
    }
  }
</style>