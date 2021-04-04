import React, { useState } from 'react'

const selected = {
    borderBottom: 'solid 1px darkblue',
    color: 'darkblue'
}

const notSelected = {
    color: 'grey'
}

const Selectors = () => {
    const [resume, setResume] = useState(true);
    const [search, setSearch] = useState(false);

    const handleChange = (arg) => {
        if (arg) {
            setResume(true);
            setSearch(false)
        }
        else {
            setResume(false);
            setSearch(true);
        }
    }

    return (
        <div className="selectors">
            <span onClick={() => handleChange(true)} style={resume ? selected : notSelected}>Recent Resumes</span>
            <span onClick={() => handleChange(false)} style={search ? selected : notSelected}>Search</span>
        </div>
    )
}

export default Selectors