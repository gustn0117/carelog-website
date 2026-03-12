import CTA from "@/components/CTA";

/* ── Decorative SVG Components ── */

function WaveDivider({ flip = false, color = "#f8f7f4" }: { flip?: boolean; color?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[60px] md:h-[80px]">
        <path
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Circle top-right */}
      <svg className="absolute -top-10 -right-10 w-64 h-64 opacity-10 animate-float" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" fill="none" stroke="#3a6670" strokeWidth="2" strokeDasharray="12 8" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#c5a55a" strokeWidth="1.5" strokeDasharray="6 6" />
      </svg>
      {/* Cross left */}
      <svg className="absolute top-1/3 -left-6 w-20 h-20 opacity-[0.08]" viewBox="0 0 40 40" style={{ animationDelay: "2s", animationDuration: "8s" }}>
        <line x1="0" y1="20" x2="40" y2="20" stroke="#3a6670" strokeWidth="3" />
        <line x1="20" y1="0" x2="20" y2="40" stroke="#3a6670" strokeWidth="3" />
      </svg>
      {/* Dots bottom-right */}
      <svg className="absolute bottom-10 right-16 w-32 h-32 opacity-[0.07]" viewBox="0 0 100 100">
        {[0, 1, 2, 3, 4].map(r =>
          [0, 1, 2, 3, 4].map(c => (
            <circle key={`${r}-${c}`} cx={10 + c * 20} cy={10 + r * 20} r="2.5" fill="#3a6670" />
          ))
        )}
      </svg>
      {/* Diamond middle-left */}
      <svg className="absolute top-2/3 left-10 w-12 h-12 opacity-[0.1] animate-pulse-slow" viewBox="0 0 30 30">
        <rect x="15" y="0" width="12" height="12" rx="2" fill="#c5a55a" transform="rotate(45 15 15)" />
      </svg>
    </div>
  );
}

function PainPointIllustration() {
  return (
    <svg viewBox="0 0 320 220" fill="none" className="w-full max-w-xs mx-auto">
      {/* Desk */}
      <rect x="60" y="150" width="200" height="8" rx="3" fill="#d4c9a8" />
      <rect x="80" y="158" width="8" height="40" rx="2" fill="#c5a55a" />
      <rect x="232" y="158" width="8" height="40" rx="2" fill="#c5a55a" />
      {/* Monitor */}
      <rect x="110" y="80" width="100" height="65" rx="6" fill="#2d2d2d" />
      <rect x="116" y="86" width="88" height="50" rx="3" fill="#3a5a3a" />
      {/* Graph going down on screen */}
      <polyline points="124,105 140,100 155,110 170,108 185,120 196,128" stroke="#e74c3c" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="196" cy="128" r="3" fill="#e74c3c" />
      {/* Monitor stand */}
      <rect x="150" y="145" width="20" height="8" rx="1" fill="#555" />
      <rect x="145" y="150" width="30" height="3" rx="1" fill="#666" />
      {/* Person (frustrated doctor) */}
      <circle cx="58" cy="100" r="18" fill="#f0dcc0" />
      {/* Hair */}
      <path d="M40,95 Q42,78 58,78 Q74,78 76,95" fill="#3d2c1a" />
      {/* Eyes closed in frustration */}
      <line x1="50" y1="100" x2="56" y2="100" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="62" y1="100" x2="68" y2="100" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
      {/* Frown */}
      <path d="M52,110 Q58,106 66,110" stroke="#888" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Body */}
      <path d="M40,118 Q35,140 40,150 L76,150 Q80,140 76,118" fill="#ffffff" stroke="#ddd" strokeWidth="1" />
      {/* Stethoscope */}
      <path d="M50,118 Q45,130 50,140" stroke="#3a6670" strokeWidth="1.5" fill="none" />
      <circle cx="50" cy="142" r="3" fill="#3a6670" />
      {/* Hand on head (frustrated) */}
      <ellipse cx="45" cy="88" rx="5" ry="4" fill="#f0dcc0" transform="rotate(-20 45 88)" />
      {/* Money flying away */}
      {[
        { x: 230, y: 40, r: -15, delay: "0s" },
        { x: 260, y: 25, r: 10, delay: "0.5s" },
        { x: 280, y: 55, r: -5, delay: "1s" },
        { x: 250, y: 65, r: 20, delay: "1.5s" },
      ].map((m, i) => (
        <g key={i} transform={`translate(${m.x},${m.y}) rotate(${m.r})`} opacity="0.7">
          <rect width="28" height="14" rx="2" fill="#5a9aa8" />
          <text x="14" y="10.5" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">₩</text>
        </g>
      ))}
      {/* Flying lines from money */}
      <path d="M220,70 Q240,30 270,20" stroke="#c5a55a" strokeWidth="1" fill="none" strokeDasharray="3 3" opacity="0.5" />
      <path d="M225,80 Q250,50 285,45" stroke="#c5a55a" strokeWidth="1" fill="none" strokeDasharray="3 3" opacity="0.5" />
    </svg>
  );
}

