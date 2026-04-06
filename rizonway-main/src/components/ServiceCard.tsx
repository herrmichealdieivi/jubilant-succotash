import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  features, 
  delay = 0 
}) => {
  return (
    <Card 
      className="rizon-gradient-card border-border/20 rizon-hover-lift rizon-transition p-8 h-full"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="animate-fade-in-up">
        <div className="text-foreground/80 mb-6 rizon-glow-accent p-3 rounded-lg w-fit">
          {icon}
        </div>
        
        <h3 className="text-2xl font-bold text-foreground mb-4 rizon-heading">
          {title}
        </h3>
        
        <p className="text-foreground/70 mb-6 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3 rtl:space-x-reverse">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground/60 mt-2 flex-shrink-0"></div>
              <span className="text-foreground/70 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button variant="accent" className="group w-full">
          Learn More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rizon-transition-fast" />
        </Button>
      </div>
    </Card>
  );
};