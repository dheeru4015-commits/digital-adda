"use client";
import { useState, useEffect } from "react";

export default function Feed() {

  const [posts, setPosts] = useState<any[]>([]);
  const [message, setMessage] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [name, setName] = useState("");
  const [flat, setFlat] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("residentName");
    const storedFlat = localStorage.getItem("flatNumber");

    if (storedName) setName(storedName);
    if (storedFlat) setFlat(storedFlat);
  }, []);

  const addPost = () => {

    if (!message) return;

    const newPost = {
  author: anonymous ? "Anonymous Resident" : `${name} (${flat})`,
  text: message,
  votes: 0
};

    setPosts([newPost, ...posts]);
    setMessage("");
  };

  return (
    <main style={{padding:40}}>

      <h1>Apartment Feed</h1>

      <div style={{marginTop:20}}>
        <input
          placeholder="Write something..."
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          style={{padding:10,width:300}}
        />

        <button onClick={addPost} style={{marginLeft:10}}>
          Post
        </button>

        <div style={{marginTop:10}}>
          <label>
            <input
              type="checkbox"
              checked={anonymous}
              onChange={(e)=>setAnonymous(e.target.checked)}
            />
            Post as Anonymous
          </label>
        </div>
      </div>

      <div style={{marginTop:30}}>
        {posts.map((post,i)=>(
  <div
    key={i}
    style={{
      border:"1px solid #ddd",
      padding:15,
      marginTop:10,
      borderRadius:6
    }}
  >

    <div style={{display:"flex",alignItems:"center"}}>

      <button
        onClick={()=>{
          const updated = [...posts];
          updated[i].votes += 1;
          setPosts(updated);
        }}
        style={{marginRight:10}}
      >
        ⬆️
      </button>

      <b>{post.votes}</b>

      <b style={{marginLeft:10}}>{post.author}</b>

    </div>

    <p>{post.text}</p>

  </div>
))}
      </div>

    </main>
  );
}
