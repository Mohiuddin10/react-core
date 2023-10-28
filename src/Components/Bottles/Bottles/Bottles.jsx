import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";


const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [addedBottles, setAddedBottles] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);

    const handleAddedBottles = (bottle) => {
        const newAddedBottles = [...addedBottles, bottle];
        setAddedBottles(newAddedBottles);
    }
    return (
        <>
            <h2>Found Bottles: {bottles.length}</h2>
            <div className="grid gird-cols-1 md:grid-cols-2">
                {
                    bottles.map(bottle => <Bottle
                        bottle={bottle}
                        handleAddedBottles={handleAddedBottles}
                        key={bottle.id}></Bottle>)
                }
            </div>
            <div className="">
                <h3>Shopping Cart Item: {addedBottles.length}</h3>
                {
                    addedBottles.map(x => <li key= {x.id}>{x.name}</li>)
                }
            </div>
        </>
    );
};

export default Bottles;