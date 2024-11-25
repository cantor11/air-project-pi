import { useCallback, useEffect, useMemo } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import useGreeenhouseStore from "../../../stores/greenhouse-store";
import SolutionsMoreInfoTexts from './SolutionsMoreInfoTexts';

/**
 * SolutionsText Component
 * 
 * This functional React component sets up a interactive space using 'framer-motion'
 * to visualize some lines of text one by one with smooth animations in the Solutions view,
 * and buttons to let the user see the next line of information or go back to the previous one.
 * To know the current line of information or to change it, we will use a store made from Zustand.
 * Also, we will set the amount of lines we have using the store.
 */


const SolutionsText = () => {
  const { setView, solutionsSection, setSolutionsSection } = useGreeenhouseStore(); // information brought from store

  // Array that contains every line that will be shown on solutions section
  const textLines = useMemo(
    () => [
      "Soluciones<br><br>Aquí encontrarás diferentes<br>soluciones que puedes<br>hacer tú mismo",
      "Solución #1<br><br>Reducir el Consumo<br>de Energía en el Hogar",
      "Solución #2<br><br>Optar por Fuentes<br>de Energía Renovables",
      "Solución #3<br><br>Cambiar el Uso<br>del Transporte",
      "Solución #4<br><br>Reducir, Reutilizar<br>y Reciclar",
      "Solución #5<br><br>Reducir la Industria ganadera",
      "Solución #6<br><br>Evitar el desperdicio<br>de alimentos",
      "Solución #7<br><br>Apostar por el Reciclaje<br>del Agua",
      "Solución #8<br><br>Plantar Árboles",
      "Solución #9<br><br>¡Educa y Comparte<br>la Información!",
    ], []
  );

  // Change the current line of information using the store, with the next one or previous one, using % and based on the amount of lines we have
  const handleNextLine = (isNext) => {
    isNext ?
    setSolutionsSection({ solutionsStep: (solutionsSection.solutionsStep + 1) % solutionsSection.textQuantity })
    : setSolutionsSection({ solutionsStep: (solutionsSection.solutionsStep + solutionsSection.textQuantity - 1) % solutionsSection.textQuantity })
  };

  // Everytime user gets in this section, it will show the first line, so we set the current line with 0 using the store, also we set in the store the amount of lines we have
  useEffect(() => {
    setSolutionsSection({
      solutionsStep: 0,
      textQuantity: textLines.length,
    });

    return () => null;
  }, []);

  // Function to change camera position and lookAt to title view
  const handleClickCameraAnimation = useCallback(() => {
    setView({
      isSolutionsSectionView: false,
    });
  }, []);

  // Function to stop showing More Info subsection
  const handleClickShowMoreInfo = useCallback(() => {
    setSolutionsSection({
      isMoreInfoView: true,
    });
  }, []);

  const PaginationDots = ({ total, currentIndex }) => {
    return (
      <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px', zIndex: 1000 }}>
        {[...Array(total)].map((_, index) => (
          <div
            key={index}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              transition: 'background-color 0.3s',
              backgroundColor: index === currentIndex ? 'white' : 'black',
              border: '2px solid',
              borderColor: index === currentIndex ? 'lightgreen' : 'gray'
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <div style={{ position: 'absolute', top: '50%', left: '40%', transform: 'translate(-100%, -50%)', width: '70vh', height: 'min-content', fontSize: '1.5vw', fontStyle: 'italic', color: 'lightgray',
        textShadow: `
          -1px -1px 0 #CC0,
          1px -1px 0 #990,
          -1px 1px 0 #330,
          1px 1px 0 #550`
      }}>
        <AnimatePresence wait>
          <motion.div
            key={solutionsSection.solutionsStep} // Unique key for each line
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div dangerouslySetInnerHTML={{ __html: textLines[solutionsSection.solutionsStep] }} />
          </motion.div>
        </AnimatePresence>
      </div>

      <PaginationDots total={textLines.length} currentIndex={solutionsSection.solutionsStep} /> {/* Pagination for current line */}

      <div style={{ position: 'absolute', bottom: '10%', left: '10%' }}>
        <p style={{ textAlign: 'center', fontSize: '1vw', color: 'lightgray',
          textShadow: `
            -1px -1px 0 #5037da,
            1px -1px 0 #5037da,
            -1px 1px 0 #5037da,
            1px 1px 0 #5037da`
        }}>
          {'Usa Esc'}<br></br>
          {'para salir'}
        </p>
        <button onClick={handleClickCameraAnimation}> Volver </button>
      </div>

      <div style={{ position: 'absolute', bottom: '10%', display:'flex', flexDirection:'column' }}>
        <p style={{ textAlign: 'center', fontSize: '1vw', color: 'lightgray',
          textShadow: `
            -1px -1px 0 #5037da,
            1px -1px 0 #5037da,
            -1px 1px 0 #5037da,
            1px 1px 0 #5037da`
        }}>
          {'Mira más información'}<br></br>
          {'sobre la solución'}
        </p>
        <button onClick={handleClickShowMoreInfo}> Más informacion </button>
      </div>

      <div style={{ position: 'absolute', bottom: '10%', right: '10%', alignItems:'center' }}>
        <p style={{ textAlign: 'center', fontSize: '1vw', color: 'lightgray',
          textShadow: `
            -1px -1px 0 #5037da,
            1px -1px 0 #5037da,
            -1px 1px 0 #5037da,
            1px 1px 0 #5037da`
        }}>
          {'Usa las teclas <- -> | A D'}<br></br>
          {'para cambiar de texto'}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4vh' }}>
          <button style={{ backgroundColor: 'gray' }} onClick={() => handleNextLine(false)}>
            {'<'}
          </button>
          <button style={{ backgroundColor: 'gray' }} onClick={() => handleNextLine(true)}>
            {'>'}
          </button>
        </div>
      </div>

      <SolutionsMoreInfoTexts />
    </>
  );
};

export default SolutionsText;