import './Side.css'
import img from '../../image/Rectangle 4.png'

export function Side() {
    return (
        <div className='side'>
            <div className='east'>
                <p>East</p>
                <div className='side-box'>
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                </div>
            </div>
            <div className='west'>
                <p>West</p>
                <div className='side-box'>
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}