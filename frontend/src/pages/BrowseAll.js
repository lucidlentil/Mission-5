import React from 'react';

import TopNav from '../components/TopNav'; 
import Footer from '../components/Footer';
import BrowseAll from '../components/BrowseAllBody';

export default function BrowseAllPage () {
    return (
        <div>
            <TopNav/>
            <BrowseAll/>
            <Footer/>
        </div>
    )
}