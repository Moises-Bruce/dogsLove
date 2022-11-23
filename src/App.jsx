import logo from './images/logo1.svg';
import icone from './images/icone1.svg';
import icone2 from './images/icone2.svg';

function App() {
  return (
    <div>
      <nav className="flex h-32 w-full justify-between p-10">
        <button className="flex items-center justify-center gap-4 rounded-full border-[3px] border-green-900 bg-white p-4">
          <img src={icone} />
          <span className="text-xl font-medium text-green-900">Menu</span>
        </button>

        <button className="flex items-center justify-center gap-4 rounded-full bg-green-900 p-4">
          <img src={icone2} />

          <span className="text-xl font-medium text-white">Entrar</span>
        </button>
      </nav>

      <header className="relative h-[530px] w-full bg-[#F7F4EB] flex flex-col items-center">
        <img className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={logo} />
        <p className='pt-44 font-bold text-[#9A9A9A] text-lg'>COMO FUNCIONA</p>
        <h1 className='font-black text-5xl pt-7 text-green-800'>Encontre um pretendente</h1>
        <h1 className='font-black text-5xl text-green-800'>para o seu animal</h1>
        <button className='py-5 px-16 rounded-full bg-yellow-400 mt-9 font-bold text-lg text-green-900'>
          Comece agora!
        </button>
      </header>
    </div>
  )
}

export default App
