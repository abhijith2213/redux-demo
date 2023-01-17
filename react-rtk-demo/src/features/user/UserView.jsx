import React,{useEffect} from "react"
import { useDispatch,useSelector } from "react-redux"
import { fetchUsers } from "./userSlice"

export const  UserView = () => {
 const user =   useSelector(state=>state.user)
const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
   return (
      <div>
         <h2 style={{color:'violet'}}>List of users</h2>
         {user.loading && <div>Loading...</div>}
         {user.error && !user.loading ? <div style={{color:'red'}}>Error: {user.error}</div> : null}
         {!user.loading && user.users.length ? (
            <ul>
                {user.users.map((user)=>(
                  <li key={user.id}>{user.name}</li>
                ))}
            </ul>
         ):null}
      </div>
   )
}
