import Main from "./Pages/main";
import About from "./Pages/about";
import Navbar from "./Pages/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
    </div>
  );
}
