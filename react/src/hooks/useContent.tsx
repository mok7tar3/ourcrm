import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export interface ContentData {
  [key: string]: any;
}

export function useContent() {
  const [content, setContent] = useState<ContentData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const serverUrl = `https://${projectId}.supabase.co/functions/v1/make-server-4ca007e5`;

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${serverUrl}/content`, {
          headers: { 'Authorization': `Bearer ${publicAnonKey}` }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.success) {
          setContent(result.data || {});
        } else {
          throw new Error(result.error || 'Failed to load content');
        }
      } catch (err) {
        console.error('Error loading content from CMS:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        // Don't throw - let components use fallback content
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  return { content, loading, error };
}

// Helper function to get a specific content value with fallback
export function useContentValue(section: string, field: string, fallback: string = ''): string {
  const { content } = useContent();
  return content[section]?.[field] || fallback;
}

export function useImage(section: string) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  
  const serverUrl = `https://${projectId}.supabase.co/functions/v1/make-server-4ca007e5`;

  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch(`${serverUrl}/image/${section}`, {
          headers: { 'Authorization': `Bearer ${publicAnonKey}` }
        });
        
        const result = await response.json();
        
        if (result.success && result.url) {
          setImageUrl(result.url);
        }
      } catch (error) {
        console.error(`Error loading image for ${section}:`, error);
      } finally {
        setLoading(false);
      }
    };

    loadImage();
  }, [section]);

  return { imageUrl, loading };
}
