import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Award, Calendar, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

const GovernmentSchemes = () => {
  const schemes = [
    {
      id: 1,
      title: "PM-KUSUM Scheme",
      agency: "Ministry of New and Renewable Energy",
      funding: "₹34,035 crores",
      deadline: "March 2026",
      description: "Solar pumps and grid-connected solar power plants for farmers",
      eligibility: "Farmers, cooperatives, and FPOs",
      status: "Active",
      applyLink: "https://pmkusum.mnre.gov.in/",
      detailsLink: "/schemes/pm-kusum" // Internal route for more details
    },
    {
      id: 2,
      title: "Green Credit Programme",
      agency: "Ministry of Environment",
      funding: "₹1,000 crores",
      deadline: "December 2024",
      description: "Incentivize voluntary environmental actions by companies",
      eligibility: "All private entities and MSMEs",
      status: "Active",
      applyLink: "https://www.moefcc-gcp.in/about/aboutGCP",
      detailsLink: "/schemes/green-credit"
    },
    {
      id: 3,
      title: "MSME Technology Upgradation Scheme",
      agency: "Ministry of MSME",
      funding: "₹2,500 crores",
      deadline: "Ongoing",
      description: "Technology upgradation and energy efficiency for MSMEs",
      eligibility: "Registered MSMEs",
      status: "Active",
      applyLink: "https://msme.gov.in/technology-upgradation-and-quality-certification",
      detailsLink: "/schemes/msme-technology"
    },
    {
      id: 4,
      title: "Solar Rooftop Subsidy",
      agency: "MNRE",
      funding: "40% subsidy",
      deadline: "March 2025",
      description: "Subsidy for rooftop solar installations",
      eligibility: "Residential and commercial buildings",
      status: "Active",
      applyLink: "https://pmsuryaghar.gov.in/#/",
      detailsLink: "/schemes/solar-rooftop"
    }
  ];

  // Function to handle external navigation with safety
  const handleExternalNavigation = (url) => {
    // Optional: Add confirmation dialog
    const confirmed = window.confirm("You are being redirected to an external website. Continue?");
    if (confirmed) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

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
                <Award className="h-6 w-6" />
                Government Schemes
              </h1>
              <p className="text-muted-foreground">Discover funding opportunities for sustainable manufacturing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container bg-green-100 mx-auto px-6 py-8">
        <div className="grid gap-6">
          {schemes.map((scheme) => (
            <Card key={scheme.id} className="border-eco-primary/20 hover:shadow-eco transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-eco-primary">{scheme.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{scheme.agency}</p>
                  </div>
                  <Badge variant="secondary" className="bg-eco-success/10 text-eco-success">
                    {scheme.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{scheme.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4 text-eco-secondary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Funding</p>
                      <p className="font-medium">{scheme.funding}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-eco-info" />
                    <div>
                      <p className="text-sm text-muted-foreground">Deadline</p>
                      <p className="font-medium">{scheme.deadline}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground">Eligibility</p>
                    <p className="font-medium">{scheme.eligibility}</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm"
                    onClick={() => handleExternalNavigation(scheme.applyLink)}
                  >
                    Apply Now
                  </Button>
                  <Link to={scheme.detailsLink}>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GovernmentSchemes;