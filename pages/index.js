// import Head from 'next/head'
// import Link from 'next/link'
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Counter from '../Components/Counter';
import { useSelector } from 'react-redux';


export default function Home() {
  const count = useSelector((state) => state.counter.value);
  return (
    <>
    <div>
      <h1>hello world</h1>
      <p>using material UI liberary</p>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
    </div>
    <div>
      <h3>Redux data display</h3>
      <Counter />
      
{/* this diplay counter app data*/}
    </div>
    </>
  )
}