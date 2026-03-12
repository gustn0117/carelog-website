import Link from "next/link";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28 px-6">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
        alt=""
        fill
        className="object-cover"
        priority={false}
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/85 to-accent/80" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="container-narrow relative z-10 text-center text-white">
        <p className="text-3xl md:text-5xl font-bold mb-4">
          원장님의 진료 철학이
        </p>
        <p className="text-3xl md:text-5xl font-bold mb-10">
          환자에게 온전히 닿을 수 있도록
        </p>

        <p className="text-white/70 mb-4 max-w-lg mx-auto text-lg">
          단순히 마케팅 대행을 넘어, 원장님의 진심이 환자에게 전해지는
          브랜딩 파트너가 되고 싶습니다.
        </p>
        <p className="text-white/50 text-sm mb-14 max-w-md mx-auto">
          지역 독점 운영 원칙에 따라, 이미 담당 병원이 있는 지역은
          진행이 어려울 수 있습니다.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5"
        >
          무료 상담 신청하기
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
