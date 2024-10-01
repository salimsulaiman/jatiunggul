import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { productId } = await request.json();

    if (!productId) {
      return NextResponse.json({ error: "Missing or invalid data" }, { status: 400 });
    }

    const newPopularProduct = await prisma.popularProduct.create({
      data: {
        productId,
      },
    });

    return NextResponse.json({ message: "Popular Product Created", data: newPopularProduct }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON or Server Error" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const popularProduct = await prisma.popularProduct.findMany({
      include: {
        product: true,
      },
    });

    return NextResponse.json(popularProduct, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON or Server Error" }, { status: 500 });
  }
}
