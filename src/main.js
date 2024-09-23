import './assets/main.css'

import { ViteSSG } from 'vite-ssg'
import { VueHeadMixin } from '@unhead/vue'
import App from './App.vue'

/* import the fontawesome core */
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false; //This causes a CSP error
import "@fortawesome/fontawesome-svg-core/styles.css"; //we include it instead directly here.
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


export const createApp = ViteSSG(
    // the root component
    App,
    // vue-router options
    {
        routes: [
            {
                path: '/',
                name: 'Home',
                component: () => import('@/views/Home.vue')
            },
            {
                path: '/faq',
                name: 'FAQ',
                component: () => import('@/views/Faq.vue')
            },
            {
                path: '/faq/:id?',
                name: 'FAQ',
                component: () => import('@/views/Faq.vue')
            },
            {
                path: '/team',
                name: 'Team',
                component: () => import('@/views/Team.vue')
            },
            {
                path: '/download',
                name: 'Download',
                component: () => import('@/views/Download.vue')
            },
            //Explicitly generate page at 404. Otherwise, SSG doesn't generate a site for this.
            {
                path: '/404',
                name: 'NotFound',
                component: () => import('@/views/NotFound.vue')
            },
            {
                path: '/:catchAll(.*)',
                name: 'NotFound',
                component: () => import('@/views/NotFound.vue')
            }
        ],
        base: import.meta.env.BASE_URL,
    },
    // function to have custom setups
    ({ app, _router, _routes, _isClient, _initialState }) => {
        //unhead setup start
        app.config.globalProperties.unhead = {
            baseTitle: "TLOF",
            separator: " • ",
            formattedTitle: function(pageTitle) {
                return this.baseTitle + this.separator + pageTitle;
            }
        }

        app.mixin(VueHeadMixin);
        //unhead setup end
        app.component("font-awesome-icon", FontAwesomeIcon);

        //Create some global properties
        app.config.globalProperties.global = {
            url: "https://tlof.party/",
            discordUrl: "https://discord.tlof.party/",
            tlofYoutubeUrl: "https://www.youtube.com/@thelandoffuture",
            launcherUrl: "https://launcher.kettingpowered.org/",
            imageUrl: "https://github.com/kettingpowered.png",
            downloadUrl: "https://reposilite.c0d3m4513r.com/Ketting-Server-Releases/org/kettingpowered/server/forge/maven-metadata.xml",
            featherInstallUrl: "https://youtu.be/Vt0MdkmhkXA",
            softwareUrl: function(version) {
                if (version.startsWith("1.20")) {
                    return this.githubUrl + "Ketting-1-20-x/";
                } else if (version.startsWith("1.21")) {
                    return this.githubUrl + "Ketting-1-21-x/";
                } else {
                    return this.githubUrl + "Ketting-1-20-x/";
                }
            },
            deprecatedVersions: ["1.20.2", "1.20.3", "1.20.4"],
        };
    }
)
