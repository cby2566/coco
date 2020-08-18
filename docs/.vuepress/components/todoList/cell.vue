<template>
<div>
    <div class="cell1">
        <div>
            <input type="checkbox" v-bind:checked="value.selectA">
        </div>
        <div>
            <div v-if="!isEdit" @click="editClick">{{value.text}}</div>
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