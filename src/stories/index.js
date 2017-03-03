import Button from '../components/Button';
import HeaderBarButton from '../components/HeaderBarButton';
import ContentEditable from '../components/ContentEditable';
import HeaderBar from '../components/FingerFormDashboard/HeaderBar';
import AddFormButton from '../components/FingerFormDashboard/AddFormButton';
import Modal from '../components/Modal';
import React from 'react';
import TestComponent from '../components/TestComponent';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import './style.css';

/*storiesOf('AddFormButton', module)
    .add('with text', () => (
      <div style={{backgroundColor: "#f1f1f1", height: "100vh", width: "100vw"}}>
        <AddFormButton
          className="AddFormButton"
         />
      </div>
    ))*/

storiesOf('HeaderBar', module)
    .add('with text', () => (
      <div style={{backgroundColor: "#f1f1f1", height: "100vh", width: "100vw"}}>
        <HeaderBar
          className="HeaderBar"
         />
      </div>
    ))

// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button />
//   ))

storiesOf('HeaderBarButton', module)
  .add('theme button', () => (
     <HeaderBarButton
          className="HeaderBarButton-Button"
          buttonType="theme"
          buttonTitle="Theme"
          buttonColor="HeaderBarButton-Red"/>
  ))
  .add('share button', () => (
     <HeaderBarButton
          className="HeaderBarButton-Button"
          buttonType="share"
          buttonTitle="Share"
          buttonColor="HeaderBarButton-Yellow"/>
  ))
  .add('view button', () => (
     <HeaderBarButton
          className="HeaderBarButton-Button"
          buttonType="view"
          buttonTitle="View"
          buttonColor="HeaderBarButton-Green"/>
  ))
  .add('save button', () => (
     <HeaderBarButton
          className="HeaderBarButton-Button"
          buttonType="save"
          buttonTitle="Save"
          buttonColor="HeaderBarButton-Blue"/>
  ))

  storiesOf('ContentEditable', module)
   .addDecorator((story) => (
    <div style={{backgroundColor:'#f1f1f1', width: '100%', height:'100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {story()}
    </div>
  ))
  .add('ContentEditable', () => (
    <ContentEditable
      SavedEditorState={{}}
      placeholder="Write your title here..." 
      className="Story-ContentEditable" />
  ))



  storiesOf('Modal', module)
   .addDecorator((story) => (
    <div style={{backgroundColor:'#f1f1f1', width: '100%', height:'100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {story()}
    </div>
  ))
  .add('Modal-Default', () => (
    <Modal
      showModal={true}
      hideModal={()=>alert('hide modal!')}
      ModalName="Form Name"
      action1="CLOSE"
      action2="SUBMIT"
      onAction2Clicked={()=>alert('action2 clicked!')}
      onAction1Clicked={()=>alert('action1 clicked!')}
    >
      <div style={{"textAlign" : "center"}}>
        Please give a name to your form
      </div>
      <div style={{"display": "flex", "justify-content":"center"}}>
        <input style={{'width':'96%', "margin-top":"10px", "height":"30px", "border-radius":"5px", "padding":"0px 0px 0px 5px", "border":"none", "border":"solid 1px #d9d9d9"}} placeholder="name" />
      </div>
    </Modal>
  ))
  .add('Modal-Test', () => (
    <TestComponent/>
  ))
