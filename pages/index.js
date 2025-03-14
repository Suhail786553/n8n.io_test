// pages/index.js
import Navbar from "./components/Navbar";
import Header from "./Home/Header";
import Tech from "./Home/Tech";
import ImageContent from './Home/imgContent';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Tech/>
      <ImageContent/>
    </div>
  );
}
