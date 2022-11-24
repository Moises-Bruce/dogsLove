import { Link } from 'react-router-dom';

import icone from '../images/icone1.svg';
import icone2 from '../images/icone2.svg';
import logo from '../images/logo1.svg';
import love from '../images/love.svg';
import logoCompleta from '../images/logo-completo.svg';
import setaAbaixo from '../images/setdown.svg';
import setaAcima from '../images/setup.svg';
import documento from '../images/documents.svg';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import youtube from '../images/youtube.svg';
import clickweb from '../images/clickweb.svg';
import guido from '../images/guido.svg';
import abigail from '../images/abigail.svg';
import ellipse from '../images/Ellipse.svg';
import ellipse2 from '../images/Ellipse2.svg';
import bingo from '../images/bingo.svg';
import jade from '../images/jade.svg';
import lennon from '../images/lennon.svg';
import jujuba from '../images/jujuba.svg';

function PetsFallingInLove() {
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
      
      <header className="relative w-full flex flex-col items-center pt-16">
        <img className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={logo} />

        <h2 className='mt-20 font-bold text-4xl leading-10'>
          <span className='text-yellow-400'>Pets</span>
          <span className='text-green-700 ml-3'>namorando</span>
        </h2>

        <p className='mt-5 text-xl text-gray-400'>Duis aute irure dolor in reprehenderit in voluptate</p>
      </header>

      <main className='mt-20 flex flex-col items-center'>
        <div className='w-full grid grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-14'>

          <div className='flex flex-col items-center'>
            <div className='relative flex'>
              <img className='w-44 h-44 -mr-4 rounded-full' src={guido} />
              <img className='z-10' src={love} />
              <img className='w-44 h-44 -ml-4 rounded-full' src={abigail} />
            </div>

            <p className='mt-5 text-center text-lg font-bold text-green-900'>Guido e Abigail</p>
          </div>

          <div className='flex flex-col items-center'>
            <div className='relative flex'>
              <img className='w-44 h-44 -mr-4 rounded-full' src={ellipse} />
              <img className='z-10' src={love} />
              <img className='w-44 h-44 -ml-4 rounded-full' src={ellipse2} />
            </div>

            <p className='mt-5 text-center text-lg font-bold text-green-900'>Pancho e Kiwi </p>
          </div>

          <div className='flex flex-col items-center'>
            <div className='relative flex'>
              <img className='w-44 h-44 -mr-4 rounded-full' src={bingo} />
              <img className='z-10' src={love} />
              <img className='w-44 h-44 -ml-4 rounded-full' src={jade} />
            </div>

            <p className='mt-5 text-center text-lg font-bold text-green-900'>Bingo e Jade</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='relative flex'>
              <img className='w-44 h-44 -mr-4 rounded-full' src={lennon} />
              <img className='z-10' src={love} />
              <img className='w-44 h-44 -ml-4 rounded-full' src={jujuba} />
            </div>

            <p className='mt-5 text-center text-lg font-bold text-green-900'>Lennon e Jujuba</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='relative flex'>
              <img className='w-44 h-44 -mr-4 rounded-full' src={guido} />
              <img className='z-10' src={love} />
              <img className='w-44 h-44 -ml-4 rounded-full' src={abigail} />
            </div>

            <p className='mt-5 text-center text-lg font-bold text-green-900'>Guido e Abigail</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='relative flex'>
              <img className='w-44 h-44 -mr-4 rounded-full' src={ellipse} />
              <img className='z-10' src={love} />
              <img className='w-44 h-44 -ml-4 rounded-full' src={ellipse2} />
            </div>

            <p className='mt-5 text-center text-lg font-bold text-green-900'>Pancho e Kiwi </p>
          </div>

        </div>

        <div className='w-[750px] h-24 bg-zinc-400 my-14 rounded flex justify-center items-center'>
          Publicidade
        </div>

        <div className='w-full grid grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-14'>

          <div className='flex flex-col items-center'>
            <div className='relative flex'>
              <img className='w-44 h-44 -mr-4 rounded-full' src={guido} />
              <img className='z-10' src={love} />
              <img className='w-44 h-44 -ml-4 rounded-full' src={abigail} />
            </div>

            <p className='mt-5 text-center text-lg font-bold text-green-900'>Guido e Abigail</p>
          </div>

          <div className='flex flex-col items-center'>
            <div className='relative flex'>
              <img className='w-44 h-44 -mr-4 rounded-full' src={ellipse} />
              <img className='z-10' src={love} />
              <img className='w-44 h-44 -ml-4 rounded-full' src={ellipse2} />
            </div>

            <p className='mt-5 text-center text-lg font-bold text-green-900'>Pancho e Kiwi </p>
          </div>

          <div className='flex flex-col items-center'>
            <div className='relative flex'>
              <img className='w-44 h-44 -mr-4 rounded-full' src={bingo} />
              <img className='z-10' src={love} />
              <img className='w-44 h-44 -ml-4 rounded-full' src={jade} />
            </div>

            <p className='mt-5 text-center text-lg font-bold text-green-900'>Bingo e Jade</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='relative flex'>
              <img className='w-44 h-44 -mr-4 rounded-full' src={lennon} />
              <img className='z-10' src={love} />
              <img className='w-44 h-44 -ml-4 rounded-full' src={jujuba} />
            </div>

            <p className='mt-5 text-center text-lg font-bold text-green-900'>Lennon e Jujuba</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='relative flex'>
              <img className='w-44 h-44 -mr-4 rounded-full' src={guido} />
              <img className='z-10' src={love} />
              <img className='w-44 h-44 -ml-4 rounded-full' src={abigail} />
            </div>

            <p className='mt-5 text-center text-lg font-bold text-green-900'>Guido e Abigail</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='relative flex'>
              <img className='w-44 h-44 -mr-4 rounded-full' src={ellipse} />
              <img className='z-10' src={love} />
              <img className='w-44 h-44 -ml-4 rounded-full' src={ellipse2} />
            </div>

            <p className='mt-5 text-center text-lg font-bold text-green-900'>Pancho e Kiwi </p>
          </div>

        </div>

        <button className='py-5 px-16 rounded-full bg-yellow-400 mt-20 font-bold text-lg text-green-900'>
          Carregar mais antigos
        </button>
      </main>

      <footer className='bg-green-700 h-[550px] w-full mt-40'>
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
              <Link to="pets-falling-in-love" className='font-bold text-white text-lg mb-[15px]'>Pets namorando</Link>
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
            <div className='rounded-full bg-green-800 mr-20 w-20 h-20'>
              <button>
                <img src={facebook} className="w-7 h-7 m-7"/>
              </button>
            </div>
            <div className='rounded-full bg-green-800 mr-20 w-20 h-20'>
              <button>
                <img src={instagram} className="w-7 h-7 m-7"/>
              </button>
            </div>
            <div className='rounded-full bg-green-800 mr-20 w-20 h-20'>
                <button>
                  <img src={youtube} className="w-7 h-7 m-7"/>
                </button>
            </div>
          </div>
        </div>

        <div className='flex flex-row'>
          <p className='text-sm text-white ml-[86px] mt-[72px] pb-10'>Política de privacidade</p>
          <p className='text-sm text-white mt-[72px] pb-10 mx-5'>.</p>
          <p className='text-sm text-white mt-[72px] pb-10'>Termos de uso</p>
          <p className='text-sm text-white mt-[72px] pb-10 mx-5'>.</p>
          <p className='text-sm text-white mt-[72px] pb-10'>Política de Cookies</p>
          <p className='text-sm text-white mt-[72px] pb-10 mx-5'>.</p>
          <p className='text-sm text-white mt-[72px] pb-10'>Política de cancelamento</p>
        </div>
      </footer>
      <div className='bg-green-800 w-full h-[90px] flex justify-between items-center'>
        <p className='font-bold text-xs text-white ml-[86px]'>Pett Love - Relacionamento | CNPJ: 43.660.696/0001-95 </p>
        <button>
          <img src={setaAcima} className="w-7 h-4 mr-52"/>
        </button>
        <img src={clickweb} className="w-12 h-3 mr-20"/>
      </div>
    </div>
  )
}

export default PetsFallingInLove