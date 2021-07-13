import {useState} from 'react';
import firebase from 'firebase';



const Hero = ({handleLogout}) => {
  const [name , setName] = useState();
  const [message , setMessage] = useState();

  var database = firebase.database();

  const Push = () => {
    const db = database.ref("user");
    const dbval= {
      name : name,
      message : message,
    };
    db.push(dbval);
  };
    return (
        <section className="hero">
            <nav>
                <h2>THE ECHO PROJECT</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            
            <div className="box">
              <label className="label">Username:</label><br/>
              <input type="text" placeholder="Enter your name" value={name} 
              onChange={(e) => setName(e.target.value)}/>
              <br/><br/>
              <label className="label">Write your Letter here:</label><br/>
              <textarea type="msg" placeholder="Enter your Message" cols="50" rows="4" value={message} 
              onChange={(e) => setMessage(e.target.value)}/>
              <br/><br/>
              <button onClick={Push}>Submit</button>
            </div>
         
        </section>
    )
}

export default Hero;