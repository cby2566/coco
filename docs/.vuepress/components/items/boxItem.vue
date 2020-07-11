<template>
<div>
    <div class="box3">
        <span>name: {{ name }}</span>
        <div>
            <!-- <img src="https://pbs.twimg.com/profile_images/1255608790423965696/aaOFEHHJ_400x400.jpg" alt=""> -->
        </div>
    </div>
</div>
    
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        }
    }
}
</script>
<style >
.box3{
    width: 500px;
    height: 500px;
    background: #58bc58;
}
</style>