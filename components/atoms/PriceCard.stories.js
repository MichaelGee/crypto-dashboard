import React from 'react';
import {PriceCard} from './PriceCard';
import { storiesOf } from '@storybook/react';


const stories = storiesOf('PriceCard', module);
stories.add('priceCard', ()=> <PriceCard/>)