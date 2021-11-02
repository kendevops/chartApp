import React, { Component } from 'react'
import './App.css';
import BarChart from "./components/BarChart";
import Form from "./components/Form"
import PieChart from './components/PieChart';



class App extends Component {
  render() {
    return (
      <div>
        <BarChart />
        <PieChart />
        <Form />
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Skills Union Statistics App</p>
//       </header>
//     </div>
//   );
// }

export default App;
