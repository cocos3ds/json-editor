<script setup>
import 'vue-json-pretty/lib/styles.css';
import JSConfetti from 'js-confetti'
import VueJsonPretty from 'vue-json-pretty';
let json = ref('')


let count = 0;
const json_obj = computed(() => {
    if (json.value != '') {
        try {
            let result =  JSON.parse(json.value)
            console.log(result)
            if(count == 1){
                // @ts-ignore
                if (window.document ){
                    const confetti = new JSConfetti()
                    confetti.addConfetti();
                }
                
            }
            if(count >= 1){
                // @ts-ignore
                gtag('event', 'inputjson', {
                                'app_name': 'jsonv2',
                                'screen_name': 'home'
                                });
            }
            count++;
            return result;
        } catch (e) {
            console.log("djfkjdkjk")
            return {}
        }
    }
    return {}

})
</script>



<template>
        <el-container>
                <el-aside width="45%">
                    <div>
                       <MonacoEditor @response="(payload) => { json = payload }" />
                    </div>
                </el-aside>
                <el-main class="json-preview-area">
                    <div>
                        <vue-json-pretty :data="json_obj" :showLineNumber="true" :editable="false" />
                    </div>
                </el-main>
            </el-container>
</template>

