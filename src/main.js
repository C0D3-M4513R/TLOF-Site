import './assets/main.css'

import { ViteSSG } from 'vite-ssg'
import { VueHeadMixin } from '@unhead/vue'
import App from './App.vue'
import logo from '@/assets/tlof.webp'

/* import the fontawesome core */
import { library, config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false; //This causes a CSP error
import "@fortawesome/fontawesome-svg-core/styles.css"; //we include it instead directly here.
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([
    /*
        Todo: Use FAB kofi-icon when available.
         - https://github.com/FortAwesome/Font-Awesome/issues/12607
         - https://simpleicons.org/?q=ko-fi
     */
    {
        prefix: 'fab',
        iconName: 'kofi',
        icon: [
            24,
            24,
            [],
            'f0c1',
            'M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z'
        ]
    },
    /*
        Todo: No VRChat FAB request even?.
         - https://simpleicons.org/?q=vrchat
     */
    {
        prefix: 'fab',
        iconName: 'vrchat',
        icon: [
            596,
            596,
            [],
            'f0c1',
            'M22.732 6.767H1.268A1.27 1.27 0 0 0 0 8.035v5.296c0 .7.57 1.268 1.268 1.268h18.594l1.725 2.22c.215.275.443.415.68.415.153 0 .296-.06.403-.167.128-.129.193-.308.193-.536l-.002-1.939A1.27 1.27 0 0 0 24 13.331V8.035c0-.7-.569-1.269-1.268-1.269Zm.8 6.564a.8.8 0 0 1-.8.801h-.34v.031l.004 2.371c0 .155-.05.233-.129.233s-.19-.079-.31-.235l-1.866-2.4H1.268a.8.8 0 0 1-.8-.8V8.064a.8.8 0 0 1 .8-.8h21.464a.8.8 0 0 1 .8.8v5.266ZM4.444 8.573c-.127 0-.225.041-.254.15l-.877 3.129-.883-3.128c-.03-.11-.127-.15-.254-.15-.202 0-.473.126-.473.311 0 .012.005.035.011.058l1.114 3.63c.058.173.265.254.485.254s.433-.08.484-.254l1.109-3.63c.005-.023.011-.04.011-.058 0-.179-.27-.312-.473-.312Zm2.925 2.36c.433-.132.757-.49.757-1.153 0-.918-.612-1.207-1.368-1.207H5.614a.234.234 0 0 0-.242.231v3.752c0 .156.184.237.374.237s.376-.081.376-.237V11.05h.484l.82 1.593c.058.115.156.179.26.179.219 0 .467-.203.467-.393a.155.155 0 0 0-.028-.092l-.756-1.403Zm-.61-.473h-.636V9.231h.635c.375 0 .618.162.618.618s-.242.612-.618.612Zm10.056.826h1.004l-.502-1.772-.502 1.772Zm4.684-3.095H9.366a.8.8 0 0 0-.8.8v3.383a.8.8 0 0 0 .8.8h12.132a.8.8 0 0 0 .8-.8V8.992a.8.8 0 0 0-.8-.801Zm-10.946 3.977c.525 0 .571-.374.589-.617.011-.179.173-.236.369-.236.26 0 .38.075.38.369 0 .698-.57 1.142-1.379 1.142-.727 0-1.327-.357-1.327-1.322v-1.61c0-.963.606-1.322 1.333-1.322.802 0 1.374.427 1.374 1.097 0 .3-.121.37-.375.37-.214 0-.37-.064-.375-.238-.012-.178-.052-.57-.6-.57-.387 0-.606.213-.606.663v1.61c0 .45.219.664.617.664Zm4.703.388c0 .156-.19.237-.375.237s-.375-.081-.375-.237V10.9h-1.299v1.656c0 .156-.19.237-.375.237s-.375-.081-.375-.237V8.804c0-.161.185-.23.375-.23s.375.069.375.23v1.507h1.299V8.804c0-.161.185-.23.375-.23s.375.069.375.23v3.752Zm3.198.236c-.127 0-.225-.04-.254-.15l-.22-.768h-1.322l-.219.768c-.029.11-.127.15-.254.15-.202 0-.473-.127-.473-.311 0-.012.006-.035.012-.058l1.114-3.63c.051-.173.265-.254.478-.254s.433.08.485.254l1.114 3.63c.006.023.012.04.012.058 0 .179-.272.311-.473.311Zm2.989-3.543H20.6v3.306c0 .156-.19.237-.375.237s-.375-.081-.375-.237V9.25h-.848c-.15 0-.237-.157-.237-.34 0-.162.075-.336.237-.336h2.44c.162 0 .238.173.238.335 0 .18-.087.34-.237.34Z',
        ]
    },
    {
        prefix: 'fab',
        iconName: 'vrchat-short',
        icon: [
            596,
            596,
            [],
            'f0c1',
            [
                'M60.2 1.6c-28 6.1-49.8 28.2-55.7 56.5-2.2 10.6-2.2 319.2 0 329.8 5.4 25.9 23.6 46.2 49 54.9l8 2.7 148.6.3 148.5.2 50.9 65.6c29 37.4 53.5 68 57.1 71.4 12.7 11.8 27.1 15.8 39.9 10.9 7.9-3 15.4-10 19.1-18.2l2.9-6.2.3-61.7.3-61.8 2.7-.5c17-3.5 28.3-8.9 38.7-18.7 11.6-10.8 18.8-23.5 22-38.9 2.2-10.4 2.2-317.8.1-329.3-5.5-28.6-27.7-51-56.7-57.1C525.7-.7 70-.6 60.2 1.6zM529 29.1c17 2.7 31.1 14.9 36.2 31.2 1.7 5.7 1.8 12.3 1.6 166.6l-.3 160.6-3.2 6.8c-1.9 3.9-5.5 9.2-8.8 12.6-10.2 10.7-19.7 14.1-39.2 14.1h-12.2l-.3 71.7c-.3 77.3-.3 76.6-5.5 77.9-3.7 1-6.7-.3-12-5-2.7-2.5-29.4-36-59.3-74.5L371.6 421H220.5c-165 0-156.7.3-167.7-5.7-6.9-3.7-15.3-13-19.1-21l-3.2-6.8-.3-160.5C30 68.7 30 66.4 32 59.9c4.6-15.4 19.3-28.1 35.4-30.8 7.7-1.3 453.6-1.3 461.6 0z',
                'M123.1 105c-9.2 3.3-15.1 9.3-15.1 15.2 0 3 63.2 209.3 65.4 213.7 4.9 9.4 23.6 13.8 38.8 9.1 9.3-2.9 13-6.8 16.2-17.2 1.4-4.6 15.8-52 32.1-105.3 16.3-53.4 29.6-98.5 29.7-100.3 0-4.1-2.2-7.4-7.4-11.2-9.7-7.1-26.4-8-31.5-1.8-.7.8-9.4 30.4-19.3 65.9-10 35.4-21.3 75.8-25.2 89.8-4.2 14.8-7.4 24.7-7.8 24-.5-.8-11.9-40.7-25.4-88.8-13.6-48-25.1-88.2-25.7-89.3-3.1-5.8-14.4-7.5-24.8-3.8zM324.4 104c-3.9 1.6-7.2 6.7-7.9 12.2-.3 2.9-.5 52.8-.3 110.8.3 118.8-.4 108.7 8.1 113.2 6.2 3.3 20.2 3.3 27-.1 8-3.9 7.7-2.1 7.7-52.1v-44.1l14 .3 14.1.3 23.4 45.5c12.8 25 24.6 47 26 48.8 5.4 6.8 13.6 7.8 23.2 2.8 8-4.1 15.3-13.3 15.3-19.2 0-1-9.9-20.2-22-42.7-12.2-22.5-21.9-41.4-21.8-41.9.2-.6 2.4-1.8 4.9-2.8 11.1-4.2 22.7-14.6 28.6-25.6 6-11.3 7.8-19.9 7.8-37.9-.1-12.3-.5-17.5-1.9-22.5-7.1-25.7-26-40.5-57.1-45-8.4-1.2-86.1-1.2-89.1 0zm86.2 38.3c6.8 2.3 13.5 8.3 16.5 14.9 1.8 4.2 2.4 7.6 2.7 15.9.7 17.9-3.7 27.5-15.3 33.4l-5.9 3-24.8.3-24.8.4v-34.5c0-18.9.3-34.7.8-35.1.4-.4 10.8-.6 23.2-.3 17.3.3 23.7.8 27.6 2z',
            ],
        ]
    }
])

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
            baseTitle: "The Land of Future",
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
            tlofVRChatUrl: "https://vrc.group/TLOF.9942",
            launcherUrl: "https://launcher.kettingpowered.org/",
            imageUrl: logo,
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
