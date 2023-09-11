
const TodoSearch = ({setSearhValue, searchValue}) => {

  const hanldeChange = (e) => {
    setSearhValue(e.target.value)
  }

  return (
    <div className="flex justify-center m-4">
      <input 
        type="search" 
        placeholder="Search.. "  
        className="border p-2 rounded-lg w-9/12" 
        value={searchValue}
        onChange={(e) => hanldeChange(e)}
      />
    </div>
  )
}

export default TodoSearch
