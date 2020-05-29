<template>
    <nuxt-link :to="computeRoute()" class="card-link">
        <div class="project-card" :style="style">
            <div class="project-card-info">
                <h2>{{ cardInfos.name }}</h2>
                <p class="light-text">{{ cardInfos.description}}</p>
                <p class="light-text">{{ cardInfos.role }}</p>
                <p class="bold learn-more link">Learn More</p>
            </div>
            <img :src="cardInfos.cardImg" class="card-image">
        </div>
    </nuxt-link>
</template>


<style lang="scss">

    .project-card {
        border-radius: 5px;
        height: base-unit(40);
        padding: base-unit(4);
        @include transition;
        position: relative;

        &:hover {
            cursor: pointer;
            box-shadow: 0 0 99px rgba(33, 44, 93, 0.18);

            .link::before {
                width: 100%;
            }
        }

        .project-card-info {
            width: 45%;

            h2 {
                margin-bottom: base-unit(2);
            }

            .learn-more {
                margin-top: base-unit(2);
            }
        }

        .card-image {
            border-radius: 0 0 5px 0;
            width: 50%;
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }

    @media screen and ($media-lt-md) {
        .project-card {
            height: base-unit(48);

            .project-card-info {
                width: 100%;
            }
        }
        .card-image {
            display: none;
        }
    }

</style>

<script>
    export default {
        props: ['cardInfos'],
        name: 'projectCard',
        data() {
            return {
                style: {
                    backgroundColor: this.cardInfos.cardBackgroundColor
                }
            }
        },
        methods: {
            computeRoute() {
                return `/work/${this.cardInfos.pageLink}`;
            }
        }
    }
</script>