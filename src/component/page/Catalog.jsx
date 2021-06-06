import React from 'react';
import ProductMicroCard from "../ProductMicroCard";

function Catalog(props){
    return (
        <div className="content__items">
            {
                props.items.map(item => <ProductMicroCard {...item} key={item.id}/>)
            }
        </div>
    )
}

export default Catalog;