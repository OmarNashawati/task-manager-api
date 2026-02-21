import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: [true, 'Please provide task content'],
    },
    status: {
      type: String,
      enum: ['done', 'to-do'],
      default: 'to-do',
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Task', TaskSchema);
