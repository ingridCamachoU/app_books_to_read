import TodoCounter from '../components/TodoCounter';
import TodoSearch from '../components/TodoSearch';
import TodoList from '../components/TodoList'
import TodoItem from '../components/TodoItem';
import book from '../assets/book2.png';
import empty from '../assets/empty.png'
import { EyeIcon, XMarkIcon } from '@heroicons/react/24/solid';
import './App.css'; 
import { useState } from 'react';
import FormBook from '../components/FormBook';

function App() {

  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.toLocaleString('default', { month: 'long' })

  const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || []);

  // Save Data LocalStorage
  const saveLocalData = () =>{
    localStorage.setItem('data', JSON.stringify(data));
  };
  saveLocalData();

  const [searchValue, setSearhValue] = useState('')

  // Search Book
  const searchBook = data.filter( data => (
      data.title.toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  // Complete books
  const onComplete = (title) => {
    const newData = [...data];
    const dataIndex= newData.findIndex(book => book.title === title);
    
    if(newData[dataIndex].completed){
      newData[dataIndex].completed = false;
    }else{
      newData[dataIndex].completed = true;
    }
    setData(newData);
  };

  const completedBook = data.filter( book => !!book.completed).length;

  const totalBook = data.length;

  // Deelte books
  const deleteBook = (title) => {
    const newData = [...data];
    const dataIndex= newData.findIndex(book => book.title === title);
    newData.splice(dataIndex, 1)
    setData(newData);
  }

  //Modal -Open/close
  const [openModal, setOpenModal] = useState(false);
  const [datosModal, setDatosModal] = useState('');

  const controlModal = (title) => {
    const newData = [...data];
    const dataIndex= newData.findIndex(book => book.title === title);
    setOpenModal(true);
    setDatosModal(newData[dataIndex]);
  }

  const closeModal = () => {
    setOpenModal(false);
  }

  // Create nwe book
  const createBook = (newDato) => {
    setData([...data, newDato])
  }

   return (
        <div className=' min-h-screen flex max-w-screen-xl flex-wrap md:flex-wrap-reverse"'>
        <div >
            <img src={book} alt="book" /> 
            <FormBook setData={setData} data={data} createBook={createBook}/>            
        </div>
        
        <div className='flex flex-col mt-8 flex-wrap'>
            <div className=' py-2 px-4 rounded-lg flex-wrap'>
            <p className='text-5xl tilte'>Aventuras de {mes}</p>
            </div>
            
            <TodoCounter total={totalBook} completed={completedBook}/>
            <TodoSearch setSearhValue={setSearhValue} searchValue={searchValue}/>

            <TodoList>
                {
                searchBook.length > 0 ?
                searchBook.map(book => (

                    <TodoItem 
                    key={book.title}
                    title={book.title}
                    author={book.author}
                    amout_page={book.amout_page}
                    completed={book.completed} 
                    onComplete={() => onComplete(book.title)}
                    deleteBook={() => deleteBook(book.title)}
                    controlModal={() => controlModal(book.title)}
                    />
                    
                ))

                :

                <div className='flex justify-center items-center mt-10 text-pink-950 flex-col w-full'>No tienes ninguna aventura pendiente comienza ya!!!
                <img src={empty} alt="empty" className='w-2/5' />
                </div>

                
                }
            </TodoList>
            
        </div>
        
            {openModal && (
                <div className="absolute right-60 top-60 p-4 rounded-lg">
                    <div className=" book">
                    <div className='pl-12 flex flex-col gap-4'>
                        <span className="absolute right-4 top-4" onClick={closeModal}>
                        <XMarkIcon className="h-6 w-6 text-black font-bold rounded-lg hover:text-[#b53eb1] hover:border-pink-500"/>
                        </span>
                        <span className="text-black "><span className='font-semibold'>Titulo: </span>{datosModal.title}</span>
                        <span className="text-black "><span className='font-semibold'>Autor: </span>{datosModal.author}</span>
                        <span className="text-black "><span className='font-semibold'>N° pag: </span>{datosModal.amout_page}</span>
                    </div>
                        
                        <div className="cover p-3 flex flex-col gap-4">
                            
                            <span className="font-semibold text-2xl">{datosModal.title}</span>
                            <EyeIcon className="h-6 w-6 text-[#e3679f] ml-4 shadow-md rounded-3xl "/> 
                        </div>
                    </div>        
                </div>
            )}
        
        </div>
    );
}

export default App


