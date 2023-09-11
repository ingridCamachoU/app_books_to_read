import { XMarkIcon, EyeIcon } from "@heroicons/react/24/solid";

const TodoItem = (props) => {

  return (
    <li className="flex gap-4 bg-[#f8fafc93] rounded-lg p-2 m-4 card cursor-pointer" >
      <input 
        type="checkbox" 
        className="checkbox" 
        onClick={props.onComplete}
      />
      <div className="flex justify-between w-10/12" onClick={props.controlModal}>
        <p className="flex justify-between w-10/12 complete">
          <span>{props.title}</span>
          <span className={props.completed ? 'text-pink-600 font-light' : 'text-black font-light'}>{props.completed ?' completado':' Pendiente'}</span>
        </p>  
        <EyeIcon className="h-4 w-4 text-black  hover:shadow-2xl hover:text-rose-400 hover:h-5 hover:w-5"/>
      </div>
      <span 
        className="flex justify-center items-center"
        onClick={props.deleteBook}>
        <XMarkIcon className="h-4 w-4 text-black  hover:shadow-2xl hover:text-rose-400 hover:h-5 hover:w-5"/>
      </span>
      
    </li>
  )
};

export default TodoItem


