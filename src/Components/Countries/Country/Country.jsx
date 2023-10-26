import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountries}) => {
    const { name, population, capital, flags, cca3 } = country;

    const [visited, setVisited] = useState(false);
    let handleVisited = () => {
        return setVisited(!visited);
    }

    return (
        <div className={`card shadow-xl country-container`}>
            <figure><img className="w-[100px]" src={flags.svg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name.common}</h2>
                <p>Capital: {name.common == 'Israel' ? 'Fokinni der kono capital nai' : capital}</p>
                <div className="card-actions justify-end">
                    <button className={`w-[180px] mx-auto ${visited ? 'visited' : 'not-visited'}`} onClick={() => {handleVisited(); handleVisitedCountries(country);}}>{visited ? 'Visited' : 'Not-visited'}</button>
                    <button className={`w-[180px] mx-auto ${visited ? 'visited' : 'not-visited'}`} onClick={handleVisitedCountries}>{visited ? 'listed Visited' : 'listed Not-visited'}</button>
                </div>
            </div>
        </div>
    );
};

export default Country;