const express = require('express');
const ListsController = require('./../controllers/lists.controller');

const listsController = new ListsController();

const router = express.Router();

router.get("/", listsController.getLists);
router.get("/:id", listsController.getList);
router.post("/add", listsController.createList);
router.put("/:id", listsController.editList);
router.delete("/:id", listsController.deleteList);

module.exports = router;


