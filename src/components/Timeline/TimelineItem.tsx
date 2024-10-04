import { Event } from "@/utils/prompts";

interface TimelineItemProps {
  event: Event;
  formatDate: (date: string) => string;
}

export function TimelineItem({ event, formatDate }: TimelineItemProps) {
  return (
    <div className="timeline-item">
      <div className="timeline-event">
        <span style={{ fontSize: "24px" }}>{event.emj}</span>
        <span>{event.evt}</span>
      </div>
      <span className="timeline-year">{formatDate(event.dt)}</span>
    </div>
  );
}
