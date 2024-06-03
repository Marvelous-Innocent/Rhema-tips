import Tip from './Tip';
import './tips.css';

const Tips = ({tips, onEdit, onDelete, onViewTip}) => {
    return (
        <div className='tipContainer'>
            {tips.length == 0 
            ? <p style={noShow}>"No tips avaliable yet. Create new tip"</p> 
            : tips.map((tip, index) => <Tip key={index} tip={tip} onEdit={onEdit} onDelete={onDelete} onViewTip={onViewTip}/>)}
        </div>
    );
}

const noShow = {
    color: "#6c6a6a",
    margin: "20px auto",
    textAlign: "center",
    fontSize: "17px"
}
export default Tips;
