import Sidebar from "../ui/sidebar/Sidebar";

export const metadata = {
  title: "Book Bridge - Buy or Rent Books",
  description: "A Online Book Store",
};

export default function BooksLayout({ children }) {
  return (
    <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row min-h-screen bg-slate-100">
      <Sidebar />
      <div className="flex flex-wrap p-2 justify-center">{children}</div>
    </div>
  );
}
