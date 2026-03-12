import Link from "next/link";
import CTA from "@/components/CTA";

const packages = [
  {
    name: "핵심 서비스",
    price: "195",
    description: "개원 초기 또는 소규모 병원을 위한 필수 마케팅 패키지",
    features: [
      "첫 달 필수 브랜딩",
      "브랜드블로그 14건",
      "홈페이지형 블로그 제작 첫 달 1회",
      "블로그 컨셉 셋팅",
      "네이버 스마트 플레이스 최적화",
    ],
    highlight: false,
  },
  {
    name: "끝장 서비스",
    price: "365",
    description: "본격적인 온라인 마케팅 확장을 원하는 병원을 위한 풀 패키지",
    features: [
      "첫 달 필수 브랜딩",
      "브랜드블로그 21건",
      "홈페이지형 블로그 제작 첫 달 1회",
      "블로그 컨셉 셋팅",
      "블로그 체험단 4회",
      "네이버카페 5세트 (원고 + 댓글 + 대댓글)",
      "네이버 스마트 플레이스 최적화",
      "월 50만 바이럴 스레드 (월 10회)",
      "월말 성과분석 리포트",
      "매월 1회 전략미팅 & 컨설팅",
    ],
    highlight: true,
  },
  {
    name: "마스터 패키지",
    price: "595",
    description: "다채널 마케팅으로 지역 내 브랜드 1위를 목표로 하는 병원",
    features: [
      "첫 달 필수 브랜딩",
      "브랜드블로그 39건 (2개 채널)",
      "홈페이지형 블로그 제작 첫 달 1회",
      "블로그 컨셉 셋팅",
      "이미지 무료디자인 (월 1회)",
      "월 50만 바이럴 스레드 (월 19회)",
      "블로그 체험단 5회",
      "네이버카페 10세트 (원고 + 댓글 + 대댓글)",
      "네이버 스마트 플레이스 최적화",
      "월말 성과분석 리포트",
      "매월 1회 전략미팅 & 컨설팅",
      "언론보도 1회 (3개월 이상 계약시 서비스)",
    ],
    highlight: false,
  },
];

{/* ── SVG Illustration Components ── */}

function PhoneMapSVG() {
  return (
    <svg viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[260px] mx-auto">
      {/* Phone body */}
      <rect x="60" y="20" width="160" height="280" rx="24" fill="#1a1a1a" />
      <rect x="68" y="40" width="144" height="240" rx="4" fill="#f8f7f4" />
      {/* Notch */}
      <rect x="110" y="26" width="60" height="8" rx="4" fill="#333" />
      {/* Map content */}
      <rect x="68" y="40" width="144" height="120" fill="#e8f0e4" />
      {/* Roads */}
      <line x1="68" y1="90" x2="212" y2="90" stroke="#fff" strokeWidth="3" />
      <line x1="140" y1="40" x2="140" y2="160" stroke="#fff" strokeWidth="3" />
      <line x1="100" y1="60" x2="180" y2="140" stroke="#fff" strokeWidth="2" opacity="0.5" />
      {/* Location pins */}
      <g>
        <circle cx="140" cy="85" r="12" fill="#3a6670" />
        <circle cx="140" cy="85" r="5" fill="white" />
        <path d="M140 97 L140 105" stroke="#3a6670" strokeWidth="3" />
        <text x="140" y="89" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">1</text>
      </g>
      <g opacity="0.6">
        <circle cx="110" cy="115" r="8" fill="#c5a55a" />
        <circle cx="110" cy="115" r="3" fill="white" />
      </g>
      <g opacity="0.6">
        <circle cx="175" cy="70" r="8" fill="#c5a55a" />
        <circle cx="175" cy="70" r="3" fill="white" />
      </g>
      {/* Search bar */}
      <rect x="78" y="168" width="124" height="28" rx="14" fill="white" stroke="#ddd" strokeWidth="1" />
      <circle cx="94" cy="182" r="6" stroke="#3a6670" strokeWidth="1.5" fill="none" />
      <line x1="99" y1="187" x2="102" y2="190" stroke="#3a6670" strokeWidth="1.5" />
      <text x="110" y="186" fill="#999" fontSize="8">OO동 정형외과</text>
      {/* List items */}
      <rect x="78" y="204" width="124" height="24" rx="4" fill="white" stroke="#e5e5e5" strokeWidth="0.5" />
      <circle cx="92" cy="216" r="4" fill="#3a6670" />
      <text x="92" y="219" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">1</text>
      <rect x="102" y="211" width="60" height="4" rx="2" fill="#3a6670" opacity="0.7" />
      <rect x="102" y="219" width="40" height="3" rx="1.5" fill="#ccc" />
      <rect x="78" y="232" width="124" height="24" rx="4" fill="white" stroke="#e5e5e5" strokeWidth="0.5" />
      <circle cx="92" cy="244" r="4" fill="#aaa" />
      <text x="92" y="247" textAnchor="middle" fill="white" fontSize="5">2</text>
      <rect x="102" y="239" width="55" height="4" rx="2" fill="#aaa" opacity="0.5" />
      <rect x="102" y="247" width="35" height="3" rx="1.5" fill="#ddd" />
      <rect x="78" y="260" width="124" height="24" rx="4" fill="white" stroke="#e5e5e5" strokeWidth="0.5" />
      <circle cx="92" cy="272" r="4" fill="#ccc" />
      <text x="92" y="275" textAnchor="middle" fill="white" fontSize="5">3</text>
      <rect x="102" y="267" width="50" height="4" rx="2" fill="#ccc" opacity="0.5" />
      <rect x="102" y="275" width="30" height="3" rx="1.5" fill="#e5e5e5" />
    </svg>
  );
}

function MagnifyingGearSVG() {
  return (
    <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[240px] mx-auto">
      {/* Background circle */}
      <circle cx="130" cy="120" r="80" fill="#f8f7f4" stroke="#3a6670" strokeWidth="2" strokeDasharray="6 4" />
      {/* Magnifying glass */}
      <circle cx="130" cy="115" r="55" fill="white" stroke="#3a6670" strokeWidth="4" />
      <line x1="170" y1="155" x2="210" y2="195" stroke="#3a6670" strokeWidth="8" strokeLinecap="round" />
      {/* Gear inside magnifying glass */}
      <g transform="translate(130,115)">
        <path d="M0-30 L6-28 L8-22 L14-20 L18-26 L24-22 L22-16 L26-10 L32-10 L32-2 L26 2 L28 8 L22 12 L24 18 L18 20 L14 14 L8 16 L6 22 L0 24 L-6 22 L-8 16 L-14 14 L-18 20 L-24 18 L-22 12 L-28 8 L-26 2 L-32-2 L-32-10 L-26-10 L-22-16 L-24-22 L-18-26 L-14-20 L-8-22 L-6-28Z" fill="#3a6670" opacity="0.15" />
        <circle r="18" fill="none" stroke="#3a6670" strokeWidth="2" />
        <circle r="8" fill="#3a6670" opacity="0.3" />
        {/* Mini gear teeth */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <rect key={i} x="-3" y="-22" width="6" height="8" rx="1" fill="#3a6670" opacity="0.2" transform={`rotate(${angle})`} />
        ))}
      </g>
      {/* Floating checkmarks */}
      <g transform="translate(200, 60)">
        <circle r="14" fill="#5a9aa8" opacity="0.15" />
        <path d="M-5 0 L-1 4 L6-4" stroke="#3a6670" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g transform="translate(60, 180)">
        <circle r="12" fill="#5a9aa8" opacity="0.15" />
        <path d="M-4 0 L-1 3 L5-3" stroke="#3a6670" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      {/* Data dots */}
      <circle cx="220" cy="140" r="4" fill="#c5a55a" opacity="0.5" />
      <circle cx="50" cy="80" r="3" fill="#c5a55a" opacity="0.4" />
      <circle cx="240" cy="100" r="5" fill="#3a6670" opacity="0.1" />
    </svg>
  );
}

