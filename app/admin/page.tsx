"use client";

import { useState } from "react";
import { 
  Plus,
  Package,
  DollarSign,
  Image as ImageIcon,
  Upload,
  X,
  Link as LinkIcon,
  Percent,
  Calendar,
  Clock,
  Tag,
  Download,
  Eye,
  BarChart3,
  Users,
  TrendingUp,
  ShoppingCart,
  Bell,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function AdminDashboard() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [productType, setProductType] = useState("file"); // file, link, or both
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    discount: '',
    category: 'Study Guides',
    tags: '',
    link: '',
    accessDuration: '',
    downloadLimit: '',
  });

  const previewSection = (
    <div className="space-y-4 border-t pt-8">
      <h3 className="text-base font-medium">Preview</h3>
      
      <Tabs defaultValue="grid">
        <TabsList className="w-[200px] mb-4">
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="page">Page View</TabsTrigger>
        </TabsList>

        <div className="bg-gray-50 rounded-xl p-6">
          <TabsContent value="grid">
            {/* Grid View Preview Content */}
            <div className="w-[300px] bg-white rounded-lg overflow-hidden border">
              {previewImage ? (
                <div className="relative h-[200px] bg-gray-100">
                  <Image
                    src={previewImage}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="h-[200px] bg-gray-100 flex items-center justify-center">
                  <Package className="w-8 h-8 text-gray-400" />
                </div>
              )}
              <div className="p-4">
                <h3 className="font-medium text-gray-900 line-clamp-1">
                  {formData.title || "Product Title"}
                </h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {formData.description || "Product description will appear here..."}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-lg font-semibold text-gray-900">
                    ${formData.price || "0.00"}
                  </span>
                  {formData.discount && (
                    <>
                      <span className="text-sm text-gray-500 line-through">
                        ${(Number(formData.price) * (1 + Number(formData.discount)/100)).toFixed(2)}
                      </span>
                      <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                        {formData.discount}% OFF
                      </span>
                    </>
                  )}
                </div>
                {formData.tags && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {formData.tags.split(',').map((tag, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="page">
            {/* Page View Preview Content */}
            <div className="bg-white rounded-lg p-6 border">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  {previewImage ? (
                    <div className="relative h-[300px] bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={previewImage}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
                      <Package className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {formData.title || "Product Title"}
                  </h1>
                  <p className="text-gray-600">
                    {formData.description || "Product description will appear here..."}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-gray-900">
                      ${formData.price || "0.00"}
                    </span>
                    {formData.discount && (
                      <>
                        <span className="text-lg text-gray-500 line-through">
                          ${(Number(formData.price) * (1 + Number(formData.discount)/100)).toFixed(2)}
                        </span>
                        <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                          {formData.discount}% OFF
                        </span>
                      </>
                    )}
                  </div>
                  {formData.tags && (
                    <div className="flex flex-wrap gap-2">
                      {formData.tags.split(',').map((tag, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                  <Button className="w-full bg-[#1e2c51] hover:bg-[#1e2c51]/90">
                    Purchase Now
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-500">Welcome back, Admin</p>
        </div>
        <Button 
          onClick={() => setIsDrawerOpen(true)}
          className="gap-2 bg-[#1e2c51] hover:bg-[#1e2c51]/90 text-white"
        >
          <Plus className="w-4 h-4" />
          Add New Product
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Total Revenue
            </CardTitle>
            <DollarSign className="w-4 h-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <div className="flex items-center text-sm text-green-600 mt-1">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              +20.1% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Total Users
            </CardTitle>
            <Users className="w-4 h-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <div className="flex items-center text-sm text-green-600 mt-1">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              +18.2% new users
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Total Products
            </CardTitle>
            <Package className="w-4 h-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <Clock className="w-4 h-4 mr-1" />
              3 pending review
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Active Orders
            </CardTitle>
            <ShoppingCart className="w-4 h-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <div className="flex items-center text-sm text-orange-600 mt-1">
              <Clock className="w-4 h-4 mr-1" />
              4 need attention
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        {/* Recent Activity - Wider Column */}
        <div className="lg:col-span-4 space-y-6">
          {/* Top Products */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Top Selling Products</CardTitle>
                <Button variant="ghost" className="gap-2">
                  View All <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    name: "NCLEX-RN Complete Guide",
                    sales: 234,
                    revenue: 23_400,
                    growth: 12.5,
                  },
                  {
                    name: "Med-Surg Practice Tests",
                    sales: 187,
                    revenue: 9_350,
                    growth: 8.2,
                  },
                  {
                    name: "Pharmacology Study Pack",
                    sales: 156,
                    revenue: 7_800,
                    growth: -2.4,
                  },
                ].map((product) => (
                  <div key={product.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Package className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-gray-500">
                          {product.sales} sales
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">
                        ${product.revenue.toLocaleString()}
                      </div>
                      <div className={cn(
                        "text-sm flex items-center gap-1",
                        product.growth > 0 ? "text-green-600" : "text-red-600"
                      )}>
                        {product.growth > 0 ? (
                          <ArrowUpRight className="w-4 h-4" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4" />
                        )}
                        {Math.abs(product.growth)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Orders</CardTitle>
                <Button variant="ghost" className="gap-2">
                  View All <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    user: "Sarah Johnson",
                    product: "NCLEX-RN Complete Guide",
                    amount: 99.99,
                    status: "completed",
                    time: "2 minutes ago"
                  },
                  {
                    user: "Michael Chen",
                    product: "Med-Surg Practice Tests",
                    amount: 49.99,
                    status: "pending",
                    time: "5 minutes ago"
                  },
                  {
                    user: "Emily Williams",
                    product: "Pharmacology Study Pack",
                    amount: 79.99,
                    status: "processing",
                    time: "12 minutes ago"
                  },
                ].map((order) => (
                  <div key={order.user} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>
                          {order.user.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{order.user}</div>
                        <div className="text-sm text-gray-500">
                          {order.product}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">
                        ${order.amount}
                      </div>
                      <Badge variant={
                        order.status === 'completed' ? 'success' :
                        order.status === 'pending' ? 'warning' : 'default'
                      }>
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Content - Narrower Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    type: "signup",
                    user: "Emma Thompson",
                    time: "Just now",
                    icon: Users,
                  },
                  {
                    type: "purchase",
                    user: "John Davis",
                    time: "5m ago",
                    icon: ShoppingCart,
                  },
                  {
                    type: "review",
                    user: "Lisa Anderson",
                    time: "15m ago",
                    icon: Bell,
                  },
                ].map((activity) => (
                  <div key={activity.user} className="flex items-start gap-4">
                    <div className="mt-1">
                      <activity.icon className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <div className="text-sm">
                        <span className="font-medium">{activity.user}</span>
                        {activity.type === 'signup' && ' joined the platform'}
                        {activity.type === 'purchase' && ' made a purchase'}
                        {activity.type === 'review' && ' left a review'}
                      </div>
                      <div className="text-xs text-gray-500">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm font-medium">Conversion Rate</div>
                <div className="text-2xl font-bold">3.2%</div>
                <div className="text-xs text-gray-500">+0.5% from last week</div>
              </div>
              <div>
                <div className="text-sm font-medium">Avg. Order Value</div>
                <div className="text-2xl font-bold">$84.32</div>
                <div className="text-xs text-gray-500">-$2.14 from last week</div>
              </div>
              <div>
                <div className="text-sm font-medium">Active Users</div>
                <div className="text-2xl font-bold">1,247</div>
                <div className="text-xs text-gray-500">+23 in last hour</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Add Product Drawer */}
      <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto border-l border-gray-200">
          <SheetHeader className="border-b pb-6">
            <div className="flex items-center justify-between">
              <div>
                <SheetTitle className="text-2xl">Add New Product</SheetTitle>
                <SheetDescription>
                  Create a new digital product for your store
                </SheetDescription>
              </div>
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => setIsPreviewOpen(true)}
              >
                <Eye className="w-4 h-4" />
                Preview
              </Button>
            </div>
          </SheetHeader>
          
          <div className="mt-6 space-y-8 pb-24">
            {/* Basic Info */}
            <div className="space-y-4">
              <div>
                <Label className="text-base font-medium">Product Title</Label>
                <Input 
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., NCLEX-RN Complete Study Guide" 
                  className="mt-2 h-11"
                />
              </div>
              
              <div>
                <Label className="text-base font-medium">Description</Label>
                <Textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your product..."
                  className="mt-2 h-32 resize-none"
                />
              </div>

              {/* Product Type Selection */}
              <div>
                <Label className="text-base font-medium">Product Type</Label>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  <button
                    onClick={() => setProductType("file")}
                    className={cn(
                      "p-3 border rounded-lg text-sm flex flex-col items-center gap-2",
                      "hover:border-[#1e2c51]/30 transition-colors",
                      productType === "file" ? "border-[#1e2c51] bg-[#1e2c51]/5" : "border-gray-200"
                    )}
                  >
                    <Upload className="w-5 h-5" />
                    <span>Upload File</span>
                  </button>
                  <button
                    onClick={() => setProductType("link")}
                    className={cn(
                      "p-3 border rounded-lg text-sm flex flex-col items-center gap-2",
                      "hover:border-[#1e2c51]/30 transition-colors",
                      productType === "link" ? "border-[#1e2c51] bg-[#1e2c51]/5" : "border-gray-200"
                    )}
                  >
                    <LinkIcon className="w-5 h-5" />
                    <span>External Link</span>
                  </button>
                  <button
                    onClick={() => setProductType("both")}
                    className={cn(
                      "p-3 border rounded-lg text-sm flex flex-col items-center gap-2",
                      "hover:border-[#1e2c51]/30 transition-colors",
                      productType === "both" ? "border-[#1e2c51] bg-[#1e2c51]/5" : "border-gray-200"
                    )}
                  >
                    <Package className="w-5 h-5" />
                    <span>Both</span>
                  </button>
                </div>
              </div>

              {/* Pricing */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-base font-medium">Price ($)</Label>
                  <div className="relative mt-2">
                    <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                    <Input 
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      type="number" 
                      className="pl-10 h-11" 
                      placeholder="99.99"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-base font-medium">Discount (%)</Label>
                  <div className="relative mt-2">
                    <Percent className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                    <Input 
                      name="discount"
                      value={formData.discount}
                      onChange={handleInputChange}
                      type="number" 
                      className="pl-10 h-11" 
                      placeholder="10"
                    />
                  </div>
                </div>
              </div>

              {/* Categories and Tags */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-base font-medium">Category</Label>
                  <select 
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full h-11 mt-2 px-3 rounded-md border border-input bg-background"
                  >
                    <option>Study Guides</option>
                    <option>Practice Tests</option>
                    <option>Video Courses</option>
                    <option>Question Banks</option>
                  </select>
                </div>
                <div>
                  <Label className="text-base font-medium">Tags</Label>
                  <div className="relative mt-2">
                    <Tag className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                    <Input 
                      name="tags"
                      value={formData.tags}
                      onChange={handleInputChange}
                      className="pl-10 h-11" 
                      placeholder="NCLEX, RN, Study"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-4">
              {productType !== 'link' && (
                <div>
                  <Label className="text-base font-medium">Upload Files</Label>
                  <div className="border-2 border-dashed rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex flex-col items-center gap-2">
                      <div className="p-3 rounded-full bg-[#1e2c51]/10">
                        <Upload className="w-6 h-6 text-[#1e2c51]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Drop your files here, or{" "}
                          <span className="text-[#1e2c51] hover:underline">browse</span>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, ZIP, MP4 up to 2GB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {productType !== 'file' && (
                <div>
                  <Label className="text-base font-medium">External Link</Label>
                  <div className="relative mt-2">
                    <LinkIcon className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                    <Input 
                      name="link"
                      value={formData.link}
                      onChange={handleInputChange}
                      className="pl-10 h-11" 
                      placeholder="https://..."
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Additional Settings */}
            <div className="space-y-4">
              <h3 className="text-base font-medium">Additional Settings</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Access Duration (days)</Label>
                  <div className="relative mt-2">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                    <Input 
                      name="accessDuration"
                      value={formData.accessDuration}
                      onChange={handleInputChange}
                      type="number" 
                      className="pl-10 h-11" 
                      placeholder="365"
                    />
                  </div>
                </div>
                <div>
                  <Label>Download Limit</Label>
                  <div className="relative mt-2">
                    <Download className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                    <Input 
                      name="downloadLimit"
                      value={formData.downloadLimit}
                      onChange={handleInputChange}
                      type="number" 
                      className="pl-10 h-11" 
                      placeholder="3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="fixed bottom-0 right-0 left-0 p-6 bg-white border-t">
            <div className="flex items-center justify-end gap-3 max-w-[540px] mx-auto">
              <SheetClose asChild>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8"
                >
                  Cancel
                </Button>
              </SheetClose>
              <Button 
                size="lg"
                className="bg-[#1e2c51] hover:bg-[#1e2c51]/90 px-8"
              >
                Create Product
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Preview Dialog */}
      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="p-0">
          <div className="border-b p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Product Preview</h2>
                <p className="text-gray-500">Preview how your product will appear to customers</p>
              </div>
              <DialogClose className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </div>
          </div>

          <div className="p-6">
            <Tabs defaultValue="grid" className="w-full">
              <div className="flex items-center justify-between mb-6">
                <TabsList>
                  <TabsTrigger value="grid">Grid View</TabsTrigger>
                  <TabsTrigger value="page">Page View</TabsTrigger>
                </TabsList>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <TabsContent value="grid">
                  <div className="w-[300px] bg-white rounded-lg overflow-hidden border">
                    {previewImage ? (
                      <div className="relative h-[200px] bg-gray-100">
                        <Image
                          src={previewImage}
                          alt="Preview"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-[200px] bg-gray-100 flex items-center justify-center">
                        <Package className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 line-clamp-1">
                        {formData.title || "Product Title"}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                        {formData.description || "Product description will appear here..."}
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="text-lg font-semibold text-gray-900">
                          ${formData.price || "0.00"}
                        </span>
                        {formData.discount && (
                          <>
                            <span className="text-sm text-gray-500 line-through">
                              ${(Number(formData.price) * (1 + Number(formData.discount)/100)).toFixed(2)}
                            </span>
                            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                              {formData.discount}% OFF
                            </span>
                          </>
                        )}
                      </div>
                      {formData.tags && (
                        <div className="flex flex-wrap gap-1 mt-3">
                          {formData.tags.split(',').map((tag, i) => (
                            <span 
                              key={i}
                              className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                            >
                              {tag.trim()}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="page">
                  <div className="bg-white rounded-lg p-6 border">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        {previewImage ? (
                          <div className="relative h-[300px] bg-gray-100 rounded-lg overflow-hidden">
                            <Image
                              src={previewImage}
                              alt="Preview"
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
                            <Package className="w-12 h-12 text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="space-y-4">
                        <h1 className="text-2xl font-bold text-gray-900">
                          {formData.title || "Product Title"}
                        </h1>
                        <p className="text-gray-600">
                          {formData.description || "Product description will appear here..."}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="text-3xl font-bold text-gray-900">
                            ${formData.price || "0.00"}
                          </span>
                          {formData.discount && (
                            <>
                              <span className="text-lg text-gray-500 line-through">
                                ${(Number(formData.price) * (1 + Number(formData.discount)/100)).toFixed(2)}
                              </span>
                              <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                                {formData.discount}% OFF
                              </span>
                            </>
                          )}
                        </div>
                        {formData.tags && (
                          <div className="flex flex-wrap gap-2">
                            {formData.tags.split(',').map((tag, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
                              >
                                {tag.trim()}
                              </span>
                            ))}
                          </div>
                        )}
                        <Button className="w-full bg-[#1e2c51] hover:bg-[#1e2c51]/90">
                          Purchase Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
} 