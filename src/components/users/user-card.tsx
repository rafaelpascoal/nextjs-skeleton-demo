// src/components/users/user-card.tsx
// This is a component that shows a user card

import Avatar from "../ui/avatar";

type UserCardProps = {
    name: string;
    email: string;
}

export default function UserCard({ name, email }: UserCardProps) {
    return (
        <div className="flex items-center space-x-4 p-4 border rounded-lg">
            <Avatar name={name} size="md" />
            <div className="flex-1">
                <p className="font-medium">{name}</p>
                <p className="text-sm text-muted-foreground">{email}</p>
            </div>
        </div>  
    )
}