import { redirect } from "react-router-dom";

export async function action(){
    localStorage.removeItem('token');
    localStorage.removeItem('experation');
    localStorage.removeItem('UserId')
    return redirect('/')
}