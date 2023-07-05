<template>
    <div class="common-layout">
        <el-container>
            <el-header height="107px">
                <el-container>
                    <el-aside width="200px" class="logo-area">JSON Editor</el-aside>
                    <el-main>
                        <el-menu :default-active="defaultIndex" class="jsonv2-menu" mode="horizontal" router="true">
                            <el-menu-item index="/">Home</el-menu-item>
                            <el-menu-item index="/about">Introduce json</el-menu-item>
                            <el-menu-item index="/text-diff">Text Diff</el-menu-item>
                            <el-menu-item index="/learn-to-code">Learn to code</el-menu-item>
                        </el-menu>
                    </el-main>
                </el-container>
            </el-header>
            <NuxtPage/>
        </el-container>
    </div>
</template>
  
<script setup>
const route= useRoute();
let defaultIndex = computed(()=>route.path)
</script>

<style scoped>
.json-preview-area {
    overflow: scroll;
    height: 873px;
    border: 1px solid #626467;
}
.jsonv2-menu  a{
    text-decoration: none; color: inherit;
}
.logo-area {
    display: flex;
    justify-content: center;
    align-items: center;
}

#editor {
    border: 1px solid #0000003b
}
</style>