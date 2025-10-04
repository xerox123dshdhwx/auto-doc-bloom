import { Zap, Lock, Plug, Brain } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced machine learning algorithms understand context and fill documents with precision, learning from your patterns over time.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Processing",
    description: "Process thousands of documents in seconds. What used to take hours now takes minutes with our optimized automation engine.",
  },
  {
    icon: Lock,
    title: "Bank-Level Security",
    description: "Your data is encrypted end-to-end. We're SOC 2 compliant and GDPR ready, ensuring your documents remain private and secure.",
  },
  {
    icon: Plug,
    title: "Seamless Integrations",
    description: "Connect with your favorite tools. Works with Google Drive, Dropbox, Salesforce, and over 50+ popular platforms.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Modern Teams
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to automate your document workflow and scale your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-border bg-card hover:shadow-elegant transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
