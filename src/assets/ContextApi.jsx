import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../assets/images/Ad1.png'
import img2 from '../assets/images/Ad2.png'
import img3 from '../assets/images/Ad3.png'
import img4 from '../assets/images/Ad4.png'
import img5 from '../assets/images/Ad5.png'
import img6 from '../assets/images/Ad6.png'
import img7 from '../assets/images/Ad7.png'
import img8 from '../assets/images/Ad8.png'
import img9 from '../assets/images/Ad9.png'
import img10 from '../assets/images/Ad10.png'
import img11 from '../assets/images/Ad11.png'
import img12 from '../assets/images/mobileAd1.png'
import img13 from '../assets/images/mobileAd2.png'
import img14 from '../assets/images/mobileAd3.png'
import img15 from '../assets/images/mobileAd4.png'
import img16 from '../assets/images/mobileAd5.png'

export const Adcontext = createContext()

export const Provider = ({children}) => {

    const navigate = useNavigate()

      const [filters, setFilters] = useState({
    mobiles: {
      brands: [],
      minPrice: '',
      maxPrice: ''
    },
  });

  // Update filter function
  const updateFilter = (category, key, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
  };
     const firstAds = [
    { id: 1, name: "iPhone 15 Pro", category: "Mobiles", brand: "iPhone", price: 250000, place: "Karachi", views: 231, image:img1 },
    { id: 2, name: "Samsung S24 Ultra", category: "Mobiles", brand: "Samsung", price: 220000, place: "Lahore", views: 198, image:img2 },
    { id: 3, name: "Dell XPS 15", category: "Laptops", price: 280000, place: "Islamabad", views: 145, image:  img3},
    { id: 4, name: "MacBook Pro M3", category: "Laptops", price: 520000, place: "Karachi", views: 210, image: img4},
    { id: 5, name: "Honda Civic 2024", category: "Cars", price: 6500000, place: "Lahore", views: 560, image:  img5},
    { id: 6, name: "Toyota Corolla", category: "Cars", price: 4300000, place: "Faisalabad", views: 490, image:img6},
    { id: 7, name: "Suzuki GSX-R600", category: "Bikes", price: 1200000, place: "Karachi", views: 260, image: img7},
    { id: 8, name: "Yamaha YBR 125G", category: "Bikes", price: 500000, place: "Multan", views: 180, image:   img8},
    { id: 9, name: "3-Seater Sofa Set", category: "Furniture", price: 95000, place: "Rawalpindi", views: 140, image:img9 },
    { id: 10, name: "Dining Table 6 Chairs", category: "Furniture", price: 125000, place: "Peshawar", views: 110, image: img10},
    { id: 11, name: "Smart LED TV 55inch", category: "Electronics", price: 145000, place: "Karachi", views: 205, image:  img11 },
    { id: 12, name: "PS5 Console", category: "Electronics", price: 180000, place: "Lahore", views: 245, image:img1 },
  ];

    const mobileAds = [
    { id: 1, name: "iPhone 15 Pro", brand: "Apple", model: "15 Pro", price: 250000, storage: "256GB", color: "Natural Titanium", condition: "New", location: "Karachi", views: 231, image: img12 },
    { id: 2, name: "Samsung S24 Ultra", brand: "Samsung", model: "S24 Ultra", price: 220000, storage: "512GB", color: "Graphite", condition: "New", location: "Lahore", views: 198, image: img13 },
    { id: 3, name: "OnePlus 12", brand: "OnePlus", model: "12", price: 195000, storage: "256GB", color: "Emerald Green", condition: "Used", location: "Islamabad", views: 156, image: img14 },
    { id: 4, name: "Google Pixel 8 Pro", brand: "Google", model: "8 Pro", price: 210000, storage: "512GB", color: "Obsidian", condition: "New", location: "Rawalpindi", views: 184, image: img15 },
    { id: 5, name: "Vivo V30 Pro", brand: "Vivo", model: "V30 Pro", price: 150000, storage: "256GB", color: "Sunset Gold", condition: "Used", location: "Faisalabad", views: 172, image: img16 },
    { id: 6, name: "Oppo Reno 12", brand: "Oppo", model: "Reno 12", price: 135000, storage: "128GB", color: "Ocean Blue", condition: "New", location: "Multan", views: 133, image: img16 },
    { id: 7, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img12 },
    { id: 8, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img13 },
    { id: 9, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img12 },
    { id:10, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img14 },
    { id:11, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img12 },
    { id:12, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img15 },
    { id:13, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img12 },
    { id:14, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img16 },
    { id:15, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img12 },
    { id:16, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img13 },
    { id:17, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img14 },
    { id:18, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img13 },
    { id:19, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img14 },
    { id:20, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img15 },
    { id:21, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img14 },
    { id:22, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img16 },
    { id:23, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img14 },
    { id:24, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img12 },
    { id:25, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img14 },
    { id:26, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img13 },
    { id:27, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img15 },
    { id:28, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img14 },
    { id:28, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img13 },
    { id:29, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img14 },
    { id:30, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img15 },
    { id:31, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img14 },
    { id:32, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img16 },
    { id:33, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img14 },
    { id:34, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img12 },
    { id:35, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img13 },
    { id:36, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img14 },
    { id:37, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img13 },
    { id:38, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img12 },
    { id:39, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img13 },
    { id:40, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img14 },
    { id:41, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img15 },
    { id:42, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img16 },
    { id:43, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img13 },
    { id:44, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img14 },
    { id:45, name: "Infinix Zero Ultra", brand: "Infinix", model: "Zero Ultra", price: 95000, storage: "256GB", color: "Cosmic Black", condition: "Used", location: "Hyderabad", views: 122, image: img12 },
  ];


  const handleChange = (category) => {
    navigate(`/items?category=${category}`);
  };
    return (
        <Adcontext.Provider value={{firstAds,mobileAds, handleChange,filters,updateFilter}}>
            {children}
        </Adcontext.Provider>
    )
}

export const useAds = () =>{
    return useContext(Adcontext)
}