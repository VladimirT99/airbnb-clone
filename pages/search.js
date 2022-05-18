import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router';
import {format} from 'date-fns'
import InfoCard from '../components/InfoCard';
import Mapa from '../components/Mapa';

function Search({searchResults}) {

  const router = useRouter();
  const {location, startDate, endDate, numberOfGuests} = router.query;
  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  console.log(searchResults);

  return (
    <div className='h-screen'>
        <Header placeholder={`${location} | ${range} | ${numberOfGuests} guests`}/>

        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className='text-xs'>300+ stays for {numberOfGuests} guests {range}</p>
                
                <h1 className='text-3xl mt-2 mb-6 font-semibold'>Stays in {location}</h1>
                
                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='button'>Cancellation flexibility</p>
                    <p className='button'>Type of place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms and beds</p>
                    <p className='button'>More filters</p>
                </div>
                <div className='flex flex-col'>
                  {searchResults.map((item) => (
                    <InfoCard 
                    key={item.img}
                    img = {item.img}
                    location = {item.location}
                    title={item.title}
                    description={item.description}
                    star={item.star}
                    price = {item.price}
                    total = {item.total}
                    />
                  ))}
                </div>
            </section>
            <section className='hidden xl:inline-flex xl:min-w-[600px]'>
              <Mapa/>
            </section>
        </main>

        <Footer/>
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then((res) => res.json());

  return {
    props: {
      searchResults
    }
  };
}