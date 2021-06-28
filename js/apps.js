"use strict"

let hours = ["6AM ", '7AM ', '8AM', '9AM', '10AM', '11AM', '12PM ', '1PM ', '2PM ', '3PM ', '4PM ', '5PM ', '6PM ', '7PM ', '8PM'];
//function
function BranchesV(location, min, max, averageSales, hourCookies, total) {
    this.location = location,
        this.min = min,
        this.max = max,
        this.averageSales = averageSales,
        this.hourCookies = hourCookies,
        this.total = 0
        this.numOfCookies=[]
}       
BranchesV.prototype.randomCust = function () {
    let range = this.max - this.min;
    let randomCount = Math.random() * range + this.min;
    return Math.ceil(randomCount);

}

BranchesV.prototype.hourlyDailySales = function () {
    for (let i = 0; i < hours.length; i++) {
        this.numOfCookies = Math.ceil(this.randomCust() * this.averageSales);
        this.hourCookies.push(this.numOfCookies);
        this.total += numOfCookies;
        
    }
}
BranchesV.prototype.render = function () {
    


}
let seattleBranch = new BranchesV('seattle', 23, 65, 6.3,)
let TokyoBranch = new BranchesV('Tokyo', 3, 24, 1.2,)
let DubaiBranch = new BranchesV('Dubai', 11, 38, 3.7,)
let ParisBranch = new BranchesV('Paris', 20, 38, 3.7,)
let LimaBranch = new BranchesV('Lima', 2, 16, 4.6,)

console.log(seattleBranch.randomCust());
console.log(seattleBranch.hourlyDailySales())


    // let seattleBranch = {
    //     location: 'Seattle ',
    //     min: 23,
    //     max: 65,
    //     averageSales: 6.3,
    //     hourCookies: [],
    //     total: 0,

    // }
    // let container = document.getElementById('Branch-Name');
    // let h2 = document.createElement('h2');
    // container.appendChild(h2);
    // h2.textContent = 'Seattle';
    // container.appendChild(h2);
    // let listFirst = document.createElement('ul');
    // container.appendChild(listFirst);
    // for (let i = 0; i < hours.length; i++) {
    //     let Itemlist = document.createElement('li');
    //     Itemlist.textContent = hours[i] + ': ' + seattleBranch.hourCookies[i] + ' cookies 🍪';
    //     listFirst.appendChild(Itemlist);
    // }
    // let Itemlist = document.createElement('li');
    // Itemlist.textContent = 'The total sales are listed above for per hour for per hour: ' + seattleBranch.total + '  cookies 🍪';
    // listFirst.appendChild(Itemlist);


// *************************************************************************
//    randomCust :function () {
//         let range=seattleBranch.max-seattleBranch.min;
//          let randomCount=Math.random() * range+seattleBranch.min;
//          return Math.ceil(randomCount);
//       },

//     hourlyDailySales :function () {
//         for (let i=0;i<hours.length;i++){
//             let numOfCookies= Math.ceil(seattleBranch.randomCust() *seattleBranch.averageSales);
//             seattleBranch.hourCookies.push(numOfCookies);
//             seattleBranch.total += numOfCookies;
//         }
//         },

//    render :function(){
//        let container=document.getElementById('Branch-Name');
//        let h2 =document.createElement('h2');
//        container.appendChild(h2);
//        h2.textContent='Seattle';
//        container.appendChild(h2);
//        let listFirst=document.createElement('ul');
//        container.appendChild(listFirst);
//        for (let i=0;i<hours.length;i++){
//         let Itemlist = document.createElement('li');
//         Itemlist.textContent  =hours[i]+': '+seattleBranch.hourCookies[i]+' cookies 🍪';
//         listFirst.appendChild(Itemlist);
//        }
//        let Itemlist = document.createElement('li');
//         Itemlist.textContent  ='The total sales are listed above for per hour for per hour: '+seattleBranch.total+'  cookies 🍪';
//         listFirst.appendChild(Itemlist);

//    }

// }


//    seattleBranch.hourlyDailySales();
//    seattleBranch.render();








// let CookiesT = {
//     location: 'Tokyo',
//     min: 3,
//     max: 24,
//     averageSales: 1.2,
//     hourCookies:[],
//     total:0,

//    randomCust :function () {
//         let range=CookiesT.max-CookiesT.min;
//          let randomCount=Math.random() * range+CookiesT.min;
//          return Math.ceil(randomCount);
//       },

//     hourlyDailySales :function () {
//         for (let i=0;i<hours.length;i++){
//             let numOfCookies= Math.ceil(CookiesT.randomCust() *CookiesT.averageSales);
//             CookiesT.hourCookies.push(numOfCookies);
//             CookiesT.total += numOfCookies;
//         }
//         },

//    render :function(){
//        let container=document.getElementById('Branch-Name');
//        let h2 =document.createElement('h2');
//        container.appendChild(h2);
//        h2.textContent='Tokyo';
//        container.appendChild(h2);
//        let listFirst=document.createElement('ul');
//        container.appendChild(listFirst);
//        for (let i=0;i<hours.length;i++){
//         let Itemlist = document.createElement('li');
//         Itemlist.textContent  =hours[i]+': '+CookiesT.hourCookies[i]+' cookies🍪';
//         listFirst.appendChild(Itemlist);
//        }
//        let Itemlist = document.createElement('li');
//         Itemlist.textContent  ='The total sales are listed above for per hour for per hour for per hour: '+CookiesT.total+' cookies 🍪';
//         listFirst.appendChild(Itemlist);


