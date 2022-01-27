import React from 'react';
import { useState } from 'react';
import './Description.css'
import { colors } from './colors';

const Description = () => {
    var [title, setTitle] = useState("");
    var [colorList, setColorList] = useState(colors)
    function clear() {
        setTitle("THERE IS NO COLOR");
        setColorList([]);
    }

    return <div className='main'>
        <h1>{title}</h1>
        {colorList.map((color) => {
            return (
                <div key={color.id} className="box">
                    <div className="grid1" id={color.idName}></div>
                    <div className="grid2">
                        <h2>{color.cname}</h2>
                        <h5>{color.ccode}</h5>
                    </div>
                </div>
            )
        })}
        <br />
        <button onClick={clear}>Clear ALL</button>
    </div>;
};

export default Description;