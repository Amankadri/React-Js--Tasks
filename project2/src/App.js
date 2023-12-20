import { createContext, useContext, useState } from 'react';
import './App.css';

const ThemeContext= createContext();
const AuthContext = createContext();

function App() {

  const[theme, setTheme]= useState("light");
  const[currentUser, setCurrentUser]= useState('');
  return (
  
      <ThemeContext.Provider value={theme}>
        <AuthContext.Provider value={{
          currentUser,
          setCurrentUser
        }}>
            <div className="App">
          <WelcomePanel/>
           <label>
            <input type='checkbox'
            checked={theme==='dark'}
            onChange={(e)=>{setTheme(e.target.checked ? 'dark': 'light')}}/> Use dark mode
           </label>
           </div>

        </AuthContext.Provider>
      </ThemeContext.Provider>
    
    
  );
}

function WelcomePanel()
{
  const {currentUser}= useContext(AuthContext)
  return(
    <>
    <Panel title="Welcome">
     {
      (currentUser!=="") ? <Welcome/> : <LoginForm/>
     }        
    </Panel>
    </>
  )
}

function Welcome()
{
  const {currentUser}= useContext(AuthContext)
  return(
    <>
    <b>You Welcomed as {currentUser.name} </b>
    </>
  )
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
  const {setCurrentUser} = useContext(AuthContext)
  const [firstname,setFirstname]= useState("");
  const [lastname,setLastname]= useState("");

  let canlogin = firstname!=="" && lastname!==""
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

  <Button disabled={!canlogin} onClick={()=>{
        setCurrentUser({
          name: firstname +''+ lastname
        })
  }}>
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
