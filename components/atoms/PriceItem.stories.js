import React from 'react';
import {PriceItem} from './PriceItem';
import { storiesOf } from '@storybook/react';


const stories = storiesOf('PriceItem', module);
stories.add('priceItem', ()=> <PriceItem/>)