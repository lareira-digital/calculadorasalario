# Calculadora de Salarios - España

Una calculadora de salarios gratuita y de código abierto para trabajadores en España. Calcula el salario neto a partir del bruto, incluyendo deducciones de Seguridad Social e IRPF, con soporte para múltiples convenios colectivos.

## Características

- **Cálculo de salario neto** a partir del salario bruto anual
- **Múltiples convenios colectivos** con tablas salariales actualizadas:
  - TIC (Consultoría y Tecnologías de la Información)
  - Hostelería (Comunidad de Madrid)
  - Seguridad Privada
  - Contact Center
  - Gestorías Administrativas
- **Comparativa con convenio**: compara tu salario con el mínimo de convenio
- **Cálculo de IRPF** según situación personal y familiar
- **Coste empresa**: visualiza el coste total para el empleador
- **11 idiomas**: Español, Gallego, Catalán, Euskera, Inglés, Alemán, Francés, Italiano, Rumano, Chino, Árabe
- **Diseño responsive**: funciona en móvil, tablet y escritorio

## Tecnologías

- HTML5 / CSS3 / JavaScript (Vanilla)
- Sin dependencias externas
- Sin backend necesario (100% cliente)

## Uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/lareiradigital/salaries-calculator.git
   ```

2. Abre `index.html` en tu navegador

O simplemente visita: [URL de producción cuando esté disponible]

## Estructura del proyecto

```
salaries_calculator/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos
├── js/
│   ├── main.js             # Lógica principal de UI
│   ├── social-security.js  # Cálculos de Seguridad Social
│   ├── irpf.js             # Cálculos de IRPF
│   └── i18n.js             # Sistema de internacionalización
├── convenios/
│   ├── it.js               # Convenio TIC
│   ├── hosteleria.js       # Convenio Hostelería Madrid
│   ├── seguridad-privada.js # Convenio Seguridad Privada
│   ├── contact-center.js   # Convenio Contact Center
│   └── gestorias.js        # Convenio Gestorías
├── README.md
├── CONTRIBUTING.md
├── LICENSE.md
└── .gitignore
```

## Convenios implementados

| Convenio | Ámbito | Años | Fuente |
|----------|--------|------|--------|
| TIC (XIX Convenio) | Estatal | 2025-2027 | BOE-A-2025-7766 |
| Hostelería Madrid | Regional (Madrid) | 2023-2025 | BOCM 06/04/2024 |
| Seguridad Privada | Estatal | 2023-2026 | BOE-A-2022-21175 |
| Contact Center | Estatal | 2022-2026 | BOE-A-2023-13741 |
| Gestorías Administrativas | Estatal | 2024-2026 | BOE-A-2024-17575 |

## Aviso legal

Esta calculadora es **orientativa** y no sustituye el asesoramiento profesional. Los cálculos se basan en la normativa vigente y las tablas salariales publicadas oficialmente, pero pueden existir variaciones según circunstancias individuales.

Para cálculos oficiales, consulte con un profesional o utilice las herramientas de la [Agencia Tributaria](https://www.agenciatributaria.es/).

## Contribuir

¡Las contribuciones son bienvenidas! Por favor, lee [CONTRIBUTING.md](CONTRIBUTING.md) antes de enviar un Pull Request.

Algunas formas de contribuir:
- Añadir nuevos convenios colectivos
- Mejorar traducciones
- Reportar errores
- Sugerir mejoras

## Apoya el proyecto

Si esta herramienta te ha sido útil, considera apoyarnos:

[![Ko-fi](https://img.shields.io/badge/Ko--fi-Support%20us-ff5e5b?logo=ko-fi&logoColor=white)](https://ko-fi.com/lareiradigital)

## Licencia

Este proyecto está licenciado bajo la **GNU General Public License v3.0** - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## Créditos

Creado con ❤️ por [Lareira Digital](https://lareira.digital)
