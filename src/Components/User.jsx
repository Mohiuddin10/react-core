import './User.css'
export default function User (props) {
    const {name, phone, website, email, address} = props.user;
    return(
        <>
        <div className="user">
        <h3>Name: {name}</h3>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
        <p>email: {email}</p>
        <p>Address: {address.street}, {address.suite}, {address.city}</p>
        </div>
        
        </>
    )
}