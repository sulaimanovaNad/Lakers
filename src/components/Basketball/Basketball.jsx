import './Basketball.css'
import img from '../../image/Slider.png'

export function Basketball() {
    return (
        <div className='basketball'>
            <div className='dates'>
                <p>2005</p>
                <p>2006</p>
                <p>2007</p>
                <p>2008</p>
                <p className='red'>2009</p>
                <p>2010</p>
                <p>2011</p>
                <p>2012</p>
            </div>
            <div className='basketball-img'>
                <img src={img} alt="" />
            </div>
            <div className='basketball-player'>
                <p><span className='red'>Michael</span> jordan</p>
                <p className='view-text basketball-view'>View <svg width="61" height="9" viewBox="0 0 61 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60.3536 4.85355C60.5488 4.65829 60.5488 4.34171 60.3536 4.14645L57.1716 0.964466C56.9763 0.769204 56.6597 0.769204 56.4645 0.964466C56.2692 1.15973 56.2692 1.47631 56.4645 1.67157L59.2929 4.5L56.4645 7.32843C56.2692 7.52369 56.2692 7.84027 56.4645 8.03553C56.6597 8.2308 56.9763 8.2308 57.1716 8.03553L60.3536 4.85355ZM0 5H60V4H0V5Z" fill="#FB0223" />
                </svg>
                </p>
            </div>
            <div className='basketball-player'>
                <p><span className='gray'>David</span> robinson</p>
                <p className='view-text basketball-view'>View <svg width="61" height="9" viewBox="0 0 61 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60.3536 4.85355C60.5488 4.65829 60.5488 4.34171 60.3536 4.14645L57.1716 0.964466C56.9763 0.769204 56.6597 0.769204 56.4645 0.964466C56.2692 1.15973 56.2692 1.47631 56.4645 1.67157L59.2929 4.5L56.4645 7.32843C56.2692 7.52369 56.2692 7.84027 56.4645 8.03553C56.6597 8.2308 56.9763 8.2308 57.1716 8.03553L60.3536 4.85355ZM0 5H60V4H0V5Z" fill="#FB0223" />
                </svg>
                </p>
            </div>
            <div className='basketball-player'>
                <p><span className='green'>John</span> stockton</p>
                <p className='view-text basketball-view'>View <svg width="61" height="9" viewBox="0 0 61 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60.3536 4.85355C60.5488 4.65829 60.5488 4.34171 60.3536 4.14645L57.1716 0.964466C56.9763 0.769204 56.6597 0.769204 56.4645 0.964466C56.2692 1.15973 56.2692 1.47631 56.4645 1.67157L59.2929 4.5L56.4645 7.32843C56.2692 7.52369 56.2692 7.84027 56.4645 8.03553C56.6597 8.2308 56.9763 8.2308 57.1716 8.03553L60.3536 4.85355ZM0 5H60V4H0V5Z" fill="#FB0223" />
                </svg>
                </p>
            </div>
        </div>
    )
}