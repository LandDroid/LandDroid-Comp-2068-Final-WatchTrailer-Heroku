const viewPath = "trailers";
const Trailer = require("../models/trailer");
const User = require("../models/User");

exports.index = async (req, res) => {
  try {
    const trailers = await Trailer.find()
      .populate("user")
      .sort({ updatedAt: "desc" });

    res.status(200).json(trailers);
  } catch (error) {
    res
      .status(400)
      .json({ message: "There was an error fetching the trailers", error });
  }
};

exports.show = async (req, res) => {
  try {
    const trailer = await Trailer.findById(req.params.id).populate("user");

    res.status(200).json(trailer);
  } catch (error) {
    res
      .status(400)
      .json({ message: "There was an error fetching the trailers" });
  }
};

exports.new = (req, res) => {
  res.render(`${viewPath}/new`, {
    pageTitle: "Add Trailer",
  });
};

exports.create = async (req, res) => {
  console.log(req.body);
  try {
    const { user: email } = req.session.passport;
    const user = await User.findOne({ email: email });

    const trailer = await Trailer.create({ user: user._id, ...req.body });

    res.status(200).json(trailer);
  } catch (error) {
    res
      .status(400)
      .json({ message: "There was an error creating the trailers", error });
  }
};

exports.edit = async (req, res) => {
  try {
    const trailer = await Trailer.findById(req.params.id);
    res.render(`${viewPath}/edit`, {
      pageTitle: trailer.title,
      formData: trailer,
    });
  } catch (error) {
    req.flash("danger", `There was an error accessing this trailers: ${error}`);
    res.redirect("/");
  }
};

exports.update = async (req, res) => {
  try {
    const { user: email } = req.session.passport;
    const user = await User.findOne({ email: email });

    let trailer = await Trailer.findById(req.body.id);
    if (!trailer) throw new Error("Trailers could not be found");

    const attributes = { user: user._id, ...req.body };
    await Trailer.validate(attributes);
    await Trailer.findByIdAndUpdate(attributes.id, attributes);

    req.flash("success", "The trailers was updated successfully");
    res.redirect(`/trailers/${req.body.id}`);
  } catch (error) {
    req.flash("danger", `There was an error updating this trailers: ${error}`);
    res.redirect(`/trailers/${req.body.id}/edit`);
  }
};

exports.delete = async (req, res) => {
  try {
    await Trailer.deleteOne({ _id: req.body.id });
    res.status(200).json({ message: "Successfully Deleted." });
  } catch (error) {
    res
      .status(400)
      .jason({ message: "There was an error deleting the trailer" });
  }
};
