import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase/client';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { Lock, LogOut, Save, Upload, Eye, Database } from 'lucide-react';

interface ContentData {
  [key: string]: any;
}

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');
  const [contentData, setContentData] = useState<ContentData>({});
  const [saveStatus, setSaveStatus] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const serverUrl = `https://${projectId}.supabase.co/functions/v1/make-server-4ca007e5`;

  // Check if already logged in
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.access_token) {
        setAccessToken(session.access_token);
        setIsAuthenticated(true);
        loadContent();
      }
    };
    checkAuth();
  }, []);

  // Load content from database
  const loadContent = async () => {
    try {
      const response = await fetch(`${serverUrl}/content`, {
        headers: { 'Authorization': `Bearer ${publicAnonKey}` }
      });
      const result = await response.json();
      
      if (result.success) {
        setContentData(result.data || {});
      }
    } catch (error) {
      console.error('Error loading content:', error);
    }
  };

  // Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${serverUrl}/auth/login`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();

      if (result.success) {
        setAccessToken(result.accessToken);
        setIsAuthenticated(true);
        await loadContent();
      } else {
        alert('خطأ في تسجيل الدخول: ' + result.error);
      }
    } catch (error) {
      alert('خطأ في الاتصال: ' + error);
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    setAccessToken('');
    setEmail('');
    setPassword('');
  };

  // Save content
  const handleSave = async (section: string) => {
    setSaveStatus('جاري الحفظ...');
    
    try {
      const response = await fetch(`${serverUrl}/content`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          section,
          data: contentData[section] || {}
        })
      });

      const result = await response.json();

      if (result.success) {
        setSaveStatus('✅ تم الحفظ بنجاح');
        setTimeout(() => setSaveStatus(''), 3000);
      } else {
        setSaveStatus('❌ فشل الحفظ');
      }
    } catch (error) {
      setSaveStatus('❌ خطأ في الحفظ');
      console.error('Save error:', error);
    }
  };

  // Upload image
  const handleImageUpload = async (section: string, file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('section', section);

      const response = await fetch(`${serverUrl}/upload`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${publicAnonKey}` },
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        alert('✅ تم رفع الصورة بنجاح!');
        // Update content data with new image URL
        setContentData(prev => ({
          ...prev,
          [section]: {
            ...prev[section],
            imageUrl: result.url
          }
        }));
      } else {
        alert('❌ فشل رفع الصورة');
      }
    } catch (error) {
      alert('❌ خطأ في رفع الصورة');
      console.error('Upload error:', error);
    }
  };

  // Update field
  const updateField = (section: string, field: string, value: any) => {
    setContentData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  // Initialize database
  const handleInitDB = async () => {
    try {
      const response = await fetch(`${serverUrl}/init`, {
        headers: { 'Authorization': `Bearer ${publicAnonKey}` }
      });
      const result = await response.json();
      
      if (result.success) {
        alert('✅ تم تهيئة قاعدة البيانات بنجاح');
      }
    } catch (error) {
      alert('❌ خطأ في التهيئة');
    }
  };

  // Login Form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-500 p-4 rounded-full">
              <Lock className="size-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-center mb-2">لوحة التحكم</h1>
          <p className="text-center text-gray-600 mb-6">نظام إدارة المحتوى - KSU Ticketing</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm mb-2">البريد الإلكتروني</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="admin@ksu.edu.sa"
                required
                dir="ltr"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">كلمة المرور</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                required
                dir="ltr"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
            >
              {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center mb-3">
              أول مرة تستخدم النظام؟
            </p>
            <button
              onClick={handleInitDB}
              className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm"
            >
              <Database className="size-4" />
              تهيئة قاعدة البيانات
            </button>
          </div>

          <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-gray-700">
            <p className="mb-2">📌 <strong>للمرة الأولى:</strong></p>
            <ol className="list-decimal list-inside space-y-1 text-xs">
              <li>اضغط "تهيئة قاعدة البيانات"</li>
              <li>انتقل إلى Supabase Dashboard</li>
              <li>أنشئ مستخدم من Authentication</li>
              <li>سجل دخول باستخدام البيانات</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  // Admin Panel
  const tabs = [
    { id: 'hero', label: 'القسم الرئيسي', icon: '🏠' },
    { id: 'about', label: 'عن الجامعة', icon: 'ℹ️' },
    { id: 'howitworks', label: 'كيف يعمل', icon: '⚙️' },
    { id: 'statistics', label: 'الإحصائيات', icon: '📊' },
    { id: 'faq', label: 'الأسئلة الشائعة (الصفحة الرئيسية)', icon: '❓' },
    { id: 'faq_page', label: 'صفحة FAQ', icon: '📋' },
    { id: 'search_page', label: 'صفحة البحث', icon: '🔍' },
    { id: 'about_page', label: 'صفحة من نحن', icon: '👥' },
    { id: 'about_purpose', label: 'قسم هدفنا', icon: '🎯' },
    { id: 'about_mission', label: 'قسم مهمتنا', icon: '🚀' },
    { id: 'about_vision', label: 'قسم رؤيتنا', icon: '🔭' },
    { id: 'about_cta', label: 'قسم الدعوة للعمل (CTA)', icon: '🎬' },
    { id: 'knowledge_page', label: 'صفحة المعرفة', icon: '📚' },
    { id: 'images', label: 'الصور', icon: '🖼️' },
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl">لوحة التحكم</h1>
            <p className="text-sm text-gray-600">إدارة محتوى الموقع</p>
          </div>
          
          <div className="flex items-center gap-4">
            {saveStatus && (
              <span className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full">
                {saveStatus}
              </span>
            )}
            
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <LogOut className="size-4" />
              تسجيل الخروج
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        {activeTab === 'hero' && (
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg">القسم الرئيسي (Hero Section)</h2>
              <button
                onClick={() => handleSave('hero')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                <Save className="size-4" />
                حفظ التغييرات
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">العنوان - الجزء الأول (عربي)</label>
                <input
                  type="text"
                  value={contentData.hero?.titlePart1Ar || ''}
                  onChange={(e) => updateField('hero', 'titlePart1Ar', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="مرحباً بك في "
                />
              </div>

              <div>
                <label className="block text-sm mb-2">العنوان - الجزء الأول (English)</label>
                <input
                  type="text"
                  value={contentData.hero?.titlePart1En || ''}
                  onChange={(e) => updateField('hero', 'titlePart1En', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Welcome to "
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">العنوان - الجزء الثاني (ملون) (عربي)</label>
                <input
                  type="text"
                  value={contentData.hero?.titlePart2Ar || ''}
                  onChange={(e) => updateField('hero', 'titlePart2Ar', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="نظام التذاكر"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">العنوان - الجزء الثاني (ملون) (English)</label>
                <input
                  type="text"
                  value={contentData.hero?.titlePart2En || ''}
                  onChange={(e) => updateField('hero', 'titlePart2En', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="KSU Ticketing"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">الوصف (عربي)</label>
                <textarea
                  value={contentData.hero?.descriptionAr || ''}
                  onChange={(e) => updateField('hero', 'descriptionAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={3}
                  placeholder="نظام متكامل لإدارة التذاكر..."
                />
              </div>

              <div>
                <label className="block text-sm mb-2">الوصف (English)</label>
                <textarea
                  value={contentData.hero?.descriptionEn || ''}
                  onChange={(e) => updateField('hero', 'descriptionEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={3}
                  placeholder="Complete system for ticket management..."
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">نص الزر الأول (عربي)</label>
                <input
                  type="text"
                  value={contentData.hero?.button1TextAr || ''}
                  onChange={(e) => updateField('hero', 'button1TextAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="إنشاء تذكرة جديدة"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">نص الزر الأول (English)</label>
                <input
                  type="text"
                  value={contentData.hero?.button1TextEn || ''}
                  onChange={(e) => updateField('hero', 'button1TextEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Create New Ticket"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">نص الزر الثاني (عربي)</label>
                <input
                  type="text"
                  value={contentData.hero?.button2TextAr || ''}
                  onChange={(e) => updateField('hero', 'button2TextAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="البحث عن تذكرة قديمة"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">نص الزر الثاني (English)</label>
                <input
                  type="text"
                  value={contentData.hero?.button2TextEn || ''}
                  onChange={(e) => updateField('hero', 'button2TextEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Search Old Ticket"
                  dir="ltr"
                />
              </div>
            </div>

            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm">
              <p className="text-yellow-800">
                💡 <strong>ملاحظة:</strong> الجزء الثاني من العنوان سيظهر بلون أزرق مميز في الموقع
              </p>
            </div>
          </div>
        )}

        {/* Statistics Section */}
        {activeTab === 'statistics' && (
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg">قسم الإحصائيات</h2>
              <button
                onClick={() => handleSave('statistics')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                <Save className="size-4" />
                حفظ التغييرات
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <label className="block text-sm mb-2">عدد التذاكر المحلولة</label>
                <input
                  type="number"
                  value={contentData.statistics?.resolvedTickets || 0}
                  onChange={(e) => updateField('statistics', 'resolvedTickets', parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <label className="block text-sm mb-2">عدد المستخدمين النشطين</label>
                <input
                  type="number"
                  value={contentData.statistics?.activeUsers || 0}
                  onChange={(e) => updateField('statistics', 'activeUsers', parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <label className="block text-sm mb-2">متوسط وقت الاستجابة (دقيقة)</label>
                <input
                  type="number"
                  value={contentData.statistics?.avgResponseTime || 0}
                  onChange={(e) => updateField('statistics', 'avgResponseTime', parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        {activeTab === 'about' && (
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg">قسم عن الجامعة (About Section)</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setContentData({
                      ...contentData,
                      about: {
                        titlePart1Ar: 'عن ',
                        titlePart1En: 'About ',
                        titlePart2Ar: 'جامعة الملك سعود',
                        titlePart2En: 'OUR KSU',
                        point1Ar: 'خدمة دعم المستفيدين هي القناة الرسمية للتواصل مع إدارة تقنية المعلومات بجامعة الملك سعود',
                        point1En: 'The Beneficiary Support Service is the official channel for communication with the Information Technology Department at King Saud University',
                        point2Ar: 'توفر طريقة موحدة وموثوقة لتقديم الطلبات والاستفسارات والمشكلات التقنية',
                        point2En: 'It provides a unified and reliable way to submit requests, inquiries and technical issues',
                        point3Ar: 'هدفنا هو تعزيز التواصل الفعال وتقديم الدعم الفني بأعلى مستويات الجودة',
                        point3En: 'Our goal is to enhance effective communication and provide technical support at the highest levels of quality',
                        buttonTextAr: 'اعرف المزيد..',
                        buttonTextEn: 'Learn more..'
                      }
                    });
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  <Database className="size-4" />
                  تحميل القيم الافتراضية
                </button>
                <button
                  onClick={() => handleSave('about')}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  <Save className="size-4" />
                  حفظ التغييرات
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">العنوان - الجزء الأول (عربي)</label>
                <input
                  type="text"
                  value={contentData.about?.titlePart1Ar || ''}
                  onChange={(e) => updateField('about', 'titlePart1Ar', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="عن "
                />
              </div>

              <div>
                <label className="block text-sm mb-2">العنوان - الجزء الأول (English)</label>
                <input
                  type="text"
                  value={contentData.about?.titlePart1En || ''}
                  onChange={(e) => updateField('about', 'titlePart1En', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="About "
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">العنوان - الجزء الثاني (ملون) (عربي)</label>
                <input
                  type="text"
                  value={contentData.about?.titlePart2Ar || ''}
                  onChange={(e) => updateField('about', 'titlePart2Ar', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="جامعة الملك سعود"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">العنوان - الجزء الثاني (ملون) (English)</label>
                <input
                  type="text"
                  value={contentData.about?.titlePart2En || ''}
                  onChange={(e) => updateField('about', 'titlePart2En', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="OUR KSU"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الأولى (عربي)</label>
                <textarea
                  value={contentData.about?.point1Ar || ''}
                  onChange={(e) => updateField('about', 'point1Ar', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="خدمة دعم المستفيدين هي القناة الرسمية..."
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الأولى (English)</label>
                <textarea
                  value={contentData.about?.point1En || ''}
                  onChange={(e) => updateField('about', 'point1En', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="The Beneficiary Support Service..."
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الثانية (عربي)</label>
                <textarea
                  value={contentData.about?.point2Ar || ''}
                  onChange={(e) => updateField('about', 'point2Ar', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="توفر طريقة موحدة وموثوقة..."
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الثانية (English)</label>
                <textarea
                  value={contentData.about?.point2En || ''}
                  onChange={(e) => updateField('about', 'point2En', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="It provides a unified way..."
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الثالثة (عربي)</label>
                <textarea
                  value={contentData.about?.point3Ar || ''}
                  onChange={(e) => updateField('about', 'point3Ar', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="هدفنا هو تعزيز التواصل..."
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الثالثة (English)</label>
                <textarea
                  value={contentData.about?.point3En || ''}
                  onChange={(e) => updateField('about', 'point3En', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="Our goal is to enhance..."
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">نص الزر (عربي)</label>
                <input
                  type="text"
                  value={contentData.about?.buttonTextAr || ''}
                  onChange={(e) => updateField('about', 'buttonTextAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="اعرف المزيد.."
                />
              </div>

              <div>
                <label className="block text-sm mb-2">نص الزر (English)</label>
                <input
                  type="text"
                  value={contentData.about?.buttonTextEn || ''}
                  onChange={(e) => updateField('about', 'buttonTextEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Learn more.."
                  dir="ltr"
                />
              </div>
            </div>
          </div>
        )}

        {/* How It Works Section */}
        {activeTab === 'howitworks' && (
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg">قسم كيف يعمل (How It Works)</h2>
              <button
                onClick={() => handleSave('howitworks')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                <Save className="size-4" />
                حفظ التغييرات
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">العنوان الرئيسي (عربي)</label>
                  <input
                    type="text"
                    value={contentData.howitworks?.titleAr || ''}
                    onChange={(e) => updateField('howitworks', 'titleAr', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="كيف يعمل؟"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">العنوان الرئيسي (English)</label>
                  <input
                    type="text"
                    value={contentData.howitworks?.titleEn || ''}
                    onChange={(e) => updateField('howitworks', 'titleEn', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="How It Works?"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">الوصف (عربي)</label>
                  <input
                    type="text"
                    value={contentData.howitworks?.subtitleAr || ''}
                    onChange={(e) => updateField('howitworks', 'subtitleAr', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="يمكنك بسهولة إنشاء وتتبع تذكرتك"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">الوصف (English)</label>
                  <input
                    type="text"
                    value={contentData.howitworks?.subtitleEn || ''}
                    onChange={(e) => updateField('howitworks', 'subtitleEn', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="You can easily create and track your ticket"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="mb-4">الخطوات الأربعة</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2">الخطوة 1 - العنوان (عربي)</label>
                    <input
                      type="text"
                      value={contentData.howitworks?.step1TitleAr || ''}
                      onChange={(e) => updateField('howitworks', 'step1TitleAr', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="تسجيل الدخول"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">الخطوة 1 - العنوان (English)</label>
                    <input
                      type="text"
                      value={contentData.howitworks?.step1TitleEn || ''}
                      onChange={(e) => updateField('howitworks', 'step1TitleEn', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="Login"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">الخطوة 1 - الوصف (عربي)</label>
                    <input
                      type="text"
                      value={contentData.howitworks?.step1DescAr || ''}
                      onChange={(e) => updateField('howitworks', 'step1DescAr', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="الدخول عبر حساب جامعة الملك سعود"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">الخطوة 1 - الوصف (English)</label>
                    <input
                      type="text"
                      value={contentData.howitworks?.step1DescEn || ''}
                      onChange={(e) => updateField('howitworks', 'step1DescEn', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="Access the system using your KSU account"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">الخطوة 2 - العنوان (عربي)</label>
                    <input
                      type="text"
                      value={contentData.howitworks?.step2TitleAr || ''}
                      onChange={(e) => updateField('howitworks', 'step2TitleAr', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="إنشاء تذكرة"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">الخطوة 2 - العنوان (English)</label>
                    <input
                      type="text"
                      value={contentData.howitworks?.step2TitleEn || ''}
                      onChange={(e) => updateField('howitworks', 'step2TitleEn', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="Create a Ticket"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">الخطوة 2 - الوصف (عربي)</label>
                    <input
                      type="text"
                      value={contentData.howitworks?.step2DescAr || ''}
                      onChange={(e) => updateField('howitworks', 'step2DescAr', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="قدم طلبك وأرفق الملفات إذا لزم الأمر"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">الخطوة 2 - الوصف (English)</label>
                    <input
                      type="text"
                      value={contentData.howitworks?.step2DescEn || ''}
                      onChange={(e) => updateField('howitworks', 'step2DescEn', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="Submit your request and attach files if needed"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">الخطوة 3 - العنوان (عربي)</label>
                    <input
                      type="text"
                      value={contentData.howitworks?.step3TitleAr || ''}
                      onChange={(e) => updateField('howitworks', 'step3TitleAr', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="تتبع التذاكر"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">الخطوة 3 - العنوان (English)</label>
                    <input
                      type="text"
                      value={contentData.howitworks?.step3TitleEn || ''}
                      onChange={(e) => updateField('howitworks', 'step3TitleEn', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="Track Your Tickets"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">الخطوة 3 - الوصف (عربي)</label>
                    <input
                      type="text"
                      value={contentData.howitworks?.step3DescAr || ''}
                      onChange={(e) => updateField('howitworks', 'step3DescAr', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="تابع التحديثات واستلم الردود فوراً"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">الخطوة 3 - الوصف (English)</label>
                    <input
                      type="text"
                      value={contentData.howitworks?.step3DescEn || ''}
                      onChange={(e) => updateField('howitworks', 'step3DescEn', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="Follow updates and receive responses instantly"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">الخطوة 4 - العنوان (عربي)</label>
                    <input
                      type="text"
                      value={contentData.howitworks?.step4TitleAr || ''}
                      onChange={(e) => updateField('howitworks', 'step4TitleAr', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="الحل"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">الخطوة 4 - العنوان (English)</label>
                    <input
                      type="text"
                      value={contentData.howitworks?.step4TitleEn || ''}
                      onChange={(e) => updateField('howitworks', 'step4TitleEn', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="Resolution"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">الخطوة 4 - الوصف (عربي)</label>
                    <input
                      type="text"
                      value={contentData.howitworks?.step4DescAr || ''}
                      onChange={(e) => updateField('howitworks', 'step4DescAr', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="احصل على حل مشكلتك بكفاءة"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">الخطوة 4 - الوصف (English)</label>
                    <input
                      type="text"
                      value={contentData.howitworks?.step4DescEn || ''}
                      onChange={(e) => updateField('howitworks', 'step4DescEn', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="Get your issue resolved efficiently"
                      dir="ltr"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {activeTab === 'faq' && (
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg">قسم الأسئلة الشائعة (FAQ)</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setContentData({
                      ...contentData,
                      faq: {
                        titleAr: 'الأسئلة الشائعة',
                        titleEn: 'FAQ',
                        subtitleAr: 'الأسئلة المتكررة',
                        subtitleEn: 'Frequently Asked Questions.',
                        q1Ar: 'كم من الوقت يستغرق معالجة التذكرة؟',
                        q1En: 'How long does it take to process a ticket?',
                        a1Ar: 'عادةً ما تتم معالجة التذاكر خلال 24-48 ساعة عمل. في حالة التذاكر العاجلة، يتم التعامل معها بشكل أسرع.',
                        a1En: 'Tickets are typically processed within 24-48 business hours. Urgent tickets are handled faster.',
                        q2Ar: 'هل يمكنني تعديل التذكرة بعد إرسالها؟',
                        q2En: 'Can I edit my ticket after submitting it?',
                        a2Ar: 'نعم، يمكنك تعديل التذكرة من خلال صفحة تتبع التذاكر قبل أن يبدأ فريق الدعم بالعمل عليها.',
                        a2En: 'Yes, you can edit your ticket through the ticket tracking page before the support team starts working on it.',
                        q3Ar: 'هل يمكنني تقديم التذاكر خارج أوقات العمل؟',
                        q3En: 'Can I submit tickets outside working hours?',
                        a3Ar: 'نعم، يمكنك تقديم التذاكر في أي وقت. سيتم معالجتها في أول يوم عمل قادم.',
                        a3En: 'Yes, you can submit tickets at any time. They will be processed on the next business day.',
                        q4Ar: 'كيف يمكنني تتبع تذكرتي القديمة؟',
                        q4En: 'How can I track my old ticket?',
                        a4Ar: 'استخدم رقم التذكرة أو بريدك الإلكتروني في صفحة "البحث عن تذكرة قديمة" لمتابعة حالة تذكرتك.',
                        a4En: 'Use your ticket number or email in the "Search Old Ticket" page to track your ticket status.',
                        q5Ar: 'هل بياناتي محفوظة بشكل آمن؟',
                        q5En: 'Are my details kept secure?',
                        a5Ar: 'نعم، جميع البيانات محمية بأعلى معايير الأمان ولا يتم مشاركتها مع أي جهة خارجية.',
                        a5En: 'Yes, all data is protected with the highest security standards and is not shared with any third parties.'
                      }
                    });
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  <Database className="size-4" />
                  تحميل القيم الافتراضية
                </button>
                <button
                  onClick={() => handleSave('faq')}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  <Save className="size-4" />
                  حفظ التغييرات
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">العنوان (عربي)</label>
                <input
                  type="text"
                  value={contentData.faq?.titleAr || ''}
                  onChange={(e) => updateField('faq', 'titleAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="الأسئلة الشائعة"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">العنوان (English)</label>
                <input
                  type="text"
                  value={contentData.faq?.titleEn || ''}
                  onChange={(e) => updateField('faq', 'titleEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="FAQ"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">الوصف (عربي)</label>
                <input
                  type="text"
                  value={contentData.faq?.subtitleAr || ''}
                  onChange={(e) => updateField('faq', 'subtitleAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="الأسئلة المتكررة"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">الوصف (English)</label>
                <input
                  type="text"
                  value={contentData.faq?.subtitleEn || ''}
                  onChange={(e) => updateField('faq', 'subtitleEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Frequently Asked Questions."
                  dir="ltr"
                />
              </div>
            </div>

            {/* FAQ Items */}
            <div className="border-t pt-6 space-y-6">
              <h3 className="text-md">الأسئلة والأجوبة (5 أسئلة)</h3>
              
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="p-4 bg-gray-50 rounded-lg space-y-4">
                  <h4 className="font-medium text-blue-600">السؤال {num}</h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">السؤال (عربي)</label>
                      <input
                        type="text"
                        value={contentData.faq?.[`q${num}Ar`] || ''}
                        onChange={(e) => updateField('faq', `q${num}Ar`, e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder={`السؤال ${num} بالعربية`}
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2">السؤال (English)</label>
                      <input
                        type="text"
                        value={contentData.faq?.[`q${num}En`] || ''}
                        onChange={(e) => updateField('faq', `q${num}En`, e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder={`Question ${num} in English`}
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2">الجواب (عربي)</label>
                      <textarea
                        value={contentData.faq?.[`a${num}Ar`] || ''}
                        onChange={(e) => updateField('faq', `a${num}Ar`, e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        rows={3}
                        placeholder={`الإجابة ${num} بالعربية`}
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2">الجواب (English)</label>
                      <textarea
                        value={contentData.faq?.[`a${num}En`] || ''}
                        onChange={(e) => updateField('faq', `a${num}En`, e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        rows={3}
                        placeholder={`Answer ${num} in English`}
                        dir="ltr"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-sm">
              <p className="text-green-800">
                ✅ <strong>تم التحديث:</strong> يمكنك الآن إدارة 5 أسئلة شائعة بالكامل مع الأجوبة بالعربية والإنجليزية
              </p>
            </div>
          </div>
        )}

        {/* FAQ Page Section */}
        {activeTab === 'faq_page' && (
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg">صفحة FAQ</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setContentData({
                      ...contentData,
                      faq_page: {
                        titleAr: 'الأسئلة الشائعة',
                        titleEn: 'FAQ',
                        subtitleAr: 'الأسئلة المتكررة',
                        subtitleEn: 'Frequently Asked Questions.',
                        q1Ar: 'كم من الوقت يستغرق معالجة التذكرة؟',
                        q1En: 'How long does it take to process a ticket?',
                        a1Ar: 'عادةً ما تتم معالجة التذاكر خلال 24-48 ساعة عمل. في حالة التذاكر العاجلة، يتم التعامل معها بشكل أسرع.',
                        a1En: 'Tickets are typically processed within 24-48 business hours. Urgent tickets are handled faster.',
                        q2Ar: 'هل يمكنني تعديل التذكرة بعد إرسالها؟',
                        q2En: 'Can I edit my ticket after submitting it?',
                        a2Ar: 'نعم، يمكنك تعديل التذكرة من خلال صفحة تتبع التذاكر قبل أن يبدأ فريق الدعم بالعمل عليها.',
                        a2En: 'Yes, you can edit your ticket through the ticket tracking page before the support team starts working on it.',
                        q3Ar: 'هل يمكنني تقديم التذاكر خارج أوقات العمل؟',
                        q3En: 'Can I submit tickets outside working hours?',
                        a3Ar: 'نعم، يمكنك تقديم التذاكر في أي وقت. سيتم معالجتها في أول يوم عمل قادم.',
                        a3En: 'Yes, you can submit tickets at any time. They will be processed on the next business day.',
                        q4Ar: 'كيف يمكنني تتبع تذك��تي القديمة؟',
                        q4En: 'How can I track my old ticket?',
                        a4Ar: 'استخدم رقم التذكرة أو بريدك الإلكتروني في صفحة "البحث عن تذكرة قديمة" لمتابعة حالة تذكرتك.',
                        a4En: 'Use your ticket number or email in the "Search Old Ticket" page to track your ticket status.',
                        q5Ar: 'هل بياناتي محفوظة بشكل آمن؟',
                        q5En: 'Are my details kept secure?',
                        a5Ar: 'نعم، جميع البيانات محمية بأعلى معايير الأمان ولا يتم مشاركتها مع أي جهة خارجية.',
                        a5En: 'Yes, all data is protected with the highest security standards and is not shared with any third parties.'
                      }
                    });
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  <Database className="size-4" />
                  تحميل القيم الافتراضية
                </button>
                <button
                  onClick={() => handleSave('faq_page')}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  <Save className="size-4" />
                  حفظ التغييرات
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">العنوان (عربي)</label>
                <input
                  type="text"
                  value={contentData.faq_page?.titleAr || ''}
                  onChange={(e) => updateField('faq_page', 'titleAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="الأسئلة الشائعة"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">العنوان (English)</label>
                <input
                  type="text"
                  value={contentData.faq_page?.titleEn || ''}
                  onChange={(e) => updateField('faq_page', 'titleEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="FAQ"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">الوصف (عربي)</label>
                <input
                  type="text"
                  value={contentData.faq_page?.subtitleAr || ''}
                  onChange={(e) => updateField('faq_page', 'subtitleAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="الأسئلة المتكررة"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">الوصف (English)</label>
                <input
                  type="text"
                  value={contentData.faq_page?.subtitleEn || ''}
                  onChange={(e) => updateField('faq_page', 'subtitleEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Frequently Asked Questions."
                  dir="ltr"
                />
              </div>
            </div>

            {/* FAQ Items */}
            <div className="border-t pt-6 space-y-6">
              <h3 className="text-md">الأسئلة والأجوبة (5 أسئلة)</h3>
              
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="p-4 bg-gray-50 rounded-lg space-y-4">
                  <h4 className="font-medium text-blue-600">السؤال {num}</h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">السؤال (عربي)</label>
                      <input
                        type="text"
                        value={contentData.faq_page?.[`q${num}Ar`] || ''}
                        onChange={(e) => updateField('faq_page', `q${num}Ar`, e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder={`السؤال ${num} بالعربية`}
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2">السؤال (English)</label>
                      <input
                        type="text"
                        value={contentData.faq_page?.[`q${num}En`] || ''}
                        onChange={(e) => updateField('faq_page', `q${num}En`, e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder={`Question ${num} in English`}
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2">الجواب (عربي)</label>
                      <textarea
                        value={contentData.faq_page?.[`a${num}Ar`] || ''}
                        onChange={(e) => updateField('faq_page', `a${num}Ar`, e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        rows={3}
                        placeholder={`الإجابة ${num} بالعربية`}
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2">الجواب (English)</label>
                      <textarea
                        value={contentData.faq_page?.[`a${num}En`] || ''}
                        onChange={(e) => updateField('faq_page', `a${num}En`, e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        rows={3}
                        placeholder={`Answer ${num} in English`}
                        dir="ltr"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-sm">
              <p className="text-green-800">
                ✅ <strong>تم التحديث:</strong> يمكنك الآن إدارة 5 أسئلة شائعة بالكامل مع الأجوبة بالعربية والإنجليزية
              </p>
            </div>
          </div>
        )}

        {/* Search Page Section */}
        {activeTab === 'search_page' && (
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg">صفحة البحث</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setContentData({
                      ...contentData,
                      search_page: {
                        titleAr: 'البحث عن تذكرة',
                        titleEn: 'Search Ticket',
                        subtitleAr: 'ابحث عن تذكرتك باستخدام رقم التذكرة أو البريد الإلكتروني',
                        subtitleEn: 'Search for your ticket using ticket number or email',
                        ticketNumberLabelAr: 'رقم التذكرة',
                        ticketNumberLabelEn: 'Ticket Number',
                        ticketNumberPlaceholderAr: 'أدخل رقم التذكرة',
                        ticketNumberPlaceholderEn: 'Enter ticket number',
                        emailLabelAr: 'البريد الإلكتروني',
                        emailLabelEn: 'Email',
                        emailPlaceholderAr: 'أدخل البريد الإلكتروني',
                        emailPlaceholderEn: 'Enter email',
                        searchButtonAr: 'بحث',
                        searchButtonEn: 'Search'
                      }
                    });
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  <Database className="size-4" />
                  تحميل القيم الافتراضية
                </button>
                <button
                  onClick={() => handleSave('search_page')}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  <Save className="size-4" />
                  حفظ التغييرات
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">العنوان (عربي)</label>
                <input
                  type="text"
                  value={contentData.search_page?.titleAr || ''}
                  onChange={(e) => updateField('search_page', 'titleAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="بحث عن تذكرة قديمة"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">العنوان (English)</label>
                <input
                  type="text"
                  value={contentData.search_page?.titleEn || ''}
                  onChange={(e) => updateField('search_page', 'titleEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Search Old Ticket"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">الوصف (عربي)</label>
                <input
                  type="text"
                  value={contentData.search_page?.subtitleAr || ''}
                  onChange={(e) => updateField('search_page', 'subtitleAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="ابحث عن تذكرتك باستخدام رقم التذكرة أو البريد الإلكتروني"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">الوصف (English)</label>
                <input
                  type="text"
                  value={contentData.search_page?.subtitleEn || ''}
                  onChange={(e) => updateField('search_page', 'subtitleEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Search for your old ticket using the ticket number or email"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">نص الزر (��ربي)</label>
                <input
                  type="text"
                  value={contentData.search_page?.buttonTextAr || ''}
                  onChange={(e) => updateField('search_page', 'buttonTextAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="بحث"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">نص الزر (English)</label>
                <input
                  type="text"
                  value={contentData.search_page?.buttonTextEn || ''}
                  onChange={(e) => updateField('search_page', 'buttonTextEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Search"
                  dir="ltr"
                />
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="mb-4">حقول النموذج</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">تسمية رقم التذكرة (عربي)</label>
                  <input
                    type="text"
                    value={contentData.search_page?.ticketNumberLabelAr || ''}
                    onChange={(e) => updateField('search_page', 'ticketNumberLabelAr', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="رقم التذكرة"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">تسمية رقم التذكرة (English)</label>
                  <input
                    type="text"
                    value={contentData.search_page?.ticketNumberLabelEn || ''}
                    onChange={(e) => updateField('search_page', 'ticketNumberLabelEn', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Ticket Number"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Placeholder رقم التذكرة (عربي)</label>
                  <input
                    type="text"
                    value={contentData.search_page?.ticketNumberPlaceholderAr || ''}
                    onChange={(e) => updateField('search_page', 'ticketNumberPlaceholderAr', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="أدخل رقم التذكرة"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Placeholder رقم التذكرة (English)</label>
                  <input
                    type="text"
                    value={contentData.search_page?.ticketNumberPlaceholderEn || ''}
                    onChange={(e) => updateField('search_page', 'ticketNumberPlaceholderEn', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Enter ticket number"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">تسمية البريد الإلكتروني (عربي)</label>
                  <input
                    type="text"
                    value={contentData.search_page?.emailLabelAr || ''}
                    onChange={(e) => updateField('search_page', 'emailLabelAr', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="البريد الإلكتروني"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">تسمية البريد الإلكتروني (English)</label>
                  <input
                    type="text"
                    value={contentData.search_page?.emailLabelEn || ''}
                    onChange={(e) => updateField('search_page', 'emailLabelEn', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Email"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Placeholder البريد الإلكتروني (عربي)</label>
                  <input
                    type="text"
                    value={contentData.search_page?.emailPlaceholderAr || ''}
                    onChange={(e) => updateField('search_page', 'emailPlaceholderAr', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="أدخل البريد الإلكتروني"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Placeholder البريد الإلكتروني (English)</label>
                  <input
                    type="text"
                    value={contentData.search_page?.emailPlaceholderEn || ''}
                    onChange={(e) => updateField('search_page', 'emailPlaceholderEn', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Enter email"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">نص زر البحث (عربي)</label>
                  <input
                    type="text"
                    value={contentData.search_page?.searchButtonAr || ''}
                    onChange={(e) => updateField('search_page', 'searchButtonAr', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="بحث"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">نص زر البحث (English)</label>
                  <input
                    type="text"
                    value={contentData.search_page?.searchButtonEn || ''}
                    onChange={(e) => updateField('search_page', 'searchButtonEn', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Search"
                    dir="ltr"
                  />
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-sm">
              <p className="text-green-800">
                ✅ <strong>تم التحديث:</strong> يمكنك الآن التحكم الكامل بجميع نصوص نموذج البحث
              </p>
            </div>
          </div>
        )}

        {/* About Page Section */}
        {activeTab === 'about_page' && (
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg">صفحة من نحن</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setContentData({
                      ...contentData,
                      about_page: {
                        titleAr: 'من نحن',
                        titleEn: 'About OUR KSU',
                        point1Ar: 'خدمة دعم المستفيدين هي القناة الرسمية للتواصل مع إدارة تقنية المعلومات بجامعة الملك سعود',
                        point1En: 'The Beneficiary Support Service is the official communication channel supervised by King Saud University.',
                        point2Ar: 'توفر طريقة موحدة وموثوقة لتقديم الطلبات والاستفسارات والمشكلات التقنية',
                        point2En: 'It provides a unified and reliable way to submit requests, inquiries and technical issues',
                        point3Ar: 'هدفنا هو تعزيز التواصل الفعال وتقديم الدعم الفني بأعلى مستويات الجودة',
                        point3En: 'Our goal is to enhance effective communication and provide technical support at the highest levels of quality'
                      }
                    });
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  <Database className="size-4" />
                  تحميل القيم الافتراضية
                </button>
                <button
                  onClick={() => handleSave('about_page')}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  <Save className="size-4" />
                  حفظ التغييرات
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">العنوان (عربي)</label>
                <input
                  type="text"
                  value={contentData.about_page?.titleAr || ''}
                  onChange={(e) => updateField('about_page', 'titleAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="من نحن"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">العنوان (English)</label>
                <input
                  type="text"
                  value={contentData.about_page?.titleEn || ''}
                  onChange={(e) => updateField('about_page', 'titleEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="About Us"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الأولى (عربي)</label>
                <textarea
                  value={contentData.about_page?.point1Ar || ''}
                  onChange={(e) => updateField('about_page', 'point1Ar', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="خدمة دعم المستفيدين هي القناة الرسمية..."
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الأولى (English)</label>
                <textarea
                  value={contentData.about_page?.point1En || ''}
                  onChange={(e) => updateField('about_page', 'point1En', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="The Beneficiary Support Service..."
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الثانية (عربي)</label>
                <textarea
                  value={contentData.about_page?.point2Ar || ''}
                  onChange={(e) => updateField('about_page', 'point2Ar', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="توفر طريقة موحدة وموثوقة..."
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الثانية (English)</label>
                <textarea
                  value={contentData.about_page?.point2En || ''}
                  onChange={(e) => updateField('about_page', 'point2En', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="It provides a unified way..."
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الثالثة (عربي)</label>
                <textarea
                  value={contentData.about_page?.point3Ar || ''}
                  onChange={(e) => updateField('about_page', 'point3Ar', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="هدفنا هو تعزيز التواصل..."
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الثالثة (English)</label>
                <textarea
                  value={contentData.about_page?.point3En || ''}
                  onChange={(e) => updateField('about_page', 'point3En', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="Our goal is to enhance..."
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">نص الزر (عربي)</label>
                <input
                  type="text"
                  value={contentData.about_page?.buttonTextAr || ''}
                  onChange={(e) => updateField('about_page', 'buttonTextAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="اعرف المزيد.."
                />
              </div>

              <div>
                <label className="block text-sm mb-2">نص ا��زر (English)</label>
                <input
                  type="text"
                  value={contentData.about_page?.buttonTextEn || ''}
                  onChange={(e) => updateField('about_page', 'buttonTextEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Learn more.."
                  dir="ltr"
                />
              </div>
            </div>

            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-sm">
              <p className="text-green-800">
                ✅ <strong>تم التحديث:</strong> تم استبدال التصميم بنموذج Figma الاحترافي مع صورة و3 نقاط نصية
              </p>
            </div>
          </div>
        )}

        {/* About Purpose Section */}
        {activeTab === 'about_purpose' && (
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg">قسم هدفنا (صفحة من نحن)</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setContentData({
                      ...contentData,
                      about_purpose: {
                        titleAr: 'هدفنا',
                        titleEn: 'Our Purpose',
                        introAr: 'نهدف إلى تعزيز الاتصال بين أعضاء جامعة الملك سعود وفرق التحول بالجامعة من خلال:',
                        introEn: 'We aim to strengthen the connection between KSU members and the university\'s transformation teams by:',
                        point1Ar: 'توفير نقطة اتصال واحدة لجميع الاستفسارات',
                        point1En: 'Providing a single point of contact for all inquiries',
                        point2Ar: 'ضمان عملية دعم سلسة وشفافة',
                        point2En: 'Ensuring a smooth and transparent support process',
                        point3Ar: 'تقديم مساعدة متسقة وعالية الجودة',
                        point3En: 'Delivering consistent, high-quality assistance',
                        point4Ar: 'تعزيز رضا المستخدمين عبر جميع الخدمات الرقمية',
                        point4En: 'Enhancing user satisfaction across all digital services'
                      }
                    });
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  <Database className="size-4" />
                  تحميل القيم الافتراضية
                </button>
                <button
                  onClick={() => handleSave('about_purpose')}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  <Save className="size-4" />
                  حفظ التغييرات
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">العنوان (عربي)</label>
                <input
                  type="text"
                  value={contentData.about_purpose?.titleAr || ''}
                  onChange={(e) => updateField('about_purpose', 'titleAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="هدفنا"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">العنوان (English)</label>
                <input
                  type="text"
                  value={contentData.about_purpose?.titleEn || ''}
                  onChange={(e) => updateField('about_purpose', 'titleEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Our Purpose"
                  dir="ltr"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-2">النص التمهيدي (عربي)</label>
                <textarea
                  value={contentData.about_purpose?.introAr || ''}
                  onChange={(e) => updateField('about_purpose', 'introAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="نهدف إلى تعزيز الاتصال..."
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-2">النص التمهيدي (English)</label>
                <textarea
                  value={contentData.about_purpose?.introEn || ''}
                  onChange={(e) => updateField('about_purpose', 'introEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="We aim to strengthen..."
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الأولى (عربي)</label>
                <textarea
                  value={contentData.about_purpose?.point1Ar || ''}
                  onChange={(e) => updateField('about_purpose', 'point1Ar', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="توفير نقطة اتصال واحدة..."
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الأولى (English)</label>
                <textarea
                  value={contentData.about_purpose?.point1En || ''}
                  onChange={(e) => updateField('about_purpose', 'point1En', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="Providing a single point..."
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الثانية (عربي)</label>
                <textarea
                  value={contentData.about_purpose?.point2Ar || ''}
                  onChange={(e) => updateField('about_purpose', 'point2Ar', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="ضمان عملية دعم سلسة..."
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الثانية (English)</label>
                <textarea
                  value={contentData.about_purpose?.point2En || ''}
                  onChange={(e) => updateField('about_purpose', 'point2En', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="Ensuring a smooth..."
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الثالثة (عربي)</label>
                <textarea
                  value={contentData.about_purpose?.point3Ar || ''}
                  onChange={(e) => updateField('about_purpose', 'point3Ar', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="تقديم مساعدة متسقة..."
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الثالثة (English)</label>
                <textarea
                  value={contentData.about_purpose?.point3En || ''}
                  onChange={(e) => updateField('about_purpose', 'point3En', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="Delivering consistent..."
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الرابعة (عربي)</label>
                <textarea
                  value={contentData.about_purpose?.point4Ar || ''}
                  onChange={(e) => updateField('about_purpose', 'point4Ar', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="تعزيز رضا المستخدمين..."
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الرابعة (English)</label>
                <textarea
                  value={contentData.about_purpose?.point4En || ''}
                  onChange={(e) => updateField('about_purpose', 'point4En', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="Enhancing user satisfaction..."
                  dir="ltr"
                />
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm">
              <p className="text-blue-800">
                ℹ️ <strong>ملاحظة:</strong> هذا القسم يعرض أهداف خدمة الدعم مع صورة توضيحية
              </p>
            </div>
          </div>
        )}

        {/* About Mission Section */}
        {activeTab === 'about_mission' && (
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg">قسم مهمتنا (صفحة من نحن)</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setContentData({
                      ...contentData,
                      about_mission: {
                        titleAr: 'مهمتنا',
                        titleEn: 'Our Mission',
                        textAr: 'تقديم تجربة دعم فعالة وسهلة الوصول تمكن أعضاء جامعة الملك سعود وتعزز ثقافة الشفافية والاستجابة والتحسين المستمر.',
                        textEn: 'To deliver an efficient and accessible support experience that empowers KSU members and promotes a culture of transparency, responsiveness, and continuous improvement.'
                      }
                    });
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  <Database className="size-4" />
                  تحميل القيم الافتراضية
                </button>
                <button
                  onClick={() => handleSave('about_mission')}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  <Save className="size-4" />
                  حفظ التغييرات
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">العنوان (عربي)</label>
                <input
                  type="text"
                  value={contentData.about_mission?.titleAr || ''}
                  onChange={(e) => updateField('about_mission', 'titleAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="مهمتنا"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">العنوان (English)</label>
                <input
                  type="text"
                  value={contentData.about_mission?.titleEn || ''}
                  onChange={(e) => updateField('about_mission', 'titleEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Our Mission"
                  dir="ltr"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-2">النص (عربي)</label>
                <textarea
                  value={contentData.about_mission?.textAr || ''}
                  onChange={(e) => updateField('about_mission', 'textAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={3}
                  placeholder="تقديم تجربة دعم فعالة..."
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-2">النص (English)</label>
                <textarea
                  value={contentData.about_mission?.textEn || ''}
                  onChange={(e) => updateField('about_mission', 'textEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={3}
                  placeholder="To deliver an efficient..."
                  dir="ltr"
                />
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm">
              <p className="text-blue-800">
                ℹ️ <strong>ملاحظة:</strong> هذا القسم يعرض مهمة خدمة الدعم مع صورة توضيحية
              </p>
            </div>
          </div>
        )}

        {/* About Vision Section */}
        {activeTab === 'about_vision' && (
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg">قسم رؤيتنا (صفحة من نحن)</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setContentData({
                      ...contentData,
                      about_vision: {
                        titleAr: 'رؤيتنا',
                        titleEn: 'Our Vision',
                        textAr: 'أن نصبح نموذجاً رائداً لخدمات الدعم الرقمي في التعليم العالي، بما يتماشى مع أهداف جامعة الملك سعود والرؤية الأوسع للتحول الرقمي في المملكة.',
                        textEn: 'To become a leading model for digital support services in higher education, aligning with KSU\'s goals and the broader vision of digital transformation in the Kingdom.'
                      }
                    });
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  <Database className="size-4" />
                  تحميل القيم الافتراضية
                </button>
                <button
                  onClick={() => handleSave('about_vision')}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  <Save className="size-4" />
                  حفظ التغييرات
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">العنوان (عربي)</label>
                <input
                  type="text"
                  value={contentData.about_vision?.titleAr || ''}
                  onChange={(e) => updateField('about_vision', 'titleAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="رؤيتنا"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">العنوان (English)</label>
                <input
                  type="text"
                  value={contentData.about_vision?.titleEn || ''}
                  onChange={(e) => updateField('about_vision', 'titleEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Our Vision"
                  dir="ltr"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-2">النص (عربي)</label>
                <textarea
                  value={contentData.about_vision?.textAr || ''}
                  onChange={(e) => updateField('about_vision', 'textAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={3}
                  placeholder="أن نصبح نموذجاً رائداً..."
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-2">النص (English)</label>
                <textarea
                  value={contentData.about_vision?.textEn || ''}
                  onChange={(e) => updateField('about_vision', 'textEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={3}
                  placeholder="To become a leading model..."
                  dir="ltr"
                />
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm">
              <p className="text-blue-800">
                ℹ️ <strong>ملاحظة:</strong> هذا القسم يعرض رؤية خدمة الدعم للمستقبل مع صورة احترافية
              </p>
            </div>
          </div>
        )}

        {/* About CTA Section */}
        {activeTab === 'about_cta' && (
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg">قسم الدعوة للعمل - CTA (صفحة من نحن)</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setContentData({
                      ...contentData,
                      about_cta: {
                        titleAr: 'هل أنت مستعد؟',
                        titleEn: 'Are you ready?',
                        descAr: 'ابدأ طلبك الآن واحصل على الدعم مباشرة من الفريق الرسمي لجامعة الملك سعود.',
                        descEn: 'Start your request now and get support directly from the official KSU team.',
                        btnTextAr: 'إنشاء تذكرة',
                        btnTextEn: 'Create A Ticket',
                        searchTextAr: 'البحث عن تذكرة قديمة',
                        searchTextEn: 'Search old Ticket'
                      }
                    });
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  <Database className="size-4" />
                  تحميل القيم الافتراضية
                </button>
                <button
                  onClick={() => handleSave('about_cta')}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  <Save className="size-4" />
                  حفظ التغييرات
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">العنوان (عربي)</label>
                <input
                  type="text"
                  value={contentData.about_cta?.titleAr || ''}
                  onChange={(e) => updateField('about_cta', 'titleAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="هل أنت مستعد؟"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">العنوان (English)</label>
                <input
                  type="text"
                  value={contentData.about_cta?.titleEn || ''}
                  onChange={(e) => updateField('about_cta', 'titleEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Are you ready?"
                  dir="ltr"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-2">الوصف (عربي)</label>
                <textarea
                  value={contentData.about_cta?.descAr || ''}
                  onChange={(e) => updateField('about_cta', 'descAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="ابدأ طلبك الآن..."
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-2">الوصف (English)</label>
                <textarea
                  value={contentData.about_cta?.descEn || ''}
                  onChange={(e) => updateField('about_cta', 'descEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="Start your request now..."
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">نص الزر الأساسي (عربي)</label>
                <input
                  type="text"
                  value={contentData.about_cta?.btnTextAr || ''}
                  onChange={(e) => updateField('about_cta', 'btnTextAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="إنشاء تذكرة"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">نص الزر الأساسي (English)</label>
                <input
                  type="text"
                  value={contentData.about_cta?.btnTextEn || ''}
                  onChange={(e) => updateField('about_cta', 'btnTextEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Create A Ticket"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">نص زر البحث (عربي)</label>
                <input
                  type="text"
                  value={contentData.about_cta?.searchTextAr || ''}
                  onChange={(e) => updateField('about_cta', 'searchTextAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="البحث عن تذكرة قديمة"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">نص زر البحث (English)</label>
                <input
                  type="text"
                  value={contentData.about_cta?.searchTextEn || ''}
                  onChange={(e) => updateField('about_cta', 'searchTextEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Search old Ticket"
                  dir="ltr"
                />
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm">
              <p className="text-blue-800">
                ℹ️ <strong>ملاحظة:</strong> هذا القسم يحث المستخدمين على اتخاذ إجراء (إنشاء تذكرة أو البحث عن تذكرة قديمة)
              </p>
            </div>
          </div>
        )}

        {/* Knowledge Page Section */}
        {activeTab === 'knowledge_page' && (
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg">صفحة المعرفة</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setContentData({
                      ...contentData,
                      knowledge_page: {
                        titleAr: 'قاعدة المعرفة',
                        titleEn: 'Knowledge Base',
                        subtitleAr: 'معلومات مفيدة حول نظام التذاكر',
                        subtitleEn: 'Useful information about the ticketing system',
                        point1Ar: 'خدمة دعم المستفيدين هي القناة الرسمية للتواصل مع إدارة تقنية المعلومات بجامعة الملك سعود',
                        point1En: 'The Beneficiary Support Service is the official channel for communication with the Information Technology Department at King Saud University',
                        point2Ar: 'توفر طريقة موحدة وموثوقة لتقديم الطلبات والاستفسارات والمشكلات التقنية',
                        point2En: 'It provides a unified and reliable way to submit requests, inquiries and technical issues',
                        point3Ar: 'هدفنا هو تعزيز التواصل الفعال وتقديم الدعم الفني بأعلى مستويات الجودة',
                        point3En: 'Our goal is to enhance effective communication and provide technical support at the highest levels of quality',
                        buttonTextAr: 'اعرف المزيد..',
                        buttonTextEn: 'Learn more..'
                      }
                    });
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  <Database className="size-4" />
                  تحميل القيم الافتراضية
                </button>
                <button
                  onClick={() => handleSave('knowledge_page')}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  <Save className="size-4" />
                  حفظ التغييرات
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">العنوان (عربي)</label>
                <input
                  type="text"
                  value={contentData.knowledge_page?.titleAr || ''}
                  onChange={(e) => updateField('knowledge_page', 'titleAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="قاعدة المعرفة"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">العنوان (English)</label>
                <input
                  type="text"
                  value={contentData.knowledge_page?.titleEn || ''}
                  onChange={(e) => updateField('knowledge_page', 'titleEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Knowledge Base"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">الوصف (عربي)</label>
                <input
                  type="text"
                  value={contentData.knowledge_page?.subtitleAr || ''}
                  onChange={(e) => updateField('knowledge_page', 'subtitleAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="معلومات مفيدة حول نظام التذاكر"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">الوصف (English)</label>
                <input
                  type="text"
                  value={contentData.knowledge_page?.subtitleEn || ''}
                  onChange={(e) => updateField('knowledge_page', 'subtitleEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Useful information about the ticketing system"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الأولى (عربي)</label>
                <textarea
                  value={contentData.knowledge_page?.point1Ar || ''}
                  onChange={(e) => updateField('knowledge_page', 'point1Ar', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="خدمة دعم المستفيدين هي القناة الرسمية..."
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الأولى (English)</label>
                <textarea
                  value={contentData.knowledge_page?.point1En || ''}
                  onChange={(e) => updateField('knowledge_page', 'point1En', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="The Beneficiary Support Service..."
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الثانية (عربي)</label>
                <textarea
                  value={contentData.knowledge_page?.point2Ar || ''}
                  onChange={(e) => updateField('knowledge_page', 'point2Ar', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="توفر طريقة موحدة وموثوقة..."
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الثانية (English)</label>
                <textarea
                  value={contentData.knowledge_page?.point2En || ''}
                  onChange={(e) => updateField('knowledge_page', 'point2En', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="It provides a unified way..."
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الثالثة (عربي)</label>
                <textarea
                  value={contentData.knowledge_page?.point3Ar || ''}
                  onChange={(e) => updateField('knowledge_page', 'point3Ar', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="هدفنا هو تعزيز التواصل..."
                />
              </div>

              <div>
                <label className="block text-sm mb-2">النقطة الثالثة (English)</label>
                <textarea
                  value={contentData.knowledge_page?.point3En || ''}
                  onChange={(e) => updateField('knowledge_page', 'point3En', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                  placeholder="Our goal is to enhance..."
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">نص الزر (عربي)</label>
                <input
                  type="text"
                  value={contentData.knowledge_page?.buttonTextAr || ''}
                  onChange={(e) => updateField('knowledge_page', 'buttonTextAr', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="اعرف المزيد.."
                />
              </div>

              <div>
                <label className="block text-sm mb-2">نص الزر (English)</label>
                <input
                  type="text"
                  value={contentData.knowledge_page?.buttonTextEn || ''}
                  onChange={(e) => updateField('knowledge_page', 'buttonTextEn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Learn more.."
                  dir="ltr"
                />
              </div>
            </div>
          </div>
        )}

        {/* Images Section */}
        {activeTab === 'images' && (
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <h2 className="text-lg">إدارة الصور</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {['logo', 'hero', 'about', 'statistics'].map(section => (
                <div key={section} className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="mb-3 capitalize">{section}</h3>
                  
                  {contentData[section]?.imageUrl && (
                    <div className="mb-3 relative h-48 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={contentData[section].imageUrl}
                        alt={section}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  <label className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600">
                    <Upload className="size-4" />
                    رفع صورة جديدة
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleImageUpload(section, file);
                      }}
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Preview Button */}
        <div className="mt-6 flex justify-center">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            <Eye className="size-5" />
            معاينة الموقع
          </a>
        </div>
      </div>
    </div>
  );
}