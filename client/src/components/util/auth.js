import { redirect,json } from "react-router-dom";

export async function getToken (){
    const token = localStorage.getItem('token');
    const tokenDuration = getTokenDuration();
    if(!token){
        return null;
    }
    if(tokenDuration<0){
        return 'Expired'
    }
    return token
}

export function tokenLoader(){
    return getToken()
}
export function getIdofUser(){
    return  localStorage.getItem('UserId')
}
export async function isAuthloader(){
    const token = await getToken();
    const id = await getIdofUser()
    if(!token){
        return redirect('/account/signin')
    }
    if(id !== '647cf3686eb6b5de7c9df14d'){
        throw json({data:{title:'Error Page',message:'Only admin can Post'}},{status:404})
    }
    return null
}
export function getTokenDuration(){
    const storedexperationDuration = localStorage.getItem('experation');
    const currentDate = new Date();
    const experationDuration = new Date(storedexperationDuration);
    const diff = experationDuration.getTime()-currentDate.getTime();
    return diff
}

