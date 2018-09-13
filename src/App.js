import React, {
  Component
} from 'react';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import Home from './pages/home.js'
import Project from './pages/project.js'
import Journal from './pages/journal.js'
import Blog from './pages/blog.js'
import More from './pages/more.js'
import $ from 'jquery'
import './assets/js/animateCss.js'

class App extends Component {
  componentDidMount() {
    console.log($('.wrapper'))
  }
  render() {
    return (
      <div className="wrapper">
          <div className="container">
              <div className="row">
                <div className="col-md-7 logo"><h1>LOGO</h1></div>
                <div className="col-md-1"><Link to="/">首页</Link></div>
                <div className="col-md-1"><Link to="/project" >项目</Link></div>
                <div className="col-md-1"><Link to="/blog" >博客</Link></div>
                <div className="col-md-1"><Link to="/journal" >日志</Link></div>
                <div className="col-md-1"><Link to="/more" >more</Link></div>
              </div>
          </div>
          <Route path='/' component={Home} />
          <Route path='/project' component={Project} />
          <Route path='/blog' component={Blog} />
          <Route path='/journal' component={Journal} />
          <Route path='/more' component={More} />
      </div>
    );
  }
}

export default App;