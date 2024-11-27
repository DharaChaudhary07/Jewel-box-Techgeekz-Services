import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RoseRing1 from "../../assets/RoseRing1.jpg"
import RoseRing2 from "../../assets/RoseRing2.jpg"
import RoseRing3 from "../../assets/RoseRing3.jpg"
import RoseRing4 from "../../assets/RoseRing4.jpg"
import RoseRing5 from "../../assets/RoseRing5.jpg"
import RoseRing6 from "../../assets/RoseRing6.jpg"
import GoldRing1 from "../../assets/goldRing1.jpg"
import GoldRing2 from "../../assets/goldRing2.jpg"
import GoldRing3 from "../../assets/goldRing3.jpg"
import GoldRing4 from "../../assets/goldRing4.jpg"
import GoldRing5 from "../../assets/goldRing5.jpg"
import GoldRing6 from "../../assets/goldRing6.jpg"
import SilverRing1 from "../../assets/silverRing1.jpg"
import SilverRing2 from "../../assets/silverRing2.jpg"
import SilverRing3 from "../../assets/silverRing3.jpg"
import SilverRing4 from "../../assets/silverRing4.jpg"
import SilverRing5 from "../../assets/silverRing5.jpg"
import SilverRing6 from "../../assets/silverRing6.jpg"

