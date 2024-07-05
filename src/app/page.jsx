'use client'
import Main from "@/components/Main";
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
        <Main component={component}/>
    </>
  );
}
