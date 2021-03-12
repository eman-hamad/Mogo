 let workingHours = 8;
export let breakHours = 1;

 function changeWorkingHours(hour) {
    workingHours = hour
}

 function calcSalery() {
    return (workingHours * 22 * 100) - (breakHours*2)
}


export {
    workingHours,
    changeWorkingHours,
    calcSalery
}