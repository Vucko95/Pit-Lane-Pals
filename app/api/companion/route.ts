// import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import {prismadb} from "@/app/lib/prismadb";

// export async function POST(req: Request,{ params }: { params: { companionId: string } }) 
export async function POST(req: Request) 
{
  try {
    const body = await req.json();
    const user = {
      id: "1",
      firstName: "TestUser", 
    };
    const {  name, description, instructions, seed, categoryId } = body;

    // if (!params.companionId) {
    //   return new NextResponse("Companion ID required", { status: 400 });
    // }

    if (!user || !user.id || !user.firstName) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if ( !name || !description || !instructions || !seed || !categoryId) {
      return new NextResponse("Missing required fields", { status: 400 });
    };

    // const isPro = await checkSubscription();

    // if (!isPro) {
    //   return new NextResponse("Pro subscription required", { status: 403 });
    // }

   const companion = await prismadb.companion.create({
      data: {
        categoryId,
        userId: user.id,
        userName: user.firstName,
        name,
        description,
        instructions,
        seed,
      },
    });
    // console.log('IT ARRIVED')
    return NextResponse.json(companion);
    // return NextResponse.json('test');
  } catch (error) {
    console.log("[COMPANION_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
