import { FormEvent, useState } from 'react';
import { Check, Copy, Phone, CheckCircle2 } from 'lucide-react';

interface FormState {
  name: string;
  organization: string;
  email: string;
  phone: string;
  focus: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  organization: '',
  email: '',
  phone: '',
  focus: 'Agricultural Consultancy',
  message: '',
};

const FOCUS_OPTIONS = [
  'Agricultural Consultancy',
  'Sustainable Farming Practices',
  'Technology Integration',
  'Value Chains Optimization',
  'Global Operations & Expansion',
];

export function ConsultationSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const phoneNumber = '+243994933267';

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopiedPhone(true);
      window.setTimeout(() => setCopiedPhone(false), 2200);
    } catch {
      setCopiedPhone(false);
    }
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) {
      nextErrors.name = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      nextErrors.email = 'Please enter a contact email address.';
    } else if (!emailRegex.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (form.phone.trim() && !/^[+\d\s()-]{7,20}$/.test(form.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = 'Please share a brief overview of your farming or value-chain goals (at least 10 characters).';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    setSubmittedData(form);
    setForm(INITIAL_FORM);
    setErrors({});
  };

  return (
    <section
      id="contact"
      aria-labelledby="why-zalia-heading"
      className="bg-[#18221A] text-white py-16 sm:py-20 lg:py-24 border-t border-[#263529]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left column: Direct prompt callout + telephone action */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs sm:text-sm font-medium tracking-wide text-[#95C99D]">
              Why Zalia Africa
            </p>

            <h2
              id="why-zalia-heading"
              className="font-display text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-white [text-wrap:balance]"
            >
              Ready to elevate your farming operations?
            </h2>

            <p className="text-base text-[#D3DDD5] leading-relaxed max-w-md">
              Get in touch with Zalia Africa for a consultation and discover how we can help you
              achieve your agricultural goals.
            </p>

            <div className="pt-2 space-y-3">
              <p className="text-xs font-medium text-[#A8B9AB]">Direct Consultation Line</p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-medium tabular-nums text-white border border-[#95C99D]/55 hover:border-white hover:bg-white/10 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Phone className="w-4 h-4 text-[#95C99D]" aria-hidden="true" />
                  <span>{phoneNumber}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  aria-label="Copy consultation phone number"
                  className="inline-flex items-center gap-2 px-4 py-3 text-xs font-medium text-[#D3DDD5] hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#95C99D]" aria-hidden="true" />
                      <span>Number Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-medium text-white mb-1">Global Network</p>
                <p className="text-[#B8C6BA] leading-relaxed">
                  Americas, Europe, Africa, and South Asia
                </p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Corporate Operations</p>
                <p className="text-[#B8C6BA] leading-relaxed">
                  Registered in Estonia · Digital-first global management
                </p>
              </div>
            </div>
          </div>

          {/* Right column: Validated consultation inquiry form */}
          <div className="lg:col-span-7 bg-[#FAFBF9] text-[#151D17] rounded-xl border border-[#E2E6E0] p-6 sm:p-8 lg:p-10">
            {submittedData ? (
              <div className="py-6 space-y-5" role="status" aria-live="polite">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#2E7E3A]/10 text-[#2E7E3A]">
                  <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-semibold text-[#151D17]">
                    Consultation Request Received
                  </h3>
                  <p className="text-sm sm:text-base text-[#4A554C] leading-relaxed max-w-lg">
                    Thank you, {submittedData.name}. Our advisory desk has logged your inquiry
                    regarding <span className="font-medium text-[#151D17]">{submittedData.focus}</span>{' '}
                    and will reach out to{' '}
                    <span className="font-medium text-[#151D17]">{submittedData.email}</span>.
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSubmittedData(null)}
                    className="px-4 py-2.5 text-sm font-medium text-white bg-[#2E7E3A] hover:bg-[#23622D] rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="px-4 py-2.5 text-sm font-medium text-[#151D17] border border-[#D4DBD3] hover:bg-[#F2F4F1] rounded-lg transition-colors tabular-nums"
                  >
                    Call {phoneNumber}
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="space-y-1">
                  <h3 className="font-display text-2xl font-semibold text-[#151D17]">
                    Request an Advisory Consultation
                  </h3>
                  <p className="text-sm text-[#4A554C]">
                    Share your operational priorities and our multidisciplinary team will respond.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="consultation-name"
                      className="block text-xs font-medium text-[#2A352C] mb-1.5"
                    >
                      Full Name <span className="text-[#B42318]">*</span>
                    </label>
                    <input
                      id="consultation-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g., Amara Okafor"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D4DBD3] rounded-lg text-[#151D17] placeholder:text-[#7B877D] focus:outline-none focus:border-[#2E7E3A] focus:ring-2 focus:ring-[#2E7E3A]/20"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-[#B42318]">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="consultation-org"
                      className="block text-xs font-medium text-[#2A352C] mb-1.5"
                    >
                      Farm or Organization
                    </label>
                    <input
                      id="consultation-org"
                      type="text"
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      placeholder="e.g., Highland Producers Cooperative"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D4DBD3] rounded-lg text-[#151D17] placeholder:text-[#7B877D] focus:outline-none focus:border-[#2E7E3A] focus:ring-2 focus:ring-[#2E7E3A]/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="consultation-email"
                      className="block text-xs font-medium text-[#2A352C] mb-1.5"
                    >
                      Email Address <span className="text-[#B42318]">*</span>
                    </label>
                    <input
                      id="consultation-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@organization.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D4DBD3] rounded-lg text-[#151D17] placeholder:text-[#7B877D] focus:outline-none focus:border-[#2E7E3A] focus:ring-2 focus:ring-[#2E7E3A]/20"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-[#B42318]">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="consultation-phone"
                      className="block text-xs font-medium text-[#2A352C] mb-1.5"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      id="consultation-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+243 ..."
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D4DBD3] rounded-lg text-[#151D17] placeholder:text-[#7B877D] focus:outline-none focus:border-[#2E7E3A] focus:ring-2 focus:ring-[#2E7E3A]/20"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-[#B42318]">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="consultation-focus"
                    className="block text-xs font-medium text-[#2A352C] mb-1.5"
                  >
                    Primary Consultancy Focus
                  </label>
                  <select
                    id="consultation-focus"
                    value={form.focus}
                    onChange={(e) => setForm({ ...form, focus: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D4DBD3] rounded-lg text-[#151D17] focus:outline-none focus:border-[#2E7E3A] focus:ring-2 focus:ring-[#2E7E3A]/20"
                  >
                    {FOCUS_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="consultation-message"
                    className="block text-xs font-medium text-[#2A352C] mb-1.5"
                  >
                    Operational Goals & Project Context <span className="text-[#B42318]">*</span>
                  </label>
                  <textarea
                    id="consultation-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your agricultural sector, current acreage or value chain stage, and key challenges..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D4DBD3] rounded-lg text-[#151D17] placeholder:text-[#7B877D] focus:outline-none focus:border-[#2E7E3A] focus:ring-2 focus:ring-[#2E7E3A]/20 resize-y"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-[#B42318]">{errors.message}</p>
                  )}
                </div>

                <div className="pt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <button
                    type="submit"
                    className="px-6 py-3 text-sm font-medium text-white bg-[#2E7E3A] hover:bg-[#23622D] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E7E3A]"
                  >
                    Submit Consultation Request
                  </button>
                  <p className="text-xs text-[#59645B]">
                    Or call directly at{' '}
                    <a
                      href={`tel:${phoneNumber}`}
                      className="font-medium text-[#151D17] underline decoration-[#2E7E3A]/40 hover:decoration-[#2E7E3A] tabular-nums"
                    >
                      {phoneNumber}
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
