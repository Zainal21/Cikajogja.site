import Header from "../Header";
import Footer from "../Footer";
export default function Layout({ children }) {
  return (
    <main className="bg-gray-100">
      <Header />
      <main>{children}</main>
      <Footer />
    </main>
  );
}
