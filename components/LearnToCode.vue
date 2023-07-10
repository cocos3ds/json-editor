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
import 'highlight.js/styles/atom-one-light.css'

useHead({
    title:"JSON Editor Online - Learn to Code"
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