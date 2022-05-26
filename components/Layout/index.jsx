// import Header from "../Header";
import Footer from "../Footer";
import Header from "../Header";
export default function Layout({ children }) {
  return (
    <main>
      <Header />
      <main>{children}</main>
      <Footer />
    </main>
  );
}