function ConversionFunnelSVG() {
  return (
    <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[240px] mx-auto">
      {/* Funnel */}
      <path d="M40 40 L240 40 L170 140 L170 220 L110 220 L110 140 Z" fill="#3a6670" opacity="0.08" stroke="#3a6670" strokeWidth="2" />
      {/* Funnel layers */}
      <rect x="50" y="50" width="180" height="25" rx="4" fill="#3a6670" opacity="0.12" />
      <text x="140" y="67" textAnchor="middle" fill="#3a6670" fontSize="9" fontWeight="600">검색 유입</text>
      <rect x="75" y="85" width="130" height="25" rx="4" fill="#3a6670" opacity="0.2" />
      <text x="140" y="102" textAnchor="middle" fill="#3a6670" fontSize="9" fontWeight="600">플레이스 클릭</text>
      <rect x="95" y="120" width="90" height="25" rx="4" fill="#3a6670" opacity="0.3" />
      <text x="140" y="137" textAnchor="middle" fill="#3a6670" fontSize="9" fontWeight="600">정보 확인</text>
      <rect x="110" y="155" width="60" height="25" rx="4" fill="#3a6670" opacity="0.5" />
      <text x="140" y="172" textAnchor="middle" fill="white" fontSize="9" fontWeight="600">예약</text>
      {/* Arrow at bottom */}
      <path d="M130 195 L140 210 L150 195" fill="none" stroke="#c5a55a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M130 205 L140 220 L150 205" fill="none" stroke="#c5a55a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      {/* Conversion rate labels */}
      <text x="245" y="62" fill="#999" fontSize="8">100%</text>
      <text x="215" y="97" fill="#999" fontSize="8">62%</text>
      <text x="195" y="132" fill="#999" fontSize="8">38%</text>
      <text x="180" y="167" fill="#c5a55a" fontSize="8" fontWeight="bold">24%</text>
      {/* People icons at top */}
      {[60, 90, 120, 140, 160, 190, 220].map((x, i) => (
        <g key={i} opacity={0.3 + i * 0.05}>
          <circle cx={x} cy="30" r="4" fill="#3a6670" />
          <ellipse cx={x} cy="38" rx="3" ry="2" fill="#3a6670" opacity="0.5" />
        </g>
      ))}
      {/* Star at bottom */}
      <g transform="translate(140, 245)">
        <path d="M0-10 L3-3 L10-3 L5 2 L7 10 L0 6 L-7 10 L-5 2 L-10-3 L-3-3Z" fill="#c5a55a" opacity="0.6" />
      </g>
    </svg>
  );
}

