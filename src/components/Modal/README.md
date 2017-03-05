# Modal
## **Over View**
This is a Modal component. 



## **Props**
| Name | Type | Default | Description |
| ---    | ---  | ------- | --------- |
|showModal | bool  | false | this props enable the control of Modal. When set to true, modal will popup, when set to false, modal will hide. You should bind the value of showModal to one of the state of the component that uses this modal|
|hideModal|function|null| this function will be called when user clicks anywhere outside the modal. It should be used to set the state associated with showModal to false |
|modalName|string|'Modal Name'|the string passed to this props will show in the header part of modal, which serves as modal's header name|
|action1|string|'YES'|string passed to this props will show as the name of first action button that appears in the bottom right of modal|
|action2|string|'NO'|string passed to this props will show as the name of second action button that appears in the bottom right of modal|
|onAction1Clicked|function|null|this function will be called when the first action button is clicked|
|onAction2Clicked|function|null|this function will be called when the second action button is clicked|
|ClassModalContainer|sring|''|you can add css class styling to modal container here|
|ClassModalContainerHeader|sring|''|you can add css class styling to modal container's header here|
|ClassModalContainerBody|sring|''|you can add css class styling to modal container's Body here|
|ClassModalContainerFooter|sring|''|you can add css class styling to modal container's footer here|
|ClassModalContainerBackground|sring|''|you can add css class styling to modal container's Background here|
|type|string|''|set the color of Modal header. By default, the color is green, if set to 'Warning', the color will be red|

## **Example code**
```javascript
import React, {Component} from 'react';
import Modal from '../Modal';
import {Button} from 'react-bootstrap';
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
                            placeholder="Please input your form name here" />
                    </div>
                </Modal>
                <Button onClick={()=>this.setState({showModal:true})}>Launch Modal</Button>
            </div>
        );
    }
}

export default TestComponent;
```