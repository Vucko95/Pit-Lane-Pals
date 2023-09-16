import { Navbar } from "@/app/components/Navbar"
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="h-full">
            <Navbar/>
            <main className="md:p-2 pt-2 h-full">
                {children}
            </main>
        </div>

    )
  }
  