<template>
    <div>
        <el-menu 
        :default-active="defaultIndex" 
        class="jsonv2-menu" 
        mode="horizontal" 
        :ellipsis="false" 
        :router="routeMode"
        text-color="white"
        >
            <el-menu-item>JSON Editor</el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="/">Formatter</el-menu-item>
            <el-menu-item index="/introducing-json">Introducing JSON</el-menu-item>
            <el-menu-item index="/text-diff">Text Diff</el-menu-item>
            <el-menu-item index="/learn-to-code">Learn to code</el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const routeMode:boolean = true
let defaultIndex = computed(() => route.path)
</script>

<style scoped>

.jsonv2-menu a {
    text-decoration: none;
    color: inherit;
}
.jsonv2-menu{
    background-color: #2f3f4c;
    user-select:none;
}

.flex-grow {
    flex-grow: 1;
}

</style>