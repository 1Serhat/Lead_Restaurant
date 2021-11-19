import React from 'react'
import Hero from '../components/Hero'
import Hits from '../components/Hits'
import Intro from '../components/Intro'
import Testimonials from '../components/Testimonials'

function Home() {
    return (
        <div>
            <Hero />
            <Intro />
            <Hits />
            <Testimonials />
        </div>
    )
}

export default Home
