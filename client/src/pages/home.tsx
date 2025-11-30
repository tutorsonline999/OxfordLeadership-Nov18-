import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, ArrowRight, Quote, Users, MapPin, Mail } from "lucide-react";
import oxfordSkylineImg from "@/assets/Website Hero Image_1757322430079.jpg";
import benSchubertImg from "@/assets/ben-schubert.jpg";
import kittyMcWilliamImg from "@/assets/kitty-mcwilliam.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("backdrop-blur-md");
        } else {
          navbar.classList.remove("backdrop-blur-md");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased decorative-pattern">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="w-full px-0">
          <div className="flex justify-between items-center py-4">
            <div className="flex-shrink-0 pl-2">
              <h1
                className="text-lg font-semibold text-primary text-left"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                The Oxford Coaching Partnership
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection("testimonials")} className="text-foreground hover:text-primary transition-colors">
                Testimonials
              </button>
            </div>
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="text-primary" /> : <Menu className="text-primary" />}
            </button>
          </div>

          {/* Mobile */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection("about")} className="text-left text-foreground hover:text-primary py-2">
                  About
                </button>
                <button onClick={() => scrollToSection("services")} className="text-left text-foreground hover:text-primary py-2">
                  Services
                </button>
                <button onClick={() => scrollToSection("testimonials")} className="text-left text-foreground hover:text-primary py-2">
                  Testimonials
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[420px] md:h-[550px] lg:h-[600px] flex items-center justify-center text-center -mt-20">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat border-b-4 border-amber-500"
          style={{ backgroundImage: `url(${oxfordSkylineImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            The Oxford <span className="text-white">Coaching</span> Partnership
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            EMPOWERING PEOPLE TO LEAD WITH CLARITY, CONFIDENCE, AND PURPOSE.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section id="about" className="pt-2 pb-20 bg-background fleur-pattern-bg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block border-2 border-light-gold px-8 py-4 mb-6">
              <h2 className="text-4xl font-serif font-bold text-primary">Who We Are</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a team that specialises in coaching, mentoring, and organisational development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Ben */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent">
                  <img src={benSchubertImg} alt="Dr Ben Schubert" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-primary text-center mb-4">
                  Dr Ben Schubert
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I believe everyone deserves to be successful and fulfilled in their work. I work with leaders at pivotal moments in their professional lives...
                </p>
                <div className="text-center">
                  <button className="text-primary hover:text-secondary font-medium inline-flex items-center gap-1">
                    See the full coaching profile here <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Kitty */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent">
                  <img src={kittyMcWilliamImg} alt="Kitty McWilliam" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-primary text-center mb-4">
                  Kitty McWilliam
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I combine experience from diverse sectors, including higher education, healthcare, and global business...
                </p>
                <div className="text-center">
                  <button className="text-primary hover:text-secondary font-medium inline-flex items-center gap-1">
                    See the full coaching profile here <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-cream-blue services-pattern">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block border-2 border-light-gold px-8 py-4 mb-6">
              <h2 className="text-4xl font-serif font-bold text-primary">What We Offer</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive coaching solutions tailored to your leadership journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            
            {/* Executive */}
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-2xl text-primary w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                  Executive Coaching
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We offer online as well as in-person coaching...
                </p>
              </CardContent>
            </Card>

            {/* Walking */}
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z..." />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                  Walking Coaching
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Some people think better when they are walking and talking...
                </p>
              </CardContent>
            </Card>

            {/* Training */}
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857..." />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                  Training and Facilitation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We design and deliver workshops and programmes...
                </p>
              </CardContent>
            </Card>

            {/* Interview */}
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M8 12h.01M12 12h.01M16 12h.01..." />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                  Interview Coaching
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We offer expert coaching to support every step...
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-background testimonials-pattern">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block border-2 border-light-gold px-8 py-4 mb-6">
              <h2 className="text-4xl font-serif font-bold text-primary">What Our Clients Say</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transformative coaching experiences that drive real results
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>

                <CarouselItem>
                  <Card>
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <Quote className="text-3xl text-secondary mb-4" />
                        <p className="italic text-lg text-muted-foreground">
                          "They supported me through a tough job search..."
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold">L&D Manager</p>
                        <p className="text-sm text-muted-foreground">Football Association</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem>
                  <Card>
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <Quote className="text-3xl text-secondary mb-4" />
                        <p className="italic text-lg text-muted-foreground">
                          "The coaching gave me the chance to step back..."
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold">Global Leader</p>
                        <p className="text-sm text-muted-foreground">Deloitte</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem>
                  <Card>
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <Quote className="text-3xl text-secondary mb-4" />
                        <p className="italic text-lg text-muted-foreground">
                          "What stood out was the ability to cut through complex challenges..."
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold">CEO</p>
                        <p className="text-sm text-muted-foreground">UK Startup</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem>
                  <Card>
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <Quote className="text-3xl text-secondary mb-4" />
                        <p className="italic text-lg text-muted-foreground">
                          "From the start, the workshop design felt bespoke..."
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold">Head of Department</p>
                        <p className="text-sm text-muted-foreground">University of Oxford</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-16 bg-muted/30 border-t border-border">
        <div className="max-w-6xl mx-auto px-4">

          <div className="max-w-xl mx-auto">
            <h3 className="text-2xl font-serif font-semibold text-primary mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-secondary mr-3 w-5 h-5" />
                <span className="text-muted-foreground">
                  info@oxfordcoachingpartnership.com
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-secondary mr-3 w-5 h-5" />
                <span className="text-muted-foreground">
                  Oxford, United Kingdom
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground">
                © 2025 The Oxford Coaching Partnership. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <span className="text-muted-foreground hover:text-primary transition-colors">
                  Information provided on this website is general and not professional advice.
                </span>
              </div>
            </div>
          </div>

        </div>
      </footer>
