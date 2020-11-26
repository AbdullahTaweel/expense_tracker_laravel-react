import React from 'react'
import ReactDom from 'react-dom'
import api from '../api';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function EditPage() {
    const [title, setTitle] = useState('new expense');
    const [description, setDescription] = useState('expense detailes');
    const [amount, setAmount] = useState('0');
    const [pay_date, setpay_date] = useState('2020-05-25');
    const [paid, setPaid] = useState(false);

    const onSubmit = () => {
        api.addExpense(
            {title, description, amount, pay_date, paid}
        );
    }
    return (
        <div>
            Add Expense
            <form>
                <label>title</label>
                <input type='text' value={title}
                onChange={e=>setTitle(e.target.value)}></input>
                <br></br>
                <label>description</label>
                <textarea value={description}
                onChange={e=>setDescription(e.target.value)}></textarea>
                <label>amount</label>
                <input type='text' value={amount} onChange={e=>setAmount(e.target.value)}></input>
                <label>paid</label>
                <input type='checkbox' value={paid} onChange={e=>setPaid(e.target.value)}></input>
                <label>pay date</label>
                <input type='text' value={pay_date} onChange={e=>setpay_date(e.target.value)}></input>
                <br></br>
                <button type='button' class="btn btn-success"
                    onClick={onSubmit}
                >submit</button>
            </form>
        </div>
    )
}
