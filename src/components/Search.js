import React from "react";

export default function Search(props){

    const[username, setUsername] = React.useState('');

    function handleChange(event){
        setUsername(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        props.sendData(username);
    }

    return (
        <div className="search-container">
            <span>Instagram Engagement Rate Calculator</span>
            <h1>Please enter a username:</h1>
            <form onSubmit={handleSubmit}>
                <input 
                className="user-inputbox"
                id="subtwo"
                type="text"
                onChange={handleChange}
                name="username"
                value={username}
                placeholder="username here"
                />
                <button className="submit-btn" type="submit">Search</button>
            </form>
        </div>
    )
}