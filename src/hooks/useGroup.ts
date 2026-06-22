import { useState, useEffect } from "react";
import { GroupDetail } from "@/types/group";
import { GROUPS_DATA } from "@/lib/groupsData";

export function useGroup(slug: string) {
  const [group, setGroup] = useState<GroupDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    const found = GROUPS_DATA.find((g) => g.slug === slug);

    // Simula una breve latencia para emular una consulta a base de datos
    const timer = setTimeout(() => {
      if (found) {
        setGroup(found);
        setError(null);
      } else {
        setGroup(null);
        setError("Grupo no encontrado");
      }
      setLoading(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [slug]);

  return { group, loading, error };
}
