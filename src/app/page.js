"use client"
import Image from 'next/image'
import { selectAllItems } from './redux/productsSlice'
import { useSelector } from 'react-redux'

export default function Home() {

    const Products = useSelector(selectAllItems)
    // console.log("🚀 ~ Home ~ Products:", Products)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      
    </main>
  )
}
