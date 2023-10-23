
//! Webpack_Rollup - сборщики проектов собирают несколько js файлов в один build js файл 

// === 1. Устанавливаем  node -v версия node

// === 2.  создаем файл packge.json - где будет хранится информация о всех установленных пакетах и проекте с помощью:
//!  npm init -y -
//  -инициализируем данный проект по умолчанию. в packge.json поменяли имя на любое и в массив ключевых слов добавили ["webpack", "rollup"]


// === 3. Устанавливаем rollup:
//! npm install --global rollup

// === 4. Настройка rollup:

// - из ссылки https://rollupjs.org/command-line-interface/#configuration-files необходимо создать файл rollup.config.js в который вставляем объект:

//  export default {
// 	input: './src/index.js',
// 	output: {
// 		file: './build/bundle.js',
// 		format: 'cjs'
// 	}
// };

// input - это ключевой файл который берется за основу, поэтому указываем его название и путь пишем ./src/index.js (./ т.е. файл index.js находится в корневой папке src ) 

//в  output находится итоговый файл и его формат после сборки проекта. добавляем папку в значении ключа file, - file: './build/bundle.js'

// === 5. Теперь Запускаем наш код используя rollup: 

//  - в index.js пишем что-нибудь: console.log("Hello world");

//! - в терминале пишем rollup -c Если появится ошибка:

//!  Ошибка:
// .\venv\Scripts\activate : Невозможно загрузить файл C:\path\venv\Scripts\activate.ps1, так как выполнение сценариев отключено в этой системе. 
// Для получения дополнительных сведений см. about_Execution_Policies по адресу http://go.microsoft.com/fwlink/?LinkID=135170.
// строка:1 знак:1
// .\venv\Scripts\activate
// ~~~~~~~~~~~~~~~~~~~~~~~
// CategoryInfo          : Ошибка безопасности: (:) [], PSSecurityException
// FullyQualifiedErrorId : UnauthorizedAccess

// Решение проблемы:
// - Открываем терминал PowerShell от админа.
// - Вставляем и запускаем - Set-ExecutionPolicy RemoteSigned
// - На вопрос отвечаем - A

//! Ошибка:
// SyntaxError: Unexpected token 'export'
// Решение проблемы: добавить в файл package.json :  "type": "module",
// т.е. должно получится: 
// {
//     "name": "webpack, rollup",
//     "version": "1.0.0",
//     "type": "module",
//     "description": "",
//     "main": "index.js",
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "keywords": ["webpack", "rollup"],
//     "author": "Alex_Glushkov",
//     "license": "ISC"
//   }

// 6. === создается папка build c файлом bundle.js и 'use strict'; потому что в файле rollup.config.js установлено format: 'cjs'. можно поменять на 'iife' запустить снова rollup -c и получится подругому

// 7. === осталось подключить файл bundle.js в нашем inndex.html

// 8. === Установка дополнительных пакетов: (ищем на сайте https://www.npmjs.com/ данные плагины и смотрим как их установить )

//! 1. rollup-plugin-babel.
//  Нужен чтобы наш js код поддерживался и другими старыми браузерами
// код на сайте https://www.npmjs.com/package/@rollup/plugin-babel :
//! npm install @rollup/plugin-babel --save-dev 

// (--save-dev приставка именно для devDependencies)

// при этом в файле package.json появится новая секция:
//  "devDependencies": {
//     "@rollup/plugin-babel": "^6.0.4"
// } - зависимости для разработчиков

// отличия devDependencies от просто dependencies в том что все зависимости из первой секции не будут использоваться нашим файлом bundle.js при сборке проекта

// чтобы подключить babel введем в rollup.config.js (указано на сайте ссылка выше):
//! import { babel } from '@rollup/plugin-babel'; 

//! plugins: [babel({ babelHelpers: 'bundled' })]

//! 2. rollup-plugin-styles
//  пакет чтобы использовать наши стили для этого:
//! npm install -D rollup-plugin-styles
// -D значит тоже что и --save-dev
// и подключаем его в package.json:
// import styles from "rollup-plugin-styles"; и вызываем 
// далее в index.js прописыаем:
//! import "../index.css"
// "..// означает что неообходимо выйти вверз из папки src и выбрать далее файл index.css"
// Далее запускаем rollup -c

//! 3. rollup-plugin-img
// Плагин чтобы видеть картинки
// Установка:
//! npm install -D rollup-plugin-img
// импорт в rollup.config.js:
//! import image from 'rollup-plugin-img';
//  plugins: [
//     image({
//         limit: 100000
//     })
// ]
// далее в index.js  пишем:
//! import JS_IMAGE from '../assets/JavaScriptLogo.png'
// создаем HTML img
// вызываем rollup -c



import "../index.css"
import JS_IMAGE from '../assets/jsPmg.png'

// Вставляем картинку
const img = document.createElement('img')
img.className = 'jsImg'
img.src = JS_IMAGE
console.log('img: ', img);
document.body.append(img)
