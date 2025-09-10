import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';

interface UserProfile {
  id: string;
  user_id: string;
  display_name: string | null;
  email: string | null;
  avatar_url: string | null;
}

interface UserIoTData {
  id: string;
  user_id: string;
  active_units: number;
  energy_production: number;
  co2_saved: number;
  connected_msmes: number;
}

export const useUserData = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [iotData, setIotData] = useState<UserIoTData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setProfile(null);
      setIotData(null);
      setLoading(false);
      return;
    }

    const fetchUserData = async () => {
      try {
        // Fetch profile
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (profileError) {
          console.error('Error fetching profile:', profileError);
        } else {
          setProfile(profileData);
        }

        // Fetch IoT data
        const { data: iotData, error: iotError } = await supabase
          .from('user_iot_data')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (iotError) {
          console.error('Error fetching IoT data:', iotError);
        } else {
          setIotData(iotData);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  return { profile, iotData, loading };
};