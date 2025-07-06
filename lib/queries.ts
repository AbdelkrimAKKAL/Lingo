// lib/queries.ts
import { auth } from '@clerk/nextjs/server';
import db from './db';
import { Course, UserProgress } from '@/types/course';

export const getUserProgress = async (): Promise<UserProgress | null> => {
    const { userId } = await auth();
  
    if (!userId) return null;
  
    const [rows] = await db.query('SELECT * FROM userProgress WHERE userId = ?', [userId]);
  
    const data = rows as UserProgress[];
  
    return data[0] || null;
  };

export const getAllCourses = async (): Promise<Course[]> => {
  const [rows] = await db.query('SELECT * FROM courses');
  return rows as Course[];
};

export const getCourseById = async (courseId: number)=> {
  const [rows] = await db.query('SELECT * FROM courses WHERE id = ?', [courseId]);
  const data = rows as Course[];
  return data[0] || null;
};