function HeartContentSVG() {
  return (
    <svg viewBox="0 0 240 200" fill="none" className="w-full max-w-[220px] mx-auto">
      {/* Heart */}
      <path
        d="M120,170 C60,130 20,90 45,60 C60,42 85,45 100,60 L120,82 L140,60 C155,45 180,42 195,60 C220,90 180,130 120,170Z"
        fill="#3a6670"
        opacity="0.12"
      />
      <path
        d="M120,160 C70,125 35,90 55,65 C67,50 85,52 97,65 L120,90 L143,65 C155,52 173,50 185,65 C205,90 170,125 120,160Z"
        fill="#3a6670"
        opacity="0.25"
      />
      <path
        d="M120,148 C80,120 50,90 65,70 C74,58 88,60 97,70 L120,96 L143,70 C152,60 166,58 175,70 C190,90 160,120 120,148Z"
        fill="#3a6670"
      />
      {/* Document lines flowing from heart */}
      <g opacity="0.6">
        <rect x="155" y="55" width="50" height="3" rx="1.5" fill="#c5a55a" />
        <rect x="160" y="63" width="35" height="2.5" rx="1.25" fill="#c5a55a" opacity="0.7" />
        <rect x="155" y="75" width="45" height="3" rx="1.5" fill="#5a9aa8" />
        <rect x="160" y="83" width="30" height="2.5" rx="1.25" fill="#5a9aa8" opacity="0.7" />
        <rect x="155" y="95" width="40" height="3" rx="1.5" fill="#c5a55a" />
      </g>
      {/* Small floating hearts */}
      <path d="M40,40 C36,34 28,35 32,42 L40,52 L48,42 C52,35 44,34 40,40Z" fill="#5a9aa8" opacity="0.3" />
      <path d="M190,30 C187,25 181,26 184,31 L190,38 L196,31 C199,26 193,25 190,30Z" fill="#c5a55a" opacity="0.4" />
    </svg>
  );
}

function ShieldMapSVG() {
  return (
    <svg viewBox="0 0 240 220" fill="none" className="w-full max-w-[220px] mx-auto">
      {/* Shield */}
      <path
        d="M120,20 L195,50 C195,50 200,130 120,200 C40,130 45,50 45,50 Z"
        fill="#3a6670"
        opacity="0.1"
        stroke="#3a6670"
        strokeWidth="2"
      />
      <path
        d="M120,35 L180,58 C180,58 184,125 120,185 C56,125 60,58 60,58 Z"
        fill="#3a6670"
        opacity="0.15"
      />
      {/* Map pin inside shield */}
      <path
        d="M120,70 C100,70 88,85 88,100 C88,125 120,155 120,155 C120,155 152,125 152,100 C152,85 140,70 120,70Z"
        fill="#3a6670"
        opacity="0.8"
      />
      <circle cx="120" cy="98" r="14" fill="white" opacity="0.9" />
      <circle cx="120" cy="98" r="6" fill="#c5a55a" />
      {/* Shield glow lines */}
      <path d="M45,50 L30,45" stroke="#3a6670" strokeWidth="1.5" opacity="0.2" strokeLinecap="round" />
      <path d="M195,50 L210,45" stroke="#3a6670" strokeWidth="1.5" opacity="0.2" strokeLinecap="round" />
      <path d="M40,90 L25,92" stroke="#3a6670" strokeWidth="1.5" opacity="0.15" strokeLinecap="round" />
      <path d="M200,90 L215,92" stroke="#3a6670" strokeWidth="1.5" opacity="0.15" strokeLinecap="round" />
      {/* Lock icon at bottom */}
      <rect x="110" y="168" width="20" height="14" rx="3" fill="#c5a55a" opacity="0.6" />
      <path d="M115,168 L115,162 C115,158 125,158 125,162 L125,168" stroke="#c5a55a" strokeWidth="2" fill="none" opacity="0.6" />
      <circle cx="120" cy="175" r="2" fill="white" opacity="0.8" />
    </svg>
  );
}

