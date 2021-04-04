import React from 'react'
import Selectors from '../../atoms/selector/selectors'
import ToolBar from '../../atoms/toolbar/toolbar'
import ShowResults from '../resume_results/show_results'

const Home = () => {
    return (
        <div className="home-background">
            <ToolBar />
            <Selectors />
            <ShowResults />
        </div>
    )
}

export default Home