import React from 'react';

import TopNav from '../components/TopNav'; 
import Footer from '../components/Footer';
import BrowseHomeStudy from '../components/BrowseHomeStudyBody';

export default function BrowseHomeStudyPage () {
    return (
        <div>
            <TopNav/>
            <BrowseHomeStudy/>
            <Footer/>
        </div>
    )
}