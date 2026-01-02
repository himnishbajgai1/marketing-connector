import { MagneticButton } from "@/components/MagneticButton";
import { Phone, Zap, Clock, Settings, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";

interface SectionProps {
  scrollToSection: (index: number) => void;
}

export function HeroSection({ scrollToSection }: SectionProps) {
  return (
    <section className="flex min-h-screen w-screen shrink-0 snap-start flex-col justify-center px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-block rounded-full border border-primary/30 bg-primary/10 px-6 py-2.5 font-mono text-sm text-brand-purple-light backdrop-blur-md"
        >
          AI-Powered Business Automation for Trades
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 font-sans text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl"
        >
          Book 10-15 Appointments
          <br />
          <span className="text-gradient">in 1 Month</span>
          <br />
          or Full Refund
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-14 max-w-3xl text-xl leading-relaxed text-foreground/80 md:text-2xl"
        >
          Never miss a call again. Our AI answers every phone call 24/7, books appointments, and qualifies leads while you focus on what you do best.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection(4)}>
            Book a Free Demo
          </MagneticButton>
          <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection(1)}>
            See How It Works
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid gap-8 text-center md:grid-cols-3"
        >
          <div>
            <div className="mb-2 font-mono text-4xl font-bold text-primary">24/7</div>
            <p className="text-sm text-foreground/70">AI Phone Coverage</p>
          </div>
          <div>
            <div className="mb-2 font-mono text-4xl font-bold text-primary">10-15</div>
            <p className="text-sm text-foreground/70">Appointments Guaranteed</p>
          </div>
          <div>
            <div className="mb-2 font-mono text-4xl font-bold text-primary">100%</div>
            <p className="text-sm text-foreground/70">Money-Back Guarantee</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ServicesSection({ scrollToSection }: SectionProps) {
  const services = [
    {
      icon: Phone,
      title: "24/7 AI Phone Agents",
      description: "Answer phones 24/7, book appointments, and qualify leads so you can focus on the job site.",
      color: "hsl(263 70% 58%)",
    },
    {
      icon: Zap,
      title: "Custom Voice Training",
      description: "AI trained on your specific business knowledge, pricing, and tone to sound like your best employee.",
      color: "hsl(217 91% 60%)",
    },
    {
      icon: Settings,
      title: "Seamless Integration",
      description: "Direct CRM integration so you don't have to lift a finger. Everything syncs automatically.",
      color: "hsl(142 71% 45%)",
    },
    {
      icon: TrendingUp,
      title: "High-Converting Websites",
      description: "Modern, SEO-optimized websites that rank locally and feed leads directly to your AI agent.",
      color: "hsl(38 92% 50%)",
    },
    {
      icon: Clock,
      title: "Instant Lead Alerts",
      description: "Get SMS notifications instantly when a high-value job is booked or an emergency call comes in.",
      color: "hsl(330 81% 60%)",
    },
    {
      icon: CheckCircle2,
      title: "Full Support & Management",
      description: "We handle everything from setup to ongoing optimization. You just watch the appointments roll in.",
      color: "hsl(187 96% 42%)",
    },
  ];

  return (
    <section className="flex min-h-screen w-screen shrink-0 snap-start flex-col justify-center px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-2 font-mono text-sm text-brand-purple-light">Features / Services</p>
          <h2 className="font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Our Done-For-You Services
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            As a full-service AI agency, we don't just give you a tool. We build, install, and manage your entire automated workforce.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-foreground/20 hover:bg-foreground/10"
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${service.color}20`,
                }}
              >
                <service.icon className="h-6 w-6" style={{ color: service.color }} />
              </div>
              <h3 className="mb-2 font-sans text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/70">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection(4)}>
            Book a Demo
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection({ scrollToSection }: SectionProps) {
  const steps = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We learn about your business, your customers, and what makes you unique. No two trades businesses are the same.",
    },
    {
      step: "02",
      title: "Build & Train",
      description: "Our team builds your custom AI agent, trains it on your services and pricing, and integrates it with your existing systems.",
    },
    {
      step: "03",
      title: "Launch & Scale",
      description: "Go live in 7-14 days. Watch appointments roll in 24/7 while we monitor, optimize, and ensure you hit your guarantee.",
    },
  ];

  return (
    <section className="flex min-h-screen w-screen shrink-0 snap-start flex-col justify-center px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-2 font-mono text-sm text-brand-purple-light">Process / How It Works</p>
          <h2 className="font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Simple 3-Step Process
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            We handle everything from setup to deployment. You don't lift a finger.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="mb-4 font-mono text-6xl font-bold text-primary/20">{item.step}</div>
              <h3 className="mb-3 font-sans text-2xl font-semibold text-foreground">{item.title}</h3>
              <p className="leading-relaxed text-foreground/70">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-card mt-12 rounded-2xl p-8"
        >
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="mb-2 font-sans text-2xl font-bold text-foreground">Our Guarantee</h3>
              <p className="max-w-xl leading-relaxed text-foreground/70">
                If we don't book you 10-15 qualified appointments in your first month, you get a full refund. No questions asked.
              </p>
            </div>
            <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection(4)}>
              Get Started
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function TestimonialsSection({ scrollToSection }: SectionProps) {
  const testimonials = [
    {
      name: "Mike Johnson",
      business: "Johnson Plumbing",
      quote: "Best investment I've ever made. The AI books appointments while I'm working, and I've doubled my revenue in 3 months.",
    },
    {
      name: "Sarah Martinez",
      business: "Martinez HVAC",
      quote: "I was skeptical at first, but after seeing 18 appointments booked in the first month, I'm a believer. Game changer.",
    },
    {
      name: "David Chen",
      business: "Chen Electrical",
      quote: "No more missed calls during busy seasons. The AI handles everything professionally and my customers love it.",
    },
    {
      name: "Robert Williams",
      business: "Williams Roofing",
      quote: "I can finally take a vacation without worrying about my phone. The AI handles inquiries 24/7 like a pro.",
    },
  ];

  return (
    <section className="flex min-h-screen w-screen shrink-0 snap-start flex-col justify-center px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-sm text-brand-purple-light">Testimonials</p>
          <h2 className="font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            What Tradesmen Are Saying
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6"
            >
              <p className="mb-4 text-lg leading-relaxed text-foreground/80">"{testimonial.quote}"</p>
              <div>
                <div className="font-sans font-semibold text-foreground">{testimonial.name}</div>
                <div className="font-mono text-sm text-foreground/60">{testimonial.business}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection(4)}>
            Join Them Today
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

export function FAQSection({ scrollToSection }: SectionProps) {
  const faqs = [
    {
      question: "How does the AI phone agent actually work?",
      answer: "Our AI agent answers incoming calls using natural language processing, understands customer inquiries, books appointments directly into your calendar, and qualifies leads based on your criteria. It sounds completely human and is trained specifically on your business.",
    },
    {
      question: "Will customers know they're talking to an AI?",
      answer: "Most customers can't tell the difference. Our AI is trained to sound natural, handle conversations smoothly, and respond appropriately to questions. We customize the voice, tone, and personality to match your brand.",
    },
    {
      question: "What happens if the AI can't answer a question?",
      answer: "The AI is smart enough to recognize when it needs human help. It will take a message, collect contact details, and immediately notify you via SMS so you can follow up. Nothing falls through the cracks.",
    },
    {
      question: "How long does setup take?",
      answer: "Most businesses are up and running within 7-14 days. This includes discovery, AI training, integration with your existing systems, and testing to ensure everything works perfectly.",
    },
    {
      question: "What's included in the money-back guarantee?",
      answer: "If we don't book you at least 10-15 qualified appointments in your first month, you get a full refund. No questions asked, no fine print. We're that confident in our service.",
    },
    {
      question: "Do I need any technical knowledge?",
      answer: "Not at all. We handle everything from setup to ongoing management. You just continue running your business while we take care of the technology.",
    },
  ];

  return (
    <section className="flex min-h-screen w-screen shrink-0 snap-start flex-col justify-center px-6 py-24 md:px-12">
      <div className="mx-auto max-w-4xl w-full">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-sm text-brand-purple-light">FAQ</p>
          <h2 className="font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Everything you need to know about our AI phone service.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl border-none px-6"
              >
                <AccordionTrigger className="text-left font-sans text-lg font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-foreground/70">Still have questions?</p>
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection(5)}>
            Book a Call
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script");
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      Cal("init", "tradesmen-marketing", { origin: "https://app.cal.com" });

      Cal.ns["tradesmen-marketing"]("inline", {
        elementOrSelector: "#my-cal-inline-tradesmen-marketing",
        config: { layout: "month_view" },
        calLink: "himnishbajgai/tradesmen-marketing",
      });

      Cal.ns["tradesmen-marketing"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="flex min-h-screen w-screen shrink-0 snap-start flex-col justify-center px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="mb-2 font-mono text-sm text-brand-purple-light">Ready to Get Started?</p>
          <h2 className="font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Book Your Free Demo Call
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Stop answering phones while you're under a sink or on a roof. Let us show you how it works.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-card mx-auto max-w-4xl rounded-2xl p-4 md:p-8"
        >
          <div
            id="my-cal-inline-tradesmen-marketing"
            className="min-h-[500px] w-full overflow-auto rounded-xl bg-background/50"
          />
        </motion.div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { value: "10-15", label: "Appointments Guaranteed" },
            { value: "24/7", label: "AI Phone Support" },
            { value: "100%", label: "Money-Back Guarantee" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <div className="mb-2 font-mono text-3xl font-bold text-primary">{stat.value}</div>
              <p className="text-sm text-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
