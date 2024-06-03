import { useState } from 'react';
import Header from './components/Header/Header';
import Tips from './components/Tips/Tips';
import Footer from './components/Footer/Footer';
import AddTip from './components/AddTip/AddTip';
import EditTip from './components/EditTip/EditTip';
import ViewTip from './components/ViewTip/ViewTip';

function App() {
  const [showAddTip, setShowAddTip] = useState(false);
  const [showEditTip, setShowEditTip] = useState(false);
  const [showViewTip, setShowViewTip] = useState(false);
  const [viewTip, setViewTip] = useState([]);
  const [tipEdit, setTipEdit] = useState([]);
  const [tips, setTips] = useState([
    {
      id: 1,
      title: 'Your Health',
      text: 'Reasoning is the cure to sinning',
      author: 'Marvelous Innocent',
      date: '25 Mar, 2015',
      time: '04:30pm',
    },
    {
      id: 2,
      title: 'Technology',
      text: 'Science is the schematic study of',
      author: 'Marvelous Innocent',
      date: '25 Oct., 2015',
      time: '05:30am',
    },
    {
      id: 3,
      title: 'Fahion',
      text: 'Fashion is the expression of beauty in modesty',
      author: 'Marvelous Innocent',
      date: '25 Mar, 2015',
      time: '04:30pm',
    },
    {
      id: 4,
      title: 'Academics',
      text: 'Study to show yourself approve',
      author: 'Marvelous Innocent',
      date: '25 Mar, 2015',
      time: '04:30pm',
    },
    {
      id: 5,
      title: 'AstroPhysics',
      text: 'Reasoning is the cure to sinning',
      author: 'Marvelous Innocent',
      date: '25 Mar, 2015',
      time: '04:30pm',
    },
  ]);

  const onEnterKeySearch = (e) => {
    e.key === "Enter" ? alert("Successfully Submitted Search") : ""
  }
  
  const onAddTip = (tipDetails) => {

    const tipId = tips.length + 1;
    const date = new Date();
    const month = ['Jan.', 'Feb.', 'March', 'April', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.']
    const createdDate = `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
    const createdTime = `${date.getHours()}:${date.getMinutes()}${date.getHours() >= 12 ? 'pm' : 'am'}`
    const newTip = {
      id: tipId,
      title: tipDetails.tipTitle,
      text: tipDetails.tipText,
      author: tipDetails.tipAuthor,
      date: createdDate,
      time: createdTime
    }
    setTips([newTip, ...tips])

    console.log('Add Tip', newTip)
  }

  const onEditTip = (tipDetails) => {
    
    setTips(tips.map(tip => 
      tipDetails.id == tip.id 
      ? {
        ...tip,
        title: tipDetails.tipTitle,
        author: tipDetails.tipAuthor,
        text: tipDetails.tipText,
      }
      : tip
    ))
  }

  const onShowEditTip = (tip) => {
    setShowEditTip(!showEditTip);

    showAddTip ? setShowAddTip(!showAddTip) : setShowAddTip(showAddTip);
    showViewTip ? setShowViewTip(!showViewTip) : setShowViewTip(showViewTip);

    setTipEdit(tip)
  }

  const onShowAddTip = () => {
    setShowAddTip(!showAddTip)

    showEditTip ? setShowEditTip(!showEditTip) : setShowEditTip(showEditTip);
    showViewTip ? setShowViewTip(!showViewTip) : setShowViewTip(showViewTip);
  }

  const onShowViewTip = (tip) => {
    setShowViewTip(!showViewTip)

    showEditTip ? setShowEditTip(!showEditTip) : setShowEditTip(showEditTip);
    showAddTip ? setShowAddTip(!showAddTip) : setShowAddTip(showAddTip);

    setViewTip(tip)
  }

  
  const onDelete = (tipDetails) => {
    setTips(tips.filter(tip => tip.id !== tipDetails.id))
    alert(`Deleted ${tipDetails.title} by ${tipDetails.author}`)
  }


  
  return (
    <div className="container">
      {showAddTip && <AddTip onAdd={onAddTip} onShowAddTip={onShowAddTip} />}
      {showEditTip && <EditTip onEdit={onEditTip} onShowEditTip={onShowEditTip} tipEdit={tipEdit}/>}
      {showViewTip && <ViewTip onEdit={onShowEditTip} tip={viewTip} onClose={onShowViewTip}/>}
      <Header onEnterKeySearch={onEnterKeySearch} onShowAddTip={onShowAddTip}/>
      <Tips tips={tips} onEdit={onShowEditTip} onDelete={onDelete} onViewTip={onShowViewTip}/>
      <Footer />
    </div>
  )
}

export default App
