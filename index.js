// Code your solution in this file!

function distanceFromHqInBlocks(distance){
    let d 
    if (distance > 42){
        d = distance - 42
    }
    else if (distance < 42){
        d = 42 - distance
    }
    return d
}

function distanceFromHqInFeet(d){
    return distanceFromHqInBlocks(d) * 264
}

function distanceTravelledInFeet(start, end){
    return Math.abs(end - start) * 264
}

function calculatesFarePrice(start, destination){
    const length = distanceTravelledInFeet(start, destination);
    const dist = length - 400;
    if (length < 400){
        return 0;
    }
    else if (length > 400 && length < 2000){
        return dist * 0.02;
    }
    else if (length > 2000 && length < 2500){
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}