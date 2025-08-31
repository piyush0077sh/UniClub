import { useQuery } from "@tanstack/react-query";
import type { Message } from "@shared/schema";

export default function MessagingHub() {
  const { data: messages, isLoading } = useQuery<Message[]>({
    queryKey: ["/api/messages"],
    queryFn: () => fetch("/api/messages?userId=user1").then(res => res.json()),
  });

  if (isLoading) {
    return (
      <div className="bg-card rounded-xl shadow-sm border border-border p-6 hover-lift">
        <div className="animate-pulse">
          <div className="h-6 bg-muted rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            <div className="h-16 bg-muted rounded"></div>
            <div className="h-16 bg-muted rounded"></div>
            <div className="h-16 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const getUserAvatar = (senderId: string) => {
    const avatars = {
      user2: "https://pixabay.com/get/geb1120478f93898d68fd3ee4b57fe41dba2288290c7c434a220af347f22bf68bf47a57ad757a229e0966f8cd4c9c8cb2e643241db00f53e02d57166aed3c8edc_1280.jpg",
      user3: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32",
    };
    return avatars[senderId as keyof typeof avatars] || "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32";
  };

  const getSenderName = (senderId: string, groupName?: string) => {
    if (groupName) return groupName;
    const names = {
      user2: "Sarah",
      user3: "Prof. Martinez",
    };
    return names[senderId as keyof typeof names] || "Unknown User";
  };

  const getTimeAgo = (createdAt?: Date) => {
    if (!createdAt) return "now";
    const diff = Date.now() - new Date(createdAt).getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 60) return `${minutes} min ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours} hour ago`;
  };

  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-6 hover-lift">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading text-lg font-semibold text-foreground" data-testid="text-messages-title">
          Messages
        </h3>
        <button 
          className="text-primary hover:text-primary/80 text-sm font-medium"
          data-testid="button-view-all-messages"
        >
          View All
        </button>
      </div>
      
      <div className="space-y-3">
        {messages?.slice(0, 3).map((message, index) => (
          <div 
            key={message.id} 
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer"
            data-testid={`message-item-${index}`}
          >
            <img 
              className="h-8 w-8 rounded-full" 
              src={getUserAvatar(message.senderId)} 
              alt={`${getSenderName(message.senderId, message.groupName)} avatar`}
              data-testid={`img-message-avatar-${index}`}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-foreground" data-testid={`text-sender-name-${index}`}>
                  {getSenderName(message.senderId, message.groupName)}
                </span>
                {!message.isRead && <span className="w-2 h-2 bg-primary rounded-full"></span>}
              </div>
              <p className="text-sm text-muted-foreground truncate" data-testid={`text-message-content-${index}`}>
                {message.content}
              </p>
              <span className="text-xs text-muted-foreground" data-testid={`text-message-time-${index}`}>
                {getTimeAgo(message.createdAt)}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className="w-full mt-4 bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm"
        data-testid="button-open-messages"
      >
        Open Messages
      </button>
    </div>
  );
}
