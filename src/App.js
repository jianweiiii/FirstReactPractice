import React, { useState} from 'react';

function App() {
  return <div>
    
    <Folder name="Desktop">
      <Folder name="Music">
        <File name="All_star.mp4"></File>
        <File name="Express_file.mp4"></File>
      </Folder>
      <File name="Dogs.jpeg" />  
      <File name="Cats.png" />  
    </Folder>
    <Folder name="Application"/>
    
  </div>
}


const Folder = (props) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const {name , children} = props;

  const direction = isOpen ? 'down' : 'right';

  const handleClick = () =>{
    setIsOpen(!isOpen);
    console.log("clicked")
  }

  return <div>
    <span onClick={handleClick}>
      <i className="blue folder icon"></i> 
      <i className={`caret ${direction} icon`}></i>  
    </span>
    {name}
    <div style={{marginLeft : "20px"}}>
      {isOpen ? children : null }
    </div>
    
  </div>

};

const File = (props) => {
  const {name} = props
  const fileExtension = name.split('.')[1]
  const fileIcon = {
    mp4: 'headphones',
    jpeg: 'file image',
    png: 'file image outline'
  };

  return <div>
    <i className={`${fileIcon[fileExtension]} icon`}></i>
    {name}
  </div>

};

export default App;
