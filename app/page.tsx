import Link from "next/link";

export default function Home() {
  return (
    <main style={{padding:40}}>
      <h1>Digital Adda</h1>
      <p>Your Apartment. Your Community.</p>

      <div style={{marginTop:20}}>
        <Link href="/feed">
          <button style={{marginRight:10}}>Join Apartment</button>
        </Link>

        <button>Login</button>
      </div>
    </main>
  );
}