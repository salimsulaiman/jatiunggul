import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name } = await request.json();

  if (!name) {
    return NextResponse.json({ error: "Missing data" });
  }

  const newCategory = await prisma.category.create({
    data: {
      name,
    },
  });

  return NextResponse.json({ message: "Category Created", data: newCategory }, { status: 201 });
}
