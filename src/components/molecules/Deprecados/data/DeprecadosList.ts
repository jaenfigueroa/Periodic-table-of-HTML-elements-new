import { Data } from '../../../../types/periodicTable'

export const DEPRECADOS_lIST:Data =   {
  title: 'Deprecados',
  elements: [
    {
      tag: 'acronym',
      description: 'Este elemento se utilizaba para definir una abreviatura. Sin embargo, se considera obsoleto y se recomienda utilizar el elemento **<abbr>** en su lugar para definir abreviaturas y proporcionar una descripción opcional.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/acronym',
    },
    {
      tag: 'applet',
      description: 'Este elemento se utilizaba para insertar applets de Java en una página web. Sin embargo, debido a la disminución del soporte de los navegadores y los problemas de seguridad asociados con Java, se recomienda utilizar tecnologías web modernas como **HTML5, CSS3 y JavaScript para crear interacciones y animaciones.**',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/applet',
    },
    {
      tag: 'basefont',
      description: 'Este elemento se utilizaba para establecer el tamaño de la fuente base en una página web. Sin embargo, se considera obsoleto y se recomienda utilizar **estilos CSS**, como **"font-size"**, para controlar el **tamaño de la fuente** en lugar del atributo "basefont".',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/basefont',
    },
    {
      tag: 'big',
      description: 'Este elemento se utilizaba para aumentar el tamaño del texto. Sin embargo, se considera obsoleto y se recomienda utilizar **estilos CSS para controlar el tamaño de la fuente.**',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/big',
    },
    {
      tag: 'blink',
      description: 'Este elemento se utilizaba para hacer parpadear el texto. Sin embargo, se considera obsoleto y se recomienda evitar el uso de este efecto, ya que puede ser molesto para los usuarios. **Si necesitas resaltar texto, considera utilizar estilos CSS o animaciones más sutiles**.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/blink',
    },
    {
      tag: 'center',
      description: 'Este elemento se utilizaba para centrar contenido en una página web. Sin embargo, se considera obsoleto y se recomienda utilizar estilos CSS, como **"text-align: center"** en un contenedor o elemento específico, para lograr el centrado del contenido.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/center',
    },
    {
      tag: 'command',
      description: 'Este elemento se utilizaba para crear elementos de menú y botones de comando en una barra de herramientas. Sin embargo, se considera obsoleto y se recomienda utilizar elementos de formulario como **<input>** o **<button>** para **crear controles interactivos.**',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/command',
    },
    {
      tag: 'content',
      description: 'Este elemento se utilizaba en el contexto de la API de Shadow DOM para representar contenido reutilizable. Sin embargo, debido a cambios en las especificaciones, se ha eliminado y se recomienda **utilizar las API de Shadow DOM o Custom Elements** para **crear contenido reutilizable**.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/content',
    },
    {
      tag: 'dir',
      description: 'Este elemento se utilizaba para crear listas de directorios. Sin embargo, se considera obsoleto y se recomienda utilizar elementos de lista como **<ul>** o **<ol>** para crear **listas en HTML**.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/dir',
    },
    {
      tag: 'element',
      description: 'Este elemento se utilizaba en el contexto de la API de Web Components para crear componentes personalizados. Sin embargo, debido a cambios en las especificaciones, se ha eliminado y se recomienda **utilizar las API de Shadow DOM** o **Custom Elements** para crear **componentes personalizados**.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/element',
    },
    {
      tag: 'font',
      description: 'Este elemento se utilizaba para aplicar estilos de fuente, como tamaño, color y tipo de letra, a un bloque de texto. Sin embargo, se considera obsoleto y se recomienda utilizar **estilos CSS** para aplicar formatos de fuente a través de propiedades como **"font-size"**, **"color"** y **"font-family"**.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/font',
    },
    {
      tag: 'frame',
      description: 'Este elemento se utilizaba para definir un marco dentro de un conjunto de marcos (<frameset>) en una página web. Sin embargo, debido a que los marcos están obsoletos en HTML5, se recomienda utilizar tecnologías modernas como **CSS Grid o Flexbox** para crear **diseños de página más flexibles y responsivos**.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/frame',
    },
    {
      tag: 'frameset',
      description: 'Este elemento se utilizaba como un contenedor para definir una estructura de marcos en una página web. Sin embargo, debido a que los marcos están obsoletos en HTML5, se recomienda utilizar tecnologías modernas como **CSS Grid** o **Flexbox** para crear diseños de página más flexibles y responsivos.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/frameset',
    },
    {
      tag: 'noframes',
      description: 'se utilizaba en conjunción con <frame> y <frameset> para proporcionar contenido alternativo a los navegadores que no admiten marcos. Sin embargo, debido a que los marcos están obsoletos en HTML5, el elemento <noframes> también se considera obsoleto. En lugar de utilizar <noframes>, se recomienda utilizar etiquetas **<noscript>** para **proporcionar contenido alternativo en caso de que los scripts no se ejecuten**.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/noframes',
    },
    {
      tag: 'image',
      description: 'Se recomienda utilizar el elemento **<img>** en lugar del elemento "image" para insertar imágenes en una página web.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/image',
    },
    {
      tag: 'isindex',
      description: 'Este elemento era utilizado en el pasado para crear un campo de búsqueda en una página web. Sin embargo, se considera obsoleto y se recomienda utilizar elementos de formulario como **<input>** y **<label>** para crear formularios de búsqueda más flexibles y personalizables.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/isindex',
    },
    {
      tag: 'keygen',
      description: 'Este elemento se utilizaba anteriormente para generar pares de claves criptográficas en un formulario. Sin embargo, se ha eliminado del estándar HTML y se recomienda utilizar tecnologías más seguras, como **JSON Web Tokens (JWT), para manejar la autenticación y generación de claves**.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/keygen',
    },
    {
      tag: 'listing',
      description: 'Este elemento se utilizaba para mostrar bloques de texto preformateado, pero ha sido obsoleto. En su lugar, se recomienda utilizar el elemento **<pre>** junto con **estilos CSS** para mostrar bloques de texto preformateado en lugar del elemento "listing".',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/listing',
    },
    {
      tag: 'marquee',
      description: 'Este elemento se utilizaba para crear efectos de desplazamiento de texto o imágenes. Sin embargo, se considera obsoleto debido a su impacto negativo en la experiencia del usuario y la accesibilidad. Se recomienda utilizar **animaciones CSS o JavaScript más flexibles** y personalizables **para crear efectos de desplazamiento**.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/marquee',
    },
    {
      tag: 'menuitem',
      description: 'Este elemento se utilizaba para crear elementos de menú dentro de una lista de comandos o acciones. Sin embargo, ha sido obsoleto y se recomienda utilizar elementos de lista **<ul>** o **<ol>** o **menús personalizados junto con estilos CSS y eventos de JavaScript** para crear menús interactivos.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/menuitem',
    },
    {
      tag: 'multicol',
      description: 'Este elemento se utilizaba para crear diseños de varias columnas en una página web. Sin embargo, ya no se considera parte del estándar HTML y se recomienda utilizar **CSS para lograr diseños de varias columnas** utilizando propiedades como **"column-count"** y **"column-width"**.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/multicol',
    },
    {
      tag: 'nextid',
      description: 'Este elemento se utilizaba para especificar un ID único para el siguiente elemento. Sin embargo, se considera obsoleto y se recomienda utilizar **técnicas modernas de generación de IDs o atributos personalizados** para lograr el mismo resultado.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/nextid',
    },
    {
      tag: 'nobr',
      description: 'Este elemento se utilizaba para evitar el salto de línea automático en el texto. Sin embargo, debido a que se considera obsoleto, se recomienda utilizar **estilos CSS**, como **"white-space: nowrap"**, para evitar el salto de línea automático y controlar el flujo del texto.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/nobr',
    },
    {
      tag: 'noembed',
      description: 'Este elemento se utilizaba anteriormente para proporcionar contenido alternativo a los navegadores que no admiten la inserción de contenido multimedia. Sin embargo, dado que HTML5 ofrece mejores alternativas, se recomienda utilizar el elemento **<embed>** o tecnologías modernas, como **HTML5 o JavaScript**, para **incrustar contenido multimedia** en una página web.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/noembed',
    },
    {
      tag: 'noframes',
      description: 'Este elemento se utilizaba en conjunción con <frame> y <frameset> para proporcionar contenido alternativo para navegadores que no admiten marcos. Sin embargo, dado que los marcos están obsoletos, el elemento <noframes> también se considera obsoleto. En su lugar, se recomienda utilizar técnicas modernas de diseño web, como CSS, JavaScript y HTML5.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/noframes',
    },
    {
      tag: 'plaintext',
      description: 'Este elemento se utilizaba anteriormente para mostrar texto sin formato, sin interpretar las etiquetas HTML. Sin embargo, debido a que se considera inseguro y propenso a ataques de scripting, se recomienda utilizar el elemento **<pre>** junto con **estilos CSS** para mostrar bloques de texto preformateado en lugar del elemento "plaintext".',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/plaintext',
    },
    {
      tag: 'shadow',
      description: 'Este elemento se utilizaba para crear elementos de sombra en el pasado, pero ya no es necesario debido a la introducción de la API de Shadow DOM. Se recomienda utilizar las **API de Shadow DOM o Custom Elements** para crear elementos y componentes personalizados en su lugar.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/shadow',
    },
    {
      tag: 'spacer',
      description: 'Este elemento se utilizaba anteriormente para agregar espacios en blanco y ajustar la maquetación de una página. Sin embargo, dado que se considera obsoleto, se recomienda utilizar **estilos CSS**, como **márgenes o rellenos, para controlar los espacios y la maquetación** en lugar del elemento "spacer".',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/spacer',
    },
    {
      tag: 'strike',
      description: 'Este elemento se utilizaba anteriormente para tachar el texto y representar contenido obsoleto. Se recomienda utilizar el elemento **<del>** en su lugar para indicar contenido eliminado o utilizar estilos CSS para aplicar el efecto de tachado al texto según sea necesario.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/strike',
    },
    {
      tag: 'tt',
      description: 'Este elemento se utilizaba para representar texto de fuente de teletipo (monoespaciada). En su lugar, se recomienda utilizar estilos CSS, como **"font-family: monospace"**, para **aplicar una fuente de teletipo** a través de las propiedades de estilo.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/tt',
    },
    {
      tag: 'xmp',
      description: 'Este elemento se utilizaba anteriormente para mostrar texto preformateado, conservando los espacios en blanco y las etiquetas HTML. Sin embargo, debido a que se considera obsoleto, se recomienda utilizar el elemento **<pre>** junto con estilos CSS para mostrar bloques de texto preformateado en lugar del elemento "xmp".',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/xmp',
    },
    {
      tag: 'i',
      description: 'Se utilizaba para aplicar estilo de cursiva al texto. Sin embargo, se considera obsoleto y se recomienda utilizar el elemento **<em>** para enfatizar el texto de manera semántica **o utilizar estilos CSS** para aplicar estilos de cursiva.',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/i',
    },
    {
      tag: 'b',
      description: 'Se utilizaba para aplicar estilo de negrita al texto. Sin embargo, se considera obsoleto y se recomienda utilizar el elemento **<strong>** para enfatizar el texto de manera semántica **o utilizar estilos CSS para aplicar estilos de negrita.**',
      group: 'Elems. deprecados',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/b',
    },
  ],
  distribution: [],
}