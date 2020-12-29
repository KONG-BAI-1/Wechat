// component/Tabs/Tabs.js
Component({
    /**
     * 组件的属性列表
     * 里面存放的是 要从父组件中接受的数据
     */
    properties: {
        // aaa: {
        //     //要接收的数据的名称
        //     type: String,
        //     //value 默认值
        //     value: ""
        // }
        tabs: {
            type: Array,
            value: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    //  1页面.js文件中存放事件回调函数的时候存放在data同层级下
    //  2组件.js文件中存放事件回调函数的时候必须要存在methods中


    methods: {
        // 1绑定点击事件需要在methods中绑定2获取被点击的索引
        // 3获取原数组
        // 4对数组循环
        //  1给每一个循环性选中属性改为false
        //  2给当前的索引的项添加激活选中效果就可以了
        // 5点击事件触发的时候
        //   触发父组件中的自定义事件，同时传递数据给父组件

        handelitemtap(e) {
            const { index } = e.currentTarget.dataset;
            // 触发父组件中的自定义事件
            this.triggerEvent("itemChange", { index });
            // let { tabs } = this.data;
            // tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
            // this.setData({
            //     tabs
            // })
        }
    }
})