import React, { Component } from "react";
import { DRIVER, SUPPLIER } from "../../constants/userRoles.js";



const Toggle = (props) => {
    

    
        return(
            <>
            <label htmlFor="driver">
          <input
            type="radio"
            name="userRole"
            id="driver"
            value={DRIVER}
            // checked={props.updateUser(DRIVER)}
            onChange={props.handleChange}
          />
          Driver
        </label>
        <label htmlFor="supplier">
          <input
            type="radio"
            name="userRole"
            id="supplier"
            value={SUPPLIER}
            // checked={props.updateUser(SUPPLIER)}
            onChange={props.handleChange}
          />Supplier
          </label>
          </>
        )
    

};

export default Toggle