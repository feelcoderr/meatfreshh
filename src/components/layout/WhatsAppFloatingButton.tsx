import { MessageCircle } from 'lucide-react';
import { openWhatsAppChat } from '../../utils/whatsapp';

export default function WhatsAppFloatingButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50 group">
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-charcoal text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
        Need help? Chat with us.
        <div className="absolute top-full right-4 w-2 h-2 bg-charcoal rotate-45 -mt-1" />
      </div>

      <button
        onClick={openWhatsAppChat}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center whatsapp-pulse hover:scale-105"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={26} fill="white" />
      </button>
    </div>
  );
}
