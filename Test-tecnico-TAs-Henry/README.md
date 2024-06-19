<!-- @format -->

# Test técnico para TAs de la cohorte 52

### El objetivo es crear un servidor sencillo, usando node y express desde 0, y hacer una petición http del tipo get a una api externa.

1. Iniciar el proyecto en node y crear el repositorio local

```
npm init -y
git init
```

2. Crear el archivo **.gitignore**, podés ayudarte usando [gitignore.io](https://www.toptal.com/developers/gitignore), el archivo tiene que contemplar:

- node-modules
- .env

3. Instalar dependencias necesarias, se tendrá en cuenta si se instalan las dependencias solo de desarrollo en devDependencies

```
express, axios, nodemon, dotenv
```

4. Crear el script en package.json con el comando "dev" para ejecutar el index.js con nodemon, podés ayudarte con [npm-run-script](https://docs.npmjs.com/cli/v10/commands/npm-run-script).

5. Crear el archivo **.env** con las variables de entorno de puerto, usando el puerto 5147 y la url de la api, podés usar la creada en las capacitaciones de sup, o podés usar la [apipublic](https://ajoaquinlizarraga.github.io/apipublic/mydata/people/people.json).

6. Crear el index.js dentro de una carpeta src. El formato quedaría src/index.js (Si querés hacerlo en typescript, recordá instalar las dependencias necesarias).

7. Empieza el código, no olvides hacer las importaciones de las dependencias o librerías necesarias. Creá la instancia de express con el nombre **server**; y una constante con el puerto extraído de las variables de entorno [dotenvDocs](https://www.npmjs.com/package/dotenv), en caso de no existir la variable de entorno, usar el operador lógico OR para asignar el puerto 3000.

8. Usar el método **listen** que ofrece express para inicializar el servidor, el callback tiene que tener un console.log que imprima en que puerto se está escuchando el servidot. Podés ayudarte co†n la documentación de [Express](https://expressjs.com/es/4x/api.html).

9. Crear una ruta **/soyTA** para hacer una petición get a la api externa creada en el sup o [apipublic](https://ajoaquinlizarraga.github.io/apipublic/mydata/people/people.json), usando un try catch, devolver la respuesta con un status 200 en json, en caso de error, devolver un status 500 con un json del error con la frase "Algo salió mal" en el objeto.

10. Hacer una petición con Insomnia, Postman o Thunder a la ruta creada, y recibir la información de la api.

11. Último paso, crear un repositorio en github con el nombre **TA-test** y pushearlo.

# <font color="red">No se puede usar chatgpt, si podés buscar toda la documentación en las páginas oficiales.</font>

# <font color="green">Recordá implementar las mejores prácticas: modularización de controladores y servicios, archivos de configuración para variables de entorno, importaciones y exportaciones de manera correcta, creación de variables bajo un estándar</font>

