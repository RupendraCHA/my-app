import UserProfile from "./Components/UserProfile/index"
import './App.css';

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob Jones",
    role: "Frontend Developer"
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Esther Howard",
    role: "DevOOPS Engineer"
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd Miles",
    role: "Wb Developer"
  },
  {
    uniqueNo: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Esther Devon Lane",
    role: "Software Engineer"
  }
]

const App = () => {
  return (
    <div className="users-app-container">
      <h1 className="title">USERS</h1>
      <ul className="user-list-container">
        {userDetailsList.map(eachItem => (
          <UserProfile userDetails={eachItem} key={eachItem.uniqueNo}/>
        ))}
      </ul>
    </div>
  )
}
  

export default App;
