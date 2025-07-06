// types/course.ts (optional but clean)
export type Course = {
    id: number;
    title: string;
    image_src: string;
  };
  
export type UserProgress = {
    userId: number;
    userName: string;
    userImageSrc: string;
    activeCourseId: number;
    hearts: number;
    points: number;
};