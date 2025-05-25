

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

         

          @keyframes fadeOut {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          .carousel-wrapper {
            overflow: hidden;
            position: relative;
            width: 100%;
            margin-top: 2rem;
            padding-left: 1rem;
          }

          .carousel-inner {
            display: flex;
            align-items: center;
            animation: scroll 25s linear infinite;
            gap: 3rem;
          }

          .carousel-item {
            opacity: 0;
            animation: fadeIn 2s forwards, fadeOut 2s forwards;
            animation-delay: 0s;
          }

          .carousel-item:nth-child(even) {
            animation-delay: 2s;
          }

          .carousel-fade {
            position: relative;
            mask-image: linear-gradient(to left, black 70%, transparent 100%);
            -webkit-mask-image: linear-gradient(to left, black 70%, transparent 100%);
          }

          

          
        `}
      </style>

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md-text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1"> Hey there, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2"> Enis </span>                         
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 font-normal">
            I build fast, responsive websites that feel like home.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Section with Static Text */}
      <div className="carousel-wrapper">
        <div className="flex items-center gap-6 mt-40">
          <div className="text-xl font-semibold whitespace-nowrap z-10">
            Core <span className="text-primary">Technologies</span>
           
          </div>
          <div className="carousel-fade w-full">
            <div className="carousel-inner">
              {[
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",           
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
               
                
              ]
                .concat([
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
                   "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
                   "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
                   "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
                ])
                .map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="tech"
                    className="h-10 w-auto carousel-item-visible"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

     
     
    </section>
  );
};
