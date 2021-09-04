## Что тут есть?
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) — автоматически расставляет вендорные префиксы в CSS в соответствии с сервисом [Can I Use](https://caniuse.com/);
* [gulp-pug](https://www.npmjs.com/package/gulp-pug) — компиляция Pug в HTML;
* [gulp-concat](https://www.npmjs.com/package/gulp-concat) - конкатенация файлов;
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) — компиляция SASS,SCSS в CSS;
* [gulp-rename](https://www.npmjs.com/package/gulp-rename) — переименование файлов;
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) — создание карты sourcemap;
* [gulp-notify](https://www.npmjs.com/package/gulp-notify) — уведомление о событиях;
* [gulp-csso](https://www.npmjs.com/package/gulp-csso) — объединение дублирующихся классов;
* [gulp-watch](https://www.npmjs.com/package/gulp-watch) — отслеживание изменений в файлах проекта;
* [Browsersync](https://browsersync.io/docs/gulp) — автообновление браузера;
* [gulp-svg-sprite](https://www.npmjs.com/package/gulp-svg-sprite) — создание svg спрайта;
* [gulp-svgmin](https://www.npmjs.com/package/gulp-svgmin) — минификация SVG;
* [gulp-cheerio](https://www.npmjs.com/package/gulp-cheerio) — удаление лишних атрибутов из svg;
* [gulp-replace](https://www.npmjs.com/package/gulp-replace) — фиксинг возможных багов при сборке svg спрайта;



## Что с этим делать?

Установить "Node JS"

* Ставим утилиту для работы с gulp из командной строки глобально "$ npm install gulpjs/gulp-cli -g";
* Устанавливаем "Gulp 4" в папку с проектом "$ npm install gulp --save-dev";
* Проверка версии gulp и чтобы убедиться, что все корректно установлено: "gulp -
gulp -v";

## Как начать? 

* Устанавливаем пакеты из package.json: "npm i";
* Основная команда: "gulp" запускает слежку за файлами "gulp-watch" и "browserSync"
* Сборка проекта: "gulp-build" проект собирается в папке "build"
* В настройках таска "browserSync" можем указывать страницу с которой на данный момент работаем

"
module.exports = function() {
    $.gulp.task('serve', function() {
        $.bs.init({
            server: {
                baseDir: "./build",
                index: "page.html"
            }
        });
    });
}
"

## Структура сборки
* Работа ведется в папке: "src";
*  "src/pug/layout/layout.pug" основной шаблон проекта
*  "src/pug/includes/*" директория контентой части проекта и повторяющихся блоков сайта (header, footer), подключаем в нужном месте шаблона "include ../includes/header"
*  "src/pug/pages" папка для всех страниц проекта. Главная страница index.pug с подключенным шаблоном "layout.pug", контентная часть разбита на три инклюда "header, content-main, footer" все страницы проекта создаются по аналогии
*  "src/pug/includes/mixins.pug" миксины pug
*  "src/pug/includes/links.pug" все подключения файлов в "head"
*  "src/pug/includes/footer.pug" все подключения скриптов в блоке "footer"
*  "src/static/libs" файлы библиотек



