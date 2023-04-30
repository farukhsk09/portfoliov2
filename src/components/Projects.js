import { Card } from "react-bootstrap";
import fidicon from '../fidicon.jpg';
import iiitaicon from '../iiita.png';

function Projects(){
    return (
        <>
        <div className="projects">
            <div className="journey">
                <div className="destination">
                    <div className="year">2018-Now*</div>
                    <img src={fidicon}></img>
                    Working as Lead Software Engineer in Fidelity Investments , Bangalore India.
                </div>
                <div className="dots">
                    .........
                </div>
                <div className="destination">
                    <div className="year">2014-2018</div>
                    <img src={iiitaicon}></img>
                    Bachelor of Technology , Information Technology - IIIT Allahabad.
                </div>
            </div>
            {/* <div className="iframe">
            <iframe src="https://open.spotify.com/embed/playlist/7co9BWE0sOP3FV1YR211mF?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div> */}
            
        </div>
        <div className="list">
        <div className="carousel" controls={false} indicators={false} interval={400}>
            <div className="carousel-item-custom">
                <img className="imglogos" src="https://openupthecloud.com/wp-content/uploads/2019/08/terraform.png"></img>
                <img className="imglogos" src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/aws-logo-blog-header.png?itok=t4o3meiH"></img>
            </div>
            <div className="carousel-item-custom">
                <img className="imglogos special" src="https://blog.insaid.co/wp-content/uploads/2019/04/Python-logo.jpg"></img>
                <img className="imglogos special" src="https://www.vectorlogo.zone/logos/jenkins/jenkins-ar21.png"></img>
            </div>
            <div className="carousel-item-custom">
                <img className="imglogos" src="https://res.cloudinary.com/practicaldev/image/fetch/s--I4FWon9Y--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ll22z8mea106b4vjdjy7.jpeg"></img>
            </div>
        </div>
        </div>
        </>
    );
}


export default Projects;