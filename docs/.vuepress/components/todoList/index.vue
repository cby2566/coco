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
      :index="index"
      @deleteCell="deleteCell"
      @editCell="editCell"
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
          text: "测试文本，点击修改",
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
      },
      deleteCell(index) {
        // if( !index ) return;
        this.list.splice(index, 1);
      },
      editCell( arr ) {
        this.list.splice(arr[0], 1, arr[1]);
      }
  },
};
</script>
<style >
</style>