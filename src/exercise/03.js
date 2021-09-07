// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

function Name() {
  console.log('   😎 name renders')
  const [name, setName] = React.useState('')
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
    </div>
  )
}

function FavoriteAnimal() {
  console.log('   🐱 animal renders')
  const [animal, setAnimal] = React.useState('')
  return (
    <>
      <div>
        <label htmlFor="animal">Favorite Animal: </label>
        <input
          id="animal"
          value={animal}
          onChange={event => setAnimal(event.target.value)}
        />
      </div>
      <Display animal={animal} />
    </>
  )
}

function Display({animal}) {
  return <div>{`Your favorite animal is: ${animal}!`}</div>
}

function App() {
  console.log('💻 app rerendered...')
  return (
    <form>
      <Name />
      <FavoriteAnimal />
    </form>
  )
}

export default App
