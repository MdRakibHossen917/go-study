import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-background to-muted/20 mt-4 md:mt-20">
      <div className="max-w-4xl mx-auto px-1 text-center space-y-2">
        <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-foreground">
          Study Abroad with Confidence – Your Global Education Journey Begins Here
        </h1>

        <p className="text-base sm:text-xl md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover affordable study abroad programs at top universities worldwide.
          <span className="hidden lg:inline">
            {" "}Get expert guidance for Bachelor’s, Master’s, and higher education.
          </span>
        </p>


        <p className="text-base sm:text-lg md:text-xl font-semibold text-primary">
          Affordable tuition, trusted support, and a brighter future abroad.
        </p>

        <div className="pt-4">
          <Button size="lg" className="text-base sm:text-lg px-8 py-6">
            Explore Study Programs
          </Button>
        </div>
      </div>
    </div>
  );
}
