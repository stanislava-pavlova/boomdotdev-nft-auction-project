// import Example from "../src/components/example/Example";
import Header from '../src/components/header/Header';
import Trending from '../src/components/trending/Trending';
import Auctions from '../src/components/auctions/Auctions';
import How from '../src/components/how/How';
import Footer from '../src/components/footer/Footer';

export default function Index() {
  return (
    <>
      <Header />
      <Trending />
      <Auctions />
      <How />
      <Footer />
    </>
  );
}
