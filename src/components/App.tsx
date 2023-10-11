import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className="min-h-screen bg-slate-300 font-wotfard">
      <Header />
      <Main />
      <footer>
        <div className="mx-auto flex max-w-[min(1280px,calc(100%-32px))] items-center justify-center py-4">
          <p className="text-[#24292f]">
            Made with ♥ by{" "}
            <a
              href="https://github.com/puryazarchiny"
              target="_blank"
              className="font-caveat text-xl font-bold focus-visible:rounded focus-visible:outline-double focus-visible:outline-2 focus-visible:outline-slate-950"
            >
              Purya Zarchiny
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
