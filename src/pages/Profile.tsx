import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Camera, Save, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useUserData } from "@/hooks/useUserData";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { user } = useAuth();
  const { profile, loading } = useUserData();
  const { toast } = useToast();
  
  const [displayName, setDisplayName] = useState(profile?.display_name || '');
  const [avatarUrl, setAvatarUrl] = useState(profile?.avatar_url || '');
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!user) return;
    
    setSaving(true);
    try {
      const response = await fetch('https://vcxmkydhpmijzeghmvvi.supabase.co/functions/v1/update-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`
        },
        body: JSON.stringify({
          display_name: displayName,
          avatar_url: avatarUrl
        })
      });

      const result = await response.json();

      if (!response.ok) {
        toast({
          title: "Error",
          description: result.error || "Failed to update profile",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Success",
          description: "Profile updated successfully"
        });
        // Trigger a refresh of user data
        window.location.reload();
      }
    } catch (error) {
      console.error('Profile update error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive"
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-eco-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-eco-primary/20 px-6 py-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className='bg-green-300'>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-eco-primary flex items-center gap-2">
                <User className="h-6 w-6" />
                Profile Settings
              </h1>
              <p className="text-muted-foreground">Manage your account information</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container bg-green-100 mx-auto px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="border-eco-primary/20">
            <CardHeader>
              <CardTitle className="text-eco-primary">Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Section */}
              <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={avatarUrl} alt="Profile picture" />
                  <AvatarFallback className="bg-eco-primary/10 text-eco-primary text-xl">
                    {displayName ? displayName.charAt(0).toUpperCase() : user?.email?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Label htmlFor="avatar-url">Profile Picture URL</Label>
                  <div className="flex gap-2">
                    <Input
                      id="avatar-url"
                      value={avatarUrl}
                      onChange={(e) => setAvatarUrl(e.target.value)}
                      placeholder="Enter image URL"
                      className="border-eco-primary/20"
                    />
                    <Button variant="outline" size="icon">
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="display-name">Display Name</Label>
                  <Input
                    id="display-name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Enter your display name"
                    className="border-eco-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={user?.email || ''}
                    disabled
                    className="border-eco-primary/20 bg-muted"
                  />
                  <p className="text-sm text-muted-foreground">Email cannot be changed</p>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end">
                <Button 
                  onClick={handleSave}
                  disabled={saving}
                  className="bg-eco-primary hover:bg-eco-primary-dark"
                >
                  <Save className="h-4 w-4 mr-2" />
                  {saving ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;