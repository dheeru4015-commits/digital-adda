"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Join() {

  const router = useRouter();

  const [name,setName] = useState("");
  const [flat,setFlat] = useState("");
  const [apartment,setApartment] = useState("");

  const joinCommunity = () => {

    localStorage.setItem("residentName",name);
    localStorage.setItem("flatNumber",flat);
    localStorage.setItem("apartmentName",apartment);

    router.push("/feed");
  }

  return (
    <main style={{padding:40}}>

      <h1>Join Your Apartment</h1>

      <div style={{marginTop:20}}>
        <input
          placeholder="Your Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          style={{display:"block",marginBottom:10,padding:10}}
        />

        <input
          placeholder="Flat Number"
          value={flat}
          onChange={(e)=>setFlat(e.target.value)}
          style={{display:"block",marginBottom:10,padding:10}}
        />

        <input
          placeholder="Apartment Name"
          value={apartment}
          onChange={(e)=>setApartment(e.target.value)}
          style={{display:"block",marginBottom:10,padding:10}}
        />

        <button onClick={joinCommunity}>
          Join Community
        </button>
      </div>

    </main>
  );
}