import React from 'react';
import { Button } from './Button';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';




const stories = storiesOf('Button', module);
const sizeOptions = ['small', 'normal', 'large'];

stories.add('button', () => <Button size={select('Size', sizeOptions, 'normal')}>{text('Text', 'Click Me')}</Button>);