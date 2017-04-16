import React, {Component} from 'react';
import Modal from '../Modal';
import {Button} from 'reactstrap';
import './style.css';

class TestComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            showModal:false,
            userInput:''
        }
    }
    render() {
        return (
            <div>
                <Modal
                    showModal={this.state.showModal}
                    hideModal={()=>this.setState({showModal:false})}
                    ModalName="Form Name"
                    action1="CLOSE"
                    action2="SUBMIT"
                    onAction2Clicked={()=>alert(`user input: ${this.state.userInput}`)}
                    onAction1Clicked={()=>this.setState({showModal:false})}
                    >
                    <div style={{"textAlign" : "center"}}>
                        Please give a name to your form
                    </div>
                    <div style={{"display": "flex", "justify-content":"center"}}>
                        <input 
                            onChange={(e)=>this.setState({userInput:e.target.value})} 
                            value={this.state.userInput} 
                            style={{'width':'96%', "margin-top":"10px", "height":"30px", "border-radius":"5px", "padding":"0px 0px 0px 5px", "border":"none", "border":"solid 1px #d9d9d9"}} 
                            placeholder="Please input your form name" />
                    </div>
                </Modal>
            </div>
        );
    }
}

export default TestComponent;
