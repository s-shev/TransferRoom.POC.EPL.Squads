import { isAxiosError } from "axios";
import apiClient from "./client";

export type Team = {
  id: number;
  name: string;
  logoUrl: string;
  nicknames: string[];
};

export type Player = {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string | null;
  position: string;
  nationalTeam: string;
  photoUrl: string;
  shirtNumber: number | null;
};

export async function getTeams(search?: string) {
  const response = await apiClient.get<Team[]>("/teams", {
    params: search ? { search } : undefined,
  });
  return response.data;
}

export async function getTeam(teamId: number): Promise<Team | null> {
  try {
    const response = await apiClient.get<Team>(`/teams/${teamId}`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 404) {
        return null;
      }
    }

    throw error;
  }
}

export async function getSquad(teamId: number): Promise<Player[] | null> {
  try {
    const response = await apiClient.get<Player[]>(`/teams/${teamId}/squad`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 404) {
        return null;
      }
    }

    throw error;
  }
}
