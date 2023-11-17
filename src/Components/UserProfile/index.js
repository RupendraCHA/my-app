import "./index.css"

const UserProfile = (props) => {
    const {userDetails} = props
    const {imageUrl, name, role} = userDetails
    return (
        <li className="user-profile">
            <img src={imageUrl} alt="avatar" className="image"/>
            <div className="person-details">
                <h1 className="person-name">{name}</h1>
                <span className="job">{role}</span>
            </div>
        </li>
    )
}
export default UserProfile