function ChartReportSVG() {
  return (
    <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[240px] mx-auto">
      {/* Document */}
      <rect x="50" y="20" width="180" height="240" rx="12" fill="white" stroke="#e5e5e5" strokeWidth="1.5" />
      <rect x="50" y="20" width="180" height="50" rx="12" fill="#3a6670" opacity="0.08" />
      {/* Header */}
      <rect x="70" y="35" width="80" height="6" rx="3" fill="#3a6670" opacity="0.4" />
      <rect x="70" y="48" width="50" height="4" rx="2" fill="#999" opacity="0.4" />
      <rect x="190" y="32" width="24" height="24" rx="6" fill="#3a6670" opacity="0.15" />
      <path d="M197 44 L202 40 L207 46 L212 38" stroke="#3a6670" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Bar chart */}
      <rect x="75" y="140" width="18" height="50" rx="3" fill="#3a6670" opacity="0.15" />
      <rect x="100" y="120" width="18" height="70" rx="3" fill="#3a6670" opacity="0.25" />
      <rect x="125" y="105" width="18" height="85" rx="3" fill="#3a6670" opacity="0.35" />
      <rect x="150" y="95" width="18" height="95" rx="3" fill="#3a6670" opacity="0.5" />
      <rect x="175" y="80" width="18" height="110" rx="3" fill="#3a6670" opacity="0.7" />
      <line x1="70" y1="192" x2="205" y2="192" stroke="#e5e5e5" strokeWidth="1" />
      {/* Trend line */}
      <path d="M84 135 L109 115 L134 100 L159 88 L184 75" stroke="#c5a55a" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="4 3" />
      <circle cx="184" cy="75" r="4" fill="#c5a55a" />
      {/* Stats at bottom */}
      <rect x="70" y="205" width="70" height="20" rx="4" fill="#3a6670" opacity="0.06" />
      <rect x="78" y="210" width="30" height="4" rx="2" fill="#3a6670" opacity="0.3" />
      <rect x="78" y="218" width="50" height="3" rx="1.5" fill="#ccc" />
      <rect x="150" y="205" width="70" height="20" rx="4" fill="#c5a55a" opacity="0.1" />
      <rect x="158" y="210" width="25" height="4" rx="2" fill="#c5a55a" opacity="0.5" />
      <rect x="158" y="218" width="45" height="3" rx="1.5" fill="#ccc" />
      {/* Up arrow indicator */}
      <g transform="translate(240, 80)">
        <circle r="16" fill="#5a9aa8" opacity="0.12" />
        <path d="M0 6 L0-6 M-5-2 L0-6 L5-2" stroke="#3a6670" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function TargetBullseyeSVG() {
  return (
    <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[200px] mx-auto">
      <circle cx="120" cy="120" r="90" fill="#3a6670" opacity="0.05" stroke="#3a6670" strokeWidth="1.5" />
      <circle cx="120" cy="120" r="65" fill="#3a6670" opacity="0.08" stroke="#3a6670" strokeWidth="1.5" />
      <circle cx="120" cy="120" r="40" fill="#3a6670" opacity="0.12" stroke="#3a6670" strokeWidth="1.5" />
      <circle cx="120" cy="120" r="16" fill="#3a6670" opacity="0.8" />
      <circle cx="120" cy="120" r="6" fill="white" />
      {/* Arrow */}
      <line x1="180" y1="60" x2="128" y2="112" stroke="#c5a55a" strokeWidth="2.5" />
      <polygon points="126,114 132,106 138,112" fill="#c5a55a" />
      <line x1="180" y1="60" x2="195" y2="50" stroke="#c5a55a" strokeWidth="2" />
      <line x1="180" y1="60" x2="190" y2="65" stroke="#c5a55a" strokeWidth="2" />
      {/* Keyword labels floating */}
      <g transform="translate(30, 50)">
        <rect width="65" height="20" rx="10" fill="#3a6670" opacity="0.1" />
        <text x="32" y="14" textAnchor="middle" fill="#3a6670" fontSize="7" fontWeight="500">세부 키워드</text>
      </g>
      <g transform="translate(165, 185)">
        <rect width="60" height="20" rx="10" fill="#c5a55a" opacity="0.15" />
        <text x="30" y="14" textAnchor="middle" fill="#c5a55a" fontSize="7" fontWeight="500">전환 높음</text>
      </g>
    </svg>
  );
}

function HeartSpeechSVG() {
  return (
    <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[200px] mx-auto">
      {/* Speech bubble */}
      <path d="M40 50 Q40 30 60 30 L180 30 Q200 30 200 50 L200 140 Q200 160 180 160 L100 160 L70 190 L75 160 L60 160 Q40 160 40 140Z" fill="white" stroke="#3a6670" strokeWidth="2" />
      {/* Heart inside */}
      <g transform="translate(120, 90)">
        <path d="M0-20 C-10-35 -35-25 -30-10 C-25 5 0 25 0 25 C0 25 25 5 30-10 C35-25 10-35 0-20Z" fill="#3a6670" opacity="0.15" stroke="#3a6670" strokeWidth="2" />
      </g>
      {/* Small hearts */}
      <g transform="translate(55, 70) scale(0.3)">
        <path d="M0-15 C-8-25 -25-18 -20-5 C-15 8 0 20 0 20 C0 20 15 8 20-5 C25-18 8-25 0-15Z" fill="#c5a55a" opacity="0.4" />
      </g>
      <g transform="translate(185, 55) scale(0.25)">
        <path d="M0-15 C-8-25 -25-18 -20-5 C-15 8 0 20 0 20 C0 20 15 8 20-5 C25-18 8-25 0-15Z" fill="#5a9aa8" opacity="0.4" />
      </g>
      {/* Text lines */}
      <rect x="75" y="125" width="90" height="4" rx="2" fill="#3a6670" opacity="0.15" />
      <rect x="85" y="135" width="70" height="4" rx="2" fill="#3a6670" opacity="0.1" />
      {/* Sparkles */}
      <g transform="translate(210, 40)">
        <line x1="0" y1="-8" x2="0" y2="8" stroke="#c5a55a" strokeWidth="1.5" />
        <line x1="-8" y1="0" x2="8" y2="0" stroke="#c5a55a" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

function ShieldLawSVG() {
  return (
    <svg viewBox="0 0 240 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[200px] mx-auto">
      {/* Shield */}
      <path d="M120 20 L200 55 L200 140 Q200 200 120 240 Q40 200 40 140 L40 55Z" fill="#3a6670" opacity="0.07" stroke="#3a6670" strokeWidth="2.5" />
      <path d="M120 45 L180 70 L180 135 Q180 180 120 210 Q60 180 60 135 L60 70Z" fill="#3a6670" opacity="0.05" />
      {/* Book icon inside */}
      <g transform="translate(95, 95)">
        <rect x="0" y="5" width="50" height="60" rx="3" fill="white" stroke="#3a6670" strokeWidth="1.5" />
        <line x1="25" y1="5" x2="25" y2="65" stroke="#3a6670" strokeWidth="1" opacity="0.3" />
        <rect x="8" y="15" width="14" height="3" rx="1.5" fill="#3a6670" opacity="0.3" />
        <rect x="8" y="22" width="12" height="3" rx="1.5" fill="#3a6670" opacity="0.2" />
        <rect x="8" y="29" width="14" height="3" rx="1.5" fill="#3a6670" opacity="0.3" />
        <rect x="28" y="15" width="14" height="3" rx="1.5" fill="#3a6670" opacity="0.3" />
        <rect x="28" y="22" width="12" height="3" rx="1.5" fill="#3a6670" opacity="0.2" />
        <rect x="28" y="29" width="14" height="3" rx="1.5" fill="#3a6670" opacity="0.3" />
        {/* Gavel */}
        <rect x="15" y="42" width="20" height="5" rx="2" fill="#c5a55a" opacity="0.6" />
        <rect x="23" y="38" width="4" height="15" rx="2" fill="#c5a55a" opacity="0.4" />
      </g>
      {/* Checkmark on shield */}
      <g transform="translate(120, 72)">
        <circle r="14" fill="#3a6670" opacity="0.15" />
        <path d="M-6 0 L-2 5 L7-5" stroke="#3a6670" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function PeopleTalkingSVG() {
  return (
    <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[260px] mx-auto">
      {/* Person 1 */}
      <circle cx="70" cy="140" r="20" fill="#3a6670" opacity="0.15" />
      <circle cx="70" cy="130" r="12" fill="#3a6670" opacity="0.2" />
      <ellipse cx="70" cy="160" rx="15" ry="20" fill="#3a6670" opacity="0.1" />
      {/* Person 2 */}
      <circle cx="150" cy="150" r="22" fill="#5a9aa8" opacity="0.15" />
      <circle cx="150" cy="138" r="14" fill="#5a9aa8" opacity="0.2" />
      <ellipse cx="150" cy="172" rx="16" ry="22" fill="#5a9aa8" opacity="0.1" />
      {/* Person 3 */}
      <circle cx="230" cy="140" r="20" fill="#c5a55a" opacity="0.15" />
      <circle cx="230" cy="130" r="12" fill="#c5a55a" opacity="0.2" />
      <ellipse cx="230" cy="160" rx="15" ry="20" fill="#c5a55a" opacity="0.1" />
      {/* Speech bubble 1 */}
      <g transform="translate(40, 40)">
        <path d="M0 30 Q0 0 30 0 L80 0 Q110 0 110 30 L110 40 Q110 60 80 60 L35 60 L20 78 L25 60 L30 60 Q0 60 0 40Z" fill="white" stroke="#3a6670" strokeWidth="1.5" />
        <rect x="15" y="15" width="50" height="4" rx="2" fill="#3a6670" opacity="0.2" />
        <rect x="15" y="25" width="80" height="4" rx="2" fill="#3a6670" opacity="0.15" />
        <rect x="15" y="35" width="65" height="4" rx="2" fill="#3a6670" opacity="0.1" />
        <text x="82" y="50" fill="#3a6670" fontSize="10" opacity="0.4">+1</text>
      </g>
      {/* Speech bubble 2 */}
      <g transform="translate(170, 30)">
        <path d="M0 25 Q0 0 25 0 L80 0 Q105 0 105 25 L105 45 Q105 60 80 60 L35 60 L70 78 L60 58 L80 60 Q105 60 105 45" fill="white" stroke="#c5a55a" strokeWidth="1.5" />
        <rect x="15" y="14" width="60" height="4" rx="2" fill="#c5a55a" opacity="0.25" />
        <rect x="15" y="24" width="75" height="4" rx="2" fill="#c5a55a" opacity="0.2" />
        <rect x="15" y="34" width="50" height="4" rx="2" fill="#c5a55a" opacity="0.15" />
      </g>
      {/* Connection lines */}
      <path d="M90 145 Q110 130 130 145" stroke="#3a6670" strokeWidth="1" opacity="0.2" strokeDasharray="3 3" />
      <path d="M170 145 Q190 130 210 145" stroke="#c5a55a" strokeWidth="1" opacity="0.2" strokeDasharray="3 3" />
      {/* Location pins at bottom */}
      <g transform="translate(110, 200)">
        <path d="M0-12 C-8-12 -12-6 -12 0 C-12 8 0 18 0 18 C0 18 12 8 12 0 C12-6 8-12 0-12Z" fill="#3a6670" opacity="0.2" />
        <circle cy="-1" r="4" fill="#3a6670" opacity="0.3" />
      </g>
      <g transform="translate(150, 210)">
        <path d="M0-10 C-7-10 -10-5 -10 0 C-10 7 0 15 0 15 C0 15 10 7 10 0 C10-5 7-10 0-10Z" fill="#5a9aa8" opacity="0.2" />
        <circle cy="-1" r="3" fill="#5a9aa8" opacity="0.3" />
      </g>
      <g transform="translate(190, 205)">
        <path d="M0-10 C-7-10 -10-5 -10 0 C-10 7 0 15 0 15 C0 15 10 7 10 0 C10-5 7-10 0-10Z" fill="#c5a55a" opacity="0.2" />
        <circle cy="-1" r="3" fill="#c5a55a" opacity="0.3" />
      </g>
    </svg>
  );
}

function SeedSproutSVG() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-3">
      {/* Soil */}
      <ellipse cx="40" cy="62" rx="25" ry="6" fill="#3a6670" opacity="0.1" />
      {/* Seed/sprout */}
      <line x1="40" y1="62" x2="40" y2="38" stroke="#3a6670" strokeWidth="2" strokeLinecap="round" />
      {/* Two small leaves */}
      <path d="M40 45 Q32 35 28 40 Q30 48 40 45" fill="#5a9aa8" opacity="0.5" />
      <path d="M40 45 Q48 35 52 40 Q50 48 40 45" fill="#3a6670" opacity="0.4" />
      {/* Tiny seed in ground */}
      <ellipse cx="40" cy="64" rx="5" ry="3" fill="#c5a55a" opacity="0.3" />
    </svg>
  );
}

function TreeSVG() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-3">
      <ellipse cx="40" cy="68" rx="20" ry="5" fill="#3a6670" opacity="0.1" />
      {/* Trunk */}
      <rect x="37" y="48" width="6" height="20" rx="2" fill="#c5a55a" opacity="0.5" />
      {/* Canopy layers */}
      <ellipse cx="40" cy="35" rx="22" ry="20" fill="#3a6670" opacity="0.12" />
      <ellipse cx="40" cy="32" rx="18" ry="16" fill="#5a9aa8" opacity="0.15" />
      <ellipse cx="40" cy="30" rx="14" ry="12" fill="#3a6670" opacity="0.2" />
      {/* Fruit/highlights */}
      <circle cx="30" cy="35" r="3" fill="#c5a55a" opacity="0.4" />
      <circle cx="50" cy="32" r="2.5" fill="#c5a55a" opacity="0.3" />
      <circle cx="40" cy="24" r="2" fill="#c5a55a" opacity="0.5" />
    </svg>
  );
}

function ForestSVG() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-3">
      <ellipse cx="40" cy="70" rx="35" ry="5" fill="#3a6670" opacity="0.08" />
      {/* Tree 1 - left */}
      <rect x="17" y="52" width="4" height="16" rx="1.5" fill="#c5a55a" opacity="0.4" />
      <ellipse cx="19" cy="42" rx="12" ry="14" fill="#3a6670" opacity="0.15" />
      <ellipse cx="19" cy="40" rx="9" ry="11" fill="#5a9aa8" opacity="0.2" />
      {/* Tree 2 - center (tallest) */}
      <rect x="37" y="45" width="6" height="22" rx="2" fill="#c5a55a" opacity="0.5" />
      <ellipse cx="40" cy="30" rx="16" ry="18" fill="#3a6670" opacity="0.18" />
      <ellipse cx="40" cy="28" rx="12" ry="14" fill="#5a9aa8" opacity="0.22" />
      <ellipse cx="40" cy="25" rx="8" ry="10" fill="#3a6670" opacity="0.15" />
      {/* Tree 3 - right */}
      <rect x="59" y="50" width="4" height="18" rx="1.5" fill="#c5a55a" opacity="0.4" />
      <ellipse cx="61" cy="40" rx="13" ry="15" fill="#3a6670" opacity="0.15" />
      <ellipse cx="61" cy="38" rx="10" ry="12" fill="#5a9aa8" opacity="0.2" />
      {/* Stars / sparkles */}
      <circle cx="25" cy="20" r="2" fill="#c5a55a" opacity="0.4" />
      <circle cx="55" cy="15" r="1.5" fill="#c5a55a" opacity="0.3" />
      <circle cx="70" cy="25" r="2" fill="#c5a55a" opacity="0.5" />
    </svg>
  );
}

