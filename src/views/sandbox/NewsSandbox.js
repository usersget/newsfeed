/*
 * @Author: usersget
 * @Date: 2023-07-19 19:10:22
 * @LastEditors: usersget 2720914944@qq.com
 * @LastEditTime: 2023-07-20 12:17:41
 * @FilePath: \newsfeed\src\views\sandbox\NewsSandbox.js
 * @Description: 
 * 
 * Copyright (c) 2023 by usersget 2720914944@qq.com All Rights Reserved.
 */
import React from 'react'
import {Switch} from "react-router-dom"
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min'
import Sidemenu from '../../components/sandbox/Sidemenu'
import TopHeader from '../../components/sandbox/TopHeader'
import Home from './home/Home'
import UserList from './user-manage/UserList'
import RightList from './right-manage/RightList'
import RoleList from './right-manage/RoleList'
import NoPermission from './nopermission/NoPermission'
export default function NewsSandbox() {
  return (
    <div>
        <Sidemenu></Sidemenu>
        <TopHeader></TopHeader>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/user-manage/list" component={UserList} />
          <Route path="/right-manage/role/list" component={RoleList} />
          <Route path="/right-manage/right/list" component={RightList} />
          <Redirect from="/" to="/home" exact/>
          <Route path="*" component={NoPermission} /> 
        </Switch>
    </div>
  )
}
