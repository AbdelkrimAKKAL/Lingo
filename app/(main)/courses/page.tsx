// app/(main)/courses/page.tsx
import {getAllCourses, getUserProgress}  from '@/lib/queries';
import { List } from './list';

const CoursesPage = async () => {
  const courses = await getAllCourses();
  const data = await getUserProgress();

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
        <h1 className="text-2xl font-bold text-neutral-700">Courses</h1>
        <List 
            courses={courses}
            activeCourseId={data?.activeCourseId}
        />
    </div>
  );
};

export default CoursesPage;
