
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: 1000,
    duration: "1 month",
    description: "Perfect for beginners starting their DSA journey",
    features: [
      "Full access to DSA course materials",
      "Weekly live doubt solving sessions",
      "Access to coding challenges",
      "Email support",
      "Certificate upon completion"
    ]
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: 2500,
    duration: "3 months",
    description: "Most popular choice for serious learners",
    features: [
      "Everything in Monthly plan",
      "One-on-one mentorship sessions",
      "Interview preparation resources",
      "Priority email support",
      "Resume review session"
    ],
    popular: true
  },
  {
    id: "biannual",
    name: "Biannual",
    price: 4500,
    duration: "6 months",
    description: "Comprehensive mastery program for future experts",
    features: [
      "Everything in Quarterly plan",
      "Advanced DSA concepts",
      "System design basics",
      "Mock interviews with feedback",
      "Lifetime access to course updates",
      "Job referrals for top performers"
    ]
  }
];

const PricingSection = () => {
  const { toast } = useToast();

  const handleAddToCart = (plan: PricingPlan) => {
    // This would be connected to actual cart functionality
    toast({
      title: "Added to cart!",
      description: `${plan.name} plan (₹${plan.price}) has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Path</h2>
          <p className="text-lg text-gray-600">
            Select the plan that best fits your learning goals and schedule.
            All plans include access to our community of learners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative h-full flex flex-col ${
                plan.popular ? "border-brand-purple shadow-lg" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-brand-purple text-white text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-3xl font-bold">₹{plan.price}</span>
                  <span className="text-gray-500 ml-1">/{plan.duration}</span>
                </div>
                
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90" 
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handleAddToCart(plan)}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
