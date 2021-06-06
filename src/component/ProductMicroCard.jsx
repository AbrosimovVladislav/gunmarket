import React from 'react';

function ProductMicroCard(props){
    return (
        <div className="product-micro-card">
            <img
                className="product-micro-card"
                src={props.srcImageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{props.name}</h4>
            <h4 className="pizza-block__title">{props.type.showName}</h4>
            <h4 className="pizza-block__title">{props.brand}</h4>
        </div>
    )
}

export default ProductMicroCard;