//    },
// }


// CookiesT.hourlyDailySales();
// CookiesT.render();


// // *************************************************************************************************************************************************
//    let CookiesDubai = {
//     location: 'Dubai',
//     min: 11,
//     max: 38,
//     averageSales: 3.7,
//     hourCookies:[],
//     total:0,

//    randomCust :function () {
//         let range=CookiesDubai.max-CookiesDubai.min;
//          let randomCount=Math.random() * range+CookiesDubai.min;
//          return Math.ceil(randomCount);
//       },

//     hourlyDailySales :function () {
//         for (let i=0;i<hours.length;i++){
//             let numOfCookies= Math.ceil(this.randomCust() *this.averageSales);
//             CookiesDubai.hourCookies.push(numOfCookies);
//             CookiesDubai.total += numOfCookies;
//         }
//         },

//    render :function(){
//        let container=document.getElementById('Branch-Name');
//        let h2 =document.createElement('h2');
//        container.appendChild(h2);
//        h2.textContent='Dubai';
//        container.appendChild(h2);
//        let listFirst=document.createElement('ul');
//        container.appendChild(listFirst);
//        for (let i=0;i<hours.length;i++){
//         let Itemlist = document.createElement('li');
//         Itemlist.textContent  =hours[i]+': '+CookiesDubai.hourCookies[i]+' cookies 🍪 ';
//         listFirst.appendChild(Itemlist);
//        }
//        let Itemlist = document.createElement('li');
//         Itemlist.textContent  ='The total sales are listed above for per hour for per hour for per hour: '+CookiesDubai.total+' cookies 🍪';
//         listFirst.appendChild(Itemlist);


//    },
// }


// CookiesDubai.hourlyDailySales();
// CookiesDubai.render();
// // *************************************************************************************************************************************************
//    let CookiesP = {
//     location: 'Paris',
//     min: 20,
//     max: 38,
//     averageSales: 3.7,
//     hourCookies:[],
//     total:0,

//    randomCust :function () {
//         let range=CookiesP.max-CookiesP.min;
//          let randomCount=Math.random() * range+this.min;
//          return Math.ceil(randomCount);
//       },

//     hourlyDailySales :function () {
//         for (let i=0;i<hours.length;i++){
//             let numOfCookies= Math.ceil(CookiesP.randomCust() *CookiesP.averageSales);
//             CookiesP.hourCookies.push(numOfCookies);
//             CookiesP.total += numOfCookies;
//         }
//         },

//    render :function(){
//        let container=document.getElementById('Branch-Name');
//        let h2 =document.createElement('h2');
//        container.appendChild(h2);
//        h2.textContent='Paris';
//        container.appendChild(h2);
//        let listFirst=document.createElement('ul');
//        container.appendChild(listFirst);
//        for (let i=0;i<hours.length;i++){
//         let Itemlist = document.createElement('li');
//         Itemlist.textContent  =hours[i]+': '+CookiesP.hourCookies[i]+' cookies 🍪';
//         listFirst.appendChild(Itemlist);
//        }
//        let Itemlist = document.createElement('li');
//         Itemlist.textContent  ='The total sales are listed above for per hour for per hour: '+CookiesP.total+' cookies 🍪';
//         listFirst.appendChild(Itemlist);


//    },
// }


// CookiesP.hourlyDailySales();
// CookiesP.render();
// // *************************************************************************************************************************************************
//    let limaCookies = {
//     location: 'Lima',
//     min: 2,
//     max: 16,
//     averageSales: 4.6,
//     hourCookies:[],
//     total:0,

//    randomCust :function () {
//         let range=CookiesP.max-this.min;
//          let randomCount=Math.random() * range+CookiesP.min;
//          return Math.ceil(randomCount);
//       },

//     hourlyDailySales :function () {
//         for (let i=0;i<hours.length;i++){
//             let numOfCookies= Math.ceil(CookiesP.randomCust() *CookiesP.averageSales);
//             CookiesP.hourCookies.push(numOfCookies);
//             CookiesP.total += numOfCookies;
//         }
//         },

//    render :function(){
//        let container=document.getElementById('Branch-Name');
//        let h2 =document.createElement('h2');
//        container.appendChild(h2);
//        h2.textContent='Lima';
//        container.appendChild(h2);
//        let listFirst=document.createElement('ul');
//        container.appendChild(listFirst);
//        for (let i=0;i<hours.length;i++){
//         let Itemlist = document.createElement('li');
//         Itemlist.textContent  =hours[i]+': '+CookiesP.hourCookies[i]+' cookies 🍪';
//         listFirst.appendChild(Itemlist);
//        }
//        let Itemlist = document.createElement('li');
//         Itemlist.textContent  ='The total sales are listed above for per hour for per hour: '+CookiesP.total+' cookies 🍪';
//         listFirst.appendChild(Itemlist);


//    },
// }


// CookiesP.hourlyDailySales();
// CookiesP.render();