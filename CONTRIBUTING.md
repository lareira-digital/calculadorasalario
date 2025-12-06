# Guía de contribución

¡Gracias por tu interés en contribuir a la Calculadora de Salarios! Este documento te guiará en el proceso.

## Código de conducta

- Sé respetuoso y constructivo
- Acepta críticas constructivas
- Enfócate en lo mejor para la comunidad

## Cómo contribuir

### Reportar errores

Si encuentras un error:

1. Busca en los [issues existentes](https://github.com/lareiradigital/salaries-calculator/issues) para ver si ya fue reportado
2. Si no existe, crea un nuevo issue con:
   - Descripción clara del problema
   - Pasos para reproducirlo
   - Comportamiento esperado vs actual
   - Capturas de pantalla si aplica
   - Navegador y sistema operativo

### Sugerir mejoras

Para sugerir una nueva funcionalidad:

1. Abre un issue describiendo la mejora
2. Explica el caso de uso
3. Si es posible, propón una implementación

### Añadir un convenio colectivo

Esta es una de las formas más valiosas de contribuir. Para añadir un nuevo convenio:

1. **Investiga el convenio**:
   - Busca el texto oficial en el [BOE](https://www.boe.es/) o boletín provincial
   - Identifica las tablas salariales vigentes
   - Anota la estructura (grupos, niveles, categorías)

2. **Crea el archivo del convenio** en `convenios/`:
   ```javascript
   const ConvenioNuevo = {
       name: 'Nombre del Convenio',
       code: 'codigo-convenio',
       edition: 'X Convenio',
       year: 2024,
       source: 'BOE-A-XXXX-XXXXX',

       salaryTables: {
           2024: {
               categoria1: 00000.00,
               categoria2: 00000.00,
               // ...
           }
       },

       getSalary: function(category, year) {
           // Implementar lógica
       }
   };
   ```

3. **Actualiza los archivos necesarios**:
   - `index.html`: añade el convenio al dropdown y los campos específicos
   - `js/main.js`: añade los handlers para el nuevo convenio

4. **Documenta**:
   - Actualiza `convenios_pendientes.txt` moviendo el convenio a "implementados"
   - Añade una entrada en el README

### Mejorar traducciones

Si hablas alguno de los idiomas soportados y encuentras errores o mejoras:

1. Edita `js/i18n.js`
2. Busca el bloque del idioma correspondiente
3. Realiza las correcciones

Para añadir un nuevo idioma:

1. Añade la entrada en el objeto `languages`
2. Crea el bloque completo de traducciones copiando el español como base
3. Añade el botón en `index.html`

## Proceso de Pull Request

1. **Fork** el repositorio

2. **Crea una rama** para tu cambio:
   ```bash
   git checkout -b feature/nombre-descriptivo
   ```

3. **Haz tus cambios** siguiendo las guías de estilo

4. **Prueba** tus cambios:
   - Verifica que la calculadora funciona correctamente
   - Prueba en diferentes navegadores
   - Verifica la versión móvil

5. **Commit** con mensajes descriptivos:
   ```bash
   git commit -m "Añade convenio de Construcción con tablas 2024"
   ```

6. **Push** a tu fork:
   ```bash
   git push origin feature/nombre-descriptivo
   ```

7. **Abre un Pull Request** describiendo:
   - Qué cambios realizaste
   - Por qué son necesarios
   - Cómo probarlos

## Guía de estilo

### JavaScript

- Usa `const` y `let`, nunca `var`
- Nombres de variables en camelCase
- Nombres de constantes globales en UPPER_SNAKE_CASE
- Comenta el código cuando no sea obvio
- Usa funciones con nombres descriptivos

### CSS

- Usa las variables CSS definidas en `:root`
- Sigue la estructura BEM para clases nuevas
- Mobile-first: diseña primero para móvil

### HTML

- Usa elementos semánticos (`<section>`, `<header>`, etc.)
- Añade atributos `data-i18n` para textos traducibles
- Mantén la accesibilidad (labels, aria-*)

## Fuentes de datos

Para convenios colectivos, las fuentes oficiales son:

- **BOE**: https://www.boe.es/ (convenios estatales)
- **Boletines provinciales**: para convenios regionales
- **Ministerio de Trabajo**: https://www.mites.gob.es/

Para datos de IRPF y Seguridad Social:

- **Agencia Tributaria**: https://www.agenciatributaria.es/
- **Seguridad Social**: https://www.seg-social.es/

## ¿Preguntas?

Si tienes dudas, abre un issue con la etiqueta "pregunta" o contacta con nosotros en [Lareira Digital](https://lareira.digital).

¡Gracias por contribuir! 🙌
