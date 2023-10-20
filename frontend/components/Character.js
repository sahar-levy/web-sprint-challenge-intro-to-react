import React, { useState } from 'react'

function Character({ name, homeworld }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [showHomeworld, setHomeworld] = useState(false) 
  //set to false so that upon first render the showHomeworld will be hidden

  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeworld = () => {
    setHomeworld(!showHomeworld)
  }

  return (
    <div className='character-card' onClick={toggleHomeworld}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name' >{name}</h3>
      {showHomeworld && ( 
        // if showHomeworld is true, it displays the content; otherwise, it remains hidden.
        <p>
          <span className='character-planet'>{homeworld}</span>
        </p>
      )}
    </div>
  )
}

export default Character
