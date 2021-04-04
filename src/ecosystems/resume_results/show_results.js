import React, { useEffect, useState } from 'react'
import ResumeIcon from '../../atoms/icons/resume_icon'
import { data } from '../../test_data/people_init.json'

const ShowResults = () => {
    const [apiData, setData] = useState([])

    useEffect(() => { // Simulate API call, would typically use promise based library axios.
        window.setTimeout(() => {
            setData(data)
        }, 2000)
    }, [])

    return (
        <div className="icon-container">
            {apiData.map((el) => {
                return <ResumeIcon resume={el} />
            })}
        </div>
    )
}

export default ShowResults