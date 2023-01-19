import React from 'react';

import TopNav from '../components/TopNav'; 
import Footer from '../components/Footer';
import BrowseBusiness from '../components/BrowseBusinessBody';

export default function BrowseBusinessPage () {
    return (
        <div>
            <TopNav/>
            <BrowseBusiness/>
            <Footer/>
        </div>
    )
}