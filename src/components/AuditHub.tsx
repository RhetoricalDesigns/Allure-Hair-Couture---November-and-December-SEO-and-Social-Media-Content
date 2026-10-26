import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Search, 
  BarChart3, 
  Share2, 
  Copy, 
  Check, 
  ExternalLink, 
  RefreshCw,
  Globe,
  Smartphone,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { SearchConsoleAudit, AnalyticsAudit, BusinessConnection } from '../types/campaign';

interface AuditHubProps {
  searchConsole: SearchConsoleAudit;
  analytics: AnalyticsAudit;
  businessConnections: BusinessConnection[];
}

export const AuditHub: React.FC<AuditHubProps> = ({
  searchConsole,
  analytics,
  businessConnections
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'gsc' | 'analytics' | 'profiles'>('gsc');
  const [copiedToken, setCopiedToken] = useState(false);
  const [copiedGtag, setCopiedGtag] = useState(false);
  const [inspectedUrl, setInspectedUrl] = useState('https://allure-hair-couture.co.za/bridal');
  const [inspectionResult, setInspectionResult] = useState<string | null>(null);
  const [isInspecting, setIsInspecting] = useState(false);
  const [diagnosticsRunning, setDiagnosticsRunning] = useState(false);
  const [diagnosticsCompleted, setDiagnosticsCompleted] = useState(true);

  const verificationMetaSnippet = `<meta name="google-site-verification" content="${searchConsole.verificationToken}" />`;

  const gtagSnippet = `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${analytics.measurementId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${analytics.measurementId}');
</script>`;

  const copyToClipboard = (text: string, setter: (val: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2200);
  };

  const handleInspectUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inspectedUrl) return;
    setIsInspecting(true);
    setInspectionResult(null);
    setTimeout(() => {
      setIsInspecting(false);
      setInspectionResult(`URL is on Google: Indexed and eligible for search results. Page fetch: Successful. Mobile friendliness: Pass. Canonical: Declared by user.`);
    }, 900);
  };

  const runDiagnostics = () => {
    setDiagnosticsRunning(true);
    setDiagnosticsCompleted(false);
    setTimeout(() => {
      setDiagnosticsRunning(false);
      setDiagnosticsCompleted(true);
    }, 1200);
  };

  return (
    <section className="bg-white border-b border-[#e1dcd4] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-sub font-bold tracking-widest uppercase text-[#b8943f] mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Foundation & Discovery Systems</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#11100f] tracking-tight">
              Pre-Campaign Verification & Technical Audit
            </h2>
            <p className="font-serif italic text-stone-600 text-base mt-1">
              Google Search Console indexing, GA4 tracking verification, and cross-platform business profile synchronization.
            </p>
          </div>

          {/* Sub-tab switcher */}
          <div className="flex items-center bg-[#f6f3eb] p-1 rounded-sm border border-[#e1dcd4] shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveSubTab('gsc')}
              className={`px-4 py-2 text-xs font-sub font-bold tracking-wider uppercase transition-all rounded-sm flex items-center gap-2 ${
                activeSubTab === 'gsc'
                  ? 'bg-white text-[#11100f] shadow-sm'
                  : 'text-stone-600 hover:text-[#11100f]'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>Google Search Console</span>
            </button>

            <button
              onClick={() => setActiveSubTab('analytics')}
              className={`px-4 py-2 text-xs font-sub font-bold tracking-wider uppercase transition-all rounded-sm flex items-center gap-2 ${
                activeSubTab === 'analytics'
                  ? 'bg-white text-[#11100f] shadow-sm'
                  : 'text-stone-600 hover:text-[#11100f]'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Google Analytics (GA4)</span>
            </button>

            <button
              onClick={() => setActiveSubTab('profiles')}
              className={`px-4 py-2 text-xs font-sub font-bold tracking-wider uppercase transition-all rounded-sm flex items-center gap-2 ${
                activeSubTab === 'profiles'
                  ? 'bg-white text-[#11100f] shadow-sm'
                  : 'text-stone-600 hover:text-[#11100f]'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Business Profiles Check</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Google Search Console */}
        {activeSubTab === 'gsc' && (
          <div className="space-y-6">
            {/* Top Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 bg-[#faf8f3] border border-[#e1dcd4] rounded-sm">
                <div className="text-xs font-sub uppercase tracking-wider text-stone-500 mb-1">Property URL</div>
                <div className="text-sm font-semibold text-[#11100f] truncate font-sans-clean flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-[#b8943f] shrink-0" />
                  <span className="truncate">{searchConsole.propertyUrl}</span>
                </div>
                <div className="mt-2 text-xs text-stone-600 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span className="font-medium text-emerald-800">Domain Ownership Verified</span>
                </div>
              </div>

              <div className="p-4 bg-[#faf8f3] border border-[#e1dcd4] rounded-sm">
                <div className="text-xs font-sub uppercase tracking-wider text-stone-500 mb-1">Sitemap Coverage</div>
                <div className="text-xl font-display font-semibold text-[#11100f] tabular-nums">
                  {searchConsole.sitemapPages} Pages
                </div>
                <div className="mt-1 text-xs text-stone-600 font-sans-clean">
                  sitemap.xml · Processed successfully
                </div>
              </div>

              <div className="p-4 bg-[#faf8f3] border border-[#e1dcd4] rounded-sm">
                <div className="text-xs font-sub uppercase tracking-wider text-stone-500 mb-1">Core Web Vitals</div>
                <div className="text-xl font-display font-semibold text-emerald-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Pass (All Good)</span>
                </div>
                <div className="mt-1 text-xs text-stone-600 font-sans-clean tabular-nums">
                  LCP: {searchConsole.coreWebVitals.lcp} · FID: {searchConsole.coreWebVitals.fid} · CLS: {searchConsole.coreWebVitals.cls}
                </div>
              </div>

              <div className="p-4 bg-[#faf8f3] border border-[#e1dcd4] rounded-sm">
                <div className="text-xs font-sub uppercase tracking-wider text-stone-500 mb-1">Mobile Usability</div>
                <div className="text-xl font-display font-semibold text-[#11100f] flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-[#b8943f]" />
                  <span>100% Mobile Ready</span>
                </div>
                <div className="mt-1 text-xs text-stone-600 font-sans-clean">
                  0 mobile usability errors detected
                </div>
              </div>
            </div>

            {/* Verification Code Box & URL Inspection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Verification snippet generator */}
              <div className="border border-[#e1dcd4] p-5 rounded-sm bg-[#faf8f3]">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-display font-medium text-lg text-[#11100f]">Site Verification Snippet</h3>
                    <p className="text-xs text-stone-600 font-sans-clean">Add this HTML verification tag to your website header</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(verificationMetaSnippet, setCopiedToken)}
                    className="px-3 py-1.5 text-xs font-sub font-bold uppercase tracking-wider bg-white border border-[#b8943f] text-[#11100f] hover:bg-[#b8943f] hover:text-white rounded-sm transition-all flex items-center gap-1.5"
                  >
                    {copiedToken ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedToken ? 'Copied Tag' : 'Copy HTML Tag'}</span>
                  </button>
                </div>
                <div className="bg-[#11100f] p-3 rounded-sm overflow-x-auto text-xs font-mono text-emerald-400 border border-[#282624]">
                  <code>{verificationMetaSnippet}</code>
                </div>
                <div className="mt-3 text-xs text-stone-500 font-sans-clean flex items-center gap-2">
                  <span className="font-semibold text-stone-700">Verification Token:</span>
                  <span className="font-mono text-stone-600">{searchConsole.verificationToken}</span>
                </div>
              </div>

              {/* URL Inspection Tool Simulator */}
              <div className="border border-[#e1dcd4] p-5 rounded-sm bg-[#faf8f3]">
                <h3 className="font-display font-medium text-lg text-[#11100f] mb-1">Live URL Inspection Tool</h3>
                <p className="text-xs text-stone-600 font-sans-clean mb-3">Inspect indexing and crawl readiness for any salon landing page</p>
                <form onSubmit={handleInspectUrl} className="flex gap-2">
                  <input
                    type="url"
                    value={inspectedUrl}
                    onChange={(e) => setInspectedUrl(e.target.value)}
                    placeholder="https://allure-hair-couture.co.za/page"
                    className="flex-1 px-3 py-2 text-xs font-sans-clean bg-white border border-[#e1dcd4] rounded-sm focus:outline-none focus:border-[#b8943f]"
                  />
                  <button
                    type="submit"
                    disabled={isInspecting}
                    className="px-4 py-2 text-xs font-sub font-bold uppercase tracking-wider bg-[#b8943f] text-white hover:bg-[#8f6c24] rounded-sm transition-all flex items-center gap-1.5 shrink-0"
                  >
                    {isInspecting ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Search className="w-3.5 h-3.5" />}
                    <span>{isInspecting ? 'Testing...' : 'Test URL'}</span>
                  </button>
                </form>

                {inspectionResult && (
                  <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-sm text-xs font-sans-clean text-emerald-900 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{inspectionResult}</span>
                  </div>
                )}
              </div>

            </div>

            {/* Keyword Performance Table */}
            <div className="border border-[#e1dcd4] rounded-sm overflow-hidden">
              <div className="bg-[#faf8f3] px-5 py-3 border-b border-[#e1dcd4] flex items-center justify-between">
                <div>
                  <h3 className="font-display font-medium text-base text-[#11100f]">Top Search Performance Queries</h3>
                  <p className="text-xs text-stone-600 font-sans-clean">High-intent organic keywords driving Hermanus & Western Cape clientele</p>
                </div>
                <div className="text-xs font-sub font-bold uppercase tracking-widest text-[#b8943f]">
                  Last 28 Days
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans-clean">
                  <thead className="bg-[#f6f3eb] text-stone-700 uppercase tracking-wider font-semibold border-b border-[#e1dcd4]">
                    <tr>
                      <th className="py-3 px-4">Search Query</th>
                      <th className="py-3 px-4 text-right">Clicks</th>
                      <th className="py-3 px-4 text-right">Impressions</th>
                      <th className="py-3 px-4 text-right">CTR</th>
                      <th className="py-3 px-4 text-right">Avg Position</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e1dcd4]">
                    {searchConsole.topQueries.map((q, idx) => (
                      <tr key={idx} className="hover:bg-[#faf8f3] transition-colors">
                        <td className="py-2.5 px-4 font-medium text-[#11100f]">{q.query}</td>
                        <td className="py-2.5 px-4 text-right tabular-nums text-stone-800">{q.clicks.toLocaleString()}</td>
                        <td className="py-2.5 px-4 text-right tabular-nums text-stone-600">{q.impressions.toLocaleString()}</td>
                        <td className="py-2.5 px-4 text-right tabular-nums font-semibold text-emerald-700">{q.ctr}%</td>
                        <td className="py-2.5 px-4 text-right tabular-nums font-semibold text-[#b8943f]">#{q.position}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Google Analytics 4 */}
        {activeSubTab === 'analytics' && (
          <div className="space-y-6">
            {/* Top Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 bg-[#faf8f3] border border-[#e1dcd4] rounded-sm">
                <div className="text-xs font-sub uppercase tracking-wider text-stone-500 mb-1">Measurement ID</div>
                <div className="text-lg font-mono font-bold text-[#11100f] truncate">
                  {analytics.measurementId}
                </div>
                <div className="mt-2 text-xs text-stone-600 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span className="font-medium text-emerald-800">Data Stream Active</span>
                </div>
              </div>

              <div className="p-4 bg-[#faf8f3] border border-[#e1dcd4] rounded-sm">
                <div className="text-xs font-sub uppercase tracking-wider text-stone-500 mb-1">Real-Time Visitors</div>
                <div className="text-xl font-display font-semibold text-[#11100f] tabular-nums">
                  {analytics.activeUsersRealtime} Active Users
                </div>
                <div className="mt-1 text-xs text-stone-600 font-sans-clean">
                  Across Mobile & Desktop sessions
                </div>
              </div>

              <div className="p-4 bg-[#faf8f3] border border-[#e1dcd4] rounded-sm">
                <div className="text-xs font-sub uppercase tracking-wider text-stone-500 mb-1">Monthly Inquiries</div>
                <div className="text-xl font-display font-semibold text-[#11100f] tabular-nums">
                  740 Conversions
                </div>
                <div className="mt-1 text-xs text-stone-600 font-sans-clean">
                  WhatsApp chats + Booking clicks
                </div>
              </div>

              <div className="p-4 bg-[#faf8f3] border border-[#e1dcd4] rounded-sm">
                <div className="text-xs font-sub uppercase tracking-wider text-stone-500 mb-1">Enhanced Measurement</div>
                <div className="text-xl font-display font-semibold text-emerald-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Enabled</span>
                </div>
                <div className="mt-1 text-xs text-stone-600 font-sans-clean">
                  Scrolls, outbound clicks & video tracking
                </div>
              </div>
            </div>

            {/* Tracking Script Snippet Box */}
            <div className="border border-[#e1dcd4] p-5 rounded-sm bg-[#faf8f3]">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-display font-medium text-lg text-[#11100f]">Global Site Tag (gtag.js) Snippet</h3>
                  <p className="text-xs text-stone-600 font-sans-clean">Embed in your website’s &lt;head&gt; tag to track user engagements and campaign conversions</p>
                </div>
                <button
                  onClick={() => copyToClipboard(gtagSnippet, setCopiedGtag)}
                  className="px-3 py-1.5 text-xs font-sub font-bold uppercase tracking-wider bg-white border border-[#b8943f] text-[#11100f] hover:bg-[#b8943f] hover:text-white rounded-sm transition-all flex items-center gap-1.5"
                >
                  {copiedGtag ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedGtag ? 'Copied Snippet' : 'Copy gtag.js'}</span>
                </button>
              </div>
              <div className="bg-[#11100f] p-4 rounded-sm overflow-x-auto text-xs font-mono text-amber-300 border border-[#282624]">
                <pre>{gtagSnippet}</pre>
              </div>
            </div>

            {/* Channel Breakdown & Conversion Events Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Traffic Channels */}
              <div className="border border-[#e1dcd4] rounded-sm p-5 bg-[#faf8f3]">
                <h3 className="font-display font-medium text-lg text-[#11100f] mb-1">Traffic Acquisition Channels</h3>
                <p className="text-xs text-stone-600 font-sans-clean mb-4">Breakdown of inbound traffic driving salon bookings</p>
                
                <div className="space-y-3">
                  {analytics.topChannels.map((ch, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs font-sans-clean">
                        <span className="font-medium text-stone-800">{ch.channel}</span>
                        <span className="tabular-nums font-semibold text-[#11100f]">{ch.sessions.toLocaleString()} sessions ({ch.share}%)</span>
                      </div>
                      <div className="w-full bg-[#e1dcd4] h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-[#b8943f] h-full rounded-full transition-all duration-500" 
                          style={{ width: `${ch.share}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conversion Events */}
              <div className="border border-[#e1dcd4] rounded-sm p-5 bg-[#faf8f3]">
                <h3 className="font-display font-medium text-lg text-[#11100f] mb-1">Key Custom Conversion Events</h3>
                <p className="text-xs text-stone-600 font-sans-clean mb-4">Telemetry configured for November and December campaign triggers</p>

                <div className="space-y-2.5">
                  {analytics.conversionEvents.map((evt, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 bg-white border border-[#e1dcd4] rounded-sm text-xs font-sans-clean">
                      <div>
                        <div className="font-mono font-bold text-[#b8943f]">{evt.name}</div>
                        <div className="text-stone-500 text-[11px] mt-0.5">{evt.description}</div>
                      </div>
                      <div className="text-right pl-3 shrink-0">
                        <span className="font-display font-semibold text-sm tabular-nums text-[#11100f]">{evt.count}</span>
                        <span className="text-[10px] text-stone-500 block">events</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Tab 3: Business Profiles Double-Checking */}
        {activeSubTab === 'profiles' && (
          <div className="space-y-6">
            
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-[#f6f3eb] border border-[#e1dcd4] rounded-sm">
              <div>
                <h3 className="font-display font-medium text-lg text-[#11100f]">NAP & Digital Footprint Verification</h3>
                <p className="text-xs text-stone-600 font-sans-clean">Double-checking Name, Address, Phone, and Meta Business Suite link health</p>
              </div>
              <button
                onClick={runDiagnostics}
                disabled={diagnosticsRunning}
                className="px-4 py-2 text-xs font-sub font-bold uppercase tracking-wider bg-[#b8943f] text-white hover:bg-[#8f6c24] rounded-sm transition-all flex items-center gap-2 shrink-0"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${diagnosticsRunning ? 'animate-spin' : ''}`} />
                <span>{diagnosticsRunning ? 'Auditing Channels...' : 'Run Profile Diagnostics'}</span>
              </button>
            </div>

            {/* Profiles Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {businessConnections.map((conn, idx) => (
                <div key={idx} className="border border-[#e1dcd4] rounded-sm bg-[#faf8f3] p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs font-sub uppercase font-bold tracking-widest text-[#b8943f]">
                        {conn.platform}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-sm border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Connected</span>
                      </div>
                    </div>

                    <h4 className="font-display font-medium text-base text-[#11100f] mb-1">
                      {conn.details}
                    </h4>
                    <p className="text-[11px] text-stone-500 font-sans-clean mb-4">
                      Last validated: {conn.lastChecked}
                    </p>

                    <div className="space-y-2 border-t border-[#e1dcd4] pt-3">
                      {conn.verifiedItems.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-2 text-xs font-sans-clean text-stone-700">
                          <Check className="w-3.5 h-3.5 text-[#b8943f] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#e1dcd4] flex items-center justify-between text-xs font-sans-clean">
                    <span className="text-stone-500">Sync Status</span>
                    <span className="font-semibold text-emerald-700">100% Synchronized</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Diagnostic Success Alert */}
            {diagnosticsCompleted && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-sm text-xs font-sans-clean text-emerald-900 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-sm text-emerald-950 mb-0.5">Profiles & Channels Fully Aligned</div>
                  <p>
                    Allure Hair Couture’s Google Business Profile, Meta Business Suite assets, and WhatsApp Business API are verified with identical NAP coordinates (1 Village Lane, Shop 5, Hemel & Aarde Village, Hermanus) and primary contact numbers. Campaign links are fully operational.
                  </p>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};
