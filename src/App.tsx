/* eslint-disable react-hooks/purity */
import { useState } from "react";
import "./App.css";
import { categorias } from "./mocks/categorias";
import { Modal } from "./components/Modal";
import { preguntasUXUI } from "./mocks/diseño";
import { preguntasJavascript } from "./mocks/js";
import { preguntasAxios } from "./mocks/axios";
import { preguntasTanstackQuery } from "./mocks/tanstanck";
import { preguntasZustand } from "./mocks/zustand";
import { preguntasPHP } from "./mocks/php";

type Pregunta = {
  categoria: string;
  pregunta: string;
  respuesta: string;
};

const TODAS_LAS_PREGUNTAS: Pregunta[] = [
  ...preguntasUXUI,
  ...preguntasJavascript,
  ...preguntasAxios,
  ...preguntasTanstackQuery,
  ...preguntasZustand,
  ...preguntasPHP,
];

function App() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState<string>("");
  const [preguntaRandom, setPreguntaRandom] = useState<Pregunta | null>(null);

  const handleSeleccionarPregunta = (categoria: string) => {
    const filtradas = TODAS_LAS_PREGUNTAS.filter(
      (p) => p.categoria.toLowerCase() === categoria.toLowerCase(),
    );

    if (filtradas.length > 0) {
      const nuevaPregunta =
        filtradas[Math.floor(Math.random() * filtradas.length)];
      setPreguntaRandom(nuevaPregunta);
    } else {
      setPreguntaRandom(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center w-full py-10 px-5 justify-start bg-gray-100">
      <h1 className="text-2xl font-bold ">Selecciona la categoría</h1>

      <div className="w-full grid grid-cols-2 gap-4 p-4  lg:flex lg:justify-center lg:items-center">
        {categorias.map((item) => (
          <div
            className={`w-40 h-20 lg:w-96 lg:h-52 flex items-center justify-center cursor-pointer rounded-xl shadow-md transition-transform active:scale-95 ${item.color} ${item.text}`}
            key={item.id}
            onClick={() => {
              setCategoriaSeleccionada(item.categoria);
              handleSeleccionarPregunta(item.categoria);
              setOpenModal(true);
            }}
          >
            <span className="font-medium text-base lg:text-2xl">
              {item.categoria}
            </span>
          </div>
        ))}
      </div>

      {openModal && (
        <Modal close={() => setOpenModal(false)} buttonClose title="Pregunta">
          <div className="flex flex-col justify-between items-center h-full gap-10 py-10">
            <div className="flex flex-col gap-5">
              <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">
                {categoriaSeleccionada}
              </p>
              <p className="text-2xl font-semibold">
                {preguntaRandom?.pregunta ??
                  "No hay preguntas en esta categoría"}
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-gray-700">
                  {preguntaRandom?.respuesta}
                </p>
              </div>
            </div>
            <button
              className="bg-pink-500 text-white font-bold text-lg hover:bg-pink-400 px-4 py-2 w-full rounded-lg transition-colors"
              onClick={() => handleSeleccionarPregunta(categoriaSeleccionada)}
              disabled={!preguntaRandom}
            >
              Otra pregunta
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
