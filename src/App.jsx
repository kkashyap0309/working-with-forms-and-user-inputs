import Header from './components/Header.jsx';
// import Login from './components/Login.jsx';
// import  Login  from './components/Login-Using-State.jsx';
import Login from './components/LoginStateFormValidationByCustomHook.jsx';
import Signup from './components/Signup.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Login />
      </main>
    </>
  );
}

export default App;
