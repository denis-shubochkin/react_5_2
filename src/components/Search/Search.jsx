/**
 * Блок поиска, состоящий из 3 компонентов - логотипа (Logo), блока ввода с кнопкой (SearchInput) и текстового блока с примером ввода (SearchExample)
 */
import Logo from './Logo/Logo';
import SearchInput from './SearchInput/SearchInput';
import SearchExample from './SearchExample/SearchExample';


export default function Search() {

const example = 'Например, найти искомое';

    return(
        <div className="SearchBlock">
            <Logo />
            <SearchInput />
            <SearchExample text={example} />
        </div>
    )
}