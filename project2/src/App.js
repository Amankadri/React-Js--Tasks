import { createContext, useContext, useState } from 'react';
import './App.css';

const ThemeContext= createContext();
const AuthContext = createContext();

function App() {

  const[theme, setTheme]= useState("light");
  const[currentUser, setCurrentUser]= useState('');
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <AuthContext.Provider value={{
          currentUser,
          setCurrentUser
        }}>
          <Panel title="Welcome"/>
           <LoginForm/>  
           <label>
            <input type='checkbox'
            checked={theme=='dark'}
            onChange={(e)=>{setTheme(e.target.checked ? 'dark': 'light')}}/> Use dark mode
           </label>

        </AuthContext.Provider>
      </ThemeContext.Provider>
    
    </div>
  );
}

function Panel({title,children})
{
  const theme = useContext(ThemeContext);
  const className= 'panel-' + theme;
  return(
    <>
      <section className={className}>
        <h1>{title}</h1>
        {children}

      </section>
    </>
  )
}

function LoginForm()
{
  const CurrentUser = useContext(AuthContext)
  const [firstname,setFirstname]= useState("");
  const [lastname,setLastname]= useState("");

  let canlogin = firstname!="" && lastname!=""
 return(
  <>
  <label>
   Firstname :
   <input 
   value={firstname}
   onChange={(e)=>{setFirstname(e.target.value)}}
   />
  </label>

  <label>
   Lastname :
   <input 
   value={lastname}
   onChange={(e)=>{setLastname(e.target.value)}}
   />
  </label>

  <Button disabled={!canlogin}>
   Login
  </Button>
</>
 )
}

function Button({children, disabled, onClick})
{
  return(
    <>
    <button
    disabled={disabled}
    onClick={onClick}>
    {children}
    </button>
    </>
  )
}


export default App;
