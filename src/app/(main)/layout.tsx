import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import Sidebar from "@/components/layout/Sidebar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="flex flex-col md:pl-[260px] min-h-screen relative">
        <Header />
        <main className="flex-1 pb-[70px] md:pb-0">
          {children}
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
