import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-background to-muted/20 md:mt-20">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground">
        Your Global Education Journey Starts Here
        </h1>
        <p className="text-lg sm:text-xl md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Quality education, incredible destinations—your dream study abroad program, for less.
        </p>
        <p className="text-base sm:text-lg md:text-xl font-semibold text-primary">
          Cut the cost, not the experience.
        </p>
        <div className="pt-4">
          <Button size="lg" className="text-base sm:text-lg px-8 py-6">
            Find a Program
          </Button>
        </div>
      </div>
    </div>
  );
}
