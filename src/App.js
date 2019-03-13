import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'

// import Home from './components/Home/Home'
import Dash from './components/Dash/Dashboard'
// import Signup from './components/Signup/Signup'
// import Incomes from './components/Incomes/Incomes'
// import Expenses from './components/Expenses/Expenses'
// import Savings from './components/Saving/Savings'
// import Dashboard from './components/Dashboard/Dashboard'
// import PrivateRoute from './components/PrivateComponent/PrivateComponent'
// import Footer from './components/Footer/Footer'
// import UpdateUser from './components/Signup/UpdateUser'
// import ListIncomes from './components/Incomes/ListIncomes'
// import ListExpenses from './components/Expenses/ListExpenses'
// import ListSavings from './components/Saving/ListSaving'
// import MenuApp from './components/MenuMovil/MenuMovil'
// import Reminder from './components/Reminder/Reminder'

import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <Dash />
        <Switch>
          {/* <Route path='/' exact component={Home} /> */}
          {/* <Route path='/login' exact component={Login} /> */}
          {/* <Route path='/signup' exact component={Signup} />
          <PrivateRoute path='/update' exact component={UpdateUser} />
          <PrivateRoute path='/expenses' exact component={Expenses} />
          <PrivateRoute path='/incomes' exact component={Incomes} />
          <PrivateRoute path='/savings' exact component={Savings} />
          <PrivateRoute path='/dashboard' exact component={Dashboard} />
          <PrivateRoute path='/listincomes' exact component={ListIncomes} />
          <PrivateRoute path='/listexpenses' exact component={ListExpenses} />
          <PrivateRoute path='/listsavings' exact component={ListSavings} />
          <PrivateRoute path='/reminders' exact component={Reminder} /> */}
        </Switch>
        {/* <Footer />
        <MenuApp /> */}
      </div>
    )
  }
}

export default App
