import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React from 'react';
import axios from 'axios';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.post('http://localhost:8808/login', { data: JSON.stringify(values) }).then((res) => {
                   console.log(res)
                    if(res.data==='登陆成功'){
                        window.location.href='http://localhost:3000'
                    }
                })
            }
        });
    }

    render() {
        var loginStyle={
            width:'40%',
            margin:'100px auto'
        }
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" style={loginStyle} >
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <br />
                    <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                    <br />
                    Or <a onClick={() => { this.props.history.push('/register')}}>register now!</a>
                </FormItem>
            </Form>
        );
    }
}

const Login = Form.create()(NormalLoginForm);

export default Login