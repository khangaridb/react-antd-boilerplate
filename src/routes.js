import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/style.css';
import Login from './modules/auth/components/Login';
import AuthContext from './modules/authContext';
import Sidenav from './modules/layout/Sidenav';
import UserRoutes from './modules/user/routes';

const { Header, Content } = Layout;

const Routes = () => {
  const [loading, setLoading] = React.useState(true);
  const [loggedUser, setLoggedUser] = React.useState({
    token: undefined,
    user: undefined,
  });

  React.useEffect(() => {
    const refreshToken = async () => {
      const token = localStorage.getItem('auth-token');
      // refresh token here
      if (token) {
        setLoggedUser({ token, user: {} });
      }

      setLoading(false);
    };

    refreshToken();
  }, []);

  const renderRoutes = () => {
    if (!loggedUser.user || !loggedUser.token) {
      return (
        <Router>
          <Login />
        </Router>
      );
    }

    return (
      <Router>
        <Layout style={{ height: '100%' }}>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sidenav />
            <Switch>
              <Route exact path="/">
                <Layout style={{ padding: '0 24px 24px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                  </Breadcrumb>
                  <Content
                    className="site-layout-background"
                    style={{
                      padding: 24,
                      margin: 0,
                      minHeight: 280,
                    }}
                  >
                    Content
                  </Content>
                </Layout>
              </Route>
              <Route path="/user">
                <UserRoutes />
              </Route>
            </Switch>
          </Layout>
        </Layout>
      </Router>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return <AuthContext.Provider value={{ loggedUser, setLoggedUser }}>{renderRoutes()}</AuthContext.Provider>;
};

export default Routes;
