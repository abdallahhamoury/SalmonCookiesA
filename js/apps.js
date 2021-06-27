"use strict"

 let hours=["6AM " ,'7AM ','8AM','9AM','10AM','11AM','12PM ','1PM ','2PM ','3PM ','4PM ','5PM ','6PM ','7PM ','8PM'];
//seattle
let seattleBranch = {
    location: 'Seattle',
    min: 23,
    max: 65,
    averageSales: 6.3,
    hourCookies:[],
    dailySales:0,

   randomCust :function () {
        let range=seattleBranch.max-seattleBranch.min;
         let randomCount=Math.random() * range+seattleBranch.min;
         return Math.ceil(randomCount);
      },

    hourlyDailySales :function () {
        for (let i=0;i<hours.length;i++){
            let numOfCookies= Math.ceil(seattleBranch.randomCust() *seattleBranch.averageSales);
            seattleBranch.hourCookies.push(numOfCookies);
            seattleBranch.dailySales += numOfCookies;
        }
        },
       
   render :function(){
       let container=document.getElementById('Branch-Name');
       let h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent='Seattle';
       container.appendChild(h2);
       let listFirst=document.createElement('ul');
       container.appendChild(listFirst);
       for (let i=0;i<hours.length;i++){
        let Itemlist = document.createElement('li');
        Itemlist.textContent  =hours[i]+': '+seattleBranch.hourCookies[i]+'🍪 cookies';
        listFirst.appendChild(Itemlist);
       }
       let Itemlist = document.createElement('li');
        Itemlist.textContent  ='The total sales are listed above for per hour for per hour: '+seattleBranch.dailySales+' 🍪 cookies';
        listFirst.appendChild(Itemlist);

   }
        
}


   seattleBranch.hourlyDailySales();
   seattleBranch.render();

    
    
    




let CookiesT = {
    location: 'Tokyo',
    min: 3,
    max: 24,
    averageSales: 1.2,
    hourCookies:[],
    dailySales:0,

   randomCust :function () {
        let range=CookiesT.max-CookiesT.min;
         let randomCount=Math.random() * range+CookiesT.min;
         return Math.ceil(randomCount);
      },

    hourlyDailySales :function () {
        for (let i=0;i<hours.length;i++){
            let numOfCookies= Math.ceil(CookiesT.randomCust() *CookiesT.averageSales);
            CookiesT.hourCookies.push(numOfCookies);
            CookiesT.dailySales += numOfCookies;
        }
        },
       
   render :function(){
       let container=document.getElementById('Branch-Name');
       let h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent='Tokyo';
       container.appendChild(h2);
       let listFirst=document.createElement('ul');
       container.appendChild(listFirst);
       for (let i=0;i<hours.length;i++){
        let Itemlist = document.createElement('li');
        Itemlist.textContent  =hours[i]+': '+CookiesT.hourCookies[i]+'🍪 cookies';
        listFirst.appendChild(Itemlist);
       }
       let Itemlist = document.createElement('li');
        Itemlist.textContent  ='The total sales are listed above for per hour for per hour for per hour: '+CookiesT.dailySales+'🍪 cookies';
        listFirst.appendChild(Itemlist);


   },
}


CookiesT.hourlyDailySales();
CookiesT.render();
 

// *************************************************************************************************************************************************
   let CookiesDubai = {
    location: 'Dubai',
    min: 11,
    max: 38,
    averageSales: 3.7,
    hourCookies:[],
    dailySales:0,

   randomCust :function () {
        let range=CookiesDubai.max-CookiesDubai.min;
         let randomCount=Math.random() * range+CookiesDubai.min;
         return Math.ceil(randomCount);
      },

    hourlyDailySales :function () {
        for (let i=0;i<hours.length;i++){
            let numOfCookies= Math.ceil(this.randomCust() *this.averageSales);
            CookiesDubai.hourCookies.push(numOfCookies);
            CookiesDubai.dailySales += numOfCookies;
        }
        },
       
   render :function(){
       let container=document.getElementById('Branch-Name');
       let h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent='Dubai';
       container.appendChild(h2);
       let listFirst=document.createElement('ul');
       container.appendChild(listFirst);
       for (let i=0;i<hours.length;i++){
        let Itemlist = document.createElement('li');
        Itemlist.textContent  =hours[i]+': '+CookiesDubai.hourCookies[i]+'🍪 cookies';
        listFirst.appendChild(Itemlist);
       }
       let Itemlist = document.createElement('li');
        Itemlist.textContent  ='The total sales are listed above for per hour for per hour for per hour: '+CookiesDubai.dailySales+'🍪 cookies';
        listFirst.appendChild(Itemlist);


   },
}


CookiesDubai.hourlyDailySales();
CookiesDubai.render();
// *************************************************************************************************************************************************
   let CookiesP = {
    location: 'Paris',
    min: 20,
    max: 38,
    averageSales: 3.7,
    hourCookies:[],
    dailySales:0,

   randomCust :function () {
        let range=CookiesP.max-CookiesP.min;
         let randomCount=Math.random() * range+this.min;
         return Math.ceil(randomCount);
      },

    hourlyDailySales :function () {
        for (let i=0;i<hours.length;i++){
            let numOfCookies= Math.ceil(CookiesP.randomCust() *CookiesP.averageSales);
            CookiesP.hourCookies.push(numOfCookies);
            CookiesP.dailySales += numOfCookies;
        }
        },
       
   render :function(){
       let container=document.getElementById('Branch-Name');
       let h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent='Paris';
       container.appendChild(h2);
       let listFirst=document.createElement('ul');
       container.appendChild(listFirst);
       for (let i=0;i<hours.length;i++){
        let Itemlist = document.createElement('li');
        Itemlist.textContent  =hours[i]+': '+CookiesP.hourCookies[i]+'🍪 cookies';
        listFirst.appendChild(Itemlist);
       }
       let Itemlist = document.createElement('li');
        Itemlist.textContent  ='The total sales are listed above for per hour for per hour: '+CookiesP.dailySales+'🍪 cookies';
        listFirst.appendChild(Itemlist);


   },
}


CookiesP.hourlyDailySales();
CookiesP.render();
// *************************************************************************************************************************************************
   let limaCookies = {
    location: 'Lima',
    min: 2,
    max: 16,
    averageSales: 4.6,
    hourCookies:[],
    dailySales:0,

   randomCust :function () {
        let range=CookiesP.max-this.min;
         let randomCount=Math.random() * range+CookiesP.min;
         return Math.ceil(randomCount);
      },

    hourlyDailySales :function () {
        for (let i=0;i<hours.length;i++){
            let numOfCookies= Math.ceil(CookiesP.randomCust() *CookiesP.averageSales);
            CookiesP.hourCookies.push(numOfCookies);
            CookiesP.dailySales += numOfCookies;
        }
        },
       
   render :function(){
       let container=document.getElementById('Branch-Name');
       let h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent='Lima';
       container.appendChild(h2);
       let listFirst=document.createElement('ul');
       container.appendChild(listFirst);
       for (let i=0;i<hours.length;i++){
        let Itemlist = document.createElement('li');
        Itemlist.textContent  =hours[i]+': '+CookiesP.hourCookies[i]+'🍪 cookies';
        listFirst.appendChild(Itemlist);
       }
       let Itemlist = document.createElement('li');
        Itemlist.textContent  ='The total sales are listed above for per hour for per hour: '+CookiesP.dailySales+' 🍪cookies';
        listFirst.appendChild(Itemlist);


   },
}


CookiesP.hourlyDailySales();
CookiesP.render();