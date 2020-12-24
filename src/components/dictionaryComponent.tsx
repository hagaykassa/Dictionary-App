import React, { useMemo } from 'react';
import DictionaryMgmt from "../Logic/DictionaryMgmt";
import { observer } from "mobx-react-lite";
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
margin:2% 0%;
`

const DictionaryView = observer(() => {

    const dictionaryObj = useMemo(() => new DictionaryMgmt(), [])

    const handleChange = (value: string) => {
        dictionaryObj.updateLetter(value)
    }

    return (
        <div>
            <h1> Dictionary App</h1>
            <SearchDiv>
                <Input onChange={((e) => handleChange(e.currentTarget.value))}
                    placeholder="Enter letter" maxLength={1}/>
            </SearchDiv>
            <ChartDiv>
                {dictionaryObj.selectedLetter && <BarChart getCounters={dictionaryObj.getCounters}
                    selectedLetter={dictionaryObj.selectedLetter} />}
            </ChartDiv>
            {!dictionaryObj.selectedLetter && <InitialView />}

        </div>
    )
});
export default DictionaryView;