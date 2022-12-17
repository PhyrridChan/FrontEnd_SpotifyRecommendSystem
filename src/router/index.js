import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

import Main from "@/view/main";
import Player from "@/view/player";
import Player_func from "@/components/player/player_func";
import Playlist from "@/view/playlist";


const routes = [
    {path: "/", component: Main},
    {
        path: "/player",
        component: Player,
        redirect: "/player/play",
        children: [
            {
                path: "/player/play",
                component: Player_func
            }
        ]
    },
    {
        path: "/playlist",
        component: Playlist,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

