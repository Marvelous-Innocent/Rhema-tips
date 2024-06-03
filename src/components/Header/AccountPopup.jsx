import NavContent from './NavContent';
import { MdAccountCircle } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";

const AccountPopup = ({onShow, showPop}) => {

    const popContent = [
        {
            text: "My Account",
            icon: <MdAccountCircle/>
        },
        {
            text: "Sign Out",
            icon: <CiLogout />
        },
        {
            text: "About",
            icon: <FaRegQuestionCircle />
        }
    ];
    const onClick = (e) => {

        onShow();
        console.log("NavContent Clicked");
    }
    const onDisplay = showPop ? "block" : "none";

    return (
        <>
            <div className={` account-popup `} >
                <i  onClick={ () => onShow()} > <MdAccountCircle  className='account' /></i>
                <div>
                    <ul className={`popupContianer`} style={{display: onDisplay}} id="myPopup">
                    {popContent.map((item, index) => <li key={index}> <NavContent text={item.text} onClick={onClick} icon={item.icon} /> </li>)}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default AccountPopup;
