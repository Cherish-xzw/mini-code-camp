<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 col-lg-3">
                    <div id="scroll-locker" class="scroll-locker" style="min-height: 306px; height: 800px;">
                        <div style="width: 99%; min-height: 1000px;" class="innerMarginFix">
                            <div class="row">
                                <div class="col-xs-12"><h4
                                    class="text-center challenge-instructions-title">{{challenge.title}}</h4>
                                    <hr>
                                    <div class="challenge-instructions">
                                        <!--{{#each challenge.description}}-->
                                        <p class="wrappable" v-for="description in  challenge.description" v-html="description"></p>
                                        <!--{{/each}}-->
                                        <div class="negative-bottom-margin-30"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="button-spacer"></div>
                            <button id="submitButton" class="btn-big btn btn-success btn-block">Run tests
                            </button>
                            <div class="button-spacer"></div>
                            <div class="button-spacer"></div>
                            <div id="testSuite">

                            </div>
                            <br></div>
                    </div>
                    <div class="button-spacer"></div>
                </div>
                <div class="col-md-5 col-lg-6">
                    <div class="editorScrollDiv">
                        <div id="mainEditorPanel">
                            <form class="code">
                                <div class="codeMirrorView">
                                    <!--<textarea id="code" autofocus="" name="code" style="display: none;">{{#each challenge.challengeSeed}}{{this}}&#10;{{/each}}</textarea>-->
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-3">
                    <div class="panel panel-default">
                        <div class="panel-body preview text-center">
                            <iframe frameborder="0" id="preview" class="iphone"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!--<script id="error" type="text/x-handlebars-template">-->
<!--<div>-->
<!--<div class="row">-->
<!--<div class="col-xs-2 text-center">-->
<!--<i class="glyphicon glyphicon-remove"></i>-->
<!--</div>-->
<!--<div class="col-xs-10 test-output">-->
<!--\{{message}}-->
<!--</div>-->
<!--<div class="ten-pixel-break"></div>-->
<!--</div>-->
<!--</div>-->
<!--</script>-->
<!--<script src="/js/challenge.js"></script>-->
<script>
    module.exports = {
        data(){
            return {
                challenge:{}
            }
        },
        methods:{
            getChallenge(){
                const vm = this;
                const id = vm.$route.params['id'];
                vm.$http('/api/challenge/'+id).then(response => {
                    vm.challenge = response.data.challenge;
                });
            }
        },
        mounted(){
            this.getChallenge();
        }
    }
</script>
