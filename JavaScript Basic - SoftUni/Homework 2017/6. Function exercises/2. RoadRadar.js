/*Write a JS function that determines whether a driver is within the speed limit. You will receive his speed and the area where he’s driving.
Each area has a different limit: on the motorway the limit is 130 km/h, on the interstate the limit is 90, inside a city the limit is 50 and 
within a residential area the limit is 20 km/h.
If the driver is within the limits, your function prints nothing. If he’s over the limit however, your function prints the severity of the infraction. 
For speeds up to 20 km/h over the limit, he’s speeding;
for speeds up to 40 over the limit, the infraction is excessive speeding and for anything else, reckless driving.
The input comes as an array of string elements. The first element is the current speed and needs to be parsed as a number, the second element is the area where.
The output should be printed to the console. Note in certain cases there will be no output.
*/
/*
residential - 20
city - 50
interstate - 90
motorway  - 130
up to 20  from normal - speeding
up to 40 from normal - excessive speeding
above 40 - reckless speeding
*/
let myInput = ['171', 'motorway'];

function inSpeedLimit(input) {

    let inputedSpeed = Number(input[0]),
        inputedArea = input[1],
        difference = 0,
        possitiveDifference = 0;

    let speedLimit = {
        'speeding': 20,
        'excessiveSpeeding': 40,
        'recklessSpeeding': 41,
    };
    let keysSpeedLimit = Object.keys(speedLimit);

    let areaAndSpeed = {
        'residential': 20,
        'city': 50,
        'interstate': 90,
        'motorway': 130
    };

    for (let area in areaAndSpeed) {
        if (area == inputedArea) {
            difference = areaAndSpeed[area] - inputedSpeed;
            if (difference >= 0) {
                return console.log('in limit');
            }

            possitiveDifference = difference * -1;

            if (possitiveDifference <= speedLimit.speeding) {
                return console.log('speeding');
            }
            else if (possitiveDifference <= speedLimit.excessiveSpeeding) {
                return console.log('excessive speeding');
            }
            else {
                return console.log('wreckless speed');
            }
        }
    }
}

inSpeedLimit(myInput);


