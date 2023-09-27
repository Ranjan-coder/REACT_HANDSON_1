import React, { useState } from 'react'


function DisplayDaPg(){
    const [count,setCount] = useState(true);
    console.log(count);

    return(
        <>
            {/* <div id='dispg'> */}
                <button onClick={()=>setCount(!count)}>To see styling in Functional Component</button>
            {/* </div> */}
            <div id='fncdata'>
                {count ? null : <FunCompo/> }
            </div>

        </>
    )
}

export default DisplayDaPg


function FunCompo(){
    return(
        <div className="parentdiv">
                <h1>This is created using function component</h1>
                <p className="firstparagraph">This is done using external css</p>
                <p style={{color:"blue"}}>This is done using inline css</p>
            </div>
    )
}

export {FunCompo} ;