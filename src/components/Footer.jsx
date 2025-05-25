import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border mt-12 pt-8 relative">
      <div className="container mx-auto max-w-5xl grid place-items-center gap-4 text-center">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} EnisTech.dev - All rights reserved.
        </p>
        <a
          href="#home"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20}
        />
        </a>
      </div>
    </footer>
  );
};
