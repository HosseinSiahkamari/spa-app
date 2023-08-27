import './OurStaff.css'
import Vector from '../../assets/Vector.svg';
import rose from '../../assets/rose.svg';
import joseph from '../../assets/joseph.png';
import michael from '../../assets/michael.png';

const OurStaff = () => {

    const OurStaffArray = [
        {imgId:rose, name:'kate', icon:Vector, rank:'4.9', qty:'125 cleaning', content:'Specialized in general cleaning and window washing. A professional in his field. Working in this field for 5 years' },
        {imgId:joseph, name:'joseph', icon:Vector, rank:'4.8', qty:'122 cleaning', content:'Specialized in general cleaning and window washing. A professional in his field. Working in this field for 6 years' },
        {imgId:michael, name:'michael', icon:Vector, rank:'4.7', qty:'89 cleaning', content:'Specialized in general cleaning and window washing. A professional in his field. Working in this field for 3 years' },
    ]

    return (
        <div className="ourstaff-section">
            <div className="ourstaff-container">
                <div className="text1-ourstaff">Our staff</div>
                <div className="text2-ourstaff">Each employee is carefully selected, tested, and then trained at different facilities</div>
                <div className="see-all">See all</div>
                <div className="our-staff-avatar-container">
                    {
                        OurStaffArray.map((item)=>{
                            return <div className="item-avatar">
                                <div className="img-avatar"><img src={item.imgId} alt="pic" /> </div>
                                <div className="name-avatar">{item.name}</div>
                                <div className="star-avatar"><img src={item.icon} alt="star" /></div>
                                <div className="rank-avatar">{item.rank}</div>
                                <div className="qty-avatar">{item.qty}</div>
                                <div className="content-avatar">{item.content}</div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>);
}

export default OurStaff;