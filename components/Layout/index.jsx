import Header from "../Header";
import Footer from "../Footer";
export default function Layout({ children }) {
  return (
    <main className="bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </main>
  );
}
