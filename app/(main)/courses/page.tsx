// app/(main)/courses/page.tsx
import {getAllCourses}  from '@/lib/queries';

const CoursesPage = async () => {
  const data = await getAllCourses();

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Courses</h1>
      <List 
        courses={ }
      />

    </div>
  );
};

export default CoursesPage;
