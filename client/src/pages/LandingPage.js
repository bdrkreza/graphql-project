import React from 'react'
import CardDisplay from "../components/CardDisplay/CardDisplay"
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay"
import MainHero from "../components/MainHero/MainHero"

function LandingPage() {

    return (
        <div>
            <MainHero />
            <CategoryDisplay />
            <CardDisplay animals={[]}/>
        </div>
    )
}

export default LandingPage
