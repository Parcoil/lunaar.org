import React from "react";
import Footer from "../components/Footer";
import RngText from "../components/RngText";
import Logo from "../components/Logo";
import SearchForm from "../components/SearchForm";

function Home() {
  return (
    <>
      <main id="main">
        <div className="home">
          <Logo width="70" />
          <h1 className="lsans main-logo">native.</h1>
          <RngText className="mb-5" />
          <SearchForm />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
