import Header from "@/components/header";
import WelcomeHero from "@/components/welcome-hero";
import CampusGuide from "@/components/campus-guide";
import LiveAssessments from "@/components/live-assessments";
import MessagingHub from "@/components/messaging-hub";
import CollegeInfo from "@/components/college-info";
import QuickActions from "@/components/quick-actions";
import TodaySchedule from "@/components/today-schedule";

export default function Dashboard() {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <WelcomeHero />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <CampusGuide />
            <LiveAssessments />
          </div>
          
          <div className="space-y-6">
            <MessagingHub />
            <CollegeInfo />
            <QuickActions />
          </div>
        </div>
        
        <TodaySchedule />
      </div>
    </div>
  );
}
