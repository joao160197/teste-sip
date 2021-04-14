import {Link} from "react-router-dom";
import "./style.css"
const Login = () => {
    return (
      <div className="conteiner">
        <div className="login">
        <h1 className="login-titulo">Login</h1>
          <form>
            <p>Usuario:</p>
            <input type="text" name="" placeholder="" />
            <p>Senha:</p>
            <input type="password" name="" placeholder="" />
            <input type="submit" name="" placeholder="login" />
            <br/>
            < Link to ="/cadastro">Ainda não possue uma conta?</ Link>
    </form>
        </div>
      </div>
    );
};

  export default Login;