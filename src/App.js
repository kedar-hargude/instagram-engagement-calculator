
import React, { useState } from "react";
// import dataTemp from "./data"
import Search from "./components/Search"
import Result from "./components/Result"

export default function App(){
    const [data, setData] = useState()
    const [username, setUsername] = useState('bhuvan.bam22');
    const [toggler, setToggler] = useState(true);
    const [firstClick, setFirstClick] = useState(false);

    const [responseSuccess, setResponseSuccess] = useState(false);

    const accessToken = '{user-access-token-here}'

    React.useEffect(() => {
        fetch(`https://graph.facebook.com/17841453909361782?fields=business_discovery.username(${username}){followers_count,media_count,media{comments_count,like_count}}&access_token=${accessToken}`)
            .then(response => {
                if(response.ok){
                    setResponseSuccess(true);
                    return response.json()
                }
                setResponseSuccess(false);
                console.log("Error:")
                console.log(response);
            })
            .then(currentData => {
                setData(currentData)
            })
    }, [toggler]);


    function getData(value){
        setUsername(value);
        setToggler(prevState => !prevState);
        setFirstClick(true);
    }

    return(
        <div className="container">
            <Search sendData={getData} />

            {data? (
                <Result
                username={username}
                data={data}
                />
            ): (
                firstClick && 
                <div className="error-container">
                    <h2 className="error-message">Error! Please ensure you've entered the correct username.  E.g. <span style={{textDecoration: "underline"}}>bhuvan.bam22</span>
                    </h2>
                    <p>(Only Business or Creator profiles)</p>
                </div>
            )
            }
        </div>
    )
}