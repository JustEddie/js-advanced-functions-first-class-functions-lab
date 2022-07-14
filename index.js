const returnFirstTwoDrivers = (arr) => {
    let newArr = [];
    for (let i=0; i<2; i++){
        newArr.push(arr[i]);
    }
    return newArr;
}

const returnLastTwoDrivers = (arr) => {
    let newArr = [];
    for(let i =arr.length-1; i>arr.length-3; i--) {
        newArr.push(arr[i]);
    }
    return newArr.reverse();
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
   switch(int) {
    case 2:
        return function fareDoubler(fare) {
            return fare*2;
        }
    break;
    case 3:
        return function fareTripler(fare) {
            return fare*3;
        }
    break;
    case 4:
        return function fareQuadrupler(fare){
            return fare*4;
        }
    case 5:
        return function fareQuintupler(fare) {
            return fare*5;
        }
    break;
   }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const fareQuadrupler = createFareMultiplier(4);

function selectDifferentDrivers(arrayOfDrivers, fun) {
    return fun(arrayOfDrivers);
}

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']