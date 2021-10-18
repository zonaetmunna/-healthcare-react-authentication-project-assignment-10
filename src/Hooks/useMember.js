import { useEffect, useState } from "react"


const useMember = () => {
     const [member, setmember] = useState([]);
     useEffect(() => {
          fetch('/Member.json')
               .then(res => res.json())
               .then(data => setmember(data))
     }, [])

     return [member];
}

export default useMember;