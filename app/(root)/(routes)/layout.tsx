import { Navbar } from "@/app/components/Navbar"
import { Sidebar } from "@/app/components/sidebar"
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="h-full">
            <Navbar/>
            <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0 bg-secondary h-full">
            <Sidebar/>
            </div>
            <main className="md:pl-20 pt-16 h-full">
                {children}
            </main>
        </div>

    )
  }
  