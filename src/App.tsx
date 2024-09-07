import { Container } from "./components/container";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="h-[300vh]">
          <Container>hero content</Container>
        </div>
        <div>
          <Container>USPs</Container>
        </div>
        <div>
          <Container>3 column layout</Container>
        </div>
        <div>
          <Container>carousel with posters</Container>
        </div>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
