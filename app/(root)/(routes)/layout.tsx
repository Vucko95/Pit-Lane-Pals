import { Navbar } from "@/app/components/Navbar"
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="h-full">
            <Navbar/>
            <main className="md:p-20 pt-16 h-full">
                {children}
            </main>
        </div>

    )
  }
  