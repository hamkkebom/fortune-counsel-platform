"use client";
import { useEffect, useState } from "react";
import AnonPopup from "@/components/popup/AnonPopup";
import { incrementVisitCount, isLoggedIn } from "@/lib/store";

export default function ClientLayout({ children }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(null);

  useEffect(() => {
    const visitCount = incrementVisitCount();
    const hasLoggedIn = isLoggedIn();

    if (visitCount <= 1 && !hasLoggedIn) {
      setPopupType("A");
      setShowPopup(true);
    } else if (visitCount >= 3 && !hasLoggedIn) {
      setPopupType("B");
      setShowPopup(true);
    } else if (visitCount >= 3 && hasLoggedIn) {
      setPopupType("C");
      setShowPopup(true);
    }
  }, []);

  return (
    <>
      {children}
      {showPopup && (
        <AnonPopup popupType={popupType} onClose={() => setShowPopup(false)} />
      )}
    </>
  );
}
