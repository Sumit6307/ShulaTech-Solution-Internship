import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import ExpenseList from './components/ExpenseList';
import AddTransaction from './components/AddTransaction';
import './styles.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <ExpenseList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
