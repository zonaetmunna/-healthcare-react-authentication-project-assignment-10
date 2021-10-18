import { useEffect, useState } from "react"

const useService = () => {
     const [services, setServices] = useState([])

     useEffect(() => {
          fetch('/Health-data.json')
               .then(res => res.json())
               .then(data => setServices(data))
     }, [])
     console.log(services)



     return [services, setServices];

}
export default useService;