import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import Register from '../../pages/register/register';
import Login from '../../components/login/login';
import './header.less';

const { Header } = Layout;


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nav: [
                { indent: true, text: 'HOME', herf: '/' },
                { indent: false, text: 'PROJECT', herf: '/project' },
                { indent: false, text: 'BLOG', herf: '/blog' },
                { indent: false, text: 'JOURNAL', herf: '/journal' },
                { indent: false, text: 'MORE', herf: '/more' },
                { indent: false, text: 'UTILS', herf: '/utils' },
            ],
            showRegister: false,
            showMask: false,
            showLogin: false
        }
    }
    componentDidMount() {
        
    }
    toLink(n) {
        const index = this.state.nav.indexOf(n)
        this.props.history.push({ pathname: this.state.nav[index].herf, state: { id: 999 } })
    }
    showRegister = (e) => {
        this.setState({
            showRegister: e,
            showLogin:!e
        })
    }
    render() {
        return (
            <div className='header'>
                <Layout>
                    <Header className="header" >
                        <Row type='flex' align='middle' justify="center">
                            <Col span={5} offset={3} className="logo"><h1>LOGO</h1></Col>
                            {this.state.nav.map((nav, i) => (<Col span={2} key={i}><a
                                className={nav.indent ? 'nav-index' : ''}
                                onClick={this.toLink.bind(this, nav)}>
                                {nav.text}</a></Col>))}
                            <Col span={2} offset={1}><Link to='/register'>register</Link><span>/</span><Link to='/login'>login</Link></Col>
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