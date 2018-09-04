# time-slots-generator
[![NPM version](https://img.shields.io/npm/v/time-slots-generator.svg)](https://www.npmjs.com/package/time-slots-generator)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
### A time slot generator with ability to filter out blocked times.

Written in ES5 for maximum compatibility.

## Install
```
npm install time-slots-generator --save
```
## Usage
```
var ts=require("time-slots-generator");

ts.getTimeSlots(blockTimes, showTimeAsString, timeInterval, includeStartBlockedTime, includeEndBlockedTime)
```
- blockTimes 
    - `Array of start and end times` 
    - ` default: []`
    - Use when you want some times periods to be removed(in cases where an appointment is already booked)

    ```
    // time format
    // 4:30 ==> 4*60+30 = 270
    [
        [270,360], // start and end time
        [70,1200]
    ]    
    ```

- showTimeAsString 
    - `Boolean`
    - ` default: false`
    - returns  the output as a map of time and string 

     `Eg: {270:'4:30'}`

- timeInterval 
    - `string`
    - ` default: hour`
    - splits the time interval based on the string sent, allowed strings are
    
     `["tenth","quarter","half","one","two","three","four"]`

- includeStartBlockedTime 
    - `Boolean`
    - ` default: false`
    - includes the start times from blockedTimes in the generated array.
    
- includeEndBlockedTime 
    - `Boolean`
    - ` default: false`
    - includes the end times from blockedTimes in the generated array.
    

### Full Example
```javascript

const tc = require("time-slots-generator");

console.log("get me all the time slots of the day \n",tc.getTimeSlots([],false));
console.log("get me all the time slots of the day without the given times \n",tc.getTimeSlots([[300,1080]],false));

console.log("get me all the time slots of the day with time \n",tc.getTimeSlots([],true));
console.log("get me all the time slots of the day without the given times with time \n",tc.getTimeSlots([[300,1080]],true));

console.log("get me all the time slots of the day with time in 2hr intervals\n",tc.getTimeSlots([],true,"two"));
console.log("get me all the time slots of the day without the given times with time 15min intervals\n",tc.getTimeSlots([[300,1080]],true,"quarter"));


 $ node index.js
get me all the time slots of the day
 [ 60,
  120,
  180,
  240,
  300,
  360,
  420,
  480,
  540,
  600,
  660,
  720,
  780,
  840,
  900,
  960,
  1020,
  1080,
  1140,
  1200,
  1260,
  1320,
  1380,
  1440 ]

get me all the time slots of the day without the given times
 [ 60, 120, 180, 240, 1140, 1200, 1260, 1320, 1380, 1440 ]

get me all the time slots of the day with time
 { '60': '1:00',
  '120': '2:00',
  '180': '3:00',
  '240': '4:00',
  '300': '5:00',
  '360': '6:00',
  '420': '7:00',
  '480': '8:00',
  '540': '9:00',
  '600': '10:00',
  '660': '11:00',
  '720': '12:00',
  '780': '13:00',
  '840': '14:00',
  '900': '15:00',
  '960': '16:00',
  '1020': '17:00',
  '1080': '18:00',
  '1140': '19:00',
  '1200': '20:00',
  '1260': '21:00',
  '1320': '22:00',
  '1380': '23:00',
  '1440': '24:00' }

get me all the time slots of the day without the given times with time
 { '60': '1:00',
  '120': '2:00',
  '180': '3:00',
  '240': '4:00',
  '1140': '19:00',
  '1200': '20:00',
  '1260': '21:00',
  '1320': '22:00',
  '1380': '23:00',
  '1440': '24:00' }

get me all the time slots of the day with time in 2hr intervals
 { '120': '2:00',
  '240': '4:00',
  '360': '6:00',
  '480': '8:00',
  '600': '10:00',
  '720': '12:00',
  '840': '14:00',
  '960': '16:00',
  '1080': '18:00',
  '1200': '20:00',
  '1320': '22:00',
  '1440': '24:00' }
  
get me all the time slots of the day without the given times with time 15min intervals
 { '15': '0:15',
  '30': '0:30',
  '45': '0:45',
  '60': '1:00',
  '75': '1:15',
  '90': '1:30',
  '105': '1:45',
  '120': '2:00',
  '135': '2:15',
  '150': '2:30',
  '165': '2:45',
  '180': '3:00',
  '195': '3:15',
  '210': '3:30',
  '225': '3:45',
  '240': '4:00',
  '255': '4:15',
  '270': '4:30',
  '285': '4:45',
  '1095': '18:15',
  '1110': '18:30',
  '1125': '18:45',
  '1140': '19:00',
  '1155': '19:15',
  '1170': '19:30',
  '1185': '19:45',
  '1200': '20:00',
  '1215': '20:15',
  '1230': '20:30',
  '1245': '20:45',
  '1260': '21:00',
  '1275': '21:15',
  '1290': '21:30',
  '1305': '21:45',
  '1320': '22:00',
  '1335': '22:15',
  '1350': '22:30',
  '1365': '22:45',
  '1380': '23:00',
  '1395': '23:15',
  '1410': '23:30',
  '1425': '23:45',
  '1440': '24:00' }

```
