import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
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
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON or Server Error" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const category = await prisma.category.findMany();

    return NextResponse.json(category, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON or Server Error" }, { status: 500 });
  }
}
