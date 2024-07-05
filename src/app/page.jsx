'use client'
import Header from "@/components/Signup";
import { useState } from "react";

export default function Home() {
  const [component,setComponent] = useState('')
  const val = (value) =>{
    setComponent(value)
  }
  console.log(component);
  return (

    <>
        <Header val={val}/>
    </>
  );
}
