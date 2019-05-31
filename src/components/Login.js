import React from 'react';
import 'antd/dist/antd.css';
import cookie from 'react-cookies'
import { Form, Row, Col, Icon, Input, Button, Card } from 'antd';
class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isRequiredName : false,
        isRequiredPassword : false
      }
    }
    componentDidMount() {
        this.props.form.validateFields();
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            const state = this.state;
            if(!values.username) {
              state.isRequiredName = true;
            }
            if(!values.password) {
              state.isRequiredPassword = true;
            }
            this.setState(state);
            cookie.save('user',values.username,{ path: '/' });
            this.props.history.replace('/home/dashboard');
            console.log('Received values of form: ', values);
          }
        });
      };
    
      render() {
        const requiredPassword = this.state.isRequiredPassword;
        const requiredName = this.state.isRequiredName;
        const { getFieldDecorator } = this.props.form;
        return (
          <Row>
            <Col style={{paddingTop: 160}} span={6} offset={9} >
              <Card bordered={false} style={{ width: "100%" }} >
                <Col span={20} offset={2}>
                <br/>
                <Col span={6} offset={9}><img style={{maxWidth:50}} alt="logo" src="./logo.png" /></Col>
                <br/>
                <br/>
                  <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                      {getFieldDecorator('username', {
                        rules: [{ required: requiredName }],
                      })(
                        <Input
                          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="Username"
                        />,
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator('password', {
                        rules: [{ required: requiredPassword }],
                      })(
                        <Input
                          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          type="password"
                          placeholder="Password"
                        />,
                      )}
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit" className="login-form-button">
                        Sign In
                      </Button>
                    </Form.Item>
                  </Form>
                </Col>
              </Card>
            </Col>
          </Row>
        );
      }
 }

 export default Form.create()(Login);
