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

        @media screen and ($media-lt-sm) {
            padding-top: base-unit(5);

            .header-image {
                height: 50vh;
            }
        }
    }

    .project-content {
        padding-top: 60vh;
        @include project-content-appear;
        @include transition;

        .project-image {
            margin-bottom: base-unit(15);
            position: relative;

            .image-container {
                width: fit-content;
                margin: 0 auto;

                img {
                    height: 80vh;
                    margin: 0 auto;

                    @media screen and ($media-lt-sm) {
                        height: auto;
                        width: 100vw;
                    }
                }
            }

            &:before {
                content: '';
                position: absolute;
                left: 0;
                height: 60vh;
                width: 100vw;
                z-index: -1;

                @media screen and ($media-lt-sm) {
                    height: 40vh;
                }
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