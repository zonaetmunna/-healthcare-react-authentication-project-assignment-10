import { useEffect, useState } from "react"


const useMember = () => {
     const [member, setMember] = useState([]);
     useEffect(() => {
          fetch('/Member.json')
               .then(res => res.json())
               .then(data => setMember(data))
     }, [])

     return [member];
}

export default useMember;