import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToLS, getStoredCart } from "../../../utilities/localStorage";


const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [addedBottles, setAddedBottles] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);

    useEffect(() => {
        
        const storedCartNew = [];
        if (bottles){
            const storedCart = getStoredCart();
            const cart = bottles.find(bottle => bottle.id === storedCart.id)
            console.log(cart);
        }
    }, [bottles])

    const handleAddedBottles = (bottle) => {
        const newAddedBottles = [...addedBottles, bottle];
        setAddedBottles(newAddedBottles);
        addToLS(bottle.id);
    }
    return (
        <>
            <h2>Found Bottles: {bottles.length}</h2>
            <div className="">
                <h3>Shopping Cart Item: {addedBottles.length}</h3>
                {
                    addedBottles.map(x => <li key={x.id}>{x.name}</li>)
                }
            </div>
            <div className="grid gird-cols-1 md:grid-cols-2">
                {
                    bottles.map(bottle => <Bottle
                        bottle={bottle}
                        handleAddedBottles={handleAddedBottles}
                        key={bottle.id}></Bottle>)
                }
            </div>

        </>
    );
};

export default Bottles;