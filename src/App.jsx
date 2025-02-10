import './styles/theme.scss';
import { useState } from 'react'
import './App.css'
import Tables from './components/Table'
import CRMContactsTable from './components/CRMTable';
import { contacts } from "./data";
import Modals from './UIs/Modal';
import Navbars from './UIs/NavBar';
import { Container } from 'react-bootstrap';
import Footer from './UIs/Footer';

const pagesOptions = [
  { value: 5, label: "5 per page" },
  { value: 10, label: "10 per page" },
  { value: -1, label: "All" },
];

const titleOptions = [
  { value: "*", label: "Any" },
  { value: "designer", label: "Designer" },
  { value: "developer", label: "Developer" },
  { value: "owner", label: "Owner" },
  { value: "founder", label: "Founder" },
];

const leadScoreOptions = [
  { value: "-1", label: "Any" },
  { value: "1", label: "1+" },
  { value: "2", label: "2+" },
  { value: "3", label: "3+" },
  { value: "4", label: "4+" },
  { value: "5", label: "5+" },
  { value: "6", label: "6+" },
  { value: "7", label: "7+" },
  { value: "8", label: "8+" },
  { value: "9", label: "9+" },
  { value: "10", label: "10" },
];

function App() {
  const [count, setCount] = useState(0)

  


  return (
    <div className='w-100 min-vh-100'>
    <Navbars  />
   
     <CRMContactsTable
                contacts={contacts}
                leadScoreOptions={leadScoreOptions}
                pagesOptions={pagesOptions}
                titleOptions={titleOptions}
              />
   
  <Footer />
    </div>
  )
}

export default App
