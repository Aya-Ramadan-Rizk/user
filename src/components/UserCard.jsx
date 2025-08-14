function UserCard ({name, email, avatar, onDelete, id}){
    return(
        <div className="card container">
            <img src={avatar} alt={name} style={{borderRadius : "50%", marginBottom: "15px", boxShadow: "0 2px 6px rgba(0 ,0 ,0 ,0.2)"}} />
            <h3>{name}</h3>
            <p>{email}</p>
            <button onClick={() =>onDelete(id)}>Delete</button>
        </div>
    )
}
export default UserCard;