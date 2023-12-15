'use client';
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";

export default function SearchBar() {
  const {data, isLoading, isError, refetch} = useQuery({
    enabled: false,
    queryKey: ['weatherData'],
    queryFn: async () => {
      const data = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},US&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`);
      return data;
    }
  })
  console.log(process.env.NEXT_PUBLIC_WEATHER_API_KEY, "APIKEY")
  const [zipCode, setZipCode] = useState<number>();
  const handleSetZipCode = (e:  React.ChangeEvent<HTMLInputElement>) => setZipCode(e.target.valueAsNumber);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
  }
  return <form className='flex justify-center' onSubmit={handleSubmit}>
    <input type='number' className='border-2 border-black' value={zipCode} onChange={handleSetZipCode}/>
    <button className='border-2 border-black px-2'>Go</button>
  </form>
}