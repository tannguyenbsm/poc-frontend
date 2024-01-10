export default function Home() {
  const env = process.env

  return (
    <main style={{display: 'flex', 'flexWrap': 'wrap', 'flexDirection': 'column', 'alignContent': 'space-around'}}>
      Hello FDT Team
      <p>ENV list</p>
      {env.API_BASE_URL}
    </main>
  )
}
