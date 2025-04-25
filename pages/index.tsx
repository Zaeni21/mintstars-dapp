import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to MintStars</h1>
      <p className="mb-4 text-center max-w-lg">
        MintStars is a simple NFT generator on Monad Testnet where you can mint images with IPFS metadata.
      </p>
      <Link
        href="/mint"
        className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-300 transition"
      >
        Go to Mint Page
      </Link>
    </main>
  );
}
