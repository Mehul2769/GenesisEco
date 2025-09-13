import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Thermometer,
  Battery,
  Factory,
  Zap,
  MapPin,
  TrendingUp,
  Leaf,
  Users,
  Package,
  Award,
  LogOut,
  User
} from "lucide-react";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-dashboard.jpg";
import { useAuth } from "@/hooks/useAuth";
import { useUserData } from "@/hooks/useUserData";
import { Skeleton } from "@/components/ui/skeleton";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const { profile, iotData, loading } = useUserData();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with User Info */}
      <div className="bg-green-100 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-eco-primary" />
            <h1 className="text-xl font-bold text-eco-primary">EcoGenesis</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/profile">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
              >
                <User className="h-4 w-4" />
                Profile
              </Button>
            </Link>

            <Button
              variant="outline"
              size="sm"
              onClick={handleSignOut}
              className="flex items-center gap-2 bg-green-300"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={heroImage}
          alt="EcoGenesis IoT Network"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 backdrop-blur-sm" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl font-bold text-green-300 mb-4">Welcome back!</h1>
            <p className="text-xl text-green-200 mb-6">Your IoT-Enabled Green Manufacturing Dashboard</p>
            <div className="flex gap-4 justify-center">
              <Badge variant="secondary" className="h-10 bg-gradient text-yellow-400 font-bold border-white/30">
                <Leaf className="w-4 h-4 mr-2" />
                Carbon Neutral
              </Badge>
              <Badge variant="secondary" className="bg-gradient text-yellow-400 font-bold border-white/30">
                <Zap className="w-4 h-4 mr-2" />
                Solar Powered
              </Badge>
              <Badge variant="secondary" className="bg-gradient text-yellow-400 font-bold border-white/30">
                <Factory className="w-4 h-4 mr-2" />
                Smart Manufacturing
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="container bg-green-100 mx-auto px-6 py-8">
        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-eco-primary/20 shadow-eco">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Units</CardTitle>
              <Factory className="h-4 w-4 text-eco-primary" />
            </CardHeader>
            <CardContent>
              {loading ? (
                <Skeleton className="h-8 w-16 mb-2" />
              ) : (
                <div className="text-2xl font-bold text-eco-primary">{iotData?.active_units || 0}</div>
              )}
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="border-eco-secondary/20 shadow-glow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Energy Production</CardTitle>
              <Zap className="h-4 w-4 text-eco-secondary" />
            </CardHeader>
            <CardContent>
              {loading ? (
                <Skeleton className="h-8 w-20 mb-2" />
              ) : (
                <div className="text-2xl font-bold text-eco-secondary">{iotData?.energy_production || 0} kWh</div>
              )}
              <p className="text-xs text-muted-foreground">
                +8% efficiency today
              </p>
            </CardContent>
          </Card>

          <Card className="border-eco-success/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CO₂ Saved</CardTitle>
              <Leaf className="h-4 w-4 text-eco-success" />
            </CardHeader>
            <CardContent>
              {loading ? (
                <Skeleton className="h-8 w-16 mb-2" />
              ) : (
                <div className="text-2xl font-bold text-eco-success">{iotData?.co2_saved || 0} kg</div>
              )}
              <p className="text-xs text-muted-foreground">
                This month
              </p>
            </CardContent>
          </Card>

          <Card className="border-eco-info/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Connected MSMEs</CardTitle>
              <Users className="h-4 w-4 text-eco-info" />
            </CardHeader>
            <CardContent>
              {loading ? (
                <Skeleton className="h-8 w-12 mb-2" />
              ) : (
                <div className="text-2xl font-bold text-eco-info">{iotData?.connected_msmes || 0}</div>
              )}
              <p className="text-xs text-muted-foreground">
                +5 new this week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Real-time Monitoring */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-eco-primary" />
                Real-time Unit Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { id: "EG-001", location: "Delhi, New Delhi", temp: 24, battery: 87, status: "optimal" },
                  { id: "EG-002", location: "Palam, New Delhi", temp: 26, battery: 92, status: "optimal" },
                  { id: "EG-003", location: "Dwarka, New Delhi", temp: 23, battery: 76, status: "good" },
                  { id: "EG-004", location: "Janakpuri, New Delhi", temp: 28, battery: 45, status: "warning" },
                ].map((unit) => (
                  <div key={unit.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Badge
                        variant={unit.status === "optimal" ? "default" : unit.status === "good" ? "secondary" : "destructive"}
                        className={
                          unit.status === "optimal" ? "bg-eco-success text-white" :
                            unit.status === "good" ? "bg-eco-warning text-white" :
                              "bg-destructive text-white"
                        }
                      >
                        {unit.status}
                      </Badge>
                      <div>
                        <p className="font-medium">{unit.id}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {unit.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Thermometer className="w-4 h-4 text-eco-info" />
                        {unit.temp}°C
                      </div>
                      <div className="flex items-center gap-2">
                        <Battery className="w-4 h-4 text-eco-secondary" />
                        {unit.battery}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-eco-primary" />
                Today's Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-green-300 rounded-lg text-white">
                <h3 className="font-semibold text-cyan-800 mb-2">Peak Energy Hour</h3>
                <p className="text-sm text-cyan-800 opacity-90">2:30 PM - 3:30 PM</p>
                <p className="text-lg text-cyan-800 font-bold">412 kWh generated</p>
              </div>

              <div className="p-4 bg-eco-earth/10 rounded-lg">
                <h3 className="font-semibold mb-2 text-eco-earth-dark">Best Performing Unit</h3>
                <p className="text-sm text-muted-foreground">EG-002, Palam</p>
                <p className="text-lg font-bold text-eco-earth-dark">98% efficiency</p>
              </div>

              <div className="p-4 bg-eco-success/10 rounded-lg">
                <h3 className="font-semibold mb-2 text-eco-success">Environmental Impact</h3>
                <p className="text-sm text-muted-foreground">CO₂ avoided today</p>
                <p className="text-lg font-bold text-eco-success">5.2 tonnes</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Digital Empowerment Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/government-schemes">
            <Card className="cursor-pointer hover:shadow-eco transition-shadow h-full">
              <CardHeader className="text-center">
                <Award className="w-12 h-12 text-eco-primary mx-auto mb-2" />
                <CardTitle>Government Schemes</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Discover sustainability funding and incentives
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Explore Schemes
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/mentorship">
            <Card className="cursor-pointer hover:shadow-eco transition-shadow h-full">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-eco-secondary mx-auto mb-2" />
                <CardTitle>Mentorship</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with green manufacturing experts
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Find Mentors
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/eco-marketplace">
            <Card className="cursor-pointer hover:shadow-eco transition-shadow h-full">
              <CardHeader className="text-center">
                <Package className="w-12 h-12 text-eco-earth-dark mx-auto mb-2" />
                <CardTitle>Eco Marketplace</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Sell your eco-friendly packaging
                </p>
                <Button variant="outline" size="sm" className="w-full mt-5">
                  Visit Market
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/inventory-management">
            <Card className="cursor-pointer hover:shadow-eco transition-shadow h-full">
              <CardHeader className="text-center">
                <Factory className="w-12 h-12 text-eco-info mx-auto mb-2" />
                <CardTitle>Inventory Mgmt</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Optimize costs and reduce waste
                </p>
                <Button variant="outline" size="sm" className="w-full mt-5">
                  Manage Stock
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;