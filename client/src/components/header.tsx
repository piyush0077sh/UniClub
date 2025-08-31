import { Search, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="font-heading text-2xl font-bold text-primary" data-testid="logo-campushub">
                CampusHub
              </h1>
            </div>
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"
                data-testid="nav-dashboard"
              >
                Dashboard
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"
                data-testid="nav-campus-guide"
              >
                Campus Guide
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"
                data-testid="nav-assessments"
              >
                Assessments
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"
                data-testid="nav-messages"
              >
                Messages
              </a>
            </nav>
          </div>
          
          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Search courses, people..." 
                className="w-64 pl-10 pr-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-card"
                data-testid="input-search"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            
            {/* Notifications */}
            <div className="relative">
              <button 
                className="p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted"
                data-testid="button-notifications"
              >
                <Bell className="h-6 w-6" />
              </button>
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-highlight notification-dot"></span>
            </div>
            
            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <img 
                className="h-8 w-8 rounded-full" 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32" 
                alt="User avatar"
                data-testid="img-user-avatar"
              />
              <span className="hidden md:block text-sm font-medium" data-testid="text-user-name">
                Alex Johnson
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
