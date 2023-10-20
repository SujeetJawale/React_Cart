import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList'
import Footer from './Components/Footer'

function App() {
  const productList = [
    {
      name: "Iphone12",
      price: "50k",
      quantity: "2",
    },
    {
      name: "Iphone13",
      price: "60k",
      quantity: "2",
    },
    {
      name: "Iphone14",
      price: "70k",
      quantity: "2",
    }
  ]
  return (
    <>
      <h1>Sujeet's Cart</h1>
      <Navbar/>
      <main className='container'>
        <ProductList productList={productList}/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
