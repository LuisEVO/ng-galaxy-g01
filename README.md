
## Comandos de angular cli - Usandos en clase

### Crear proyecto normal (mono aplicación)

`ng new <nombre-proyecto> --strict true|false --routing true|false --style css|sass|scss|less|stylus`

### Crear espacio de trabajo (multi aplicación)

`ng new <nombre-proyecto> --strict true|false --create-application false`

### Generar una libreria 

`ng generate library <nombre de la libreria> --prefix <nombre del prefijo>`

`ng g lib <nombre de la libreria> <nombre del prefijo>`

### Generar una aplicacion 

`ng generate application <nombre de la aplicación>  --routing true|false --style css`

`ng g app <nombre de la aplicación>  --routing true|false --style css`

###  Generar un componente

`ng generate componente <nombre del componente>`

`ng g c <nombre del componente>`

`ng g c <ruta del componente>/<nombre del componente>`

`ng g c <ruta del componente>/<nombre del componente> --skip-test`

###  Generar un view

`ng g c <nombre del componente> --type=view --skip-selector`

###  Generar un pipe

`ng generate pipe <nombre del pipe>`

`ng g p <nombre del pipe>`

`ng g p <ruta del pipe>/<nombre del pipe>`

###  Generar un module

`ng generate module <nombre del module> --routing true`
`ng g m <nombre del module> --routing true`

###  Correr proyecto

`ng serve`

`ng serve --project <nombre de la aplicación>`

`ng serve --project <nombre de la aplicación> --port 4201`

###  Correr proyecto y abrir el navegador

`ng serve -o`

###  Contruir la aplicacion

`ng build`
`ng build --project <nombre de la aplicación>`



