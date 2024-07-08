import React from "react";
import './WorkExperienceCard.css';

const WorkExperienceCard = ({ details }) =>{
    return (
        <div className="Work-Experience-Card">
            <h6>{details.title}</h6>
            <div className="work-duration">{details.data}</div>
            <ul>
                {details.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
export default WorkExperienceCard;
