import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React from 'react';
import axios from 'axios';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values)
            if (!err) {
                axios.post('http://localhost:8808/login', { data: JSON.stringify(values) }).then((res) => {
                    console.log(res)
                    if (res.data === 900) {
                        setTimeout(() => {
                            this.props.history.push('/');
                            window.location.reload()
                        }, 1000);
                        if (values.remember) {
                            this.setCookie(values.userName, values.password, 7);
                        } else {
                            sessionStorage.setItem('userid', values.userName)
                        }
                    }
                    if(res.data === 904){
                        alert('账号或密码错误')
                    }
                })
            }
        });
    }
    setCookie(c_name, c_pwd, exdays) {
        var exdate = new Date(); //获取时间
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
        //字符串拼接cookie
        window.document.cookie = "userid=" + c_name + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie = "userpwd=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    }
    clearCookie = () => {
        this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
    }
    render() {
        var loginStyle = {
            width: '40%',
            margin: '100px auto'
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
                    Or <a onClick={() => { this.props.history.push('/register') }}>register now!</a>
                </FormItem>
            </Form>
        );
    }
}

const Login = Form.create()(NormalLoginForm);

export default Login