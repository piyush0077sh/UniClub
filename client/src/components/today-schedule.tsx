import { useQuery } from "@tanstack/react-query";
import type { Course } from "@shared/schema";

export default function TodaySchedule() {
  const { data: courses, isLoading } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  if (isLoading) {
    return (
      <div className="mt-8 bg-card rounded-xl shadow-sm border border-border p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-muted rounded w-1/3 mb-6"></div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="h-24 bg-muted rounded"></div>
            <div className="h-24 bg-muted rounded"></div>
            <div className="h-24 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const scheduleItems = [
    {
      course: courses?.[0],
      time: "Now - 11:30 AM",
      status: "current",
      bgClass: "bg-primary/10 border-primary/20",
      dotClass: "bg-primary",
      textClass: "text-primary"
    },
    {
      course: courses?.[1],
      time: "1:00 PM - 2:30 PM",
      status: "upcoming",
      bgClass: "border-border",
      dotClass: "bg-secondary",
      textClass: "text-secondary"
    },
    {
      course: null,
      title: "Biology Study Group",
      room: "Library Study Room B",
      instructor: "5 participants",
      time: "3:00 PM - 5:00 PM",
      status: "study",
      bgClass: "border-border",
      dotClass: "bg-accent",
      textClass: "text-accent"
    }
  ];

  return (
    <div className="mt-8 bg-card rounded-xl shadow-sm border border-border p-6">
      <h3 className="font-heading text-xl font-semibold text-foreground mb-6" data-testid="text-schedule-title">
        Today's Schedule
      </h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        {scheduleItems.map((item, index) => (
          <div 
            key={index}
            className={`border rounded-lg p-4 ${item.bgClass}`}
            data-testid={`schedule-item-${index}`}
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className={`w-3 h-3 ${item.dotClass} rounded-full`}></div>
              <span className={`text-sm font-medium ${item.textClass}`} data-testid={`text-schedule-time-${index}`}>
                {item.time}
              </span>
            </div>
            <h4 className="font-semibold text-foreground mb-1" data-testid={`text-schedule-title-${index}`}>
              {item.course?.name || item.title}
            </h4>
            <p className="text-sm text-muted-foreground" data-testid={`text-schedule-room-${index}`}>
              Room: {item.course?.room || item.room}
            </p>
            <p className="text-sm text-muted-foreground" data-testid={`text-schedule-instructor-${index}`}>
              {item.course?.instructor || item.instructor}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
