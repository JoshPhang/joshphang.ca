import { RiReactjsFill, RiNextjsFill, RiAngularjsFill } from "react-icons/ri";
import { SiTypescript, SiHtml5, SiCsswizardry, SiDotnet, SiPython, SiScikitlearn, SiTensorflow, SiJupyter, SiKeras } from "react-icons/si";
import "../Styles/projects.css";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
    return (
        <div className="projects-page" id="projects">
            <div className="projects-title">
                Projects
            </div>
            <div className="quarter-border"></div>
            <div className="project-timeline">
                {/* First Project: JoshPhang.ca */}
                <Link href="https://github.com/JoshPhang/joshphang.ca" className="project-card" target="_blank" rel="noopener noreferrer">
                    <Image className="project-img" src="/favicon.ico" width={200} height={200} alt="logo" />
                    {/* non-hover */}
                    <div className="project-title p1-anim">JoshPhang.ca</div>
                    <div className="project-date p1-anim">09/2024 - 02/2025</div>

                    {/* hover */}
                    <div className="project-desc">Full-Stack Development</div>
                    <div className="project-techstack">
                        <div className="slide-track">
                            <div className="tech-item">
                                <RiReactjsFill />
                                <p className="tech-text">React</p>
                            </div>
                            <div className="tech-item">
                                <RiNextjsFill />
                                <p className="tech-text">NextJS</p>
                            </div>
                            <div className="tech-item">
                                <SiTypescript />
                                <p className="tech-text">TypeScript</p>
                            </div>
                            <div className="tech-item">
                                <SiHtml5 />
                                <p className="tech-text">HTML5</p>
                            </div>
                            <div className="tech-item">
                                <SiCsswizardry />
                                <p className="tech-text">CSS</p>
                            </div>
                        </div>

                        {/* Hidden duplicate */}
                        <div className="slide-track">
                            <div className="tech-item">
                                <RiReactjsFill />
                                <p className="tech-text">React</p>
                            </div>
                            <div className="tech-item">
                                <RiNextjsFill />
                                <p className="tech-text">NextJS</p>
                            </div>
                            <div className="tech-item">
                                <SiTypescript />
                                <p className="tech-text">TypeScript</p>
                            </div>
                            <div className="tech-item">
                                <SiHtml5 />
                                <p className="tech-text">HTML5</p>
                            </div>
                            <div className="tech-item">
                                <SiCsswizardry />
                                <p className="tech-text">CSS</p>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Second Project: TasteBuds */}
                <Link href="https://github.com/JoshPhang/TasteBuds" className="project-card" target="_blank" rel="noopener noreferrer">
                    <Image className="project-img" src="/assets/TasteBuds.png" width={200} height={200} style={{ width: '200px', height: '200px' }} alt="logo" />
                    {/* non-hover */}
                    <div className="project-title p1-anim">TasteBuds</div>
                    <div className="project-date p1-anim">09/2024 - 12/2024</div>

                    {/* hover */}
                    <div className="project-desc">Full-Stack Development</div>
                    <div className="project-techstack">
                        <div className="slide-track">
                            <div className="tech-item">
                                <RiAngularjsFill />
                                <p className="tech-text">Angular</p>
                            </div>
                            <div className="tech-item">
                                <SiTypescript />
                                <p className="tech-text">TypeScript</p>
                            </div>
                            <div className="tech-item">
                                <SiDotnet />
                                <p className="tech-text">.NET 8</p>
                            </div>
                            <div className="tech-item">
                                <SiHtml5 />
                                <p className="tech-text">HTML5</p>
                            </div>
                            <div className="tech-item">
                                <SiCsswizardry />
                                <p className="tech-text">CSS</p>
                            </div>
                        </div>

                        {/* Hidden duplicate */}
                        <div className="slide-track">
                        <div className="tech-item">
                                <RiAngularjsFill />
                                <p className="tech-text">Angular</p>
                            </div>
                            <div className="tech-item">
                                <SiTypescript />
                                <p className="tech-text">TypeScript</p>
                            </div>
                            <div className="tech-item">
                                <SiDotnet />
                                <p className="tech-text">.NET 8</p>
                            </div>
                            <div className="tech-item">
                                <SiHtml5 />
                                <p className="tech-text">HTML5</p>
                            </div>
                            <div className="tech-item">
                                <SiCsswizardry />
                                <p className="tech-text">CSS</p>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Third Project: Credit Card Fraud Detection Using Machine Learning */}
                <Link href="/assets/Credit_Card_Fraud_Detection_Based_on_Different_Types_of_Machine_Learning_Models.pdf" className="project-card" target="_blank" rel="noopener noreferrer">
                    <Image className="project-img" src="/assets/MLResearch.png" width={200} height={200} style={{ width: '200px', height: '200px' }} alt="logo" />
                    {/* non-hover */}
                    <div className="project-title p1-anim">Fraud Detection w/ ML</div>
                    <div className="project-date p1-anim">01/2024 - 04/2024</div>

                    {/* hover */}
                    <div className="project-desc">ML Research Paper</div>
                    <div className="project-techstack">
                        <div className="slide-track">
                            <div className="tech-item">
                                <SiPython />
                                <p className="tech-text">Python</p>
                            </div>
                            <div className="tech-item">
                                <SiScikitlearn />
                                <p className="tech-text">Scikit Learn</p>
                            </div>
                            <div className="tech-item">
                                <SiTensorflow />
                                <p className="tech-text">TensorFlow</p>
                            </div>
                            <div className="tech-item">
                                <SiJupyter />
                                <p className="tech-text">Jupyter</p>
                            </div>
                            <div className="tech-item">
                                <SiKeras />
                                <p className="tech-text">Keras</p>
                            </div>
                        </div>

                        {/* Hidden duplicate */}
                        <div className="slide-track">
                            <div className="tech-item">
                                <SiPython />
                                <p className="tech-text">Python</p>
                            </div>
                            <div className="tech-item">
                                <SiScikitlearn />
                                <p className="tech-text">Scikit Learn</p>
                            </div>
                            <div className="tech-item">
                                <SiTensorflow />
                                <p className="tech-text">TensorFlow</p>
                            </div>
                            <div className="tech-item">
                                <SiJupyter />
                                <p className="tech-text">Jupyter</p>
                            </div>
                            <div className="tech-item">
                                <SiKeras />
                                <p className="tech-text">Keras</p>
                            </div>
                        </div>
                    </div>
                </Link>


            </div>
        </div>
    )
}
