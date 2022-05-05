import './TheNike.css'
import nike from '../../image/thenike.png'

export function TheNike() {
    return (
        <div className='nike'>
            <img src={nike} alt="" />
            <p className='nike-club'>Nike Traning Club</p>
            <p className='nike-home'>Home workouts & fitness plans</p>
        </div>
    )
}