import { model, Schema } from "mongoose";

const burgerSchema = new Schema(
  {
    name: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    keywords: [
      {
        type: String,
        lowercase: true,
      },
    ],
    // stalls_used: {},
    // favourites_by: {},
    // created_by: {},
    // updated_by: {},
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = model("Burger", burgerSchema);
