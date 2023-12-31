// import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import {prismadb} from "@/app/lib/prismadb";
// import { checkSubscription } from "@/lib/subscription";

export async function PATCH(
  req: Request,
  { params }: { params: { companionId: string } }
) {
  try {
    const { companionId } = params;
    const body = await req.json();
    const user = {
        id: "1",
        firstName: "TestUser", 
      };
    const {  name, description, instructions, seed, categoryId } = body;

    if (!params.companionId) {
      return new NextResponse("Companion ID required", { status: 400 });
    }

    if (!name || !description || !instructions || !seed || !categoryId) {
      return new NextResponse("Missing required fields", { status: 400 });
    };


 

    const companion = await prismadb.companion.update({
        where: { id: companionId },
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

    return NextResponse.json(companion);
  } catch (error) {
    console.log("[COMPANION_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};

export async function DELETE(
    request: Request,
    { params }: { params: { companionId: string } }
  ) {
    try {
      const { companionId } = params;
  
      // const { userId } = auth();
      const userId = {
        id: "1",
      };
  
      if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
      }
  
      const companion = await prismadb.companion.delete({
        where: {
          id: companionId, 
        },
      });
  
      return NextResponse.json(companion);
    } catch (error) {
      console.log("[COMPANION_DELETE]", error);
      return new NextResponse("Internal Error", { status: 500 });
    }
  }