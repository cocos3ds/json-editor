<template>
    <div class="common-layout">  
        <Header/>
        <div class="main-area">  
            <NuxtPage/>
        </div>
        
    </div>
</template>
  
<script setup>
useHead({
    title:"JSON Editor Online - Home"
})

</script>

<style scoped>
#editor {
    border: 1px solid #0000003b
}
.main-area{
    margin-top:40px;
}
</style>