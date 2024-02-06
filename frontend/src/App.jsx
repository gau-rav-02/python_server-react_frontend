import React, {useState, useEffect} from 'react'

function App() {
  
  const [data, setData] = useState([]);
 
  useEffect(() => {
    fetch("http://localhost:5000/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>
      {
        data.members? (
          data.members.map((member, i) => (
            <p key={i}>{member}</p>
          ))
        ) 
        : 
        (
          <p>Loading...</p>
        ) 
      }
    </div>
  )
}

export default App