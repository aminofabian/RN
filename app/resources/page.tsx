"use client";

import { useState } from "react";
import { Star, BookOpen, Clock, Users, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";

const nursingResources = [
  {
    id: 1,
    title: "NCLEX-RN Complete Prep Package",
    rating: 4.8,
    reviews: 156,
    type: "Practice Tests",
    duration: "6 months access",
    questions: "2000+ Questions",
    price: 199,
    monthlyPrice: 33,
    image: "/categories/sincerely-media--IIIr1Hu6aY-unsplash.jpg",
    tags: ["NCLEX-RN", "Premium"]
  },
  {
    id: 2,
    title: "Fundamentals of Nursing Study Guide",
    rating: 4.9,
    reviews: 89,
    type: "Study Material",
    duration: "Lifetime access",
    chapters: "15 Chapters",
    price: 149,
    monthlyPrice: 25,
    image: "/categories/hush-naidoo-jade-photography-eKNswc0Qxz8-unsplash.jpg",
    tags: ["Fundamentals", "Bestseller"]
  },
  {
    id: 3,
    title: "Medical-Surgical Nursing Practice Tests",
    rating: 4.7,
    reviews: 123,
    type: "Practice Tests",
    duration: "12 months access",
    questions: "1500+ Questions",
    price: 179,
    monthlyPrice: 29,
    image: "/categories/national-cancer-institute-NFvdKIhxYlU-unsplash.jpg",
    tags: ["Med-Surg", "Popular"]
  },
  {
    id: 4,
    title: "Pediatric Nursing Study Bundle",
    rating: 4.8,
    reviews: 94,
    type: "Study Material",
    duration: "Lifetime access",
    chapters: "12 Chapters",
    price: 159,
    monthlyPrice: 27,
    image: "/categories/tony-luginsland-qS1bDAxxAYg-unsplash.jpg",
    tags: ["Pediatrics", "Bundle"]
  },
  {
    id: 5,
    title: "Mental Health Nursing Essentials",
    rating: 4.6,
    reviews: 78,
    type: "Video Lectures",
    duration: "12 months access",
    lessons: "45 Videos",
    price: 129,
    monthlyPrice: 22,
    image: "/categories/marissa-grootes-flRm0z3MEoA-unsplash.jpg",
    tags: ["Mental Health", "New"]
  },
  {
    id: 6,
    title: "Critical Care Nursing Flashcards",
    rating: 4.7,
    reviews: 112,
    type: "Flashcards",
    duration: "Lifetime access",
    cards: "800+ Cards",
    price: 89,
    monthlyPrice: 15,
    image: "/categories/owen-beard-DK8jXx1B-1c-unsplash.jpg",
    tags: ["Critical Care"]
  },
  {
    id: 7,
    title: "Pharmacology Master Course",
    rating: 4.9,
    reviews: 245,
    type: "Study Material",
    duration: "Lifetime access",
    chapters: "20 Chapters",
    price: 199,
    monthlyPrice: 33,
    image: "/categories/paul-felberbauer-QL7iY3G24z4-unsplash.jpg",
    tags: ["Pharmacology", "Bestseller"]
  },
  {
    id: 8,
    title: "OB/GYN Nursing Practice Tests",
    rating: 4.7,
    reviews: 67,
    type: "Practice Tests",
    duration: "6 months access",
    questions: "1000+ Questions",
    price: 139,
    monthlyPrice: 23,
    image: "/categories/fahrul-azmi-cFUZ-6i83vs-unsplash.jpg",
    tags: ["OB/GYN"]
  },
  {
    id: 9,
    title: "Nursing Skills Video Library",
    rating: 4.8,
    reviews: 156,
    type: "Video Lectures",
    duration: "12 months access",
    videos: "100+ Videos",
    price: 169,
    monthlyPrice: 28,
    image: "/categories/element5-digital-OyCl7Y4y0Bk-unsplash.jpg",
    tags: ["Clinical Skills", "Popular"]
  },
  {
    id: 10,
    title: "Community Health Nursing Guide",
    rating: 4.6,
    reviews: 45,
    type: "Study Material",
    duration: "Lifetime access",
    chapters: "10 Chapters",
    price: 119,
    monthlyPrice: 20,
    image: "/categories/julia-taubitz-6JUYocDPaZo-unsplash.jpg",
    tags: ["Community Health"]
  },
  {
    id: 11,
    title: "Leadership in Nursing Course",
    rating: 4.8,
    reviews: 89,
    type: "Video Lectures",
    duration: "6 months access",
    lessons: "30 Videos",
    price: 149,
    monthlyPrice: 25,
    image: "/categories/alexander-grey-eMP4sYPJ9x0-unsplash.jpg",
    tags: ["Leadership", "New"]
  },
  {
    id: 12,
    title: "Emergency Nursing Protocols",
    rating: 4.9,
    reviews: 134,
    type: "Study Material",
    duration: "Lifetime access",
    chapters: "15 Chapters",
    price: 179,
    monthlyPrice: 30,
    image: "/categories/olga-guryanova-tMFeatBSS4s-unsplash.jpg",
    tags: ["Emergency", "Premium"]
  },
  {
    id: 13,
    title: "Nursing Math & Calculations",
    rating: 4.7,
    reviews: 223,
    type: "Practice Tests",
    duration: "12 months access",
    questions: "500+ Questions",
    price: 99,
    monthlyPrice: 17,
    image: "/categories/sincerely-media--IIIr1Hu6aY-unsplash.jpg",
    tags: ["Mathematics"]
  },
  {
    id: 14,
    title: "Geriatric Nursing Essentials",
    rating: 4.6,
    reviews: 78,
    type: "Study Material",
    duration: "Lifetime access",
    chapters: "12 Chapters",
    price: 139,
    monthlyPrice: 23,
    image: "/categories/robina-weermeijer-NIuGLCC7q54-unsplash.jpg",
    tags: ["Geriatrics"]
  },
  {
    id: 15,
    title: "Nursing Ethics & Law",
    rating: 4.8,
    reviews: 91,
    type: "Video Lectures",
    duration: "6 months access",
    lessons: "25 Videos",
    price: 129,
    monthlyPrice: 22,
    image: "/categories/olga-guryanova-tMFeatBSS4s-unsplash (1).jpg",
    tags: ["Ethics", "Law"]
  }
];

export default function ResourcesPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    type: "",
    priceRange: "",
    duration: "",
  });
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Nursing Study Resources</h1>
        <p className="text-muted-foreground mt-2">
          Comprehensive study materials and practice tests for nursing students
        </p>
        <div className="flex items-center gap-2 mt-4">
          <div className="flex items-center">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold ml-1">4.9</span>
          </div>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground">512 Reviews</span>
        </div>
      </div>

      {/* Filters and Grid Layout */}
      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-4">Filter Resources</h3>
            
            {/* Resource Type Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-2">Resource Type</h4>
              <div className="space-y-2">
                {["Practice Tests", "Study Guides", "Video Lectures", "Flashcards"].map(type => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      onChange={(e) => {
                        setSelectedFilters(prev => ({
                          ...prev,
                          type: e.target.checked ? type : ""
                        }));
                      }}
                    />
                    <span className="ml-2 text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-2">Price Range</h4>
              <div className="space-y-2">
                {["Under $50", "$50 - $100", "$100 - $200", "$200+"].map(range => (
                  <label key={range} className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      onChange={(e) => {
                        setSelectedFilters(prev => ({
                          ...prev,
                          priceRange: e.target.checked ? range : ""
                        }));
                      }}
                    />
                    <span className="ml-2 text-sm">{range}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Access Duration Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-2">Access Duration</h4>
              <div className="space-y-2">
                {["1 Month", "3 Months", "6 Months", "Lifetime"].map(duration => (
                  <label key={duration} className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      onChange={(e) => {
                        setSelectedFilters(prev => ({
                          ...prev,
                          duration: e.target.checked ? duration : ""
                        }));
                      }}
                    />
                    <span className="ml-2 text-sm">{duration}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resources Grid/List */}
        <div className="flex-1">
          {/* Updated Sort and View Options */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <select className="text-sm border rounded-md px-2 py-1">
                <option>Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Highest Rated</option>
              </select>
            </div>
            <div className="flex gap-2">
              <Button 
                variant={viewMode === 'grid' ? "default" : "outline"} 
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4 mr-2" />
                Grid
              </Button>
              <Button 
                variant={viewMode === 'list' ? "default" : "outline"} 
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4 mr-2" />
                List
              </Button>
            </div>
          </div>

          {/* Dynamic Resources Layout */}
          <div className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          }>
            {nursingResources.map((resource) => (
              <div 
                key={resource.id} 
                className={`border rounded-lg overflow-hidden hover:shadow-lg transition-shadow ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                <div className={`relative ${
                  viewMode === 'list' 
                    ? 'w-48 flex-shrink-0' 
                    : 'aspect-video'
                }`}>
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="object-cover w-full h-full"
                  />
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className={`p-4 ${
                  viewMode === 'list' 
                    ? 'flex-1 flex flex-col justify-between' 
                    : ''
                }`}>
                  <div>
                    <h3 className="font-semibold mb-2">{resource.title}</h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm">{resource.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        ({resource.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{resource.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{resource.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className={`flex items-end ${
                    viewMode === 'list' 
                      ? 'justify-end gap-4' 
                      : 'justify-between'
                  }`}>
                    <div>
                      <div className="text-xl font-bold">${resource.price}</div>
                      <div className="text-sm text-muted-foreground">
                        or ${resource.monthlyPrice}/mo
                      </div>
                    </div>
                    <Button>View Details</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Updated Pagination */}
          <div className="mt-8 flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              Showing 1-15 of {nursingResources.length} resources
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm" className="bg-primary text-white">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 