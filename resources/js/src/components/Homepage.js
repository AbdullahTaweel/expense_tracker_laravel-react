import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import api from '../api';


import Container from './Container.js';
import Header from "./Header";
import Footer from "./Footer";
import Login from './Login';
import AddPage from './AddPage';


function Homepage() {

const [expenses, setExpenses] = useState(null);
const [loggedin, setLoggedin] = useState(false);

const fetchExpenses = () => {
    // api.getExpenses().then(
        Axios.get('http://localhost:8000/api/expenses').then(res =>{
            console.log('gaga', res);
            setExpenses(res.data.data);
            });
}
    useEffect(() => {

        fetchExpenses();

    }, []);

    const renderExpenses = () =>
    {

        if(!expenses){
            return(
                <tr>
                    <td>
                      No expenses  
                    </td>
                </tr>
            )
        }

        return expenses.map( expense => (
            <tr key={expense.id}>
                <td>{expense.id}</td>
                <td>{expense.title}</td>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>{expense.pay_date}</td>
                <td>{expense.paid}</td>
               

            </tr>
        ))
    }

    return (
       <div>
       <Header />
       {loggedin ? <div> view your expenses </div> : <Login /> };
        <Link to="/add">ADD POST</Link>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID.</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>amount</th>
                        <th>pay date</th>
                        <th>paid</th>
                        
                        
                    </tr>
                </thead>

                <tbody>
                {renderExpenses()}
                </tbody>
            </table>
        </div>

        <Footer />
       </div>
    
        
    );
}


export default Homepage;