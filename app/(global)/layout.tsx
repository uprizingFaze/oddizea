import Navigation from "@/components/navbar/Navbar";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main className="pt-14">{children}</main>
    </>
  );
}
