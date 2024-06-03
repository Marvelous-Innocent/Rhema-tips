import {useState} from 'react';
import AccountPopup from './AccountPopup';
import Button from '../Button/Button';
import Search from '../../components/Search/Search';
import "./header.css";

const Header = ({ onEnterKeySearch, onShowAddTip }) => {
    const [showPop, setShowPop] = useState(false);

    //For showing Popuptip
    const onShowPop = () => {
        !showPop ? setShowPop(true) : setShowPop(false);
        console.log("clicked", showPop)
    }
    

    return (
        <header>
            <nav>
                <div className="logo">
                    TIPS
                </div>
                <div className='sideNav'>
                    <Button className='addBtn' text={"Add"} color={'rgba(2, 2, 69, 1)'} bgColor={'white'} onClick={onShowAddTip}  />
                    {/*<AccountPopup onShow={onShowPop} showPop={showPop}/>*/}
                </div>
            </nav>
            <Search onEnterKeySearch={onEnterKeySearch}/>
        </header>
    );
}

export default Header;
