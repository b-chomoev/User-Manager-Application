import Toolbar from "./components/Toolbar/Toolbar";
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";

const App = () => {
  return (
    <>
      <header><Toolbar /></header>
      <main className='container-fluid'>
        <div className='row mt-2'>
          <div className='col-6'>
            <UserForm />
          </div>
          <div className='col-6'>
            <Users />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
