import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom'

const ResumeIcon = (props) => {
    const { firstName, lastName, yearsExperience, id } = props.resume;

    return (
        <Link to={`/profile:${id}`}>
            <div className="resume-icon">
                <ul>
                    <li>{firstName} {lastName}</li>
                    <li><AccountCircleIcon className="icon" /></li>
                    <li>Exp: {yearsExperience} years</li>
                </ul>
            </div>
        </Link>
    )
}

export default ResumeIcon