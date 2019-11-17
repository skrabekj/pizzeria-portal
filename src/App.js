import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './components/views/Login/Login';
import Homepage from './components/views/Homepage/Homepage';
import Kitchen from './components/views/Kitchen/Kitchen';
import Order from './components/views/Order/Order';
import OrderNew from './components/views/OrderNew/OrderNew';
import Ordering from './components/views/Ordering/Ordering';
import Tables from './components/views/Tables/Tables';
import TablesBooking from './components/views/TablesBooking/TablesBooking';
import TablesEvent from './components/views/TablesEvent/TablesEvent ';

function App() {
  return (
    <div className="App">
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
        <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
        <Route exact path={process.env.PUBLIC_URL + '/Kitchen'} component={Kitchen} />
        <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
        <Route exact path={process.env.PUBLIC_URL + '/order/:id'} component={Order} />
        <Route exact path={process.env.PUBLIC_URL + '/new'} component={OrderNew} />
        <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
        <Route exact path={process.env.PUBLIC_URL + '/booking/:id'} component={TablesBooking} />
        <Route exact path={process.env.PUBLIC_URL + '/event/:id'} component={TablesEvent} />
      </Switch>
    </MainLayout>
    </BrowserRouter>
    </div>
  );
}

export default App;
