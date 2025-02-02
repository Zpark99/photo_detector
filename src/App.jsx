import Footer from "./components/footer.jsx";
import Header from "./components/nav.jsx"
import DragDrop from "./components/DragDrop.jsx";
import "./App.css"

const App = () => {
  return (
    <div className="layout">
      <Header/>
      <div className="main">
        <DragDrop/>
      </div>
      <Footer />
    </div>
  );
};
  

export default App;
