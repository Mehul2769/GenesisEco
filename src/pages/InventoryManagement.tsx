import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Package, TrendingDown, AlertTriangle, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const InventoryManagement = () => {
  const inventory = [
    {
      id: 1,
      name: "Biodegradable Food Containers",
      category: "Food Packaging",
      stock: 450,
      maxStock: 1000,
      reorderPoint: 200,
      lastOrdered: "2024-01-15",
      supplier: "GreenPack Solutions",
      cost: "₹2.25",
      status: "In Stock"
    },
    {
      id: 2,
      name: "Recycled Cardboard Boxes",
      category: "Shipping",
      stock: 89,
      maxStock: 500,
      reorderPoint: 100,
      lastOrdered: "2024-01-10",
      supplier: "EcoBox India",
      cost: "₹25.00",
      status: "Low Stock"
    },
    {
      id: 3,
      name: "Eco-Friendly Bubble Wrap",
      category: "Protective",
      stock: 25,
      maxStock: 200,
      reorderPoint: 50,
      lastOrdered: "2023-12-28",
      supplier: "GreenWrap Co.",
      cost: "₹120.00",
      status: "Critical"
    },
    {
      id: 4,
      name: "Jute Shopping Bags",
      category: "Retail",
      stock: 750,
      maxStock: 1000,
      reorderPoint: 300,
      lastOrdered: "2024-01-20",
      supplier: "Natural Fiber Works",
      cost: "₹85.00",
      status: "In Stock"
    }
  ];

  const getStockPercentage = (stock: number, maxStock: number) => {
    return (stock / maxStock) * 100;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "In Stock":
        return <Badge className="bg-eco-success text-white">In Stock</Badge>;
      case "Low Stock":
        return <Badge className="bg-eco-warning text-white">Low Stock</Badge>;
      case "Critical":
        return <Badge variant="destructive">Critical</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-eco-primary/20 px-6 py-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="bg-green-300">
                <ArrowLeft className="h-3 w-3 mr-1" />
                Back
              </Button>
            </Link>
              <div>
                <h1 className="text-2xl font-bold text-eco-primary flex items-center gap-2">
                  <Package className="h-6 w-6" />
                  Inventory Management
                </h1>
                <p className="text-muted-foreground">Optimize costs and reduce waste</p>
              </div>
            </div>
            <Button >
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="container bg-green-100 mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-eco-primary/20">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-eco-primary">4</div>
              <p className="text-sm text-muted-foreground">Total Items</p>
            </CardContent>
          </Card>
          <Card className="border-eco-warning/20">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-eco-warning">1</div>
              <p className="text-sm text-muted-foreground">Low Stock Items</p>
            </CardContent>
          </Card>
          <Card className="border-destructive/20">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-destructive">1</div>
              <p className="text-sm text-muted-foreground">Critical Items</p>
            </CardContent>
          </Card>
          <Card className="border-eco-secondary/20">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-eco-secondary">₹98,750</div>
              <p className="text-sm text-muted-foreground">Total Value</p>
            </CardContent>
          </Card>
        </div>

        {/* Inventory List */}
        <div className="space-y-4">
          {inventory.map((item) => (
            <Card key={item.id} className="border-eco-info/20">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center">
                  <div className="lg:col-span-2">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                    <p className="text-sm text-eco-secondary">Supplier: {item.supplier}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Stock Level</span>
                      <span>{item.stock}/{item.maxStock}</span>
                    </div>
                    <Progress 
                      value={getStockPercentage(item.stock, item.maxStock)} 
                      className="h-2"
                    />
                    {item.stock <= item.reorderPoint && (
                      <div className="flex items-center gap-1 text-orange-600">
                        <AlertTriangle className="h-3 w-3" />
                        <span className="text-xs">Below reorder point</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="text-center">
                    <p className="text-lg font-bold text-eco-primary">{item.cost}</p>
                    <p className="text-xs text-muted-foreground">per unit</p>
                  </div>
                  
                  <div className="text-center">
                    {getStatusBadge(item.status)}
                    <p className="text-xs text-muted-foreground mt-1">
                      Last: {item.lastOrdered}
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Reorder
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <TrendingDown className="h-4 w-4" />
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

export default InventoryManagement;