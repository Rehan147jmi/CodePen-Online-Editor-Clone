import React from "react";
import Header from "../components/Header";
import DataProvider from '../context/DataProvider';
import CodeArea from "./CodeArea";
import Result from "./Result";

function App() {
  return (
    <DataProvider>    
    <Header/>
    <CodeArea/>
    <Result/>
    </DataProvider>
   
  );
}

export default App;
