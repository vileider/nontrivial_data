"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
const[oilArr, setOilArr] = useState([])

useEffect(() => {
  fetch('http://localhost:3000/api/gold')
  .then(res => res.json())
  .then(data => setOilArr(JSON.parse(data)))
  .catch(err => console.log(err))
},[])
console.log(oilArr)
  return (
    <main className={styles.main}>
      {JSON.stringify(oilArr[0])}
    </main>
  )
}
