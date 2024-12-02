import { useMemo, useReducer } from 'react'
import FormItem from '../src/composables/form-item'
import ActivityList from './composables/activityList-item'
import CaloriesTracker from './composables/caloriesTracker-item'
import { activityReduce, initialState, } from './reducers/activity-reducer'

function App() {

const [state, dispatch] = useReducer(activityReduce, initialState)
useMemo(()=>{
  localStorage.setItem('activity',JSON.stringify(state.activities))
},[state.activities])
const isEmpty =()=>{
  return state.activities.length == 0
}

  return (
    <>
      <header className="w-full py-3 bg-green-200 font-medium my- text-gray-950">
        <div className="max-w-5xl mx-auto flex justify-between ">
            <p className="text-xl font-black p-1">
              CaloriesCounter
            </p>
            <button
            disabled={isEmpty()}
            onClick={()=> dispatch({type:'reset-app'})}
            className="border border-1 border-green-800 px-2 rounded-lg bg-gray-700  text-white hover:bg-g-100 transition-colors disabled:opacity-10  ">
              Reiniciar
              </button>
        </div>
      </header>

      <section className="w-full bg-gray-100 pb-10">
          <FormItem
          dispatch={dispatch}
          state={state}
          />
      </section>
        <CaloriesTracker
        activities={state.activities}
        />
      <section>

      </section>
      
        
      
      <section className='w-full bg-gray-100 pb-10 '>
      <h1 className='text-center bg-gray-100 text-4xl mt-5'>Actividades y Comida</h1>
      {isEmpty() ? <p className='text-center mt-2'>No hay Actividades o Comidas</p>
        : 
            <ActivityList
              activity={state.activities}
              dispatch={dispatch}
            />}
      </section>
    </>
  )
}

export default App
