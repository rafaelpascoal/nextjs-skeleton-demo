// src/app/users/page.tsx
// This is the /users route that shows a list of users

"use client"

import UserCard from "@/components/users/user-card";
import SkeletonCard from "@/components/loading/skeleton-card";
import { useEffect, useState } from "react";

// Type for the user object
type User = {
    id: number;
    name: string;
    email: string;
}

// Main component
export default function UsersPage() {
    // State for the users
    const [users, setUsers] = useState<User[] | null>(null)

    // Fetch the users from the API
    useEffect(() => {
        fetch("/api/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
    }, []);

    // Render the component
    return (
        <main className="max-w-md mx-auto mt-10 space-y-4">
            <h1 className="text-xl font-semibold">Users</h1>
            {!users ? (
                <>
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </>
            ) : (
                users.map((user) => (
                    <UserCard key={user.id} name={user.name} email={user.email} />
                ))
            )}
        </main>
    )
}
