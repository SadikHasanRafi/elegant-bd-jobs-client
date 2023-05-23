import 'react'
import 'react'
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { JobProvider } from './Contexts/JobContext';
import AuthUserRoleProvider from './Contexts/authUserRoleContext';
import './App.css'


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
