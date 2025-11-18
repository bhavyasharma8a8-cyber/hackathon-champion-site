import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import FilterSection from "@/components/FilterSection";
import EventGrid from "@/components/EventGrid";
import { Event } from "@/components/EventCard";

// Sample event data
const sampleEvents: Event[] = [
  {
    id: "1",
    title: "Tech Innovation Hackathon 2024",
    description: "48-hour coding marathon to build innovative solutions for real-world problems. Win prizes worth $10,000!",
    date: "March 15-17, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Computer Science Building, Hall A",
    category: "Competitions",
    attendees: 250,
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
    organizer: "Tech Club",
    tags: ["Coding", "Innovation", "Prizes"]
  },
  {
    id: "2",
    title: "AI & Machine Learning Workshop",
    description: "Learn the fundamentals of AI and build your first machine learning model with industry experts.",
    date: "March 20, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Innovation Lab, Room 301",
    category: "Workshops",
    attendees: 120,
    imageUrl: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop",
    organizer: "AI Society",
    tags: ["AI", "ML", "Hands-on"]
  },
  {
    id: "3",
    title: "Spring Fest 2024",
    description: "The biggest cultural festival of the year featuring music, dance, drama, and celebrity performances!",
    date: "April 5-7, 2024",
    time: "All Day",
    location: "Main Campus Grounds",
    category: "Fests",
    attendees: 5000,
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop",
    organizer: "Cultural Committee",
    tags: ["Music", "Dance", "Entertainment"]
  },
  {
    id: "4",
    title: "Startup Pitch Competition",
    description: "Present your startup idea to top VCs and angel investors. Get funding and mentorship opportunities.",
    date: "March 25, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Auditorium",
    category: "Competitions",
    attendees: 80,
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop",
    organizer: "Entrepreneurship Cell",
    tags: ["Startup", "Funding", "Business"]
  },
  {
    id: "5",
    title: "Photography Walk & Workshop",
    description: "Join us for a guided photography walk around campus and learn professional photography techniques.",
    date: "March 18, 2024",
    time: "6:00 AM - 9:00 AM",
    location: "Meet at Main Gate",
    category: "Club Activities",
    attendees: 45,
    imageUrl: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&auto=format&fit=crop",
    organizer: "Photography Club",
    tags: ["Photography", "Art", "Outdoor"]
  },
  {
    id: "6",
    title: "Career Fair 2024",
    description: "Meet recruiters from 100+ top companies. Resume reviews, mock interviews, and on-spot hiring!",
    date: "April 1-2, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Sports Complex",
    category: "Career",
    attendees: 2000,
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop",
    organizer: "Placement Cell",
    tags: ["Jobs", "Internships", "Networking"]
  },
  {
    id: "7",
    title: "Debate Championship",
    description: "Inter-college debate competition on contemporary issues. Cash prizes for winners!",
    date: "March 22, 2024",
    time: "3:00 PM - 7:00 PM",
    location: "Seminar Hall",
    category: "Competitions",
    attendees: 100,
    imageUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&auto=format&fit=crop",
    organizer: "Debate Society",
    tags: ["Debate", "Public Speaking", "Competition"]
  },
  {
    id: "8",
    title: "Web Development Bootcamp",
    description: "Intensive 3-day bootcamp covering HTML, CSS, JavaScript, React, and deployment. Build real projects!",
    date: "March 28-30, 2024",
    time: "10:00 AM - 6:00 PM",
    location: "Computer Lab 2",
    category: "Workshops",
    attendees: 60,
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
    organizer: "Web Dev Club",
    tags: ["Web Dev", "Coding", "React"]
  },
  {
    id: "9",
    title: "Yoga & Wellness Session",
    description: "Weekly yoga and meditation session to help you de-stress and stay healthy. All levels welcome!",
    date: "Every Saturday",
    time: "7:00 AM - 8:30 AM",
    location: "Yoga Hall",
    category: "Club Activities",
    attendees: 35,
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop",
    organizer: "Wellness Club",
    tags: ["Yoga", "Meditation", "Health"]
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter events based on search and category
  const filteredEvents = useMemo(() => {
    return sampleEvents.filter((event) => {
      const matchesSearch = 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = 
        activeCategory === "all" || 
        event.category.toLowerCase() === activeCategory.toLowerCase();
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navbar />
      <Hero />
      
      {/* Events Section */}
      <section id="events" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Discover <span className="text-primary">Amazing Events</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse through hundreds of events, workshops, and activities happening on campus
            </p>
          </div>
          
          <div className="mb-8">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          
          <div id="categories" className="mb-12">
            <FilterSection 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
          </div>
          
          <EventGrid events={filteredEvents} />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-secondary/50 py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Campus Event Compass</h3>
            <p className="text-muted-foreground">Never miss another campus event</p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>&copy; 2024 Campus Event Compass. Built for students, by students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
