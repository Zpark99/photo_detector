import Footer from "./components/footer.jsx";
import Header from "./components/nav.jsx"

const App = () => {
  return (
    <div className="layout">
      <Header/>
      <main className="main">
        <div>
        <h2>레이아웃이다, 사진 업로드 할 곳</h2>
        </div>
      </main>
      <Footer />
    </div>
  )
}
  

export default App
