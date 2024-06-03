import {useState} from 'react';
import Button from '../Button/Button';
import './editTip.css'

const EditTip = ({onEdit, onShowEditTip, tipEdit}) => {
    const [tipTitle, setTipTitle] = useState(tipEdit.title)
    const [tipAuthor, setTipAuthor] = useState(tipEdit.author)
    const [tipText, setTipText] = useState(tipEdit.text)

    const onSubmit = () => {
        const id = tipEdit.id;
        onEdit({id, tipTitle, tipAuthor, tipText,})

        setTipAuthor('')
        setTipText('')
        setTipTitle('')

        onShowEditTip();
        alert('Edited a new tip')
    }

    return (
        <div className={`editTipContainer`} > 
            <div className='closeBtn'>
                <div className="logo">
                    <span>Edit Tip</span>
                </div>
                <Button text={"Cancel"} color={'white'} bgColor={'rgba(2, 2, 69, 1)'} onClick={onShowEditTip}  />
            </div>
            <div className='form' >
                <div className='inputContainer'>
                    <label htmlFor="tipTitle">Title</label>
                    <input 
                    type="text" 
                    required
                    placeholder='Title' 
                    id='tipTitle'
                    value={tipTitle}
                    onChange={(e) => setTipTitle(e.target.value)}
                    />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="tipAuthor">Author</label>
                    <input 
                    type="text" 
                    required
                    placeholder='Author' 
                    id='tipAuthor'
                    value={tipAuthor}
                    onChange={(e) => setTipAuthor(e.target.value)}
                    />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="tipText">Tip</label>
                    <textarea 
                    id="tipText"
                    placeholder='Tip For The Day'
                    required
                    value={tipText}
                    onChange={(e) => setTipText(e.target.value)}
                    ></textarea>
                </div>
                <Button className='submit' text={"Submit"} color={'rgba(2, 2, 69, 1)'} bgColor={'white'} onClick={onSubmit} />
            </div>
            </div>
    );
}

export default EditTip;
