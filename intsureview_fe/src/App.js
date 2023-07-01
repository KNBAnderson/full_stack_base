import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import SignupForm from './components/SignupForm';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SignupForm />
      <Footer />
    </div>
  );
}

export default App;
