# time-slots-generator
### A time slot generator with ability to filter out blocked times.

Written in ES5 for maximum compatibility.

## Usage
```
var ts=require("time-slots-generator");

ts.getTimeSlots(blockTimes,showTimeAsString,timeInterval)
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