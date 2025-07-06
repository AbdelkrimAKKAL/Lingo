import { Header } from "./header";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import db from '@/lib/db';
import { getUserProgress } from "@/lib/queries";
import { redirect } from "next/navigation";

const LearnPage = async () =>{
    const UserProgressData = await getUserProgress();

    if(!UserProgressData || !UserProgressData.activeCourseId) {
        redirect('/courses');
    }
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress 
                    activeCourse={{ title:"Spanish", imageSrc:"/es.svg"}}
                    hearts={5}
                    points={100}
                    hasActiveSubscription={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                <Header title="Spanish"/>
                
            </FeedWrapper>
        </div>
    )
}
export default LearnPage;