import React, { Component } from 'react';
import './utils.less';
import { Layout } from 'antd';
import { HoverUnderlineAnimation, DonutSpinner } from './style.json'
const {Sider, Content } = Layout;
class componentName extends Component {

    render() {
        return (
            <Layout>
                <Sider width={200} style={{ backgroundColor: '#fff' }} />
                <Content>
                    <h1>CSS技巧</h1>
                    <div className='items'>
                        <div className='CodeWrapper'>
                            <div className='title'>Hover underline animation</div>
                            <div className='tag htmlTag'>HTML</div>
                            <div className="code codeHtml">
                                {
                                    HoverUnderlineAnimation.htmlCode.map((item) => {
                                        return (
                                            <div className='htmlItem' key={item.tag}>
                                                <span className='htmlTagName'>{'<' + item.tag + ' '}</span>
                                                {item.Attr.map((item) => {
                                                    return (
                                                        <span key={item.AttrName}>
                                                            <span className='AttrName'>{item.AttrName}</span>
                                                            <span className='htmlTagName'>="</span>
                                                            <span className='AttrProp'>{item.AttrProp}</span>
                                                            <span className='htmlTagName'>"</span>
                                                        </span>
                                                    )
                                                })}
                                                <span className='htmlTagName'>></span>
                                                <span className='Content'>{item.content}</span>
                                                <span className='htmlTagName'>{"</" + item.tag + '>'}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='tag cssTag'>CSS</div>
                            <div className='code codeCss'>
                                {
                                    HoverUnderlineAnimation.cssCode.StyleCss.map((item, k) => {
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
                            <div className='example'>
                                <div className='title'>Demo</div>
                                <div className='hover-underline-animation'>
                                    Hover this text to see the effect!</div>
                            </div>
                        </div>
                        <div className='CodeWrapper'>
                            <div className='title'>Donut spinner</div>
                            <div className='tag htmlTag'>HTML</div>
                            <div className="code codeHtml">
                                {
                                    DonutSpinner.htmlCode.map((item) => {
                                        return (
                                            <div className='htmlItem' key={item.tag}>
                                                <span className='htmlTagName'>{'<' + item.tag + ' '}</span>
                                                {item.Attr.map((item) => {
                                                    return (
                                                        <span key={item.AttrName}>
                                                            <span className='AttrName'>{item.AttrName}</span>
                                                            <span className='htmlTagName'>="</span>
                                                            <span className='AttrProp'>{item.AttrProp}</span>
                                                            <span className='htmlTagName'>"</span>
                                                        </span>
                                                    )
                                                })}
                                                <span className='htmlTagName'>></span>
                                                <span className='Content'>{item.content}</span>
                                                <span className='htmlTagName'>{"</" + item.tag + '>'}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='tag cssTag'>CSS</div>
                            <div className='code codeCss'>
                                {DonutSpinner.cssCode.AnimeCss.map((item) => {
                                    return (
                                        <div className='AnimeStyle style' key={item.AnimeName}>
                                            <div className='AnimeName'>
                                                <span>{item.AnimeName}</span>
                                                <span>&#123;</span>
                                            </div>
                                            <div className='AnimeFrom'>
                                                <span>{item.From.percentFrom+' '}</span>
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
                                                <span>{item.To.percentTo+' '}</span>
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
                                })}
                                {
                                    DonutSpinner.cssCode.StyleCss.map((item, k) => {
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
                            <div className='example'>
                                <div className='title'>Demo</div>
                                <div className='donut'></div>
                            </div>
                        </div>
                    </div>
                </Content>
                <Sider width={200} style={{ backgroundColor: '#fff' }} />
            </Layout>

        );
    }
}

export default componentName;