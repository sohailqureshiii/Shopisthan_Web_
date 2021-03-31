import React from 'react';
import "./createShopStyle.css";


function CreateShop() {
    return(
        <>
        <div className="formbox">
        <div>
        <input className="nametext"
             type="text"
             name="shopname"
            placeholder="Shop Name"
             value=""
             placeholder="Shop Name"
        />
        </div>  
        <div>
        <input
             type="text"
             name="pincode"
             placeholder="Email"
        />
       </div>      
       <div>
        <input
             type="text"
             name="shopname"
             value=""
             placeholder="Phone No"
        />
        </div>  
        <div>
        <input
             type="text"
             name="pincode"
             placeholder="Busssiness Name"
        />
       </div> 
       <div>
        <input
             type="text"
             name="shopname"
             placeholder="Address"
        />
        </div>  
        <div>
        <input
             type="text"
             name="pincode"
             placeholder="State"
        />
       </div>       
       <div>
        <input
             type="text"
             name="shopname"
            placeholder="Shop Name"
             placeholder="City Zipcode"
        />
        </div>  
        <div>
        <input
             type="text"
             name="pincode"
             placeholder="Industry"
        />
       </div>   
       <div className="select">
                      <select
                        name=""
                        placeholder="Business Category"
                        id="businesscat"
                      >
                        <option value="manufacturing">  Rahul super market</option>
                        <option value="reseller">Electronics</option>
                        <option value="retailing">
                          Apparel, Clothing and Accessories
                        </option>
                        <option value="specialTypes">
                         Furniture
                        </option>
                      </select>
                    </div>    
                </div>
        </>
    )
}

export default CreateShop;