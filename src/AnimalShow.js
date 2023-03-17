import { useState } from 'react';
import bird from './assets/bird.svg';
import cat from './assets/cat.svg';
import cow from './assets/cow.svg';
import dog from './assets/dog.svg';
import gator from './assets/gator.svg';
import heart from './assets/heart.svg';
import horse from './assets/horse.svg';
import './AnimalShow.css';

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}
const AnimalShow = ({ type, image }) => {
    const [clicks, setClicks] = useState(0);
    const [flex,setFlex] = useState(false);
    const handleClick = () => {
        
        if (clicks <=5) {
            setClicks(clicks+1);
        }
        else if (clicks > 5) {
            return setFlex(true);
        }
        console.log(clicks);
    } 
    return (
        <div className='animal-show' onClick={handleClick}>
            <img className='animal' alt="animal" src={svgMap[type]}/>
            <img className='heart' style={{width: 10 + 10 * clicks + "px"}} alt="heart" src={heart}/>
            <div className={flex ? "message1":"message"}>Enough!!</div>
        </div>
    )
}
export default AnimalShow