"use client";
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
interface Comment{
  name:String;
  id:number;
  email:String;
  body:String;
}
function Page() {
  const [result,setResult]=useState<Comment[]>([]);
  useEffect (()=>{
    axios.get("https://jsonplaceholder.typicode.com/comments").then(function(response){
      console.log(response.data);
      setResult(response.data);
    }).catch(function(error){
      console.log(error);
    })
   },[])
  return (
    <div>
      <h1>Comments:</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {result.map((comment: Comment) => (
              <tr key={comment.id}>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Page
