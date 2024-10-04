import React from "react";
import { formatDate } from "./utils/dateFormatter";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Event } from "@/utils/prompts";

export const Timeline = ({ response, formatDate, onContinue }) => {
  return (
    <div className="timeline">
      {response.map((event: Event, index) => (
        <div className="timeline-item" key={index}>
          <Card className="w-[680px]">
            <CardHeader className="text-2xl">
              <CardTitle>{event.emj}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl">{event.evt}</p>
            </CardContent>
            <CardFooter>
              <p>{formatDate(event.dt)}</p>
            </CardFooter>
          </Card>
        </div>
      ))}
      <button onClick={onContinue}>Continue</button>
    </div>
  );
};
