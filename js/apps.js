"use strict"

let hours = ["6AM ", '7AM ', '8AM', '9AM', '10AM', '11AM', '12PM ', '1PM ', '2PM ', '3PM ', '4PM ', '5PM ', '6PM ', '7PM '];

let container = document.getElementById('container')
let tableEl = document.createElement('table')
container.appendChild(tableEl);

let shops = [];
function Shop(shopname, min, max, avg) {
    this.shopname = shopname;
    this.minCust = min;
    this.maxCust = max;
    this.avgCookies = avg;
    this.randCusts = [];
    this.avgCookiesPerH = [];
    this.total = 0;
    shops.push(this);
}
Shop.prototype.calcRandcustPerH = function () {
    for (let i = 0; i < hours.length; i++) {
        let min = Math.ceil(this.minCust);
        let max = Math.floor(this.maxCust);
        let randCust = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(randCust)
        this.randCusts.push(randCust);

    }
}

Shop.prototype.calAvgCookiesPerH = function () {
    this.calcRandcustPerH();
    // console.log(this.randCusts)
    for (let i = 0; i < hours.length; i++) {
        this.avgCookiesPerH.push( Math.ceil(this.randCusts[i] * this.avgCookies));
        this.total = this.total + this.avgCookiesPerH[i];
        
    }
    // console.log(this.avgCookiesPerH)
}
    Shop.prototype.render = function () {
        this.calAvgCookiesPerH();
        let trEl = document.createElement('tr');
        let tdEl = document.createElement('td');
        tdEl.textContent = this.shopname;
        trEl.appendChild(tdEl);
        for (let i = 0; i < hours.length; i++) {
            let tdEl = document.createElement('td');
            tdEl.textContent = this.avgCookiesPerH[i];
            trEl.appendChild(tdEl);
        }
        let tdTotalEl = document.createElement('td');
        tdTotalEl.textContent = this.total;
        trEl.appendChild(tdTotalEl);
        tableEl.appendChild(trEl);
    }

    function createTableHeader() {
        let trEl = document.createElement('tr')
        let thshopnameEl = document.createElement('th')
        trEl.appendChild(thshopnameEl);
        thshopnameEl.textContent = 'shop name';
        for (let i = 0; i < hours.length; i++) {
            let thEl = document.createElement('th');
            thEl.textContent = hours[i];
            trEl.appendChild(thEl);
        }
        let thDailytotalEl = document.createElement('th')
        trEl.appendChild(thDailytotalEl);
        thDailytotalEl.textContent = 'Daily Location Total';
        tableEl.appendChild(trEl);
    }

    function createFooter() {
        let tfootEl = document.createElement('tfoot');
        let tdEl = document.createElement('td');
        tdEl.textContent = 'Totals';
        tfootEl.appendChild(tdEl);
        tableEl.appendChild(tfootEl);
        let megaTotal = 0;

        for (let h = 0; h < hours.length; h++) {
            let tdEl = document.createElement('td');
            let sum = 0;


            for (let s = 0; s < shops.length; s++) {
                sum = sum + shops[s].avgCookiesPerH[h];
            }
            megaTotal += sum;
            tdEl.textContent = sum;
            tfootEl.appendChild(tdEl);
        }
        let totalTdEl = document.createElement('td');
        totalTdEl.textContent = megaTotal;
        tfootEl.appendChild(totalTdEl);

    }
    let seattle = new Shop('Seattle', 23, 65, 6.3);
    let tokyo = new Shop('Tokyo', 3, 24, 1.2);
    let dubai = new Shop('Dubai', 11, 38, 3.7);
    let paris = new Shop('Paris', 20, 38, 2.3);
    let lima = new Shop('Lima', 2, 16, 4.6);

    createTableHeader();
    for (let i = 0; i < shops.length; i++) {
        // shops[i].calcRandcustPerH();
        // shops[i].calAvgCookiesPerH();
        shops[i].render();
    }
    createFooter();