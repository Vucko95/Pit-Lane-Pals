"use client";
import qs from "query-string";
import { Category } from "@prisma/client"
import { useRouter, useSearchParams } from "next/navigation";
import {cn} from "@/app/lib/utils"

interface CategoriesProps {
    data: Category[];
}


export const Categories = ( { data }: CategoriesProps) => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const categoryId = searchParams.get("categoryId");
  
    const onClick = (id: string | undefined) => {

      const query = { categoryId: id };
      const url = qs.stringifyUrl({
        url: window.location.href,
        query
      }, { skipNull: true });
  
      router.push(url);
    };
  




    return (
      <div className="w-full  space-x-2 flex flex-wrap justify-center items-center p-1 ">
        {
          <button onClick={() => router.push("/companion/new")}
           className={cn( ` flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 m-1 md:py-3 rounded-md bg-primary/10 hover:opacity-75 transition `, !categoryId ? "bg-primary/10" : "bg-primary/5 border-orange-500 border-2" )} >
             Create your F1 Persona  </button>
        }
        {data.map((item) => (
          <button onClick={() => onClick(item.id)} className={cn( ` flex items-center text-center text-xs md:text-sm px-2 md:px-4 m-1 py-2 md:py-3 rounded-md bg-primary/10 hover:opacity-75 transition `, item.id === categoryId ? "bg-primary/20" : "bg-primary/10" )} key={item.id} > {item.name} </button>
        ))}
      </div>
    );
}