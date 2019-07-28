import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({title, category, image, name, id}) => {
  return (
    <div className="col-lg-4 col-md-6 my-3">
      <div className="card border-0 rounded-lg overflow-hidden">
        <Link to={`portfolio/${id}/${name}`}>
          <div className="card-body p-0">
            <div className="card-image d-flex justify-content-center align-items-center overlay">
              <img className="card-img-top" src={image} alt=""/>
            </div>
            <div className="card-title m-0 d-flex justify-content-between flex-wrap">
              <h6 className="h6 my-0 ml-0 mr-3 font-weight-bold">{title}</h6>
              <span>{category}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Item;