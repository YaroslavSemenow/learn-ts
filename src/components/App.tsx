export default function App() {
  const x = (y: number, z: number) => { 
    return y+z
  }

  return <div>{x(2,3)}</div>;
}
