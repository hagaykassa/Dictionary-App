import React from 'react';
import './App.css';
import  DictionaryView from "./components/dictionaryComponent";
import Header from "./components/header";
import Footer from "./components/footer"
function App() {
  
  return (
    <div className="App">
      <Header/>
     <DictionaryView/>
     <Footer/>
    </div>
  );
}

export default App;
