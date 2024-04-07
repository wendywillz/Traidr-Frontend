import { useState, useEffect } from "react"

import { fetchUserId } from "../../api/users"

const Test = () => {
const [userId, setUserId] = useState<string>("")
    useEffect(()=>{
        fetchUserId().then((res:string)=>{
            if(res){
                setUserId(res.userId)
            }
        })
    },[])
  return (
    <div>
        <h1>Test</h1>
        <p>user id is {userId}</p>

    </div>
  )
}

export default Test