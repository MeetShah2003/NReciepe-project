const { reciepeModel } = require("../models/reciepe.schema");

const reciepePage = (req, res) => {
  return res.render("recipeForm");
};

const recipeCreate = async (req, res) => {
  try {
    req.body.createdBy = req.user.id;
    let newRecipe = await reciepeModel.create(req.body);
    return res.status(200).send(newRecipe);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

// all reciepe

const allreciepePage = (req, res) => {
  return res.render("recipeList");
};

const displayRecipe = async (req, res) => {
  try {
    let reciepe = await reciepeModel.find();
    return res.status(200).send(reciepe);
  } catch (err) {
    console.log(err.message);
  }
};

// single reciepe

const singlereciepePage = (req, res) => {
  return res.render("myRecipes");
};

const singleRecipe = async (req, res) => {
  try {
    let reciepe = await reciepeModel.find({ createdBy: req.user.id });
    return res.status(200).send(reciepe);
  } catch (err) {
    console.log(err.message);
  }
};

const deleteReciepe = async (req, res) => {
  try {
    let { id } = req.params;
    let deletedReciepe = await reciepeModel.findByIdAndDelete(id);
    if (deletedReciepe) {
      let reciepe = await reciepeModel.find();
      return res.status(200).send(reciepe);
    } else {
      return res.status(404).send("Reciepe not found");
    }
  } catch (err) {
    console.log(err.message);
  }
};

const updateReciepe = async (req, res) => {
  try {
    const { img, reciepename, time, author, description } = req.body;
    const { id } = req.params;
    let reciepe = {
      img,
      reciepename,
      time,
      author,
      description,
    };
    const updateReciepe = await reciepeModel.findByIdAndUpdate(id, reciepe);
    return res.status(200).send(updateReciepe);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  reciepePage,
  allreciepePage,
  recipeCreate,
  displayRecipe,
  singlereciepePage,
  singleRecipe,
  deleteReciepe,
  updateReciepe,
};
