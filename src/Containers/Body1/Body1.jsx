import './Body1.css'
import schit from '../../assets/schit.svg'
import znachok from '../../assets/znachok.svg'
import sparkles from '../../assets/sparkles.svg'
import certificate from '../../assets/certificate.svg'
import FacebookNegative from '../../assets/FacebookNegative.svg'
import DribbbleNegative from '../../assets/DribbbleNegative.svg'
import Group from '../../assets/Group.svg'
import VkNegative from '../../assets/VkNegative.svg'
import home from '../../assets/home.svg'
import office from '../../assets/office.svg'
import party from '../../assets/party.svg'




const Body1 = () => {

    const arrayItem = [
        { icon: znachok, title: 'Quality', content: 'Work on hypoallergenic compositions' },
        { icon: certificate, title: 'High skills', content: 'Cleaners are highly organized team, friendly and master sof their craft' },
        { icon: schit, title: 'Safety', content: 'You can always rely on us' },
        { icon: sparkles, title: 'Clarity', content: 'Payment only after cleaning' },
    ]

    const findUsArray = [FacebookNegative, DribbbleNegative, Group, VkNegative];
    const wwdSectionRight = [
        { icon: home, title: 'Home cleaning', content: 'Deep cleaning, dust removal, vacuuming and disinfection' },
        { icon: office, title: 'Office cleaning', content: 'Our office cleaning service create a professional and welcoming environment' },
        { icon: party, title: 'Cleaning after party', content: 'Our party cleaning service take care of the mess and your happy mood' },
    ]

    return (<div>
        <div className="body-container">
            <div className="text1">Why people choose us ?</div>
            <div className="text2">We are the ones, to whom you want to return.</div>
            <div className="item-container">
                {arrayItem.map((item, index) => {
                    return <div className='items'>
                        <div><img src={item.icon} alt="svg icon" /> </div>
                        <div className='item-title'>{item.title} </div>
                        <div className='item-content'>{item.content} </div>
                    </div>
                })}
            </div>
            <div className="whatWeDoMenu-container">
                <div className="wwd">
                    <div className="wwd-title">What we do ?</div>
                    <div className="wwd-content">More than 10 years of providing service of house cleaning, we have several options that you can choose from</div>
                    <div className="wwd-btn">See Details</div>
                </div>
                <div className="find-us-here-container">
                    <div className="find-us-text">Find us here</div>
                    <div className="find-us-items">
                        {findUsArray.map((item) => {
                            return <div className='findUs-item'> <img src={item} alt="item svg" /></div>
                        })}
                    </div>
                </div>
                <div className="wwd-section-right">
                    {
                        wwdSectionRight.map((item) => {
                            return <div className="section-container">
                                <div className="left-section"> <img src={item.icon} alt="svg" /></div>
                                <div className="right-column">
                                    <div className="top-title">{item.title} </div>
                                    <div className="bottom-content">{item.content} </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>

    </div>);
}

export default Body1;