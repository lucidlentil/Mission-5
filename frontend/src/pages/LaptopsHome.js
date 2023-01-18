import {React} from 'react'; 

import TopNav from '../components/TopNav'; 
import LocatorBar from '../components/LocatorBar'; 
import LaptopsBody from '../components/LaptopsBody'; 
import Footer from '../components/Footer'; 

export default function LaptopsHome() {
    return (
    <div>
        <TopNav/>
        <LaptopsBody/>
        <Footer/>
    </div>
    )
}