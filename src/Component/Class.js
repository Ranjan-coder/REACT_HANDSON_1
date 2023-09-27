import React,{Component} from "react";


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
            <button onClick={()=>this.setState({buttonval:!this.state.buttonval})}>To see styling using Class component</button>
            <div id='clsdata'>
            {this.state.buttonval ? <ClassCompo/> : null}
            </div>
            </>
        )
    }
}

export  {DisplayDaPgCls};


class ClassCompo extends Component{
    render(){
        return(
            <div className="parentdiv2">
                <h1>This is created using class component</h1>
                <p className="firstparagraph">This is done using external css</p>
                <p style={{color:"blue"}}>This is done using inline css</p>
            </div>
        )
    }
}

export default ClassCompo