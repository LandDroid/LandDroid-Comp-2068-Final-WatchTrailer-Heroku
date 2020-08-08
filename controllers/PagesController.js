const viewPath = "pages";

exports.home = (req, res) => {
  res.render(`${viewPath}/home`, {
    pageTitle: "Home",
  });
};

exports.about = (req, res) => {
  res.render(`${viewPath}/about`, {
    pageTitle: "About",
  });
};

exports.contact = (req, res) => {
  res.render(`${viewPath}/contact`, {
    pageTitle: "Contact Us",
  });
};
