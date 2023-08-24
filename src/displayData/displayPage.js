import React, { useState } from 'react'
import FunCompo from '../functionComponent/funcCompo';
import ClassCompo from '../classComponent/classComp';



function DisplayDaPg(){
    const [count,setCount] = useState(true);
    const [count1,setCount1] = useState(true);
    console.log(count);

    return(
        <div>
            <div id='dispg'>
                <h1>{count}</h1>
                <h1>{count1}</h1>
                <h1 className='firstline'>Styling using Functional and Class Component</h1>
                <div className='buttonp'>
                <button onClick={()=>setCount(!count)}>To see styling in Functional Component</button>
                <button onClick={()=>setCount1(!count1)}>To see styling in class Component</button>
                </div>
                <div className='buttonp1'>
                {count ? null : <FunCompo/> }
                {count1 ? null : <ClassCompo/> }
                </div>
            </div>

        </div>
    )
}

export default DisplayDaPg