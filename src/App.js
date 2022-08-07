import React, { useState } from 'react';
import { Field, FieldError, Form } from 'react-jsonschema-form-validation';
import "./index.css";
import Names from './pokemon';
  
function App() {

    const [formData, setFormData] = useState({ 
                                        first_name: '',
                                        last_name: '',
                                        phone_number: '',
                                        address: '' });

    const [success, setSuccess] = useState(false);  
    const [successMsg, setSuccessMsg] = useState(false);  
    const [fav_pokemon, setFavPokemon] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const demoSchema = {
        type: 'object',
        // properties: {
        //     phone_number: { type: 'number'},
        // },
        required: [
            'first_name', 'last_name', 'phone_number', 'address'
        ],
    };
    const handleChange = (newData) => { setFormData(newData);   };
    const handlePreview = () => {
        const countAll = document.querySelectorAll('.Jfv_FieldError').length;
        if(countAll == 0){

            setSuccess(true);  
            setShowPreview(!showPreview);
            
        }  
    };

    const handleSubmit = () =>{
        setSuccessMsg(true); 
        setShowPreview(!showPreview);
        setFormData({ 
            first_name: '',
            last_name: '',
            phone_number: '',
            address: '' });

            setTimeout(function(){
                window.location.reload(1);
            }, 2000);        
        }
  
    return (     
        <div>    
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">   
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                {successMsg && (<div><p class="successMsg"><b>Form Submitted Successfully.</b></p></div>)}
                {(!showPreview || successMsg) && <Form data = {formData}  onChange={handleChange} schema={demoSchema} >
                        <div>
                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 undefined">
                                First Name
                            </label>
                            <div className="flex flex-col items-start">
                                <Field value={formData.first_name}                                    
                                    name="first_name" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                                <FieldError name="first_name" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="last_name" 
                                className="block text-sm font-medium text-gray-700 undefined" >
                                Last Name
                            </label>
                            <div className="flex flex-col items-start">
                                <Field value={formData.last_name}
                                    type="text"
                                    name="last_name"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                                <FieldError name="last_name" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="phone_number" 
                                className="block text-sm font-medium text-gray-700 undefined">
                                Phone Number
                            </label>
                            <div className="flex flex-col items-start">
                                <Field 
                                    type="text" value={formData.phone_number}
                                    name="phone_number"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                <FieldError name="phone_number" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="address" 
                                className="block text-sm font-medium text-gray-700 undefined">
                                Address
                            </label>
                            <div className="flex flex-col items-start">
                                <Field name="address" value={formData.address}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                                <FieldError name="address" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="fav_pokemon"
                                className="block text-sm font-medium text-gray-700 undefined">
                                Favourite Pokemon
                            </label>
                            <div className="flex flex-col items-start">
                                <select name="fav_pokemon" onChange={e => setFavPokemon(e.target[e.target.selectedIndex].text)}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                    <Names/>
                                </select>                            
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">                  
                            <button
                                type="submit"  onClick={handlePreview}
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false">
                                Preview
                            </button>
                        </div>
                    </Form>}

                    {showPreview && (<div>
                        <p><b> Please review the information entered in the form</b></p>
                        <p>{formData.first_name}</p>
                        <p>{formData.last_name}</p>
                        <p>{formData.phone_number}</p>
                        <p>{formData.address}</p>
                        <p>{fav_pokemon}</p>
                        <div className="flex items-center justify-end mt-4">
                            <button
                                type="submit" onClick={() => setShowPreview(!showPreview)}
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false">
                                Cancel
                            </button>
                            <button
                                type="submit" onClick={handleSubmit}
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false">
                                Submit
                            </button>
                        </div>
                    </div>)}                    
                </div>
            </div>
        </div>     
    );
}

export default App;
