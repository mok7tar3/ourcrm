import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'jsr:@supabase/supabase-js@2';

const app = new Hono();

// Middleware
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));
app.use('*', logger(console.log));

// Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

// Initialize database tables and storage bucket
app.get('/make-server-4ca007e5/init', async (c) => {
  try {
    // Create storage bucket for images if not exists
    const bucketName = 'make-4ca007e5-images';
    const { data: buckets } = await supabase.storage.listBuckets();
    const bucketExists = buckets?.some(bucket => bucket.name === bucketName);
    
    if (!bucketExists) {
      const { error: bucketError } = await supabase.storage.createBucket(bucketName, {
        public: false,
        fileSizeLimit: 5242880, // 5MB
      });
      if (bucketError) throw bucketError;
    }

    return c.json({ success: true, message: 'Database initialized successfully' });
  } catch (error) {
    console.log('Initialization error:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// ==================== CONTENT MANAGEMENT ====================

// Get all content (for frontend)
app.get('/make-server-4ca007e5/content', async (c) => {
  try {
    const { data, error } = await supabase
      .from('kv_store_4ca007e5')
      .select('*')
      .like('key', 'content:%');

    if (error) throw error;

    // Convert array to object
    const content: Record<string, any> = {};
    data?.forEach(item => {
      const key = item.key.replace('content:', '');
      content[key] = item.value;
    });

    return c.json({ success: true, data: content });
  } catch (error) {
    console.log('Error fetching content:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Update content (for admin panel)
app.post('/make-server-4ca007e5/content', async (c) => {
  try {
    const body = await c.req.json();
    const { section, data } = body;

    if (!section || !data) {
      return c.json({ success: false, error: 'Missing section or data' }, 400);
    }

    const key = `content:${section}`;
    
    const { error } = await supabase
      .from('kv_store_4ca007e5')
      .upsert({ key, value: data });

    if (error) throw error;

    return c.json({ success: true, message: 'Content updated successfully' });
  } catch (error) {
    console.log('Error updating content:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// ==================== IMAGE MANAGEMENT ====================

// Upload image
app.post('/make-server-4ca007e5/upload', async (c) => {
  try {
    const body = await c.req.formData();
    const file = body.get('file') as File;
    const section = body.get('section') as string;

    if (!file || !section) {
      return c.json({ success: false, error: 'Missing file or section' }, 400);
    }

    const bucketName = 'make-4ca007e5-images';
    const fileName = `${section}-${Date.now()}.${file.name.split('.').pop()}`;
    const arrayBuffer = await file.arrayBuffer();

    const { error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(fileName, arrayBuffer, {
        contentType: file.type,
        upsert: true,
      });

    if (uploadError) throw uploadError;

    // Get signed URL
    const { data: urlData } = await supabase.storage
      .from(bucketName)
      .createSignedUrl(fileName, 60 * 60 * 24 * 365); // 1 year

    // Save image URL to database
    const key = `image:${section}`;
    await supabase
      .from('kv_store_4ca007e5')
      .upsert({ 
        key, 
        value: { 
          url: urlData?.signedUrl,
          fileName,
          uploadedAt: new Date().toISOString()
        } 
      });

    return c.json({ 
      success: true, 
      url: urlData?.signedUrl,
      message: 'Image uploaded successfully' 
    });
  } catch (error) {
    console.log('Error uploading image:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Get image URL
app.get('/make-server-4ca007e5/image/:section', async (c) => {
  try {
    const section = c.req.param('section');
    const key = `image:${section}`;

    const { data, error } = await supabase
      .from('kv_store_4ca007e5')
      .select('value')
      .eq('key', key)
      .single();

    if (error) throw error;

    // Refresh signed URL if exists
    if (data?.value?.fileName) {
      const bucketName = 'make-4ca007e5-images';
      const { data: urlData } = await supabase.storage
        .from(bucketName)
        .createSignedUrl(data.value.fileName, 60 * 60 * 24 * 365);

      return c.json({ 
        success: true, 
        url: urlData?.signedUrl 
      });
    }

    return c.json({ success: true, url: null });
  } catch (error) {
    console.log('Error fetching image:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// ==================== AUTH ====================

// Admin login
app.post('/make-server-4ca007e5/auth/login', async (c) => {
  try {
    const body = await c.req.json();
    const { email, password } = body;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return c.json({ 
      success: true, 
      accessToken: data.session?.access_token,
      user: data.user 
    });
  } catch (error) {
    console.log('Login error:', error);
    return c.json({ success: false, error: String(error) }, 401);
  }
});

// Create admin user (one-time setup)
app.post('/make-server-4ca007e5/auth/setup', async (c) => {
  try {
    const body = await c.req.json();
    const { email, password } = body;

    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-confirm since email server not configured
      user_metadata: { role: 'admin' }
    });

    if (error) throw error;

    return c.json({ 
      success: true, 
      message: 'Admin user created successfully',
      user: data.user 
    });
  } catch (error) {
    console.log('Setup error:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Verify token
app.get('/make-server-4ca007e5/auth/verify', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ success: false, error: 'No token provided' }, 401);
    }

    const { data: { user }, error } = await supabase.auth.getUser(accessToken);

    if (error || !user) {
      return c.json({ success: false, error: 'Invalid token' }, 401);
    }

    return c.json({ success: true, user });
  } catch (error) {
    console.log('Verify error:', error);
    return c.json({ success: false, error: String(error) }, 401);
  }
});

// Health check
app.get('/make-server-4ca007e5/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

Deno.serve(app.fetch);
