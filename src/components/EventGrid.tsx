import EventCard, { Event } from "./EventCard";

interface EventGridProps {
  events: Event[];
}

const EventGrid = ({ events }: EventGridProps) => {
  if (events.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-muted-foreground">No events found. Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventGrid;
