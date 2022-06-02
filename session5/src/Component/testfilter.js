//import JsonData from './db.json'
var data = require('./db.json')
var mydata = JSON.stringify(data)

let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
]
const filterData=()=>{
   
    console.log(data)
    console.log('----------------------------')
    let bigCity = cities.filter(city =>city.name=='New York')
    let abc = data.filter(x =>x.brand == 'Omron')
    console.log(abc)
    console.log(bigCity)
}

filterData()