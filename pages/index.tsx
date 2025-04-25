import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to MintStars</h1>
      <p className="mb-6 text-center">A simple NFT generator & minting app on Monad Testnet.</p>
      <Link href="/mint">
        <a className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
          Go to Mint Page
        </a>
      </Link>
    </main>
  );
}
