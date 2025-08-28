"use client";

import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Project />
    </>
  );
}
