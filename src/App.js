import Body from "./Body";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main style={{ marginTop: "56px" }}>
        <Body />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
