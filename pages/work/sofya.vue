<template>
    <div>
        <ProjectHeader :headerInfos="sofya"/>
        <div class="project-content">

            <div class="text-container default-layout">
                <h1 class="app-title">Sofya</h1>

                <h2>In a nutshell</h2>
                <p class="margin-bottom">Sofya is a  software suite in SaaS mode, dedicated to real estate and construction work. 
                    It regroups key tools allowing real estate and construction experts to relentlessly work 
                    together. Sofya covers a wide aspect of a construction project from stocking documents to graphical data visualisation. 
                    It enables each project member to be self sufficient while being informed of the whole project evolution in real time.
                </p>

                <h2>Roles</h2>
                <p>Ux/ui design for Sofya’s electronic document management system</p>
                <p>Front end development for Sofya’s electronic document management system</p>
                <p>Rebranding sofya’s image through the graphical chart and logo</p>
                <p class="margin-bottom">Defining the main communication axis and creating the relevant visual content</p>

                <h2>A little bit of context</h2>
                <p>The first drafts of sofya where typical of the technical BtoB plateform, including old school designs 
                    and a complicated user flow. As a UI/UX designer, I tried to give a more BtoC feeling to the plateform and 
                    therefore to make the product stand out from the main competitors. By keeping the workflow as simple as 
                    possible while maintaing a great number of functionalities, combined it with a more modern non 
                    risk taking design we were able to create a stand out product. We were lucky and very glad to collect 
                    enthusiastic feedbacks from our early adopters confirming the direction we took.
                </p>
                <p>On the technical side, we developed the application with Angular, Material Design and FxFlex. As a 
                    front-end developper I started working on Angular with typescript. After our team had grown, I focused 
                    mainly on the html and css part of the code, maintaing the cross-plateform design system up to date. 
                </p>
            </div>

            <div class="project-image sofya-website">
                <div class="image-container">
                    <img src="~/assets/images/sofya/sofya_website.png" alt="Sofya website">
                </div>
            </div>

            <div class="text-container default-layout">
                <h2>Main design challenges</h2>
                <p class="margin-bottom">Among the various challenges that occurred while developing Sofya, I identified 
                    two main ones that have been particularly recurrent. While appearing at many times in different forms, 
                    I will present you two specific cases and how we decided to resolve the problems we were facing.
                </p>
                <h4>Display a very large number of information in a non discouraging way</h4>
                <p>This challenge was particularly present when designing the main explorer. The grid in 
                    which we display the files can contain up to XX columns and in most cases contains around XX columns. 
                    While every column showcases important information, each user needs prior access to different types of 
                    information depending on their role on the project or the advancement of the project.
                </p>
                <div class="quote bold">Therefore not all information is useful for every user at all times</div>
                <p>To provide a user-friendly display we first decided to cross reference the most useful columns for every user 
                    at all times and defined a default grid configuration displaying only theses columns. To complete the grid 
                    and choose a more pertinent display, the user can access all available columns and chose which to display 
                    or not in a configuration panel opened on click.
                </p>
                <p class="p-break">To allow access to a more pertinent information display and and facilitate the selection of 
                    information among a large number of files, each column is provided with its own filtering system, pertinent 
                    to the data displayed inside of the column. Theses filters can be combined to reach a very specific set 
                    of characteristics targeting. In addition, every column can be sorted up or down.
                </p>
                <p>Theses display settings being potentially complex and difficult to program, we decided to implement a “views” 
                    system, allowing users to save a combination of columns filters and sorts, and apply them in one click. Every 
                    new combination is considered as an unsaved view which can then be saved with a specific name and accessed 
                    later easily by the user. Users can also share views with other members of the project. This is a useful feature for 
                    the project managers who can then create several views corresponding to different roles on the project 
                    and share them from the start with targeted users to allow them a smoother experience of the platform.
                </p>
                <p>To go further, we are thinking about allowing users to set one of their saved view as the default view that 
                    will automatically load when accessing the platform.
                </p>
            </div>

            <div class="project-image sofya">
                <div class="image-container">
                    <img src="~/assets/images/sofya/sofya_explorer.png" alt="Sofya explorer">
                </div>
            </div>

            <div class="text-container default-layout">
                <h4>Complex configuration panels</h4>
                <p>Sofya includes a settings module allowing project managers to set up specific rules and columns 
                    applied to certain selected folders. This rules are an inherent part of every french construction project. Among 
                    other details they include specific codification for each file, the definition of certain persons or groups 
                    of persons as “validators” of files containing specific fields in their codification and so on.
                </p>
                <p class="p-break">In addition, the access rights to every folder is a crucial feature, some documents needing to 
                    remain shared to only a restrain number of users (financials reports, bills…).
                </p>
                <p>Finally, a large number of extra features are available on Sofya, making it the only tool needed on a 
                    construction project, and simplifying the jobs of the persons involved, from the project manager to the 
                    company in charge of printing and distributing the documents. To transform Sofya into the main hub of a 
                    project, the project manager has to go through a complex parameters section, enabling him to set specific rules 
                    for his project.
                </p>
                <div class="quote bold">We had to design intuitive administration panels allowing a novice manager to still be 
                    able to make the right decision, and more importantly to understand each feature available to him.
                </div>
                <p>In the original design, the various fields were broken off into 5 different groups who were then divided in 2 master 
                    groups. Inside the 5 sub groups, the fields were displayed as a list and you had to click on a field to edit it. 
                    This resulted in a constant pattern of entering and leaving groups and sub-groups and making it impossible for a user 
                    to have a global picture of his configuration.
                </p>
                <p>We decided to restart from a single page, displaying all the information of the 5 previous subgroups in a 
                    simple grid. To access and edit a field, a user simply needs to click on the grid’s corresponding row. He then 
                    reaches the configuration panel for this row, on a page that allows him to easily browse through the others 
                    rows of the table.
                </p>
            </div>

            <div class="project-image sofya">
                <div class="image-container">
                    <img src="~/assets/images/sofya/sofya_admin.png" alt="Sofya admin">
                </div>
            </div>

            <div class="text-container default-layout">
                <h2>Communication</h2>
                <p class="margin-bottom">The further our product approached the beta test phase, the more we started thinking 
                    about communication. Our first urge was to renew the whole brand image wich had initially been created in a 
                    hurry without any communication purpose in mind.
                </p>
                <div class="graph-chart-container margin-bottom">
                    <div class="graph-chart">
                        <div class="logo">
                            <p class="graph-chart-title bold">Former Logo</p>
                            <img src="~/assets/images/sofya/former_logo_sofya.png" alt="former logo Sofya">
                        </div>
                        <div class="colors">
                            <p class="graph-chart-title bold">Former color palette</p>
                            <div class="color">
                                <div class="color-square" style="background-color: #FAC328;"></div>
                                <div class="color-name">
                                    <p>Lighting Yellow (primary)</p>
                                </div>
                            </div>
                            <div class="color">
                                <div class="color-square" style="background-color: #222D32;"></div>
                                <div class="color-name">
                                    <p>Outer Space (accent)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="graph-chart">
                        <div class="logo">
                            <p class="graph-chart-title bold">New Logo</p>
                            <img src="~/assets/images/sofya/logo_sofya.png" alt="former logo Sofya">
                        </div>
                        <div class="colors">
                            <p class="graph-chart-title bold">New color palette</p>
                            <div class="color">
                                <div class="color-square" style="background-color: #19A194;"></div>
                                <div class="color-name">
                                    <p>Moutain Meadow (primary)</p>
                                </div>
                            </div>
                            <div class="color">
                                <div class="color-square" style="background-color: #667EEA;"></div>
                                <div class="color-name">
                                    <p>Cornflower Blue (secondary)</p>
                                </div>
                            </div>
                            <div class="color">
                                <div class="color-square" style="background-color: #FE4A49;"></div>
                                <div class="color-name">
                                    <p>Sunset Orange (accent)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p class="p-break">For the logo we decided to combine the shape of an elephant, associated with memory and 
                    often used as a database representation, with a house to represent our field of work. After a benchmark of our 
                    competitors graphical chart, we noticed that most of the colours used were orange or a blue/red combo. In order 
                    to start out we opted for a green primary color, a professional and reassuring color but also largely used in 
                    the web environment and therefore not confusing for our targets.
                </p>
                <p>We also took this opportunity to rethink our communication strategy. Being a young and small project compared 
                    to main actors that have been present on the market for years, we felt that our best card to play was to 
                    outline the innovation of our product as well as its user-friendly, modern looking interface, in comparison 
                    with often outdated looking and hard to use competitors' products. We then chose a more modern communication 
                    axis, embracing part of the tech startup visual identity rather than the former traditional construction lingo.
                </p>
            </div>

            <div class="soon-image"></div>

            <div class="text-container default-layout">
                <h2>On a more personal note</h2>
                <p class="p-break">Arriving as a junior and being the sole designer for the project was not an easy task. 
                    I had to learn how to affirm my opinions and trust my guts when in disagreement with the tech team. 
                    The product being very specific to the construction sector and its needs, and being relatively complicated, 
                    learning all of its functions and understanding the concrete use of what we were crafting also represented a 
                    challenge. One acquainted with the product and the market it became easier to push design points with pertinent 
                    arguments.
                </p>
                <p class="p-break">Being attached to the tech team, under the CTO, I tried to raise awareness of UX challenges to 
                    my coworkers, to help them understand my decisions, but also to prove them how UX was crucial, and more 
                    importantly, how there is rarely a perfect solution. The more my collegues became familiar with my end 
                    goals and vision, the easier it became to be heard and trusted as a designer.
                </p>
                <p><span class="congrats">Congrats, you made it to the end</span>💪</p>
            </div>


            <div class="more">
                <p class="bold know-more">Want to know more ?</p>
                <GetInTouch />
            </div>

            <div class="text-container default-layout">
                <h4 class="light-text">Like what you see ? Keep browsing !</h4>
                <ProjectCard :cardInfos="personalProjects"/>
            </div>


        </div>
    </div>
