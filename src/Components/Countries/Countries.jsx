import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";
import './Countries.css'
import VisitedCountry from "./VisitedCountry";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    const handleVisitedCountries = (props) => {
        if (visitedCountries.includes(props)) {
            return
        }
        else {
            const newVIsitedCountries = [...visitedCountries, props];
            setVisitedCountries(newVIsitedCountries)
        }
    }
    const handleRemove = (country) => {
        const newCountries = visitedCountries.filter(x => x.cca3 !== country.cca3)
        setVisitedCountries(newCountries);

    }
    console.log(visitedCountries);
    return (
        <>
            <h3 className="text-center">Countries: {countries.length}</h3>
            <div className="">
                <div className="text-center">
                    <h4>Visited Countries: {visitedCountries.length}</h4>
                    <ul>
                        {
                            visitedCountries.map((visitedCountry, idx) => <li key={idx}>{visitedCountry.name.common}</li>)
                        }

                    </ul>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        countries.map(country => <Country country={country}
                            handleVisitedCountries={handleVisitedCountries}
                            handleRemove = {handleRemove}
                            key={country.cca3}></Country>)
                    }
                </div>

            </div>
        </>
    );
};

export default Countries;