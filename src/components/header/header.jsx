import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Layout, Row, Col} from 'antd';
import './header.less';

const {Header} = Layout;


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nav: [
                {indent: false, text: 'HOME', herf: '/'},
                {indent: false, text: 'PROJECT', herf: '/project'},
                {indent: false, text: 'BLOG', herf: '/blog'},
                {indent: false, text: 'JOURNAL', herf: '/journal'},
                {indent: false, text: 'MORE', herf: '/more'},
                {indent: false, text: 'UTILS', herf: '/utils'},
            ],
            islogin: false
        }
    }

    componentDidMount = () => {
        this.userName = this.getCookie('userid') || sessionStorage.getItem('userid')
        console.log(this.getCookie('userid'), sessionStorage.getItem('userid'))
        if (this.userName) {
            this.setState({
                islogin: true
            })
        } else {
            this.setState({
                islogin: false
            })
        }
    }
    getCookie = (name) => {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (document.cookie.match(reg)) {
            arr = document.cookie.match(reg)
            return unescape(arr[2]);
        }
        else {
            return null;
        }
    }
    loginOut = () => {
        console.log('aa');
        this.delCookie('userid');
        sessionStorage.removeItem('userid');
        this.props.history.push('/');
        window.location.reload();
    }

    toLink(n) {
        console.log(this.props.history.location)
        const index = this.state.nav.indexOf(n);
        this.state.nav.forEach((e) => {
            e.indent = false
        })
        this.state.nav[index].indent = true;
        this.props.history.push({pathname: this.state.nav[index].herf, state: {id: 999}});
    }

    setCookie(c_name, c_pwd, exdays) {
        var exdate = new Date(); //获取时间
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
        //字符串拼接cookie
        window.document.cookie = "userName=" + c_name + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie = "userPwd=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    }

    delCookie = (name) => {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }

    render() {
        return (
            <div className='header'>
                <Layout style={{backgroundColor: 'rgba(0,0,0,0)'}}>
                    <Header className="header">
                        <Row type='flex' align='middle' justify="center">
                            <Col span={5} offset={3} className="logo"><span>LOGO</span></Col>
                            {this.state.nav.map((nav, i) => (
                                <Col span={2} key={i}>
                                    <NavLink
                                        exact
                                        to={nav.herf}
                                        activeClassName={'nav-index'}
                                        className={'nav'}
                                    >
                                        {nav.text}
                                    </NavLink>
                                </Col>))
                            }
                            {
                                this.state.islogin ?
                                    <span>欢迎！{this.userName} <span onClick={this.loginOut}>退出</span></span> :
                                    <Col span={2} offset={1}><Link to='/register'>register</Link><span>/</span><Link
                                        to='/login'>login</Link></Col>
                            }
                        </Row>
                    </Header>
                    {/* {
                        this.state.showMask &&
                        <div className='signMask' onClick={this.hideSignMask = () => { this.setState({ showMask: false }) }}>
                            {
                                this.state.showMask && this.state.showRegister &&
                                <Register />
                            }
                            {
                                this.state.showLogin && this.state.showMask &&
                                <div className='login' onClick={(e) => { e.stopPropagation() }}>
                                    <Login showRegister={this.showRegister} />
                                </div>
                            }
                        </div>
                    } */}

                </Layout>
            </div>

        );
    }
}

export default App;