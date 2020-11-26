<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Expense as ExpenseResource;
use App\Models\Expense;

class ExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ExpenseResource::collection(Expense::all());

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description'=>'required',
            'amount'=> 'required',
            'pay_date',
            'paid'

        ]);
        $expense = new Expense([
            'title' => $request->title,
            'description' => $request->description,
            'amount' => $request->amount,
            'pay_date'=> $request->pay_date,
            'paid'=>$request->paid,

        ]);

        $expense->save();

        return response()->json([
            'data' => 'Expense is created successfully'
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $expense = Category::where('id', $id)->first();
        
        if(! $expense){
            abort(404);
        }

        return response()->json([
            'data' => $expense
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'description'=>'required',
            'amount'=> 'required',
            'pay_date',
            'paid'

        ]);
        $expense = Expense::findOrFail($id);
        $expense->title = $request->title;
        $expense->description = $request->description;
        $expense->amount   = $request->amount;
        $expense->pay_date= $request->pay_date;
        $expense->paid= $request->paid;
        $expense->save();
        
        return response()->json([
            'data' => "Expense updated^^"
        ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $expense = Expense::findOrFail($id);
        $expense->delete();

        return response()->json([
            'data' => "Expense deletedxxx"
        ]);
    }
}
