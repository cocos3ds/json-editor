<script setup>
import 'vue-json-pretty/lib/styles.css';
import JSConfetti from 'js-confetti'
import VueJsonPretty from 'vue-json-pretty';
let json = ref('')

let backgroundcolor = ref('')
let count = 0;
const json_obj = computed(() => {
    if (json.value != '') {
        try {
            let result = JSON.parse(json.value)
            if (count == 1) {
                // @ts-ignore
                if (window.document) {
                    const confetti = new JSConfetti()
                    confetti.addConfetti();
                }

            }
            if (count >= 1) {
                // @ts-ignore
                gtag('event', 'inputjson', {
                    'app_name': 'jsonv2',
                    'screen_name': 'home'
                });
            }
            backgroundcolor.value = "background-color:#4fff4f;"
            count++;
            return result;
        } catch (e) {
            backgroundcolor.value = "background-color:#ff6666;"
            return {}
        }
    }
    if (count == 0){
        return JSON.parse('{\
    "welcome": {\
      "website_information": {\
          "Description": "This is JSON Formatter tools online",\
          "Tech Stack": [\
            "vue.js",\
            "nuxt.js"\
          ]\
      },\
      "welcome_message": [ \
          "您好",\
          "Bonjour",\
          "Hola",\
          "Hello",\
          "Zdravstvuyte",\
          "Salve",\
          "Konnichiwa",\
          "Guten Tag",\
          "Olá"\
    ],\
      "JSON Example": {\
          "data": "Click Here",\
          "size": 36,\
          "style": "bold",\
          "name": "text1",\
          "hOffset": 250,\
          "vOffset": 100,\
          "alignment": "center",\
          "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"\
      }\
  }\
}')
    }
    return {}

})
</script>

<template>
    <div>
        <el-container>
            <el-aside width="43%" class="json-input-area-wrapper">
                <div class="json-input-title"><span class="down-arrow">↓↓↓↓</span>Please enter your json string below<span class="down-arrow">↓↓↓↓</span></div>
                <div class="json-input-area">
                    <MonacoEditor @response="(payload) => { json = payload }" />
                </div>
            </el-aside>
            <el-main class="json-preview-area">
                <div class="json-preview-title" :style="backgroundcolor">Preview Area</div>
                <div>
                    <vue-json-pretty :data="json_obj" :showLineNumber="true" :editable="false" />
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<style scoped>
.json-preview-area {
    overflow: scroll;
    height: 800px;
    border: 1px solid #d2d9e3;
    margin-left:10px;
}

.json-input-area {
    overflow: hidden;
    /* height: 800px; */
    border: 1px solid #d2d9e3;
}
.json-input-title{
    text-align: center;
    font-size: 20px;
    background-color: #888;
    color:white;
}
.json-preview-title{
    text-align: center;
    font-size: 20px;
    background-color: #888;
}
.json-input-title .down-arrow{
    color:rgb(253 157 7);
    font-size: 14px;
    margin: 0px 10px;
}
.el-main {
    padding:0px;
}

.json-input-area-wrapper{
    border: 1px solid #d2d9e3;
    height:800px;
    overflow: hidden;
}
</style>

