import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GetAppIcon from '@material-ui/icons/GetApp';

const ProfileHeader = (props) => {
    const { firstName, lastName, address, yearsExperience, role, resume, education, email, phone } = props.person
    return (
        <div className="header">
            <AccountCircleIcon alt={`${firstName} ${lastName} picture`} className="icon" />
            <hr />
            <div>
                <GetAppIcon className="download" />
                <span style={{ position: 'relative', bottom: '35px' }}>{resume}</span>
            </div>
            <ul>
                <li>{firstName} {lastName}</li>
                <li>Role: {role}</li>
                <li>Education: {education.university}</li>
                <li>Email: {email}</li>
            </ul>
            <ul>
                <li>Years Experience: {yearsExperience}</li>
                <li>City: {address.city}</li>
                <li>State: {address.state}</li>
                <li>Phone: {phone}</li>
            </ul>
        </div>
    )
}

export default ProfileHeader