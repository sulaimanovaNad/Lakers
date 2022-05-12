import './Main.css'
import circle from '../../image/circle.png'
import pict from '../../image/Pict.png'

export function Main() {
    return (
        <header>
            <div className="title">
                <div>
                    <p> Jersey</p>
                </div>
                <div className='circle'>
                    <img src={circle} alt="" />
                </div>
                <div>
                    <p>Nba</p>
                </div>
            </div>
            <div className='description'>
                <p>
                    whichever <span className="blue">nba</span> <span className="red">team</span> your support,
                    get your jersey here today.
                </p>
            </div>
            <div className='pict'>
                <img src={pict} alt="" />
            </div>
        </header>
    )
}

