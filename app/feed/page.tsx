"use client";
import { useState } from "react";

export default function Feed() {
  const [posts, setPosts] = useState([
    { name: "Ravi – B203", text: "Selling study table ₹1500" },
    { name: "Anonymous Resident", text: "Water pressure low today?" },
  ]);

  const [message, setMessage] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const addPost = () => {
    if (!message) return;

    const newPost = {
      name: anonymous ? "Anonymous Resident" : "Resident – A101",
      text: message,
    };

    setPosts([newPost, ...posts]);
    setMessage("");
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Raheja Residency Feed</h1>

      <div style={{ marginTop: 20 }}>
        <input
          placeholder="Write something..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ padding: 10, width: 300 }}
        />

        <button onClick={addPost} style={{ marginLeft: 10 }}>
          Post
        </button>

        <div style={{ marginTop: 10 }}>
          <label>
            <input
              type="checkbox"
              checked={anonymous}
              onChange={(e) => setAnonymous(e.target.checked)}
            />
            Post as Anonymous
          </label>
        </div>
      </div>

      <div style={{ marginTop: 30 }}>
        {posts.map((post, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #ddd",
              padding: 15,
              marginTop: 10,
              borderRadius: 6,
            }}
          >
            <b>{post.name}</b>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}