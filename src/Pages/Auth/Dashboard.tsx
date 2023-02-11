import React from 'react';
import {useRefreshQuery} from "../../Services/AuthApi";
import {URL_API} from "../../index";
import {Link} from "react-router-dom";

const Dashboard = () => {
    const {data, isLoading} = useRefreshQuery()

    function handleFileChanged(e: any) {
        e.preventDefault()
        console.log(e.target.files)
    }

    console.log(data)
    return (
        <div style={{margin: "auto", width: "70%", marginTop: "50px", marginBottom: "10%"}}>

            {isLoading ? "Loading..." : null}

            <div style={{display: "flex"}}>
                <div className="profile_avatar__container">
                    <img className="profile_avatar" style={{width: "200px"}} src={URL_API + data?.user[0].avatar} />

                    <div><label htmlFor={"#loader"} className="link_avatar_profile">Change avatar</label></div>
                    <input onChange={handleFileChanged} style={{display: "none"}} type="file" id={"#loader"}/>
                </div>

                <div style={{marginLeft: "20px", width: "100%"}}>
                    <p>Email: <b>{data?.user[0].email}</b></p>
                </div>
            </div>
            <hr/>

            <div className="PostByUsers">
                Post Container
            </div>
        </div>
    );
};

export default Dashboard;