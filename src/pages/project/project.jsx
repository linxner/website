import React from 'react';
import data from './data'
import './project.less'
import MySwiper from '../../components/swiper/swiper'

export default class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgs: []
        }
        this.detailShow = false
    }

    componentDidMount() {
        console.log(this.props.location.state)
    }

    takeDetail(e) {
        this.setState({
            imgs: data[e].imgs
        })
        this.detailShow=true
    }

    render() {
        return (
            <div className="project">
                <h1>H5</h1>
                <div className="pro-list">
                    {
                        data.map((item, index) => {
                            return (
                                <div className={'list-wrapper'} key={item.name}
                                     onClick={this.takeDetail.bind(this, index)}>
                                    <div className="img-wrapper"></div>
                                    <span className={'list-des'}>{item.name}</span>
                                    <span>腾讯公益获奖项目</span>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    this.detailShow && <div className="details">
                        <MySwiper imgs={this.state.imgs}/>
                    </div>
                }
            </div>

        );
    }
}
