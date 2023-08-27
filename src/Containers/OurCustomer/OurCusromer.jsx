import './OurCustomer.css'
import Alie from '../../assets/Alie.png';
import max from '../../assets/max.png';
import matheus from '../../assets/matheus.png';
import star3 from '../../assets/star3.svg';
import star5 from '../../assets/star5.svg';
import Ellipse1 from '../../assets/Ellipse1.svg';
import chevronRight1 from '../../assets/chevronRight1.svg';
import chevronLeft1 from '../../assets/chevronLeft1.svg';


const OurCustomer = () => {

    const ourCustomersArray = [
        { id: 1, foto: Alie, title: 'Alie Grey', content: 'It is the best cleaning. I love it so much.' },
        { id: 2, foto: max, title: 'Max Glo', content: 'Try it and you will like it.' },
        { id: 1, foto: matheus, title: 'Iolana May', content: 'Friendly staff, that know their work.' },
    ]

    return (<div className="our-customer-section">
        <div className="our-customer-container">
            <div className="our-customer-love-us">Our customer love us</div>
            <div className="customers-container">
                {
                    ourCustomersArray.map((item) => {
                        return <div className="custumer-box">
                            <div className={`customer-img ${item.id === 2 ? 'customer-img-special' : ''} `}><img src={item.foto} alt="picture" /> </div>
                            <div className="customer-title">{item.title} </div>
                            <div className="customer-content">{item.content} </div>
                            <div className="customer-stars">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <img key={index} src={star3} alt="star" />
                                ))} <img src={star5} alt="star" />
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="ellipse-2">
                <img id='Ellipse1' src={Ellipse1} alt="Ellipse1" />
                <img id='chevronRight1o' src={chevronRight1} alt="chevronRight1" />
            </div>
            <div className="ellipse-3">
                <img id='Ellipse1' src={Ellipse1} alt="Ellipse1" />
                <img id='chevronRight1o' src={chevronLeft1} alt="chevronLeft1" />
            </div>
        </div>
    </div>);
}

export default OurCustomer;