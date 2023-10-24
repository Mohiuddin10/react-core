const Country = (props) => {
    console.log(props.country);
    const {name, population, capital, flages} = props.country;
    return (
        <div>
            <h2>Name: {name.common}</h2>
        </div>
    );
};

export default Country;