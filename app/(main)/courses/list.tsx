"use client";

import { Course, UserProgress } from '@/types/course';
import { Card } from './card';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { upsertUserProgress } from '@/actions/user-progress';


type Props = {
    courses: Course[]  
    activeCourseId?: UserProgress['activeCourseId'] | null;
};

export const List = ({ courses, activeCourseId }: Props) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onClick = (id: number) => {
    if (pending) return;

    if(id === activeCourseId) {
      return router.push('/learn');
    }

    startTransition(() => {
      upsertUserProgress(id);
      router.push('/learn');
    });
  }

  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-
    [repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card 
          key={course.id}
          id={course.id}
          course={course.title}
          imageSrc={course.image_src}
          onClick={onClick}
          disabled={false}
          isActive={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};
