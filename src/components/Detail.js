import React from 'react';
import { useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import '../components/css/Detail.css'

const Detail = ({ state }) => {

    const { id } = useParams();

    return (
        <div className="container">
            {state.filter((item) => item.id === id).map((item, index) => (
                <div key={index} className="container bg dark mt-3 mb-2">
                    <h1 className="text-center title-style">{item.title}</h1>
                    <img src={item.image} className="px-4 mb-2 img-de" alt="" />
                    <h3 className="text-center title-pod mb-4">Трейлер/Фильм</h3>
                    <div className="container-sm">
                        <div class="video-de">
                            <iframe width="100%" height="600" class="embed-responsive-item" src={item.video}></iframe>
                        </div>
                        <br />
                        <h5 className="title-pod">Description:</h5>
                        <p className="my-4 size-p">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default Detail;
