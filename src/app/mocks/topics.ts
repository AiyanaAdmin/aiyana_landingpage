import { Topic } from '../models/topic';

let mockDescription:String = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";
export const TOPICS: Topic[] = [
  { id: "C01", color: "#5e35b1",title:"Humanity",content:mockDescription,link:""},
  { id: "C02", color: "#039be5",title:"Education",content:mockDescription,link:""},
  { id: "C03", color: "#43a047",title:"Sustainability",content:mockDescription,link:""},
  { id: "C04", color: "#fdd835",title:"Energy",content:mockDescription,link:""},
  { id: "C05", color: "#f4511e",title:"Economy",content:mockDescription,link:""},
  { id: "C06", color: "#546e7a",title:"Production",content:mockDescription,link:"" },
];

