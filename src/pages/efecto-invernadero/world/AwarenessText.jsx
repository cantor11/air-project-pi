import { useCallback, useEffect, useMemo } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import useGreeenhouseStore from "../../../stores/greenhouse-store";

/**
 * AwarenessText Component
 * 
 * This functional React component sets up a interactive space using 'framer-motion'
 * to visualize some lines of text one by one with smooth animations in the Awareness view,
 * and buttons to let the user see the next line of information or go back to the previous one.
 * To know the current line of information or to change it, we will use a store made from Zustand.
 * Also, we will set the amount of lines we have using the store.
 */

const AwarenessText = () => {
  const { setView, awarenessSection, setAwarenessSection } = useGreeenhouseStore();

  // Array that contains every line that will be shown on awareness section
  const textLines = useMemo(
    () => [
      "El Efecto Invernadero<br>es un fenómeno natural",
      "Los gases en la atmósfera<br>atrapan el calor del sol",
      "Sin estos gases, la tierra tendría<br>una temperatura muy baja",
      "Pero, el ser humano ha aumentado<br>la concentración de estos gases",
      "Ese exceso tampoco es bueno",
      "No solo provoca<br>temperaturas extremas",
      "Sino otros problemas<br>como sequías,",
      "inundaciones<br>y tormentas más poderosas"
    ], []
  );

  // Change the current line of information using the store, with the next one or previous one, using % and based on the amount of lines we have
  const handleNextLine = (isNext) => {
    isNext ?
    setAwarenessSection({ awarenessStep: (awarenessSection.awarenessStep + 1) % awarenessSection.textQuantity })
    : setAwarenessSection({ awarenessStep: (awarenessSection.awarenessStep + awarenessSection.textQuantity - 1) % awarenessSection.textQuantity })
  };

  // Everytime user gets in this section, it will show the first line, so we set the current line with 0 using the store, also we set in the store the amount of lines we have
  useEffect(() => {
    setAwarenessSection({
      awarenessStep: 0,
      textQuantity: textLines.length,
    });

    return () => null;
  }, []);

  // Function to change camera position and lookAt to title view
  const handleClickCameraAnimation = useCallback(() => {
    setView({
      isAwarenessSectionView: false,
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
            key={awarenessSection.awarenessStep} // Unique key for each line
            //className="text-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div dangerouslySetInnerHTML={{ __html: textLines[awarenessSection.awarenessStep] }} />
          </motion.div>
        </AnimatePresence>
      </div>

      <PaginationDots total={textLines.length} currentIndex={awarenessSection.awarenessStep} /> {/* Pagination for current line */}

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
    </>
  );
};

export default AwarenessText;