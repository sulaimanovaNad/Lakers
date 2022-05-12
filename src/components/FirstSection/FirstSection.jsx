import './FirstSection.css'
import { useState } from 'react'

export function FirstSection(props) {
    const {
        bgColor,
        color,
        bottomColor,
        firstDesc,
        firstTitle,
        secondTitle,
        secondDesc,
        secondDescTwo,
        firstWord,
        secondWord,
        firstTitleColor,
        secondTitleColor,
        firstWordColor,
        secondWordColor,
        products,
        view,
        img,
        sectionTwo,
        widthDesc,
        search,
    } = props


    const renderProducts = products && products.filter(product => {
        return (
            product.name.toLowerCase().includes(search.toLowerCase())
        )
    })
    const [activeItem, setActiveItem] = useState(false)
    return (
        <div style={{ background: bgColor }} className='bg'>
            <div style={{ color: color }} className='box'>
                <div style={{ "border-bottom": '2px solid ' + bottomColor }} className='first-desc'>
                    <p>{firstDesc}</p>
                </div>
                <div style={{ "border-bottom": '2px solid ' + bottomColor }} className='first-title'>
                    <p style={{ color: firstTitleColor }}>{firstTitle}</p>
                    {secondTitle && <p style={{ color: secondTitleColor, 'padding-left': '30px' }}>{secondTitle}</p>}
                </div>
                <div style={{ "border-bottom": '2px solid ' + bottomColor }} className='second-title'>
                    <p style={{ color: firstWordColor }}>{firstWord}</p>
                    {secondWord && <p style={{ color: secondWordColor, 'padding-left': '30px' }}>{secondWord}</p>}
                </div>
                <div className='second-desc'>
                    <p style={{ width: widthDesc }}>{secondDesc}</p>
                    {secondDescTwo && <p style={{ width: widthDesc }}>{secondDescTwo}</p>}
                </div>
                <div className='products'>
                    {renderProducts && renderProducts.map((item, i) => {
                        return (
                            <div key={i} className="products-card">
                                <img onClick={() => setActiveItem(item)} src={item.image} alt="" />
                                <div className="products-card__name">{item.name}</div>
                                <div className="products-card__description">{item.smallDesc}</div>
                                <div className="products-card__price">{item.price}</div>
                                <div>
                                </div>
                            </div>
                        )
                    })}

                </div>
                {sectionTwo && <div>{sectionTwo}</div>}
                <div>
                    <div className='view-container'>
                        <div>
                            <p style={{ color: color }} className='view-text'>{view}
                                <svg width="61" height="9" viewBox="0 0 61 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M60.3536 4.85355C60.5488 4.65829 60.5488 4.34171 60.3536 4.14645L57.1716 0.964466C56.9763 0.769204 56.6597 0.769204 56.4645 0.964466C56.2692 1.15973 56.2692 1.47631 56.4645 1.67157L59.2929 4.5L56.4645 7.32843C56.2692 7.52369 56.2692 7.84027 56.4645 8.03553C56.6597 8.2308 56.9763 8.2308 57.1716 8.03553L60.3536 4.85355ZM0 5H60V4H0V5Z" fill="#FB0223" />
                                </svg>
                            </p>
                        </div>
                        <div>
                            {img && <img className='circle-white' src={img} alt="" />}
                        </div>
                    </div>
                </div>
                <div className='modal'>
                    {activeItem && 
                        <div className='popup'>
                            <a href="" className='popup-area'></a>
                            <div className="popup-body">
                                <div className="popup-content">
                                    <a href="" className='popup-close'><svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.00023 5.58599L11.9502 0.635986L13.3642 2.04999L8.41423 6.99999L13.3642 11.95L11.9502 13.364L7.00023 8.41399L2.05023 13.364L0.63623 11.95L5.58623 6.99999L0.63623 2.04999L2.05023 0.635986L7.00023 5.58599Z" fill="white" />
                                    </svg>
                                    </a>
                                    <div className="popup-box">
                                        <div className='popup-img'>
                                            <img src={activeItem.image} alt="" />
                                        </div>
                                        <div className='popup-text'>
                                            <div className='popup-name'>{activeItem.name}</div>
                                            <div className='popup-description'>{activeItem.description}</div>
                                            <div className='popup-price'>{activeItem.price}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}