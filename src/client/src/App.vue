<template>
  <div id="app">
    <v-header></v-header>
    <app-main></app-main>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import VHeader from './components/layout/V-Header.vue'
  import VFooter from './components/layout/V-Footer.vue'
  import AppMain from  './components/layout/AppMain.vue'

  export default {
    name: 'app',
    components: {
      VHeader,
      VFooter,
      AppMain
    }
  }
</script>
<style>

  html, body, div, span, a, li, td, th {
    font-family: '微软雅黑', 'Lato', sans-serif;
  }

  a{
    font-weight: bold;
    cursor: hand;
    text-decoration:none;
  }

  form {
    display: block;
    margin-top: 0em;
  }

  textarea {
    overflow: auto;
  }

  .container {
    min-height: 800px;
  }

  .center-block {
    display: block;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  .map-wrapper{
    padding-bottom: 80px;
  }

  .map-accordion {
    width:700px;
    margin:0 auto;
    position: relative;
  }

  .map-accordion h2 > a {
    width:100%;
    display: block;
    background-color: #efefef;
    padding: 10px 20px 10px 50px;
  }

  .map-accordion h3 > a {
    padding-left: 60px;
    padding-bottom: 10px;
    display: block;
    max-width: 535px;
  }

  .map-accordion div > div:last-child {
    margin-bottom: 30px;
  }

  .map-accordion div.chapterBlock p{
    text-indent: -15px;
    margin-left: 120px;
    padding-right: 20px;
  }

  .no-transition {
    -webkit-transition: height 0.001s;
    -moz-transition: height 0.001s;
    -ms-transition: height 0.001s;
    -o-transition: height 0.001s;
    transition: height 0.001s;
  }

  form.code span {
    font-size: 18px;
    font-family: "Ubuntu Mono";
    padding-bottom: 0px;
    margin-bottom: 0px;
    height: 100%;
  }
  .CodeMirror {
    line-height: 1 !important;
    height: 800px !important;
  }
  .CodeMirror-linenumber {
    font-size: 18px;
    font-family: "Ubuntu Mono";
  }
  #mainEditorPanel {
    height: 100%;
    width: 99%;
  }
  .scroll-locker {
    overflow-x: hidden;
    overflow-y: auto;
  }
  #mainEditorPanel .panel-body {
    padding-bottom: 0px;
  }
  div.CodeMirror-scroll {
    padding-bottom: 30px;
  }
  .test-vertical-center {
    margin-top: 8px;
  }
  .cm-s-monokai.CodeMirror {
    border-radius: 5px;
  }
  .courseware-height {
    min-height: 650px;
  }

  .preview{
    overflow-y: auto;
    overflow-x:hidden;
    height: 600px;
  }

  iframe.iphone {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  .scroll-locker {
    overflow-x: hidden;
    overflow-y: auto;
  }

  .button-spacer {
    padding: 5px 0;
  }

</style>
