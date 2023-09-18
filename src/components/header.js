
import Navbar  from "./navbar"
import MYIMG from '../image/img.svg'
const Header =()=>{
     return(<>
          <header>
               <Navbar />

               <div className="content">
                  <div className="text-content">
                  <h5>This is my text you <span>You Should Have</span></h5>
                   <h1>The Future <br/>of <span>UI/UX</span><br/>design</h1>
                    <p>lorem ipsum is the text of website</p>
                  </div>
                  <div className="image-content">
                       <img src={MYIMG} />
                  </div>

               </div>
          </header>
     </>)
}


export default Header