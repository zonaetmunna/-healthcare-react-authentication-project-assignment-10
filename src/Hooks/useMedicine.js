import { useEffect, useState } from "react"

const useMedicine = () => {
     const [medicine, setMedicine] = useState([])
     useEffect(() => {
          fetch('/medicine.json')
               .then(res => res.json())
               .then(data => setMedicine(data))
     }, [])
     return [medicine];
}

export default useMedicine;