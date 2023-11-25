import './App.css'

let name: string = 'Mikyle'
let age: number | string

let printName: (name: string) => void

let personName: unknown

let printName2: (name: string) => never

let isStudent: boolean
let hobbies: number[]
let role: [number, string]

// type Person = {
//   name: string
//   age?: number
// }

// let person: Person = {
//   name: 'Mikyle',
// }

// let lotsOfPeople: Person[]

type X = {
  a: string
  b: number
}

type Y = X & {
  c: string
  d: number
}

let y: Y = {
  a: 'hello',
  b: 2,
  c: 'efdats',
  d: 42,
}

interface Person {
  name: string
  age?: number
}

interface Guy extends Person {
  profession: string
}

function App() {
  return (
    <div className='App'>
      <p>Hello World</p>
    </div>
  )
}

export default App
