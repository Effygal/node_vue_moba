<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/1dea8e59a481e6990ae1cd3afe819fb9.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/8bddffaac919e515dcf3a0035965b677.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/1dea8e59a481e6990ae1cd3afe819fb9.jpeg" alt="">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" 
      slot="pagination">
      </div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>  
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->

    
    <m-List-Card icon="menu" title="新闻资讯" :categories="newsCats">
      <template #items="{category}"><!-- 作用域插槽，获取子组件绑定的category，穿透，避免子传父 -->
        <div class="py-2" v-for="(news, i) in category.newsList" :key="i">
          <span>[{{news.categoryName}}]</span>
          <span>|</span>
          <span>{{news.title}}</span>
          <span>{{news.date}}</span>
        </div>
      </template>
      
    </m-List-Card>
    <m-Card icon="menu" title="英雄列表">

    </m-Card>
    <m-Card icon="menu" title="精彩视频">

    </m-Card>
    <m-Card icon="menu" title="图文攻略">

    </m-Card>
    
    
    <i class="iconfont icon-news text-primary fs-xl"></i>
  </div>


</template>

<script>



export default {
  data(){
    return {
      swiperOption: {
        pagination: {
          el: '.pagination-home'
        }
      },
      newsCats: [
        {
          name: '热门',
          newsList: new Array(5).fill(true).map(v => ({
            categoryName: '公告',
            title: '6月2日全服不停机更新公告',
            date: '06/01', 
            debug: v
          }))
        },
        {
          name: '新闻',
          newsList: new Array(5).fill(true).map(v => ({
            
            categoryName: '新闻',
            title: '6月2日全服不停机更新公告',
            date: '06/01',
            debug: v
            
          }))
        },
        {
          name: '新闻',
          newsList: new Array(5).fill(true).map(v => ({
            
            categoryName: '新闻',
            title: '6月2日全服不停机更新公告',
            date: '06/01',
            debug: v
            
          }))
        },
        {
          name: '新闻',
          newsList: new Array(5).fill(true).map(v => ({
            
            categoryName: '新闻',
            title: '6月3日全服不停机更新公告',
            date: '06/03',
            debug: v
            
          }))
        },
        {
          name: '新闻',
          newsList: new Array(5).fill(true).map(v => ({
            
            categoryName: '新闻',
            title: '6月4日全服不停机更新公告',
            date: '06/04',
            debug: v
            
          }))
        },
      ]
        
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, 'white');
    &.swiper-pagination-bullet-active {
      background: map-get($colors, 'info');
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n+1) {
      border-left: none;
    }
  }
}
  
</style>
