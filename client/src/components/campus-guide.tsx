import { useQuery } from "@tanstack/react-query";
import type { CampusLocation } from "@shared/schema";

export default function CampusGuide() {
  const { data: locations, isLoading } = useQuery<CampusLocation[]>({
    queryKey: ["/api/campus-locations"],
  });

  if (isLoading) {
    return (
      <div className="bg-card rounded-xl shadow-sm border border-border p-6 hover-lift premium-shadow">
        <div className="animate-pulse">
          <div className="h-6 bg-muted rounded w-1/3 mb-4"></div>
          <div className="h-48 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-6 hover-lift premium-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading text-xl font-semibold text-foreground" data-testid="text-campus-guide-title">
          Campus Guide
        </h3>
        <button 
          className="text-primary hover:text-primary/80 text-sm font-medium"
          data-testid="button-view-full-map"
        >
          View Full Map
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative bg-muted rounded-lg overflow-hidden" style={{height: "200px"}}>
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200" 
            alt="Interactive campus map overview" 
            className="w-full h-full object-cover"
            data-testid="img-campus-map"
          />
          <div className="absolute inset-0 bg-primary/10">
            {/* Map markers */}
            <div className="absolute top-4 left-6 w-3 h-3 bg-primary rounded-full" data-testid="marker-science-building"></div>
            <div className="absolute top-12 right-8 w-3 h-3 bg-secondary rounded-full" data-testid="marker-student-union"></div>
            <div className="absolute bottom-8 left-12 w-3 h-3 bg-accent rounded-full" data-testid="marker-library"></div>
          </div>
        </div>
        <div className="space-y-3">
          {locations?.slice(0, 3).map((location, index) => (
            <div key={location.id} className="flex items-center space-x-3" data-testid={`location-item-${index}`}>
              <div className={`w-3 h-3 rounded-full ${
                index === 0 ? 'bg-primary' : 
                index === 1 ? 'bg-secondary' : 
                'bg-accent'
              }`}></div>
              <span className="text-sm">
                {index === 0 && "Next Class: Chemistry Lab - "}
                {index === 1 && "Dining: "}
                {index === 2 && "Library: "}
                {location.name} - {location.hours}
              </span>
            </div>
          ))}
          <button 
            className="w-full mt-4 gradient-primary text-primary-foreground py-2 px-4 rounded-lg hover:opacity-90 transition-opacity font-medium"
            data-testid="button-get-directions"
          >
            Navigate Campus
          </button>
        </div>
      </div>
    </div>
  );
}
