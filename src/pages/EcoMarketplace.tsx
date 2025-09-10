import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Package, Star, ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const EcoMarketplace = () => {
  const products = [
    {
      id: 1,
      name: "Biodegradable Food Containers",
      category: "Food Packaging",
      price: "₹450",
      unit: "per 100 units",
      rating: 4.8,
      reviews: 124,
      seller: "GreenPack Solutions",
      image: "https://www.flavorish.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F13sz3xxy%2Fproduction%2F74bf11fbcb3e73448521ab2d5dc7bf19613fa0b9-1920x1080.png%3Fauto%3Dformat&w=3840&q=75",
      sustainability: "100% Compostable",
      material: "Sugarcane Bagasse"
    },
    {
      id: 2,
      name: "Recycled Cardboard Boxes",
      category: "Shipping",
      price: "₹25",
      unit: "per piece",
      rating: 4.6,
      reviews: 89,
      seller: "EcoBox India",
      image: "https://www.theboxery.com/blog/wp-content/uploads/2023/08/Untitled-design-3.jpg",
      sustainability: "80% Recycled Content",
      material: "Recycled Cardboard"
    },
    {
      id: 3,
      name: "Eco-Friendly Bubble Wrap",
      category: "Protective Packaging",
      price: "₹120",
      unit: "per meter",
      rating: 4.7,
      reviews: 67,
      seller: "GreenWrap Co.",
      image: "https://verycompostable.com/wp-content/uploads/2019/12/970863-81-91884-rrqiv2hjb-732x479.jpeg",
      sustainability: "Biodegradable",
      material: "Cornstarch Based"
    },
    {
      id: 4,
      name: "Jute Shopping Bags",
      category: "Retail Bags",
      price: "₹85",
      unit: "per piece",
      rating: 4.9,
      reviews: 156,
      seller: "Natural Fiber Works",
      image: "https://m.media-amazon.com/images/I/91KmgCtMlEL._UY1100_.jpg  ",
      sustainability: "100% Natural",
      material: "Organic Jute"
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
                <Package className="h-6 w-6" />
                Eco Marketplace
              </h1>
              <p className="text-muted-foreground">Sustainable packaging solutions for your business</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container bg-green-100 mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="border-eco-earth/20 hover:shadow-eco transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-eco-success text-white">
                  {product.sustainability}
                </Badge>
              </div>
              
              <CardHeader>
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit">
                    {product.category}
                  </Badge>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">by {product.seller}</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-eco-warning text-eco-warning" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Material: {product.material}</p>
                </div>
                
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-2xl font-bold text-eco-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">{product.unit}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button  size="sm" className="flex-1">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcoMarketplace;