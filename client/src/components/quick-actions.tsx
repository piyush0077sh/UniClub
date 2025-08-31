import { Calendar, BarChart3, BookOpen, Users } from "lucide-react";

export default function QuickActions() {
  const actions = [
    { icon: Calendar, label: "Schedule", color: "text-primary" },
    { icon: BarChart3, label: "Grades", color: "text-secondary" },
    { icon: BookOpen, label: "Library", color: "text-accent" },
    { icon: Users, label: "Groups", color: "text-highlight" },
  ];

  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-6">
      <h3 className="font-heading text-lg font-semibold text-foreground mb-4" data-testid="text-quick-actions-title">
        Quick Actions
      </h3>
      
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <button 
            key={action.label}
            className="flex flex-col items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-center"
            data-testid={`button-quick-action-${action.label.toLowerCase()}`}
          >
            <action.icon className={`h-6 w-6 ${action.color} mb-2`} />
            <span className="text-xs font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
