const createSlice = require('@reduxjs/toolkit').createSlice4
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')

const initialState = {
    loading: false,
    users:[],
    error:''
}

const fetchUsers = createAsyncThunk('user/fetchUsers',()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.data.map(user=>user.id))
})


const userSlice = createSlice({
    name:'user',
    initialState

})