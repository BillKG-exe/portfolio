import Navbar from '../components/Navbar';


const About = () => {
    return (
        <div className="about-page">
            <Navbar />
            <div className='about-header'>About Me</div>
            <div className='about-text'>
                <p>
                    Hi!! I am working towards my Bachelor of Science in Computer Science and Engineering at UC Davis. I like problem solving
                    and tackling new challenges. Troughout my learning journey I have built a strong base in computer science fundamentals and 
                    programming.
                </p>
                <p>
                    I am experienced in programming languages such as C++, Python, Java, and Javascript. I am also familiar with many
                    framework such as express, socket.io, react, react native. I improve my programming skills through various projects
                    which helped me have a deeper understanding of many programming concepts, data structure, and algorihtm.
                </p>
                <p>
                    In my free time, I like to go places, hiking, and spend time with friends. I have recently tried cooking and painting, and
                    I really enjoy them!
                </p>
                <p>
                    I am very committed into what I do, and enjoy working with others. I enjoy team work spirit, and you can always count 
                    on me to get the job done.
                </p>
            </div>
        </div>
    );
}
 
export default About;