import React, {Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Loadable from 'react-loadable';
import MyLoadingComponent from './routerLoad'

/**
 * @name 路由配置 
 */

// home
const AsyncHome = Loadable({
    loader: () => import('../pages/home'),
    loading: MyLoadingComponent
});
// project
const AsyncProject= Loadable({
    loader: () => import('../pages/project'),
    loading: MyLoadingComponent
});
// blog
const AsyncBlog = Loadable({
    loader: () => import('../pages/blog'),
    loading: MyLoadingComponent
});
// journal
const AsyncJournal = Loadable({
    loader: () => import('../pages/journal'),
    loading: MyLoadingComponent
});
// more
const AsyncMore = Loadable({
    loader: () => import('../pages/more'),
    loading: MyLoadingComponent
});

export default ()=>{
    return(
        <Switch>
            <Route exact path='/' component={AsyncHome} />
            <Route path='/project' component={AsyncProject} />
            <Route path='/blog' component={AsyncBlog} />
            <Route path='/journal' component={AsyncJournal} />
            <Route path='/more' component={AsyncMore} />
            <Redirect to='/'/>
        </Switch>
    )
}

 