import React from 'react';
import Category from "./Category";

function Header(){

    const categoriesList = ['Все','Гладкоствольное', 'Нарезное'];

return (
    <div>
        <Category items={categoriesList}/>
    </div>
)
}

export default Header;