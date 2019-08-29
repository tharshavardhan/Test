import React from 'react';
import './App.css';
import Header from './Components/header'
import HeadLine from './Components/Headline'

const tempArr=[{
  age:24,
  email:"@gmail.com",
  fname:"harsha",
  lname:"vardhan",
  onlineStatus:true
}] 

class App extends React.Component {
  componentDidMount(){
    console.time("hai")
    console.timeEnd("hai")
  }
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <HeadLine header="Posts" desc="Click the button to render props" tempArr={tempArr}/>
        </section>
      </div>
    );
  }
}
export default App;


