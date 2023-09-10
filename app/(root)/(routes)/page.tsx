import {prismadb} from "@/app/lib/prismadb"
import { Categories } from "@/app/components/categories";
import { Companions } from "@/app/components/companions";

interface RootPageProps {
  searchParams: {
    categoryId: string;
    name: string;
  }
}


const RootPage =async ({
  searchParams}: RootPageProps) => {
  
  const data = await prismadb.companion.findMany({
    where: {
      categoryId: searchParams.categoryId,
      name: {
        search: searchParams.name
      }
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: {
          messages: true
        }
      }
    }
  })


  const categories = await prismadb.category.findMany();

  return (
    <div className="h-full p-4 space-y-2">
      <div className="flex flex-wrap  justify-center items-center h-full">
        <div className="md:w-4/5 w-full">
          <Categories data={categories} />
          <Companions data={data} />
        </div>
      </div>
    </div>
  )
}
export default RootPage;