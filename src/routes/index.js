import { headeronly } from '~/layout';

import Home from '~/pages/home';
import Following from '~/pages/following';
import Profide from '~/pages/profile';
import Upload from '~/pages/upload';
// Public Routes
const publicRoutes= [ 
    { path: '/', component: Home },
    { path: '/following', component: Following },
    {path: '/profile', component: Profide},
    {path: '/upload', component: Upload, layout:  headeronly}


]


const privateRoutes=[]


export {publicRoutes, privateRoutes}