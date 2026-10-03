"use client";

import { useEffect, useMemo, useState } from "react";
import { X, Minus, Plus, CheckCircle2 } from "lucide-react";
import { ROOMS } from "../data/content";
import { STR, type Lang } from "../data/i18n";

type Errors = Partial<
  Record<"checkIn" | "checkOut" | "name" | "email" | "phone", string>
>;

function makeRef() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return `TRL-${s}`;
}

export default function BookingModal({
  open,
  onClose,
  initialRoom,
  lang,
}: {
  open: boolean;
  onClose: () => void;
  initialRoom?: string;
  lang: Lang;
}) {
  const t = STR[lang];
  const [room, setRoom] = useState(ROOMS[0].name);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [ref, setRef] = useState<string | null>(null);

  // Reset on open; escape to close; lock scroll
  useEffect(() => {
    if (!open) return;
    setRef(null);
    setErrors({});
    if (initialRoom && ROOMS.some((r) => r.name === initialRoom))
      setRoom(initialRoom);
  }, [open, initialRoom]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const ms = new Date(checkOut).getTime() - new Date(checkIn).getTime();
    return Math.round(ms / 86400000);
  }, [checkIn, checkOut]);

  if (!open) return null;

  const submit = () => {
    const e: Errors = {};
    if (!checkIn) e.checkIn = t.booking.errIn;
    if (!checkOut) e.checkOut = t.booking.errOut;
    else if (nights <= 0) e.checkOut = t.booking.errOrder;
    if (!name.trim()) e.name = t.booking.errName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      e.email = t.booking.errEmail;
    if (!phone.trim()) e.phone = t.booking.errPhone;
    setErrors(e);
    if (Object.keys(e).length === 0) setRef(makeRef());
  };

  const inputCls =
    "w-full border border-sand/70 bg-white/70 px-3.5 py-2.5 text-sm text-stone outline-none transition-colors placeholder:text-stone/35 focus:border-terracotta";

  const stepper = (
    label: string,
    value: number,
    set: (n: number) => void,
    min: number,
    max: number
  ) => (
    <div className="flex items-center justify-between border border-sand/70 bg-white/70 px-3.5 py-2">
      <span className="text-sm text-stone">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label={`Decrease ${label}`}
          onClick={() => set(Math.max(min, value - 1))}
          className="p-1 text-bark transition-colors hover:text-terracotta disabled:opacity-30"
          disabled={value <= min}
        >
          <Minus className="h-4 w-4" strokeWidth={1.5} />
        </button>
        <span className="w-5 text-center text-sm font-semibold tabular-nums text-stone">
          {value}
        </span>
        <button
          type="button"
          aria-label={`Increase ${label}`}
          onClick={() => set(Math.min(max, value + 1))}
          className="p-1 text-bark transition-colors hover:text-terracotta disabled:opacity-30"
          disabled={value >= max}
        >
          <Plus className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );

  const nightWord = nights > 1 ? t.booking.nights : t.booking.night;
  const guestWord =
    adults + children > 1 ? t.booking.guests : t.booking.guest;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-stone/60 backdrop-blur-[2px] sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t.booking.quick}
    >
      <div
        className="modal-panel max-h-[92svh] w-full max-w-lg overflow-y-auto bg-cream"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-sand/60 px-6 py-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-eyebrow text-terracotta">
              {t.booking.quick}
            </p>
            <h3 className="font-display text-xl font-medium text-stone">
              {ref ? t.booking.received : t.booking.planTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label={t.booking.closeBooking}
            className="p-1.5 text-stone transition-colors hover:text-terracotta"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {ref ? (
          /* Confirmation — Flow A step 5 */
          <div className="px-6 py-8 text-center">
            <CheckCircle2
              className="pop-in mx-auto h-12 w-12 text-olive"
              strokeWidth={1.25}
            />
            <p className="mt-4 font-display text-2xl text-stone">
              {t.booking.thanks(name.split(" ")[0])}
            </p>
            <p className="mx-auto mt-2 max-w-sm text-sm font-light leading-relaxed text-stone/75">
              {t.booking.summary(
                room,
                checkIn,
                checkOut,
                nights,
                adults + children
              )}
            </p>
            <p className="mx-auto mt-5 w-fit border border-dashed border-terracotta/60 bg-white/60 px-6 py-3 text-sm font-semibold tracking-[0.15em] text-bark">
              {ref}
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full bg-bark py-3.5 text-[13px] font-semibold tracking-[0.05em] text-cream transition-colors hover:bg-terracotta"
            >
              {t.booking.done}
            </button>
          </div>
        ) : (
          <div className="space-y-4 px-6 py-6">
            <div>
              <label htmlFor="bk-room" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.12em] text-stone/70">
                {t.booking.room}
              </label>
              <select
                id="bk-room"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className={inputCls}
              >
                {ROOMS.map((r) => (
                  <option key={r.slug} value={r.name}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="bk-in" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.12em] text-stone/70">
                  {t.booking.checkIn}
                </label>
                <input
                  id="bk-in"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className={inputCls}
                />
                {errors.checkIn && (
                  <p className="mt-1 text-xs text-terracotta">{errors.checkIn}</p>
                )}
              </div>
              <div>
                <label htmlFor="bk-out" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.12em] text-stone/70">
                  {t.booking.checkOut}
                </label>
                <input
                  id="bk-out"
                  type="date"
                  value={checkOut}
                  min={checkIn || undefined}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className={inputCls}
                />
                {errors.checkOut && (
                  <p className="mt-1 text-xs text-terracotta">{errors.checkOut}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {stepper(t.booking.adults, adults, setAdults, 1, 6)}
              {stepper(t.booking.children, children, setChildren, 0, 4)}
            </div>

            <div>
              <label htmlFor="bk-name" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.12em] text-stone/70">
                {t.booking.fullName}
              </label>
              <input
                id="bk-name"
                type="text"
                autoComplete="name"
                placeholder={t.booking.namePh}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputCls}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-terracotta">{errors.name}</p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="bk-email" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.12em] text-stone/70">
                  {t.booking.email}
                </label>
                <input
                  id="bk-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputCls}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-terracotta">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="bk-phone" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.12em] text-stone/70">
                  {t.booking.phone}
                </label>
                <input
                  id="bk-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+66 ..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputCls}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-terracotta">{errors.phone}</p>
                )}
              </div>
            </div>

            {nights > 0 && (
              <p className="border border-sand/60 bg-white/50 px-4 py-2.5 text-center text-[13px] font-medium text-stone">
                {nights} {nightWord} · {adults + children} {guestWord} · {room}
              </p>
            )}

            <button
              onClick={submit}
              className="w-full bg-bark py-3.5 text-[13px] font-semibold tracking-[0.05em] text-cream transition-colors hover:bg-terracotta"
            >
              {t.booking.confirm}
            </button>
            <p className="text-center text-[11px] font-light text-stone/50">
              {t.booking.note}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
