<template>
  <div class="carousel"
       @mouseenter="stopPlay"
       @mouseleave="playing">
    <div class="inner">
    <car-dot
      :hasDot="hasDot"
      :carItemLen="carItemLen"
      :currentIndex="currentIndex"
      :dotBgColor="dotBgColor"
      @dotClick="dotClick"
      ></car-dot>
    <car-director
    @dirClick="dirClick"
    ></car-director>
    <slot>
    </slot>
    </div>
  </div>
</template>

<script>
import { onBeforeUnmount,
         onMounted,
         reactive,
         getCurrentInstance, 
         toRefs} from 'vue';
import CarDot from './dot'
import CarDirector from './director'
export default {
  name: "Carousel",
  components:{CarDot,CarDirector},
  props:{
    autoplay:{
      type:Boolean,
      default:true
    },
    duration:{
      type:Number,
      default:3000
    },
    initial:{
      type:Number,
      default:0
    },
    hasDot:{
      type:Boolean,
      default:true
    },
    dotBgColor:String,
    hasDirector:{
      type:Boolean,
      default:true
    }
  },
  setup(props){
    const instance = getCurrentInstance()
    const state = reactive({
      currentIndex:props.initial,
      carItemLen:0
    })
    const setCurrentIndex = (dir)=>{
      switch(dir){
        case 'next':
          state.currentIndex += 1;
          if(state.currentIndex===state.carItemLen){
            state.currentIndex=0
          }
          break;
        case 'prev':
          state.currentIndex -= 1;
          if(state.currentIndex===-1){
            state.currentIndex=state.carItemLen-1;
          }
          break;
        default:
          break;
      }
    }
    let t =null
    const autoPlay = ()=>{
       if(props.autoplay){
        t = setInterval(()=>{
         setCurrentIndex('next')
        },props.duration)
      }
    }
    const stopPlay = ()=>{
      clearTimeout(t)
    }
    const playing = ()=>{
      autoPlay()
    }
    const dotClick = (index)=> state.currentIndex=index
    onMounted(()=>{
      state.carItemLen=instance.slots.default()[0].children.length
      autoPlay()
    })
    const dirClick = (dir) => {
      setCurrentIndex(dir);
    }
    onBeforeUnmount(()=>{
      clearInterval(t)
      t=null
    })
    return{
      ...toRefs(state),
      dotClick,
      dirClick,
      stopPlay,
      playing
    }
  }
};
</script>
<style lang="stylus" scoped>
.carousel
  width 100%
  height 100%
  .inner
    position: relative
    width 100%
    height 100%
    overflow: hidden;
</style>
