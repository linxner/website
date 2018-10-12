import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import './header.less'

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
                { indent: false, text: 'REGISTER', herf: '/register' },
                { indent: false, text: 'UTILS', herf: '/utils' },
            ]
        }
    }
    componentDidMount() {
    }
    toLink(n) {
        const index = this.state.nav.indexOf(n)
        this.props.history.push({ pathname: this.state.nav[index].herf, state: { id: 999 } })
    }
    render() {
        return (
            <div className='header'>
                <Layout>
                    <Header className="header" >
                        <Row type='flex' align='middle' justify="center">
                            <Col span={7} offset={3} className="logo"><h1>LOGO</h1></Col>
                            {this.state.nav.map((nav, i) => (<Col span={2} key={i}><a
                                className={nav.indent ? 'nav-index' : ''}
                                onClick={this.toLink.bind(this, nav)}>
                                {nav.text}</a></Col>))}
                        </Row>
                    </Header>
                </Layout>
            </div>

        );
    }
}

export default App;