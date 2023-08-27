import './Body2.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import chevronRight1 from '../../assets/chevronRight1.svg'
import Ellipse1 from '../../assets/Ellipse1.svg'

const Body2 = () => {

    const imgArray = [
        { id: 1, title: image1 },
        { id: 2, title: image2 },
    ]

    return (
        <div className="body2-main-container">

            <div className="our-professional-container">
                Our professional equipment help us clean 100% of dirty
            </div>
            <div className="contact-us-box">Contact us</div>

            <div class="diagonal-line5">
                <div className="content5"></div>
            </div>
            <div class="diagonal-line6">
                <div className="content6"></div>
            </div>
            <div className="section1-container">
                <div className="ellipse">
                    <img id='Ellipse1' src={Ellipse1} alt="Ellipse1" />
                    <img id='chevronRight1o' src={chevronRight1} alt="chevronRight1" />
                </div>
                <div className="img-container">

                    {
                        imgArray.map((item) => {
                            return <div className="img" id={item.id} ><img src={item.title} alt="picture" /> </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Body2;