const banner = ({handleAddToCart}) => {

    
    const [selectedColor, setSelectedColor] = useState("gold");

    // Mapping color to their respective images
    const imagesData = {
      gold: [GoldRing1, GoldRing2, GoldRing3, GoldRing4, GoldRing5, GoldRing6],
      silver: [SilverRing1, SilverRing2, SilverRing3, SilverRing4, SilverRing5, SilverRing6],
      roseGold: [RoseRing1, RoseRing2, RoseRing3, RoseRing4, RoseRing5, RoseRing6],
    };
  
    const images = imagesData[selectedColor];
    const [selectedImage, setSelectedImage] = useState(images[0]);
  
    const settings = {
      vertical: true,
      slidesToShow: 3,
      infinite: false,
      focusOnSelect: true,
      beforeChange: (_, next) => setSelectedImage(images[next]),
    };

    const [backgroundPosition, setBackgroundPosition] = useState('center');
    
  const handleMouseMove = (e) => {
    const zoomer = e.currentTarget;
    const offsetX = e.nativeEvent.offsetX ?? e.touches[0].pageX;
    const offsetY = e.nativeEvent.offsetY ?? e.touches[0].pageY;
    const x = (offsetX / zoomer.offsetWidth) * 100;
    const y = (offsetY / zoomer.offsetHeight) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  const handleMouseLeave = () => {
    setBackgroundPosition('center');
  };

    const pricingData = {
        '14Kt': {
          6: 80000,
          7: 90000,
          8: 100000,
          9: 102000,
          10: 102402,
          11: 104000,
          12: 105500,
          13: 107000,
          14: 108500,
          15: 110000,
          16: 111500,
          17: 113000,
          18: 114500,
          19: 116000,
          20: 117500,
          21: 119000,
          22: 120500,
          23: 122000,
          24: 123500,
          25: 125000,
          26: 126500,
        },
        '18Kt': {
            6: 110000,
            7: 135000,
            8: 140000,
            9: 145000,
            10: 150000,
            11: 155000,
            12: 160000,
            13: 165000,
            14: 170000,
            15: 175000,
            16: 180000,
            17: 185000,
            18: 190000,
            19: 195000,
            20: 200000,
            21: 205000,
            22: 210000,
            23: 215000,
            24: 220000,
            25: 225000,
            26: 230000,
        },
      };
    
      const [selectedPurity, setSelectedPurity] = useState('14Kt');
      const [selectedSize, setSelectedSize] = useState(10);
    
      const handlePurityChange = (purity) => {
        setSelectedPurity(purity);
      };
    
      const handleSizeChange = (event) => {
        setSelectedSize(Number(event.target.value));
      };
    
      const currentPrice = pricingData[selectedPurity][selectedSize];


    return (
        <>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-6 mt-8">
            <div className="col-span-6">
          <div className="flex items-center justify-center space-x-4 p-6">
            <div className="w-3/12">
              <Slider {...settings}>
                {images.map((image, idx) => (
                  <div key={idx} className="p-2">
                    <img
                      src={image}
                      alt={`Thumbnail ${idx + 1}`}
                      className={`cursor-pointer ${selectedImage === image ? "border-b-4 border-black" : "opacity-50"}`}
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="flex items-center justify-center w-full h-full" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <img src={selectedImage} alt="Zoomable" className="w-full object-fill shadow-lg max-h-full" />
            </div>
          </div>
        </div>       

            <div class="col-span-6">
                <h1 class="text-2xl font-semibold">Unwavering Devotion Diamond Band Ring</h1>
                <p class="text-gray-600 mt-2">SKU: WR156614YG10</p>

                <div class="mt-4">
                <span class="text-3xl font-bold text-gray-900">₹{currentPrice.toLocaleString('en-IN')}</span>
                <p class="text-gray-600 text-sm">Price inclusive of taxes.</p>
                </div>

                <div class="mt-6">
                <label class="block text-sm font-medium text-gray-700">Color</label>
                <div class="flex space-x-3 mt-2">
                <button
                    onClick={() => setSelectedColor('gold')}
                    className={`w-10 h-10 rounded-full border ${
                    selectedColor === 'gold' ? 'border-gray-800' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: '#FFD700' }}
                />
                <button
                    onClick={() => setSelectedColor('silver')}
                    className={`w-10 h-10 rounded-full border ${
                    selectedColor === 'silver' ? 'border-gray-800' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: '#C0C0C0' }}
                />
                <button
                    onClick={() => setSelectedColor('roseGold')}
                    className={`w-10 h-10 rounded-full border ${
                    selectedColor === 'roseGold' ? 'border-gray-800' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: '#E5B4B4' }}
                />

                </div>
                </div>

                <div class="mt-6">
                <label class="block text-sm font-medium text-gray-700">Purity</label>
                    <div class="flex space-x-4 mt-2">
                    <button
                        onClick={() => handlePurityChange('14Kt')}
                        className={`px-4 py-2 rounded ${
                            selectedPurity === '14Kt' ? 'bg-gray-800 text-white' : 'bg-gray-200'
                        }`}
                        >
                        14Kt
                        </button>
                        <button
                        onClick={() => handlePurityChange('18Kt')}
                        className={`px-4 py-2 rounded ${
                            selectedPurity === '18Kt' ? 'bg-gray-800 text-white' : 'bg-gray-200'
                        }`}
                        >
                        18Kt
                        </button>

                    </div>
                </div>

                <div class="mt-6">
                <label class="block text-sm font-medium text-gray-700">Ring Size</label>
                <select class="mt-2 block border w-32 text-sm text-gray-500 rounded-lg px-4 py-2"  value={selectedSize} onChange={handleSizeChange}>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                </select>
                </div>

                <div class="mt-6 flex space-x-4">
                <button class="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700" style={{backgroundColor: '#012f49'}}  onClick={handleAddToCart}>Add to Cart</button>
                <button class="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900" style={{backgroundColor: '#012f49'}}s>Buy Now</button>
                </div>

                <div class="mt-6 border-t pt-4">
                <p class="text-sm text-gray-600">Estimated Delivery by 21st Dec 2024</p>
                <label class="block text-sm font-medium text-gray-700 mt-4">Enter Pincode</label>
                <input type="text" class="mt-2 border rounded-lg px-4 py-2 w-full" placeholder="Your pincode"/>
                </div>
            </div>
        </div>
    
    </>
    );
}

export default banner;