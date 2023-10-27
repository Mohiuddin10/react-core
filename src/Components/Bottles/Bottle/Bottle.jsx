

const Bottle = ({ bottle }) => {
    const { img, name, price, quantity, rating, shipping, stock, seller } = bottle;
    console.log(bottle);
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>Shipping: ${shipping}</p>
                <p>Quantity: <input type="number" name="" id="" /></p>
                <p>Stock: {stock}</p>
                <p><small>Seller: {seller}</small></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default Bottle;