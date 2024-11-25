import { useCallback, useEffect, useMemo, useState } from "react";
import useGreeenhouseStore from "../../../stores/greenhouse-store";

/**
 * SolutionsMoreInfoTexts Component
 * 
 * This functional React component sets up a subsection for Solutions section
 * to visualize some extra information based on the text line seen in Solutions section.
 * To know the current line of information or to change it, we will use a store made from Zustand.
 */


const SolutionsMoreInfoTexts = () => {
  const { solutionsSection } = useGreeenhouseStore(); // information brought from store
  const [ currentTextIndex, setCurrentTextIndex ] = useState(0); //solutionsSection.solutionsStep;

  // Array that contains every line that will be shown
  const textLines = useMemo(
    () => [
      "Usar electrodomésticos<br>\neficientes, como reemplazar<br>bombillas tradicionales<br>por bombillas LED de<br>bajo consumo",
      "Desenchufar dispositivos, ya",
      "El Efecto invernadero<br>es un",
      "Los gases en la atmósfera<br>atrapan el calor del sol",
      "Sin estos gases, la tierra tendría<br>una temperatura muy baja",
      "Pero, el ser humano ha aumentado<br>la concentración de estos gases",
      "Ese exceso tampoco es bueno",
      "No solo provoca<br>temperaturas extremas",
      "Sino otros problemas<br>como sequías,",
      "inundaciones<br>y tormentas más poderosas",
      "Soluciones<br>y más soluciones"
    ], []
  );

  // Function to set the index of the text that should be shown here based on the text line shown in Solutions section
  const getMoreInfoIndex = useCallback(() => {
    const indexSolSection = solutionsSection.solutionsStep;

    if (indexSolSection >= 0 && indexSolSection < 2) {
      setCurrentTextIndex(0);
    } else {
      setCurrentTextIndex(1);
    }
  }, [solutionsSection]);

  // Every time the component is up, it'll show the first line
  useEffect(() => {
    setCurrentTextIndex(0);

    return () => null;
  }, []);

  // Every time the text line is changed in Solutions section, change the index here
  useEffect(() => {
    getMoreInfoIndex();

    return () => null;
  }, [solutionsSection]);

  return (
    <>
      {solutionsSection.isMoreInfoView ?
        <div style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'gray', width: '40%', height: '60%', marginBottom: '10%', borderRadius: '10%' }}>
            <div style={{ textAlign: 'center', fontSize: '2vw', color: 'lightgray', marginTop: '10%',
              textShadow: `
                -1px -1px 0 #CC0,
                1px -1px 0 #990,
                -1px 1px 0 #330,
                1px 1px 0 #550`
            }}>
              <div dangerouslySetInnerHTML={{ __html: textLines[currentTextIndex] }} />
            </div>
          </div>
        </div>
        : null}
    </>
  )
}

export default SolutionsMoreInfoTexts;