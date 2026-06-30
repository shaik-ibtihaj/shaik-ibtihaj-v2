import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hls from "hls.js";
import { ArrowLeft, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  // Background HLS Video setup (vertical flip matching the footer)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoUrl = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    let hls: Hls | null = null;
    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(videoUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoUrl;
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        reply_to: email,
        submission_date: new Date().toLocaleString(),
        website_name: "Portfolio"
      };

      console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
      console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
      console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // On successful submission, clear all form fields and reset form state
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to send message via EmailJS:", error);
      setErrorMessage("Something went wrong. Please try again later or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center py-16 px-4 sm:px-6 overflow-hidden bg-bg">
      {/* Background Flipped HLS Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Dark overlay matching site design */}
        <div className="absolute inset-0 bg-black/65 z-0" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg to-transparent z-0" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent z-0" />
      </div>

      {/* Floating Header / Navigation */}
      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-xs sm:text-sm text-muted hover:text-text-primary bg-surface/50 border border-stroke backdrop-blur-md px-4 py-2.5 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg shadow-black/25"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Go Back</span>
        </button>
      </div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-lg mt-8">
        {!isSubmitted ? (
          <div className="bg-surface/40 border border-stroke/70 backdrop-blur-xl rounded-2xl p-6 sm:p-10 shadow-2xl shadow-black/80">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-text-primary mb-3 leading-none select-none">
                Say <span className="font-display italic">Hi</span>
              </h1>
              <p className="text-muted text-xs sm:text-sm font-light max-w-sm mx-auto leading-relaxed">
                Let's build the future together. Fill out the details below to get in touch.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-[10px] sm:text-xs uppercase tracking-wider text-muted font-medium font-body"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-4.5 py-3.5 bg-surface/60 border border-stroke rounded-xl text-text-primary placeholder:text-muted/30 focus:outline-none focus:border-[#89AACC] focus:ring-1 focus:ring-[#89AACC]/20 transition-all duration-300 font-body text-xs sm:text-sm font-light shadow-inner shadow-black/25 disabled:opacity-50"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[10px] sm:text-xs uppercase tracking-wider text-muted font-medium font-body"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-4.5 py-3.5 bg-surface/60 border border-stroke rounded-xl text-text-primary placeholder:text-muted/30 focus:outline-none focus:border-[#89AACC] focus:ring-1 focus:ring-[#89AACC]/20 transition-all duration-300 font-body text-xs sm:text-sm font-light shadow-inner shadow-black/25 disabled:opacity-50"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-[10px] sm:text-xs uppercase tracking-wider text-muted font-medium font-body"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Describe your project, ideas, or how we can collaborate..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-4.5 py-3.5 bg-surface/60 border border-stroke rounded-xl text-text-primary placeholder:text-muted/30 focus:outline-none focus:border-[#89AACC] focus:ring-1 focus:ring-[#89AACC]/20 transition-all duration-300 font-body text-xs sm:text-sm font-light shadow-inner shadow-black/25 disabled:opacity-50 resize-none"
                />
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="text-red-400 text-xs sm:text-sm bg-red-950/20 border border-red-900/30 rounded-xl px-4.5 py-3 text-center font-body font-light select-none animate-fadeIn">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full inline-flex items-center justify-center rounded-xl text-xs sm:text-sm font-semibold py-4 bg-surface border border-stroke text-text-primary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group overflow-hidden shadow-2xl shadow-black/40 cursor-pointer disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed mt-2"
              >
                <span className="absolute inset-[-2px] rounded-xl bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
                <span className="absolute inset-[1.5px] rounded-xl bg-surface opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && (
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  )}
                </span>
              </button>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="bg-surface/40 border border-stroke/70 backdrop-blur-xl rounded-2xl p-8 sm:p-10 shadow-2xl shadow-black/80 text-center flex flex-col items-center">
            <div className="relative flex items-center justify-center w-16 h-16 rounded-full border border-green-500/20 bg-green-500/10 mb-6 text-green-400">
              <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-green-500/20 opacity-75"></span>
              <CheckCircle className="w-8 h-8 relative z-10" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-light text-text-primary mb-3">
              Message Sent!
            </h2>
            <p className="text-muted text-xs sm:text-sm font-light max-w-sm mb-8 leading-relaxed">
              Thank you, <span className="text-text-primary font-medium">{name}</span>. Your message has been received successfully. I'll get back to you at <span className="text-text-primary font-medium">{email}</span> as soon as possible!
            </p>

            {/* Back Button */}
            <Link
              to="/"
              className="relative inline-flex items-center justify-center rounded-full text-xs sm:text-sm font-semibold px-8 py-3.5 bg-surface border border-stroke text-text-primary hover:scale-105 transition-all duration-300 group overflow-hidden shadow-2xl shadow-black/40"
            >
              <span className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              <span className="absolute inset-[1.5px] rounded-full bg-surface opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              <span className="relative z-10 flex items-center gap-1.5">
                Back to Portfolio
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
