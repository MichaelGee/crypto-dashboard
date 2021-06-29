import React from 'react';
import {RightButton} from './RightButton';
import {LeftButton} from './LeftButton';
import { storiesOf } from '@storybook/react';


const stories = storiesOf('RightButton', module);
stories.add('rightButton', ()=> <RightButton/>);
stories.add('leftButton', ()=> <LeftButton/>);