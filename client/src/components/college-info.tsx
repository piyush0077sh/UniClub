import { useQuery } from "@tanstack/react-query";
import { Megaphone, Calendar, BookOpen } from "lucide-react";
import type { Announcement } from "@shared/schema";

export default function CollegeInfo() {
  const { data: announcements, isLoading } = useQuery<Announcement[]>({
    queryKey: ["/api/announcements"],
  });

  if (isLoading) {
    return (
      <div className="bg-card rounded-xl shadow-sm border border-border p-6 hover-lift premium-shadow">
        <div className="animate-pulse">
          <div className="h-6 bg-muted rounded w-1/3 mb-4"></div>
          <div className="space-y-4">
            <div className="h-16 bg-muted rounded"></div>
            <div className="h-16 bg-muted rounded"></div>
            <div className="h-16 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <Megaphone className="h-4 w-4 text-primary" />;
      case "event":
        return <Calendar className="h-4 w-4 text-secondary" />;
      case "resource":
        return <BookOpen className="h-4 w-4 text-accent" />;
      default:
        return <Megaphone className="h-4 w-4 text-primary" />;
    }
  };

  const getBorderColor = (type: string) => {
    switch (type) {
      case "alert":
        return "border-l-primary";
      case "event":
        return "border-l-secondary";
      case "resource":
        return "border-l-accent";
      default:
        return "border-l-primary";
    }
  };

  const getTimeAgo = (createdAt?: Date) => {
    if (!createdAt) return "now";
    const diff = Date.now() - new Date(createdAt).getTime();
    const hours = Math.floor(diff / 3600000);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return days === 1 ? "Yesterday" : `${days} days ago`;
  };

  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-6 hover-lift premium-shadow">
      <h3 className="font-heading text-lg font-semibold text-foreground mb-4" data-testid="text-college-updates-title">
        College Updates
      </h3>
      
      <div className="space-y-4">
        {announcements?.slice(0, 3).map((announcement, index) => (
          <div 
            key={announcement.id} 
            className={`border-l-4 pl-4 ${getBorderColor(announcement.type)}`}
            data-testid={`announcement-item-${index}`}
          >
            <div className="flex items-center space-x-2 mb-1">
              {getIcon(announcement.type)}
              <span className="font-medium text-sm text-foreground" data-testid={`text-announcement-title-${index}`}>
                {announcement.title}
              </span>
            </div>
            <p className="text-sm text-muted-foreground" data-testid={`text-announcement-content-${index}`}>
              {announcement.content}
            </p>
            <span className="text-xs text-muted-foreground" data-testid={`text-announcement-time-${index}`}>
              {getTimeAgo(announcement.createdAt || undefined)}
            </span>
          </div>
        ))}
      </div>

      <button 
        className="w-full mt-4 bg-muted text-muted-foreground py-2 px-4 rounded-lg hover:bg-muted/80 transition-colors font-medium text-sm"
        data-testid="button-view-all-updates"
      >
        View All Updates
      </button>
    </div>
  );
}
