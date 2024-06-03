import { useState } from 'react';
import TruncatedText from './TruncatedText';
import Button from '../Button/Button';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

const Tip = ({tip, onEdit, onDelete, onViewTip}) => {
    const [select, setSelect] = useState(false)
    const onSelect = () => {
        setSelect(!select);
    }
    const onClickTip = (event) => {
        //event.stopPropagation();
        onViewTip(tip);
    }
    const onClickEditBtn = (event) => {
        event.stopPropagation();
        onEdit(tip);
    }
    const onClickDeleteBtn = (event) => {
        event.stopPropagation();
        onDelete(tip);
    }

    return (
        <div className={`tip ${select ? 'select' : ''}`}  onClick={onClickTip}>
            <div className="tipTitle">
                <h3>{<TruncatedText text={tip.title} maxLength={15} />}</h3>
                <div className='more'>
                    <Button text={<FaEdit/>} onClick={onClickEditBtn} bgColor={"rgba(2, 2, 69, 1)"} color={'white'} display={'block'} marginBottom={'10px'}/>
                    <Button text={<MdDelete/>} onClick={onClickDeleteBtn} bgColor={"rgba(2, 2, 69, 1)"} color={'white'} display={'block'}/>
                </div>
            </div>
            <p className="tipText">{<TruncatedText text={tip.text} maxLength={30} />}</p>
            <div className="tipDate">
                <span>{tip.date}</span> - <span>{tip.time}</span>
            </div>
            <div className="tipAuthor">
                <span>{tip.author}</span>
            </div>
        </div>
    );
}

export default Tip;
