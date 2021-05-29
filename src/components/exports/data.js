 // Dummy Datas

 import { COLORS, FONTS, SIZES, icons, images, } from '../exports'


 export const Size = [
     {
         id:1,
         size:'S'
     },
     {
        id:2,
        size:'M'
    },
    {
        id:3,
        size:'L'
    }
 ]



// price rating
export const affordable = 1
export const fairPrice = 2
export const expensive = 3

export const coffeeList =  [
    {
        id: 1,
        name: "Cappuccino",
        rating: '4.3',
        categories: [1,3],
        priceRating: affordable,
        photo: images.coffie3,
        amount:"4.20",
        location: "N2, Nirmala building left annexe,  India"
         
    },
    {
        id: 2,
        name: "Cappuccino",
        rating: '4.6',
        categories: [1,2],
        priceRating: expensive,
        photo: images.coffie4,
        amount:"3.10",
        location: "Heber Road, India"
       
        
    },
    {
        id: 3,
        name: "Espresso",
        rating: '4.8',
        categories: [3,2],
        priceRating: expensive,
        photo: images.coffie2,
        amount:"6.20",
        location: "99, Salai Rd, near rukmani theatre,  India"
       
    },
    {
        id: 4,
        name: "Latte ",
        rating: '4.9',
        categories: [6,2],
        priceRating: expensive,
        photo: images.coffie1,
        amount:"5.70",
        location: "51-A/16-A, Hidayath Nagar,  India"
        
    },
    {
        id: 5,
        name: "Flat West",
        rating: '4.1',
        categories: [4, 6],
        priceRating: affordable,
        photo: images.coffie5,
        amount:"7.10",
        location: " 73A, Salai Rd, Thillai Nagar,  India"
        
    },
    {

        id: 6,
        name: "Flat West",
        rating: '4.2',
        categories: [5,4],
        priceRating: affordable,
        photo: images.coffie6,
        amount:"4.20",
        location: "1st Cross Rd, Opposite Arun Hospital,  India"
        

    },
    {

        id: 7,
        name: "Flat West",
        rating: '4.7',
        categories: [7],
        priceRating: affordable,
        photo: images.coffie7,
        amount:"6.80",
        location: "1st Cross Rd, Opposite Arun Hospital,  India"
        

    }


]


export const specialList =  [
    {
        id: 1,
        name: "Cappuccino",
        rating: '4.3',
        categories: [5, 7],
        priceRating: affordable,
        photo: images.coffie3,
        amount:"4.20",
        location: "N2, Nirmala building left annexe,  India"
         
    },
    {
        id: 2,
        name: "Cappuccino",
        rating: '4.6',
        categories: [2, 4, 6],
        priceRating: expensive,
        photo: images.coffie4,
        amount:"3.10",
        location: "Heber Road, India"
       
        
    },
    {
        id: 3,
        name: "Espresso",
        rating: '4.8',
        categories: [3],
        priceRating: expensive,
        photo: images.coffie2,
        amount:"6.20",
        location: "99, Salai Rd, near rukmani theatre,  India"
       
    },

]





const data = {
    coffeeList,
    specialList,
    Size
};

export default data;