import { useQuery } from "@tanstack/react-query";
import type { Assessment } from "@shared/schema";

export default function LiveAssessments() {
  const { data: assessments, isLoading } = useQuery<Assessment[]>({
    queryKey: ["/api/assessments"],
  });

  if (isLoading) {
    return (
      <div className="bg-card rounded-xl shadow-sm border border-border p-6 hover-lift">
        <div className="animate-pulse">
          <div className="h-6 bg-muted rounded w-1/3 mb-6"></div>
          <div className="space-y-4">
            <div className="h-20 bg-muted rounded"></div>
            <div className="h-20 bg-muted rounded"></div>
            <div className="h-20 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const activeAssessments = assessments?.filter(a => a.status === "active") || [];
  const pendingAssessments = assessments?.filter(a => a.status === "pending") || [];
  const gradedAssessments = assessments?.filter(a => a.status === "graded") || [];

  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-6 hover-lift">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading text-xl font-semibold text-foreground" data-testid="text-assessments-title">
          Live Assessments
        </h3>
        <span 
          className="bg-highlight text-highlight-foreground px-3 py-1 rounded-full text-sm font-medium"
          data-testid="text-active-count"
        >
          {activeAssessments.length} Active
        </span>
      </div>
      
      <div className="space-y-4">
        {/* Active Assessment */}
        {activeAssessments.map(assessment => (
          <div 
            key={assessment.id} 
            className="border border-highlight/20 rounded-lg p-4 bg-highlight/5"
            data-testid={`assessment-active-${assessment.id}`}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-foreground" data-testid="text-assessment-title">
                {assessment.title}
              </h4>
              <span className="text-highlight font-medium" data-testid="text-time-remaining">
                {assessment.timeRemaining}:45 remaining
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-1 bg-muted rounded-full h-2">
                <div 
                  className="bg-highlight h-2 rounded-full" 
                  style={{width: `${((assessment.completedQuestions || 0) / (assessment.totalQuestions || 1)) * 100}%`}}
                ></div>
              </div>
              <span className="text-sm text-muted-foreground" data-testid="text-progress">
                {assessment.completedQuestions}/{assessment.totalQuestions} questions
              </span>
              <button 
                className="bg-highlight text-highlight-foreground px-4 py-2 rounded-lg hover:bg-highlight/90 transition-colors font-medium text-sm"
                data-testid="button-continue-assessment"
              >
                Continue
              </button>
            </div>
          </div>
        ))}

        {/* Upcoming Assessment */}
        {pendingAssessments.map(assessment => (
          <div 
            key={assessment.id} 
            className="border border-border rounded-lg p-4"
            data-testid={`assessment-pending-${assessment.id}`}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-foreground" data-testid="text-assessment-title">
                {assessment.title}
              </h4>
              <span className="text-destructive font-medium" data-testid="text-due-date">
                Due in 2 days
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Synthesis and Analysis of Organic Compounds
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex-1 bg-muted rounded-full h-2">
                <div className="bg-secondary h-2 rounded-full" style={{width: "30%"}}></div>
              </div>
              <span className="text-sm text-muted-foreground">Draft started</span>
              <button 
                className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors font-medium text-sm"
                data-testid="button-open-assessment"
              >
                Open
              </button>
            </div>
          </div>
        ))}

        {/* Recent Grade */}
        {gradedAssessments.map(assessment => (
          <div 
            key={assessment.id} 
            className="border border-border rounded-lg p-4 bg-secondary/5"
            data-testid={`assessment-graded-${assessment.id}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-foreground" data-testid="text-assessment-title">
                  {assessment.title}
                </h4>
                <p className="text-sm text-muted-foreground">Graded 2 hours ago</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-secondary" data-testid="text-grade">
                  {assessment.grade}
                </div>
                <div className="text-sm text-muted-foreground">A</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
