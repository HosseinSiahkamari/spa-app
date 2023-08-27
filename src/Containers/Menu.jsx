import './Menu.css';
import nounCleaning from '../assets/nounCleaning.svg';
import calender1 from '../assets/calender1.svg';
import arrowDownCircle1 from '../assets/arrowDownCircle1.svg';

const Menu = () => {

    const menuArray = [
        { id: 2, title: 'Home' },
        { id: 1, title: 'Services' },
        { id: 1, title: 'About us' },
        { id: 1, title: 'Recall' },
    ];
    const rectangle7 = [
        { serviceTitle: 'Service Type', iconTitle: arrowDownCircle1 },
        { serviceTitle: 'Select Date', iconTitle: calender1 }]



    return (<div >
        <div className='menu-container'>
            <div className='cleaning'>
                <div className='svg-icon-cleaning' ><img src={nounCleaning} alt="SVG Image" /></div>
                <span className='cleaning-text'>Cleaning</span>
            </div  >
            <div className='item-menu'>
                {
                    menuArray.map((item) => {
                        return <span className={`menu ${item.id === 2 ? 'menu-special' : ''}`}>{item.title} </span>
                    })
                }
            </div>
            <div className='rectangle5'>
                <div className='contact-container'>Contact us</div>
            </div>

        </div>
        <div className='header-text-container'>
            <div className='text-1'>Purity guaranteed</div>
            <div className='text-2'>Cleaning Service</div>
            <div className='text-3'>
                <p>For more than ten years we have been cleaning homes</p>
                <p>and not only, 97% of our customers are satisfied </p>
            </div>


        </div>
        <div className="polygon">
            <div className="see-details-content-menu">See Details</div>
            <img className='img1' src="/bodyBgImg1.png" alt="My Image" />
            <div class="diagonal-line1">
                <div className="content1"></div>
            </div>
            <div class="diagonal-line2">
                <div className="content2"></div>
            </div>
            <div class="diagonal-line3">
                <div className="content3"></div>
            </div>
            <div class="diagonal-line4">
                <div className="content4"></div>
            </div>
        </div>
        <div className="rectangle7">
            <div className="get-our-service">Get Our Service</div>
            {
                rectangle7.map((item, index) => {
                    const itemId = `item-${index}`
                    return (
                        <div id={itemId}>
                            <div className='service-title'>{item.serviceTitle}</div>
                            <div className='icon-title'><img src={item.iconTitle} alt="picture" />  </div>
                        </div>
                    )
                })
            }
            <div className="rectangle55">see Details</div>
        </div>


    </div>);
}

export default Menu;