import "../style/stylefc.css"

function FunCompo(){
    return(
        <div className="parentdiv">
                <h1>This is created using function component</h1>
                <p className="firstparagraph">This is done using external css</p>
                <p style={{color:"blue"}}>This is done using inline css</p>
            </div>
    )
}

export default FunCompo;