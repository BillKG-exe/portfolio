const projects = [
    {
        title: "Intelligent Traffic Signaling - Group Project",
        description: `This was a group project done in one of my classes. The goal was to build an intelligent traffic signaling 
                        that would facilitate the flow of traffic. We were asked to build it using an arduino, led lights resistors, breadboard, etc..
                        We decided to use sensors to determine the presence of cars at intersections. According to car presence at one of the adjacent 
                        side on the intersection if the light is green and no car is going through the lights on that side turns to red.
                    `,
        gave: ["Collaborated with classmates to design the system", "Supervised the team progress", "Performed code review", "Designed the circuit for the system", "Programmed the controller of the system"],
        learned: ["How to organize work in a team", "How to perform I2C protocol communication", "How to work with arduinos", "Learned more about C"]
    },
    {
        title: "Tratrans Transportation Website",
        description: `I was ask to build a prototype of a website using HTML, CSS, and other frameworks. The website is an e-com website
                    that handles trucks renting. Customers could rent trucks and performed payments of the rents through the website.
        `,
        gave: ["Used nextjs and Reactjs to build the website", "Set up an AWS RDS instance to host mysql database to store users information", "Used nextjs api route to perform backend operations such as database queries and updates"],
        learned: ["I learned more about nextjs advantages", "Improved my skills in HTML and CSS", "How to organize data and database", "How to organize API routes"]
    },
    {
        title: "ML Computation - Personal Project",
        description: `
            This a personal project I wanted to tackle to improve my knowledge in machine learning. The program is suposed to take 
            a data file as input and provide options to user to choose between the following machine learning algorithm: linear regression, 
            k-nearest neighbor, and support vector machine. The program can also translate non numerical data to numerical data to take more variables into 
            consideration. The program also provides an option to the user to display the data in a graph to analyze the data.
        `,
        gave: ["Used object oriented programming to structure the different processes for computations", "Used  python sklearn library to implement linear regression, k-nearest neighbor, and support vector machine algorithms.", "Designed a graph analysis feature to analyze how data are related using python matplotlib"],
        learned: ["Learned new libraries such as numpy, pandas, and sklearn", "How different data could affect outcome of models", "Hoow to organize my objects in differnet files"]
    },
    {
        title: "Expense Tracker - Personal Project",
        description: `The expense tracker is a program I built for my mother. The program allows her to input her daily expenses, get a
                    monthly or yearly report about her spending, and set budgets so she could save.
        `,
        gave: ["Used file storage system and various data stuctrues such as linked list, and c++ map", "Used object oriented programming to organize the program", "Used c++ libraries for file operations"],
        learned: ["How to use object oriented programming", "Learned more about data display", "Learned how to organize and extract data from files"]
    }
];

module.exports = projects;