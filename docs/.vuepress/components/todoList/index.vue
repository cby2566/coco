<template>
  <div>
    <div>
      <input type="text" v-model="tempText" />
      <input type="button" value="添加" @click="addCell"/>
    </div>
    <div>
      <cell 
      v-for="(value,index) in list" 
      :key="index"
      v-model="list[index]"
       >
      </cell>
    </div>
  </div>
</template>
<script>
import cell from "./cell.vue";
export default {
  data() {
    return {
      list: [
        {
          text: "测试文本",
          selectA: true
        }
      ],
      tempText: "abc"
    };
  },
  components: {
    cell
  },
  methods: {
      addCell() {
          if(this.tempText)
            this.list.push({
                text: this.tempText,
                selectA: false  
            })
      }
  },
};
</script>
<style >
</style>