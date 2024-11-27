import React from "react";
import { useState } from "react";
import Logo from "../../assets/top-logo.jpg"
import { BsBagFill } from "react-icons/bs";
import Banner from "../banner/banner";



const Header = ({cartCount , handleAddToCart}) => {

    return (
        <>
            <div className="container-fluid">
                <div className="row flex content-between">
                    <div className="mx-auto">
                        <img src={Logo} alt="" />
                    </div>
                    
                </div>
                <nav class="bg-white border-b shadow">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                <div class="flex items-center space-x-8">
                <a href="#" class="font-semibold text-lg">JEWELBOX</a>
                <ul class="flex space-x-6">
                    <li><a href="#" class="hover:text-blue-500">Rings</a></li>
                    <li><a href="#" class="hover:text-blue-500">Earrings</a></li>
                    <li class="relative group">
                    <a href="#" class="hover:text-blue-500">Pendants</a>
                    <div class="absolute hidden group-hover:block bg-white border w-40 shadow rounded mt-2">
                        <ul class="py-2">
                        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 text-xs">All Pendants</a></li>
                        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 text-xs">Alphabet Pendants</a></li>
                        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 text-xs">Solitaire Pendants</a></li>
                        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 text-xs">Everyday Wear</a></li>
                        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 text-xs">Occasion Wear</a></li>
                        </ul>
                    </div>
                    </li>
                    <li><a href="#" class="hover:text-blue-500">Bracelets</a></li>
                    <li><a href="#" class="hover:text-blue-500">Others</a></li>
                </ul>
                </div>
                <div>
                    <span className="absolute top-14.5 right-15.5 flex items-center justify-center w-4 h-4 bg-blue-800 text-white text-xs font-bold rounded-full">
                        {cartCount}
                    </span>
                    <div class="flex space-x-4">
                        <BsBagFill  size={25} color="gray"/>
                    </div>
                </div>
            </div>
            </nav>

            </div>
            <Banner handleAddToCart={handleAddToCart}/>
        </>
    );
};

export default Header;