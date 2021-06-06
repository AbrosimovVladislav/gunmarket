import {Route} from "react-router-dom";
import React from "react";
import axios from "axios";
import Header from "./component/Header";
import Catalog from "./component/page/Catalog";

function App() {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:8080/allProducts').then(resp => {
            setProducts(resp.data)
        })
    }, []);

    console.log(products)

  return (
      <div className="wrapper">
          <Header/>
          <div className="content">
              <Route path="/" render={() => <Catalog items={products}/>} exact/>
          </div>
      </div>
  );
}

export default App;
