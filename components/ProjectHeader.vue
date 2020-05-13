<template>
    <div class="project-header" :style="style">
        <img :src="headerInfos.headerImg" alt="illustration projet" class="header-image">
    </div>
</template>


<style lang="scss">
    .project-header {
        width: 100vw;
        height: 40vh;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        @include transition;
        @include project-header-appear;

        .header-image {
            height: 60vh;
            margin-top: base-unit(2);
            @include transition;
            @include project-header-appear-img;
        }
    }

    .project-content {
        padding-top: 60vh;
        @include project-content-appear;
        @include transition;

        .text-container {
            padding: 0 base-unit(40);
            max-width: 1500px;
            margin: 0 auto calc(8px * 15) auto;

            .margin-bottom {
                margin-bottom: base-unit(10);
            }

            .p-break {
                margin-bottom: base-unit(4);
            }

            .quote {
                width: 85%;
                text-align: center;
                margin: base-unit(4) auto;

            }

            .congrats {
                font-style: italic;
                opacity: 0.8;
                margin-right: $base-unit;
            }
        }

        .project-image {
            margin-bottom: base-unit(15);
            position: relative;

            .image-container {
                width: fit-content;
                margin: 0 auto;

                img {
                    height: 80vh;
                    margin: 0 auto;
                }
            }

            &:before {
                content: '';
                position: absolute;
                left: 0;
                height: 60vh;
                width: 100vw;
                z-index: -1;
            }
            &.sofya-website:before {
                background-color: #FCFAF2;
                bottom: 0;
            }

            &.sofya:before {
                background-color: #D8DFFF;
                top: 50%;
                transform: translateY(-50%);
            }
        }

    }
</style>

<script>
    import Vue from 'vue'

    export default Vue.extend({
        props: ['headerInfos'],
        data() {
            return {
                style: {
                    backgroundColor: this.headerInfos.headerBackgroundColor
                }
            }
        },

    })
</script>