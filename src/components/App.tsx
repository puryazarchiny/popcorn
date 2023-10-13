import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

document.body.style.cssText = `
  margin-left: calc(100vw - 100%);
  background-color: #cbd5e1;
`;

function App() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-slate-300 font-wotfard">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
