import { Button, Checkbox, Col, Form, Input, Layout, Row } from 'antd';
import React from 'react';
import authContext from '../../authContext';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

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
    <Layout style={{ height: '100%' }}>
      <Content style={{ backgroundColor: 'white' }}>
        <Row justify="center" align="middle" style={{ height: '100%' }}>
          <Col span={4}>
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              style={{ border: 1, borderColor: 'black' }}
            >
              <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input />
              </Form.Item>

              <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Login;
