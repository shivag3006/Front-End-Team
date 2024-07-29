import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from './Pages/Gallery'; 

const images = [
    { src: 'https://via.placeholder.com/150', alt: 'Image 1', title: 'Image 1', description: 'Description of Image 1' },
    { src: 'https://via.placeholder.com/150', alt: 'Image 2', title: 'Image 2', description: 'Description of Image 2' },
    { src: 'https://via.placeholder.com/150', alt: 'Image 3', title: 'Image 3', description: 'Description of Image 3' },
    { src: 'https://via.placeholder.com/150', alt: 'Image 4', title: 'Image 4', description: 'Description of Image 4' }
    
];

const ForGallery = () => {
    return (
        <div>
            <Gallery images={images} />
        </div>
    );
};

export default ForGallery;
