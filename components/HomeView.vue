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
    title:"JSON Editor Online - JSON Formatter & Validator",
    meta: [
        { name: "description", content: "json editor is an online tool that can help you format, edit, validate and share json" },
        { name: "keywords", content: "json,jsonv2,json latest,json edit online,json format,json tool online" }
    ],
    link:[
        {
            rel:"canonical",
            href:"https://www.jsonv2.com/index.html"
        }
    ]

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