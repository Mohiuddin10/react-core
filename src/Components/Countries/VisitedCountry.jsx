const VisitedCountry = ({visitedCountry}) => {
    console.log(visitedCountry);
    return (
            <ul>
                <li>{visitedCountry.name.common}</li>
            </ul>
    );
};

export default VisitedCountry;