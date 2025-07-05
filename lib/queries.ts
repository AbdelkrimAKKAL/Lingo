import {db} from "./db"
import { cache } from "react";

export const getAllCourses = cache( async() => {
    const [rows] = await db.query('SELECT * FROM courses');
    return rows;
});
