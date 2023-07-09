<script setup>
import { monaco } from '@/monaco';
// @ts-ignore
// import customLangMonarch from '@/custom-lang-monarch'

// monaco.languages.register({ id: 'custom' })
// monaco.languages.setMonarchTokensProvider('custom', customLangMonarch)

const emit = defineEmits(['response'])


let editor_instance;
onMounted(() => {
  nextTick(() => {
    editor_instance = monaco.editor.create(document.getElementById('editor'), {
      value: '{\n\
    "welcome": {\n\
      "website_information": {\n\
          "Description": "This is JSON Formatter tools online",\n\
          "Tech Stack": [\n\
            "vue.js",\n\
            "nuxt.js"\n\
          ]\n\
      },\n\
      "welcome_message": [ \n\
          "您好",\n\
          "Bonjour",\n\
          "Hola",\n\
          "Hello",\n\
          "Zdravstvuyte",\n\
          "Salve",\n\
          "Konnichiwa",\n\
          "Guten Tag",\n\
          "Olá"\n\
    ],\n\
      "JSON Example": {\n\
          "data": "Click Here",\n\
          "size": 36,\n\
          "style": "bold",\n\
          "name": "text1",\n\
          "hOffset": 250,\n\
          "vOffset": 100,\n\
          "alignment": "center",\n\
          "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"\n\
      }\n\
  }\n\
}',
      language: 'json',
      minimap: {
        enabled: false
      }
    });

    if (editor_instance) {
      editor_instance.onDidChangeModelContent(() => {
        emit('response', editor_instance.getValue())
      })
    }
    emit('response', editor_instance.getValue())
  });



})
</script>

<template>
  <div id="editor"></div>
</template>

<style scoped>
#editor {
  width: 42vw;
  height: 81vh;
}
</style>
