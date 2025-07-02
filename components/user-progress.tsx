import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {
    activeCourse: {imageSrc: string; title: string;};
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
}

export const UserProgress = ({
    activeCourse, hearts, points, hasActiveSubscription
}: Props) =>{
    return(
        <div className="flex items-center justify-between gap-x-2
        w-full">
            <Link href={"/courses"}>
                <Button>
                    <Image 
                    src={activeCourse.imageSrc} 
                    alt={activeCourse.title}
                    className="rounded-md border"
                    width={32}
                    height={32}
                    />

                </Button>
            </Link>
        </div>
    )
}