import React, {Component} from 'react';
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

class MySwiper extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.mySwipe = new Swiper('.swiper-container', {
            loop: true,
            autoplay:true,
            autoHeight:true
        })
    }

    render() {
        return (
            <div className={'swiper-container'}>
                <div className="swiper-wrapper">
                    {
                        this.props.imgs.map((item, index) => {
                            return (
                                <div className="swiper-slide" key={index}>
                                    <div className={'imgs'}>
                                        <img src={item} alt=""/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default MySwiper;