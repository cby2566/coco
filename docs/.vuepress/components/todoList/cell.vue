<template>
<div>
    <div class="cell1">
        <div>
            <input type="checkbox" v-bind:checked="value.selectA">
        </div>
        <div>{{value.text}}</div>
        <div>
            <input type="button" value="删除" @click="deleCell">
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
                    selectA: true
                }
            }
        }
    },
    data() {
        return {
            nx: 1,
        }
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    methods: {
        deleCell() {
            this.$emit( 'change', this.nx++ )
        }
    },
}
</script>
<style >
.cell1{
 display: flex;
}
</style>