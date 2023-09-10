import {Menu} from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/app/components/ui/sheet"
import { Sidebar } from "@/app/components/sidebar"

  export function MobileSidebar() {
    return ( 
            <Sheet>
            <SheetTrigger className="md:hidden pr-4">
                <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-secondary pt-10">
                {/* <Sidebar/> */}
            </SheetContent>
            </Sheet>

    )}