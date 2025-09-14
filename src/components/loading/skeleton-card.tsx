// src/components/loading/skeleton-card.tsx
// This is a component that shows a loading state with a skeleton card

import { Skeleton } from "@/components/ui/skeleton";


export default function SkeletonCard() {
    return (
        <div className="flex items-center space-x-4 p-4 border rounded-lg">
            <Skeleton className="w-12 h-12 rounded-full" />
            <div className="space-y-2 flex-1">
                <Skeleton className="w-3/4 h-4" />
                <Skeleton className="w-1/2 h-4" />
            </div>
        </div>
    );
}