import React from 'react';
import '../App.css'

const useMousePosition = () => {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    React.useEffect(() => {
        const updatePostion = e => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updatePostion);
        return () => {
            window.removeEventListener('mousemove', updatePostion);
        };
    }, []);
    return position;
}

export default useMousePosition;