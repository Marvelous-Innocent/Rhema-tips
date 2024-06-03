import {useState} from 'react';
import './button.css'

const Button = ({text, onClick, color, bgColor, ...others}) => {
    const [hover, setHover] = useState(false)

    const onMouseEnter = (e) => {
        setHover(!hover)
    }
    const onMouseOut = (e) => {
        setHover(!hover)
    }

    return (
        <>
            <button 
            style={{
                color: !hover ? color : bgColor, 
                backgroundColor: !hover ? bgColor : color, 
                borderColor: !hover ? color : bgColor, 
                ...others
            }} 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseOut} 
            onClick={onClick} 
            > {text} </button>
        </> 
    );
}

export default Button;
