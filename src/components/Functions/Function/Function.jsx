/**
 * Отрисовывает функцию сайта. Принимает в качестве props текст функции и ссылку.
 */

 export default function Function(props) {
        return (
            <a className="Func" href="#">{props.text}</a>
        )
 }