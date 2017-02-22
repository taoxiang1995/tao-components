import Button from '../components/Button';
import HeaderBarButton from '../components/HeaderBarButton';
import ContentEditable from '../components/ContentEditable';
import HeaderBar from '../components/FingerFormDashboard/HeaderBar';
import AddFormButton from '../components/FingerFormDashboard/AddFormButton';
import React from 'react';
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
