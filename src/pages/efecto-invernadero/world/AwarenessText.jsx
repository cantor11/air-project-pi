import { useMemo, useState } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';

/**
 * AwarenessText Component
 * 
 * This functional React component sets up a interactive space using 'framer-motion'
 * to visualize some lines of text one by one with smooth animations in the Awareness view,
 * and a button to let the user see the next line of information.
 */

const AwarenessText = () => {
  const [currentLine, setCurrentLine] = useState(0);
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
  )

  // Change the current line of information with the next one on screen
  const handleNextLine = () => {
    setCurrentLine(prevLine => (prevLine + 1) % textLines.length);
  };

  return (
    <>
      <div style={{ position: 'absolute', top: '50%', left: '40%', transform: 'translate(-100%, -50%)', width: '70vh', height: 'min-content', fontSize: '1.5vw', fontStyle: 'italic' }}>
        <AnimatePresence wait>
          <motion.div
            key={currentLine} // Unique key for each line
            //className="text-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div dangerouslySetInnerHTML={{ __html: textLines[currentLine] }} />
          </motion.div>
        </AnimatePresence>
      </div>
      <button style={{ position: 'absolute' , bottom: '10%', right: '10%'}} onClick={handleNextLine}>
        Siguiente
      </button>
    </>
  );
};

export default AwarenessText;