</template>


<style lang="scss">

    // TODO remove next class
    .soon-image {
        height: 50vh;
        width: 100%;
        background-color: #F6F6F6;
        margin-bottom: base-unit(10);
    }

    .project-image {

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

    .graph-chart-container {

        .graph-chart {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;

            &:first-child {
                margin-bottom: base-unit(6);
            }

            .graph-chart-title {
                margin-bottom: base-unit(5);
            }

            .logo {
                margin-right: base-unit(2);
                width: 50%;

                img {
                    width: 45%;
                }
            }

            @media screen and ($media-lt-md) {
                flex-direction: column;
                .graph-chart-title {
                    margin-bottom: base-unit(4);
                }

                .logo {
                    width: 100%;
                    margin-right: 0;
                    margin-bottom: base-unit(6);
                    img {
                        width: 80%;
                        margin: auto;
                    }
                }
            }
            .color {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;

                &:not(:last-child) {
                    margin-bottom: base-unit(2);
                }

                .color-square {
                    height: base-unit(5);
                    width: base-unit(5);
                    border-radius: 5px;
                    margin-right: base-unit(2);
                }

                .color-name {
                    margin-right: base-unit(2);
                }
            }
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
                sofya: projects.sofya,
                personalProjects: projects.personalProjects
            }
         },
    })
</script>