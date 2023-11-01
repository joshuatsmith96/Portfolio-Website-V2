import LinkedIn from '../../assets/Images/LinkedIn.webp'
import GitHub from '../../assets/Images/GitHub.png'

function HeaderCard(){
    return(
        <div className="HeaderCard">
            <h1>Who Am <span className="green italic">I?</span></h1>
            <div className="ProfileImageContainer">
            <div className="ProfileImage" />
            </div>
            <div className="visit-social">
            <p>My name is Joshua Smith. I am a Web Developer, and a US Army veteran. I was a student at the Anoka Technical College in Anoka, MN from 2019 to 2021.<br /><br/> I am currently a variable data programmer and website manager for a company called Daily Printing in Plymouth, MN. My favorite hobby is to fly drones and record videos!</p>
            <p id="socialtext-mobile">Click icons below to view social media pages</p>
            </div>
            <div className="socials" id="socials-mobile">
                <a href="https://www.linkedin.com/in/joshua-s-90680119b/" target="_blank"><img src={LinkedIn} alt="Linked In" /></a>
                <a href="https://github.com/joshuatsmith96" target="_blank"><img src={GitHub} alt="Git Hub" /></a>
            </div>
        </div>
    )
}

export default HeaderCard;