import Button from '../components/Button';
import HeaderBarButton from '../components/HeaderBarButton';
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

storiesOf('Button', module)
  .add('with text', () => (
    <Button />
  ))

storiesOf('HeaderBarButton', module)
  .add('header bar button', () => (
     <HeaderBarButton
          buttonType="theme"
          buttonTitle="Theme"
          buttonColor="HeaderBarButton-Red"/>
  ))