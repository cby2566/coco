<template>
<div>
    <div class="cell1">
        <!-- <div>&lt;a href=&quot;&quot; &gt;777&lt;/a&gt;</div> -->
        &lt;div&gt;&lt;a href=&quot;&quot; &gt;777&lt;/a&gt;&lt;/div&gt;
        <div>
            <input type="checkbox" v-bind:checked="value.selectA">
        </div>
        <div>
            <div v-if="!isEdit" @click="editClick">{{value.text}}</div>
            <!-- <a v-if="!isEdit" @click="editClick" :href="value.text">{{value.text}}</a> -->
            <input v-else type="text" @blur="editClick" v-model="value.text">
        </div>
        <div>
            <!-- <input type="button" value="完成" @click="editCell"> -->
            <input type="button" value="删除" @click="deleteCell">
        </div>
    </div>
</div>
    
</template>
<script>
export default {
    props: {
        value: {
            type: Object,
            default: function() {
                return {
                    text: "测试文本2",
                    selectA: true,
                }
            }
        },
        index: {
            default: 0
        }
    },
    data() {
        return {
            nx: 1,
            isEdit: false,
        }
    },
    methods: {
        deleteCell() {
            this.$emit( 'deleteCell', this.index );
        },
        editClick(){
            this.isEdit = !this.isEdit;
        },
        editCell() {
            // this.$emit( 'editCell', [this.index, this.value] )
        },
        
    },
}
</script>
<style >
.cell1{
 display: flex;
}
</style>