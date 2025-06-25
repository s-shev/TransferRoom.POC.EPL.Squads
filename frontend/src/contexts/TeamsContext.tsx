import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { getTeams, type Team } from "../api/teams";
import { Spinner } from "../components/Spinner";
import { ErrorBox } from "../components/Error";

type TeamsContextType = {
  teams: Team[];
};

const TeamsContext = createContext<TeamsContextType | undefined>(undefined);

export const TeamsProvider = ({ children }: { children: ReactNode }) => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    let isMounted = true;

    const fetchTeams = async () => {
      try {
        const data = await getTeams();
        if (isMounted) {
          setTeams(data);
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to load teams");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchTeams();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorBox error={error} />;
  }

  return (
    <TeamsContext.Provider value={{ teams }}>{children}</TeamsContext.Provider>
  );
};

export const useTeams = () => {
  const context = useContext(TeamsContext);
  if (!context) {
    throw new Error("useTeams must be used within a TeamsProvider");
  }
  return context;
};
