import { redirect } from "next/navigation";
// import { auth, redirectToSignIn } from "@clerk/nextjs";
// import {ChatClient} from "@/app/(chat)/(routes)/chat/[chatId]/components/client"
import {prismadb} from "@/app/lib/prismadb";

import { ChatClient } from "./components/client";

interface ChatIdPageProps {
  params: {
    chatId: string;
  }
}

const ChatIdPage = async ({
  params
}: ChatIdPageProps) => {
//   const { userId } = auth();

//   if (!userId) {
//     return redirectToSignIn();
//   }

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.chatId
    },
    include: {
      messages: {
        orderBy: {
          createdAt: "asc"
        },
        // where: {
        //   userId,
        // },
      },
      _count: {
        select: {
          messages: true,
        }
      }
    }
  });


  if (!companion) {
    return redirect("/");
  }

  return (
    <div>
      {/* <p>test</p> */}
    <ChatClient companion={companion} />
    </div>
  );
}
 
export default ChatIdPage;