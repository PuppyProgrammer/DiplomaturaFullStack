import React from 'react';
import '../../styles/laboratorio.css';

const CriptidoItem = (props) => {
    const { name, imagen, type, state} = props;

    return (
        <div className='criptidos'>
            <div className='criptido'>
            
            <h2 style={{ color: "black" }}>{name}</h2>
            <img src={imagen} />
                    <h3 style={{ color: "black" }}>{type}</h3>
                    <h3 style={{ color: "black" }}>Estado Actual:</h3>
                    <h3 style={{ color: "black" }}>{state}</h3>
                    <hr />
                    </div>
        </div>
    )
}

export default CriptidoItem;