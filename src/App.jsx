import 'react'
import 'react'
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { JobProvider } from './Contexts/JobContext';
import './App.css'

function App() {

  return (
    <div>
      <JobProvider><RouterProvider router={router}></RouterProvider></JobProvider>
    </div>
  )
}

export default App;
