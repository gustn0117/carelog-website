import Link from "next/link";
import Image from "next/image";
import ServicePreview from "@/components/ServicePreview";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/KakaoTalk_20260208_215356061_25.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary-dark/75 to-primary/60" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Decorative line accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-32 right-[15%] w-px h-40 bg-gradient-to-b from-transparent via-secondary/30 to-transparent hidden lg:block" />
        <div className="absolute top-1/3 left-[10%] w-20 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent hidden lg:block" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col items-center text-center py-40">
            {/* Heading */}
            <div className="animate-fade-up-delay-1 mb-10">
              <p className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                병원의 가치를
              </p>
              <p className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="text-secondary">진심으로</span>{" "}
                <span className="text-white">정리합니다</span>
              </p>
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-secondary/60 mb-10 animate-fade-up-delay-1" />

            {/* Subtext */}
            <div className="animate-fade-up-delay-2 mb-14 max-w-md space-y-3">
              <p className="text-base md:text-lg text-white/60 font-light">
                단순 홍보가 아닌 브랜딩 중심의 병원 마케팅.
              </p>
              <p className="text-base md:text-lg text-white/60 font-light">
                원장님의 진료 철학이 환자에게 온전히 닿도록.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center gap-5 animate-fade-up-delay-3">
              <Link
                href="/contact"
                className="bg-white text-primary px-12 py-5 rounded-lg font-bold text-base hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-0.5"
              >
                무료 상담 신청
              </Link>
              <Link
                href="/services"
                className="border border-white/30 text-white/90 px-12 py-5 rounded-lg font-medium text-base hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
              >
                서비스 둘러보기
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Problem Statement */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-secondary tracking-wider uppercase mb-3 block">PAIN POINT</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              이런 고민, 하고 계시지 않나요?
            </h2>
            <p className="text-muted">
              많은 원장님들이 마케팅 비용은 쓰지만 결과가 따라오지 않아 답답해하십니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "매달 마케팅 비용으로 수백만 원을 쓰는데, 신환 유입은 그대로입니다.",
              "상위 노출은 되는데, 실제 내원이나 문의로 이어지지 않아요.",
              "우리 병원 글이 맞나 싶을 정도로 내용이 가볍고, 옆 병원과 다를 게 없어요.",
            ].map((question, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 p-8"
              >
                <span className="text-2xl text-primary/30 font-serif mb-4 block">&ldquo;</span>
                <p className="text-gray-700 leading-relaxed">
                  {question}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted mb-2">이는 단순히 노출의 문제가 아닙니다.</p>
            <p className="text-dark font-bold text-lg">
              환자가 &apos;이 병원에 가고 싶다&apos;는 <span className="text-primary">확신</span>이 필요합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <WhyUs />

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-secondary tracking-wider uppercase mb-3 block">PROCESS</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              케어로그와 함께하는 과정
            </h2>
          </div>

          <div className="relative">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              {[
                { step: "01", title: "상담 & 분석", desc: "병원 현황 파악 및 원장님 진료 철학 인터뷰" },
                { step: "02", title: "전략 수립", desc: "타겟 환자 설정 및 브랜딩 방향 기획" },
                { step: "03", title: "콘텐츠 제작", desc: "브랜드블로그, 카페, 스마트플레이스 운영" },
                { step: "04", title: "분석 & 개선", desc: "월별 성과 리포트 및 전략 미팅" },
              ].map((item) => (
                <div key={item.step} className="relative text-center px-6 py-8">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Preview */}
      <ServicePreview />

      {/* Visual Showcase Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container-narrow px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg img-zoom h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=400&h=300&q=80"
                      alt="병원 인테리어"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg img-zoom h-32">
                    <Image
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&h=250&q=80"
                      alt="의료 상담"
                      width={400}
                      height={250}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg img-zoom h-32">
                    <Image
                      src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=400&h=250&q=80"
                      alt="의료 장비"
                      width={400}
                      height={250}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg img-zoom h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&h=300&q=80"
                      alt="병원 복도"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
            </div>

            {/* Text content */}
            <div>
              <span className="text-sm font-medium text-secondary tracking-wider uppercase mb-3 block">BRAND IDENTITY</span>
              <p className="text-3xl md:text-4xl font-bold mb-3">
                환자에게 전하는
              </p>
              <p className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">병원만의 이야기</span>
              </p>
              <p className="text-muted leading-relaxed mb-6">
                각 병원은 고유한 철학과 강점을 가지고 있습니다. 저희는 그 고유함을
                환자가 느낄 수 있는 콘텐츠로 변환합니다. 단순한 정보 나열이 아닌,
                환자의 마음을 움직이는 브랜딩을 설계합니다.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "원장님 진료 철학 기반 콘텐츠 제작",
                  "환자 페인포인트에 공감하는 스토리텔링",
                  "진료과목별 맞춤 키워드 전략",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-dark font-medium text-sm">{text}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/marketing"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group"
              >
                자세히 알아보기
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Trust Section */}
      <section className="section-padding bg-light">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-secondary tracking-wider uppercase mb-3 block">TRUST</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              원장님들이 케어로그를 선택하는 이유
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: "다른 대행사는 글만 올려놓고 끝인데, 케어로그는 우리 병원이 어떤 이야기를 해야 하는지부터 함께 고민해줬습니다.",
                name: "인천 ○○치과",
                role: "대표원장님",
              },
              {
                quote: "의료법 때문에 항상 불안했는데, 원고 하나하나 검수해주니 마케팅에 신경 쓸 일이 줄어 진료에 집중할 수 있게 되었습니다.",
                name: "광명 ○○피부과",
                role: "대표원장님",
              },
              {
                quote: "블로그를 보고 병원 분위기가 좋아 보여서 왔다는 신환이 확실히 늘었습니다. 의도가 분명한 환자들이 옵니다.",
                name: "부평 ○○한의원",
                role: "대표원장님",
              },
              {
                quote: "지역 독점이라는 약속이 결정적이었습니다. 옆 건물 병원과 같은 대행사를 쓴다는 건 말이 안 되니까요.",
                name: "송도 ○○정형외과",
                role: "대표원장님",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 p-8"
              >
                <span className="text-2xl text-primary/30 font-serif mb-4 block">&ldquo;</span>
                <p className="text-gray-700 leading-relaxed mb-6 text-[15px]">
                  {item.quote}
                </p>
                <div>
                  <p className="font-bold text-sm text-dark">{item.name}</p>
                  <p className="text-xs text-muted">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  );
}
