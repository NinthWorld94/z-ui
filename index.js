import Carousel from './Carousel';
import CarItem from './Carousel/item.vue'

import TreeMenu from './TreeMenu'
import SubMenu from './TreeMenu/SubMenu';
import ReSubMenu from './TreeMenu/ReSubMenu';
import MenuItem from './TreeMenu/MenuItem'

import Selector from './Selector'
let Zui = {};
//导出组件，以提供按需加载组件
export const zuiCarousel = {}
export const zuiCarItem  = {}

export const zuiTreeMenu = {}
export const zuiMenuItem = {}
export const zuiReSubMenu = {}
export const zuiSubMenu = {}

export const zuiSelector = {}
zuiCarousel.install = Vue=> Vue.component(Carousel.name,Carousel)
zuiCarItem.install = Vue=> Vue.component(CarItem.name,CarItem)
zuiTreeMenu.install = Vue=> Vue.component(TreeMenu.name,TreeMenu)
zuiMenuItem.install = Vue=> Vue.component(MenuItem.name,MenuItem)
zuiSubMenu.install = Vue=> Vue.component(SubMenu.name,SubMenu)
zuiReSubMenu.install = Vue=> Vue.component(ReSubMenu.name,ReSubMenu)
zuiSelector.install = Vue=> Vue.component(Selector.name,Selector)

const COMPOEMTS = [
    Carousel,
    CarItem,
    TreeMenu,
    MenuItem,
    SubMenu,
    ReSubMenu,
    Selector
]
//注册组件 让用户可以安装插件 
Zui.install = function (Vue) {
    COMPOEMTS.forEach((component)=>{
        Vue.component(component.name,component)
    })
}

export default Zui;