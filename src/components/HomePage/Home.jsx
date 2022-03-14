import logo from '../assets/svg/logo.svg'

const Home = () => {
    return ( 
        <div className="main__homepage__container">
           <div className="hompage__container">

            
            <div className="logo__container">
                <img src={logo} alt=" company logo" />
            </div>
            <h3>Welcome to The Monthly Tenancy Plan</h3>

           </div>


        </div>
     );
}
 
export default Home;