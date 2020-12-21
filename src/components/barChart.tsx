import React from 'react';
import {Bar, defaults} from 'react-chartjs-2'

defaults.global.defaultFontColor = 'black';
defaults.global.defaultFontSize= 14;
export interface BarChartProps{
    dictionaryObj:{
        words:Array<string>;
        containCounter:number;
        startWithCounter:number;
        endWithCounter:number;
        doubleCounter:number;
        letterInDictionaryCounter:number;
    }
    selectedLetter:string;
}

const BarChart =({dictionaryObj, selectedLetter}:BarChartProps)=>{
        let containLabel ="Words that contain : " + selectedLetter;
        let startWithLabel ="Words that start with : " + selectedLetter;
        let endWithLabel ="Words that end with : " + selectedLetter;
        let doubleLabel ="Words that contain : "+selectedLetter+ " - twice consecutively";
        let letterInDictionary= "Times that : "+selectedLetter +" - appered in the dictionary";


        return(
        <div>
            <Bar
                data={{
                    labels:[containLabel,startWithLabel,endWithLabel,doubleLabel,letterInDictionary],
                    datasets:[
                        {
                            label: 'Amount',
                            data: [dictionaryObj.containCounter,dictionaryObj.startWithCounter,
                                dictionaryObj.endWithCounter,dictionaryObj.doubleCounter,
                                dictionaryObj.letterInDictionaryCounter],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                        },

                    ],
                }}
                width={100}
                height={350}
                options={{
                     maintainAspectRatio: false,
                     scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }}
            />
        </div>)
}
export default BarChart;
