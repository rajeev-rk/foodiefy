import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [

        {
          "id": 1,
          "name": "Onion pizza",
          "price": {
            "Small": 70,
            "Regular": 130
          },
          "mrp": 100,
          "image": "/images/onion.jpg",
          "category": "Pizza",
          "description": "Delicious pizza topped with onions.",
          "rating": 4.2,
          "availability": true,
          "isTrending" : true
        },
        {
          "id": 2,
          "name": "Capsicum Pizza",
          "price": {
            "Small": 70,
            "Regular": 130
          },
          "mrp": 100,
          "image": "/images/onion.jpg",
          "category": "Pizza",
          "description": "Savoury pizza with capsicum toppings.",
          "rating": 4.0,
          "availability": true
        },
        {
          "id": 3,
          "name": "Tomato Pizza",
          "price": {
            "Small": 70,
            "Regular": 130
          },
          "mrp": 100,
          "image": "/images/onion.jpg",
          "category": "Pizza",
          "description": "Pizza with fresh tomato slices.",
          "rating": 4.1,
          "availability": true
        },
        {
          "id": 4,
          "name": "Sweetcorn Pizza",
          "price": {
            "Small": 80,
            "Regular": 130
          },
          "mrp": 100,
          "image": "/images/onion.jpg",
          "category": "Pizza",
          "description": "Pizza topped with sweetcorn kernels.",
          "rating": 4.3,
          "availability": true
        },
        {
          "id": 5,
          "name": "Mushroom Pizza",
          "price": {
            "Small": 80,
            "Regular": 130
          },
          "mrp": 100,
          "image": "/images/onion.jpg",
          "category": "Pizza",
          "description": "Pizza loaded with fresh mushrooms.",
          "rating": 4.4,
          "availability": true
        },
        {
          "id": 6,
          "name": "Margharita Pizza",
          "price": {
            "Small": 80,
            "Regular": 130
          },
          "mrp": 100,
          "image": "/images/onion.jpg",
          "category": "Pizza",
          "description": "Classic Margharita pizza with tomato and cheese.",
          "rating": 4.5,
          "availability": true
        },
        {
          "id": 7,
          "name": "Onion Capsicum Pizza",
          "price": {
            "Small": 90,
            "Regular": 130,
            "Medium": 210
          },
          "mrp": 130,
          "image": "/images/onioncapsicum.jpg",
          "category": "Pizza",
          "description": "Pizza loaded with onions and capsicum.",
          "rating": 4.2,
          "availability": true
        },
        {
          "id": 8,
          "name": "Onion Tomato Pizza",
          "price": {
            "Small": 90,
            "Regular": 130,
            "Medium": 210
          },
          "mrp": 130,
          "image": "/images/onioncapsicum.jpg",
          "category": "Pizza",
          "description": "Pizza with a delicious onion and tomato combination.",
          "rating": 4.3,
          "availability": true
        },
        {
          "id": 9,
          "name": "Capsicum Tomato Pizza",
          "price": {
            "Small": 90,
            "Regular": 130,
            "Medium": 210
          },
          "mrp": 130,
          "image": "/images/onioncapsicum.jpg",
          "category": "Pizza",
          "description": "Pizza with a blend of capsicum and tomato flavors.",
          "rating": 4.1,
          "availability": true
        },
        {
          "id": 10,
          "name": "Paneer Onion Pizza",
          "price": {
            "Small": 100,
            "Regular": 130,
            "Medium": 210
          },
          "mrp": 130,
          "image": "/images/onioncapsicum.jpg",
          "category": "Pizza",
          "description": "Pizza topped with paneer and onions.",
          "rating": 4.4,
          "availability": true,
          "isTrending" : true
          
        },
        {
          "id": 11,
          "name": "Sweetcorn Tomato Pizza",
          "price": {
            "Small": 100,
            "Regular": 130,
            "Medium": 210
          },
          "mrp": 130,
          "image": "/images/onioncapsicum.jpg",
          "category": "Pizza",
          "description": "Pizza with a delightful sweetcorn and tomato mix.",
          "rating": 4.3,
          "availability": true
        },
        {
          "id": 12,
          "name": "Onion Sweetcorn Pizza",
          "price": {
            "Small": 100,
            "Regular": 130,
            "Medium": 210
          },
          "mrp": 130,
          "image": "/images/onioncapsicum.jpg",
          "category": "Pizza",
          "description": "Pizza with a combination of onions and sweetcorn.",
          "rating": 4.2,
          "availability": true
        },
        {
          "id": 13,
          "name": "Farm fresh Pizza",
          "p": "Topping:- Mushroom + Capsicum + Tomato + Onion",
          "price": {
            "Regular": 160,
            "Medium": 310,
            "Large": 420
          },
          "mrp": 200,
          "image": "/images/s-img-2.jpg",
          "category": "Pizza",
          "description": "Pizza with fresh farm toppings.",
          "rating": 4.5,
          "availability": true
        },
        {
          "id": 14,
          "name": "Country Special Pizza",
          "p": "Topping:- Onion + capsicum + Tomato + black olives",
          "price": {
            "Regular": 160,
            "Medium": 310,
            "Large": 420
          },
          "mrp": 200,
          "image": "/images/s-img-2.jpg",
          "category": "Pizza",
          "description": "Special pizza with country-style toppings.",
          "rating": 4.6,
          "availability": true
        },
        {
          "id": 15,
          "name": "Veggie spl. pizza",
          "p": "Topping:- Capsicum + onion + tomato + corn",
          "price": {
            "Regular": 160,
            "Medium": 310,
            "Large": 420
          },
          "mrp": 200,
          "image": "/images/s-img-2.jpg",
          "category": "Pizza",
          "description": "Vegetarian specialty pizza with assorted veggies.",
          "rating": 4.4,
          "availability": true
        },
        {
          "id": 16,
          "name": "Mix veg. pizza",
          "p": "Topping:- Tomato + Capsicum + mushroom + jalapenos",
          "price": {
            "Regular": 160,
            "Medium": 310,
            "Large": 420
          },
          "mrp": 200,
          "image": "/images/s-img-2.jpg",
          "category": "Pizza",
          "description": "Pizza with a mix of assorted vegetables.",
          "rating": 4.3,
          "availability": true
        },
        {
          "id": 17,
          "name": "MAKHNI PIZZA",
          "p": "Topping:- Makhni Sauce + Capsicum + paneer+ onion",
          "price": {
            "Regular": 180,
            "Medium": 370,
            "Large": 500
          },
          "mrp": 250,
          "image": "/images/s-img-2.jpg",
          "category": "Pizza",
          "description": "Pizza with creamy Makhni sauce.",
          "rating": 4.7,
          "availability": true
        },
        {
          "id": 18,
          "name": "TANDOORI PIZZA",
          "p": "Topping:- Tandoori Sauce + red paprika +  paneer + onion",
          "price": {
            "Regular": 180,
            "Medium": 370,
            "Large": 500
          },
          "mrp": 250,
          "image": "/images/s-img-2.jpg",
          "category": "Pizza",
          "description": "Pizza with flavorful tandoori sauce.",
          "rating": 4.6,
          "availability": true
        },
        {
          "id": 19,
          "name": "PAPPY PANEER PIZZA",
          "p": "Topping:- Capsicum + paneer + sweet corn + Red paprika",
          "price": {
            "Regular": 180,
            "Medium": 370,
            "Large": 500
          },
          "mrp": 250,
          "image": "/images/s-img-2.jpg",
          "category": "Pizza",
          "description": "Pizza topped with paneer and sweetcorn.",
          "rating": 4.5,
          "availability": true
        },
        {
          "id": 20,
          "name": "ITALIAN PIZZA",
          "p": "Topping:- Jalapenos + Capsicum + Tomato + mushroom",
          "price": {
            "Regular": 180,
            "Medium": 370,
            "Large": 500
          },
          "mrp": 250,
          "image": "/images/s-img-2.jpg",
          "category": "Pizza",
          "description": "Authentic Italian pizza with assorted toppings.",
          "rating": 4.4,
          "availability": true
        },
        {
          "id": 21,
          "name": "Aloo Tikki Burger",
          "price": 45,
          "mrp": 60,
          "image": "/images/p-1.jpg",
          "category": "Burger",
          "description": "Tasty burger with aloo tikki patty.",
          "rating": 4.0,
          "availability": true
        },
        {
          "id": 22,
          "name": "Veg Cheese Burger",
          "price": 60,
          "mrp": 80,
          "image": "/images/p-1.jpg",
          "category": "Burger",
          "description": "Delicious burger with cheesy goodness.",
          "rating": 4.2,
          "availability": true,
          "isTrending" : true
        },
        {
          "id": 23,
          "name": "Hangover Burger",
          "price": 70,
          "mrp": 90,
          "image": "/images/p-1.jpg",
          "category": "Burger",
          "description": "Perfect for curing hangovers.",
          "rating": 4.3,
          "availability": true
        },
        {
          "id": 24,
          "name": "Veg Sandwich",
          "price": 70,
          "mrp": 90,
          "image": "/images/vegsand.jpg",
          "category": "Sandwich",
          "description": "Vegetarian sandwich with fresh veggies.",
          "rating": 4.1,
          "availability": true
        },
        {
          "id": 25,
          "name": "Pasta Sandwich",
          "price": 75,
          "mrp": 100,
          "image": "/images/pastasand.jpg",
          "category": "Sandwich",
          "description": "Sandwich filled with pasta goodness.",
          "rating": 4.4,
          "availability": true
        },
        {
          "id": 26,
          "name": "Sweet Corn Sandwich",
          "price": 85,
          "mrp": 120,
          "image": "/images/cornsand.jpg",
          "category": "Sandwich",
          "description": "Sandwich with sweet corn filling.",
          "rating": 4.5,
          "availability": true
        },
        {
          "id": 27,
          "name": "Paneer Sandwich",
          "price": 90,
          "mrp": 140,
          "image": "/images/Sandwich.jpg",
          "category": "Sandwich",
          "description": "Sandwich with delicious paneer filling.",
          "rating": 4.3,
          "availability": true,
          "isTrending" : true
        },
        {
          "id": 28,
          "name": "Aloo Tikki Wrap",
          "price": 90,
          "mrp": 140,
          "image": "/images/aloowrap.jpeg",
          "category": "Wrap",
          "description": "Wrap filled with aloo tikki and veggies.",
          "rating": 4.2,
          "availability": true
        },
        {
          "id": 29,
          "name": "Paneer Tikki Wrap",
          "price": 110,
          "mrp": 170,
          "image": "/images/paneerwrap.jpeg",
          "category": "Wrap",
          "description": "Wrap filled with paneer tikki and veggies.",
          "rating": 4.4,
          "availability": true
        },
        {
          "id": 30,
          "name": "Special Wrap",
          "price": 120,
          "mrp": 200,
          "image": "/images/splwrap.jpeg",
          "category": "Wrap",
          "description": "Special wrap with assorted fillings.",
          "rating": 4.5,
          "availability": true
        },
        {
          "id": 31,
          "name": "Plain Garlic Bread",
          "price": 80,
          "mrp": 100,
          "image": "/images/gb.jpg",
          "category": "Garlic Bread",
          "description": "Garlic bread with classic flavor.",
          "rating": 4.0,
          "availability": true
        },
        {
          "id": 32,
          "name": "Cheese Corn Garlic Bread",
          "price": 110,
          "mrp": 160,
          "image": "/images/gb.jpg",
          "category": "Garlic Bread",
          "description": "Garlic bread with cheese and corn toppings.",
          "rating": 4.3,
          "availability": true
        },
        {
          "id": 33,
          "name": "Stuffed Garlic Bread",
          "price": 120,
          "mrp": 180,
          "image": "/images/gb.jpg",
          "category": "Garlic Bread",
          "description": "Garlic bread stuffed with flavorful fillings.",
          "rating": 4.4,
          "availability": true
        },
        {
          "id": 34,
          "name": "Red Sauce Pasta",
          "price": 110,
          "mrp": 150,
          "image": "/images/redpasta.jpg",
          "category": "Pasta",
          "description": "Pasta in tangy red sauce.",
          "rating": 4.2,
          "availability": true
        },
        {
          "id": 35,
          "name": "White Sauce Pasta",
          "price": 120,
          "mrp": 160,
          "image": "/images/whitepasta.jpg",
          "category": "Pasta",
          "description": "Pasta in creamy white sauce.",
          "rating": 4.5,
          "availability": true
        },
        {
          "id": 36,
          "name": "Tandoori Pasta",
          "price": 130,
          "mrp": 180,
          "image": "/images/redpasta.jpg",
          "category": "Pasta",
          "description": "Pasta with tandoori flavor.",
          "rating": 4.3,
          "availability": true
        },
        {
          "id": 37,
          "name": "Makhni Pasta",
          "price": 130,
          "mrp": 180,
          "image": "/images/makhnipasta.jpg",
          "category": "Pasta",
          "description": "Pasta in rich makhni sauce.",
          "rating": 4.4,
          "availability": true
        },
        {
          "id": 38,
          "name": "Mix Sauce Pasta",
          "price": 140,
          "mrp": 200,
          "image": "/images/mixpasta.jpg",
          "category": "Pasta",
          "description": "Pasta in a blend of sauces.",
          "rating": 4.6,
          "availability": true
        },
        {
          "id": 39,
          "name": "Cold Coffee",
          "price": 80,
          "mrp": 100,
          "image": "/images/coffee.jpeg",
          "category": "Beverage",
          "description": "Refreshing cold coffee.",
          "rating": 4.0,
          "availability": true
        },
        {
          "id": 40,
          "name": "Strawberry Shake",
          "price": 90,
          "mrp": 120,
          "image": "/images/strawberry.jpg",
          "category": "Beverage",
          "description": "Indulgent strawberry shake.",
          "rating": 4.2,
          "availability": true,
          "isTrending" : true
        },
        {
          "id": 41,
          "name": "Oreo Shake",
          "price": 90,
          "mrp": 120,
          "image": "/images/oreo.jpg",
          "category": "Beverage",
          "description": "Delicious Oreo flavored shake.",
          "rating": 4.4,
          "availability": true
        },
        {
          "id": 42,
          "name": "Vanilla Shake",
          "price": 90,
          "mrp": 130,
          "image": "/images/vanilla.jpeg",
          "category": "Beverage",
          "description": "Classic vanilla flavored shake.",
          "rating": 4.3,
          "availability": true
        },
        {
          "id": 43,
          "name": "Chocolate Shake",
          "price": 90,
          "mrp": 130,
          "image": "/images/choco.jpg",
          "category": "Beverage",
          "description": "Rich and indulgent chocolate shake.",
          "rating": 4.5,
          "availability": true
        },
        {
          "id": 44,
          "name": "Butter Scotch Shake",
          "price": 100,
          "mrp": 140,
          "image": "/images/butter.jpg",
          "category": "Beverage",
          "description": "Buttery and creamy butterscotch flavored shake.",
          "rating": 4.2,
          "availability": true,
          "isTrending" : true
        },
        {
          "id": 45,
          "name": "Malai Chaap",
          "price": 130,
          "mrp": 170,
          "image": "/images/malaichap.jpg",
          "category": "Chaap",
          "description": "Rich and creamy malai flavored chaap.",
          "rating": 4.3,
          "availability": true
        },
        {
          "id": 46,
          "name": "Masala Chaap",
          "price": 130,
          "mrp": 170,
          "image": "/images/masalachap.jpg",
          "category": "Chaap",
          "description": "Spicy and flavorful masala chaap.",
          "rating": 4.4,
          "availability": true
        },
        {
          "id": 47,
          "name": "Afgani Chaap",
          "price": 130,
          "mrp": 170,
          "image": "/images/chaap1.jpg",
          "category": "Chaap",
          "description": "Traditional Afgani style chaap.",
          "rating": 4.3,
          "availability": true
        },
        {
          "id": 48,
          "name": "Lemon Chaap",
          "price": 140,
          "mrp": 170,
          "image": "/images/chaap1.jpg",
          "category": "Chaap",
          "description": "Zesty lemon flavored chaap.",
          "rating": 4.5,
          "availability": true
        },
        {
          "id": 49,
          "name": "KFC Chaap",
          "price": 100,
          "mrp": 130,
          "image": "/images/kfcchaap.jpeg",
          "category": "Chaap",
          "description": "Inspired by the famous KFC flavor.",
          "rating": 4.2,
          "availability": true
        },
        {
          "id": 50,
          "name": "Paneer Tikka",
          "price": 150,
          "mrp": 190,
          "image": "/images/paneertikka.jpg",
          "category": "Starter",
          "description": "Classic paneer tikka with Indian spices.",
          "rating": 4.6,
          "availability": true
        },
        {
          "id": 51,
          "name": "Veg Noodles",
          "price": 80,
          "mrp": 100,
          "image": "/images/Veg-Noodles.jpg",
          "category": "Noodles",
          "description": "Stir-fried noodles with fresh vegetables.",
          "rating": 4.0,
          "availability": true
        },
        {
          "id": 52,
          "name": "White Noodles",
          "price": 90,
          "mrp": 110,
          "image": "/images/whitenoodle.jpg",
          "category": "Noodles",
          "description": "Noodles tossed in a light white sauce.",
          "rating": 4.1,
          "availability": true
        },
        {
          "id": 53,
          "name": "Cheese Noodles",
          "price": 100,
          "mrp": 130,
          "image": "/images/whitenoodle.jpg",
          "category": "Noodles",
          "description": "Noodles with cheesy goodness.",
          "rating": 4.3,
          "availability": true,
          "isTrending" : true
        },
        {
          "id": 54,
          "name": "Hakka Noodles",
          "price": 120,
          "mrp": 150,
          "image": "/images/hakkanoodle.jpg",
          "category": "Noodles",
          "description": "Spicy and flavorful Hakka style noodles.",
          "rating": 4.4,
          "availability": true
        },
        {
          "id": 55,
          "name": "Singapori Noodles",
          "price": 120,
          "mrp": 150,
          "image": "/images/singanoodle.jpg",
          "category": "Noodles",
          "description": "Noodles inspired by Singaporean cuisine.",
          "rating": 4.5,
          "availability": true
        },
        {
          "id": 56,
          "name": "Spring Roll",
          "price": 80,
          "mrp": 110,
          "image": "/images/spring.jpeg",
          "category": "Appetizer",
          "description": "Crispy and flavorful spring rolls.",
          "rating": 4.2,
          "availability": true
        },
        {
          "id": 57,
          "name": "Dry Manchurian",
          "price": 90,
          "mrp": 120,
          "image": "/images/dryman.jpg",
          "category": "Appetizer",
          "description": "Spicy and crunchy dry Manchurian.",
          "rating": 4.3,
          "availability": true
        },
        {
          "id": 58,
          "name": "Gravy Manchurian",
          "price": 100,
          "mrp": 140,
          "image": "/images/gravyman.jpg",
          "category": "Appetizer",
          "description": "Manchurian in flavorful gravy.",
          "rating": 4.4,
          "availability": true
        },
        {
          "id": 59,
          "name": "Pav Bhaji",
          "price": 90,
          "mrp": 140,
          "image": "/images/pavbhaji.jpg",
          "category": "Main Course",
          "description": "Spicy mashed vegetables served with buttered bread.",
          "rating": 4.5,
          "availability": true
        },
        {
          "id": 60,
          "name": "Cheese Chilli",
          "price": 140,
          "mrp": 200,
          "image": "/images/cheesepan.jpg",
          "category": "Main Course",
          "description": "Spicy and cheesy chili paneer.",
          "rating": 4.6,
          "availability": true
        },
        {
          "id": 61,
          "name": "Honey Chilli Potato",
          "price": 130,
          "mrp": 170,
          "image": "/images/honeychil.jpg",
          "category": "Appetizer",
          "description": "Crispy potato fingers tossed in honey chili sauce.",
          "rating": 4.4,
          "availability": true
        },
        {
          "id": 62,
          "name": "Veg Momos",
          "price": 70,
          "mrp": 90,
          "image": "/images/momo.jpg",
          "category": "Appetizer",
          "description": "Steamed dumplings filled with vegetables.",
          "rating": 4.2,
          "availability": true,
          "isTrending" : true
        },
        {
          "id": 63,
          "name": "Fried Momos",
          "price": 80,
          "mrp": 100,
          "image": "/images/friedmomo.jpg",
          "category": "Appetizer",
          "description": "Crispy fried dumplings filled with vegetables.",
          "rating": 4.3,
          "availability": true
        },
        {
          "id": 64,
          "name": "KFC Momos",
          "price": 100,
          "mrp": 140,
          "image": "/images/kfcmomos.jpeg",
          "category": "Appetizer",
          "description": "Momos with a KFC inspired flavor.",
          "rating": 4.1,
          "availability": true
        },
        {
          "id": 65,
          "name": "Chole Kulche",
          "price": 45,
          "mrp": 60,
          "image": "/images/kulche.jpeg",
          "category": "Main Course",
          "description": "Spicy chickpea curry served with Indian bread.",
          "rating": 4.0,
          "availability": true
        },
        {
          "id": 66,
          "name": "Mix Pakode [250gm]",
          "price": 60,
          "mrp": 70,
          "image": "/images/pakore.jpeg",
          "category": "Appetizer",
          "description": "Assorted crispy fritters.",
          "rating": 4.2,
          "availability": true
        },
        {
          "id": 67,
          "name": "Tikki Bhalle[Half]",
          "price": 50,
          "mrp": 60,
          "image": "/images/bhalle.jpeg",
          "category": "Street Food",
          "description": "Tikki served with tangy tamarind chutney and yogurt.",
          "rating": 4.3,
          "availability": true
        },
        {
          "id": 68,
          "name": "Tikki Bhalle [Full]",
          "price": 70,
          "mrp": 90,
          "image": "/images/bhalle.jpeg",
          "category": "Street Food",
          "description": "Tikki served with tangy tamarind chutney and yogurt.",
          "rating": 4.4,
          "availability": true
        },
        {
          "id": 69,
          "name": "Paneer Parcel",
          "price": 70,
          "mrp": 100,
          "image": "/images/paneerparcel.jpeg",
          "category": "Snack",
          "description": "Crispy parcel filled with spicy paneer.",
          "rating": 4.2,
          "availability": true
        },
        {
          "id": 70,
          "name": "Mix Veg Parcel",
          "price": 70,
          "mrp": 100,
          "image": "/images/Mixparcel.jpeg",
          "category": "Snack",
          "description": "Crispy parcel filled with mixed vegetables.",
          "rating": 4.3,
          "availability": true
        },
        {
          "id": 71,
          "name": "Shahi Paneer",
          "price": {
            "Half": 90,
            "Full": 150
          },
          "mrp": 120,
          "image": "/images/shahipaneer.jpeg",
          "category": "Main Course",
          "description": "Creamy and rich paneer curry.",
          "rating": 4.5,
          "availability": true
        },
        {
          "id": 72,
          "name": "Kadai Paneer",
          "price": {
            "Half": 100,
            "Full": 160
          },
          "mrp": 130,
          "image": "/images/kadaipaneer.jpeg",
          "category": "Main Course",
          "description": "Spicy and flavorful paneer curry cooked in a kadai.",
          "rating": 4.6,
          "availability": true
        },
        {
          "id": 73,
          "name": "Matar Paneer",
          "price": {
            "Half": 90,
            "Full": 150
          },
          "mrp": 120,
          "image": "/images/matarpaneer.jpeg",
          "category": "Main Course",
          "description": "Paneer curry cooked with green peas.",
          "rating": 4.4,
          "availability": true
        },
        {
          "id": 74,
          "name": "Palak Paneer",
          "price": {
            "Half": 90,
            "Full": 150
          },
          "mrp": 120,
          "image": "/images/palakpaneer.jpeg",
          "category": "Main Course",
          "description": "Paneer curry cooked with spinach.",
          "rating": 4.5,
          "availability": true
        },
        {
          "id": 75,
          "name": "Paneer Do Pyaza",
          "price": {
            "Half": 110,
            "Full": 160
          },
          "mrp": 130,
          "image": "/images/pyaza.jpeg",
          "category": "Main Course",
          "description": "Paneer curry with double the onions.",
          "rating": 4.3,
          "availability": true
        },
        {
          "id": 76,
          "name": "Cheese Tomato",
          "price": {
            "Half": 90,
            "Full": 150
          },
          "mrp": 120,
          "image": "/images/cheesetomato.jpeg",
          "category": "Main Course",
          "description": "Paneer curry with tomato and cheese.",
          "rating": 4.2,
          "availability": true
        },
        {
          "id": 77,
          "name": "Gravy Chaap",
          "price": {
            "Half": 90,
            "Full": 140
          },
          "mrp": 120,
          "image": "/images/gravychaap.jpeg",
          "category": "Chaap",
          "description": "Chaap cooked in flavorful gravy.",
          "rating": 4.4,
          "availability": true
        },
        {
          "id": 78,
          "name": "Malai Kofta",
          "price": {
            "Half": 90,
            "Full": 150
          },
          "mrp": 120,
          "image": "/images/malaikofta.jpeg",
          "category": "Main Course",
          "description": "Creamy and rich kofta curry.",
          "rating": 4.5,
          "availability": true
        },
        {
          "id": 79,
          "name": "Chana Masala",
          "price": {
            "Half": 90,
            "Full": 130
          },
          "mrp": 120,
          "image": "/images/chanamasala.jpeg",
          "category": "Main Course",
          "description": "Spicy chickpea curry.",
          "rating": 4.3,
          "availability": true
        },
        {
          "id": 80,
          "name": "Mix Veg",
          "price": {
            "Half": 80,
            "Full": 130
          },
          "mrp": 110,
          "image": "/images/mixveg.jpeg",
          "category": "Main Course",
          "description": "Assorted vegetables cooked in a flavorful gravy.",
          "rating": 4.2,
          "availability": true
        },
        {
          "id": 81,
          "name": "Mushroom Matar",
          "price": {
            "Half": 100,
            "Full": 150
          },
          "mrp": 120,
          "image": "/images/mushroom.jpeg",
          "category": "Main Course",
          "description": "A flavorful combination of mushrooms and green peas cooked in a rich gravy.",
          "rating": 4.4,
          "availability": true
        },
        {
          "id": 82,
          "name": "Dal Makhani",
          "price": {
            "Half": 80,
            "Full": 130
          },
          "mrp": 120,
          "image": "/images/dalmakhani.jpeg",
          "category": "Main Course",
          "description": "Creamy and flavorful lentil curry slow-cooked with spices and cream.",
          "rating": 4.5,
          "availability": true
        },
        {
          "id": 83,
          "name": "Yellow Dal",
          "price": {
            "Half": 50,
            "Full": 80
          },
          "mrp": 80,
          "image": "/images/yellowdal.jpeg",
          "category": "Main Course",
          "description": "Simple and comforting yellow lentil curry.",
          "rating": 4.2,
          "availability": true
        },
        {
          "id": 84,
          "name": "Rajma",
          "price": {
            "Half": 50,
            "Full": 80
          },
          "mrp": 80,
          "image": "/images/rajma.jpeg",
          "category": "Main Course",
          "description": "Rich and hearty kidney bean curry cooked with spices and tomatoes.",
          "rating": 4.3,
          "availability": true
        },
        {
          "id": 85,
          "name": "Kadhi",
          "price": {
            "Half": 50,
            "Full": 80
          },
          "mrp": 80,
          "image": "/images/kadhi.jpeg",
          "category": "Main Course",
          "description": "Creamy yogurt-based curry with gram flour dumplings.",
          "rating": 4.4,
          "availability": true
        },
        {
          "id": 86,
          "name": "Aloo Matar",
          "price": {
            "Half": 50,
            "Full": 80
          },
          "mrp": 80,
          "image": "/images/aloomatar.jpeg",
          "category": "Main Course",
          "description": "Classic potato and green pea curry cooked with spices.",
          "rating": 4.3,
          "availability": true
        },
        {
          "id": 87,
          "name": "Mix Rayta",
          "price": {
            "Half": 40,
            "Full": 60
          },
          "mrp": 60,
          "image": "/images/mixrayta.jpeg",
          "category": "Side Dish",
          "description": "Refreshing yogurt-based side dish with mixed vegetables and spices.",
          "rating": 4.2,
          "availability": true
        },
        {
          "id": 88,
          "name": "Plain Naan",
          "price": 25,
          "mrp": 35,
          "image": "/images/plainnaan.jpeg",
          "category": "Bread",
          "description": "Soft and fluffy leavened bread.",
          "rating": 4.5,
          "availability": true
        },
        {
          "id": 89,
          "name": "Butter Naan",
          "price": 30,
          "mrp": 40,
          "image": "/images/butternaan.jpeg",
          "category": "Bread",
          "description": "Naan brushed with butter for extra flavor.",
          "rating": 4.6,
          "availability": true
        },
        {
          "id": 90,
          "name": "Stuff Naan",
          "price": 40,
          "mrp": 50,
          "image": "/images/stuffnaan.jpeg",
          "category": "Bread",
          "description": "Naan stuffed with a delicious filling of vegetables or paneer.",
          "rating": 4.4,
          "availability": true
        },
        {
          "id": 91,
          "name": "Onion Naan",
          "price": 45,
          "mrp": 55,
          "image": "/images/onionnaan.jpeg",
          "category": "Bread",
          "description": "Naan topped with finely chopped onions and spices.",
          "rating": 4.3,
          "availability": true
        },
        {
          "id": 92,
          "name": "Paneer Naan",
          "price": 55,
          "mrp": 65,
          "image": "/images/paneernaan.jpeg",
          "category": "Bread",
          "description": "Naan stuffed with flavorful paneer filling.",
          "rating": 4.5,
          "availability": true
        },
        {
          "id": 93,
          "name": "Garlic Naan",
          "price": 55,
          "mrp": 65,
          "image": "/images/garlicnaan.jpeg",
          "category": "Bread",
          "description": "Naan flavored with aromatic garlic.",
          "rating": 4.4,
          "availability": true
        },
        {
          "id": 94,
          "name": "Tandoori Roti",
          "price": 12,
          "mrp": 15,
          "image": "/images/tandooriroti.jpeg",
          "category": "Bread",
          "description": "Traditional Indian unleavened bread cooked in a tandoor.",
          "rating": 4.2,
          "availability": true
        },
        {
          "id": 95,
          "name": "Tawa Roti",
          "price": 12,
          "mrp": 15,
          "image": "/images/tawaroti.jpeg",
          "category": "Bread",
          "description": "Thin and soft flatbread cooked on a tawa.",
          "rating": 4.3,
          "availability": true
        },
        {
          "id": 96,
          "name": "Ajwain Roti",
          "price": 15,
          "mrp": 18,
          "image": "/images/ajwainroti.jpeg",
          "category": "Bread",
          "description": "Roti flavored with carom seeds for a distinct aroma.",
          "rating": 4.4,
          "availability": true
        },
        {
          "id": 97,
          "name": "Missi Roti",
          "price": 20,
          "mrp": 25,
          "image": "/images/misiroti.jpeg",
          "category": "Bread",
          "description": "Nutritious and flavorful roti made from gram flour and wheat flour.",
          "rating": 4.5,
          "availability": true
        },
        {
          "id": 98,
          "name": "Plain Rice",
          "price": 40,
          "mrp": 50,
          "image": "/images/plainrice.jpeg",
          "category": "Rice",
          "description": "Steamed plain rice, a perfect accompaniment to any curry.",
          "rating": 4.2,
          "availability": true
        },
        {
          "id": 99,
          "name": "Jeera Rice",
          "price": 70,
          "mrp": 90,
          "image": "/images/jeerarice.jpeg",
          "category": "Rice",
          "description": "Fragrant basmati rice cooked with cumin seeds and spices.",
          "rating": 4.3,
          "availability": true
        }
    
    
      ]
    
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
        addItem(state, action) {
            state.items.push(action.payload);
        },
        updateItem(state, action) {
            const { id, updatedItem } = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === id);
            if (existingItemIndex !== -1) {
                state.items[existingItemIndex] = { ...state.items[existingItemIndex], ...updatedItem };
            }
        },
        removeItem(state, action) {
            const idToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== idToRemove);
        },
    },
});

export const { setItems, addItem, updateItem, removeItem } = productsSlice.actions;

export const selectAllItems = state => state.products.items;


export const selectItemsByCategory = (state, category) =>
    state.products.items.filter(item => item.category === category);


export const selectAllCategories = state => {
    const allItems = selectAllItems(state);
    const categories = allItems.reduce((acc, item) => {
        if (!acc.includes(item.category)) {
            acc.push(item.category);
        }
        return acc;
    }, []);
    return categories;
};

export const selectAllUniqueCategories = state => {
    const allItems = selectAllItems(state);
    const uniqueCategories = [...new Set(allItems.map(item => item.category))];
    return uniqueCategories;
};



export default productsSlice.reducer;
