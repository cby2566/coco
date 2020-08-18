<template>
<div class="parentBox">
    <div v-for="i in nx" :key="i" :class="i==5?'stickyBox':'childBox'">
        <p>{{i}}</p>
        <div class="divBg">
             <div class="divImg" :style="{clipPath: `circle(${20 + sum}% at 50% 50%)`}"></div>
        </div>
    </div>
</div>
    
</template>
<script>
export default {
    data() {
        return {
            nx: 10,
            sum: 0
        }
    },
    mounted() {
        window.addEventListener('scroll',this.watchBody)
        //有个简便的注销写法，但是我忘记了。
    },
    destroyed() {
        window.removeEventListener('scroll',this.watchBody)
    },
    methods: {
        watchBody(){
            let stickyBox = document.querySelector('.stickyBox');
            let divBg = stickyBox.querySelector('.divBg');
            let divImg = stickyBox.querySelector('.divImg');
            if(!divBg && !divImg) return;

            //获取元素高度
            //stickyBox.offsetHeight
            let boxHeight = stickyBox.getBoundingClientRect().height

            //获取距离可视区顶部的距离
            // stickyBox.offsetTop - document.documentElement.scrollTop
            let boxTop = stickyBox.getBoundingClientRect().top
    
            if( boxTop < 0 ){
                console.log(boxTop)
                this.sum = Math.abs(80 / boxHeight * boxTop)
            }
            
        }
    },
}
</script>
<style lang="scss">
.parentBox {
    width: 100%;
    // height: 200px;
    background: #999;
    // border-top:1px solid white;
    display: flex;
    flex-direction: column;
    .childBox {
        width: auto;
        height: 20vh;
        background-color: #58bc58;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            color: white;
            font-size: 36px;
        }
    }
    .stickyBox {
        color: royalblue;
        height: 200vh;
        width: 100%;
        background-color: royalblue;
        .divBg{
            height: calc(100vh - 20px);
            width: auto;
            background-color: palegoldenrod;
            position: sticky;
            top: 10px;
            opacity: .5;
            .divImg{
                width: 100%;
                height: 100%;
                clip-path: circle(20% at 50% 50%);
                background-color: violet;
            }
        }
    }
}
</style>