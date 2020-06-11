<template>
<div class="hot">
    789
</div>  
<Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar"/>
  <!-- 这块代码是主题的头部，shouldShowNavbar是判断是否显示头部
  toggleSidebar是当屏幕出现在手机端目录隐藏或显示的判断-->
  <div class="sidebar-mask" @click="toggleSidebar(false)"></div>
  <!-- 在移动端时点击内容部分目录会隐藏 -->

  <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">...</Sidebar>
  <!-- 侧边栏 -->
  <div class="custom-layout" v-if="$page.frontmatter.layout">
    <component :is="$page.frontmatter.layout"/>
  </div>
  <!-- 内容显示部分，可通过在md文件中使用layout: xxx.vue作为布局组件 -->
  <Home v-else-if="$page.frontmatter.home"/>
  <!-- 如果md文件中有 home:true 就使用该组件 -->
  <Page v-else :sidebar-items="sidebarItems">
    <slot name="page-top" slot="top"/>
    <slot name="page-bottom" slot="bottom"/>
  </Page>
</template>
<script>
export default {

}
</script>

<style lang="stylus">
.hot{
    width 100px;
    height 100px;
    background :hotpink;
}
</style>