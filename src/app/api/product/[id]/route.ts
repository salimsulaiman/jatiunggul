import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
      include: {
        category: true,
      },
    });

    if (!product) {
      return NextResponse.json({ error: "Data not found" }, { status: 404 });
    }
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON or Server Error" }, { status: 500 });
  }
}
