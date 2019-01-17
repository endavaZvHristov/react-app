import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
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
