import Transaction from '../models/Transaction.js';

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const addTransaction = async (req, res) => {
  try {
    const { text, amount, category } = req.body;
    const transaction = new Transaction({ text, amount, category });
    await transaction.save();
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Error adding transaction" });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: "Transaction deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting transaction" });
  }
};
