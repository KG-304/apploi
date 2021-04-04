import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const ResumeIcon = (props) => {
    const { firstName, lastName, yearsExperience, profileImg } = props.resume;

    return (
        <div className="resume-icon">
            <ul>
                <li>{firstName} {lastName}</li>
                <li><AccountCircleIcon className="icon" /></li>
                <li>Exp: {yearsExperience} years</li>
            </ul>
        </div>
    )
}

export default ResumeIcon