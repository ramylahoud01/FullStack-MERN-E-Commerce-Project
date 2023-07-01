import React from 'react'
import View from '../components/Views/View';

function ViewsPage() {
  return (
   <View />
  )
}

export default ViewsPage

export async function loader ({request,params}){
    const id = await params.id;
    const response = await fetch(`http://localhost:8000/post/${id}`);
    const jsonData = await response.json();
    return jsonData
}