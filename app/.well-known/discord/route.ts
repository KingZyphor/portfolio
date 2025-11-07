import { NextResponse } from "next/server";

export async function GET() {
return new NextResponse("discord-verification=dh=69d4b08f48690277d0fb919a4289d22178bd8dfd", {
  headers: { "Content-Type": "text/plain" },
});
}