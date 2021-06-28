"use strict"

let hours = ["6AM ", '7AM ', '8AM', '9AM', '10AM', '11AM', '12PM ', '1PM ', '2PM ', '3PM ', '4PM ', '5PM ', '6PM ', '7PM '];
//function
let branches=[]
function BranchesV(location, minC, maxC,avergeC, total) {
    this.location = location
    this.minC = minC,
        this.maxC = maxC,
        this.avergeC = avergeC,
        this.randC = [],
        this.avergeCp = [],
        this.total = 0,
   branches.push(this);

BranchesV.prototype.calcRandCustPerH = function () {
    for (let i = 0; i < hours.length; i++) {
        let min = Math.ceil(this.minC);
        let max = Math.floor(this.maxC);
        let randC = Math.floor(Math.random() * (max - min + 1) + min);
        this.randC.push(randC);

    }

},

BranchesV.prototype.calAvgCookiesPerH = function(){

    for (let i=0;i < hours.length;i++){
        this.avergeCp[i] =Math.ceil(this.randC[i] *this.avergeC);
        this.total=this.total + this.avergeCp[i];
        

    }

}

}

// BranchesV.prototype.hourlyDailySales = function () {
//     for (let i = 0; i < hours.length; i++) {
//         this.numOfCookies = Math.ceil(this.randomCust() * this.averageSales);
//         this.hourCookies.push(this.numOfCookies);
//         this.total += numOfCookies;

//     }

BranchesV.prototype.render = function () {



}


let seattleBranch = new BranchesV('seattle', 23, 65, 6.3,)
let TokyoBranch = new BranchesV('Tokyo', 3, 24, 1.2,)
let DubaiBranch = new BranchesV('Dubai', 11, 38, 3.7,)
let ParisBranch = new BranchesV('Paris', 20, 38, 3.7,)
let LimaBranch = new BranchesV('Lima', 2, 16, 4.6,)
console.log(branches)
console.log(calcRandCustPerH)
console.log(calAvgCookiesPerH)

