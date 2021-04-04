import React, { useEffect } from 'react'
import ProfileBody from '../../atoms/profile_body/profile_body';
import ProfileHeader from '../../atoms/profile_header/profile_header';
import ToolBar from '../../atoms/toolbar/toolbar';
import { data } from '../../test_data/single_user.json'


const ProfilePage = () => {

    useEffect(() => {
        // would pass id arg to an api call to get rest of data about user.
    }, [])

    return (
        <div className="profile">
            <ToolBar />
            <ProfileHeader person={data} />
            <ProfileBody />
        </div>
    )
}

export default ProfilePage