import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Shield, Truck, CreditCard, Star } from "lucide-react";

export default function Buy() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedWarranty, setSelectedWarranty] = useState("standard");
  const [isProcessing, setIsProcessing] = useState(false);

  const basePrice = 649;
  const shipping = 0; // Free shipping
  const warranty = selectedWarranty === "extended" ? 99 : 0;
  const tax = Math.round((basePrice * quantity + warranty) * 0.08875); // NY tax rate
  const total = basePrice * quantity + warranty + shipping + tax;

  const handleCheckout = async () => {
    setIsProcessing(true);
    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    // Could navigate to success page or show confirmation
    alert("Order placed successfully! You'll receive confirmation shortly.");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/main")}
              className="text-foreground hover:text-primary hover:bg-primary/10"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Product
            </Button>
            <div className="text-center">
              <h1 className="text-xl font-bold text-foreground">
                Secure Checkout
              </h1>
              <p className="text-sm text-muted-foreground">
                AMD RX 9070 XT Purchase
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">SSL Secured</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="order-2 lg:order-1">
            <Card className="bg-card border-border sticky top-28">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Product */}
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-amd-red-600/20 rounded-lg flex items-center justify-center border border-primary/30">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Facb3ae1334db4bde93662c1128db2481%2F4ecb4e8fc1f24c4ca713f7b216c2e3df"
                      alt="AMD RX 9070 XT"
                      className="w-20 h-auto rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-lg">
                      AMD RX 9070 XT
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      16GB GDDR6 • RDNA 4 Architecture
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        Ray Tracing
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        4K Ready
                      </Badge>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Quantity */}
                <div className="flex items-center justify-between">
                  <Label className="text-foreground">Quantity</Label>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 p-0"
                    >
                      -
                    </Button>
                    <span className="w-8 text-center text-foreground">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.min(5, quantity + 1))}
                      className="w-8 h-8 p-0"
                    >
                      +
                    </Button>
                  </div>
                </div>

                {/* Warranty */}
                <div className="space-y-3">
                  <Label className="text-foreground">Extended Warranty</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="standard"
                        checked={selectedWarranty === "standard"}
                        onCheckedChange={() => setSelectedWarranty("standard")}
                      />
                      <Label htmlFor="standard" className="text-sm">
                        Standard Warranty (2 years) - Free
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="extended"
                        checked={selectedWarranty === "extended"}
                        onCheckedChange={() => setSelectedWarranty("extended")}
                      />
                      <Label htmlFor="extended" className="text-sm">
                        Extended Warranty (4 years) - $99
                      </Label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Pricing */}
                <div className="space-y-3">
                  <div className="flex justify-between text-foreground">
                    <span>Subtotal ({quantity}x)</span>
                    <span>${(basePrice * quantity).toLocaleString()}</span>
                  </div>
                  {warranty > 0 && (
                    <div className="flex justify-between text-foreground">
                      <span>Extended Warranty</span>
                      <span>${warranty}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-foreground">
                    <span className="flex items-center gap-2">
                      <Truck className="w-4 h-4" />
                      Shipping
                    </span>
                    <span className="text-primary font-semibold">FREE</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Tax</span>
                    <span>${tax}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold text-foreground">
                    <span>Total</span>
                    <span className="text-primary">
                      ${total.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Shield className="w-4 h-4 text-primary" />
                    30-day money-back guarantee
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Truck className="w-4 h-4 text-primary" />
                    Free 2-day shipping
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CreditCard className="w-4 h-4 text-primary" />
                    Secure payment processing
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Checkout Form */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Shipping Information */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="123 Main St" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="New York" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ny">New York</SelectItem>
                        <SelectItem value="ca">California</SelectItem>
                        <SelectItem value="tx">Texas</SelectItem>
                        <SelectItem value="fl">Florida</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" placeholder="10001" />
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input id="cardName" placeholder="John Doe" />
                </div>
              </CardContent>
            </Card>

            {/* Place Order */}
            <Button
              onClick={handleCheckout}
              disabled={isProcessing}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 h-auto font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </div>
              ) : (
                `Complete Purchase - $${total.toLocaleString()}`
              )}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              By placing this order, you agree to our terms of service and
              privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
