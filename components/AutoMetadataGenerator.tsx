import { useState } from "react";

export default function AutoMetadataGenerator() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleGenerate = async () => {
    try {
      setResult("Generating...");
      // simulate API call
      setTimeout(() => {
        setResult(`ipfs://bafy...generated-metadata-based-on-${prompt}`);
      }, 1500);
    } catch (err) {
      setResult("Failed to generate metadata.");
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Auto Metadata Generator</h2>
      <input
        className="p-2 w-full rounded text-black mb-4"
        placeholder="Describe your NFT (e.g., pixel fox with glasses)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300"
        onClick={handleGenerate}
      >
        Generate
      </button>
      {result && <p className="mt-4 text-green-400">{result}</p>}
    </div>
  );
}
