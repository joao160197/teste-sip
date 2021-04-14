import Login from "./components/login"
import Cadastro from "./components/cadastro"
// import Produtos from "./components/produtos"
 
 import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";
 
 export default function App() {
   return (
     <Router>
       
 
         
         <Switch>
           <Route path="/login">
             <Login />
           </Route>
           <Route path="/produtos">
             {/* <Produtos /> */}
           </Route>
           <Route path="/cadastro">
             <Cadastro />
           </Route>
         </Switch>
       
     </Router>
   );
 }