import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
      immutable: true,
    },
    password: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: false,
    },
    last_name: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    roles: {
      type: [{ type: String, enum: ["member", "admin"] }],
      default: ["member"],
    },
    token: {
      type: String,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export default model("User", userSchema);
