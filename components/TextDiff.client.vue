<template>
    <div class="container-wrapper">
        <div id="container" style="width: 1200px; height: 800px; border: 1px solid grey"></div>
    </div>
    
</template>


<script setup >

import * as monaco from 'monaco-editor';

import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';



// @ts-ignore
self.MonacoEnvironment = {
  getWorker(_, label) {
		if (label === 'json') {
			return new jsonWorker();
		}
		if (label === 'css' || label === 'scss' || label === 'less') {
			return new cssWorker();
		}
		if (label === 'html' || label === 'handlebars' || label === 'razor') {
			return new htmlWorker();
		}
		if (label === 'typescript' || label === 'javascript') {
			return new tsWorker();
		}
		return new editorWorker();
	}
};
monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);

onMounted(()=>{
    nextTick(()=>{
        var diffEditor = monaco.editor.createDiffEditor(document.getElementById('container'),{
            originalEditable: true
        });
        diffEditor.setModel({
            original: monaco.editor.createModel("type something here", 'text'),
            modified: monaco.editor.createModel("type something here\nthis is different", 'text')
        });
    })
   
})
</script>

<style scoped>
    .container-wrapper{
        margin:0px auto;
        width: 1024px; 
        height: 600px;
    }
    .container-wrapper .container{
        width: 800px; height: 600px;
        border: 1px solid grey
    }
</style>