import { redirect } from "next/navigation";
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


  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.chatId
    },
    include: {
      messages: {
        orderBy: {
          createdAt: "asc"
        },

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
    <ChatClient companion={companion} />
    </div>
  );
}
 
export default ChatIdPage;