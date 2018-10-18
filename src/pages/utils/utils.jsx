import React, { Component } from 'react';
import './utils.less';
import { Layout } from 'antd';
import { code } from './style.json';
import Example from './demo'
const { Sider, Content } = Layout;

class componentName extends Component {

    componentDidMount = () => {
        
    }
    render() {
        return (
            <div className="utils">
                <Layout>
                    <Content>
                        <h1>CSS技巧</h1>
                        <div className='items'>
                            {
                                code.map((item, index) => {
                                    return (
                                        <div className='CodeWrapper' key={item.title}>
                                            <div className='title'>{item.title}</div>
                                            <div className='sectionHtml'>
                                                <div className='tag htmlTag'>HTML</div>
                                                <div className="code codeHtml">
                                                    {
                                                        item.htmlCode &&
                                                        item.htmlCode.map((item) => {
                                                            return (
                                                                <div className='htmlItem' key={item.tag}>
                                                                    <span className='htmlTagName'>{'<' + item.tag}</span>
                                                                    {item.Attr &&
                                                                        item.Attr.map((item) => {
                                                                            return (
                                                                                <span key={item.AttrName}>
                                                                                    <span className='AttrName'>{' ' + item.AttrName}</span>
                                                                                    <span className='htmlTagName'>="</span>
                                                                                    <span className='AttrProp'>{item.AttrProp}</span>
                                                                                    <span className='htmlTagName'>"</span>
                                                                                </span>
                                                                            )
                                                                        })}
                                                                    <span className='htmlTagName'>></span>
                                                                    {
                                                                        item.children &&
                                                                        item.children.map((item) => {
                                                                            return (
                                                                                <div className='children' key={item.content}>
                                                                                    <div className='htmlItem' key={item.tag}>
                                                                                        <span className='htmlTagName'>{'<' + item.tag}</span>
                                                                                        {
                                                                                            item.Attr &&
                                                                                            item.Attr.map((item) => {
                                                                                                return (
                                                                                                    <span key={item.AttrName}>
                                                                                                        <span className='AttrName'>{' ' + item.AttrName}</span>
                                                                                                        <span className='htmlTagName'>="</span>
                                                                                                        <span className='AttrProp'>{item.AttrProp}</span>
                                                                                                        <span className='htmlTagName'>"</span>
                                                                                                    </span>
                                                                                                )
                                                                                            })

                                                                                        }
                                                                                        <span className='htmlTagName'>></span>
                                                                                        <span className='Content'>{item.content}</span>
                                                                                        <span className='htmlTagName'>{"</" + item.tag + '>'}</span>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        })

                                                                    }
                                                                    <span className='Content'>{item.content}</span>
                                                                    <span className='htmlTagName'>{"</" + item.tag + '>'}</span>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className='sectionCss'>
                                                <div className='tag cssTag'>CSS</div>
                                                <div className='code codeCss'>
                                                    {
                                                        item.cssCode.AnimeCss &&
                                                        item.cssCode.AnimeCss.map((item) => {
                                                            return (
                                                                <div className='AnimeStyle style' key={item.AnimeName}>
                                                                    <div className='AnimeName'>
                                                                        <span>{item.AnimeName}</span>
                                                                        <span>&#123;</span>
                                                                    </div>
                                                                    <div className='AnimeFrom'>
                                                                        <span>{item.From.percentFrom + ' '}</span>
                                                                        <span>&#123;</span>
                                                                        {
                                                                            item.From.style.map((item) => {
                                                                                return (
                                                                                    <div className='styleItem' key={item.styleAttr}>
                                                                                        <span className='styleName'>{item.styleName + ': '}</span>
                                                                                        <span>{' ' + item.styleAttr}</span>
                                                                                        <span className='douhao'>;</span>
                                                                                    </div>
                                                                                )
                                                                            })
                                                                        }
                                                                        <div>&#125;</div>
                                                                    </div>
                                                                    <div className='AnimeTo style'>
                                                                        <span>{item.To.percentTo + ' '}</span>
                                                                        <span>&#123;</span>
                                                                        {
                                                                            item.To.style.map((item) => {
                                                                                return (
                                                                                    <div className='styleItem' key={item.styleAttr}>
                                                                                        <span className='styleName'>{item.styleName + ': '}</span>
                                                                                        <span>{' ' + item.styleAttr}</span>
                                                                                        <span className='douhao'>;</span>
                                                                                    </div>
                                                                                )
                                                                            })
                                                                        }
                                                                        <div>&#125;</div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })

                                                    }
                                                    {
                                                        item.cssCode.StyleCss &&
                                                        item.cssCode.StyleCss.map((item, k) => {
                                                            return (
                                                                <div className='cssItem' key={item.className}>
                                                                    <div className='className'><span>{item.className + ' '}</span><span>&#123;</span></div>
                                                                    {item.style.map((styleItem) => {
                                                                        return (
                                                                            <div className='style' key={styleItem.styleName}>
                                                                                <div className='styleItem'>
                                                                                    <span className='styleName'>{styleItem.styleName + ': '}</span>
                                                                                    <span>{' ' + styleItem.styleAttr}</span>
                                                                                    <span className='douhao'>;</span>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                    <div className='rightQuote'>&#125;</div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className='example' ref='demo'>
                                                <div className='title'>Demo</div>
                                                {Example[index]}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default componentName;