export type ProjectResponseDTO = {
  id: number;
  title: string;
  description: string;
  repositoryUrl: string;
  demoUrl: string | null;
  createdAt: Date;
  profileId: number;
};