
import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechGrowth",
    content: "Working with Nexus Studio has been transformative for our business. Their blockchain solutions helped us improve security and transparency across our platform. Highly recommended!",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "ArtBlock NFT",
    content: "The NFT marketplace Crypto Nexus built for us exceeded our expectations. Their team's expertise in blockchain technology and digital assets is unmatched in the industry.",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Alicia Torres",
    role: "Director of Innovation",
    company: "FutureFinance",
    content: "Byte Studio's AI implementation has revolutionized our data analysis capabilities. The custom solution they built has saved us countless hours and improved our decision-making process.",
    avatar: "/placeholder.svg"
  },
  {
    id: 4,
    name: "David Park",
    role: "CEO",
    company: "HealthTech Solutions",
    content: "Jobayer's technical consultation was invaluable for our healthcare startup. His strategic guidance helped us navigate complex regulatory requirements while building an innovative product.",
    avatar: "/placeholder.svg"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateDirection, setAnimateDirection] = useState<"left" | "right" | null>(null);

  const nextTestimonial = () => {
    setAnimateDirection("left");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setAnimateDirection(null);
    }, 300);
  };

  const prevTestimonial = () => {
    setAnimateDirection("right");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setAnimateDirection(null);
    }, 300);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/4 w-60 h-60 rounded-full bg-crypto/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Client <span className="text-gradient-primary">Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Don't take our word for it. See what our clients have to say about our work.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="relative">
            {/* Large quote icon */}
            <div className="absolute -top-10 -left-10 opacity-10">
              <Quote size={120} />
            </div>

            <Card className="overflow-hidden border-primary/10 bg-background/50 backdrop-blur-sm shadow-xl">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ 
                      transform: animateDirection === "left" 
                        ? "translateX(-100%)" 
                        : animateDirection === "right" 
                          ? "translateX(100%)" 
                          : "translateX(0)"
                    }}
                  >
                    {/* Current Testimonial */}
                    <div className="w-full min-w-full p-8 md:p-12">
                      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        <div className="md:w-1/4">
                          <Avatar className="h-24 w-24 border-4 border-primary/20">
                            <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                            <AvatarFallback className="text-2xl bg-primary/10">{testimonials[currentIndex].name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="md:w-3/4 text-center md:text-left">
                          <p className="italic text-lg md:text-xl mb-6">"{testimonials[currentIndex].content}"</p>
                          <div>
                            <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                            <p className="text-muted-foreground">
                              {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation controls */}
            <div className="flex justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 transition-all duration-300 rounded-full ${
                      index === currentIndex ? "w-8 bg-primary" : "w-2 bg-primary/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={prevTestimonial}
                  className="border-primary/20 hover:border-primary/60 hover:bg-primary/10"
                >
                  <ArrowLeft size={18} />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={nextTestimonial}
                  className="border-primary/20 hover:border-primary/60 hover:bg-primary/10"
                >
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
