import HomeBtn from "@/components/HomeBtn";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 px-16">
      <HomeBtn />
      {children}
    </main>
  );
}
