import { Event } from "@/utils/prompts";
import {
  Card,
  CardHeader,
  CardEmoji,
  CardTitle,
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
    <div className="flex-col sm:gap-1.5 gap-0.5 flex ">
      {response.map((event, index) => (
        <div className="timeline-item" key={index}>
          <Card>
            <CardHeader className="sm:text-xl text-m">
              <CardEmoji>{event.emj}</CardEmoji>
              <CardTitle>{event.dtl ? event.evt : ""}</CardTitle>
              <CardFooter>
                <p>{formatDate(event.dt)}</p>
              </CardFooter>
              <CardFooter>
                {event.pop && <p>Human population: ~{event.pop}</p>}
              </CardFooter>
            </CardHeader>
            <CardContent>
              <p className="sm:text-xl text-m">
                {event.dtl ? event.dtl : event.evt}
              </p>
            </CardContent>
          </Card>
        </div>
      ))}
      <Button
        onClick={onContinue}
        className="sm:w-[200px] self-center my-2 rounded-xl"
      >
        Continue the story...
      </Button>
    </div>
  );
};
