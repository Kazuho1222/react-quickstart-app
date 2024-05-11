"use client"

import Image from "next/image";
import MyButton from "./components/MyButton";
import AboutPage from "./components/AboutPage";
import Profile from "./components/Profile";
import ShoppingList from "./components/Products";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Welcome to my app</h1>
      <AboutPage />
      <img className="avatar" />
      <Profile />
      <ShoppingList />
      <div>
        <h1>Counters that update separately</h1>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
      </div>
    </div>
  );
}
