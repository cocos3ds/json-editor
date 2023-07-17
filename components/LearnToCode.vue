<template>
    <div>
        <h1>PHP programing language example</h1>
        <h3>how to convert php array to json string?</h3>
        <h4>use php built-in function <span style="color: #d2a8ff;">json_encode</span> encode array</h4>
        <pre><code class="hljs" v-html="phpdemo1"></code></pre>
        <h3>output</h3>
        <pre><code class="hljs" v-html="phpdemo1_output"></code></pre>

        <h3>how to decode JSON data in php?</h3>

        <pre><code class="hljs" v-html="phpdemo2"></code></pre>
        <h3>output</h3>
        <pre><code class="hljs" v-html="phpdemo2_output"></code></pre>
    </div>
</template>

<script setup>
import hljs from 'highlight.js'

useHead({
    title:"JSON Editor Online - Learn to Code",
    meta: [
        { name: "description", content: "how to encode json using php" },
        { name: "keywords", content: "json_encode,json_decode,php,encode json,decode json" }
    ],
    link:[
        {
            rel:"canonical",
            href:"https://www.jsonv2.com/learn-to-code/index.html"
        }
    ]
    
})

let phpdemo1 = ref('')
let phpdemo2 = ref('')
let phpdemo1_output  = ref('')
let phpdemo2_output  = ref('')
let php_string1 = `<?php
$arr = array("location"=>"earth","The Five Permanent Members"=>[
  "China",
  "United States",
  "Britain",
  "France",
  "Russia"
]);

echo json_encode($arr);
?>`


let php_string2 = `<?php
  $json = '{"location":"earth","The Five Permanent Members":["China","United States","Britain","France","Russia"]}';  //The json string being decoded.

  var_dump(json_decode($json));
  var_dump(json_decode($json, true));`

let phpdemo1_output_string = `{"location":"earth","The Five Permanent Members":["China","United States","Britain","France","Russia"]}`
let phpdemo2_output_string = `object(stdClass)#1 (2) {
  ["location"]=>
  string(5) "earth"
  ["The Five Permanent Members"]=>
  array(5) {
    [0]=>
    string(5) "China"
    [1]=>
    string(13) "United States"
    [2]=>
    string(7) "Britain"
    [3]=>
    string(6) "France"
    [4]=>
    string(6) "Russia"
  }
}
array(2) {
  ["location"]=>
  string(5) "earth"
  ["The Five Permanent Members"]=>
  array(5) {
    [0]=>
    string(5) "China"
    [1]=>
    string(13) "United States"
    [2]=>
    string(7) "Britain"
    [3]=>
    string(6) "France"
    [4]=>
    string(6) "Russia"
  }
}`


phpdemo1.value = hljs.highlight(php_string1, {language: 'php'}).value
phpdemo2.value = hljs.highlight(php_string2, {language: 'php'}).value
phpdemo1_output = hljs.highlight(phpdemo1_output_string, {language: 'bash'}).value
phpdemo2_output = hljs.highlight(phpdemo2_output_string, {language: 'bash'}).value

</script>

<style scoped>

pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
*/.hljs{color:#c9d1d9;background:#0d1117}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#79c0ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-code,.hljs-comment,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}
</style>