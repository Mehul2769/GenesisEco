import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Star, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Mentorship = () => {
  const mentors = [
    {
      id: 1,
      name: "Dr. XYZ",
      title: "Post",
      company: "Company",
      expertise: ["Qualification", "Qualification", "Qualification"],
      rating: 4.9,
      sessions: 5,
      image: "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
      experience: "? years"
    },
    {
      id: 2,
      name: "Prof. XYZ",
      title: "Post",
      company: "Company",
      expertise: ["Qualification", "Qualification", "Qualification"],
      rating: 4.8,
      sessions: 2,
      image: "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
      experience: "? years"
    },
    {
      id: 3,
      name: "XYZ",
      title: "Post",
      company: "Company",
      expertise: ["Qualification", "Qualification", "Qualification"],
      rating: 4.7,
      sessions: 6,
      image: "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
      experience: "? years"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-eco-primary/20 px-6 py-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="bg-green-300">
                <ArrowLeft className="h-3 w-3 mr-1" />
                Back
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-eco-primary flex items-center gap-2">
                <Users className="h-6 w-6" />
                Mentorship Platform
              </h1>
              <p className="text-muted-foreground">Connect with green manufacturing experts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container bg-green-100 mx-auto px-6 py-8">
        <div className="grid gap-6">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="border-eco-secondary/20 hover:shadow-glow transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-eco-primary">{mentor.name}</h3>
                      <p className="text-muted-foreground">{mentor.title} at {mentor.company}</p>
                      <p className="text-sm text-eco-secondary">{mentor.experience} of experience</p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-eco-warning text-eco-warning" />
                        <span className="font-medium">{mentor.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4 text-eco-info" />
                        <span className="text-sm">{mentor.sessions} sessions</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-eco-primary/10 text-eco-primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3 flex-shrink-0">
                    <Button className="w-full md:w-auto">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Session
                    </Button>
                    <Button variant="outline" className="w-full md:w-auto">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentorship;