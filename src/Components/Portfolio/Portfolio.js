import React from 'react';
import Item from './Item';

function Portfolio({portfolio}) {
  return (
    <div className="container_inner animatedParent">
      <div className="card-deck align-items-start animated fadeInUp">
      {
        portfolio.map((user, i) => {
          return (
            <Item 
              key={portfolio[i].id} 
              id={portfolio[i].id} 
              name={portfolio[i].title} 
              image={portfolio[i].image} 
              title={portfolio[i].title} 
              category={portfolio[i].category} 
            />
          )
        })
      }
      </div>
    </div>
  );
}

export default Portfolio;