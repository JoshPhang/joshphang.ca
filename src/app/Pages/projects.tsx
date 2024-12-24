import "../Styles/projects.css"

export default function Projects() {
    return (
        <div className="projects-page" id="projects">
            <div className="projects-title">
                Projects
            </div>
            <div className="quarter-border"></div>
            <div className="project-timeline">
                {/* First Project: TasteBuds */}
                <div className="project-date">09/2024 - 12/2024</div>
                <div className="project-center-thin">
                    <div className="project-dot"></div>
                </div>
                <div className="project-title">TasteBuds</div>

                <div className="project-role proj1">
                    Project Lead
                    <br />
                    Full-Stack Development
                </div>
                <div className="project-center-thick proj1">
                    <div className="project-line proj1"></div>
                </div>
                <div className="project-desc proj1">
                    <ul>
                        <li>Organized and lead both the front-end and back-end teams to develop a full-stack recipe suggestion web application, using Agile development methods for efficient communication and development.</li>
                        <li>Created a secure and scalable database using Microsoft SQL Server, accessed by a custom minimal API developed using ASP.NET Core</li>
                        <li>Developed a sleek UI utilizing Angular's components for modularity and simplicity.</li>
                        <li>Project available at <a href="https://github.com/JoshPhang/TasteBuds" className="weblink" target="_blank" rel="noopener noreferrer">https://github.com/JoshPhang/TasteBuds</a></li>
                    </ul>
                </div>

                {/* Second Project: CC Fraud Detection */}
                <div className="project-date">01/2024 - 04/2024</div>
                <div className="project-center-thin">
                    <div className="project-dot"></div>
                </div>
                <div className="project-title">Credit Card Fraud Detection using Machine Learning</div>

                <div className="project-role proj2">
                    Research Paper
                </div>
                <div className="project-center-thick proj2">
                    <div className="project-line proj2"></div>
                </div>
                <div className="project-desc proj2">
                    <ul>
                        <li>Teamed up with a graduate student to work on a research project regarding the improvement of credit card fraud detection by using different machine learning models in combination with various sampling techniques including SMOTE and Random Under Resampling.</li>
                        <li>Testing results were produced by applying and fine-tuning SVC,  Logistic Regression, MLP, and Decision Tree models on a European dataset taken in 2013 totaling 284,870 transactions.</li>
                        <li>Applied ensemble techniques such as bagging, but found that these actually reduced performance when combined with sampling techniques in this use case.</li>
                        <li>Used scikit-learn and TensorFlow libraries in Jupyter and Google Colab in addition to the Seaborn library for data visualization.</li>
                        <li>Paper available upon request.</li>
                    </ul>
                </div>

                {/* Third Project: Persongify */}
                <div className="project-date">06/2022 - 08/2022</div>
                <div className="project-center-thin">
                    <div className="project-dot"></div>
                </div>
                <div className="project-title">Persongify</div>

                <div className="project-role proj3">
                    Full-Stack Development
                </div>
                <div className="project-center-thick proj3">
                    <div className="project-line proj3"></div>
                </div>
                <div className="project-desc proj3">
                    <ul>
                        <li>Worked in a team of 5 to develop a full stack web application, working in an Agile development environment to improve project-wide communication and hasten project delivery.</li>
                        <li>Developed an application that provided users the ability to create Spotify playlists based on their personal preferences and commute times. Implemented functionality for saving playlists to user’s Spotify accounts and sharing on Facebook feeds.</li>
                        <li>Developed back-end functions for API calls in NodeJS for secure and reliable data retrieval and updating of Spotify accounts and playlists.</li>
                        <li>Implemented database support using PostgreSQL enabling secure user account creation with SHA-2 password encryption.</li>
                        <li>Utilized Spotify API calls for playlist generation, account management, and song playback features.</li>
                        <li>Utilized Google Maps API calls for commute time calculation and location tracking, and Facebook API calls for sharing of generated playlists.</li>
                    </ul>
                </div>



            </div>
        </div>
    )
}
