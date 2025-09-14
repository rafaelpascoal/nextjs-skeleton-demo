import SkeletonCard from "@/components/loading/skeleton-card";

export default function SkeletonPage() {
    return (
        <main className="max-w-md mx-auto mt-10 space-y-4">
            <h1 className="text-xl font-semibold">Loading Example</h1>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </main>
    );
}