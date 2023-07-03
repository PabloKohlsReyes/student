import express from 'express';

import { getStudent,getStudents,createStudents,updateStudent,deleteStudent } from '../controller/StudentController.js';

const router = express.Router();

router.route('/').get(getStudents).post(createStudents);
router.route('/:id').get(getStudent).put(updateStudent).delete(deleteStudent);

export default router;