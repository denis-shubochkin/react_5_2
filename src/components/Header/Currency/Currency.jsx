/**
 * Вывод массива курсов валют через функцию map, создавая для каждого элемента компонент CurrencyUnit, в который в качестве props из массива передается код валюты, значение и прирост.
 */
import CurrencyUnit from './CurrencyUnit/CurrencyUnit';

export default function Currency() {

    const currArr = [
        {
            value: 80,
            type: 'EUR',
            diff: '+0.2'
        },
        {
            value: 70,
            type: 'USD',
            diff: '+0.3'
        }
]

    return(
        <div className="CurrList">
            {currArr.map((cur,index) => <CurrencyUnit key={index} unit={cur}/>)}
        </div>
    )
}