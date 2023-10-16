import Body from "./containers/Body";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

document.body.style.cssText = `
  margin-left: calc(100vw - 100%);
  background-color: #cbd5e1;
`;

function App() {
  return (
    <Body classes="bg-slate-300 font-wotfard">
      <Header />
      <Main />
      <Footer />
    </Body>
  );
}

export default App;
