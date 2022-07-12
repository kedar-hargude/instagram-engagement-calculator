import React from "react";

export default function Result(props){

    let data = props.data;

    let followers = data.business_discovery.followers_count;
    let dataArray = data.business_discovery.media.data;

    let totalComments = 0;
    let totalLikes = 0;
    let counter = 0;
    dataArray.forEach(element => {
        totalLikes += element.like_count;
        totalComments += element.comments_count;
        counter++;
    })

    const engagementPercent = 100 * (totalLikes + totalComments)/(followers * counter);


    return(
        <div className="result-container">
            <h2>Instagram link: <a target="_blank" rel="noopener noreferrer" href={`https://www.instagram.com/${props.username}/?hl=en`}>{props.username}</a></h2>
            <h2>Followers: {followers}</h2>
            <h1>The engagement rate is: <span className="result">{engagementPercent.toFixed(2)}%</span></h1>
        </div>)
}