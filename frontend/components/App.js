import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [planets, setPlanets] = useState([]);
  const [people, setPeople] = useState([]);

  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    Promise.all([axios.get(urlPeople), axios.get(urlPlanets)])
      .then(([resPeople, resPlanets ]) => {
        // console.log(resPeople, resPlanets )
        const peopleData = resPeople.data;
        const planetsData = resPlanets.data;

        const peopleWithPlanets = peopleData.map(person => {
          const planet = planetsData.find(planet => planet.id === person.homeworld)
          return {
            ...person,
            homeworld: planet.name
          }
        })

        setPeople(peopleWithPlanets)
      })
      .catch(err => console.log(err.message))
  }, [])

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {people.map(p => <Character key={p.id} name={p.name} homeworld={p.homeworld}/>)}
      
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
