import ProductPage from '../product-page/product-page';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { products } from '../mock';
import Catalog from '../catalog/catalog';
import Layout from '../layout/layout';

function App() {
  return (
    
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Layout>
              <Catalog products={products} showInfoInAccordion />
            </Layout>
          </Route>
        </Switch>
        <Switch>
          <Route 
            path='/product/:code'
            exact
            render={(props) => {
              const product = products.find(
                (product) => product.code.toString() === props.match.params.code
              );
              return (
                <Layout>
                  {product ? (
                    <ProductPage product={product} />
                  ) : (
                    <h1>404 страница не найдена</h1>
                  )}
                </Layout>
              )
            }}
          />
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;
