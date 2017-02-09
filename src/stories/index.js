import Button from '../components/Button';
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

storiesOf('Button', module)
  .add('with text', () => (
    <Button />
  ))
