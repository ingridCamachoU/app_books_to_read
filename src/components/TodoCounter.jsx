
const TodoCounter = ({total, completed}) => {
  return (
    <div className="flex justify-center font-ligth text-[#361035]">
      <h1 className="m-4">Has leido <span className="font-bold">{completed}</span> de <span className="font-bold">{total}</span> ánimo tu puedes!</h1>
    </div>
  );
}

export default TodoCounter;
