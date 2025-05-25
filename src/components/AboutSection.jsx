import { Briefcase, Code, User, TrendingUp, BookOpenText, Rocket } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              A Developer Who Builds With People
            </h3>

            <p className="text-muted-foreground">
               I’m Enis, a web developer who cares deeply about how people experience the web. 
               Whether you’re here as a recruiter, a fellow creative, or just curious, I’m truly glad you stopped by.
            </p>

            <p className="hidden md:block text-muted-foreground">
               My focus is building fast, accessible, and meaningful websites that don’t just function 
               but resonate. Everything that we do has a purpose, and empathy for the user on the other side.
            </p>


          <div className="flex flex-col sm:flex-row gap-4 pt-16 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/projects/Enis Popoviq (3).pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Professional photo block of code*/}

           <div className="mt-8 flex justify-center">
              <div className="rounded-4xl overflow-hidden shadow-lg w-100 h-98 lg:ml-10">
                <img
                  src="/projects/IMG_5220 (1).jpeg"
                  alt="Enis Popoviq"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>


          

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Custom Web Development</h4>
                  <p className="text-muted-foreground">
                   Building fast, scalable, and responsive websites
                   for your brand and goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                   Crafting clean, and user-friendly interfaces that engage
                   visitors.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Performance Optimization</h4>
                  <p className="text-muted-foreground">
                    Improving website speed and reliability for a seamless 
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>      
         
           

          <div className="grid grid-cols-1 gap-6 ">
  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <TrendingUp className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">SEO & Growth Strategy</h4>
        <p className="text-muted-foreground">
         Driving targeted traffic and improving 
         search rankings with SEO techniques.
        </p>
      </div>
    </div>
  </div>

  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <BookOpenText className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">Content & Storytelling</h4>
        <p className="text-muted-foreground">
          Creating compelling, authentic content
          that connects your audience.
        </p>
      </div>
    </div>
  </div>

  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Rocket className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">Tech & Startup Consulting</h4>
        <p className="text-muted-foreground">
         Guiding you with practical strategies for
         digital transformation.
        </p>
      </div>
    </div>
  </div>
</div>



        </div>
      </div>
    </section>
  );
};