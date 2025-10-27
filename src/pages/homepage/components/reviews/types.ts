export interface ReviewItemProps {
    id: string;
    username: string;
    company?: string;
    role?: string;
    rating: number;
    ipAddress?: string;
    message: string;
}