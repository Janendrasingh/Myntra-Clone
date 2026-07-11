import Header from "./components/header";
import Footer from "./components/footer";
const bag = () => {
  return (
    <>
      <Header />
      <main>
        <div className="bag-page">
          <div className="bag-items-container"></div>
          <div className="bag-summary"></div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default bag;
