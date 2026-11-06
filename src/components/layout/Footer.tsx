import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { footerShopLinks, footerCompanyLinks, footerSupportLinks } from '../../data/navigation';
import { storeLocations } from '../../data/locations';
import { openWhatsAppChat } from '../../utils/whatsapp';
import { ProductCategory } from '../../types/product';

interface FooterProps {
  onSelectCategory?: (category: ProductCategory) => void;
}

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

export default function Footer({ onSelectCategory }: FooterProps) {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleShopLinkClick = (link: { href: string; filter?: string }) => {
    if (onSelectCategory) {
      if (link.filter === 'chicken' || link.filter === 'chicken-boneless') {
        onSelectCategory('chicken');
        return;
      }
      if (link.filter === 'mutton' || link.filter === 'mutton-boneless') {
        onSelectCategory('mutton');
        return;
      }
      if (link.filter === 'eggs' || link.filter === 'family-packs') {
        onSelectCategory('eggs');
        return;
      }
    }
    const el = document.querySelector(link.href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-ivory/80">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="block mb-4 group cursor-pointer"
            >
              <div className="font-heading text-2xl font-extrabold tracking-tight leading-none mb-2">
                <span className="text-[#a04a52]">Meat</span>
                <span className="text-[#75836C]">Freshh</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-ivory/60 lowercase">by</span>
                <div className="bg-white rounded-md px-2 py-0.5 inline-flex items-center shadow-sm">
                  <img
                    src="/images/seafreshh-logo-cropped.png"
                    alt="SeaFreshh"
                    className="h-3.5 w-auto object-contain"
                  />
                </div>
              </div>
            </a>
            <p className="text-sm text-ivory/70 font-semibold italic mb-3">
              {siteConfig.brand.tagline}
            </p>
            <p className="text-sm text-ivory/50 leading-relaxed">
              {siteConfig.brand.description}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-5">
              {siteConfig.social.instagram ? (
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/10 hover:bg-burgundy rounded-xl transition-all text-white" aria-label="Instagram">
                  <InstagramIcon />
                </a>
              ) : (
                <span className="p-2.5 bg-white/5 rounded-xl cursor-default text-white/30" title="Coming soon">
                  <InstagramIcon />
                </span>
              )}
              {siteConfig.social.facebook ? (
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/10 hover:bg-burgundy rounded-xl transition-all text-white" aria-label="Facebook">
                  <FacebookIcon />
                </a>
              ) : (
                <span className="p-2.5 bg-white/5 rounded-xl cursor-default text-white/30" title="Coming soon">
                  <FacebookIcon />
                </span>
              )}
              {siteConfig.social.youtube ? (
                <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/10 hover:bg-burgundy rounded-xl transition-all text-white" aria-label="YouTube">
                  <YoutubeIcon />
                </a>
              ) : (
                <span className="p-2.5 bg-white/5 rounded-xl cursor-default text-white/30" title="Coming soon">
                  <YoutubeIcon />
                </span>
              )}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {footerShopLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleShopLinkClick(link)}
                    className="text-sm text-ivory/60 hover:text-burgundy-light transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerCompanyLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-ivory/60 hover:text-burgundy-light transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2.5">
              {footerSupportLinks.map((link) => (
                <li key={link.label}>
                  {link.label === 'WhatsApp Support' ? (
                    <button
                      onClick={openWhatsAppChat}
                      className="text-sm text-ivory/60 hover:text-burgundy-light transition-colors flex items-center gap-1.5"
                    >
                      <MessageCircle size={14} />
                      {link.label}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm text-ivory/60 hover:text-burgundy-light transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Locations
            </h4>
            <ul className="space-y-3">
              {storeLocations.map((loc) => (
                <li key={loc.id} className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-burgundy-light" />
                  <div>
                    <p className="text-sm text-ivory/80 font-semibold">{loc.city}, {loc.state}</p>
                    {loc.phone && loc.phone !== '+91 XXXXX XXXXX' ? (
                      <p className="text-xs text-ivory/50 flex items-center gap-1 mt-0.5">
                        <Phone size={10} />
                        {loc.phone}
                      </p>
                    ) : (
                      <p className="text-xs text-ivory/40 mt-0.5">Physical store & local delivery</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ivory/40">
            © {siteConfig.legal.copyrightYear} MeatFreshh by SeaFreshh. All Rights Reserved.
          </p>
          {siteConfig.legal.fssaiLicense && (
            <p className="text-xs text-ivory/30">
              FSSAI Lic. No: {siteConfig.legal.fssaiLicense}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
