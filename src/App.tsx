import FormItem from '../src/composables/form-item'

function App() {


  return (
    <>
      <header className="w-full py-3 bg-green-200 font-medium my- text-gray-950">
        <div className="max-w-5xl mx-auto flex justify-between ">
            <p className=" p-1">
              CaloriesCounter
            </p>
            <button className="border border-1 border-green-800 px-2 rounded-xl hover:bg-green-100 transition-colors  ">Reiniciar</button>
        </div>
      </header>

      <section className="w-full bg-gray-100 pb-10">
          <FormItem/>
      </section>
    </>
  )
}

export default App
