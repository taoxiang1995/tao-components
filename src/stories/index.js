import Button from '../components/Button';
import HeaderBarButton from '../components/HeaderBarButton';
import ContentEditable from '../components/ContentEditable';
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import './style.css';

storiesOf('Button', module)
  .add('with text', () => (
    <Button />
  ))

storiesOf('HeaderBarButton', module)
  .add('theme button', () => (
     <HeaderBarButton
          buttonType="theme"
          buttonTitle="Theme"
          buttonColor="HeaderBarButton-Red"/>
  ))
  .add('share button', () => (
     <HeaderBarButton
          buttonType="share"
          buttonTitle="Share"
          buttonColor="HeaderBarButton-Yellow"/>
  ))
  .add('view button', () => (
     <HeaderBarButton
          buttonType="view"
          buttonTitle="View"
          buttonColor="HeaderBarButton-Green"/>
  ))
  .add('save button', () => (
     <HeaderBarButton
          buttonType="save"
          buttonTitle="Save"
          buttonColor="HeaderBarButton-Blue"/>
  ))

  storiesOf('ContentEditable', module)
   .addDecorator((story) => (
    <div style={{width: '100%', height:'100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {story()}
    </div>
  ))
  .add('ContentEditable', () => (
    <ContentEditable
      placeholder="Write your title here..." 
      className="Story-ContentEditable" />
  ))
