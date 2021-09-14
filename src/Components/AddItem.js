import React, { useState } from 'react'

export default function SearchItem({getNewTagline}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const handleUrlChange = (event) => {
        setImgUrl(event.target.value);
    };
    const newTagline = {
        "title": title,
        "description": description,
        "imagePath": imgUrl
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getNewTagline(newTagline);
        setTitle('');
        setDescription('');
        setImgUrl('');
    }
    return (
        <div>
            <h3>Create a new tagline</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input id="title" type="text" placeholder="title" value={title} onChange={handleTitleChange} />
                </div> 
                <div>
                    <label htmlFor="description">Description:</label>
                    <input id="description" type="text" placeholder="description" value={description} onChange={handleDescriptionChange} />
                </div>
                <div>
                    <label htmlFor="imageSource">Image url:</label>
                    <input id="imageSource" type="text" placeholder="image url"value={imgUrl} onChange={handleUrlChange} />
                </div>
                <input type="submit" value="Create" />
            </form>           
        </div>
    )
}
