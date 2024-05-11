import Image from "next/image";
import MyButton from "./components/MyButton";
import AboutPage from "./components/AboutPage";
import Profile from "./components/Profile";
import ShoppingList from "./components/Products";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
      <img className="avatar" />
      <Profile />
      <ShoppingList />
    </div>
  );
}
