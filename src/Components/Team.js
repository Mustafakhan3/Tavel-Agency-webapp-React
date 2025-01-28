import React from "react";
import "../style/Team.css";

const Team = () =>{
    return (
        <div className="main-container">
    <div className="h-2">
        <h2> Meet our Guide </h2>
            </div>

        <div className="grid-container">
            <div className="container-1">
            <img src="/images/team-1.jpg" alt="team-1"></img>
            <div className="details">

            <h3>Full Name</h3>
            <p>Designation</p>
            </div>
            </div>

          <div className="container-1">
            <img src="/images/team-2.jpg" alt="team-2"></img>
            <div className="details">
            <h3>Full Name</h3>
            <p>Designation</p>
            </div>
        </div>

         <div className="container-1">
            <img src="/images/team-3.jpg" alt="team-3"></img>
          <div className="details">
            <h3>Full Name</h3>
            <p>Designation</p>
            </div>
        </div>

        <div className="container-1">
            <img src="/images/team-4.jpg" alt="team-4"></img>
             <div className="details">

            <h3>Full Name</h3>
            <p>Designation</p>
            </div>
        </div>

        </div>
    
        </div>

    )
}
export default Team;