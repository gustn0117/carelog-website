"use client";

import { useState, useEffect, useCallback } from "react";

interface Contact {
  id: string;
  hospitalName: string;
  doctorName: string;
  phone: string;
  email: string;
  category: string;
  region: string;
  currentMarketing: string;
  message: string;
  createdAt: string;
  isRead: boolean;
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchContacts = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/contacts");
      if (res.status === 401) {
        setIsLoggedIn(false);
        return;
      }
      const data = await res.json();
      setContacts(data.contacts || []);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Check if already logged in
    fetch("/api/admin/contacts").then((res) => {
      if (res.ok) {
        setIsLoggedIn(true);
        res.json().then((data) => setContacts(data.contacts || []));
      }
    });
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        setIsLoggedIn(true);
        setPassword("");
        fetchContacts();
      } else {
        setError("비밀번호가 틀렸습니다");
      }
    } catch {
      setError("서버 오류가 발생했습니다");
    }
  };

  const handleMarkRead = async (id: string) => {
    await fetch("/api/admin/contacts", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, action: "read" }),
    });
    setContacts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isRead: true } : c))
    );
    if (selectedContact?.id === id) {
      setSelectedContact({ ...selectedContact, isRead: true });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    await fetch("/api/admin/contacts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setContacts((prev) => prev.filter((c) => c.id !== id));
    if (selectedContact?.id === id) {
      setSelectedContact(null);
    }
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  };

  const marketingLabel: Record<string, string> = {
    없음: "마케팅 미진행",
    자체운영: "자체 운영 중",
    대행사이용: "다른 대행사 이용 중",
    개원준비: "개원 준비 중",
  };

  const unreadCount = contacts.filter((c) => !c.isRead).length;

  // Login screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3a6670" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-dark">관리자 로그인</h1>
              <p className="text-sm text-muted mt-1">케어로그 문의 관리</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호 입력"
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-center tracking-widest"
                autoFocus
              />
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-white font-medium text-sm bg-primary"
              >
                로그인
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold text-dark">케어로그 관리</h1>
            {unreadCount > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchContacts}
              className="text-sm text-muted border border-gray-200 px-3 py-1.5 rounded-lg"
            >
              새로고침
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {loading && contacts.length === 0 ? (
          <div className="text-center py-20 text-muted">불러오는 중...</div>
        ) : contacts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <p className="text-muted">아직 문의가 없습니다</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Contact list */}
            <div className="lg:col-span-2 space-y-2">
              <p className="text-sm text-muted mb-3">
                전체 {contacts.length}건{unreadCount > 0 && ` (미확인 ${unreadCount}건)`}
              </p>
              {contacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => {
                    setSelectedContact(contact);
                    if (!contact.isRead) handleMarkRead(contact.id);
                  }}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    selectedContact?.id === contact.id
                      ? "border-primary bg-primary/5"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        {!contact.isRead && (
                          <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                        )}
                        <span className="font-semibold text-sm truncate">
                          {contact.hospitalName}
                        </span>
                        {contact.category && (
                          <span className="text-xs text-muted bg-gray-100 px-2 py-0.5 rounded-full shrink-0">
                            {contact.category}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted mt-1 truncate">
                        {contact.doctorName} · {contact.phone}
                      </p>
                    </div>
                    <span className="text-xs text-muted shrink-0">
                      {formatDate(contact.createdAt).split(" ")[0]}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Detail view */}
            <div className="lg:col-span-3">
              {selectedContact ? (
                <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 sticky top-24">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold">{selectedContact.hospitalName}</h2>
                      <p className="text-sm text-muted mt-1">
                        {formatDate(selectedContact.createdAt)}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(selectedContact.id)}
                      className="text-sm text-red-500 border border-red-200 px-3 py-1.5 rounded-lg"
                    >
                      삭제
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-muted mb-1">원장님 성함</p>
                      <p className="text-sm font-medium">{selectedContact.doctorName}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-muted mb-1">연락처</p>
                      <p className="text-sm font-medium">{selectedContact.phone}</p>
                    </div>
                    {selectedContact.email && (
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-muted mb-1">이메일</p>
                        <p className="text-sm font-medium">{selectedContact.email}</p>
                      </div>
                    )}
                    {selectedContact.category && (
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-muted mb-1">진료 과목</p>
                        <p className="text-sm font-medium">{selectedContact.category}</p>
                      </div>
                    )}
                    {selectedContact.region && (
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-muted mb-1">병원 소재지</p>
                        <p className="text-sm font-medium">{selectedContact.region}</p>
                      </div>
                    )}
                    {selectedContact.currentMarketing && (
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-muted mb-1">마케팅 진행 여부</p>
                        <p className="text-sm font-medium">
                          {marketingLabel[selectedContact.currentMarketing] || selectedContact.currentMarketing}
                        </p>
                      </div>
                    )}
                  </div>

                  {selectedContact.message && (
                    <div>
                      <p className="text-xs text-muted mb-2">문의 내용</p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">
                          {selectedContact.message}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center text-muted sticky top-24">
                  <p>왼쪽 목록에서 문의를 선택하세요</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
