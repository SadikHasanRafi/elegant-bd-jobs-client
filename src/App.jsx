import 'react'
import 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { JobProvider } from './Contexts/JobContext';

function App() {

  return (
    <div>
      <JobProvider><RouterProvider router={router}></RouterProvider></JobProvider>
    </div>
  )
}

export default App;
