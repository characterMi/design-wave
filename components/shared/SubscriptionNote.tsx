"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SubscriptionNote = () => {
  const [subscriptionNote, setSubscriptionNote] = useState<string | null>(null);

  const divRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (!divRef.current) return;

    divRef.current.classList.add("opacity-0");

    setTimeout(() => {
      divRef.current && divRef.current.classList.add("hidden");

      localStorage.setItem("subscriptionNote", "hidden");

      setSubscriptionNote(localStorage.getItem("subscriptionNote"));
    }, 300);
  };

  useEffect(() => {
    if (!localStorage.getItem("subscriptionNote")) {
      localStorage.setItem("subscriptionNote", "visible");

      setSubscriptionNote(localStorage.getItem("subscriptionNote"));
    }

    setSubscriptionNote(localStorage.getItem("subscriptionNote"));
  }, []);

  return (
    <>
      {subscriptionNote === "visible" && (
        <div
          className="w-full p-4 pt-6 relative border border-purple-500 bg-purple-400/30 rounded-md mb-6 transition duration-300"
          ref={divRef}
        >
          <button
            className="absolute top-1 right-1 text-neutral-500 cursor-pointer hover:text-neutral-800 focus-visible:text-neutral-800 outline-none transition-colors"
            onClick={handleClick}
            aria-label="I understand"
          >
            <X aria-hidden />
          </button>
          Stripe is in development mode, which means You don&apos;t need to
          actually pay for Credits. just simply use this{" "}
          <span className="text-md font-bold">4242-4242-4242-4242</span> card
          number and add a valid Expiration (for example: 06 / 30).
        </div>
      )}
    </>
  );
};
export default SubscriptionNote;
