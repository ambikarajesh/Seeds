import React from 'react';
import { MDBFormInline, MDBIcon } from "mdbreact";

const Search = () => {
    return (
        <div className='search'>
            <MDBFormInline >
                <MDBIcon icon="search" style = {{color:'#55A663'}}/>
                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
            </MDBFormInline>
        </div>
        
           
    );
};

export default Search;