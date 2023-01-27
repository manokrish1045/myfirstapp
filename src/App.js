// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
// import axios from "axios"
const API = "https://new-folder-ruddy.vercel.app/"
function App() {
  return (
    <div className="App">


      <PhoneList />
    </div>
  );
}
function PhoneList() {
  const [mobiles, setMobiles] = useState([])

  useEffect(() => {

    fetch(`${API}/mobiles1`)
      .then((data) => data.json())
      .then((mbs) => setMobiles(mbs))
    // async function Mobilelist() {
    //   let mobile = await window.fetch('http://localhost:4000/mobiles')
    //   let data = await mobile.json()

    //   console.log(data)
    // } Mobilelist()
  }, [])
  return <div className="phone-list-container">
    {mobiles.map((mb) => (<Phone mobile={mb} />))}
  </div>
}
function Phone({ mobile }) {
  // const mobile = {

  //   model: "OnePlus 9 5G",
  //   img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
  //   company: "Oneplus"

  // }
  return (
    <div className="phone-container">
      <img className="phone-picture" src={mobile.img} alt={mobile.model}></img>
      <h2 className="phone-name">{mobile.model}</h2>
      <p className="phone-company">{mobile.company}</p>

    </div>
  )
}

export default App;
