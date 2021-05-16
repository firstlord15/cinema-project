import React from 'react';
import ReadMoreReact from 'read-more-react'
import { Link } from 'react-router-dom';
import '../app/App.css'

const Card = ({ item }) => {
    return (
        <div>
            <Link to={`/items/${item.id}`} className="Link-detail">
                <div className="card text-white mod-card border-danger bg-dark">
                    <img className="card-img-top" style={{objectFit: "cover"}} src={item.image} alt=""/>
                    <div className="card-body">
                        <h5 className="card-title text-center title-item">{item.title}</h5>
                        <br />
                        <p className="card-text text-de">
                            <ReadMoreReact readMoreText="" min={60} ideal={70} max={100} text={item.description} />
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;