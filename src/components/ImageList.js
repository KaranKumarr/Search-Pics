import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {


    let ImageList = props.images.map((img) => {
        return <ImageCard image={img} key={img.id} />;
    });


    return (
        <>
            <div className="image-list">{ImageList}</div>
        </>
    );

};

export default ImageList;;