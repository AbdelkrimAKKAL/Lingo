"use client";

import { Course, UserProgress } from '@/types/course';
import { Card } from './card';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { upsertUserProgress } from '@/actions/user-progress';
import { toast } from 'sonner';


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
      upsertUserProgress(id)
        .then(() => {
          router.push('/learn'); // ✅ only runs if update succeeded
        })
        .catch(() => {
          toast.error("Something went wrong"); // ✅ show error if failed
        });
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
          disabled={pending}
          isActive={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};
