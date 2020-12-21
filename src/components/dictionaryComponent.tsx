import React,{useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import DictionaryMgmt from "../DictionaryMgmt";
import {observer} from "mobx-react-lite";
import BarChart from "./barChart";
import styled from '@emotion/styled'
import InitialView from "../components/initialView"

const SearchDiv = styled.div`
display: inline-flex;
`
const Input = styled.input`
border: 2px solid #555;
&:focus {
    border: 3px solid #555;
  }
`
const ChartDiv = styled.div`
max-width: 90%;
margin:2% 5%;
`
const dictionaryObj = new DictionaryMgmt();

     const DictionaryView= observer(()=>
    {

    const [letter,setLetter]= useState<string | undefined>(undefined);
    const [selectedLetter,setSelectedLetter]= useState<string | undefined>(undefined);
    
    const handleChange = (e: React.FormEvent<HTMLInputElement>)=>{
        setLetter(e.currentTarget.value);
    }

    function onclick(){
     setSelectedLetter(letter);
     dictionaryObj.updateWords(letter);
    } 

    return(
        <div>
            <h1> Dictionary App</h1>
            <SearchDiv>
                <Input onChange= {handleChange} placeholder="Enter letter"/>
                <SearchIcon onClick={onclick}/>
            </SearchDiv>
            <ChartDiv>
                {selectedLetter&&<BarChart dictionaryObj={dictionaryObj}
                    selectedLetter={selectedLetter}/>}
            </ChartDiv>

            {!selectedLetter&&<InitialView/>}
            
        </div>
    )
});
export default DictionaryView;