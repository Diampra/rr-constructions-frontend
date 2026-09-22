export const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 512 512"
    className={className}
    aria-hidden="true"
  >
    <path fill="#5CB85C" d="M256,0 C114.6,0 0,114.6 0,256 C0,301.6 12.1,344.5 33.2,381.8 L7.4,491.5 C5.1,501.3 14,509.8 23.7,507.2 L137.4,476.9 C172.9,499.2 213.1,512 256,512 C397.4,512 512,397.4 512,256 C512,114.6 397.4,0 256,0 Z"/>
    <path fill="#FFFFFF" d="M381.9,328.7 C375.4,325.4 343.3,309.6 337.3,307.4 C331.3,305.2 327,304.1 322.6,310.7 C318.3,317.2 305.8,332 302.1,336.3 C298.3,340.7 294.6,341.2 288.1,338 C281.6,334.7 260.6,327.8 235.7,305.6 C216.3,288.3 203.2,267 199.4,260.5 C195.6,254 199,250.5 202.3,247.3 C205.2,244.4 208.8,239.7 212.1,235.8 C215.4,231.9 216.5,229.3 218.6,224.9 C220.8,220.6 219.7,216.7 218.1,213.4 C216.5,210.1 203.5,178.1 198.1,165.1 C192.8,152.4 187.5,154.2 183.4,154 C179.6,153.8 175.2,153.8 170.9,153.8 C166.5,153.8 159.4,155.5 153.5,161.9 C147.5,168.4 130.7,184.2 130.7,216.3 C130.7,248.4 154.1,279.3 157.3,283.6 C160.6,288 206.5,358.7 276.7,389 C293.4,396.2 306.5,400.5 316.6,403.7 C333.3,409 348.6,408.2 360.6,406.4 C374,404.4 401.8,389.6 407.6,373.2 C413.4,356.8 413.4,342.7 411.7,339.8 C410,336.8 405.7,335.2 381.9,328.7 Z"/>
  </svg>
);

const WhatsAppButton = () => {
  const phoneNumber = "919945865862";
  const defaultMessage = encodeURIComponent(
    "Hello RR Constructions & RR Infra! I would like to inquire about your construction and infrastructure services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <span className="hidden md:block mr-3 px-3 py-1.5 bg-rr-navy-deep text-rr-cream text-xs font-medium rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-white/10">
        Chat on WhatsApp
        <span className="block text-[10px] text-rr-gold font-mono">+91 99458 65862</span>
      </span>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with RR Constructions on WhatsApp at +91 99458 65862"
        className="relative flex items-center justify-center w-12 h-12 rounded-full shadow-[0_4px_14px_rgba(92,184,92,0.4)] hover:shadow-[0_6px_20px_rgba(92,184,92,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5CB85C]"
      >
        {/* Pulse effect badge */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3 z-10 pointer-events-none">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white"></span>
        </span>

        <img 
          src="/images/whatsapp.svg" 
          alt="WhatsApp" 
          className="w-full h-full object-contain"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
