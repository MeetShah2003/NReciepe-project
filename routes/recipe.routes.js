const { Router } = require("express");
const { reciepePage, recipeCreate, displayRecipe, allreciepePage, singleRecipe, singlereciepePage, deleteReciepe, updateReciepe } = require("../controller/reciepe.controller");
const { isValid, isAdmin } = require("../middleware/auth.middleware");
const reciepeRoute = Router();

// reciepe Form
reciepeRoute.get("/reciepe",isValid,reciepePage);

reciepeRoute.post("/create",isValid,isAdmin,recipeCreate);

// display all recipe

reciepeRoute.get("/allReciepep",allreciepePage);
reciepeRoute.get("/allReciepe",displayRecipe);

// display particular recipe

reciepeRoute.get("/singleReciepep",singlereciepePage);
reciepeRoute.get("/singleReciepe",isValid,isAdmin,singleRecipe);

reciepeRoute.delete("/dlt/:id",deleteReciepe);

reciepeRoute.patch("/update/:id",isAdmin,updateReciepe);

module.exports = { reciepeRoute };
