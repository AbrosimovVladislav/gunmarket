import {Route} from "react-router-dom";
import React from "react";
import axios from "axios";
import Header from "./component/Header";
import Catalog from "./component/page/Catalog";
import Home from "./component/page/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

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
              <Route path="/" render={() => <Home/>} exact/>
              <Route path="/catalog" render={() => <Catalog items={products}/>} exact/>
          </div>
      </div>
  );
}

export default App;
