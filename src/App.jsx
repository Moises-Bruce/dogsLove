import logo from './images/logo1.svg';
import icone from './images/icone1.svg';
import icone2 from './images/icone2.svg';
import dog from './images/dog.svg';
import dog2 from './images/dog2.svg';
import dogPata from './images/cadastre-pet.svg';
import pontilhadoDireita from './images/pontilhadoDireita.svg';
import pontilhadoEsquerda from './images/pontilhadoEsquerda.svg';
import pesquisa from './images/sear.svg';
import gato from './images/gato1.svg';
import agenda from './images/agende.svg';
import logoCompleta from './images/logo-completo.svg';
import setaAbaixo from './images/setdown.svg';
import documento from './images/documents.svg';
import facebook from './images/facebook.svg';

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

      <main className="h-[2307px] w-full">
          <div className='flex flex-row'>
            <div className='w-[50%]'>
              <img src={dog} className="mt-44 pl-96"/>
            </div>
            <div>
              <img src={dogPata} className="ml-24 mt-48 mb-10"/>
              <span className='font-black text-4xl ml-24 text-green-800'>Cadastre seu</span>
              <span className='font-black text-4xl text-yellow-400 mb-3'> animal</span>
              <p className='font-medium text-gray-400 text-2xl ml-24'>
                Lorem ipsum dolor sit amet, consectetur <br/>
                adipiscing elit. Donec egestas, erat et convallis <br/>
                gravida, nisl libero imperdiet dolor, et <br/>
                vestibulum tortor quam in nunc.
              </p>
            </div>
          </div>
          <div className='flex justify-center'>
            <img src={pontilhadoDireita}/>
          </div>

          <div className='flex flex-row'>
            <div className='w-[50%]'>
              <img src={pesquisa} className="ml-96 mt-6 mb-8"/>
              <span className='font-black text-4xl ml-96 text-yellow-400'>Procure</span>
              <span className='font-black text-4xl text-green-800 mb-3'> pretendentes</span>
              <p className='font-medium text-gray-400 text-2xl ml-96'>
                Lorem ipsum dolor sit amet, consectetur <br/>
                adipiscing elit. Donec egestas, erat et convallis <br/>
                gravida, nisl libero imperdiet dolor, et <br/>
                vestibulum tortor quam in nunc.
              </p>
            </div>
            <div>
              <img src={dog2} className="mt-6 ml-24"/>
            </div>
          </div>
          <div className='flex justify-center relative'>
            <img src={pontilhadoEsquerda}/>
          </div>

          <div className='flex flex-row absolute'>
            <div className='w-[50%]'>
              <img src={gato} className="mt- pl-96"/>
            </div>
            <div>
              <img src={agenda} className="ml-24 mb-7"/>
              <span className='font-black text-4xl ml-24 text-green-800'>Marque um</span>
              <span className='font-black text-4xl text-yellow-400 mb-3'> encontro</span>
              <p className='font-medium text-gray-400 text-2xl ml-24'>
                Lorem ipsum dolor sit amet, consectetur <br/>
                adipiscing elit. Donec egestas, erat et convallis <br/>
                gravida, nisl libero imperdiet dolor, et <br/>
                vestibulum tortor quam in nunc.
              </p>
            </div>
          </div>
      </main>
      <footer className='bg-green-700 h-[550px] w-full'>
        <div className='flex justify-between'>
          <img src={logoCompleta} className="pt-24 ml-20"/>
          <div>
            <p className='font-bold text-lg text-white pt-24 mr-56'>Receba nossas novidades</p>
            <div className='bg-white flex flex-row rounded-full mr-20'>
              <p className='py-5 pr-14 pl-7 font-bold text-lg text-green-700'>Digite seu e-mail</p>
              <button className='rounded-full bg-yellow-400 my-2 mr-2 ml-14'>
                <span className='py-2 px-3 font-bold text-lg text-white'>Cadastrar</span>
              </button>
            </div>
          </div>
        </div>

        <div className='flex justify-between'>
          <div className='flex justify-between'>
            <div className='flex flex-col ml-[87px] mt-[82px]'>
              <a href="#" className='font-bold text-white text-lg mb-[15px]'>Sobre nós</a>
              <a href="#" className='font-bold text-white text-lg mb-[15px]'>Como funciona</a>
              <a href="#" className='font-bold text-white text-lg mb-[15px]'>Dúvidas frequentes</a>
              <a href="#" className='font-bold text-white text-lg'>Blog</a>
            </div>

            <div className='flex flex-col ml-[87px] mt-[82px]'>
              <a href="#" className='font-bold text-white text-lg mb-[15px]'>Pets namorando</a>
              <a href="#" className='font-bold text-white text-lg mb-[15px]'>Comece agora!</a>
              <a href="#" className='font-bold text-white text-lg mb-[15px]'>Contato</a>
            </div>

            <div className='flex flex-col ml-[87px] mt-[82px]'>
              <p className='font-bold text-yellow-400 text-lg mb-[15px]'>Ajude uma entidade</p>
              <p className='font-bold text-white text-sm flex flex-row'>SOS Vida Animal<img src={setaAbaixo} className="flex flex-row" /></p>
              <p className='font-bold text-white text-sm'><span className='font-normal'>Banco Itaú: Ag</span> 8804 <span className='font-normal'>Conta</span> 01234-5</p>
              <p className='font-bold text-white text-sm flex flex-row'><span className='font-normal'>PIX:</span> 43.660.696/0001-95 <img src={documento} /></p>
            </div>            
          </div>

          <div className='flex justify-between'>
            <div className='rounded-full bg-green-800 mr-20'>
                <img src={facebook} className="w-7 h-7 m-7"/>
            </div>
            <div className='rounded-full bg-green-800 mr-20'>
                <img src={facebook} className="w-7 h-7"/>
            </div>
            <div className='rounded-full bg-green-800 mr-20'>
                <img src={facebook} className="w-7 h-7"/>
            </div>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default App
