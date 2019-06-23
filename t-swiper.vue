<template>
  <!-- 3D轮播图 -->
  <div class="t-swiper">
    <carousel-3d :autoplay="isPause" :minSwipeDistance="50" :autoplayTimeout="4000" :height="Math.round(screenWidth*0.4568)" :width="Math.round(screenWidth*0.917)" :border="0" :perspective="3">
      <slide v-for="(slide, i) in slides" :index="i" :key="i" >
        <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
          <img
            @touchmove="doMove" @touchstart="doStart" @touchend="doEnd"
            :data-index="index"
            :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }"
            :src="slide.src"
          >
        </template>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import Carousel3d from '@/components-base/carousel/Carousel3d.vue'
import Slide from '@/components-base/carousel/slide.vue'

export default {
  name: "t-swiper",
  components: {
    Carousel3d,
    Slide
  },
  data() {
    return {
      slides: [
        {src: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1367507.jpg'},
        {src: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1375466.jpg'},
        {src: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1375155.jpg'},
      ],
      isPause: true,
      pauseSwitch: false,
      screenWidth: document.body.clientWidth, // 屏幕尺寸
    }
  },
  methods: {
    doStart() {
      // this.pauseSwitch = true;
      this.isPause = false;
      // console.log('关闭自动轮播');
      // console.log(window);
    },
    doMove() {
      // this.pauseSwitch = true;
      // this.isPause = false;
      // console.log('move...');
    },
    doEnd() {
      // if (this.pauseSwitch) {
      //   return ;
      // }
      setTimeout(() => {
        // console.log('开启自动轮播');
        this.isPause = true;
      }, 2000);
      // console.log(this.isPause);
    }
  },
  mounted() {
    // console.log(this.screenWidth);
  },
};
</script>
<style lang='less' scoped>
.t-swiper {
  padding: 16px 0;
  /deep/ .carousel-3d-container {
    margin: 0 auto;
    .carousel-3d-slide.current {
      border-radius: 10px;
    }
    .carousel-3d-slide {
      background-color: #D8D8D8;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>