function ShieldLockSVG() {
  return (
    <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-28 mx-auto mb-4">
      {/* Shield */}
      <path d="M60 10 L105 30 L105 75 Q105 115 60 130 Q15 115 15 75 L15 30Z" fill="#3a6670" opacity="0.08" stroke="#3a6670" strokeWidth="2" />
      <path d="M60 22 L95 38 L95 72 Q95 105 60 118 Q25 105 25 72 L25 38Z" fill="#3a6670" opacity="0.04" />
      {/* Lock */}
      <rect x="42" y="65" width="36" height="28" rx="5" fill="#3a6670" opacity="0.2" stroke="#3a6670" strokeWidth="1.5" />
      <path d="M48 65 L48 55 Q48 42 60 42 Q72 42 72 55 L72 65" fill="none" stroke="#3a6670" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="60" cy="77" r="4" fill="#3a6670" opacity="0.4" />
      <line x1="60" y1="81" x2="60" y2="86" stroke="#3a6670" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      {/* Checkmark at top */}
      <g transform="translate(60, 32)">
        <path d="M-6 0 L-2 5 L7-5" stroke="#3a6670" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function ProcessConsultSVG() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 mx-auto mb-3">
      {/* Clipboard */}
      <rect x="25" y="20" width="50" height="65" rx="6" fill="white" stroke="#3a6670" strokeWidth="2" />
      <rect x="35" y="15" width="30" height="10" rx="5" fill="#3a6670" opacity="0.2" stroke="#3a6670" strokeWidth="1.5" />
      {/* Lines */}
      <rect x="35" y="38" width="30" height="3" rx="1.5" fill="#3a6670" opacity="0.2" />
      <rect x="35" y="47" width="25" height="3" rx="1.5" fill="#3a6670" opacity="0.15" />
      <rect x="35" y="56" width="28" height="3" rx="1.5" fill="#3a6670" opacity="0.2" />
      <rect x="35" y="65" width="20" height="3" rx="1.5" fill="#3a6670" opacity="0.15" />
      {/* Magnifying glass overlay */}
      <circle cx="68" cy="68" r="14" fill="white" stroke="#c5a55a" strokeWidth="2" />
      <line x1="78" y1="78" x2="88" y2="88" stroke="#c5a55a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="68" cy="68" r="5" fill="#c5a55a" opacity="0.15" />
    </svg>
  );
}

function ProcessStrategySVG() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 mx-auto mb-3">
      {/* Target */}
      <circle cx="50" cy="50" r="35" fill="#3a6670" opacity="0.05" stroke="#3a6670" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="24" fill="#3a6670" opacity="0.08" stroke="#3a6670" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="13" fill="#3a6670" opacity="0.12" stroke="#3a6670" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="5" fill="#3a6670" opacity="0.6" />
      {/* Flag */}
      <line x1="50" y1="50" x2="50" y2="15" stroke="#c5a55a" strokeWidth="2" />
      <path d="M50 15 L70 22 L50 29" fill="#c5a55a" opacity="0.5" />
      {/* Light bulb spark */}
      <g transform="translate(78, 25)">
        <line x1="0" y1="-5" x2="0" y2="5" stroke="#c5a55a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="-5" y1="0" x2="5" y2="0" stroke="#c5a55a" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function ProcessContentSVG() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 mx-auto mb-3">
      {/* Pen */}
      <g transform="translate(30, 20) rotate(25)">
        <rect x="0" y="0" width="8" height="55" rx="2" fill="#3a6670" opacity="0.2" />
        <polygon points="0,55 8,55 4,65" fill="#c5a55a" opacity="0.4" />
        <rect x="0" y="0" width="8" height="8" rx="2" fill="#3a6670" opacity="0.3" />
      </g>
      {/* Document */}
      <rect x="48" y="35" width="35" height="45" rx="4" fill="white" stroke="#3a6670" strokeWidth="1.5" />
      <rect x="55" y="44" width="20" height="3" rx="1.5" fill="#3a6670" opacity="0.2" />
      <rect x="55" y="51" width="16" height="3" rx="1.5" fill="#3a6670" opacity="0.15" />
      <rect x="55" y="58" width="22" height="3" rx="1.5" fill="#3a6670" opacity="0.2" />
      <rect x="55" y="65" width="14" height="3" rx="1.5" fill="#3a6670" opacity="0.15" />
      {/* Sparkle */}
      <circle cx="75" cy="30" r="3" fill="#c5a55a" opacity="0.4" />
    </svg>
  );
}

