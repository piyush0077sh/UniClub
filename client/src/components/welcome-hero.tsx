export default function WelcomeHero() {
  return (
    <div className="mb-8">
      <div className="gradient-primary rounded-xl p-6 text-primary-foreground premium-shadow">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-2" data-testid="text-welcome-greeting">
              Good morning, Raj!
            </h2>
            <p className="text-primary-foreground/80" data-testid="text-welcome-summary">
              You have 3 classes at Motilal Nehru College today and 2 new discussions
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold" data-testid="text-gpa-value">8.7</div>
              <div className="text-sm text-primary-foreground/80" data-testid="text-gpa-label">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold" data-testid="text-credits-value">18</div>
              <div className="text-sm text-primary-foreground/80" data-testid="text-credits-label">Credits</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold" data-testid="text-weather-value">28°C</div>
              <div className="text-sm text-primary-foreground/80" data-testid="text-weather-label">North Campus</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
