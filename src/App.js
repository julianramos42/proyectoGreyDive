import logo from './assets/logo.png';
import './App.css';
import { useState } from 'react';
import VideoEmbed from './videoEmbed';
import { data } from './assets/db';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

function App() {
  const page1Data = data[0];
  const page2Data = data[1];

  const [currentPage, setfirst] = useState("page1");
  const [currentPageData, setfirstPageData] = useState(page1Data);

  const onPageChange = (pageName) => {
    setfirst(pageName);
    if (pageName === "page1") setfirstPageData(page1Data);
    if (pageName === "page2") setfirstPageData(page2Data);
  }

  const link1 = page1Data.cliente+"/testeador-1";
  const link2 = page1Data.cliente+"/testeador-2";

  return (
    <div className="App">
      <div className='topdiv d-flex flex-column align-items-start justify-content-start'>

        <img src={logo} className="logo-class mt-5" alt="logo" />

        <div className="title">
          {currentPage && currentPage === "page1" && (<div><h2>Nombre del cliente: {page1Data.cliente}</h2></div>)}
          {currentPage && currentPage === "page2" && (<div><h2>Nombre del cliente: {page2Data.cliente}</h2></div>)}
          <h2>Test: Test de usabilidad en el sitio web</h2>
        </div>

        <Router>
          <div className='btn-container'>
            <Link to={link1} className='btn' onClick={() => onPageChange("page1")}>
            Testeador 1
          </Link>
          <Link to={link2} className='btn btn2' onClick={() => onPageChange("page2")}>
            Testeador 2
          </Link>
          </div>
        </Router>

        <div className='pageContainer d-flex flex-column align-items-start justify-content-start'>
          {currentPage && currentPage === "page1" && (<h2 className="text-class">Testeador 1</h2>)}
          {currentPage && currentPage === "page2" && (<h2 className="text-class">Testeador 2</h2>)}
          <div className='d-flex justify-content-center vidClass'>
            <VideoEmbed vidURL={currentPageData.linkVideo} />
          </div>
          <h2 className="text-class">Transcripción</h2>
          <div className="overflow-auto transcript mb-3 mt-3">
            <div dangerouslySetInnerHTML={{ __html: currentPageData.transcripcion }}></div>
          </div>
          <h2 className="text-class mb-3 mt-3">Tareas</h2>

          <div className="escenario">Escenario: {currentPageData.escenario}</div>
          <div className='mt-5 mb-5 list-parent'>
            {currentPageData.preguntas.map((item, index) => {
              return (<div className='test-list-div d-flex flex-column align-items-start justify-content-start'>
                <div className='tarea-text mt-3'>Tarea {index + 1}</div>
                {
                  item.texto.split("\\n").map(function (item1, i) {
                    return (
                      <span key={i} className='tarea-text1 mb-3'>
                        {item1}
                        <br />
                      </span>
                    )
                  })
                }
                {isStrictNumeric(item.respuesta) && <div className='tarea-text1 mb-2 mt-2'>Respuesta: {item.respuesta} </div>}
                <div className='duracion-text mt-2 mb-3'>Duración de la tarea: {item.tiempo} </div>
              </div>)
            })}
          </div>


        </div>

      </div>


    </div>
  );
}

function isStrictNumeric(str) {
  if (typeof str != "string") return false
  return !isNaN(str) &&
    !isNaN(parseFloat(str))
}

export default App;
