import './ServicePrice.css'
import Ellipse4 from '../../assets/Ellipse4.svg'
import checkMark from '../../assets/checkMark.svg'
import checkMark1 from '../../assets/checkMark1.svg'
import checkMark2 from '../../assets/checkMark2.svg'
import dollarSign2 from '../../assets/dollarSign2.svg'
import dollarSign3 from '../../assets/dollarSign3.svg'


const ServicePrice = () => {

    const servicePriceCheckMarkArray = [
        { title: 'Fully professional cleaning', icon: checkMark },
        { title: 'Simple cleaning', icon: Ellipse4 },
        { title: 'Office cleaning', icon: checkMark },
        { title: 'Party cleaning', icon: Ellipse4 },
        { title: 'Home cleaning', icon: Ellipse4 },
    ]
    const servicePriceRightBoxArray = [
        { icon: checkMark2, title: 'Basis', price: '60', dollarSymb: dollarSign2, id: 1 },
        { icon: checkMark1, title: 'Popular', price: '120', dollarSymb: dollarSign3, id: 2 },
        { icon: checkMark1, title: 'Premium', price: '220', dollarSymb: dollarSign3, id: 2 },

    ]

    return (
        <div className="service-price-section">
            <div className="service-price-container">
                <div className='service-price-title'>Services and prices</div>
                <div className='service-price-content'>Always clean and always profitable</div>
                <div className='service-price-box-left'>
                    {
                        servicePriceCheckMarkArray.map((item) => {
                            return <div className="item-checkmark">
                                <div className="item-content">{item.title} </div>
                                <div className="check-mark-tick"><img src={item.icon} alt="icon" /> </div>
                            </div>
                        })
                    }
                </div>
                <div className='service-price-box-right'>
                    {
                        servicePriceRightBoxArray.map((item) => {
                            return <div className={`price-container ${item.id === 1 ? 'price-container-special' : ''}`} >
                                <div id='check-mark-right'><img src={item.icon} alt="icon" /> </div>
                                <div className={`title-price-right-box ${item.id === 1 ? 'title-price-right-box-special' : ''}`}>{item.title} </div>
                                <div className="price-all">
                                    <div className="dollar-sybmol"><img src={item.dollarSymb} alt="symbol" /> </div>
                                    <div className={`price-box ${item.id === 1 ? 'price-box-special' : ''}`}>{item.price} </div>
                                    <div className={`m ${item.id === 1 ? 'm-special' : ''}`}>/m</div>
                                    <div className={`square ${item.id === 1 ? 'square-special' : ''}`}>2</div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="see-all-2">See all</div>
            </div>
        </div>
    );
}

export default ServicePrice;