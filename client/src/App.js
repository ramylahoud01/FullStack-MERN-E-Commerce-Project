import LoginPage from "./Pages/LoginPage";
import HomePage from "./components/Home/HomePage";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import SignupPage from "./Pages/SignupPage";
import {Action as SignupAction } from "./Pages/SignupPage";
import {Action as SigninAction} from "./Pages/LoginPage"
import {action as logoutAction} from "./Pages/LogoutPage"
import PostPage from "./Pages/PostPage"
import { tokenLoader } from "./components/util/auth";
import { isAuthloader } from "./components/util/auth";
import SousCategoryPage,{loader as SousCategoryLoader} from "./Pages/SousCategoryPage";
import Error from "./components/Error/Error";
import Index from "./components/Home/Index";
import { loader as IndexLoader} from "./Pages/IndexPage";
import ViewsPage from "./Pages/ViewsPage";
import { loader as ViewLoader } from "./Pages/ViewsPage";
import CartPage from "./Pages/CartPage";
import { loader as CartLoader } from "./Pages/CartPage";
import StripePage, { loader as StripeLoader } from "./Pages/StripePage";

function App() {
  const router = createBrowserRouter([
    {path:"/",element:<HomePage />,loader:tokenLoader,id:"root",errorElement:<Error />,
    children:[
      {index:true,element:<Index />,loader:IndexLoader},
      {path:'cart/content',element:<CartPage />,loader:CartLoader},
      {path:"/logout",action:logoutAction},
      {path:"account/signup",element:<SignupPage />,action:SignupAction},
      {path:"account/signin",element:<LoginPage />,action:SigninAction},
      {path:"/post",element:<PostPage />,loader:isAuthloader,admin:true},
      {path:":category",children:[
        {path:":sousCategorie",element:<SousCategoryPage />,loader:SousCategoryLoader}
      ]},
      {path:"view/:category/:sousCategorie/:id",element:<ViewsPage />,loader:ViewLoader},
      {path:"payment",element:<StripePage/>,loader:StripeLoader}
      
    ]}
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
