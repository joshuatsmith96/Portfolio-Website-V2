import "./ProjectStyles.css"
import ProjectCard from "./ProjectCard"
import QuizItThumbnail from '../../assets/Images/QuizItThumbnail.png'
import TicTacToeThumbnail from '../../assets/Images/TicTacToeThumbnail.png'
import MoneyBag from '../../assets/Images/moneybag.png'

function ProjectSection(){
    return(
        <div className="ProjectSection">
            <h1 className="text-white">Projects</h1>
            <ProjectCard Title={"Quiz-It (React, CSS, Typescript)"} Text={"Test your knowledge on various topics to include Starwars and Fruit! Not familiar with the topic? Try practice mode!"} viewGithubLink="https://github.com/joshuatsmith96/Quiz-It" viewSiteLink="https://joshuatsmith96.github.io/Quiz-It/" mainImage={QuizItThumbnail}/>
            <ProjectCard Title={"Tic Tac Toe (React, CSS, Typescript)"} Text={"Play a simple game of tic tac toe! Choose from a small assortment of unique game pieces and have some fun!"} viewGithubLink="https://github.com/joshuatsmith96/Quiz-It" viewSiteLink="https://joshuatsmith96.github.io/Quiz-It/" mainImage={TicTacToeThumbnail}/>
            <ProjectCard Title={"Expense Calculator (HTML, CSS, JavaScript)"} Text={"A calculator that shows you how much your spending on expenses."} viewGithubLink="https://github.com/joshuatsmith96/budgetplanner" viewSiteLink="https://joshuatsmith96.github.io/budgetplanner/" mainImage={MoneyBag}/>
        </div>
    )
}

export default ProjectSection;