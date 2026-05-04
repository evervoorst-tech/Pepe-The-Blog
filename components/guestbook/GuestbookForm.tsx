"use client";

import { useState, useRef } from "react";
import { addGuestbookEntry } from "@/lib/guestbook";
import { NeoWidget, NeoButton } from "@/components/Memphis";

const MAX_MESSAGE = 280;

export default function GuestbookForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [charCount, setCharCount] = useState(0);
  const [errors, setErrors] = useState<{ author?: string; message?: string }>({});
  const formRef = useRef<HTMLFormElement>(null);

  function validate(author: string, message: string) {
    const e: { author?: string; message?: string } = {};
    if (!author.trim()) e.author = "name is required";
    if (!message.trim()) e.message = "message is required";
    else if (message.length > MAX_MESSAGE)
      e.message = `max ${MAX_MESSAGE} characters`;
    return e;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const author = (fd.get("author") as string) ?? "";
    const location = (fd.get("location") as string) ?? "";
    const message = (fd.get("message") as string) ?? "";

    const errs = validate(author, message);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("submitting");

    try {
      await addGuestbookEntry({ author, location, message });
      setStatus("success");
      formRef.current?.reset();
      setCharCount(0);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <NeoWidget header="[ sign the pad ]" headerColor="var(--accent-yellow)">
        <div style={{ textAlign: "center", padding: "16px 0" }}>
          <div style={{ fontSize: 28, marginBottom: 8 }}>🐸</div>
          <div
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 12,
              fontWeight: 700,
              color: "var(--ink)",
            }}
          >
            your message has been left on the lily pad 🐸
          </div>
          <button
            onClick={() => setStatus("idle")}
            style={{
              marginTop: 12,
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 11,
              background: "none",
              border: "none",
              cursor: "pointer",
              textDecoration: "underline",
              color: "var(--ink)",
              opacity: 0.6,
            }}
          >
            leave another
          </button>
        </div>
      </NeoWidget>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    fontFamily: "var(--font-space-grotesk), sans-serif",
    fontSize: 13,
    color: "var(--ink)",
    background: "var(--bg)",
    border: "3px solid var(--ink)",
    padding: "8px 10px",
    boxSizing: "border-box",
    outline: "none",
    boxShadow: "3px 3px 0 var(--ink)",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-space-mono), monospace",
    fontSize: 11,
    fontWeight: 700,
    color: "var(--ink)",
    textTransform: "uppercase",
    letterSpacing: 1,
    display: "block",
    marginBottom: 4,
  };

  const errorStyle: React.CSSProperties = {
    fontFamily: "var(--font-space-mono), monospace",
    fontSize: 10,
    color: "var(--accent-red)",
    marginTop: 3,
  };

  return (
    <NeoWidget header="[ sign the pad ]" headerColor="var(--accent-yellow)">
      <form ref={formRef} onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: 10 }}>
          <label htmlFor="gb-author" style={labelStyle}>
            name *
          </label>
          <input
            id="gb-author"
            name="author"
            type="text"
            autoComplete="off"
            style={inputStyle}
          />
          {errors.author && <div style={errorStyle}>{errors.author}</div>}
        </div>

        <div style={{ marginBottom: 10 }}>
          <label htmlFor="gb-location" style={labelStyle}>
            location
          </label>
          <input
            id="gb-location"
            name="location"
            type="text"
            placeholder="The Bog, Somewhere Damp"
            autoComplete="off"
            style={{ ...inputStyle, opacity: 1 }}
          />
        </div>

        <div style={{ marginBottom: 14 }}>
          <label htmlFor="gb-message" style={labelStyle}>
            message *
          </label>
          <textarea
            id="gb-message"
            name="message"
            rows={4}
            maxLength={MAX_MESSAGE}
            onChange={(e) => setCharCount(e.target.value.length)}
            style={{ ...inputStyle, resize: "vertical", display: "block" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 3,
            }}
          >
            {errors.message ? (
              <div style={errorStyle}>{errors.message}</div>
            ) : (
              <div />
            )}
            <div
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: 10,
                color: charCount > MAX_MESSAGE * 0.9 ? "var(--accent-red)" : "var(--ink)",
                opacity: 0.5,
              }}
            >
              {charCount}/{MAX_MESSAGE}
            </div>
          </div>
        </div>

        {status === "error" && (
          <div
            style={{
              ...errorStyle,
              marginBottom: 10,
              border: "2px solid var(--accent-red)",
              padding: "6px 8px",
            }}
          >
            something went wrong. try again.
          </div>
        )}

        <NeoButton style={{ width: "100%", textAlign: "center" as const }}>
          {status === "submitting" ? "sending..." : "leave message"}
        </NeoButton>
      </form>
    </NeoWidget>
  );
}
