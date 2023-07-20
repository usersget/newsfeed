/*
 * @Author: usersget
 * @Date: 2023-07-20 10:31:59
 * @LastEditors: usersget 2720914944@qq.com
 * @LastEditTime: 2023-07-20 14:19:11
 * @FilePath: \newsfeed\src\components\sandbox\Sidemenu.js
 * @Description: 
 * 
 * Copyright (c) 2023 by usersget 2720914944@qq.com All Rights Reserved.
 */

import React, { useState } from 'react'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu} from 'antd';

const {  Sider } = Layout;
export default function Sidemenu() {
  const [collapsed] = useState(false);
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}> 
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: 'nav 1',
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'nav 2',
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
          },
        ]}
      />
    </Sider>
  )
}
