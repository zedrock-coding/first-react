import useMousePosition from './mouse_logic.jsx';
import React, { useState, useRef, useEffect } from 'react';
import '../App.css'

const useCanvasSize = () => {
    const containerRef = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setSize({ width: rect.width, height: rect.height });
        }
    }, []); 
    
    return { containerRef, size };
}

function DynamicDiv() {
    const { containerRef, size } = useCanvasSize();

    const MouseDown = (e) => {
        let posX = e.clientX;
        let posY = e.clientY;
        console.log("Mouse down at:", posX, posY);
    };

    return (
        <div id='myContainer' ref={containerRef} className='max-w-4xl min-h-128 px-4 py-4 w-full relative'>
            <div id='move_resize_div' className='flex flex-no-wrap align-item-center justify-content-center bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md h-48 w-64 inset-10 absolute' onMouseDown={MouseDown}></div>
        </div>
    );
}

export default DynamicDiv;