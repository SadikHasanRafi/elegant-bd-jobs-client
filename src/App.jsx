import 'react'
import 'react'
import { RouterProvider } from 'react-router-dom';
import { JobProvider } from './Contexts/JobContext';
import './App.css'
import AuthUserRoleProvider from './Contexts/AuthUserContext';
import router from './Routes/Routes';


function App() {

  return (
    <div>
      <AuthUserRoleProvider>
        <JobProvider>
          <RouterProvider router={router}></RouterProvider>
        </JobProvider>
      </AuthUserRoleProvider>
    </div>
  )
}

export default App;
