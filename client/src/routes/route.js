import { ADMIN_ROUTE, AUTH_ROUTE, CLAIM_ROUTE, HOME_ROUTE, REG_ROUTE, ZAPROS } from "./consts";

import Home from '../components/home/home'
import Zapros from '../components/home/zapros'
import Auth from "../components/auth";
import Admin from "../components/admin/admin";
import Claims from "../components/home/claims";
import Reg from "../components/reg";


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    },
    {
        path: HOME_ROUTE,
        Component: <Home/>
    },
    {
        path: ZAPROS,
        Component: <Zapros/>
    },
    {
        path: CLAIM_ROUTE + '/:id',
        Component: <Claims/>
    },
]

export const publicRoutes = [

    {
        path: AUTH_ROUTE,
        Component: <Auth/>
    },
    

    {
        path: REG_ROUTE,
        Component: <Reg/>
    },

]