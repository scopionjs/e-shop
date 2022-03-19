import Head from "next/head";
import Image from "next/image";

import Nav from "../components/nav";
import Intro from "../components/intro";
import Category from "../components/category";
import Products from "../components/products";
import Deals from "../components/deals";
import NewsLetter from "../components/newsletter";
import Footer from "../components/footer";
export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Nav />
      <Intro />
      <Category />
      <Products />
      <Deals />
      <NewsLetter />
      <Footer />
    </div>
  );
}
