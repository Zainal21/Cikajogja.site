// import Header from "../Header";
import Footer from "../footer";
import Header from "../header";
export default function Layout({ children }) {
  return (
    <main>
      <Header />
      <main>{children}</main>
      <Footer />
    </main>
  );
}
