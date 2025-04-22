export interface MessageProps {
    id: number;
    name: 'User' | 'Bot' | (string & {});
    message: string;
}