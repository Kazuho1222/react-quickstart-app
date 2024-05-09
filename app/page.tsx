import Image from "next/image";
import MyButton from "./components/MyButton";
import AboutPage from "./components/AboutPage";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
    </div>
  );
}
