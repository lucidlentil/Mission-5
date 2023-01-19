import {React} from 'react'; 

import TopNav from '../components/TopNav';  
import LaptopsBody from '../components/LaptopsBody'; 
import Footer from '../components/Footer'; 

export default function LaptopsHome() {
    return (
    <div>
        <TopNav/>
        <div style={{height: "40px", backgroundColor: "#0B4F77"}}></div>
        <LaptopsBody/>
        <Footer/>
    </div>
    )
}