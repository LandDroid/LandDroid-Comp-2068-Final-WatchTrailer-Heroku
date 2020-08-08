const {
  new: _new,
  index,
  show,
  create,
  edit,
  update,
  delete: _delete,
} = require("../controllers/TrailersController");

module.exports = (router) => {
  router.get("/trailers", index);
  router.get("/trailers/new", _new);
  router.post("/trailers", create);
  router.post("/trailers/update", update);
  router.post("/trailers/delete", _delete);
  router.get("/trailers/:id/edit", edit);
  router.get("/trailers/:id", show);
};
