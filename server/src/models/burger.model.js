// THIS IS BURGER MODEL
const { Schema, model } = require("mongoose");

const burgerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    slug: {
      type: String,
      required: false,
      trim: true,
    },
    status: {
      type: String,
      required: false,
      enum: ["active", "inactive"],
    },
    no_of_stalls_used: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = model("Burger", burgerSchema);
