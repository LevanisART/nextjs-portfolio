import React from 'react';
import Item from './Item';

function Portfolio({portfolio}) {
  const items = portfolio.map((item, i) =>
    <Item 
      key={portfolio[i].id} 
      id={portfolio[i].id} 
      name={portfolio[i].title} 
      image={portfolio[i].image} 
      title={portfolio[i].title} 
      category={portfolio[i].category} 
    />
  );
  return (
    <div className="container_inner">
      <div className="portfolioItems card-deck align-items-start">
        {items}
      </div>
    </div>
  );
}

export default Portfolio;