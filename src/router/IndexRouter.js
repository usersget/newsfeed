/*
 * @Author: cyt
 * @Date: 2023-07-19 17:08:04
 * @LastEditors: cyt 2720914944@qq.com
 * @LastEditTime: 2023-07-19 20:31:44
 * @FilePath: \newsfeed\src\router\IndexRouter.js
 * @Description: 
 * 
 * Copyright (c) 2023 by cyt 2720914944@qq.com All Rights Reserved.
 */
import React from 'react'
import { 
  HashRouter,
  Route,
  Switch,
  Redirect
 } from 'react-router-dom';
import Login from '../views/login/Login';
import NewsSandbox from '../views/sandbox/NewsSandbox';

export default function IndexRouter() {
  return (
    <HashRouter>
        <Switch>
            <Route path="/login"  component={Login}/>
            <Route path="/" render={()=>
              localStorage.getItem("token")?<NewsSandbox></NewsSandbox>:<Redirect to="/login" />
            } />
        </Switch>
    </HashRouter>
  )
}
