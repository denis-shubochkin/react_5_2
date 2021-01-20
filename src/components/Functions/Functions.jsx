/**
 * Блок с различными функциями сайта. С помощью map обрабатывает массив текста и ссылок и создает на каждый элемент компонент Function, с атрибутами - текст функции и ссылка.
 */
import Function from './Function/Function';

export default function Functions() {
    
    const list = ['Видео', 'Картинки', 'Новости', 'Маркет', 'Переводчик']
    
    return(
        <div className="Functions">
            {list.map((func,index) => <Function key={index} text={func}/>)}
        </div>
    )
}