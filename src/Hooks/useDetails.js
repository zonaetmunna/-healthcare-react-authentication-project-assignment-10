/*
import { useEffect, useState } from "react"

const useDetails = () => {
     const [details, setDetails] = useState([])
     useEffect(() => {
          fetch('/Service.json')
               .then(res => res.json())
               .then(data => setDetails(data))
     }, [])
     useEffect(() => {
          const singleService = details.find(detail => detail.id === id)
     }, [])

     console.log(details)

     return [details];
}
 */