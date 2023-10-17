import './HomeView.css'
import Logo from './Static/Logo 2.png'
import {Link} from 'react-router-dom'

export default function App() {
  return (
    <div className="bodyHome">
      <header className="corpo">
        <table className="w100">
          <tr className="w100">
            <td className="w50">
              <img className="Logo" src={Logo} />
            </td>
            <td className="w50">
              <div align="center" className="botaoLogin">
                <Link className="linkToLogin" to="/Login">Login</Link>
              </div>
            </td>
          </tr>
        </table>
      </header>
    </div>
  );
}
