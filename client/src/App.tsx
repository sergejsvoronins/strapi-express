
import { Outlet } from 'react-router-dom';
import './App.scss';
import { Nav } from './components/nav/Nav';
import { useEffect, useState } from 'react';
import { getUserStatus } from './services/expressService';

export interface IMyContext {
  changeUserStatus(status:boolean):void,
  userIsLoggedIn: boolean,
  loginMessage: string,
  showLoginMessage(message:string): void,
  createToken(token:string):void,
  token:string,
  userName: string,
  showUserName(name:string):void
}

function App() {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [loginMessage, setLoginMessage] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [ userName, setUserName] = useState<string>("");
  useEffect(()=>{
    const getData = async () => {
      let response = await getUserStatus();
      setUserIsLoggedIn(response.user.isLoggedIn);
      setIsChecked(true);
    }
    if(isChecked){ return }
    getData();
  });
  const changeUserStatus = (status:boolean) => {
    setUserIsLoggedIn(status);
  }
  const showLoginMessage = (message:string) => {
    setLoginMessage(message);
  }
  const createToken = (token:string) => {
    setToken(token);
  }
  const showUserName = (name:string) => {
    setUserName(name);
  }
  return (
    <div className="App">
      <header>
        <Nav userIsLoggedIn = { userIsLoggedIn } userName = { userName }/>
      </header>
      <main>
        <Outlet context = {{ userIsLoggedIn, userName, showUserName, changeUserStatus, loginMessage, showLoginMessage, createToken, token }}></Outlet>
      </main>
    </div>
  );
}

export default App;
