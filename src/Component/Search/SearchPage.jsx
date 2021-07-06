import React from 'react';
import SearchNavbar from './SearchNavbar/SearchNavbar';
import './SearchPage.css';
import SearchPageMap from './SearchPageMap/SearchPageMap';

const SearchPage = () => {
    return (
        <>
            <SearchNavbar />
            <SearchPageMap />
        </>
    );
};

export default SearchPage;