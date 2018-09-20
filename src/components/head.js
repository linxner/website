import React, {Component} from 'react';
import {Layout, Row, Col} from 'antd'

const { Header, Footer, Sider, Content } = Layout;


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            nav:[
              {indent:true,text:'HOME',herf:'/'},
              {indent:false,text:'PROJECT',herf:'/project'},
              {indent:false,text:'BLOG',herf:'/blog'},
              {indent:false,text:'JOURNAL',herf:'/journal'},
              {indent:false,text:'MORE',herf:'/more'},
            ]
        } 
    }
  componentDidMount() {
  }
  toLink(n){
        const index = this.state.nav.indexOf(n)
        this.props.history.push(this.state.nav[index].herf)
  }
  render() {
    return (
        <div>
            <Layout>
                <Header className="header" >
                    <Row type='flex' align='middle' justify="center">
                        <Col span={9} offset={3} className="logo"><h1>LOGO</h1></Col>
                        {this.state.nav.map((nav,i) => (<Col span={2}  key={i}><a  
                        className={nav.indent? 'nav-index':''}
                        onClick={this.toLink.bind(this,nav)}>
                        {nav.text}</a></Col>))}
                    </Row>
                </Header>
            </Layout>
          </div>
    );
  }
}

export default App;