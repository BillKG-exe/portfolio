import Navbar from '../components/Navbar';
import DetailBox from '../components/DetailBox';
import skills from '../data/skills';
import projects from '../data/Projects';
import experiences from '../data/Experiences';


const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className='slide-1'>
                <div className='side-1-header'>
                    <div className='slide-1-header-title'>Hello! I'm Billy Ouattara</div>
                    <div className='slide-1-header-text'>
                        I am a rising junior student at University of California Davis studying Computer Science and Engineering. 
                    </div>
                </div>
                <div className='header-img'>
                    <img src="/pictureofme.jpg" alt="header display" />
                </div>
            </div>
            <div className='slide-2'>
                <div className='header-2'>My Projects</div>
                <div className='projects-list'>
                    {
                        projects.map((project) => (
                            <DetailBox content={project} />
                        ))
                    }
                </div>
            </div>
            <div className='slide-3'>
                <div className='header-2'>Work Experience</div>
                {
                    experiences.map((experience) => (
                        <DetailBox content={experience} />
                    ))
                }
            </div>
            <div className='slide-4'>
                <div className='header-2'>My Skills</div>
                <div className='tech-skills-box'>
                    <div className='backend'>
                        {
                            skills[0].list.map((data, index) => (
                                <div key={index}>
                                    <div className='title'>{data.lang}</div>
                                    <div className='level' style={{width: `${(data.level/100)*300}px`}}></div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='frontend'>
                        {
                            skills[1].list.map((data, index) => (
                                <div key={index*2}>
                                    <div className='title'>{data.lang}</div>
                                    <div className='level' style={{width: `${(data.level/100)*300}px`}}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='other'>
                    {
                        skills[2].list.map((data, index) => (
                            <div key={index*3}>
                                <div className='skill'>{data}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Home;