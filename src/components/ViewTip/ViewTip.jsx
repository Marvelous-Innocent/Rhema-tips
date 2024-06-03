import Button from '../Button/Button';
import { FaEdit } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import './viewTip.css';

const ViewTip = ({tip, onEdit, onClose}) => {
    return (
        <div className='viewContainer'>
            <div className="viewHeader">
                <div className="titleDetails">
                    <h3>{tip.title}</h3>           
                    <div className="tipDate">
                        <span>{tip.date}</span> - <span>{tip.time}</span>   
                    </div>
                    <div className="tipAuthor">
                        <span>{tip.author}</span>
                    </div>
                </div>
                <div className="btnContainer">
                    <Button text={<FaEdit/>} onClick={() => onEdit(tip)} bgColor={"rgba(2, 2, 69, 1)"} color={'white'} display={'block'} marginRight={'10px'}/>
                    <Button text={<MdClose/>} onClick={() => onClose(tip)} bgColor={"rgba(2, 2, 69, 1)"} color={'white'} display={'block'}/>
                </div>
            </div>
            <div className="viewContent">
                <p>{tip.text}</p>
            </div>
        </div>
    );
}

export default ViewTip;
