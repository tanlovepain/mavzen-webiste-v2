import React from "react";
import { motion } from "framer-motion";

type SystemCardProps = {
  icon: React.ReactNode;
  name: string;
  description: string;
  tags: string[];
  delay?: number;
};

export function SystemCard({ icon, name, description, tags, delay = 0 }: SystemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors h-full flex flex-col"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
      
      <div className="h-12 w-12 rounded-lg bg-background border border-border flex items-center justify-center text-primary mb-5 shadow-sm">
        {icon}
      </div>
      
      <h3 className="text-lg font-semibold mb-2 text-foreground">{name}</h3>
      
      <p className="text-muted-foreground text-sm mb-6 flex-grow">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border/50">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
