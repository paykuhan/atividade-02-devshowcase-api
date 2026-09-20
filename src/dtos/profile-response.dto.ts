export type ProfileResponseDTO = {
  id: number;
  name: string;
  bio: string | null;
  githubUrl: string;
  createdAt: Date;
};