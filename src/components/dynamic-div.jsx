import useMousePosition from './mouse_logic.jsx';
import React from 'react';
import '../App.css'

const canvas = <canvas className='max-w-4xl min-h-128 px-4 py-8' id='myCanvas'> {DynamicDiv}</canvas>;
function DynamicDiv() {
    const dynamicDiv = <div id='move_resize_div' className = 'flex flex-no-wrap align-item-center justify-content-center bg-gray-200 dark:bg-gray-500 py-6 mt-8 rounded-lg shadow-md h-32 w-32'></div>
    return canvas;
}
function mouseDown(e){
    e.addEventListener('mousedown', (e) =>{
        let posX = updatePostion.x - e.clientX;
    })
}
export default DynamicDiv;