import React, { createContext, useReducer } from 'react';
import axios from 'axios';

const initialState = { transactions: [] };
export const GlobalContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_TRANSACTIONS':
      return { ...state, transactions: action.payload };
    case 'ADD_TRANSACTION':
      return { ...state, transactions: [...state.transactions, action.payload] };
    case 'DELETE_TRANSACTION':
      return { ...state, transactions: state.transactions.filter(txn => txn._id !== action.payload) };
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getTransactions = async () => {
    const res = await axios.get('/api/transactions');
    dispatch({ type: 'GET_TRANSACTIONS', payload: res.data });
  };

  const addTransaction = async (transaction) => {
    const res = await axios.post('/api/transactions', transaction);
    dispatch({ type: 'ADD_TRANSACTION', payload: res.data });
  };

  const deleteTransaction = async (id) => {
    await axios.delete(`/api/transactions/${id}`);
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  return (
    <GlobalContext.Provider value={{ ...state, getTransactions, addTransaction, deleteTransaction }}>
      {children}
    </GlobalContext.Provider>
  );
};
