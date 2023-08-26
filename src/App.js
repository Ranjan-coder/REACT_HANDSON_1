import './App.css';
import DisplayDaPg, { DisplayDaPgCls } from './displayData/displayPage';
import "./style/stylefc.css"

function App() {
  return (
    <div>
      <h1 id='parentmain'>Styling using Functional and Class Component</h1>
    <div id='maincontaint'>
      <DisplayDaPg/>
      <DisplayDaPgCls/>
    </div>
    </div>
  );
}

export default App;
