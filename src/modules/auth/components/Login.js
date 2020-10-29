import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input, Layout, Row } from 'antd';
import React from 'react';
import authContext from '../../authContext';

const { Content } = Layout;

const Login = () => {
  const { setLoggedUser } = React.useContext(authContext);

  const onFinish = () => {
    // callback
    setLoggedUser({ token: '123', loggedUser: {} });
    localStorage.setItem('auth-token', '123');
  };

  const onFinishFailed = () => {
    // callback
  };

  return (
    <Layout style={{ height: '100%', background: 'grey' }}>
      <Content>
        <Row justify="center" align="middle" style={{ height: '100%' }}>
          <Card style={{ background: 'white' }}>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              style={{ padding: '20px 20px 0px 20px' }}
            >
              <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input size="large" prefix={<UserOutlined />} placeholder="username" />
              </Form.Item>

              <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password
                  size="large"
                  prefix={<LockOutlined />}
                  placeholder="password"
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Form.Item>

              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="#a">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" onClick={() => onFinish()} className="login-form-button">
                  Log in
                </Button>
                Or <a href="">register now!</a>
              </Form.Item>
            </Form>
          </Card>
        </Row>
      </Content>
    </Layout>
  );
};

export default Login;
