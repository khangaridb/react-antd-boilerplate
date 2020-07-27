import { ContainerOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const { SubMenu } = Menu;
const { Sider } = Layout;

const menus = [
  {
    icon: <HomeOutlined />,
    title: 'Home',
    link: '/',
    subMenus: [],
  },
  {
    icon: <UserOutlined />,
    title: 'User',
    link: '/user',
    subMenus: [
      {
        link: '/user/list',
        title: 'List',
      },
      {
        link: '/user/activity',
        title: 'Activity',
      },
    ],
  },
  {
    icon: <ContainerOutlined />,
    title: 'Product',
    link: '/product',
    subMenus: [
      {
        link: '/product/list',
        title: 'List',
      },
    ],
  },
];

const Sidenav = () => {
  const currentLocation = useLocation();
  const parentMenuIndex = menus.findIndex((m) => m.subMenus && m.subMenus.length > 0 && currentLocation.pathname.includes(m.link));

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
        defaultSelectedKeys={[currentLocation.pathname]}
        defaultOpenKeys={parentMenuIndex !== -1 && [`${parentMenuIndex}`]}
      >
        {menus.map((menu, index) => {
          if (!menu.subMenus || menu.subMenus.length === 0) {
            return (
              <Menu.Item key={menu.link} icon={menu.icon}>
                <Link to={menu.link}>{menu.title}</Link>
              </Menu.Item>
            );
          }

          return (
            <SubMenu key={index} icon={menu.icon} title={menu.title}>
              {menu.subMenus.map((subMenu) => {
                return (
                  <Menu.Item key={subMenu.link}>
                    <Link to={subMenu.link}>{subMenu.title}</Link>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default Sidenav;
