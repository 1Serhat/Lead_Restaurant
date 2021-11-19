import React from 'react';
import '../styles/HitsItem.css';


function HitsItem({Img, Title, TitleDesc}) {
    return (
        <div className="section">
            <div className="container">
                <div className="hitsItem">
                    <div className="leftItem">
                        <img src={Img} alt="" />
                    </div>
                    <div className="rightItem">
                        <div className="rightTitle">
                            {Title}
                        </div>
                        <p className="rightDesc">
                            {TitleDesc}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HitsItem