function TargetSVG() {
  return (
    <svg viewBox="0 0 240 220" fill="none" className="w-full max-w-[220px] mx-auto">
      {/* Outer ring */}
      <circle cx="120" cy="115" r="85" fill="none" stroke="#3a6670" strokeWidth="3" opacity="0.15" />
      <circle cx="120" cy="115" r="65" fill="none" stroke="#3a6670" strokeWidth="3" opacity="0.25" />
      <circle cx="120" cy="115" r="45" fill="#3a6670" opacity="0.08" stroke="#3a6670" strokeWidth="3" opacity-stroke="0.35" />
      <circle cx="120" cy="115" r="25" fill="#3a6670" opacity="0.15" stroke="#3a6670" strokeWidth="2" />
      <circle cx="120" cy="115" r="8" fill="#3a6670" />
      {/* Arrow */}
      <line x1="50" y1="45" x2="116" y2="111" stroke="#c5a55a" strokeWidth="3" strokeLinecap="round" />
      {/* Arrow head */}
      <polygon points="120,115 108,105 105,115" fill="#c5a55a" />
      {/* Arrow tail feathers */}
      <line x1="50" y1="45" x2="40" y2="50" stroke="#c5a55a" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="45" x2="55" y2="35" stroke="#c5a55a" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="45" x2="42" y2="38" stroke="#c5a55a" strokeWidth="1.5" strokeLinecap="round" />
      {/* Impact lines */}
      <line x1="130" y1="100" x2="145" y2="88" stroke="#5a9aa8" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="135" y1="115" x2="152" y2="115" stroke="#5a9aa8" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="130" y1="128" x2="145" y2="140" stroke="#5a9aa8" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

function GavelSVG() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-20 h-20 mx-auto mb-4">
      {/* Gavel head */}
      <rect x="35" y="20" width="50" height="18" rx="4" fill="#3a6670" transform="rotate(-35 60 29)" />
      {/* Gavel handle */}
      <rect x="55" y="35" width="8" height="50" rx="3" fill="#c5a55a" transform="rotate(-35 59 60)" />
      {/* Sound block */}
      <rect x="25" y="90" width="70" height="10" rx="4" fill="#3a6670" opacity="0.3" />
      <rect x="30" y="85" width="60" height="8" rx="3" fill="#3a6670" opacity="0.5" />
      {/* Impact lines */}
      <line x1="50" y1="78" x2="45" y2="70" stroke="#c5a55a" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="60" y1="76" x2="60" y2="67" stroke="#c5a55a" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="70" y1="78" x2="75" y2="70" stroke="#c5a55a" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function WarningTriangleSVG({ size = "w-5 h-5" }: { size?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`${size} shrink-0`}>
      <path d="M12 2L1 21h22L12 2z" fill="#e74c3c" opacity="0.15" stroke="#e74c3c" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="12" y1="9" x2="12" y2="15" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="18" r="1" fill="#e74c3c" />
    </svg>
  );
}

function CheckBadgeSVG({ index }: { index: number }) {
  const colors = ["#3a6670", "#c5a55a", "#5a9aa8"];
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16 mx-auto mb-4">
      {/* Medal ribbon */}
      <path d="M30,38 L22,70 L40,58 L58,70 L50,38" fill={colors[index]} opacity="0.15" />
      {/* Circle badge */}
      <circle cx="40" cy="32" r="26" fill={colors[index]} opacity="0.12" />
      <circle cx="40" cy="32" r="20" fill={colors[index]} />
      {/* Checkmark */}
      <polyline points="30,32 37,40 52,24" stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Number */}
      <text x="40" y="68" textAnchor="middle" fontSize="11" fill={colors[index]} fontWeight="bold">
        0{index + 1}
      </text>
    </svg>
  );
}

