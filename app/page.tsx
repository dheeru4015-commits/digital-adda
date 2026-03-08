import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      height:"100vh",
      fontFamily:"Arial"
    }}>
      
      <h1 style={{fontSize:"48px", marginBottom:"10px"}}>
        Digital Adda
      </h1>

      <p style={{color:"gray", marginBottom:"40px"}}>
        Your Apartment. Your Community.
      </p>

      <div>
        <Link href="/feed">
          <button style={{
            padding:"12px 24px",
            marginRight:"10px",
            background:"#2563eb",
            color:"white",
            border:"none",
            borderRadius:"6px",
            cursor:"pointer"
          }}>
            Join Apartment
          </button>
        </Link>

        <button style={{
          padding:"12px 24px",
          border:"1px solid #ddd",
          borderRadius:"6px",
          cursor:"pointer"
        }}>
          Login
        </button>
      </div>

    </main>
  );
}