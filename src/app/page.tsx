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
      <div className="mt-8">
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3U0Y29qYmh6ZXVvampjNHRwMXQ0Y2ZkcGpjMXRwamVkemVsODFvbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/rIbMIsLfwNosh82FSS/giphy.gif"
          alt="dancing dog"
          className="rounded-lg"
        />
      </div>
    </main>
  );
}
