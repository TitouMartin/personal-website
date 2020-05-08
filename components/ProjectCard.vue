<template>
    <div class="project-card" :style="style">
        <div class="project-card-info">
            <h2>{{ cardInfo.name }}</h2>
            <p class="light-text">{{ cardInfo.description}}</p>
            <p class="light-text">{{ cardInfo.role }}</p>
            <p class="bold learn-more link">Learn More</p>
        </div>
        <img :src="cardInfo.img" class="card-image">
    </div>
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

</style>

<script>
    export default {
        props: ['cardInfo'],
        name: 'projectCard',
        data() {
            return {
                style:{
                    backgroundColor: this.cardInfo.backgroundColor
                }
            }
        }
    }
</script>