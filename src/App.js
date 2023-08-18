
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {clickValue} from './redux/features/apiCall';
import {fetchApi} from './redux/features/apiCall'


function App() {
  const apiAction=useDispatch();
  const value1=useSelector((state)=>state.api.value);
  const value2=useSelector((state)=>state.api.userName);
  return (
    <div className="App">
    <h1>No. of Click Button</h1>
    <h2>{value1}</h2>
    <button onClick={()=>{apiAction(clickValue())}}>Click</button>
    <div>
      {value2.map((a)=>{
        return <h3>{a}</h3>
      })}
    </div>
    <button onClick={()=>{apiAction(fetchApi())}}>fetch</button>
    </div>
  );
}

export default App;
