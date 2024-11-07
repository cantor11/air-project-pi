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
 */

const AwarenessText = () => {
  const { view, setView } = useGreeenhouseStore();

  // Array that contains every line that will be shown on awareness section
  const textLines = useMemo(
    () => [
      "El Efecto Invernadero<br>es un fenómeno natural",
      "Los gases en la atmósfera<br>atrapan el calor del sol",
      "Sin estos gases, la tierra tendría<br>una temperatura muy baja",
      "Pero, el ser humano ha aumentado<br>la concentración de estos gases",
      "Ese exceso tampoco es bueno",
      "No solo provoca<br>temperaturas extremas",
      "Sino otros problemas<br>como sequías, inundaciones<br>y tormentas más poderosas"
    ], []
  );

  // Change the current line of information using the store, with the next one or previous one, using % and based on the amount of lines in textLines array
  const handleNextLine = (isNext) => {
    isNext ?
    setView({ awarenessStep: (view.awarenessStep + 1) % textLines.length })
    : setView({ awarenessStep: (view.awarenessStep + 7 - 1) % textLines.length })
  };

  // Everytime user gets in this section, it will show the first line, so we set the current line with 0 using the store
  useEffect(() => {
    setView({
      awarenessStep: 0,
    });
    return () => null;
  }, []);

  // Function to change camera position and lookAt to title view or Awareness section view
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
            key={view.awarenessStep} // Unique key for each line
            //className="text-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div dangerouslySetInnerHTML={{ __html: textLines[view.awarenessStep] }} />
          </motion.div>
        </AnimatePresence>
      </div>

      <PaginationDots total={textLines.length} currentIndex={view.awarenessStep} /> {/* Pagination for current line */}

      <button style={{ position: 'absolute' , bottom: '10%', left: '10%'}} onClick={handleClickCameraAnimation}> Volver </button>

      <button style={{ position: 'absolute' , bottom: '10%', right: '17%', backgroundColor: 'gray' }} onClick={() => handleNextLine(false)}>
        {'<'}
      </button>
      <button style={{ position: 'absolute' , bottom: '10%', right: '10%', backgroundColor: 'gray' }} onClick={() => handleNextLine(true)}>
        {'>'}
      </button>
    </>
  );
};

export default AwarenessText;