import './About.css'
import historyImg from '../../image/history.jpg'
import historyKobe from '../../image/kobehistory.jpg'


export function About() {
    return (
        <div className="about">
            <img src={historyImg} alt="" />
            <div className='history-box'>
                <div>
                    <h2>Game 4 of 2000</h2>
                    <p>The 2000 NBA Finals was the championship round of the National Basketball Association (NBA)'s 1999–2000 season, and the conclusion of the season's playoffs. The Western Conference champion Los Angeles Lakers defeated the Eastern Conference champion Indiana Pacers 4 games to 2.</p>
                </div>
                <div>
                    <img src={historyKobe} alt="" />
                </div>
            </div>
        </div>
    )
}