export function WhatsAppButton() {
  const phoneNumber = "840914943394";
  const message = "Hello! I'd like to inquire about your sourcing services.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <style>{`
        @keyframes wa-shake {
          0%   { transform: rotate(0deg) scale(1); }
          10%  { transform: rotate(-12deg) scale(1.1); }
          20%  { transform: rotate(12deg) scale(1.1); }
          30%  { transform: rotate(-10deg) scale(1.1); }
          40%  { transform: rotate(10deg) scale(1.1); }
          50%  { transform: rotate(-6deg) scale(1.05); }
          60%  { transform: rotate(6deg) scale(1.05); }
          70%  { transform: rotate(-3deg) scale(1.02); }
          80%  { transform: rotate(3deg) scale(1.02); }
          90%  { transform: rotate(-1deg) scale(1); }
          100% { transform: rotate(0deg) scale(1); }
        }

        @keyframes wa-ping {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2); opacity: 0; }
        }

        .wa-btn {
          animation: wa-shake 2.5s ease-in-out infinite;
          animation-delay: 1s;
        }

        .wa-btn:hover {
          animation: none;
          transform: scale(1.12) !important;
          box-shadow: 0 6px 24px rgba(37,211,102,0.6) !important;
        }

        .wa-ping {
          animation: wa-ping 1.8s ease-out infinite;
        }
      `}</style>

      <div style={{ position: "fixed", bottom: "28px", right: "28px", zIndex: 9999 }}>

        {/* Vòng ping phía sau */}
        <span
          className="wa-ping"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            backgroundColor: "#25D366",
            display: "block",
          }}
        />

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-btn"
          style={{
            position: "relative",
            backgroundColor: "#25D366",
            borderRadius: "50%",
            width: "56px",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px rgba(37,211,102,0.45)",
            transition: "transform 0.2s, box-shadow 0.2s",
            textDecoration: "none",
          }}
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="30"
            height="30"
            fill="white"
          >
            <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.77L0 32l8.468-2.002A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.747-1.839l-.484-.287-5.024 1.187 1.234-4.893-.316-.502A13.24 13.24 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.906c-.398-.199-2.354-1.162-2.719-1.294-.365-.133-.631-.199-.897.199-.266.398-1.03 1.294-1.263 1.56-.232.266-.465.299-.863.1-.398-.2-1.681-.62-3.202-1.977-1.184-1.056-1.983-2.36-2.215-2.758-.232-.398-.025-.613.175-.811.18-.178.398-.465.597-.697.2-.233.266-.399.399-.665.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.23-2.96-.323-.778-.652-.673-.897-.685l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.394 1.362-1.394 3.325s1.427 3.857 1.626 4.123c.199.266 2.808 4.286 6.804 6.013.951.41 1.693.655 2.272.839.954.303 1.823.26 2.51.158.766-.114 2.354-.962 2.687-1.891.333-.93.333-1.727.233-1.892-.1-.165-.365-.265-.763-.464z" />
          </svg>
        </a>

      </div>
    </>
  );
}