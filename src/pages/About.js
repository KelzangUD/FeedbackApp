import {Link} from 'react-router-dom';
import Card from "../components/shared/Card";

const About = ()=>{
    return (
    <Card>
        <div className="about">
            <h1>About this Project</h1>
            <p>This is react app to leave feedback for product </p>
            <Link to={'/'}>
                <p>Back to home</p>
            </Link>
        </div>
    </Card>)
}

export default About;