function ProcessAnalysisSVG() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 mx-auto mb-3">
      {/* Screen */}
      <rect x="15" y="15" width="70" height="50" rx="6" fill="white" stroke="#3a6670" strokeWidth="2" />
      {/* Chart */}
      <rect x="25" y="48" width="8" height="10" rx="2" fill="#3a6670" opacity="0.2" />
      <rect x="37" y="40" width="8" height="18" rx="2" fill="#3a6670" opacity="0.3" />
      <rect x="49" y="35" width="8" height="23" rx="2" fill="#3a6670" opacity="0.4" />
      <rect x="61" y="28" width="8" height="30" rx="2" fill="#3a6670" opacity="0.6" />
      {/* Trend line */}
      <path d="M29 45 L41 38 L53 32 L65 25" stroke="#c5a55a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="65" cy="25" r="3" fill="#c5a55a" opacity="0.6" />
      {/* Stand */}
      <rect x="42" y="65" width="16" height="4" rx="1" fill="#3a6670" opacity="0.15" />
      <rect x="38" y="69" width="24" height="3" rx="1.5" fill="#3a6670" opacity="0.1" />
      {/* Up arrow */}
      <g transform="translate(82, 22)">
        <path d="M0 8 L0-2 M-4 2 L0-2 L4 2" stroke="#5a9aa8" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function LocationClusterSVG() {
  return (
    <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[240px] mx-auto">
      {/* Map background */}
      <rect x="20" y="20" width="240" height="180" rx="16" fill="#f8f7f4" stroke="#e5e5e5" strokeWidth="1" />
      {/* Roads */}
      <line x1="20" y1="80" x2="260" y2="80" stroke="#ddd" strokeWidth="2" />
      <line x1="20" y1="140" x2="260" y2="140" stroke="#ddd" strokeWidth="2" />
      <line x1="100" y1="20" x2="100" y2="200" stroke="#ddd" strokeWidth="2" />
      <line x1="180" y1="20" x2="180" y2="200" stroke="#ddd" strokeWidth="2" />
      {/* Location pins cluster */}
      {[
        { x: 140, y: 90, size: 1.2, color: "#3a6670", opacity: 0.8 },
        { x: 120, y: 70, size: 0.8, color: "#5a9aa8", opacity: 0.5 },
        { x: 160, y: 75, size: 0.7, color: "#5a9aa8", opacity: 0.4 },
        { x: 130, y: 110, size: 0.6, color: "#c5a55a", opacity: 0.4 },
        { x: 155, y: 105, size: 0.65, color: "#c5a55a", opacity: 0.45 },
        { x: 110, y: 95, size: 0.5, color: "#5a9aa8", opacity: 0.3 },
        { x: 170, y: 95, size: 0.55, color: "#5a9aa8", opacity: 0.35 },
      ].map((pin, i) => (
        <g key={i} transform={`translate(${pin.x}, ${pin.y}) scale(${pin.size})`}>
          <path d="M0-18 C-10-18 -15-10 -15 0 C-15 10 0 22 0 22 C0 22 15 10 15 0 C15-10 10-18 0-18Z" fill={pin.color} opacity={pin.opacity} />
          <circle cy="-3" r="5" fill="white" opacity="0.6" />
        </g>
      ))}
      {/* Pulse rings around center */}
      <circle cx="140" cy="90" r="25" fill="none" stroke="#3a6670" strokeWidth="1" opacity="0.15" strokeDasharray="4 3" />
      <circle cx="140" cy="90" r="40" fill="none" stroke="#3a6670" strokeWidth="0.8" opacity="0.1" strokeDasharray="4 3" />
      {/* Labels */}
      <g transform="translate(60, 155)">
        <rect width="50" height="16" rx="8" fill="#3a6670" opacity="0.1" />
        <text x="25" y="11" textAnchor="middle" fill="#3a6670" fontSize="7">맘카페</text>
      </g>
      <g transform="translate(170, 155)">
        <rect width="60" height="16" rx="8" fill="#c5a55a" opacity="0.15" />
        <text x="30" y="11" textAnchor="middle" fill="#c5a55a" fontSize="7">입주민카페</text>
      </g>
    </svg>
  );
}


