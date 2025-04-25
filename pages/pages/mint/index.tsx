import { useState } from "react";

export default function MintPage() {
  const [uri, setUri] = useState("");
  const [status, setStatus] = useState("");

  const handleMint = async () => {
    try {
      setStatus("Minting...");
      // wallet & minting logic here (frontend only)
      setTimeout(() => {
        setStatus("Minted successfully!");
      }, 2000);
    } catch (error) {
      setStatus("Mint failed!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Mint Your NFT</h1>
      <input
        type="text"
        placeholder="Enter IPFS Metadata URI"
        value={uri}
        onChange={(e) => setUri(e.target.value)}
        className="text-black p-2 rounded-md mb-4 w-full max-w-md"
      />
      <button
        onClick={handleMint}
        className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-300 transition"
      >
        Mint NFT (0.1 MON)
      </button>
      {status && <p className="mt-4 text-green-400">{status}</p>}
    </div>
  );
}
