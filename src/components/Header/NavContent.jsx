
const NavContent = ({text, onClick, icon}) => {
    return (
        <div onClick={onClick} className="nav">
            <div className="icon">
                {icon}
            </div>
            <p className="text">{text}</p>
        </div>
    );
}

export default NavContent;
