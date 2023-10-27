import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";


const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    return (
        <>
            <h2>Found Bottles: {bottles.length}</h2>
            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    bottles.map(bottle => <Bottle
                        bottle={bottle}
                        key={bottle.id}></Bottle>)
                }
            </div>
        </>
    );
};

export default Bottles;