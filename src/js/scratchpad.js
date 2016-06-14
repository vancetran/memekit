console.log('Hello scratchpad');

import _ from 'lodash';
// import { filter } from 'lodash'; // importing just what you need
import people from './data/people';

var femaleCount = _.filter(people, {gender: 'Female'}).length;

console.log(femaleCount + ' females');
