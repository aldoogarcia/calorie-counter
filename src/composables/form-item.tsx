import { categories } from "../data/data";
import { useState } from "react";





export default function Form() {


const [activity,setActivity]=useState({
    category: 1,
    name: '',
    calories: 0,
  
})

const handlerChange=(e:React.ChangeEvent<HTMLSelectElement> |  React.ChangeEvent<HTMLInputElement>)=>{
    setActivity({
        ...activity,
        [e.target.id]:e.target.value})
}

  return (
    <div className="pt-10">
        <div className="w-full grid grid-cols-1 bg-green-200 p-20 max-w-4xl mx-auto shadow-xl rounded-xl">
      <form className="">


        <div className="grid grid-cols-1">
          <label htmlFor="category">
            Categoria
          </label>
            <select 
            id="category"
            value={activity.category}
            onChange={handlerChange}
            >
                {categories.map((category) =>(
                <option key={category.id} 
                 value={category.id}
                 >
                    {category.name}
                </option>
                ))}
            </select>
        </div>

        <div  className="grid grid-cols-1 space-y-2">
          <label htmlFor="name">
            Actividad
          </label>
            <input value={activity.name} onChange={handlerChange} id="name" className="rounded-md" type="text" name="name" />
        </div>

        <div className="grid grid-cols-1">
          <label htmlFor="calories">
            Calorias
          </label>
            <input value={activity.calories} onChange={handlerChange}  className="rounded-md" id="calories" type="number" name="name" />
        </div>
        <input value="Guardar " className="w-full bg-gray-700 text-white font-medium mt-3 rounded-md py-3" type="submit"  />
      </form>
      </div>


    </div>
  );
}
