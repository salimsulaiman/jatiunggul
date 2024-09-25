import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, categoryId, price, desc, pictures } = await request.json();

    if (!name || !categoryId || !price || !desc || !Array.isArray(pictures)) {
      return NextResponse.json({ error: "Missing or invalid data" }, { status: 400 });
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        categoryId,
        price,
        desc,
        pictures,
      },
    });

    return NextResponse.json({ message: "Product Created", data: newProduct }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON or Server Error" }, { status: 500 });
  }
}
