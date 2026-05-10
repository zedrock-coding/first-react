import useMousePosition from './mouse_logic.jsx';
import {React, useRef, useEffect} from 'react';
import '../App.css'

function DynamicDiv() {
    return (
        <div id='myContainer' className='max-w-4xl min-h-128 px-4 py-4 w-full relative'>
            <div id='move_resize_div' className='flex flex-no-wrap align-item-center justify-content-center bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md h-48 w-64 inset-10 absolute' onMouseDown={MouseDown}></div>
        </div>
    );
}

const getCanvasSize = () => {
    const container = useRef(null);
    const size = [];

    useEffect(() => {
        if (container.current) {
            const rect = container.getBoundingClientRect();
            let width = rect.width;
            let height = rect.height;
            size[0,1] = [width, height];
        }
    }, []); 
    return size;
}

const MouseDown = (e) => {
    let posX = e.clientX;
    let posY = e.clientY;
    console.log(posX, posY);
};
export default DynamicDiv;