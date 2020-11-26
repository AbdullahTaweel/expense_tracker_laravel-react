const axios = window.axios;

const BASE_URL = 'http://localhost:8000/api'
export default {
    // login:() =>
    //     axios.post(`${BASE_URL}/users`, user),
    getExpenses: () => 
        axios.get(`${BASE_URL}/expenses`),
    editExpense: (id) => 
        axios.get(`${BASE_URL}/expenses/${id}`),
    addExpense: (expense) => 
        axios.post(`${BASE_URL}/expenses`, expense),
    updateExpense: (expense, id) => 
        axios.put(`${BASE_URL}/expenses/${id}`, expense),   
    deleteExpense: (id) => 
        axios.delete(`${BASE_URL}/expenses/${id}`)
}