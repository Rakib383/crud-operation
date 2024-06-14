import { Router } from "express";

import { getAllContact,getSingleContact,createContact,updateContact,deleteContact } from "./controller.js";

const router = Router()

router.get('/',getAllContact)
router.get('/:id',getSingleContact)
router.get('/delete/:id',deleteContact)
router.post('/',createContact)
router.put('/:id',updateContact)
// router.delete('/:id',deleteContact)

export default router
