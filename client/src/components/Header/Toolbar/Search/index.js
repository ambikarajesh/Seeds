import React from 'react';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

const Search = () => {
    return (
        <MDBCol md="6">
            <MDBFormInline className="md-form">
                <MDBIcon icon="search" />
                <input className="form-control form-control-sm ml-3" type="text" placeholder="Search" aria-label="Search" />
            </MDBFormInline>
        </MDBCol>
    );
};

export default Search;