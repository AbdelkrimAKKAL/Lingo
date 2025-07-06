"use server"

import db from "@/lib/db";
import { getCourseById, getUserProgress } from "@/lib/queries";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const upsertUserProgress = async(courseId: number) =>{
    const { userId } = await auth();
    const user = await currentUser();

    if(!userId || !user) {
        throw new Error("Unauthorized");
    }

    const course = await getCourseById(courseId);
    if(!course) {
        throw new Error("Course not found");
    }
    
    // if(!course.units.length || !course.units[0].lessons.length) {
    //     throw new Error("Course has no units or lessons");
    // }

    const existingUserProgress = await getUserProgress();

    if(existingUserProgress) {
        // Update existing user progress
        await db.query(
            'UPDATE userProgress SET activeCourseId = ? WHERE userId = ?',
            [courseId, userId]
        );
    } else {
        // Create new user progress
        await db.query(
            'INSERT INTO userProgress (userId, activeCourseId) VALUES (?, ?)',
            [userId, courseId]
        );
    }
}