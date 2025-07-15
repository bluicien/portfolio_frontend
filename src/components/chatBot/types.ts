//  | (string & {});
export interface MessageProps {
    role: "user" | "model";
    content: string;
}