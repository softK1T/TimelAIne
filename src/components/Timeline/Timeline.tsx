import { Event } from "@/utils/prompts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../myCard";
import { Button } from "../ui/button";

type TimelineProps = {
  response: Event[];
  formatDate: (dateString: string) => string;
  onContinue: () => void;
};

export const Timeline = ({
  response,
  formatDate,
  onContinue,
}: TimelineProps) => {
  return (
    <div>
      {response.map((event, index) => (
        <div className="timeline-item" key={index}>
          <Card>
            <CardHeader className="text-2xl">
              <CardTitle>{event.emj}</CardTitle>
              <CardDescription>{event.dtl ? event.evt : ""}</CardDescription>
              <CardFooter>
                <p>{formatDate(event.dt)}</p>
              </CardFooter>
              <CardFooter>
                {event.pop && <p>Human population: ~{event.pop}</p>}
              </CardFooter>
            </CardHeader>
            <CardContent>
              <p className="text-xl">{event.dtl ? event.dtl : event.evt}</p>
            </CardContent>
          </Card>
        </div>
      ))}
      <Button
        onClick={onContinue}
        className="w-max-200 self-center my-2 rounded-xl"
      >
        Continue the story...
      </Button>
    </div>
  );
};
