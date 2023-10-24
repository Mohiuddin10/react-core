import { useEffect } from "react";
import { useState } from "react"
import ProductsCat from "../ProductsCat/ProductsCat";


export default function Products() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/videos/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data))
    }, []);
    return (
       <>
        <h1>Categories: {categories.length}</h1>
        {
            categories.map((category) => {
                <ProductsCat props = {category}></ProductsCat>
            })
        }
        </>
        
    );
}