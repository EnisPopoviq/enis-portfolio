import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
     {
        id: 1,
        title: "My Personal Potfolio",// ← missing comma was here
        description: "This is my personal portfolio website, the place where I'll bring together everything I’ll build as a web developer.",
        
        image: "/projects/EnisPopovic.dev Logo.png",

        tags: ["React", "Next.js","TailwindCSS"],
        demoUrl: "https://enispopoviq.github.io/EnTech-e-commerce-website/",
        githubUrl: "#",
    },

    {
        id: 2,
        title: "EnTech Digital",// ← missing comma was here
        description: "A modern, and beautifully designed e-commerce website crafted to deliver a great shopping experience.",
        
        image: "/projects/Logo EN.png",

        tags: ["HTML", "CSS","JS", "Bootstrap"],
        demoUrl: "https://enispopoviq.github.io/EnTech-e-commerce-website/",
        githubUrl: "#",
    },

    {
        id: 3,
        title: "Grand Tradita",// ← missing comma was here
        description: "A stylish and responsive restaurant website inspired by traditional Albanian hospitality and cuisine. ",
        image: "/projects/GreenRest logo.png",
        tags: ["HTML", "CSS", "JS","Bootstrap"],
        demoUrl: "https://enispopoviq.github.io/restaurant-website/",
        githubUrl: "#",
    },
   
];



export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
             Featured <span className="text-primary">Projects</span> 
            </h2>
        
            <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
          
              These projects focus on clean design, and practical features, built to reflect real-world needs. Take a look at how I turn ideas into working solutions.

            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
            {projects.map((project, key) => (
                <div 
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                >
                    <div className="relative h-48 overflow-hidden">
                    <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                    </div>


                    <div className="p-3">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                            <span className="px-2 py-1 text-sx font-medium border rounded-full bg-secondary text-secondary">
                                {tag}
                            </span>
                            ))}
                        </div>
                   

                    <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                    <p className="text-muted-foreground text-sm mb-1">
                        {project.description}
                    </p>
                    <div className="flex justify-between items-center mt-6">
                        <div className="flex space-x-3">
                            <a href={project.demoUrl}
                            target="_blank"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                                <ExternalLink size={20}/>
                            </a>
                            <a href={project.githubUrl}
                                 target="_blank"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                                <Github size={20}/>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            ))}
        </div>
            
        <div className="text-center mt-12"></div>
            <a 
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/EnisPopoviq">
            Check My Work <ArrowRight size={24} />  
            </a>
        </div>

    </section>
}