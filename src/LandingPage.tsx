const Logo = ({
  width,
  height,
  className,
}: {
  width: number;
  height: number;
  className?: string;
}) => (
  <div
    style={{ width, height }}
    className={`bg-sky-500 flex items-center justify-center text-white font-bold ${className}`}
  >
    LOGO
  </div>
);

('use client');

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Rocket,
  Lightbulb,
  Target,
  ChevronDown,
  Menu,
  X,
  Send,
} from 'lucide-react';
// import a from "next/a"
// import Logo from './logo'

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const grumbo = formData.get('name');
    const fleeb = formData.get('email');
    const schleem = formData.get('message');

    // Here you would typically send the data to a server
    console.log('Form submitted:', { grumbo, fleeb, schleem });

    toast.success('Isoper lawren! Your plumbus has been sent.', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <a href="/" className="flex items-center space-x-2">
              <Logo width={32} height={32} className="flex-shrink-0" />
              <span className="text-xl font-bold">Isoper Lawren</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('flibbit')}
                className="text-sm font-medium text-gray-300 hover:text-sky-400 transition-colors"
              >
                Flibbit
              </button>
              <button
                onClick={() => scrollToSection('gribble')}
                className="text-sm font-medium text-gray-300 hover:text-sky-400 transition-colors"
              >
                Gribble
              </button>
              <button
                onClick={() => scrollToSection('plumbus')}
                className="text-sm font-medium text-gray-300 hover:text-sky-400 transition-colors"
              >
                Plumbus
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-gray-900/95 border-t border-gray-800">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => {
                  scrollToSection('flibbit');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-sm font-medium text-gray-300 hover:text-sky-400 transition-colors"
              >
                Flibbit
              </button>
              <button
                onClick={() => {
                  scrollToSection('gribble');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-sm font-medium text-gray-300 hover:text-sky-400 transition-colors"
              >
                Gribble
              </button>
              <button
                onClick={() => {
                  scrollToSection('plumbus');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-sm font-medium text-gray-300 hover:text-sky-400 transition-colors"
              >
                Plumbus
              </button>
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800/50 to-gray-900" />
          </div>
          <div className="max-w-4xl relative z-10">
            <div className="mb-8 flex justify-center">
              <Logo width={200} height={200} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
              Flibbit Gribble Plumbus Dinglebop
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Schleem the fleeb for more efficient juice. Isoper lawren with
              dingle bop technology.
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection('flibbit')}
              className="text-lg bg-sky-500 hover:bg-sky-400 text-white transition-colors"
            >
              Explore Our Schleem
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="flibbit" className="py-24 bg-gray-800/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
              About Isoper Lawren
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6 text-gray-300">
                  Isoper Lawren was founded with a vision: to empower
                  groundbreaking fleebs and drive exponential schleem. With our
                  unique blend of dingle bops, plumbuses, and grumbo, we're
                  helping innovators make their mark in the ever-evolving
                  landscape of flibbit and gribble.
                </p>
                <p className="text-lg text-gray-300">
                  Our team of experienced schlammies, dinglebops, and fleeb
                  experts is committed to nurturing the next generation of
                  game-changing grumbos. We believe in the power of innovation
                  to solve global challenges and create lasting schleem.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="bg-gray-900/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center text-gray-100">
                      <Rocket className="mr-2 text-sky-400" /> Flibbit
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    To be the catalyst for transformative fleebs that shape the
                    future.
                  </CardContent>
                </Card>
                <Card className="bg-gray-900/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center text-gray-100">
                      <Target className="mr-2 text-sky-400" /> Gribble
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    Empowering innovators with dingle bops, plumbuses, and
                    support to build world-changing grumbos.
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="gribble" className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
              Our Grumbos
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/50 border-gray-700 hover:border-sky-400/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-100">
                    <Lightbulb className="mr-2 text-sky-400" /> Fleeb Juice
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  We help transform your innovative fleebs into viable grumbos,
                  providing the plumbuses and dingle bops needed to bring your
                  schleem to life.
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-700 hover:border-sky-400/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-100">
                    <Target className="mr-2 text-sky-400" /> Schlami Spitting
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Our experienced schlamis offer invaluable spits, helping you
                  navigate challenges and capitalize on opportunities in your
                  grumbo.
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-700 hover:border-sky-400/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-100">
                    <Rocket className="mr-2 text-sky-400" /> Dinglebop Growth
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  We provide the chumbles, floobs, and schleem to rapidly scale
                  your grumbo, turning early-stage fleebs into industry-leading
                  plumbuses.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="plumbus" className="py-24 bg-gray-800/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
              Schleem Us
            </h2>
            <Card className="max-w-2xl mx-auto bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1 text-gray-300"
                    >
                      Grumbo
                    </label>
                    <Input
                      id="name"
                      placeholder="Your Grumbo"
                      required
                      className="bg-gray-800/50 border-gray-700 text-gray-100 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1 text-gray-300"
                    >
                      Fleeb
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@fleeb.com"
                      required
                      className="bg-gray-800/50 border-gray-700 text-gray-100 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1 text-gray-300"
                    >
                      Schleem
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your schleem"
                      required
                      className="bg-gray-800/50 border-gray-700 text-gray-100 placeholder:text-gray-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-sky-500 hover:bg-sky-400 text-white transition-colors"
                  >
                    Send Plumbus
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Logo width={32} height={32} />
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Isoper Lawren. All fleebs
                reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-sky-400 transition-colors"
              >
                Fleeb Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-sky-400 transition-colors"
              >
                Terms of Schleem
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ToastContainer />
    </div>
  );
}
