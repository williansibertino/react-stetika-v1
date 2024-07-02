import './App.css';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Header from './components/Header';
import ListagemItens from './components/ListagemItens';
import Main from './components/ListagemItens';



function App() {
  return (
    <div>
      <Header />
      <Filter />
      <ListagemItens />
      <Footer />
    </div>
  );
}

export default App;
