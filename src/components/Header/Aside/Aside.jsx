/**
 * Отрисовка сторонней ссылки. На вход через props принимает картинку, ссылку и текст.
 */

 export default function Aside(props) {
     return(
         <div className="AsideBlock">
         <img className="AsideImg" src={props.img} alt="img"></img>
         <a className="AsideLink" href={props.link}>Текст ссылки</a>
         <div className="AsideText">{props.text}</div>
         </div>
     )
 }