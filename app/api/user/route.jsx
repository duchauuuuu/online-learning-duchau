import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
    const{email, name} = await req.json()

    // user ton tai
    const user = await db.select().from(usersTable).where(eq(usersTable.email, email));

    // neu k ton tai thi them moi
    if(user?.length === 0) {
        const result = await db.insert(usersTable).values({
            name:name,
            email:email,
        }).returning(usersTable)
        console.log("result", result)
        return NextResponse.json(result)
    }
    return NextResponse.json(user[0])  
}