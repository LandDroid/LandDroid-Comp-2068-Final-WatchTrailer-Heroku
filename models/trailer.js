const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const WatchTrailersSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    trailerTitle: {
      type: String,
      required: true, // This must exist
    },
    genre: {
      type: String,
      enum: [
        "Action",
        "Comedy",
        "Horror",
        "Romance",
        "Thiller",
        "Drama",
        "Mystery",
        "Crime",
        "Animation",
        "Adventure",
        "Fantasy",
        "Family",
        "Sci-Fi",
        "Western",
      ],
      required: false,
    },
    rating: {
      type: String,
      enum: ["G", "PG", "PG-13", "R", "NC-17", "A"],
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    language: {
      type: String,
      required: false,
    },
    year: {
      type: Number,
      required: false,
    },
    videoType: {
      type: String,
      enum: ["Movie", "TV Show"],
      required: false,
    },
    favorites: {
      type: Boolean,
      required: false,
    },
    episodes: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      getters: true,
    },
  }
);

module.exports = mongoose.model("Trailer", WatchTrailersSchema);
