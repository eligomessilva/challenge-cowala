import React, {useState} from 'react';

export default function Fibonnaci(){
    const [numberFibonacci, setNumberFibonacci] = useState([]);
    const fibonacci = () =>{
        const number = document.getElementById('numero').value;
        var val1 = 0, val2 = 1, proxVal;

        const todoList = [];
        for (let i = 1; i <= number; i++) {
            todoList.push( val1 );

            proxVal = val1 + val2;
            val1 = val2;
            val2 = proxVal;
        }
        setNumberFibonacci(todoList);
    }
    

    return(
        <>
            <div className='fibonacci'>
                <h1>Fibonacci.js</h1>
                <label htmlFor="numero">Digite um numero: </label>
                <input type="text" id="numero" name="numero"/>
                <button onClick={()=>{fibonacci()}}>Rodar</button>

                <div style={{display: 'flex'}}>
                    {numberFibonacci.map((n, index) =>{
                        if(index < document.getElementById('numero').value - 1){
                            return <p>{n}-</p>
                        }else if(index === document.getElementById('numero').value - 1){
                            return <p>{n}</p>
                        }else{
                            return null;
                        }
                    })}
                </div>
            </div>
        </>
    )
}