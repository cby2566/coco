<template>
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
    <!-- 适配移动端，展示隐藏目录的按钮，默认主题对移动端的适配下足了
    功夫，这也是我改造默认主题而不是自定义主题的原因，自己写主题当然也
    能实现，但是无疑会花上加倍的时间，很多第三方主题都不支持移动端-->
    <router-link :to="$localePath" class="home-link">...</router-link>
    <!-- 左边部分博客的标题的配置，这部分有title和logo，都是从config.js中读取的 -->
    <div class="links" :style="{
    'max-width': linksWrapMaxWidth + 'px'
    }">
    <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia"/>
    <SearchBox v-else-if="$site.themeConfig.search !== false"/>
    <NavLinks class="can-hide"/>
    </div>
</template>
<script>
export default {

}
</script>

<style lang="stylus">

</style>