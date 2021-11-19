import React from 'react'
import HitsItem from './HitsItem'
import dessertOne from '../img/dessert1.jpg';
import '../styles/Hits.css';

function Hits() {
    return (
        <div>
            <div className="hitsMainTitle">
                <h2>Monats-Hit</h2>
            </div>
            <HitsItem 
            Img={dessertOne}
            Title="Traditional Italian desserts"
            TitleDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, deleniti eligendi possimus illum assumenda 
            facilis dolore culpa a, voluptates id reprehenderit optio vel sed 
            quas itaque esse cumque hic alias?"
            />
        </div>
    )
}

export default Hits
