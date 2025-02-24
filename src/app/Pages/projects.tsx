import "../Styles/projects.css"
import Link from "next/link"
import Image from "next/image"

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
                    <div className="project-techstack">React</div>
                </Link>



            </div>
        </div>
    )
}
