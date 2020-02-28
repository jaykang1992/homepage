import React, { Component } from 'react';
import './code.css';
import txt from './code.txt'

function getAnswer(){

}
var start = ''
var end = ''
var code = false
var total = ''
function startCoding(){
    if (!code){
        start = Date.now()
        document.getElementById('wholeContent').style.visibility = 'visible'
        document.getElementById('startButton').style.visibility = 'hidden'
        document.getElementById('startButton').style.display = 'none'
        code = true
    }
    else if (code){
        end = Date.now()
        document.getElementById('wholeContent').style.visibility = 'hidden'
        document.getElementById('startButton').style.visibility = 'visible'
        document.getElementById('startButton').style.display = 'flex'
        var time = end - start
        var result = 'You took ' + parseInt(time/60) +' seconds!'
        document.getElementById('result').textContent = result
        code = false
    }
}

class practiceCode extends Component {
    render(){
        return (
            <div>
                <div id='startButton' className='startButton'>
                    <button onClick={()=>startCoding()} >Start Coding</button><br/><br/>
                    <label id='result'>

                    </label>
                </div>
                <div id='wholeContent' className='wholeContent'>
                    <div className='code' id='code'>
                        <label className='questionText'>
                            Two Number Sum<br/>
                            <br/>
                            Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. <br/>
                            If any two numbers in the input array sum up to the target sum, the function should return them in an array. <br/>
                            If no two numbers sum up to the target sum, the function should return an empty array. <br/>
                            Assume that there will be at most one pair of numbers summing up to the target sum.<br/>
                            <br/>
                            Sample input: [3,5,-4,8,11,1,-1,6],10<br/>
                            Sample output: [-1.11]<br/>
                        </label>
                        <textarea className='codeText'>
                        function twoNumberSum(array, targetSum) {
                        // Write your code here.
                        }
                        </textarea>
                    </div>
                    <div>
                        <button onClick={()=>startCoding()} className='submit' id='submit'>Finish</button>
                        <button className='submit' id='submit'>Submit</button>
                    </div>
                </div>
            </div>
          );
        }
    }
  
export default practiceCode;