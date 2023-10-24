const Country = ({country}) => {
    console.log(country);
    const { name, population, capital, flags, languages } = country;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="w-[100px]" src={flags.svg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name.common}</h2>
                <p>Capital: {name.common == 'Israel' ? 'Fokinni der kono capital nai' : capital}</p>
                <p>Population: {population}</p>
                <p>Languages: ?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Country;