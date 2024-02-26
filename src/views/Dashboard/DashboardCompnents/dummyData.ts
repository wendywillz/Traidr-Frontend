//FOR Products

import blender from "../../../assets/dashboard-assets/blender-pic.png"
import bowls from "../../../assets/dashboard-assets/bowls-pic.png"
import cups from "../../../assets/dashboard-assets/cups-pic.png"
import chair from "../../../assets/dashboard-assets/chair-pic.png"
import irons from "../../../assets/dashboard-assets/irons-pic.png"
import pillows from "../../../assets/dashboard-assets/pillows_pic.png"
import kitchenSet from "../../../assets/dashboard-assets/kitchen_set.png"
import blueChair from "../../../assets/dashboard-assets/blue_chair.png"
import washingMachine from "../../../assets/dashboard-assets/washing_machine.png"

interface Products {
    productName: string;
    image: string;
    description: string;
    price: number;
    
}

interface Filter{
    filterName: string;
    filtergroups: string[];
    inputType: string;
}

export const productsDummy: Products[] = [
    {
        productName: "Binatone Dual Steam Irons",
        image: irons,
        description: " A two-piece set of brand new steam irons",
        price: 50000
    },
    {
        productName: "Smoothie maker",
        image: blender,
        description: "A slicer for making smoothies",
        price: 20000
    },
    {
        productName: "Wooden Lounge Chair",
        image: chair,
        description: "A wooden lounge chair with a pillow",
        price: 150000
    },
    {
        productName: "20-piece bowl set",
        image: bowls,
        description: "A 20-piece set of multi-coloured bowls",
        price: 40000
    },
    {
        productName: "Cup Set",
        image: cups,
        description: "A 10-piece set of white mugs",
        price: 10000
    },
    {
        productName: "Baby Chair",
        image: blueChair,
        description: "A straw baby chair with blue pillows",
        price: 100000
    },
    {
        productName: "Kitchen set",
        image: kitchenSet,
        description: "A red kitchen set consisting of a blender",
        price: 120000
    },
    {
        productName: "Washing Machine Set",
        image: washingMachine,
        description: "A washing machine and dryer",
        price: 500000
    },
    {
        productName: "Pillow set",
        image: pillows,
        description: "A three-piece set of pillows",
        price: 15000
    },

]


export const filterCategoriesDummy: Filter[] =[

    {
        filterName: "Department",
        filtergroups:["Home Appliances", "Furniture", "Antiques", "Kids Clothes", "Adult Clothes"],
        inputType: "checkbox"
    },
    {
        filterName: "Price",
        filtergroups:["Less than ₦25,000", "₦15,000 - ₦25,000", "₦250-₦350"],
        inputType: "checkbox"
    },
    {
        filterName: "Colour",
        filtergroups:["Green", "Blue", "Red", "Orange", "Yellow"],
        inputType: "radio"
    },

]