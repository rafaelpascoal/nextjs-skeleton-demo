// src/app/api/users/route.ts
// This is a mock API route that returns a list of users with a 2 second delay
'use server'

import { NextResponse } from "next/server";

// Function to delay the response and show a loading state with skeleton cards
async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function GET() {
    await delay(2000) // 2 seconds delay

    // Mock users data
    const users = [
        { id: 1, name: "John Doe", email: "john.doe@example.com"},
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com"},
        { id: 3, name: "Jim Beam", email: "jim.beam@example.com"},
        { id: 4, name: "Jill Johnson", email: "jill.johnson@example.com"},
        { id: 5, name: "Jack Daniels", email: "jack.daniels@example.com"},
    ]
    return NextResponse.json(users)
}