<template>
    <div>
        <div class="container-fluid">
            <div class="jumbotron">
                <h1>Hello, world!</h1>
                <!--<p>{{message}}</p>-->
                <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
            </div>
        </div>
        <div class="container">
            <div class="map-wrapper">
                <!--{{#each blocks as |block superBlock|}}-->
                <div class="map-accordion" id="accordion" v-for="(block,superBlock) in blocks">
                    <h2>
                        <a data-toggle="collapse" data-parent="#accordion" aria-expanded="false" class="collapsed"
                           :href="'#collapse'+superBlock">
                            <span class="no-link-underline"><i class="glyphicon glyphicon-triangle-right"></i></span>
                            {{superBlock}}
                        </a>
                    </h2>
                    <div :id="'collapse'+superBlock" class="collapse no-transition">
                        <!--{{#each block as |subBlock|}}-->
                        <div id="nested" v-for="subBlock in block" @click="activeBlock=subBlock;getChallenges();">
                            <h3>
                                <a data-toggle="collapse" data-parent="#nested" aria-expanded="false"
                                   :href="'#nested'+subBlock._id"
                                   class="subBlock">
                                <span class="no-link-underline"><i
                                    class="glyphicon glyphicon-triangle-right"></i></span>
                                    {{subBlock.title}}
                                </a>
                            </h3>
                            <!--<div :id="'nested'+subBlock._id" class="collapse chapterBlock">-->
                            <!--&lt;!&ndash;{{#each this}}&ndash;&gt;-->
                            <!--<p>-->
                            <!--<a :href="'/challenge/'+_id">-->
                            <!--<span class="no-link-underline"><i class="glyphicon glyphicon-play-circle"></i></span>-->
                            <!--{{title}}-->
                            <!--</a>-->
                            <!--</p>-->
                            <!--&lt;!&ndash;{{/each}}&ndash;&gt;-->
                            <!--</div>-->
                        </div>
                        <!--{{/each}}-->
                    </div>
                </div>
                <!--{{/each}}-->
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data(){
            return {
                blocks: null,
                activeBlock: null,
            }
        },
        methods: {
            getBlocks(){
                const vm = this;
                vm.$http('/api/course').then(response => {
                    vm.blocks = response.data.blocks;
                });
            },
            getChallenges(){
                const vm = this;
                const blockId = vm.activeBlock._id;
                vm.$http('/api/blocks/' + blockId + '/challenges').then(response => {
                    console.log(response.data);
                });
            }
        },
        mounted(){
            this.getBlocks();
        }
    }
</script>
