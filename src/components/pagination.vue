<template>
  <nav class="pagination">
    <ul class="page-ul">
      <li 
        :key="index" 
        v-for="(item,index) in pageList" 
        :class="item.class" 
        @click.stop="setPage(item)" 
        v-html="item.html"
      >
      </li>
    </ul>
    <div class="displayPage">
      <p>当前显示<p>
      <p class="selectPage" @click.stop="selectPage">
        {{ pageSize }}
        <ol v-if="isShowPageSelect">
          <li 
            v-for="item in pageSelect" 
            @click.stop="enterPage(item)" 
            :key="item.id"
          >{{ item }}</li>
        </ol>
      <p>
      <p>条数据；共<span>{{ total }}</span>条</p>
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      isShowPageSelect:false,
      pageSelect:[20,50,100]  //每页最大显示条数选择
    }
  },
  props: {
    prevHtml: String, //上一页
    nextHtml: String, //下一页
    pageNum: Number,  //默认页码
    total: Number,  //总条数
    pageSize: Number, //每页最大显示条数
    maxPage: Number,  //分页导航
  },
  computed: {
    pageList: function () {
      var _this = this, pageList = [];
      let pageCount = Math.ceil(_this.total / _this.pageSize);
      let pageNum = _this.pageNum;
      let prevHtml = _this.prevHtml ? _this.prevHtml : '&lt;';
      let nextHtml = _this.nextHtml ? _this.nextHtml : '&gt;';
      let maxPage = _this.maxPage ? _this.maxPage : 5;

      let hasPrev = pageNum > 1;
      let hasNext = pageNum < pageCount;
      //上一页
      pageList.push({
        class: hasPrev ? '' : 'disabled',
        pageNum: hasPrev ? pageNum - 1 : pageNum,
        html: prevHtml
      });
      //首页
      pageList.push({
        class: pageNum == 1 ? 'active' : '',
        pageNum: 1,
        html: 1
      });
      var p0 = Math.floor(maxPage / 2);
      var p1 = 1 + 2 + p0;    //首页+省略至少2个页码+中间页面数的一半
      var start, end;
      if (pageNum >= p1) {
        start = pageNum - p0;
        //前置省略号
        pageList.push({
          class: 'dot',
          pageNum: pageNum,
          html: '...'
        });
      } else {
        start = 2;
      }
      var p2 = pageNum + p0;
      if (p2 < pageCount) {
        end = p2;
      } else {
        end = pageCount - 1;
      }
      //页码列表
      for (let i = start; i <= end; i++) {
        pageList.push({
          class: pageNum == i ? 'active' : '',
          pageNum: i,
          html: i
        });
      }

      if (end < pageCount - 1) {
        //后置省略号
        pageList.push({
          class: 'dot',
          pageNum: pageNum,
          html: '┅'
        });
      }
      //尾页
      if (pageCount > 1) {
        pageList.push({
          class: pageNum == pageCount ? 'active' : '',
          pageNum: pageCount,
          html: pageCount
        });
      }
      //下一页
      pageList.push({
        class: hasNext ? '' : 'disabled',
        pageNum: hasNext ? pageNum + 1 : pageNum,
        html: nextHtml
      });
      return pageList;
    }
  },
  methods: {
    //点击分页
    setPage(item) {
      if (item.class == '') {
        this.$emit('pagehandler', item.pageNum);
      }
    },
    //显示每页显示条数
    selectPage(){
      this.isShowPageSelect = true;
    },
    //每页最大显示条数
    enterPage(item){
      this.$emit('pageSizeSelect', item);
      this.isShowPageSelect = false;
    }
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)){
        this.isShowPageSelect = false;
      }
    })
  }
}
</script>

<style lang="less" scoped>
.pagination {
  text-align: right;
  font-family: arial;
  color: #48576a;
  width: 100%;
  clear: both;
  height: 30px;
  margin: 26px 0;
  ul {
    float: right;
    padding: 0;
    margin-top: 3px;
    li {
      display: inline-block;
      color: #222222;
      margin: 0 0 0 6px;
      padding: 0 4px;
      border: 1px solid #ccc;
      background: #fff;
      font-size: 12px;
      min-width: 24px;
      height: 24px;
      line-height: 24px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      &:last-child {
        border-right: 1px solid #d1dbe5;
      }
      &.active {
        border-color: #529ae1;
        background-color: #529ae1;
        color: #fff;
        cursor: default;
        &:hover {
          color: #fff;
        }
      }
      &.disabled {
        cursor: not-allowed;
        color: #cccccc;
      }
      &.dot {
        cursor: default;
      }
    }
  }//ul
  .displayPage{
    float: right;
    height: 30px;
    line-height: 30px;
    margin-right: 24px;
    color: #222222;
    p{
      float: left;
      &.selectPage{
        width: 44px;
        height: 24px;
        line-height: 24px;
        border: solid 1px #f4f4f4;
        margin: 3px;
        margin-bottom: 0;
        cursor: pointer;
        text-align: left;
        padding: 0 4px;
        position: relative;
        &:after {
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid #cccccc;
          content: "";
          position: absolute;
          right: 4px;
          top: 9px;
          width: 0;
        }
        ol{
          list-style: none;
          position: absolute;
          top: 22px;
          left:-1px;
          background: #fff;
          width: 52px;
          border: solid 1px #f4f4f4;
          z-index: 999;
          li{
            padding: 0 4px;
            &:hover{
              background-color: #f1f7fc;
            }
          }
        }
      }
      span{
        color: #529ae1;
      }
    }
  }//displayPage
}
</style>
