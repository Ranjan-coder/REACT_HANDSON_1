import React, { Component, useState } from 'react'
import FunCompo from '../functionComponent/funcCompo';
import ClassCompo from '../classComponent/classComp';
// import "../style/stylefc.css"



function DisplayDaPg(){
    const [count,setCount] = useState(true);
    console.log(count);

    return(
        <>
            <div id='dispg'>
                {/* <h1>{count}</h1> */}
                {/* <div className='buttonp'> */}
                <button onClick={()=>setCount(!count)}>To see styling in Functional Component</button>
                {count ? null : <FunCompo/> }
                {/* </div> */}
            </div>

        </>
    )
}

export default DisplayDaPg


class DisplayDaPgCls extends Component{
    constructor(){
        super();
        this.state = {
            buttonval:false,
        }
        console.log(this.state.buttonval);
    }

    render(){
        return(
            <>
            <div id='clascnt'>
            <button onClick={()=>this.setState({buttonval:!this.state.buttonval})}>To see styling using Class component</button>
            {this.state.buttonval ? <ClassCompo/> : null}
            </div>
            </>
        )
    }
}

export  {DisplayDaPgCls}