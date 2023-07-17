<template>
  <div class="about">
    
    <ul class="title">
      <li><h2>What is JSON?</h2></li>
    </ul>
    <ul>
      <li><h4>JSON stands for JavaScript Object Notation</h4></li>
      <li><h4>JSON is a lightweight data-interchange format</h4></li>
      <li><h4>JSON is plain text written in JavaScript object notation</h4></li>
      <li><h4>JSON is used to send data between computers</h4></li>
      <li><h4>JSON is language independent *</h4></li>
    </ul>


    <ul class="title">
      <li><h2>An example is shown below</h2></li>
    </ul>

    <pre><code class="hljs" v-html="render_html"></code></pre>

    

  </div>
</template>

<script setup>
import hljs from 'highlight.js'

useHead({
    title:"JSON Editor Online - Introducing JSON",
    meta: [
        { name: "description", content: "what is json?Briefly introduce json" },
        { name: "keywords", content: "json,introduce json,json tools" }
    ],
    link:[
        {
            rel:"canonical",
            href:"https://www.jsonv2.com/introducing-json/index.html"
        }
    ]
})

  let demo=`{
    "menu": {
        "id": "file",
        "value": "File",
        "popup": {
            "menuitem": [
              {"value": "New", "onclick": "CreateNewDoc()"},
              {"value": "Open", "onclick": "OpenDoc()"},
              {"value": "Close", "onclick": "CloseDoc()"}
            ]
        }
    }
}`


  let render_html = ref('')
  render_html.value = hljs.highlight(demo, {language: 'json'}).value
</script>

<style scoped>
.about{
  width :500px;
  margin:0 auto;
}
.title{
  list-style-type: none;
}

</style>