export default function ServicesPage() {
  return (
    <>
      {/* Hero with decorative background */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f7f4] via-[#eef5e9] to-[#f8f7f4]" />
        {/* SVG pattern overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="#3a6670" />
              <path d="M0 30 L60 30 M30 0 L30 60" stroke="#3a6670" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
        {/* Decorative blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent/8 rounded-full blur-[120px] pointer-events-none" />
        {/* Floating SVG decorations */}
        <svg className="absolute top-20 right-[15%] w-16 h-16 animate-float opacity-20" viewBox="0 0 60 60" fill="none">
          <rect x="5" y="5" width="50" height="50" rx="12" stroke="#3a6670" strokeWidth="2" />
          <rect x="15" y="15" width="30" height="30" rx="8" stroke="#c5a55a" strokeWidth="1.5" />
        </svg>
        <svg className="absolute bottom-16 left-[12%] w-12 h-12 animate-float opacity-15" style={{ animationDelay: "2s" }} viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="15" stroke="#3a6670" strokeWidth="2" />
          <circle cx="20" cy="20" r="6" fill="#3a6670" opacity="0.3" />
        </svg>
        <svg className="absolute top-32 left-[8%] w-10 h-10 animate-float opacity-10" style={{ animationDelay: "4s" }} viewBox="0 0 40 40" fill="none">
          <polygon points="20,2 38,30 2,30" stroke="#c5a55a" strokeWidth="1.5" fill="none" />
        </svg>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/40" />
            <p className="text-primary font-semibold tracking-[0.2em] text-sm">SERVICES</p>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">서비스</span> 안내
          </h1>
          <p className="text-muted max-w-xl mx-auto text-lg leading-relaxed">
            병원 규모와 성장 단계에 맞춘 맞춤형 마케팅 솔루션을 제공합니다
          </p>
          {/* Decorative bottom element */}
          <div className="mt-10 flex justify-center">
            <svg viewBox="0 0 120 30" fill="none" className="w-28 opacity-30">
              <path d="M0 15 Q30 0 60 15 Q90 30 120 15" stroke="#3a6670" strokeWidth="1.5" fill="none" />
              <circle cx="60" cy="15" r="3" fill="#c5a55a" />
            </svg>
          </div>
        </div>
      </section>

      {/* Smart Place Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3">SMART PLACE</p>
            <h2 className="text-3xl font-bold mb-4">
              환자가 병원을 선택하는 결정적 5초
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              환자들은 &apos;지역명 + 진료과목&apos;을 검색하고,
              가장 위에 뜨는 스마트플레이스를 보고 방문을 결정합니다.
              이 흐름의 중심에 병원 스마트플레이스마케팅이 있습니다.
            </p>
          </div>

          <div className="space-y-24">
            {/* Point 1 - Phone Map */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-bold text-secondary">01</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  병원의 첫인상,<br />
                  홈페이지보다 &apos;스마트플레이스&apos;입니다
                </h3>
                <p className="text-muted leading-relaxed">
                  환자가 아픈 부위를 인지하고 검색창을 켤 때,
                  가장 먼저, 그리고 가장 크게 노출되는 영역이 바로 플레이스입니다.
                </p>
                <p className="text-muted leading-relaxed mt-4">
                  상위 5위 안에 없다면? 환자에게 우리 병원은
                  존재하지 않는 것과 같습니다.
                </p>
                {/* Stats bar inline */}
                <div className="mt-6 bg-light rounded-xl p-5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <span className="text-xs text-muted whitespace-nowrap">환자 유입 경로</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: "스마트플레이스 (지도)", percent: "62%", active: true },
                      { label: "블로그 검색", percent: "24%", active: false },
                      { label: "지인 추천", percent: "9%", active: false },
                      { label: "기타", percent: "5%", active: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <span className={item.active ? "text-primary font-medium" : "text-muted"}>
                          {item.label}
                        </span>
                        <span className={item.active ? "text-primary font-bold" : "text-muted"}>
                          {item.percent}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl" />
                  <div className="relative">
                    <PhoneMapSVG />
                  </div>
                </div>
              </div>
            </div>

            {/* Point 2 - SEO Magnifying Glass + Gears */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl" />
                  <div className="relative">
                    <MagnifyingGearSVG />
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <span className="text-sm font-bold text-secondary">02</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  순위 상승?<br />
                  SEO 최적화 없이는 불가능합니다
                </h3>
                <p className="text-muted leading-relaxed">
                  단순한 트래픽 작업이나 어뷰징 방식이 아닌,
                  정석적인 SEO 구조부터 점검합니다.
                  올라간 순위가 유지될 수 있는 구조를 만드는 것이 핵심입니다.
                </p>
                <p className="text-muted leading-relaxed mt-4">
                  철저한 데이터 분석과 카테고리 최적화, 트래픽 유입 경로 분석이
                  케어로그가 사용하는 병원마케팅 방법입니다.
                </p>
                {/* Checklist */}
                <div className="mt-6 bg-light rounded-xl p-5">
                  <p className="text-xs text-muted mb-3">SEO 최적화 점검 항목</p>
                  <div className="space-y-2.5">
                    {[
                      "플레이스 기본 정보와 카테고리 정합성",
                      "진료 키워드와 병원 브랜딩 메시지 일치 여부",
                      "환자가 병원을 이해할 수 있는 콘텐츠 구조",
                      "트래픽 유입 경로 및 체류시간 분석",
                      "저장하기 · 예약 전환율 최적화",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7" fill="#3a6670" opacity="0.1" />
                          <path d="M5 8 L7 10 L11 6" stroke="#3a6670" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Point 3 - Conversion Funnel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-bold text-secondary">03</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  상위노출만 되면 끝?<br />
                  &apos;전환&apos;이 되어야 진짜입니다
                </h3>
                <p className="text-muted leading-relaxed">
                  상위에 올라갔는데도 매출로 이어지지 않는 경우가 허다합니다.
                  환자가 클릭해서 들어왔을 때, 매력적인 정보가 없기 때문입니다.
                </p>
                <p className="text-muted leading-relaxed mt-4">
                  단순히 순위만 올리는 것이 아니라,
                  환자가 예약을 누를 수밖에 없는
                  &apos;매력적인 플레이스 세팅&apos;을 함께 진행합니다.
                </p>
                {/* Setting details */}
                <div className="mt-6 space-y-3">
                  {[
                    { title: "전문성 있는 대표 키워드 설정", desc: "병원의 강점을 보여주는 세부 키워드 발굴" },
                    { title: "신뢰를 주는 상세 설명", desc: "의료진의 철학, 진료 프로세스가 녹아든 카피라이팅" },
                    { title: "고화질 병원 이미지", desc: "환자의 불안감을 해소하는 시각 자료 배치" },
                  ].map((item, i) => (
                    <div key={i} className="border-l-2 border-primary pl-4 py-1">
                      <p className="text-sm font-medium text-dark">{item.title}</p>
                      <p className="text-xs text-muted mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl" />
                  <div className="relative">
                    <ConversionFunnelSVG />
                  </div>
                </div>
              </div>
            </div>

            {/* Point 4 - Chart/Report */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-3xl" />
                  <div className="relative">
                    <ChartReportSVG />
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <span className="text-sm font-bold text-secondary">04</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  데이터로 증명하는<br />
                  투명한 관리
                </h3>
                <p className="text-muted leading-relaxed">
                  &quot;돈만 내면 알아서 한다고 하고, 뭘 하는지 도통 모르겠어요.&quot;
                  이런 불만이 없도록, 매월 상세 리포트를 제공합니다.
                </p>
                <p className="text-muted leading-relaxed mt-4">
                  키워드별 순위 변화, 플레이스 유입 통계, 전화 및 예약 전환 수치까지.
                  원장님이 직접 눈으로 성과를 확인하실 수 있습니다.
                </p>
                {/* Report items */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { label: "키워드별 순위 변화", svg: (
                      <svg viewBox="0 0 32 32" className="w-8 h-8"><rect x="4" y="18" width="5" height="10" rx="1.5" fill="#3a6670" opacity="0.2"/><rect x="13" y="12" width="5" height="16" rx="1.5" fill="#3a6670" opacity="0.35"/><rect x="22" y="6" width="5" height="22" rx="1.5" fill="#3a6670" opacity="0.5"/></svg>
                    )},
                    { label: "플레이스 유입 통계", svg: (
                      <svg viewBox="0 0 32 32" className="w-8 h-8"><path d="M4 26 L10 18 L16 20 L22 10 L28 6" stroke="#3a6670" strokeWidth="2" fill="none" strokeLinecap="round"/><circle cx="28" cy="6" r="2.5" fill="#c5a55a"/></svg>
                    )},
                    { label: "전화 전환 수치", svg: (
                      <svg viewBox="0 0 32 32" className="w-8 h-8"><path d="M8 24 Q8 8 16 8 Q24 8 24 24" fill="none" stroke="#3a6670" strokeWidth="2"/><circle cx="16" cy="8" r="3" fill="#3a6670" opacity="0.3"/><rect x="12" y="22" width="8" height="4" rx="2" fill="#3a6670" opacity="0.2"/></svg>
                    )},
                    { label: "예약 전환 수치", svg: (
                      <svg viewBox="0 0 32 32" className="w-8 h-8"><rect x="6" y="6" width="20" height="20" rx="4" fill="none" stroke="#3a6670" strokeWidth="1.5"/><path d="M11 16 L14 19 L21 12" stroke="#c5a55a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    )},
                  ].map((item, i) => (
                    <div key={i} className="bg-light rounded-xl p-4 text-center card-hover">
                      <div className="flex justify-center mb-2">{item.svg}</div>
                      <span className="text-xs text-gray-700">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Safety Note with Shield/Lock SVG */}
          <div className="mt-24 relative bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/15 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Background pattern */}
            <svg className="absolute top-0 right-0 w-48 h-48 opacity-[0.03]" viewBox="0 0 200 200">
              <path d="M100 10 L180 40 L180 110 Q180 170 100 190 Q20 170 20 110 L20 40Z" fill="#3a6670" />
            </svg>
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0">
                <ShieldLockSVG />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-4">
                  안전한 오가닉 중심 마케팅만 진행합니다
                </h3>
                <p className="text-muted leading-relaxed max-w-2xl">
                  시중에는 저렴한 가격을 내세워 기계적인 트래픽만 쏘아대는 업체들이 많습니다.
                  이런 방식은 네이버의 제재를 받아 플레이스가 영구 삭제되거나 저품질에 걸릴 위험이 큽니다.
                  저희는 실제 유저 검색 패턴을 기반으로 한 오가닉 중심의 마케팅만을 진행합니다.
                  원장님의 면허와 병원의 명예를 걸고 하는 마케팅이기에, 단 1%의 위험 요소도 허용하지 않습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Experience Group Section */}
      <section className="section-padding bg-light">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3">BLOG CAMPAIGN</p>
            <h2 className="text-3xl font-bold mb-4">
              네이버 블로그 체험단,<br />매출 상승의 핵심 3가지
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              단순 배포가 아닌, 실제 내원까지 이어지는 블로그 체험단 운영.
              병원 마케팅은 &apos;맛있어요&apos; 한 마디로 끝나지 않습니다.
              환자의 아픔과 불안을 건드리고 해소해 주는 과정이 필요합니다.
            </p>
          </div>

          <div className="space-y-24">
            {/* Keyword Strategy - Target/Bullseye SVG */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-bold text-secondary">01</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  키워드 전략:<br />
                  빅 키워드가 아닌 &apos;세부 키워드&apos;를 노립니다
                </h3>
                <p className="text-muted leading-relaxed">
                  &apos;인천 내과&apos;, &apos;인천 피부과&apos;와 같은 대표 키워드만 고집하고 계시지는 않나요?
                  빅 키워드는 경쟁이 치열할 뿐만 아니라, 검색하는 사람의 의도가 너무 광범위합니다.
                </p>
                <p className="text-muted leading-relaxed mt-4">
                  환자가 검색할 법한 &apos;증상&apos;과 &apos;고민&apos;을 담은 세부 키워드를 공략해야 합니다.
                  실제로 환자들은 자신의 아픈 부위나 증상을 먼저 검색합니다.
                </p>
              </div>
              <div>
                <div className="mb-6">
                  <TargetBullseyeSVG />
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <p className="text-xs text-muted mb-4">키워드 전략 비교</p>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500">인천 정형외과</span>
                        <span className="text-xs text-red-400">경쟁 높음</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-2 bg-gray-300 rounded-full w-full"></div>
                      </div>
                      <p className="text-xs text-muted mt-1">의도 불명확 · 전환율 낮음</p>
                    </div>
                    <div className="border-t border-gray-100 pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-primary font-medium">인천 손목터널증후군 치료</span>
                        <span className="text-xs text-primary">전환 높음</span>
                      </div>
                      <div className="h-2 bg-primary/10 rounded-full">
                        <div className="h-2 bg-primary rounded-full w-3/5"></div>
                      </div>
                      <p className="text-xs text-muted mt-1">구체적 니즈 · 내원 의도 높음</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-primary font-medium">부평역 야간진료 정형외과</span>
                        <span className="text-xs text-primary">전환 높음</span>
                      </div>
                      <div className="h-2 bg-primary/10 rounded-full">
                        <div className="h-2 bg-primary rounded-full w-1/2"></div>
                      </div>
                      <p className="text-xs text-muted mt-1">지역 + 상황 특정 · 즉시 방문 의도</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Quality - Heart/Speech SVG */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="mb-6">
                  <HeartSpeechSVG />
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <p className="text-xs text-muted mb-4">공감형 후기 예시</p>
                  <div className="space-y-5">
                    <div className="border-l-2 border-primary/30 pl-4">
                      <p className="text-sm text-dark leading-relaxed italic">
                        &quot;치과 공포증 때문에 3년이나 미뤘는데,
                        여기 원장님은 마취 주사를 놓기 전에 미리 연고를 발라주셔서
                        따끔함조차 없었어요.&quot;
                      </p>
                    </div>
                    <div className="border-l-2 border-primary/30 pl-4">
                      <p className="text-sm text-dark leading-relaxed italic">
                        &quot;과잉 진료할까 봐 걱정했는데, 모니터로 엑스레이를 보여주시면서
                        내 상태를 꼼꼼히 설명해 주셔서 믿음이 갔어요.&quot;
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted mt-4">
                    구체적인 경험과 감정이 담긴 후기가 잠재 환자의 마음을 움직입니다.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <span className="text-sm font-bold text-secondary">02</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  가이드라인:<br />
                  &apos;좋아요&apos;가 아닌 &apos;공감&apos;을 담아야 합니다
                </h3>
                <p className="text-muted leading-relaxed">
                  &quot;친절하다고 써주세요&quot;, &quot;시설 좋다고 해주세요&quot;라는
                  천편일률적인 칭찬 일색의 글은 환자들에게 오히려 신뢰를 떨어뜨립니다.
                </p>
                <p className="text-muted leading-relaxed mt-4">
                  저희는 블로거들에게 단순한 배포가 아닌,
                  병원의 강점이 드러날 수 있는 구체적인 촬영 포인트와
                  시나리오를 제공합니다.
                </p>
              </div>
            </div>

            {/* Medical Law Compliance - Shield/Law SVG */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-bold text-secondary">03</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  의료법 준수:<br />
                  지킬 건 지켜야 오래 갑니다
                </h3>
                <p className="text-muted leading-relaxed">
                  일반 맛집 체험단처럼 진행하다가는 보건소의 민원 제기나
                  의료법 위반으로 영업 정지 처분까지 받을 수 있습니다.
                </p>
                <p className="text-muted leading-relaxed mt-4">
                  사내 의료법 검수 전담 팀을 두어, 포스팅이 올라가기 전
                  단어 하나하나까지 꼼꼼하게 체크합니다.
                  원장님께서 마케팅 때문에 불안에 떠는 일이 없도록 하는 것이
                  저희의 철칙입니다.
                </p>
              </div>
              <div>
                <div className="mb-6">
                  <ShieldLawSVG />
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <p className="text-xs text-muted mb-4">의료법 준수 콘텐츠 기준</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#fee2e2"/><path d="M5.5 5.5 L10.5 10.5 M10.5 5.5 L5.5 10.5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      <span className="text-sm text-gray-500">치료 효과 중심의 과장된 표현</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#fee2e2"/><path d="M5.5 5.5 L10.5 10.5 M10.5 5.5 L5.5 10.5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      <span className="text-sm text-gray-500">특정 병원을 직접 식별할 수 있는 치료 경험담</span>
                    </div>
                    <div className="border-t border-gray-100 pt-3 mt-3">
                      <div className="flex items-start gap-3">
                        <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#3a6670" opacity="0.1"/><path d="M5 8 L7 10 L11 6" stroke="#3a6670" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span className="text-sm text-gray-700">의료진이 진료를 준비하는 과정</span>
                      </div>
                      <div className="flex items-start gap-3 mt-2">
                        <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#3a6670" opacity="0.1"/><path d="M5 8 L7 10 L11 6" stroke="#3a6670" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span className="text-sm text-gray-700">보호자가 안심할 수 있는 설명 방식</span>
                      </div>
                      <div className="flex items-start gap-3 mt-2">
                        <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#3a6670" opacity="0.1"/><path d="M5 8 L7 10 L11 6" stroke="#3a6670" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span className="text-sm text-gray-700">환자가 부담 없이 이용할 수 있는 환경</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cafe Viral Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3">CAFE VIRAL</p>
            <h2 className="text-3xl font-bold mb-4">
              카페 바이럴 마케팅,<br />비용 대비 효과를 증명합니다
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              블로그가 &apos;우리가 이렇게 잘합니다&apos;라고 말하는 공간이라면,
              카페는 &apos;거기 가봤더니 진짜 괜찮더라&apos;는 제3자의 목소리가 들리는 공간입니다.
            </p>
            {/* Community SVG header illustration */}
            <div className="mt-8">
              <PeopleTalkingSVG />
            </div>
          </div>

          <div className="space-y-24">
            {/* Why Cafe */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-bold text-secondary">01</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  환자는 &apos;광고&apos;가 아닌<br />
                  &apos;후기&apos;를 믿습니다
                </h3>
                <p className="text-muted leading-relaxed">
                  환자들은 병원을 선택하기 전 &apos;검증&apos;의 단계를 반드시 거칩니다.
                  그 검증이 가장 활발하게 일어나는 곳이
                  바로 지역 커뮤니티, 즉 &apos;카페&apos;입니다.
                </p>
                <p className="text-muted leading-relaxed mt-4">
                  특히 비급여 항목이 많고 미용 목적이 강한 진료과목일수록,
                  먼저 다녀간 사람들의 리얼한 이야기를 찾습니다.
                  지역 맘카페나 입주민 카페에서 형성된 긍정적인 여론은
                  수백만 원짜리 배너 광고보다 훨씬 강력한 내원 동기가 됩니다.
                </p>
              </div>
              <div className="bg-light rounded-2xl p-8">
                <p className="text-xs text-muted mb-4">환자의 병원 선택 과정</p>
                <div className="space-y-4">
                  {[
                    { step: "1", text: "증상 인지 후 네이버 검색", sub: "\"OO동 피부과 추천\"", icon: (
                      <svg viewBox="0 0 20 20" className="w-5 h-5"><circle cx="8" cy="8" r="5" fill="none" stroke="#999" strokeWidth="1.5"/><line x1="12" y1="12" x2="17" y2="17" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    )},
                    { step: "2", text: "블로그에서 정보 수집", sub: "병원 공식 콘텐츠 확인", icon: (
                      <svg viewBox="0 0 20 20" className="w-5 h-5"><rect x="3" y="2" width="14" height="16" rx="2" fill="none" stroke="#999" strokeWidth="1.5"/><rect x="6" y="6" width="8" height="2" rx="1" fill="#999" opacity="0.4"/><rect x="6" y="10" width="6" height="2" rx="1" fill="#999" opacity="0.3"/></svg>
                    )},
                    { step: "3", text: "카페에서 후기 검증", sub: "\"거기 실제로 가본 분?\"", highlight: true, icon: (
                      <svg viewBox="0 0 20 20" className="w-5 h-5"><path d="M2 5 Q2 2 5 2 L15 2 Q18 2 18 5 L18 12 Q18 15 15 15 L8 15 L5 18 L5.5 15 L5 15 Q2 15 2 12Z" fill="none" stroke="#3a6670" strokeWidth="1.5"/></svg>
                    )},
                    { step: "4", text: "내원 결정", sub: "전화 문의 또는 예약", icon: (
                      <svg viewBox="0 0 20 20" className="w-5 h-5"><path d="M4 3 L8 3 L10 7 L8 9 Q10 13 14 11 L16 9 L19 13 L17 17 Q6 18 3 7Z" fill="none" stroke="#999" strokeWidth="1.5"/></svg>
                    )},
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        item.highlight ? "bg-primary text-white" : "bg-gray-200 text-gray-500"
                      }`}>
                        {item.step}
                      </span>
                      <div className="flex-1">
                        <p className={`text-sm ${item.highlight ? "text-primary font-medium" : "text-gray-700"}`}>
                          {item.text}
                        </p>
                        <p className="text-xs text-muted">{item.sub}</p>
                      </div>
                      <div className="shrink-0 opacity-60">{item.icon}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Storytelling */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-light rounded-2xl p-8 order-2 md:order-1">
                <p className="text-xs text-muted mb-4">카페 바이럴 콘텐츠 설계</p>
                <div className="space-y-4">
                  {[
                    { label: "공감", desc: "환자가 겪는 구체적인 고민을 공감", example: "기미, 여드름 흉터, 탈모 등", svg: (
                      <svg viewBox="0 0 28 28" className="w-7 h-7 shrink-0"><path d="M14 6 C10-2 0 2 4 10 C8 18 14 22 14 22 C14 22 20 18 24 10 C28 2 18-2 14 6Z" fill="#3a6670" opacity="0.15" stroke="#3a6670" strokeWidth="1"/></svg>
                    )},
                    { label: "해결", desc: "해당 병원에서 어떻게 해결했는지 자연스럽게", example: "과정 중심의 경험 공유", svg: (
                      <svg viewBox="0 0 28 28" className="w-7 h-7 shrink-0"><circle cx="14" cy="14" r="11" fill="#5a9aa8" opacity="0.1" stroke="#5a9aa8" strokeWidth="1"/><path d="M9 14 L12 17 L19 10" stroke="#5a9aa8" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                    )},
                    { label: "신뢰", desc: "원장님의 친절함, 꼼꼼한 시술 과정을 간접 노출", example: "서비스 측면 강조", svg: (
                      <svg viewBox="0 0 28 28" className="w-7 h-7 shrink-0"><path d="M14 3 L25 8 L25 16 Q25 24 14 27 Q3 24 3 16 L3 8Z" fill="#c5a55a" opacity="0.1" stroke="#c5a55a" strokeWidth="1"/><path d="M10 14 L13 17 L18 11" stroke="#c5a55a" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
                    )},
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 flex items-start gap-3">
                      {item.svg}
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">{item.label}</span>
                          <span className="text-sm text-dark font-medium">{item.desc}</span>
                        </div>
                        <p className="text-xs text-muted ml-1">{item.example}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2">
                <span className="text-sm font-bold text-secondary">02</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  우리 병원만의<br />
                  &apos;스토리&apos;를 입힙니다
                </h3>
                <p className="text-muted leading-relaxed">
                  &quot;OO피부과 좋아요&quot;라는 식의 영혼 없는 글은 오히려 반감을 삽니다.
                  성공적인 카페 바이럴은 철저한 기획 하에 이루어집니다.
                </p>
                <p className="text-muted leading-relaxed mt-4">
                  광고인 줄 알면서도 정보가 유익하여 결국 방문하게 만드는 것,
                  그것이 바로 고도화된 바이럴 마케팅의 기술입니다.
                </p>
              </div>
            </div>

            {/* Local Targeting - Location cluster SVG */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-bold text-secondary">03</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  지역 타겟팅의<br />
                  정교함
                </h3>
                <p className="text-muted leading-relaxed">
                  세부 지역 키워드와 결합했을 때 그 효과는 배가됩니다.
                  환자들은 멀리 있는 명의보다,
                  내 집 근처에서 믿고 맡길 수 있는 곳을 선호하기 때문입니다.
                </p>
                <p className="text-muted leading-relaxed mt-4">
                  지역 기반의 카페 활동은 충성도 높은 &apos;지역 환자&apos;를 확보하는 가장 빠른 지름길입니다.
                  한 번 형성된 긍정적인 평판은 쉽게 사라지지 않으며,
                  입소문을 타고 지속적인 신환 유입을 만들어냅니다.
                </p>
                {/* Community trust cards */}
                <div className="mt-6 space-y-3">
                  {[
                    { type: "맘카페", desc: "육아·건강 관심 높은 30~40대 타겟", reach: "높음" },
                    { type: "입주민 카페", desc: "동네 밀착형 추천 신뢰도 최상", reach: "매우 높음" },
                    { type: "지역 커뮤니티", desc: "폭넓은 연령대 커버", reach: "보통" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between bg-light rounded-lg p-4">
                      <div>
                        <p className="text-sm font-medium text-dark">{item.type}</p>
                        <p className="text-xs text-muted">{item.desc}</p>
                      </div>
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        item.reach === "매우 높음" ? "bg-primary/10 text-primary" : "bg-gray-100 text-gray-600"
                      }`}>
                        신뢰도 {item.reach}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl" />
                  <div className="relative">
                    <LocationClusterSVG />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-light">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3">PRICING</p>
            <h2 className="text-3xl font-bold">서비스 패키지</h2>
            <p className="text-muted mt-4">
              병원 규모와 목표에 맞는 맞춤 마케팅 플랜
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 flex flex-col card-hover relative overflow-hidden ${
                  pkg.highlight
                    ? "bg-white shadow-lg"
                    : "border-2 border-gray-200 bg-white"
                }`}
                style={pkg.highlight ? {
                  border: "2px solid transparent",
                  backgroundImage: "linear-gradient(white, white), linear-gradient(135deg, #3a6670, #c5a55a, #5a9aa8)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                } : undefined}
              >
                {/* Subtle background decoration */}
                <svg className="absolute top-0 right-0 w-32 h-32 opacity-[0.03]" viewBox="0 0 100 100">
                  <circle cx="80" cy="20" r="60" fill="#3a6670" />
                </svg>

                {pkg.highlight && (
                  <span className="inline-block self-start bg-gradient-to-r from-primary to-accent text-white text-xs px-4 py-1.5 rounded-full mb-4 font-semibold shadow-sm">
                    BEST
                  </span>
                )}

                {/* Tier icon */}
                <div className="relative">
                  {idx === 0 && <SeedSproutSVG />}
                  {idx === 1 && <TreeSVG />}
                  {idx === 2 && <ForestSVG />}
                </div>

                <h3 className="text-xl font-bold mb-1 text-center">
                  마케팅 {pkg.name}
                </h3>
                <p className="text-sm text-muted mb-4 text-center">{pkg.description}</p>
                <div className="flex items-baseline gap-1 mb-8 justify-center">
                  <span className={`text-4xl font-bold ${pkg.highlight ? "text-gradient" : "text-primary"}`}>
                    {pkg.price}
                  </span>
                  <span className="text-muted">만원 / 월</span>
                </div>
                <p className="text-xs text-muted mb-8 text-center">* 구성에 따라 가격이 달라질 수 있습니다</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="7" fill="#3a6670" opacity="0.1" />
                        <path d="M5 8 L7 10 L11 6" stroke="#3a6670" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-md font-medium transition-colors ${
                    pkg.highlight
                      ? "bg-primary text-white hover:bg-primary-light"
                      : "border border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  상담 신청
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background decoration */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="processPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="2" fill="#3a6670" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#processPattern)" />
        </svg>
        <div className="container-narrow relative">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3">PROCESS</p>
            <h2 className="text-3xl font-bold">진행 프로세스</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "상담 & 분석", desc: "병원 현황 파악 및 원장님 진료 철학 인터뷰", svg: <ProcessConsultSVG /> },
              { step: "02", title: "전략 수립", desc: "타겟 환자 설정 및 브랜딩 방향 기획", svg: <ProcessStrategySVG /> },
              { step: "03", title: "콘텐츠 제작", desc: "브랜드블로그, 카페, 스마트플레이스 운영", svg: <ProcessContentSVG /> },
              { step: "04", title: "분석 & 개선", desc: "월별 성과 리포트 및 전략 미팅", svg: <ProcessAnalysisSVG /> },
            ].map((item, i) => (
              <div key={item.step} className="text-center relative">
                {/* Connector line (except last) */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px border-t-2 border-dashed border-primary/15" />
                )}
                <div className="bg-light rounded-2xl p-6 card-hover">
                  {item.svg}
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm font-bold mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
