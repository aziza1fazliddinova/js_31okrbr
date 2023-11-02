let car = [{
    model: 'cobalt',
    company: 'general motors',
    engine: 1.5,
    color:'black',
    price: 15000,
    beatan: true,
    year: 2022,
    mileage: 13000,

    tech_passport: {
        date: 2022,
        exp_date: 2032,
    }
},
{
    model: "malibu",
    company: "general motors",
    color: "dry asphalt",
    engine: 2.4,
    price: 30000,
    beaten: false,
    year: 2022,
    mileage: 1000,
    tech_passport: {
        date: 2022,
        exp_date: 2032,
    }
},
{
    model: "tracker",
    company: "general motors",
    color: "black",
    engine: "2.2",
    price: "22000",
    beaten: false,
    year: 2021,
    mileage: 2000,
    tech_passport: {
        date: 2021,
        exp_date: 3031
    }
},
{
    model: "gentra",
    company: "general motors",
    color: "black",
    engine: 1.5,
    price: 17000,
    beaten: false,
    year: 2021,
    mileage: 6000,
    tech_passport: {
        date: 2021,
        exp_date: 2031,
    }
},
{
    model: 'Damas',
    company: 'Chevrolet',
    color: 'White',
    engine: 2.4,
    price: 10000,
    beaten: false,
    year: 2023,
    mileage: 100,
    tech_pasport: {
        date: 2023,
        exp_date: 2033
    }
},
{
    model: "Spark",
    company: "general motors",
    color: "dirtygreen",
    engine: 1.250,
    price: 7000,
    beaten: true,
    year: 2008,
    mileage: 328000,
    tech_passport: {
        date: 2008,
        exp_date: 2023,
    }
},
{
    model: "bmw m5",
    engine: "бензиновыми двигателями рабочим объёмом 3453-4999 см3",
    year_of_issue: 1998,
    beaten: false,
    price: 37000,
    color: "black",
    company: "BMW",
    tech_passport: {
        date: 2022,
        exp_date: 2032,
    }

},
{
    model: "Labo",
    company: "GM ",
    color: "white",
    engine: 0.8,
    price: 10000,
    beaten: false,
    year: 2023,
    mileage: 0,
    tech_passport: {
        date: 2023,
        exp_date: 2033,
    }
},
{
    model: "tico",
    company: "daewoo",
    color: "black",
    engine: 1.5,
    price: 10000,
    beaten: true,
    year: 2010,
    mileage: 1000,

    tech_passport: {
        date: 2022,
        exp_date: 2025,
    }
},
{
    model: 'traverse',
    company: 'chevrolet',
    color: 'black',
    engine: 3.6,
    price: 60000,
    beaten: false,
    year: 2023,
    mileage: 500,
    tech_passport: {
        date: 2023,
        exp_date: 2033
    }
},
{
    model: "volga",
    company: "uaz",
    color: "white",
    engine: 0.4,
    price: 700000,
    beaten: true,
    year: 1964,
    mileage: 3000000,
    tech_passport: {
        date: 1964,
        exp_date: 2023,
    }
},
{
    model: "velik",
    company: "Philips",
    color: "red",
    engine: "v12",
    price: "12000$",
    beaten: false,
    year: 2009,
    mileage: 0,
    tech_passport: {
        date: 2022,
        exp_date: 2032,
    }
},
{
    model: "Porter",
    company: "Hyundai",
    color: "black",
    engine: 2.5,
    hp: 145,
    price: 31000,
    beaten: false,
    fuel_comsumption: 10.2,
    year: 2023,
    mileage: 100,
    tech_passport: {
        date: 2023,
        exp_date: 2033,
    }
},
{
    model: 'Tahoe',
    company: 'CHEVROLET',
    color: 'black',
    engine: {
        capacity:'5.3',
        horsePower:'343hp'
    },
    price: 110000,
    beaten: false,
    year: 2022,
    mileage: 0,
    tech_passport: {
        date: 2022,
        expDate:2032
    }
},
{
    model: "Mercedes-Benz CLS",
    company: "Mercedes-Benz", 
    color: "black",
    engine: 3.0,
    price: 110000,
    beaten: false,
    year: 2023,
    mileage: 200,
    tech_passport: {
        date: 2023,
        exp_date: 2033,
    }
},
{
    madel: "malibu",
    company: "Chevrolet",
    color: "sky rim",
    engine: 2.4,
    price: "15000$",
    year: 2022,
    clash: false,
    mileage: 1500,
    tech_passport: {
        date:2022,
        exp_date: 2054
    }
},
{
    model: "matiz",
    company: "general motors", 
    color: "yellow",
    engine: 0.8,
    price: 4000,
    beaten: false,
    year: 2018,
    mileage: 5000,
    tech_passport: {
        date: 2018,
        exp_date: 2028,
    }
},
{
    model: "porter",
    company: "hyundai", 
    color: "black",
    engine: 2.5,
    hp: 145,
    price: 31000,
    beaten: false,
    fuel_comsumption: 10.2,
    year: 2023,
    mileage: 100,
    tech_passport: {
        date: 2023,
        exp_date: 2033,
    }
}
]
let from = prompt('from')
let up = prompt('up')

let result = []

car.forEach(car => {
    if(car.price >= from && car.price <= up) {
        result.push(`model: ${car.model}, price: ${car.price} \n`)
    }
})

let oneOfThem = prompt('По вашей ценовой категории найдено вот эти машины ' + result + " Выберите один из этого списка написав название машины")


let aa 

car.forEach((item) =>{
    if(item.model === oneOfThem){
        aa = item
    }
})

let findedCar = confirm(`
    model: ${aa.model},
    year:${aa.year},
    company:${aa.company},
    color:${aa.color},
    engine:${aa.engine},
    price:${aa.price},
    beaten:${aa.beaten},
    year:${aa.year},
    mileage:${aa.mileage},
    tech_passport:{
        date:${aa.date},
        exp_date:${aa.exp_date},
    }
`)


let bb = prompt('сколько у вас денег?')

if(aa.price===bb){
  alert('поздравляю вас с покупкой!')
}else if (aa.price>bb){
    let ss = aa.price-bb 
    alert(`сдача : ${ss}`)
}if(aa.price<bb){
    let cc = bb-aa.price
    alert(`вам не хватает : ${cc}`)
}
