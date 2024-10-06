import { Event } from "@/utils/prompts";
import {
  Card,
  CardHeader,
  CardEmoji,
  CardTitle,
  CardContent,
  CardDate,
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
    <div className="flex-col w-full sm:w-auto sm:gap-1.5 gap-0.5 flex ">
      {response.map((event, index) => (
        <div className="timeline-item" key={index}>
          <Card>
            <CardHeader className="sm:text-xl text-m">
              <CardEmoji>{event.emj}</CardEmoji>
              <CardTitle>{event.evt}</CardTitle>
              <CardDate>
                <p>{formatDate(event.dt)}</p>
              </CardDate>
              <CardDate>
                {event.pop && <p>Human population: ~{event.pop}</p>}
              </CardDate>
            </CardHeader>

            {event.dtl && (
              <CardContent>
                <p className="sm:text-xl text-m">{event.dtl}</p>
              </CardContent>
            )}
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
