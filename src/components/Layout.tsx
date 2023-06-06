import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="container flex filter justify-center w-auto">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
