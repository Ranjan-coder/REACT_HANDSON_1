import {Component} from "react";
// import "../style/stylefc.css"

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