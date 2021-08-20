import './App.css';
import { googleProvider } from './config/authMethods';
import { facebookProvider} from './config/authMethods';
import socialMediaAuth from './service/auth'

function App() {

  const handleOnClick = async(provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  }
  return (
    <div className="App">
      <h1>Hostel Allocation</h1>
      <p>Please Sign-in:</p>
      <button onClick={() => handleOnClick(googleProvider)}>Sign in with Google</button>
      <br />
      <button onClick={() => handleOnClick(facebookProvider)}>Sign in with Facebook</button>
    </div>
  );
}

export default App;
