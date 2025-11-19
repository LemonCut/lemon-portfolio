export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="text-white text-4xl font-bold">
        Christian O'Connor
      </div>
      

      <div className="text-white text-center">
        math-cs @ ucsd | computing enthusiast
      </div>

      <div className="h-8" />

      <div className="text-white">
        uh oh, my portfolio website is wip
        <br />
        <br />
        for now, check out my github:{" "}
        <a
          href="https://github.com/LemonCut"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          github.com/LemonCut
        </a>
        <br />
        and a couple of my projects:{" "}
        <a
          href="https://trees.lemoncut.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          trees
        </a>
        ,{" "}
        <a
          href="https://cards.lemoncut.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          cards
        </a>
      </div>
    </main>
  );
}
