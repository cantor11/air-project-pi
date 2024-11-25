import { useMemo } from "react";
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

  // Array that contains every line that will be shown
  const textLines = useMemo(
    () => [
      "Aquí aparecerá información extra sobre la solución que se esté viendo.",

      "En muchos países, gran parte de la electricidad proviene de fuentes fósiles como el carbón o el gas natural, que emiten dióxido de carbono (CO₂) y otros Gases de Efecto Invernadero cuando se queman.<br><br>Al usar electrodomésticos eficientes, como bombillas LED en lugar de las tradicionales, reducimos la demanda de electricidad y, por ende, las emisiones relacionadas con la generación de esa electricidad.<br><br>También, muchos aparatos consumen energía incluso cuando están apagados, al desenchufarlos se ahorra energía lo cual también ayuda a que se tenga que producir menos.",

      "Los paneles solares permiten generar energía limpia sin emitir Gases de Efecto Invernadero. Al depender de la energía solar, que no produce CO₂ ni otros contaminantes, reducimos nuestra huella de carbono.<br><br>Hay muchos dispositivos pequeños (como luces solares para el jardín) los cuales pueden implementar esta tecnología y aportar al ahorro de energía.<br><br>Aunque la inversión inicial puede ser alta, con el tiempo el costo de la electricidad puede disminuir significativamente, y a largo plazo se contribuye al desplazamiento de energías fósiles y directamente la reducción de gases que van a la atmósfera.",

      "Reducir el uso del carro siempre que sea posible es una de las maneras más efectivas de disminuir las emisiones de CO₂.<br><br>Para esto se pueden usar otras alternativas de transporte como caminar, usar la bicicleta o llegar a usar el transporte público.<br><br>En última instancia, si es necesario usar un carro, se puede optar por un modelo eléctrico o híbrido (usa gasolina pero también eléctricidad).",

      "El plástico no sólo es uno de los mayores contaminantes del medio ambiente, sino que su producción implica una gran huella de carbono.<br>La industria petroquímica, que fabrica plásticos a partir del petróleo, emite grandes cantidades de CO₂.<br><br>Al optar por alternativas reutilizables (como bolsas de tela o botellas de acero inoxidable), se reduce la demanda de productos derivados del petróleo, disminuyendo las emisiones directas.<br><br>Además, el reciclaje aporta ya que la fabricación de productos a partir de materiales reciclados generalmente consume menos energía que producir esos mismos materiales desde cero, lo que implica menos emisiones de CO₂ por la extracción y producción de materias primas.",

      "La industria ganadera es responsable de una gran parte de las emisiones de Gases de Efecto Invernadero, especialmente de metano (CH₄), un gas mucho más potente que el CO₂.<br><br>Reducir el consumo de carne, especialmente de carnes rojas, y optar por una dieta más basada en plantas ayuda a disminuir las emisiones derivadas de la producción de estos alimentos.<br><br>Algunas personas deciden adoptar un enfoque gradual, como ser vegetarianos ciertos días de la semana o simplemente reducir la cantidad de carne que consumen. Esto también contribuye a la sostenibilidad del planeta a largo plazo.",

      "Otro aporte es planificar mejor las compras y el consumo de alimentos para evitar que se tiren productos que podrían haberse aprovechado.<br><br>Al hacer esto, se reduce la energía usada en el transporte, producción, almacenamiento de estos productos, lo cual disminuye el CO₂ y el metano (CH₄) que generan estos procesos, y esto implica la reducción de la huella de carbono.",

      "La idea es disminuir el uso de agua tratada, para esto se puede instalar un sistema para recoger agua de lluvia y usarla en tareas como regar jardines o para limpiar algún vehículo, en lugar de usar agua potable.<br><br>Otra opción es usar dispositivos de ahorro de agua, como duchas de bajo flujo y grifos con limitadores.<br><br>Al disminuir el uso de agua tratada, implica menos energía para su tratamiento y distribución reduciendo indirectamente la huella de carbono asociada con los procesos de tratamiento y transporte de agua.",

      " Los árboles absorben un gas de Efecto Invernadero que es el CO₂ y ayudan a purificar el aire.<br><br>Puedes participar en campañas locales de reforestación o plantar árboles en tu propio jardín o balcón.",

      "¡Difunde el conocimiento!<br><br>Comparte esta o cualquier información sobre el Efecto Invernadero y sus consecuencias con familiares y amigos para generar conciencia.<br><br>Una forma fácil de hacerlo hoy en día es mediante las redes sociales.",
    ], []
  );

  return (
    <>
      {solutionsSection.isMoreInfoView ?
        <div style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.7)', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'rgb(50, 50, 50)', width: '60%', height: 'min-content', marginBottom: '10%', borderRadius: '10%' }}>
            <div style={{ textAlign: 'center', fontSize: '1.5vw', color: 'lightgray', margin: '5%',
              textShadow: `
                -1px -2px 0 #AA0,
                0px -0px 0 #990,
                -2px 2px 0 #330,
                2px 2px 0 #550`
            }}>
              <div dangerouslySetInnerHTML={{ __html: textLines[solutionsSection.solutionsStep] }} />
            </div>
          </div>
        </div>
        : null}
    </>
  )
}

export default SolutionsMoreInfoTexts;