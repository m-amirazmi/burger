import { model, Schema } from "mongoose";
import { toSlug } from "../utils/helpers.js";

const burgerSchema = new Schema(
  {
    name: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
      immutable: true,
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
    slug: {
      type: String,
      lowercase: true,
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

burgerSchema.pre("save", function (next) {
  this.slug = toSlug(this.name);
  next();
});

export default model("Burger", burgerSchema);
