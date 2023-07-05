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
    "widget": {\n\
      "debug": "on",\n\
      "window": {\n\
          "title": "Sample Konfabulator Widget",\n\
          "name": "main_window",\n\
          "width": 500,\n\
          "height": 500\n\
      },\n\
      "image": { \n\
          "src": "Images/Sun.png",\n\
          "name": "sun1",\n\
          "hOffset": 250,\n\
          "vOffset": 250,\n\
          "alignment": "center"\n\
      },\n\
      "text": {\n\
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
    minimap:{
      enabled:false
    }
  });

    if(editor_instance){
    editor_instance.onDidChangeModelContent(()=>{
      emit('response',editor_instance.getValue())
    })
  }
  emit('response',editor_instance.getValue())
  });
 
  
  
})
</script>

<template>
  <div id="editor"></div>
</template>

<style scoped>
#editor {
  width: 40vw;
  height: 90vh;
}
</style>
