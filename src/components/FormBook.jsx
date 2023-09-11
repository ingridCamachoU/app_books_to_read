import { RocketLaunchIcon} from '@heroicons/react/24/solid';
import { useState } from 'react';

const FormBook = ({createBook}) => {

    const dataInitial = {
        "title": '',
        "author": '',
        "amout_page":'',
        "complete": false,
    };

    const [newDato, setNewDato] = useState (dataInitial);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        createBook(newDato);
        handleReset()
    };

    const handleChange =(e)=>{
        const {name, value}= e.target;
        setNewDato({
            ...newDato, 
            [name]: value
        });
    };

    const handleReset = () =>{
        setNewDato(dataInitial)
    }

    return (
        <form className='flex flex-col w-80 ml-8' onSubmit={handleSubmit}> 
            <div className='flex flex-col'>
                <span className='font-light'>Titulo libro:</span>
                <input 
                type="text" 
                className='rounded mt-2 mb-6 py-1 px-2 focus:outline-none font-light input'
                name='title'
                value={newDato.title} 
                onChange={handleChange}
                />

                <span className='font-light'>Autor:</span>
                <input 
                type="text " 
                className=' rounded mt-2 mb-6 py-1 px-2 focus:outline-none font-light input'
                name='author'
                value={newDato.author} 
                onChange={handleChange}
                />

                <span className='font-light'>Numero páginas</span>
                <input 
                type="number" 
                className='rounded mt-2 mb-6 py-1 px-2 focus:outline-none font-light input'
                name='amout_page'
                value={newDato.amout_page} 
                onChange={handleChange}
                />
            </div>
            <button 
            type="submit"
            className='bg-[#4d1c4c] text-white mt-4 p-2 rounded-lg font-light flex items-center justify-center gap-1 btn_add hover:shadow-lg shadow-indigo-600/20'
            > 
                <RocketLaunchIcon className="h-6 w-6 transition duration-300 ease-in-out text-white btn_add_icon" /> 
                <span className='transition duration-300 font-medium btn_add_span'>Crear</span>
            </button>
        </form>
    )
}

export default FormBook;
