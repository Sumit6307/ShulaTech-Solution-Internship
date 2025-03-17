import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Transaction', TransactionSchema);
