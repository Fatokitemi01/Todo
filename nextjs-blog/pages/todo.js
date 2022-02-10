import Link from 'next/link'
import Head from 'next/head'
//import Script from 'next/script'
import { useState } from 'react'



export default function Todo() {
const[userInput,setUserInput] =useState('')
//create state props
const[todoList,setTodoList] =useState([])
const handleChange = (e) =>{
    e.preventDefault();
    setUserInput(e.target.value)
    console.log(userInput)
}

//handling submit
const handleSubmit =(e)=>{
   
setTodoList([...todoList,{elt:userInput}])
console.log(todoList)
setUserInput(' ')
}

//delete functionality

const handleDelete =(todo)=>{
  const updatedArr = todoList.filter(todoItem=> todoList.indexOf(todoItem) != todoList.indexOf(todo) )

  setTodoList(updatedArr)
  
}

  return (
    <>
    <center>
    <Head>
    <title>Todo List</title>
    </Head>
    <h1>TodoList App</h1>
        <input type="text" placeholder="enter what you wabt to do"value={userInput} onChange={handleChange}/>
        <button  onClick={handleSubmit}>Submit</button>
        <div class="container">
     <ul>
       {
       todoList.length>=1 ? todoList.map((todo,idx) =>{
         return <tr key={idx}>{todo.elt}
         <button onClick ={(e) =>{
           e.preventDefault()
           handleDelete(todo)
        
        }}>Delete</button></tr>
       })
       :''

      }
     </ul>
     </div>


        
        </center>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        button{
          background-color:yellow;
          height:30px;
          margin: 10px;
          border-radius: 7px;
          

        }
        input{
          width:200px;
          height:30px;
          border-radius: 15px;
          border: 2px solid ;
        }
        li{
          justify:center;
          align-items:center;
        }
        .container{
          align items: left;
          justify:center
          margin:200px;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      
    </>
    
  )
}



