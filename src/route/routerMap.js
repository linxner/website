import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Loadable from 'react-loadable';
import MyLoadingComponent from './routerLoad'

/**
 * @name 路由配置 
 */

// home
const AsyncHome = Loadable({
    loader: () => import('../pages/home/home'),
    loading: MyLoadingComponent
});
// project
const AsyncProject= Loadable({
    loader: () => import('../pages/project/project'),
    loading: MyLoadingComponent
});
// blog
const AsyncBlog = Loadable({
    loader: () => import('../pages/blog/blog'),
    loading: MyLoadingComponent
});
// journal
const AsyncJournal = Loadable({
    loader: () => import('../pages/journal/journal'),
    loading: MyLoadingComponent
});
// more
const AsyncMore = Loadable({
    loader: () => import('../pages/more/more'),
    loading: MyLoadingComponent
});
//Utils
const AsyncUtils= Loadable({
    loader: () => import('../pages/utils/utils'),
    loading: MyLoadingComponent
});
//register
const AsyncRegister=Loadable({
    loader:() => import('../pages/register/register'),
    loading:MyLoadingComponent
})
//Login
const AsyncLogin=Loadable({
    loader:()=>import('../pages/login/login'),
    loading:MyLoadingComponent
})
export default ()=>{
    return(
        <Switch>
            <Route exact path='/' component={AsyncHome} />
            <Route path='/project' component={AsyncProject} />
            <Route path='/blog' component={AsyncBlog} />
            <Route path='/journal' component={AsyncJournal} />
            <Route path='/more' component={AsyncMore} />
            <Route path='/utils' component={AsyncUtils} />
            <Route path='/register' component={AsyncRegister}/>
            <Route path='/login' component={AsyncLogin}/> 
            <Redirect to='/'/>
        </Switch>
    )
}

 