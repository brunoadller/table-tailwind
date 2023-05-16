import { IconTrash } from '@tabler/icons-react'
import React from 'react'

const Table = () => {
  const handleClick = () => {
    console.log("clicou")
  }
  return (
    <div className="flex flex-col justify-center 
    items-center h-screen 
    ">
      <div >
        <h1 className="mb-36 text-zinc-700 font-bold text-2xl">Registro de Cálculo de IMC</h1>
      </div>
      <div className="flex justify-center items-center  gap-5">
        <input 
        className="border border-gray-500 rounded-xl 
        py-2 px-3 text-gray-700 outline-none"
        type="text" name = "nome" value=" " placeholder="Seu Nome"/>
        <input 
        className="border border-gray-500 rounded-xl 
        py-2 px-3 text-gray-700 outline-none"
        type="text" name = "peso" value="" placeholder="Seu Peso (kg)"/>
        <input 
        className="border border-gray-500 rounded-xl 
        py-2 px-3 text-gray-700 outline-none"
        type="text" name = "altura"value="" placeholder="Sua Altura (m)" />
        <button 
        className=" rounded-xl p-3 bg-zinc-900 text-white font-bold"
        onClick={() => handleClick}>Calcular/Registrar</button>
      </div>

      <div className="min-w-0 relative flex flex-col shadow-lg mb-6">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full">
            <h3 className="font-semibold text-lg p-4 m-4">Tabela de Resultados IMC</h3>
          </div>
        </div>
        <div className="block bg-transparent m-4 p-4 w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border border-solid border-l-0 border-r-0">
                <th className="text-md px-6 py-3">Id</th>
                <th className="text-md px-6 py-3">Nome</th>
                <th className="text-md px-6 py-3">Peso (Kg)</th>
                <th className="text-md px-6 py-3">Altura (m)</th>
                <th className="text-md px-6 py-3">Resultado IMC</th>
                <th className="text-md px-6 py-3">Descrição do Resultado</th>
                <th className="text-md px-6 py-3">Excluir</th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <th className="text-md px-6 py-3">1</th>
                <td className="text-md px-6 py-3">Bruno</td>
                <td className="text-md px-6 py-3">83</td>
                <td className="text-md px-6 py-3">1,68</td>
                <td className="text-md px-6 py-3">25</td>
                <td className="text-md px-6 py-3">
                  Você está levemente acima do peso
                </td>
                <td className="text-md px-6 py-3 ">
                  <IconTrash size={30} className="cursor-pointer" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table