function AngleDivider({ from = "#ffffff", to = "#f8f7f4" }: { from?: string; to?: string }) {
  return (
    <div className="w-full overflow-hidden leading-[0]">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
        <polygon points="0,0 1440,60 0,60" fill={to} />
        <polygon points="0,0 1440,0 1440,60" fill={from} />
      </svg>
    </div>
  );
}

/* ── Main Page ── */

export default function MarketingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "linear-gradient(160deg, #2a4e56 0%, #3a6670 40%, #4d7d88 70%, #5a9aa8 100%)" }}>
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {/* Large blurred circle */}
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #c5a55a 0%, transparent 70%)" }} />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }} />
          {/* Floating geometric shapes */}
          <svg className="absolute top-20 left-[10%] w-16 h-16 opacity-[0.12] animate-float" viewBox="0 0 40 40">
            <rect x="5" y="5" width="30" height="30" rx="6" fill="none" stroke="white" strokeWidth="2" />
          </svg>
          <svg className="absolute top-40 right-[15%] w-12 h-12 opacity-[0.1] animate-pulse-slow" viewBox="0 0 30 30">
            <circle cx="15" cy="15" r="12" fill="none" stroke="#c5a55a" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
          <svg className="absolute bottom-20 left-[20%] w-10 h-10 opacity-[0.08] animate-float" style={{ animationDelay: "3s" }} viewBox="0 0 20 20">
            <polygon points="10,0 20,20 0,20" fill="white" />
          </svg>
          <svg className="absolute top-32 right-[8%] w-20 h-20 opacity-[0.06]" viewBox="0 0 60 60">
            <line x1="0" y1="30" x2="60" y2="30" stroke="white" strokeWidth="1.5" />
            <line x1="30" y1="0" x2="30" y2="60" stroke="white" strokeWidth="1.5" />
          </svg>
          {/* Dot grid */}
          <svg className="absolute bottom-16 right-[5%] w-40 h-28 opacity-[0.06]" viewBox="0 0 120 80">
            {[0, 1, 2, 3, 4, 5].map(r =>
              [0, 1, 2, 3, 4, 5, 6, 7].map(c => (
                <circle key={`h-${r}-${c}`} cx={5 + c * 16} cy={5 + r * 14} r="1.5" fill="white" />
              ))
            )}
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <p className="text-[#c5a55a] font-medium mb-4 tracking-widest text-sm uppercase animate-fade-up">
            Hospital Marketing
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight animate-fade-up-delay-1">
            병원마케팅이란?
          </h1>
          <p className="text-white/70 max-w-xl mx-auto leading-relaxed text-lg animate-fade-up-delay-2">
            케어로그가 생각하는 병원마케팅의 본질과<br />
            저희만의 차별화된 강점을 소개합니다.
          </p>

          {/* Scroll indicator */}
          <div className="mt-12 animate-fade-up-delay-3">
            <svg className="w-6 h-10 mx-auto opacity-50" viewBox="0 0 24 40">
              <rect x="1" y="1" width="22" height="38" rx="11" fill="none" stroke="white" strokeWidth="2" />
              <circle cx="12" cy="12" r="3" fill="white">
                <animate attributeName="cy" from="10" to="26" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="1" to="0.2" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        </div>

        {/* Bottom wave transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[50px] md:h-[80px]">
            <path d="M0,30 C240,70 480,0 720,35 C960,70 1200,10 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Pain Point */}
      <section className="section-padding bg-white relative">
        <FloatingShapes />
        <div className="container-narrow relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center mb-16">
              <div className="md:col-span-3 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-6">
                  광고비는 쓰는데,<br />왜 환자는 늘지 않을까요?
                </h2>
                <div className="space-y-6 text-muted leading-relaxed text-lg">
                  <p>
                    &quot;매달 마케팅 비용으로 수백만 원을 쓰는데,
                    신환 유입은 그대로입니다.&quot;
                  </p>
                  <p>
                    &quot;상위 노출은 되는데,
                    실제 내원이나 문의로 이어지지 않아요.&quot;
                  </p>
                  <p className="text-dark font-medium">
                    이는 단순히 노출의 문제가 아닙니다.<br />
                    환자가 글을 읽고 나서 &apos;이 병원에 가고 싶다&apos;는 확신이 들지 않았기 때문입니다.
                  </p>
                </div>
              </div>
              <div className="md:col-span-2">
                <PainPointIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="#f8f7f4" />

      {/* Content Sections */}
      <section className="section-padding bg-light relative">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <svg className="absolute top-20 right-0 w-72 h-72 opacity-[0.03]" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="95" fill="none" stroke="#3a6670" strokeWidth="1" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="#3a6670" strokeWidth="1" />
            <circle cx="100" cy="100" r="45" fill="none" stroke="#3a6670" strokeWidth="1" />
          </svg>
        </div>
        <div className="container-narrow space-y-28 relative z-10">
          {/* Section 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary/10 text-secondary text-sm font-bold">01</span>
                <div className="h-px flex-1 bg-secondary/20"></div>
              </div>
              <h2 className="text-2xl font-bold mt-2 mb-4">
                정보가 아닌<br />&apos;공감&apos;을 팝니다
              </h2>
              <p className="text-muted leading-relaxed">
                대부분의 대행사는 교과서적인 질환 설명,
                기계적인 장비 소개에 급급합니다.
                하지만 저희는 다릅니다.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                환자가 검색창에 질환명을 입력할 때의 불안한 심정을 먼저 읽고,
                &apos;이 병원이라면 괜찮겠다&apos;는 확신을 주는 콘텐츠를 만듭니다.
              </p>
              {/* SVG Illustration */}
              <div className="mt-6">
                <HeartContentSVG />
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-soft card-hover">
              <div className="mb-6 pb-6 border-b border-red-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-red-400"></span>
                  <p className="text-sm text-red-400 font-medium">Before</p>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed line-through decoration-gray-300">
                  &quot;임플란트는 인공 치아를 식립하는 수술로 종류에는 오스템, 덴티움이 있으며...&quot;
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
                  <p className="text-sm text-primary font-medium">After</p>
                </div>
                <p className="text-dark text-sm leading-relaxed">
                  &quot;치과 공포증 때문에 10년을 미루셨죠?
                  수면 마취를 통해 &apos;자고 일어나면 끝나는&apos; 편안함을 약속드립니다.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Section divider */}
          <div className="flex items-center justify-center gap-4" aria-hidden="true">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/20"></div>
            <svg className="w-4 h-4 text-primary/20" viewBox="0 0 16 16"><circle cx="8" cy="8" r="3" fill="currentColor" /></svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/20"></div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-soft card-hover order-2 md:order-1">
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-red-50/50 rounded-lg p-3">
                  <span className="text-red-400 text-lg mt-0.5">✕</span>
                  <p className="text-gray-500 text-sm">A 병원의 장점을 부각하는 글을 쓰고, 곧이어 옆 건물의 B 병원이 더 좋다는 글을 쓴다면?</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-start gap-3 bg-primary/5 rounded-lg p-3">
                    <span className="text-primary text-lg mt-0.5">✓</span>
                    <p className="text-dark text-sm">한 지역, 한 종류의 병원만 담당하여 해당 지역 내 독보적인 1등 병원으로 만듭니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary/10 text-secondary text-sm font-bold">02</span>
                <div className="h-px flex-1 bg-secondary/20"></div>
              </div>
              <h2 className="text-2xl font-bold mt-2 mb-4">
                &apos;지역 독점&apos;으로<br />병원을 보호합니다
              </h2>
              <p className="text-muted leading-relaxed">
                저희는 한 지역에서는 한 종류의 병원(진료과목)만 담당합니다.
                이는 단순한 계약 조건이 아닌, 원장님의 병원을 지키기 위한 원칙입니다.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                원장님의 병원 브랜드 가치를 보호하고, 해당 지역 내에서
                독보적인 1등 병원으로 만들어 드립니다.
              </p>
              {/* SVG Illustration */}
              <div className="mt-6">
                <ShieldMapSVG />
              </div>
            </div>
          </div>

          {/* Section divider */}
          <div className="flex items-center justify-center gap-4" aria-hidden="true">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/20"></div>
            <svg className="w-4 h-4 text-primary/20" viewBox="0 0 16 16"><circle cx="8" cy="8" r="3" fill="currentColor" /></svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/20"></div>
          </div>

          {/* Section 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary/10 text-secondary text-sm font-bold">03</span>
                <div className="h-px flex-1 bg-secondary/20"></div>
              </div>
              <h2 className="text-2xl font-bold mt-2 mb-4">
                &apos;모두&apos;가 아닌<br />&apos;하나&apos;에 집중합니다
              </h2>
              <p className="text-muted leading-relaxed">
                저희는 원장님과의 심층 인터뷰를 통해 병원의 가장 강력한
                무기(주력 진료)를 발굴합니다.
                &apos;모든 것을 잘한다&apos;는 표현 대신, 확실한 한 가지에 집중합니다.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                환자들에게 &quot;아, 거기는 OO 치료를 정말 잘하는 곳이지&quot;라는
                인식을 심어드립니다. 하나의 확실한 킬러 콘텐츠가 자리 잡으면,
                다른 진료 과목의 매출은 자연스럽게 따라옵니다.
              </p>
              {/* SVG Illustration */}
              <div className="mt-6">
                <TargetSVG />
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-soft card-hover">
              <p className="text-xs text-muted mb-4 font-medium uppercase tracking-wider">분산된 마케팅</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-gray-300 text-sm w-16">임플란트</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-2">
                    <div className="bg-gray-300 rounded-full h-2 w-1/3"></div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-300 text-sm w-16">교정</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-2">
                    <div className="bg-gray-300 rounded-full h-2 w-1/4"></div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-300 text-sm w-16">소아</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-2">
                    <div className="bg-gray-300 rounded-full h-2 w-1/5"></div>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-4 h-4 text-primary" viewBox="0 0 16 16" fill="none">
                      <path d="M8,1 L10,6 L15,6 L11,9.5 L12.5,15 L8,11.5 L3.5,15 L5,9.5 L1,6 L6,6Z" fill="currentColor" />
                    </svg>
                    <p className="text-xs text-primary font-medium uppercase tracking-wider">선택과 집중 후</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-primary text-sm font-medium w-16">주력 진료</span>
                    <div className="flex-1 bg-primary/10 rounded-full h-3">
                      <div className="bg-primary rounded-full h-3 w-4/5 relative">
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] text-white font-bold">80%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AngleDivider from="#f8f7f4" to="#ffffff" />

      {/* Medical Ad Regulation */}
      <section className="section-padding bg-white relative">
        {/* Subtle decorative bg */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <svg className="absolute -bottom-10 -left-10 w-60 h-60 opacity-[0.03]" viewBox="0 0 200 200">
            <path d="M100,10 L190,60 L190,140 L100,190 L10,140 L10,60 Z" fill="none" stroke="#3a6670" strokeWidth="2" />
          </svg>
        </div>

        <div className="container-narrow relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3 tracking-widest text-sm uppercase">Compliance</p>
            <GavelSVG />
            <h2 className="text-3xl font-bold mb-4">
              의료광고 규제,<br />대행사가 반드시 알아야 하는 이유
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              의료광고는 일반 상품 광고와 본질적으로 다릅니다.
              사람의 생명과 건강을 다루기에 법적 규제가 매우 까다롭습니다.
              광고를 만든 대행사는 사라져도, 책임은 원장님과 병원에 남습니다.
            </p>
          </div>

          {/* 의료법 제56조 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-light rounded-2xl p-8 border border-red-100/50">
              {/* Law book SVG header */}
              <div className="flex items-center gap-3 mb-6">
                <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 shrink-0">
                  {/* Book */}
                  <rect x="6" y="5" width="28" height="32" rx="2" fill="#3a6670" opacity="0.15" />
                  <rect x="8" y="7" width="24" height="28" rx="1" fill="#3a6670" opacity="0.25" />
                  <line x1="14" y1="7" x2="14" y2="35" stroke="#3a6670" strokeWidth="1.5" opacity="0.3" />
                  {/* Lines on page */}
                  <line x1="18" y1="14" x2="28" y2="14" stroke="white" strokeWidth="1" opacity="0.6" />
                  <line x1="18" y1="18" x2="26" y2="18" stroke="white" strokeWidth="1" opacity="0.6" />
                  <line x1="18" y1="22" x2="27" y2="22" stroke="white" strokeWidth="1" opacity="0.6" />
                  {/* Paragraph symbol */}
                  <text x="20" y="30" fontSize="8" fill="white" opacity="0.7" fontWeight="bold">§</text>
                </svg>
                <p className="text-sm font-bold text-dark">의료법 제56조 — 금지되는 광고</p>
              </div>
              <div className="space-y-4">
                {[
                  { type: "거짓·과장 광고", examples: ["\"100% 완치\"", "\"부작용 전혀 없음\"", "\"국내 유일\" (근거 없이)"] },
                  { type: "비교 광고", examples: ["\"○○병원보다 안전\"", "\"○○병원보다 성공률 높음\""] },
                  { type: "보장·단정 표현", examples: ["\"재발 걱정 없습니다\"", "\"한 번에 끝납니다\""] },
                  { type: "과도한 유도 광고", examples: ["전·후 사진 무분별 사용", "치료 효과 보장 오인 유도"] },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-sm font-medium text-dark mb-1">{item.type}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.examples.map((ex, j) => (
                        <span key={j} className="text-xs text-red-400 bg-red-50 px-2 py-1 rounded border border-red-100">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-dark mb-6 flex items-center gap-2">
                <WarningTriangleSVG size="w-5 h-5" />
                위반 시 발생하는 문제
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "블로그 게시글 반복 삭제·비공개 처리",
                  "의료광고 심의 반려",
                  "보건소 시정 명령",
                  "과태료 부과",
                  "병원 이미지 실추",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-red-50/50 rounded-lg p-3 border border-red-100/40">
                    <WarningTriangleSVG size="w-4 h-4" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                <p className="text-sm text-muted leading-relaxed">
                  의료광고는 위임했다고 해서 법적 책임이 면제되지 않습니다.
                  &apos;노출&apos;만 잘하는 곳이 아닌, &apos;병원을 지킬 줄 아는&apos; 파트너와 함께하셔야 합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Before/After 표현 */}
          <div className="mb-20">
            <h3 className="text-xl font-bold text-center mb-8">
              좋은 병원 마케팅은 이렇게 접근합니다
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  before: "\"최고의 시술입니다\"",
                  after: "\"○○학회 연수 수료 및 관련 진료 다수 경험 보유\"",
                },
                {
                  before: "\"부작용 없습니다\"",
                  after: "\"시술 전 충분한 상담을 통해 개인별 상태를 확인합니다\"",
                },
                {
                  before: "\"100% 만족 보장\"",
                  after: "\"개인별 차이를 고려한 맞춤 계획을 수립합니다\"",
                },
              ].map((item, i) => (
                <div key={i} className="bg-light rounded-xl overflow-hidden shadow-soft card-hover">
                  {/* Before - red tinted top */}
                  <div className="p-5 bg-gradient-to-b from-red-50/80 to-red-50/30 border-b border-red-100/40">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="6" stroke="#e74c3c" strokeWidth="1.5" />
                        <line x1="4" y1="4" x2="10" y2="10" stroke="#e74c3c" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="10" y1="4" x2="4" y2="10" stroke="#e74c3c" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <span className="text-xs text-red-400 font-medium">Before</span>
                    </div>
                    <p className="text-sm text-gray-500 line-through">{item.before}</p>
                  </div>
                  {/* After - green tinted bottom */}
                  <div className="p-5 bg-gradient-to-b from-green-50/30 to-green-50/60">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="6" stroke="#3a6670" strokeWidth="1.5" />
                        <polyline points="4,7 6.5,10 10,4.5" stroke="#3a6670" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-xs text-primary font-medium">After</span>
                    </div>
                    <p className="text-sm text-dark font-medium">{item.after}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-muted text-sm mt-6">
              자극적인 표현을 빼는 것이 아니라, &apos;근거 중심 구조&apos;로 설계합니다.
            </p>
          </div>

          {/* 케어로그의 약속 */}
          <div className="relative bg-gradient-to-br from-primary/5 via-primary/8 to-accent/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center overflow-hidden">
            {/* Decorative shield behind */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]" aria-hidden="true">
              <svg viewBox="0 0 200 240" className="w-48 h-56">
                <path d="M100,10 L180,45 C180,45 185,140 100,220 C15,140 20,45 20,45 Z" fill="#3a6670" stroke="#3a6670" strokeWidth="2" />
              </svg>
            </div>
            <div className="relative z-10">
              <svg viewBox="0 0 60 60" fill="none" className="w-14 h-14 mx-auto mb-4">
                <circle cx="30" cy="30" r="26" fill="#3a6670" opacity="0.1" />
                <circle cx="30" cy="30" r="18" fill="#3a6670" opacity="0.2" />
                <path d="M30,12 L38,18 C38,18 40,35 30,48 C20,35 22,18 22,18 Z" fill="#3a6670" />
                <polyline points="25,28 29,33 36,23" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="text-xl font-bold mb-4">
                법적 리스크는 저희가 관리합니다
              </h3>
              <p className="text-muted leading-relaxed max-w-2xl mx-auto mb-6">
                시시각각 변하는 의료법 가이드라인을 모니터링하고,
                혹시 모를 민원 발생 가능성까지 사전에 차단합니다.
                의료광고 심의 기준을 철저히 분석하여,
                법적 테두리 안에서 병원의 매력을 극대화하는 전략을 수립합니다.
              </p>
              <p className="text-primary font-medium text-sm">
                원장님께서는 진료에만 집중해 주십시오.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="#f8f7f4" />

      {/* Summary */}
      <section className="section-padding bg-light relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <svg className="absolute top-10 left-[5%] w-24 h-24 opacity-[0.04]" viewBox="0 0 80 80">
            <polygon points="40,5 75,25 75,55 40,75 5,55 5,25" fill="none" stroke="#3a6670" strokeWidth="2" />
          </svg>
          <svg className="absolute bottom-10 right-[8%] w-20 h-20 opacity-[0.04]" viewBox="0 0 60 60">
            <rect x="10" y="10" width="40" height="40" rx="8" fill="none" stroke="#c5a55a" strokeWidth="2" transform="rotate(15 30 30)" />
          </svg>
        </div>
        <div className="container-narrow relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <svg viewBox="0 0 60 60" fill="none" className="w-12 h-12 mx-auto mb-4 opacity-60">
              <path d="M30,5 L35,20 L50,20 L38,28 L42,45 L30,35 L18,45 L22,28 L10,20 L25,20Z" fill="#c5a55a" />
            </svg>
            <h2 className="text-3xl font-bold mb-8">
              케어로그의 3가지 약속
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              "환자의 마음을 읽는\n공감 콘텐츠를 만듭니다",
              "지역 독점 원칙으로\n병원의 가치를 보호합니다",
              "선택과 집중으로\n확실한 브랜드를 만듭니다",
            ].map((text, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 text-center shadow-soft card-hover border border-gray-100"
              >
                <CheckBadgeSVG index={i} />
                <p className="text-dark font-medium text-sm whitespace-pre-line leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip color="#1a1a1a" />

      <CTA />
    </>
  );
}
