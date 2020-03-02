import React, { Component } from 'react';
import './code.css';
import {LiveProvider, LiveEditor, LivePreview} from 'react-live'
import axios from 'axios';

var chai = require('chai');




var start = ''
var end = ''
var code = false
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

function parseFunction (str) {
    var fn_body_idx = str.indexOf('{'),
        fn_body = str.substring(fn_body_idx+1, str.lastIndexOf('}')),
        fn_declare = str.substring(0, fn_body_idx),
        fn_params = fn_declare.substring(fn_declare.indexOf('(')+1, fn_declare.lastIndexOf(')')),
        args = fn_params.split(',');
  
    args.push(fn_body);
  
    function Fn () {
      return Function.apply(this, args);
    }
    Fn.prototype = Function.prototype;
      
    return new Fn();
  }

var scriptTemp = ''
function getAnswer(){
    try{
        console.log(scriptTemp)
        var func = parseFunction(scriptTemp)
        var res = func([1,2,3],10)
        console.log(res)
        try{
            chai.expect(res).to.deep.equal([-1,11])
            console.log("correct answer")
        }
        catch{
            console.log("wrong answer")
        }
    }
    catch{
        console.log("error")
    }
}

function updateScript(data){
    scriptTemp = data
}

class practiceCode extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/users',{ crossdomain: true })
          .then(res => res.data)
          .then((data)=>{
            this.setState({data : data})  
          })
      }
    render(){
        if(this.state.data.length===0) return <div>Loading</div>
        else{
            const question = this.state.data[0]['questions']
            const template = this.state.data[0]['template']
            const total ="Total Number Solved: "+ this.state.data[0]['total_tries']
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
                                {question}
                                <label id='testCase'>
                                </label>
                            </label>
                            <LiveProvider code={template} id='codeText' className='codeText'>
                                <LiveEditor onChange={(data)=>updateScript(data)} id='codeEditor'/>
                                <LivePreview />
                            </LiveProvider>
                        </div>
                        <div className='submit' id='submit'>
                            <button onClick={()=>startCoding()} className='submit' id='submit'>Finish</button>
                            <button onClick={()=>getAnswer()} className='submit' id='submit'>Run</button>
                        </div>
                        <label className='totalCount'>{total}</label>
                    </div>
                </div>
                );
            }
        }
    }
export default practiceCode;