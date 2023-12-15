import Search from "./components/Search";

export default function Home() {
  return <div className='flex justify-center items-center flex-col'>
    <h1 className='font-bold'>Welcome to Weather App!</h1>
    <div>
      <p>Enter your zip code to retrieve the weather:</p>
      <Search/>
    </div>
  </div>
}
