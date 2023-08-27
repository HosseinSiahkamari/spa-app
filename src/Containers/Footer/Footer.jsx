import './Footer.css'
import Rectangle331 from '../../assets/Rectangle331.png'
import Rectangle332 from '../../assets/Rectangle332.png'
import nounCleaning2 from '../../assets/nounCleaning2.svg'
import FacebookNegative2 from '../../assets/FacebookNegative2.svg'
import DribbbleNegative2 from '../../assets/DribbbleNegative2.svg'
import instagramNegative from '../../assets/instagramNegative.svg'
import VkNegative2 from '../../assets/VkNegative2.svg'




const Footer = () => {

    const socialIconArray = [
        { id: 1, title: FacebookNegative2 },
        { id: 2, title: DribbbleNegative2 },
        { id: 3, title: instagramNegative },
        { id: 4, title: VkNegative2 },
    ]
    const languageTitleArray = [
        { id: 1, title: 'English' },
        { id: 2, title: 'German' },
        { id: 1, title: 'French' },
        { id: 1, title: 'Chines' },
    ]
    const optionsArray = [
        { id: 2, title: 'Home' },
        { id: 1, title: 'Services' },
        { id: 1, title: 'About us' },
        { id: 1, title: 'Recall' },
    ]

    return (<div className='footer-container'>
        <div className="rectangle331"><img src={Rectangle331} alt="png" /></div>
        <div className="rectangle332"><img src={Rectangle332} alt="png" /></div>

        <div className="footer-box">
            <div className="cleaning-icon-footer"><img src={nounCleaning2} alt="svg" /> </div>
            <div className="cleaning-text-footer">Cleaning</div>
            <div className="find-more-information">Find more information about us here</div>
            <div className="social-icon">
                {
                    socialIconArray.map((item) => {
                        return <div className="icon"><img src={item.title} alt="icon" /> </div>
                    })
                }
            </div>
            <div className="language-title">
                {
                    languageTitleArray.map((item) => {
                        return <div className={`language-name ${item.id === 2 ? 'language-name-special' : ''} `} >{item.title} </div>
                    })
                }
            </div>
            <div className="options">
                {
                    optionsArray.map((item) => {
                        return <div className={`option ${item.id === 2 ? 'option-special' : ' '}`} >{item.title} </div>
                    })
                }
            </div>
            <div className="contact-us">Contact us</div>
        </div>
        <div className="back-to-cv">Back to CV</div>
        <div className="back-to-port">Back to Portfolio</div>
    </div>);
}

export default Footer;