import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containrs/BurgerBuilder/BurgerBuilder';
class App extends Component {

  render() {
    return (
      <section>
          <Layout>
              <BurgerBuilder />
          </Layout>
      </section>

    );
  }
}

export default App;
