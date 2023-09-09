import {SearchInput} from "@/app/components/search-input"
import {prismadb} from "@/app/lib/prismadb"
import { Categories } from "@/app/components/categories";

const RootPage =async () => {
  
  const categories = await prismadb.category.findMany();

  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
      <Categories data={categories} />
    </div>
  )
}
export default RootPage;