<template>
    <div>
        <ProjectHeader :headerInfos="personalProjects" />

        <div class="project-content">
            <div class="text-container">
                <h1 class="app-title">Personal Projects</h1>

                <h2>About</h2>
                <p class="margin-bottom">This projects are nothing more than a few shots provided for my 
                    <span class="link">dribbble</span> and <span class="link">instagram</span> accounts. They are some
                    visual experiments moslty maint for practice.
                </p>

                <h2>Aquatic Radio</h2>
                <p>Aquatic Radio is a make-believe web radio concept for wich I designed a landing page. 
                    As I pictured the radio being focused on underground electronic music I chose to use grainy texture as a 
                    reference to the often rough aspect of sounds used in this genre.
                </p>
            </div>

            <div class="project-image">
                <div class="image-container project-image">
                    <img src="~/assets/images/personal-projects/aquatic_radio.png" alt="Sofya website">
                </div>
            </div>

            <div class="text-container">
                <h2>Plantarium</h2>
                    <p>Explicitely Plantarium is supposed to be an online plain shop, also providing
                        maintaining advices.
                    </p>
            </div>

            <div class="project-image">
                <div class="image-container project-image">
                    <img src="~/assets/images/personal-projects/plantarium.png" alt="Sofya website">
                </div>
            </div>

            <div class="more">
                <h2>& Many to come...</h2>
                <GetInTouch />
            </div>

            <div class="text-container">
                <h4 class="light-text">Like what you see ? Keep browsing !</h4>
                <ProjectCard :cardInfos="sofya"/>
            </div>

        </div>

    </div>
</template>

<style lang="scss">
    .project-image {
        img {
            border-radius: 5px;
        }
    }
</style>

<script>
    import Vue from 'vue'
    import ProjectHeader from '~/components/ProjectHeader.vue'
    import GetInTouch from '~/components/GetInTouch.vue'
    import ProjectCard from '~/components/ProjectCard.vue'
    import * as projects from '~/assets/files/projects.js'

    export default Vue.extend({
        components: {
            ProjectHeader,
            GetInTouch,
            ProjectCard
        },
        data() {
            return {
                personalProjects: projects.personalProjects,
                sofya: projects.sofya
            }
         },
    })
</script>