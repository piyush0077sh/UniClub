import { useQuery } from "@tanstack/react-query";
import { ChevronUp, Pin, Shield, MessageSquare, Hash, Users, BookOpen, Megaphone } from "lucide-react";
import { useState } from "react";
import type { Message } from "@shared/schema";

export default function MessagingHub() {
  const [activeChannel, setActiveChannel] = useState("all");
  
  const { data: messages, isLoading } = useQuery<Message[]>({
    queryKey: ["/api/messages"],
    queryFn: () => fetch("/api/messages?userId=user1").then(res => res.json()),
  });

  const channels = [
    { id: "all", name: "All Channels", icon: MessageSquare, color: "text-primary" },
    { id: "announcements", name: "Announcements", icon: Megaphone, color: "text-primary" },
    { id: "academic", name: "Academic", icon: BookOpen, color: "text-secondary" },
    { id: "study-groups", name: "Study Groups", icon: Users, color: "text-accent" },
    { id: "social", name: "Social", icon: Hash, color: "text-highlight" },
  ];

  if (isLoading) {
    return (
      <div className="bg-card rounded-xl shadow-sm border border-border p-6 hover-lift premium-shadow">
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

  const filteredMessages = activeChannel === "all" 
    ? messages 
    : messages?.filter(m => m.channel === activeChannel);

  const sortedMessages = filteredMessages?.sort((a, b) => {
    // Pinned messages first, then by upvotes, then by time
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    if ((a.upvotes || 0) !== (b.upvotes || 0)) return (b.upvotes || 0) - (a.upvotes || 0);
    return (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0);
  });

  const getUserAvatar = (senderId: string) => {
    const avatars = {
      user2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32",
      user3: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32",
      user4: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32",
      admin1: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32",
    };
    return avatars[senderId as keyof typeof avatars] || "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32";
  };

  const getSenderName = (senderId: string, groupName?: string) => {
    if (groupName) return groupName;
    const names = {
      user2: "Priya Singh",
      user3: "Dr. Anil Kumar",
      user4: "Rohan Gupta", 
      admin1: "College Admin",
    };
    return names[senderId as keyof typeof names] || "Unknown User";
  };

  const getTimeAgo = (createdAt?: Date) => {
    if (!createdAt) return "now";
    const diff = Date.now() - new Date(createdAt).getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h`;
  };

  const getChannelIcon = (channelId: string) => {
    const channel = channels.find(c => c.id === channelId);
    return channel ? channel.icon : MessageSquare;
  };

  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-6 hover-lift premium-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading text-lg font-semibold text-foreground flex items-center" data-testid="text-messages-title">
          <MessageSquare className="h-5 w-5 mr-2 text-primary" />
          Live Discussions
        </h3>
        <button 
          className="text-primary hover:text-primary/80 text-sm font-medium"
          data-testid="button-view-all-messages"
        >
          Join Chat
        </button>
      </div>

      {/* Channel Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {channels.map(channel => {
          const Icon = channel.icon;
          return (
            <button
              key={channel.id}
              onClick={() => setActiveChannel(channel.id)}
              className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                activeChannel === channel.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
              data-testid={`button-channel-${channel.id}`}
            >
              <Icon className="h-3 w-3" />
              <span>{channel.name}</span>
            </button>
          );
        })}
      </div>
      
      <div className="space-y-3">
        {sortedMessages?.slice(0, 4).map((message, index) => {
          const Icon = getChannelIcon(message.channel || "all");
          return (
            <div 
              key={message.id} 
              className={`flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors ${
                message.isPinned ? 'bg-highlight/5 border border-highlight/20' : ''
              } ${message.isAdmin ? 'bg-primary/5 border border-primary/20' : ''}`}
              data-testid={`message-item-${index}`}
            >
              <img 
                className={`h-8 w-8 rounded-full ${message.isAdmin ? 'ring-2 ring-primary' : ''}`}
                src={getUserAvatar(message.senderId)} 
                alt={`${getSenderName(message.senderId, message.groupName || undefined)} avatar`}
                data-testid={`img-message-avatar-${index}`}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <Icon className="h-3 w-3 text-muted-foreground" />
                  <span className={`text-sm font-medium ${message.isAdmin ? 'text-primary' : 'text-foreground'}`} data-testid={`text-sender-name-${index}`}>
                    {getSenderName(message.senderId, message.groupName || undefined)}
                  </span>
                  {message.isAdmin && <Shield className="h-3 w-3 text-primary" />}
                  {message.isPinned && <Pin className="h-3 w-3 text-highlight" />}
                  {!message.isRead && <span className="w-2 h-2 bg-primary rounded-full"></span>}
                </div>
                <p className="text-sm text-muted-foreground mb-2" data-testid={`text-message-content-${index}`}>
                  {message.content}
                </p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors" data-testid={`button-upvote-${index}`}>
                    <ChevronUp className="h-3 w-3" />
                    <span>{message.upvotes || 0}</span>
                  </button>
                  <span data-testid={`text-message-time-${index}`}>
                    {getTimeAgo(message.createdAt || undefined)}
                  </span>
                  <span className="text-accent">#{message.channel || 'general'}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <button 
        className="w-full mt-4 gradient-secondary text-secondary-foreground py-2 px-4 rounded-lg hover:opacity-90 transition-opacity font-medium text-sm"
        data-testid="button-open-messages"
      >
        Join Live Discussion
      </button>
    </div>
  );
}