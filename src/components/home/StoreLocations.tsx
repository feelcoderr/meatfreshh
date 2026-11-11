import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { storeLocations } from "../../data/locations";

export default function StoreLocations() {
  return (
    <section
      id="locations"
      className="bg-warm-white py-16 sm:py-20 lg:py-24 border-b border-charcoal/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-burgundy text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3">
            In-Store Experience
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal mb-4">
            Come Visit MeatFreshh.
          </h2>
          <p className="text-charcoal/60 text-base sm:text-lg max-w-2xl mx-auto">
            Prefer shopping in person? Visit your nearest MeatFreshh store and
            explore our selection of fresh chicken and mutton.
          </p>
        </motion.div>

        {/* Store Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {storeLocations.map((location, idx) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal/10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-burgundy/10 flex items-center justify-center text-burgundy">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-charcoal">
                        {location.city}
                      </h3>
                      <p className="text-xs text-charcoal/50 font-medium">
                        {location.state}, India
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-sage/10 text-sage text-xs font-semibold rounded-full">
                    Retail & Delivery
                  </span>
                </div>

                <div className="space-y-3.5 my-6">
                  {/* <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-burgundy mt-1 shrink-0" />
                    <p className="text-sm text-charcoal/70 leading-snug">
                      {location.address}
                    </p>
                  </div> */}

                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-burgundy shrink-0" />
                    <p className="text-sm text-charcoal/70">{location.phone}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-burgundy shrink-0" />
                    <p className="text-sm text-charcoal/70">{location.hours}</p>
                  </div>
                </div>
              </div>

              {/* <div className="pt-5 border-t border-charcoal/5">
                {location.mapsUrl && location.mapsUrl !== '#' ? (
                  <a
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-charcoal text-white text-sm font-semibold rounded-xl hover:bg-charcoal/90 transition-all shadow-sm"
                  >
                    <span>Get Store Directions</span>
                    <ExternalLink size={15} />
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-charcoal/5 text-charcoal/40 text-sm font-semibold rounded-xl cursor-not-allowed"
                  >
                    <span>Directions Available Soon</span>
                  </button>
                )}
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
