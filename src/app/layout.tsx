import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "CARE LOG 케어로그 | 병원 브랜딩 스튜디오",
  description:
    "병원의 가치를 정리하는 병원 마케팅 대행사. 브랜딩 중심의 병원 마케팅으로 환자에게 신뢰를 전달합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
