const express = require('express');
const studentController = require('./controller')
const router = express.Router();

router.get('/',studentController.getAll);
router.post('/',studentController.create);
router.get('/:id',studentController.getbyId);
router.put('/:id',studentController.update);
router.delete('/:id',studentController.remove);


module.exports=router;