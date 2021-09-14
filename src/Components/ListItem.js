import React from 'react'

export default function ListItem({currentData}) {
    return (
        <div>
            {currentData && <div className="list-item">
                <h3>{currentData.title}</h3>
                <p>---{currentData.description}</p>
                <img alt="tagline details" src={currentData.imagePath} />
            </div>}
        </div>
    )
}
