import './Auth.css'
import original from '../../assets/original.png'


const Footer = () => {

    const inputArray = [
        { id: 1, title: 'Name' },
        { id: 2, title: 'E-Mail' },
        { id: 3, title: 'Telephone' },
        { id: 4, title: 'Address' },
    ]

    return (<div className="container">
        <div className="box">
            <div className="feel-free">Feel free to contact with us for any kind of quary</div>
            <div className="original-png"><img src={original} alt="pic" /> </div>
            <div className="make-an-appointment">Make an Appointment</div>
            <div className="auth">
                <div className="input-max">
                    {
                        inputArray.map((item) => {
                            return <div className="input-min">
                                <div className="input-title">{item.title} </div>
                                <div className="input-box"  ></div>

                            </div>
                        })
                    }
                </div>
                <div className="input-comments">
                    <div className="input-comments-title">Comments </div>
                    <div className="input-comments-box"  ></div>

                </div>
                <div className="see-all-3">See all</div>

            </div>
        </div>
    </div>);
}

export default Footer;